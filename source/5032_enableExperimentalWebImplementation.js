// Module ID: 5032
// Function ID: 42929
// Name: enableExperimentalWebImplementation
// Dependencies: [6, 7]
// Exports: enableExperimentalWebImplementation, enableLegacyWebImplementation, isNewWebImplementationEnabled

// Module 5032 (enableExperimentalWebImplementation)
import { Platform } from "_classCallCheck";


export const enableExperimentalWebImplementation = function enableExperimentalWebImplementation() {
  console.warn(require(dependencyMap[1]).tagMessage("New web implementation is enabled by default. This function will be removed in Gesture Handler 3."));
};
export const enableLegacyWebImplementation = function enableLegacyWebImplementation() {
  console.warn(require(dependencyMap[1]).tagMessage("Legacy web implementation is deprecated. This function will be removed in Gesture Handler 3."));
};
export function isNewWebImplementationEnabled() {
  return true;
}
