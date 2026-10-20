// Module ID: 17703
// Function ID: 17704
// Name: navigationTTIEnabled
// Dependencies: [15445, 17704, 2]
// Exports: isNavigationTTIEnabled

// Module 17703 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15445 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17704);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
