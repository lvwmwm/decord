// Module ID: 19170
// Function ID: 19171
// Name: navigationTTIEnabled
// Dependencies: [16717, 19171, 2]
// Exports: isNavigationTTIEnabled

// Module 19170 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16717 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(19171);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
