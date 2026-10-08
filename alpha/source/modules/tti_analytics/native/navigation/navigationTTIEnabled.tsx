// Module ID: 16774
// Function ID: 16775
// Name: navigationTTIEnabled
// Dependencies: [14471, 16775, 2]
// Exports: isNavigationTTIEnabled

// Module 16774 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14471 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(16775);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
