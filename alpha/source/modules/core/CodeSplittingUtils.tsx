// Module ID: 4767
// Function ID: 4768
// Name: core/CodeSplittingUtils
// Dependencies: [4768, 1483, 2]

// Module 4767 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1483 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4768 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
