// Module ID: 17939
// Function ID: 17940
// Name: navigationTTIEnabled
// Dependencies: [15613, 17940, 2]
// Exports: isNavigationTTIEnabled

// Module 17939 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15613 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17940);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
