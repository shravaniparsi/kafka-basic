const connection = new require("./kafka/Connection");
const Books = require("./services/books.js");

const handleTopicRequest = (topic_name, fname) => {
  // initiate producer and consumer
  const consumer = connection.getConsumer(topic_name);
  const producer = connection.getProducer();

  consumer.on("message", (message) => {
    const data = JSON.parse(message.value);

    const resultAfterExecutingService = fname.handle_request(data.data);

    const payloads = [
      {
        topic: data.replyTo,
        messages: JSON.stringify({
          correlationId: data.correlationId,
          data: resultAfterExecutingService,
        }),
        partition: 0,
      },
    ];

    producer.send(payloads, (err, data) => {
      console.log(data);
    });
  });
};

// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("post_book", Books);
