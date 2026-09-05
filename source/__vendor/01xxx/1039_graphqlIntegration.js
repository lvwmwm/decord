// Module ID: 1039
// Function ID: 1040
// Name: graphqlIntegration
// Dependencies: [889]

// Module 1039 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;

require = arg1;
const dependencyMap = arg6;
arg5.graphqlIntegration = function graphqlIntegration(endpoints) {
  let obj = feedbackAsyncIntegration;
  obj = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj);
};
