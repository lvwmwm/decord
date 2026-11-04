// Module ID: 18878
// Function ID: 18879
// Name: navigationTTIEnabled
// Dependencies: [16466, 18879, 2]
// Exports: isNavigationTTIEnabled

// Module 18878 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16466 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18879);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
