// Module ID: 19175
// Function ID: 19176
// Name: navigationTTIEnabled
// Dependencies: [16722, 19176, 2]
// Exports: isNavigationTTIEnabled

// Module 19175 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16722 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(19176);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
