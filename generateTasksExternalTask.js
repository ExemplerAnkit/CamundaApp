const {
    Client,
    logger,
    Variables
  } = require("camunda-external-task-client-js");
  
  // configuration for the Client:
  //  - 'baseUrl': url to the Workflow Engine
  //  - 'logger': utility to automatically log important events
  const config = { baseUrl: "http://ccra-casemanagement-camunda-ee.australiasoutheast.azurecontainer.io:8080/engine-rest", use: logger };
  
  // create a Client instance with custom configuration
  const client = new Client(config);
  
  // subscribe to the topic: 'generateTasks'
  client.subscribe("generateTasks", async function({ task, taskService }) {
      
  console.log("topic generateTasks is hit");
  
  console.log(task.processInstanceId);

  var caseIdVal = task.variables.get("caseId")
  
  const { EventGridPublisherClient, AzureKeyCredential } = require("@azure/eventgrid");

  const client = new EventGridPublisherClient(
      "https://eventgridtopicrilprocess.australiasoutheast-1.eventgrid.azure.net/api/events",
      "EventGrid",
      new AzureKeyCredential("hUDTLsZbEDCinO/dqUtfh9WuR4sXRHvh9WDY3FDPFzY=")
  );

  await client.send([
      {
          eventType: "generateTasks",
          subject: "Event Subject",
          dataVersion: "1.0",
          data: {
              context: "assessTaskList",
              caseId: caseIdVal}
      }
  ]);
  
  console.log("This topic ended");


  taskService.complete(task);
  
});