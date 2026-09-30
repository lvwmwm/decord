// Module ID: 16376
// Function ID: 16377
// Name: navigationTTIEnabled
// Dependencies: [14077, 2]
// Exports: isNavigationTTIEnabled

// Module 16376 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14077 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
