const {
  Client,
  logger,
  Variables
} = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://casemanagement-camunda.australiasoutheast.azurecontainer.io:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// subscribe to the topic: 'invoiceCreator'
client.subscribe("getCases", async function({ task, taskService }) {

console.log("topic getCases is hit");

const https = require('https')

const data = JSON.stringify({
  id: '2022033094812'
})

const options = {
  hostname: 'casefunction.azurewebsites.net',
  port: 443,
  path: '/api/readCase',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}
var respData = '';
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
    //respData += d
  })
  res.on('response', d => {
    process.stdout.write(d)
    respData += d
    
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()



console.log("This topic ended");

console.log(respData);

// set a process variable 'winning'
const processVariables = new Variables();
processVariables.set("cases", new Date());

// set a local variable 'winningDate'
const localVariables = new Variables();
localVariables.set("winningDate", new Date());

// complete the task
await taskService.complete(task, processVariables, localVariables);


});