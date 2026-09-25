// Module ID: 16147
// Function ID: 16148
// Name: navigationTTIEnabled
// Dependencies: [13926, 2]
// Exports: isNavigationTTIEnabled

// Module 16147 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 13926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
