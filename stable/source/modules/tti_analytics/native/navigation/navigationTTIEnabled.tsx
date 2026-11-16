// Module ID: 18995
// Function ID: 18996
// Name: navigationTTIEnabled
// Dependencies: [16563, 18996, 2]
// Exports: isNavigationTTIEnabled

// Module 18995 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16563 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18996);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
