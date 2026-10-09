// Module ID: 16898
// Function ID: 16899
// Name: navigationTTIEnabled
// Dependencies: [14567, 16899, 2]
// Exports: isNavigationTTIEnabled

// Module 16898 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14567 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(16899);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
