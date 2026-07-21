// Module ID: 5034
// Function ID: 42970
// Name: enableExperimentalWebImplementation
// Dependencies: []
// Exports: enableExperimentalWebImplementation, enableLegacyWebImplementation, isNewWebImplementationEnabled

// Module 5034 (enableExperimentalWebImplementation)
const Platform = require(dependencyMap[0]).Platform;

export const enableExperimentalWebImplementation = function enableExperimentalWebImplementation() {
  console.warn(require(dependencyMap[1]).tagMessage("New web implementation is enabled by default. This function will be removed in Gesture Handler 3."));
};
export const enableLegacyWebImplementation = function enableLegacyWebImplementation() {
  console.warn(require(dependencyMap[1]).tagMessage("Legacy web implementation is deprecated. This function will be removed in Gesture Handler 3."));
};
export function isNewWebImplementationEnabled() {
  return true;
}
