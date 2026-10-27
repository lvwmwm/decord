// Module ID: 1048
// Function ID: 1049
// Name: graphqlIntegration
// Dependencies: [898]
// Exports: graphqlIntegration

// Module 1048 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;


export const graphqlIntegration = function graphqlIntegration(endpoints) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj2);
};
