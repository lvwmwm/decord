// Module ID: 4822
// Function ID: 4823
// Name: core/CodeSplittingUtils
// Dependencies: [4823, 1483, 2]

// Module 4822 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1483 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4823 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
