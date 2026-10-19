// Module ID: 4882
// Function ID: 4883
// Name: core/CodeSplittingUtils
// Dependencies: [4883, 1483, 2]

// Module 4882 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1483 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4883 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
