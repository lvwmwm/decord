// Module ID: 19365
// Function ID: 19366
// Name: navigationTTIEnabled
// Dependencies: [16840, 19366, 2]
// Exports: isNavigationTTIEnabled

// Module 19365 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16840 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(19366);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
