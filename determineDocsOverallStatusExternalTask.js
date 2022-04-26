const {
    Client,
    logger,
    Variables
  } = require("camunda-external-task-client-js");

  function isAllCompleted(data){

    for(let i =0; i < data.length; i++){
      if(data[i].status === "Pending"){
      // If any false value was found, return false
        // 
        return false;
      }
    }
    // At this point, no value was found to be false, 
    // because it wouldn't returned false based on the loop block
    return true;
  }
  
  // configuration for the Client:
  //  - 'baseUrl': url to the Workflow Engine
  //  - 'logger': utility to automatically log important events
  const config = { baseUrl: "http://ccra-casemanagement-camunda-ee.australiasoutheast.azurecontainer.io:8080/engine-rest", use: logger };
  
  // create a Client instance with custom configuration
  const client = new Client(config);
  
  // subscribe to the topic: 'generateTasks'
  client.subscribe("determineOverallStatus", async function({ task, taskService }) {
      
  console.log("topic determineOverallStatus is hit");
  
  var data = task.variables.getAll()

  var taskList = data.taskList
  var newDocInfo = data.docInfo

  try {
      if(newDocInfo != null) {
    taskList.forEach(function(docInfo) {
        if(newDocInfo.condition === docInfo.condition){   
            docInfo.status = newDocInfo.status;
        }
    });
  } }
  catch (err) {
      console.log(err.message)
  }

  var ifAllDocsReceived = isAllCompleted(taskList)
  
  const processVariables = new Variables();
  processVariables.set("taskList",taskList);

  processVariables.set("ifAllDocsReceived",ifAllDocsReceived);
  
  console.log("This topic ended");


  taskService.complete(task, processVariables);
  
});