// Module ID: 18600
// Function ID: 18601
// Name: navigationTTIEnabled
// Dependencies: [16216, 18601, 2]
// Exports: isNavigationTTIEnabled

// Module 18600 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16216 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18601);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
