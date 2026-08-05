// Module ID: 5393
// Function ID: 5394
// Name: enableExperimentalWebImplementation
// Dependencies: [17, 5357]
// Exports: enableExperimentalWebImplementation, enableLegacyWebImplementation, isNewWebImplementationEnabled

// Module 5393 (enableExperimentalWebImplementation)
import { Platform } from "get ActivityIndicator";

let c2 = true;

export const enableExperimentalWebImplementation = function enableExperimentalWebImplementation() {
  console.warn(require(5357) /* toArray */.tagMessage("New web implementation is enabled by default. This function will be removed in Gesture Handler 3."));
};
export const enableLegacyWebImplementation = function enableLegacyWebImplementation() {
  console.warn(require(5357) /* toArray */.tagMessage("Legacy web implementation is deprecated. This function will be removed in Gesture Handler 3."));
};
export function isNewWebImplementationEnabled() {
  return c2;
}
