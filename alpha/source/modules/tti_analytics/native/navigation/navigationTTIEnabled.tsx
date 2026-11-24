// Module ID: 18210
// Function ID: 18211
// Name: navigationTTIEnabled
// Dependencies: [15652, 18211, 2]
// Exports: isNavigationTTIEnabled

// Module 18210 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15652 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18211);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
