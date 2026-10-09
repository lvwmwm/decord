// Module ID: 4746
// Function ID: 4747
// Name: core/CodeSplittingUtils
// Dependencies: [4747, 1481, 2]

// Module 4746 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1481 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4747 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
