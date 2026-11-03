// Module ID: 4957
// Function ID: 4958
// Name: core/CodeSplittingUtils
// Dependencies: [4958, 1477, 2]

// Module 4957 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1477 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4958 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
