// Module ID: 1036
// Function ID: 1037
// Name: graphqlIntegration
// Dependencies: [886]
// Exports: graphqlIntegration

// Module 1036 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 886 */;


export function graphqlIntegration(endpoints) {
  const obj = feedbackAsyncIntegration;
  const obj2 = { endpoints: endpoints.endpoints };
  return obj.graphqlClientIntegration(obj2);
}
