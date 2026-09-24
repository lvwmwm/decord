// Module ID: 16957
// Function ID: 16958
// Name: navigationTTIEnabled
// Dependencies: [14765, 2]
// Exports: isNavigationTTIEnabled

// Module 16957 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14765 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
