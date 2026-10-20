// Module ID: 16994
// Function ID: 16995
// Name: navigationTTIEnabled
// Dependencies: [14649, 16995, 2]
// Exports: isNavigationTTIEnabled

// Module 16994 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14649 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(16995);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
