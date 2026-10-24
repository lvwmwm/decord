// Module ID: 17971
// Function ID: 17972
// Name: navigationTTIEnabled
// Dependencies: [15633, 17972, 2]
// Exports: isNavigationTTIEnabled

// Module 17971 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15633 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17972);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
