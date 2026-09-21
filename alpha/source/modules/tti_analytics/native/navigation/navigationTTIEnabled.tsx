// Module ID: 16869
// Function ID: 16870
// Name: navigationTTIEnabled
// Dependencies: [14670, 2]
// Exports: isNavigationTTIEnabled

// Module 16869 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
