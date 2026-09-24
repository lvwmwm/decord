// Module ID: 16883
// Function ID: 16884
// Name: navigationTTIEnabled
// Dependencies: [14711, 2]
// Exports: isNavigationTTIEnabled

// Module 16883 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14711 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
