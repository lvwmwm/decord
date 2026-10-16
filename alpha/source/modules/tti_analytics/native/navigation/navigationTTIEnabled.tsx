// Module ID: 17601
// Function ID: 17602
// Name: navigationTTIEnabled
// Dependencies: [15334, 17602, 2]
// Exports: isNavigationTTIEnabled

// Module 17601 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15334 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17602);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
