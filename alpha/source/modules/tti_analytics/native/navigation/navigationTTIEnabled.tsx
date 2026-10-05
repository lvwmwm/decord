// Module ID: 16474
// Function ID: 16475
// Name: navigationTTIEnabled
// Dependencies: [14154, 16475, 2]
// Exports: isNavigationTTIEnabled

// Module 16474 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14154 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(16475);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
