// Module ID: 18960
// Function ID: 18961
// Name: navigationTTIEnabled
// Dependencies: [16534, 18961, 2]
// Exports: isNavigationTTIEnabled

// Module 18960 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16534 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18961);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
