// Module ID: 4506
// Function ID: 4507
// Name: core/CodeSplittingUtils
// Dependencies: [4507, 1463, 2]

// Module 4506 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1463 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4507 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
