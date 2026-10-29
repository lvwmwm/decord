// Module ID: 4824
// Function ID: 4825
// Name: core/CodeSplittingUtils
// Dependencies: [4825, 1481, 2]

// Module 4824 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1481 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4825 */;
import size from "module_2" /* 2 */;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in CodeSplittingUtils) {
  exports[key10026] = CodeSplittingUtils[key10026];
  continue;
}
