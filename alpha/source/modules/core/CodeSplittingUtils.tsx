// Module ID: 4730
// Function ID: 4731
// Name: core/CodeSplittingUtils
// Dependencies: [4731, 1478, 2]

// Module 4730 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1478 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4731 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
