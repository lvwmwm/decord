// Module ID: 18184
// Function ID: 18185
// Name: navigationTTIEnabled
// Dependencies: [15643, 18185, 2]
// Exports: isNavigationTTIEnabled

// Module 18184 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15643 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18185);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
