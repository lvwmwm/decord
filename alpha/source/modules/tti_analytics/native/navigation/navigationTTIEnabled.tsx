// Module ID: 18864
// Function ID: 18865
// Name: navigationTTIEnabled
// Dependencies: [16453, 18865, 2]
// Exports: isNavigationTTIEnabled

// Module 18864 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16453 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18865);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
