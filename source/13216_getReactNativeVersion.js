// Module ID: 13216
// Function ID: 100255
// Name: getReactNativeVersion
// Dependencies: [13006, 2]
// Exports: default

// Module 13216 (getReactNativeVersion)
import AccessibilityFeatureFlags from "AccessibilityFeatureFlags";


export default function getReactNativeVersion() {
  return require(dependencyMap[1]).getReactNativeVersionWithModules(AccessibilityFeatureFlags.Platform.constants);
};
