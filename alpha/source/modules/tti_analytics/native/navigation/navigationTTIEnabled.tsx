// Module ID: 16175
// Function ID: 16176
// Name: navigationTTIEnabled
// Dependencies: [13882, 2]
// Exports: isNavigationTTIEnabled

// Module 16175 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 13882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
