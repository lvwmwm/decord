// Module ID: 18180
// Function ID: 18181
// Name: navigationTTIEnabled
// Dependencies: [15639, 18181, 2]
// Exports: isNavigationTTIEnabled

// Module 18180 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15639 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18181);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
