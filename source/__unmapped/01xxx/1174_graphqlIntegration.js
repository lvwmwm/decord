// Module ID: 1174
// Function ID: 1175
// Name: graphqlIntegration
// Dependencies: [1024]

// Module 1174 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 1024 */;

require = arg1;
const dependencyMap = arg6;
arg5.graphqlIntegration = function graphqlIntegration(endpoints) {
  let obj = feedbackAsyncIntegration;
  obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};
