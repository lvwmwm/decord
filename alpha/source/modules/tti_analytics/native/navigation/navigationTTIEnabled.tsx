// Module ID: 17611
// Function ID: 17612
// Name: navigationTTIEnabled
// Dependencies: [15344, 17612, 2]
// Exports: isNavigationTTIEnabled

// Module 17611 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15344 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17612);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
