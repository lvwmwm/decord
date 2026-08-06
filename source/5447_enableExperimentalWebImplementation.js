// Module ID: 5447
// Function ID: 5448
// Name: enableExperimentalWebImplementation
// Dependencies: [17, 5411]
// Exports: enableExperimentalWebImplementation, enableLegacyWebImplementation, isNewWebImplementationEnabled

// Module 5447 (enableExperimentalWebImplementation)
import { Platform } from "get ActivityIndicator";

let c2 = true;

export const enableExperimentalWebImplementation = function enableExperimentalWebImplementation() {
  console.warn(require(5411) /* toArray */.tagMessage("New web implementation is enabled by default. This function will be removed in Gesture Handler 3."));
};
export const enableLegacyWebImplementation = function enableLegacyWebImplementation() {
  console.warn(require(5411) /* toArray */.tagMessage("Legacy web implementation is deprecated. This function will be removed in Gesture Handler 3."));
};
export function isNewWebImplementationEnabled() {
  return c2;
}
