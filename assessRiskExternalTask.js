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
  
  // subscribe to the topic: 'invoiceCreator'
  client.subscribe("assessRisk", async function({ task, taskService }) {
      
  
  console.log("topic assessRisk is hit");
  



  var a = "{    \"OrigMessageTmst\": \"2022-02-22-10:35:50:501994\",    \"ImportDecID\": \"AAA000111\",    \"ImportDecVersion\": \"1\",    \"ImporterRef\": \"IMPREFEG10001\",    \"BrokerRef\": \"BRKREFEG10001\",    \"TotalLines\": \"1\",    \"TotalTransportLines\": \"1\",    \"TotalCustomsValueAmt\": \"99999.99\",    \"AQCTS\": {},    \"AQISInspectionLocName\": \"\",    \"DestPort\": \"AUMEL\",    \"DocumentName\": \"FID\",    \"LQS\": {        \"LQG\": [            {                \"LodgementQuestionID\": \"6\",                \"LodgementQuestionAnswer\": \"Y\",                \"ValidationResp\": \"N\"            },            {                \"LodgementQuestionID\": \"7\",                \"LodgementQuestionAnswer\": \"Y\",                \"ValidationResp\": \"N\"            }        ]    },    \"GoodsDelivered\": \"N\",    \"HEVS\": [        {            \"HEVG\": {                \"HEventType\": \"CPMATCH\",                \"HEventTypeID1\": \"10030613\",                \"HEventTypeID2\": \"18\",                \"HTSKS\": {                    \"HTSKG\": {                        \"HTaskId\": \"212941632590471\",                        \"HTaskProfileReason\": \"AQQTPOTENT\",                        \"HTaskProfileSubReason\": \"POTENTIAL\",                        \"HASMS\": {                            \"HASMG\": {                                \"HAssessmentCreateTmst\": \"2021-10-21-16:32:59:048985\",                                \"HAssessmentType\": \"SENT AQIS\"                            }                        }                    }                }            }        }    ],    \"BranchID\": \"QEG01AA\",    \"BranchName\": \"BROKERAGE BRANCH EXAMPLE NAME\",    \"BranchAddr1\": \"1 NOTAREAL RD\",    \"BranchAddr2\": \"\",    \"BranchLocality\": \"Sydney\",    \"BranchState\": \"NSW\",    \"BranchPostCode\": \"2000\",    \"BranchCntryCode\": \"AU\",    \"BranchPhoneNo\": \"0299999999\",    \"BranchFaxNo\": \"\",    \"BranchEMail\": \"someone@awe.gov.au\",    \"BrokerLicenceNo\": \"223344\",    \"BrokerName\": \"JOE EXAMPLE\",    \"BrokerAddr1\": \"\",    \"BrokerAddr2\": \"\",    \"BrokerLocality\": \"\",    \"BrokerState\": \"\",    \"BrokerPostCode\": \"\",    \"BrokerCntryCode\": \"\",    \"BrokerPhoneNo\": \"\",    \"BrokerFaxNo\": \"\",    \"BrokerEMail\": \"\",    \"BrokerageABN\": \"34190894983\",    \"BrokerageCAC\": \"1\",    \"BrokerageID\": \"\",    \"BrokerageName\": \"BROKERAGE EXAMPLE NAME\",    \"CorporateLicenceNo\": \"00000C\",    \"ImporterABN\": \"34190894983\",    \"ImporterCAC\": \"1\",    \"ImporterID\": \"\",    \"ImporterName\": \"JANE EXAMPLE\",    \"ImporterAddr1\": \"7 London Circuit\",    \"ImporterAddr2\": \"\",    \"ImporterLocality\": \"Canberra\",    \"ImporterState\": \"ACT\",    \"ImporterPostCode\": \"2601\",    \"ImporterCntryCode\": \"AU\",    \"ImporterPhoneNo\": \"0262720000\",    \"ImporterFaxNo\": \"\",    \"ImporterEMail\": \"someone.else@agriculture.gov.au\",    \"TransportMode\": \"SEA\",    \"PortofLoading\": \"CNSHK\",    \"PortofDischarge\": \"AUMEL\",    \"FirstPortofArrival\": \"AUSYD\",    \"DateofArrival\": \"20211024\",    \"FirstDateofArrival\": \"20211019\",    \"DeliveryName\": \"EXAMPLE WAREHOUSE\",    \"DeliveryAddr1\": \"75 NOWHERE ROAD\",    \"DeliveryAddr2\": \"\",    \"DeliveryLocality\": \"CANBERRA\",    \"DeliveryState\": \"ACT\",    \"DeliveryPostCode\": \"2601\",    \"DeliveryCntryCode\": \"AU\",    \"VoyageNo\": \"111E\",    \"VesselID\": \"9227778\",    \"VesselName\": \"BIG VESSEL AU EXAMPLE 1\",    \"MarksandNumbers\": \"\",    \"BiconData\": [        {            \"BiconUrl\": \"https:\/\/bicon.agriculture.gov.au\/BiconWeb4.0\/ImportConditions\/Conditions?EvaluatableElementId=622973&Path=UNDEFINED&UserContext=External&EvaluationStateId=5ac9096e-d197-48df-9c81-5279c5e02315&CaseElementPk=1748670&EvaluationPhase=ImportDefinition&HasAlerts=True&HasChangeNotices=False&IsAEP=False\",            \"ImportConditions\": [                {                    \"ConditionType\": \"ImportRequirement\",                    \"Condition\": \"PhytosanitaryCertificate\",                    \"ConditionCategory\": \"eCert\",                    \"Mandatory\": \"yes\",                    \"MediaEvidence\": \"no\",                    \"InputCategory\": \"InputValue\",                    \"FieldsToCheck\": [                        {                            \"FieldName\": \"countryOfOrigin\",                            \"FieldValue\": \"\"                        },                        {                            \"FieldName\": \"importingCountry\",                            \"FieldValue\": \"\"                        },                        {                            \"FieldName\": \"packageDescription\",                            \"FieldValue\": \"\"                        },                        {                            \"FieldName\": \"declaredModeofTransport\",                            \"FieldValue\": \"\"                        },                        {                            \"FieldName\": \"declaredPointOfEntry\",                            \"FieldValue\": \"\"                        },                        {                            \"FieldName\": \"scientificName\",                            \"FieldValue\": \"\"                        },                        {                            \"FieldName\": \"commonName\",                            \"FieldValue\": \"\"                        },                        {                            \"FieldName\": \"goodsQuantity\",                            \"FieldValue\": \"\"                        },                        {                            \"FieldName\": \"issueDate\",                            \"FieldValue\": \"\"                        }                    ]                },                {                    \"ConditionType\": \"NonCommodity\",                    \"Condition\": \"Invoice\",                    \"ConditionCategory\": \"additional\",                    \"Mandatory\": \"yes\",                    \"MediaEvidence\": \"yes\",                    \"InputCategory\": \"Document\",                    \"FieldsToCheck\": [                        {                            \"FieldName\": \"declarationText\",                            \"FieldValue\": \"This is to certify that the plants, plant products or other regulated articles described herein have been inspected and\/or tested according to appropriate official procedures and are considered to be free from the quarantine pests specified by the importing contracting party and to conform with the current phytosanitary requirements of the importing contracting party, including those for regulated non-quarantine pests\"                        }                    ]                }            ]        }    ],    \"PPCNS\": [],    \"Lines\": {        \"Line\": [            {                \"LineNo\": \"1\",                \"NatureType\": \"N10\",                \"GdsDescr\": \"avocado\",                \"TariffClassNo\": 44219100,                \"QTYS\": {                    \"QTYG\": [                        {                            \"Qty\": \"71900.00000\",                            \"QtyUnit\": \"NO\"                        }                    ]                },                \"StatCode\": \"20\",                \"VINS\": {},                \"GOCS\": {                    \"GOCG\": [                        {                            \"GdsOriginCntryCode\": \"NZ\"                        }                    ]                },                \"SupplierID\": \"CEL000001EG\",                \"SupplierName\": \"SUPPLIER NAME EXAMPLE 1\",                \"SupplierAddr1\": \"SOMEWHERE ON PLANET EARTH\",                \"SupplierAddr2\": \"\",                \"SupplierLocality\": \"\",                \"SupplierState\": \"\",                \"SupplierPostCode\": \"\",                \"SupplierCntryCode\": \"NZ\",                \"SupplierPhoneNo\": \"\",                \"SupplierFaxNo\": \"\",                \"SupplierEMail\": \"\",                \"AQPKS\": {                    \"AQPKG\": [                        {                            \"AQISPkgType\": \"1\",                            \"AQISPkgCnt\": 400                        }                    ]                },                \"AQDDS\": {                    \"AQDDG\": [                        {                            \"AQISDocType\": \"\",                            \"AQISDocNo\": \"\"                        }                    ]                },                \"AQCCS\": {},                \"AQEIS\": {                    \"AQEIG\": [                        {                            \"AQISEntID\": \"CN0000MB\"                        }                    ]                },                \"AQPTS\": {},                \"AQPCS\": {},                \"AQCNS\": {                    \"AQCNG\": [                        {                            \"AQISContNo\": \"SEKU4665902\"                        }                    ]                },                \"AQPNS\": {},                \"CPRLS\": {                    \"CPRLG\": [                        {                            \"CPRiskID\": \"368\",                            \"CPProfileNo\": \"10030613\",                            \"CPProfileVersion\": \"18\",                            \"CPAnswer\": \"Y\",                            \"CPPermitNo\": \"\",                            \"CPSelPercentage\": \"100.000\",                            \"CPQtyPercentage\": \"0.000\",                            \"CPRiskType\": \"AQQTPOTENT\",                            \"CPAQISInspCategory\": \"\",                            \"CPAQISProdReqInd\": \"N\",                            \"CPPermitApplicableInd\": \"N\",                            \"CPPermitType\": \"\",                            \"CPSelType\": \"POTENTIAL\"                        },                        {                            \"CPRiskID\": \"606\",                            \"CPProfileNo\": \"10073065\",                            \"CPProfileVersion\": \"2\",                            \"CPAnswer\": \"N\",                            \"CPPermitNo\": \"\",                            \"CPSelPercentage\": \"100.000\",                            \"CPQtyPercentage\": \"0.000\",                            \"CPRiskType\": \"AQQTPOTENT\",                            \"CPAQISInspCategory\": \"\",                            \"CPAQISProdReqInd\": \"N\",                            \"CPPermitApplicableInd\": \"N\",                            \"CPPermitType\": \"\",                            \"CPSelType\": \"POTENTIAL\"                        }                    ]                }            }        ]    },    \"TaskList\": [        {            \"ConditionType\": \"ImportRequirement\",            \"Condition\": \"PhytosanitaryCertificate\",            \"ConditionCategory\": \"eCert\",            \"Mandatory\": \"yes\",            \"MediaEvidence\": \"no\",            \"InputCategory\": \"InputValue\",            \"Status\": \"\",            \"Value\": \"NYPD\/1234\/653842\"        },        {            \"ConditionType\": \"NonCommodity\",            \"Condition\": \"Invoice\",            \"ConditionCategory\": \"additional\",            \"Mandatory\": \"yes\",            \"MediaEvidence\": \"yes\",            \"InputCategory\": \"Document\",            \"Status\": \"\",            \"Value\": \"http:\/\/document.url\"        }    ],    \"Documents\":[        {            \"DocumentType\" : \"eCert\",            \"DocumentData\" : {                 \"CertNumber\" : \"NZL2022\/123\/45678\",                \"CertType\" : \"NZPHYTO\",                \"Class\" : \"Fruit\",                \"Subclass\": \"Fresh\",                \"ShippingMarks\" : \"086-123456\",                \"ProductOrigin\" : \"NZ\",                \"Treatment\" : \"ABC\",                \"PackageDetails\" : \"600 Tray\",                \"Weight\": 1000,                \"UnitofWeight\": \"1000\",                \"Quantity\": 300,                \"UnitOfQuantity\": \"EA\",                \"DateOfIssue\": \"30\/03\/2022\",                \"ExporterName\": \"Sample Exporter\",                \"ExporterAddress\":\"123 Test Street Auckland 2022 New Zealand\" ,                \"ConsigneeName\": \"Australian Importer\" ,                \"ConsigneeAddress\": \"57 Athoon Drive Greenway ACT 2900\",                \"ExportingCountry\": \"NZ\",                \"ImportingCountry\": \"AU\",                \"LoadingPort\": \"Auckland\",                \"DeclaredPointOfEntry\": \"Perth\" ,                \"InspectionPort\": \"Perth\",                 \"TransportMode\": \"SEA\",                \"ScientificOrCommonName\": \"Avocado\",                \"Declaration\" : \"This is to certify that the plants, plant products or other regulated articles described herein have been inspected and\/or tested according to appropriate official procedures and are considered to be free from the quarantine pests specified by the importing contracting party and to conform with the current phytosanitary requirements of the importing contracting party, including those for regulated non-quarantine pests.\"                }            }        ],    \"TLNS\": {        \"TLNG\": [            {                \"CargoType\": \"FCL\",                \"ContainerNo\": \"SEKU4665902\",                \"HouseAirWaybill\": \"\",                \"ConsignmentRef\": \"\",                \"MasterAirWaybill\": \"\",                \"HouseBill\": \"HAWB0000000001\",                \"OceanBill\": \"OBOL0000000001\",                \"MarksandNumbers\": \"\"            }        ]    }}"
  //var context = task.variables.get("context")
  //let data = JSON.parse(a)

  var dataInput = task.variables.getAll()
  var context = dataInput.context

  let data = a;
  
  //const data = JSON.stringify(caseData)
  
  const axios = require('axios')

switch (context) {
    case "assessRisk" :
axios
  .post('https://biosecurityruleexecutor.azurewebsites.net/api/BioSecurityRuleExecutor?operation=assessRisk', data)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
    const processVariables = new Variables();
      // processVariables.set("cases",JSON.parse(respData).id);
      processVariables.set("overallRiskStatus",res.data.overallStatus);
      processVariables.set("ruleDetails",res.data.validations.ruleDetails);
      processVariables.set("riskRating",res.data.riskRating);
      processVariables.set("overallRiskAssessStep", "STEP S2");

      taskService.complete(task, processVariables);
  })
  .catch(error => {
    console.error(error)
  })
  break;

  case "assessRiskAtBrorder" :
axios
  .post('https://biosecurityruleexecutor.azurewebsites.net/api/BioSecurityRuleExecutor?operation=assessRiskAtBroder', data)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
    const processVariables = new Variables();
      // processVariables.set("cases",JSON.parse(respData).id);
      processVariables.set("overallRiskStatus",res.data.overallStatus);
      processVariables.set("ruleDetails",res.data.validations.ruleDetails);
      processVariables.set("riskRating",res.data.riskRating);
      processVariables.set("overallRiskAssessStep", "STEP S3");

      taskService.complete(task, processVariables);
  })
  .catch(error => {
    console.error(error)
  })
  break;

    default:

  axios
  .post('https://biosecurityruleexecutor.azurewebsites.net/api/BioSecurityRuleExecutor?operation=assessRisk', data)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
    const processVariables = new Variables();
      // processVariables.set("cases",JSON.parse(respData).id);
      processVariables.set("overallRiskStatus",res.data.overallStatus);
      processVariables.set("ruleDetails",res.data.validations.ruleDetails);
      processVariables.set("riskRating",res.data.riskRating);
      processVariables.set("overallRiskAssessStep", context)

      taskService.complete(task, processVariables);
  })
  .catch(error => {
    console.error(error)
  })

}
  
  console.log("This topic ended");
  
});