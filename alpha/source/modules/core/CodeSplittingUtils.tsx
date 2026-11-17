// Module ID: 5126
// Function ID: 5127
// Name: core/CodeSplittingUtils
// Dependencies: [5127, 1480, 2]

// Module 5126 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1480 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 5127 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
