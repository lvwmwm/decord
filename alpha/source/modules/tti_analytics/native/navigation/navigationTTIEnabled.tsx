// Module ID: 17722
// Function ID: 17723
// Name: navigationTTIEnabled
// Dependencies: [15463, 17723, 2]
// Exports: isNavigationTTIEnabled

// Module 17722 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15463 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17723);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
