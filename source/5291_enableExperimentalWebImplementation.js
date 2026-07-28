// Module ID: 5291
// Function ID: 45493
// Name: enableExperimentalWebImplementation
// Dependencies: [27, 5255]
// Exports: enableExperimentalWebImplementation, enableLegacyWebImplementation, isNewWebImplementationEnabled

// Module 5291 (enableExperimentalWebImplementation)
import { Platform } from "get ActivityIndicator";


export const enableExperimentalWebImplementation = function enableExperimentalWebImplementation() {
  console.warn(require(5255) /* hasProperty */.tagMessage("New web implementation is enabled by default. This function will be removed in Gesture Handler 3."));
};
export const enableLegacyWebImplementation = function enableLegacyWebImplementation() {
  console.warn(require(5255) /* hasProperty */.tagMessage("Legacy web implementation is deprecated. This function will be removed in Gesture Handler 3."));
};
export function isNewWebImplementationEnabled() {
  return true;
}
