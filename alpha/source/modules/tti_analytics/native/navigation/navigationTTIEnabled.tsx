// Module ID: 16171
// Function ID: 16172
// Name: navigationTTIEnabled
// Dependencies: [13881, 2]
// Exports: isNavigationTTIEnabled

// Module 16171 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 13881 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
