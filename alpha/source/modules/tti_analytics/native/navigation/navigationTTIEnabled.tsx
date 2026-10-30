// Module ID: 18549
// Function ID: 18550
// Name: navigationTTIEnabled
// Dependencies: [16176, 18550, 2]
// Exports: isNavigationTTIEnabled

// Module 18549 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16176 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18550);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
