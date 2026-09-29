// Module ID: 4464
// Function ID: 4465
// Name: core/CodeSplittingUtils
// Dependencies: [4465, 1462, 2]

// Module 4464 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1462 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4465 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
