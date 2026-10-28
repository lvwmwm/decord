// Module ID: 18013
// Function ID: 18014
// Name: navigationTTIEnabled
// Dependencies: [15672, 18014, 2]
// Exports: isNavigationTTIEnabled

// Module 18013 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15672 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18014);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
