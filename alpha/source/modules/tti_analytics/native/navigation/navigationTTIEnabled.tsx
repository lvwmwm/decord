// Module ID: 19409
// Function ID: 19410
// Name: navigationTTIEnabled
// Dependencies: [16875, 19410, 2]
// Exports: isNavigationTTIEnabled

// Module 19409 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16875 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(19410);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
