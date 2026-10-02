// Module ID: 16173
// Function ID: 16174
// Name: navigationTTIEnabled
// Dependencies: [13883, 2]
// Exports: isNavigationTTIEnabled

// Module 16173 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 13883 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
