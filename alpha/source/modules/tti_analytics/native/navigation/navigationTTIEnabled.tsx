// Module ID: 19362
// Function ID: 19363
// Name: navigationTTIEnabled
// Dependencies: [16840, 19363, 2]
// Exports: isNavigationTTIEnabled

// Module 19362 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16840 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(19363);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
