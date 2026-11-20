// Module ID: 18043
// Function ID: 18044
// Name: navigationTTIEnabled
// Dependencies: [15508, 18044, 2]
// Exports: isNavigationTTIEnabled

// Module 18043 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15508 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18044);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}
