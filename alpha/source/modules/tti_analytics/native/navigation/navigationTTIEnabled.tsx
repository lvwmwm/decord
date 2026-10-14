// Module ID: 17327
// Function ID: 17328
// Name: navigationTTIEnabled
// Dependencies: [15003, 17328, 2]
// Exports: isNavigationTTIEnabled

// Module 17327 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15003 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17328);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
