// Module ID: 17873
// Function ID: 17874
// Name: navigationTTIEnabled
// Dependencies: [15579, 17874, 2]
// Exports: isNavigationTTIEnabled

// Module 17873 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15579 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17874);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
