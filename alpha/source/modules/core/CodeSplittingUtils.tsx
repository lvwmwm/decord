// Module ID: 4506
// Function ID: 4507
// Name: core/CodeSplittingUtils
// Dependencies: [4507, 1463, 2]

// Module 4506 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1463 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4507 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
