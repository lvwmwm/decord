// Module ID: 17984
// Function ID: 17985
// Name: navigationTTIEnabled
// Dependencies: [15638, 17985, 2]
// Exports: isNavigationTTIEnabled

// Module 17984 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15638 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17985);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
