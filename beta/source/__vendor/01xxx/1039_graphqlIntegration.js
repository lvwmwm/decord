// Module ID: 1039
// Function ID: 1040
// Name: graphqlIntegration
// Dependencies: [889]
// Exports: graphqlIntegration

// Module 1039 (graphqlIntegration)
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;

require = arg1;
const dependencyMap = arg6;

export const graphqlIntegration = function graphqlIntegration(endpoints) {
  return feedbackAsyncIntegration.graphqlClientIntegration({ endpoints: endpoints.endpoints });
};
