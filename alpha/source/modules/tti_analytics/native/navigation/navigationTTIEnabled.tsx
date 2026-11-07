// Module ID: 18947
// Function ID: 18948
// Name: navigationTTIEnabled
// Dependencies: [16524, 18948, 2]
// Exports: isNavigationTTIEnabled

// Module 18947 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16524 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18948);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
