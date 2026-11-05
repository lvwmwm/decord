// Module ID: 18909
// Function ID: 18910
// Name: navigationTTIEnabled
// Dependencies: [16479, 18910, 2]
// Exports: isNavigationTTIEnabled

// Module 18909 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16479 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18910);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
