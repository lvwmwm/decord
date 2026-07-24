// Module ID: 5257
// Function ID: 45371
// Name: enableExperimentalWebImplementation
// Dependencies: [27, 5221]
// Exports: enableExperimentalWebImplementation, enableLegacyWebImplementation, isNewWebImplementationEnabled

// Module 5257 (enableExperimentalWebImplementation)
import { Platform } from "get ActivityIndicator";


export const enableExperimentalWebImplementation = function enableExperimentalWebImplementation() {
  console.warn(require(5221) /* hasProperty */.tagMessage("New web implementation is enabled by default. This function will be removed in Gesture Handler 3."));
};
export const enableLegacyWebImplementation = function enableLegacyWebImplementation() {
  console.warn(require(5221) /* hasProperty */.tagMessage("Legacy web implementation is deprecated. This function will be removed in Gesture Handler 3."));
};
export function isNewWebImplementationEnabled() {
  return true;
}
