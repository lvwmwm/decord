// Module ID: 4432
// Function ID: 4433
// Name: core/CodeSplittingUtils
// Dependencies: [4433, 1462, 2]

// Module 4432 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1462 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4433 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
