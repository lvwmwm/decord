// Module ID: 4958
// Function ID: 4959
// Name: core/CodeSplittingUtils
// Dependencies: [4959, 1477, 2]

// Module 4958 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1477 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4959 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
