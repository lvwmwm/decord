// Module ID: 1051
// Function ID: 1052
// Name: graphqlIntegration
// Dependencies: [901]
// Exports: graphqlIntegration

// Module 1051 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 901 */;


export const graphqlIntegration = function graphqlIntegration(endpoints) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj2);
};
