// Module ID: 16872
// Function ID: 16873
// Name: navigationTTIEnabled
// Dependencies: [14673, 2]
// Exports: isNavigationTTIEnabled

// Module 16872 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};
