// Module ID: 18256
// Function ID: 18257
// Name: navigationTTIEnabled
// Dependencies: [15900, 18257, 2]
// Exports: isNavigationTTIEnabled

// Module 18256 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15900 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18257);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
