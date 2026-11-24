// Module ID: 1035
// Function ID: 1036
// Name: graphqlIntegration
// Dependencies: [886]
// Exports: graphqlIntegration

// Module 1035 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;


export function graphqlIntegration(endpoints) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj2);
}
