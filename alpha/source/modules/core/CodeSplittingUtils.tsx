// Module ID: 4860
// Function ID: 4861
// Name: core/CodeSplittingUtils
// Dependencies: [4861, 1479, 2]

// Module 4860 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1479 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4861 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
