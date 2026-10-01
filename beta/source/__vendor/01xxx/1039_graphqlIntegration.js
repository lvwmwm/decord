// Module ID: 1039
// Function ID: 1040
// Name: graphqlIntegration
// Dependencies: [889]
// Exports: graphqlIntegration

// Module 1039 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;


export const graphqlIntegration = function graphqlIntegration(endpoints) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj2);
};
