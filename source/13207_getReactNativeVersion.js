// Module ID: 13207
// Function ID: 100210
// Name: getReactNativeVersion
// Dependencies: [12997, 2]
// Exports: default

// Module 13207 (getReactNativeVersion)
import AccessibilityFeatureFlags from "AccessibilityFeatureFlags";


export default function getReactNativeVersion() {
  return require(dependencyMap[1]).getReactNativeVersionWithModules(AccessibilityFeatureFlags.Platform.constants);
};
