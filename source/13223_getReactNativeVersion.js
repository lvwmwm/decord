// Module ID: 13223
// Function ID: 100288
// Name: getReactNativeVersion
// Dependencies: [13013, 2]
// Exports: default

// Module 13223 (getReactNativeVersion)
import AccessibilityFeatureFlags from "AccessibilityFeatureFlags";


export default function getReactNativeVersion() {
  return require(dependencyMap[1]).getReactNativeVersionWithModules(AccessibilityFeatureFlags.Platform.constants);
};
