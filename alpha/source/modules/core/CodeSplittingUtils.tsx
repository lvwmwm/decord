// Module ID: 4846
// Function ID: 4847
// Name: core/CodeSplittingUtils
// Dependencies: [4847, 1483, 2]

// Module 4846 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1483 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4847 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
