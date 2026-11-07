// Module ID: 4956
// Function ID: 4957
// Name: core/CodeSplittingUtils
// Dependencies: [4957, 1477, 2]

// Module 4956 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1477 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4957 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
