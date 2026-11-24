// Module ID: 4734
// Function ID: 4735
// Name: core/CodeSplittingUtils
// Dependencies: [4735, 1478, 2]

// Module 4734 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1478 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4735 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
