// Module ID: 16347
// Function ID: 16348
// Name: navigationTTIEnabled
// Dependencies: [14050, 2]
// Exports: isNavigationTTIEnabled

// Module 16347 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14050 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
