// Module ID: 1043
// Function ID: 1044
// Name: graphqlIntegration
// Dependencies: [893]
// Exports: graphqlIntegration

// Module 1043 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 893 */;

require = arg1;
const dependencyMap = arg6;

export const graphqlIntegration = function graphqlIntegration(endpoints) {
  return feedbackAsyncIntegration.graphqlClientIntegration({ endpoints: endpoints.endpoints });
};
