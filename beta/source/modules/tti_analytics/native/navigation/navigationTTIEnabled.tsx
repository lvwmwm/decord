// Module ID: 17976
// Function ID: 17977
// Name: navigationTTIEnabled
// Dependencies: [15638, 17977, 2]
// Exports: isNavigationTTIEnabled

// Module 17976 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15638 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17977);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
