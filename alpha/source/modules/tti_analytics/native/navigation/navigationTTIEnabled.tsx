// Module ID: 18490
// Function ID: 18491
// Name: navigationTTIEnabled
// Dependencies: [16136, 18491, 2]
// Exports: isNavigationTTIEnabled

// Module 18490 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16136 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18491);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
