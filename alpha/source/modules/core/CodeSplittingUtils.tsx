// Module ID: 4791
// Function ID: 4792
// Name: core/CodeSplittingUtils
// Dependencies: [4792, 1480, 2]

// Module 4791 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1480 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4792 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
