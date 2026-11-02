// Module ID: 18605
// Function ID: 18606
// Name: navigationTTIEnabled
// Dependencies: [16221, 18606, 2]
// Exports: isNavigationTTIEnabled

// Module 18605 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16221 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18606);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
