// Module ID: 18169
// Function ID: 18170
// Name: navigationTTIEnabled
// Dependencies: [15631, 18170, 2]
// Exports: isNavigationTTIEnabled

// Module 18169 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15631 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18170);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
