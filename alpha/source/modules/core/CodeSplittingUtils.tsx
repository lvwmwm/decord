// Module ID: 4825
// Function ID: 4826
// Name: core/CodeSplittingUtils
// Dependencies: [4826, 1476, 2]

// Module 4825 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1476 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4826 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
