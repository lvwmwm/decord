// Module ID: 17895
// Function ID: 17896
// Name: navigationTTIEnabled
// Dependencies: [15592, 17896, 2]
// Exports: isNavigationTTIEnabled

// Module 17895 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15592 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17896);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
