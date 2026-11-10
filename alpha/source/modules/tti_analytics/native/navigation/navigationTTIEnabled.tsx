// Module ID: 18989
// Function ID: 18990
// Name: navigationTTIEnabled
// Dependencies: [16561, 18990, 2]
// Exports: isNavigationTTIEnabled

// Module 18989 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16561 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18990);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
