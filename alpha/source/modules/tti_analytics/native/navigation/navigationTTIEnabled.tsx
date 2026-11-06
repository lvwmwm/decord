// Module ID: 18897
// Function ID: 18898
// Name: navigationTTIEnabled
// Dependencies: [16476, 18898, 2]
// Exports: isNavigationTTIEnabled

// Module 18897 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16476 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18898);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
