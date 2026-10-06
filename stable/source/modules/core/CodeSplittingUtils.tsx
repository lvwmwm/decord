// Module ID: 4509
// Function ID: 4510
// Name: core/CodeSplittingUtils
// Dependencies: [4510, 1469, 2]

// Module 4509 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1469 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4510 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
