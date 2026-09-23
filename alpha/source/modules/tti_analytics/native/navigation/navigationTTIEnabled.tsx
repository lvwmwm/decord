// Module ID: 16933
// Function ID: 16934
// Name: navigationTTIEnabled
// Dependencies: [14756, 2]
// Exports: isNavigationTTIEnabled

// Module 16933 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14756 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
