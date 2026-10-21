// Module ID: 17803
// Function ID: 17804
// Name: navigationTTIEnabled
// Dependencies: [15535, 17804, 2]
// Exports: isNavigationTTIEnabled

// Module 17803 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15535 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17804);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
