// Module ID: 1050
// Function ID: 1051
// Name: graphqlIntegration
// Dependencies: [900]
// Exports: graphqlIntegration

// Module 1050 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;


export const graphqlIntegration = function graphqlIntegration(endpoints) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj2);
};
