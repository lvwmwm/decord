// Module ID: 4830
// Function ID: 4831
// Name: core/CodeSplittingUtils
// Dependencies: [4831, 1475, 2]

// Module 4830 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1475 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4831 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
