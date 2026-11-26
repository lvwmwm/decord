// Module ID: 19367
// Function ID: 19368
// Name: navigationTTIEnabled
// Dependencies: [16842, 19368, 2]
// Exports: isNavigationTTIEnabled

// Module 19367 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16842 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(19368);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
