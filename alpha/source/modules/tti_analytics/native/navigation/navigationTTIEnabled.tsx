// Module ID: 18592
// Function ID: 18593
// Name: navigationTTIEnabled
// Dependencies: [16217, 18593, 2]
// Exports: isNavigationTTIEnabled

// Module 18592 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16217 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18593);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
