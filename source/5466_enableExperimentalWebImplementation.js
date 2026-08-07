// Module ID: 5466
// Function ID: 5467
// Name: enableExperimentalWebImplementation
// Dependencies: [17, 5430]
// Exports: enableExperimentalWebImplementation, enableLegacyWebImplementation, isNewWebImplementationEnabled

// Module 5466 (enableExperimentalWebImplementation)
import { Platform } from "get ActivityIndicator";

let c2 = true;

export const enableExperimentalWebImplementation = function enableExperimentalWebImplementation() {
  console.warn(require(5430) /* toArray */.tagMessage("New web implementation is enabled by default. This function will be removed in Gesture Handler 3."));
};
export const enableLegacyWebImplementation = function enableLegacyWebImplementation() {
  console.warn(require(5430) /* toArray */.tagMessage("Legacy web implementation is deprecated. This function will be removed in Gesture Handler 3."));
};
export function isNewWebImplementationEnabled() {
  return c2;
}
