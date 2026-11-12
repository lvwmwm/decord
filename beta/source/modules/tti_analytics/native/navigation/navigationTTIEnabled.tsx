// Module ID: 18998
// Function ID: 18999
// Name: navigationTTIEnabled
// Dependencies: [16566, 18999, 2]
// Exports: isNavigationTTIEnabled

// Module 18998 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16566 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18999);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
