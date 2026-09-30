// Module ID: 4536
// Function ID: 4537
// Name: core/CodeSplittingUtils
// Dependencies: [4537, 1463, 2]

// Module 4536 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1463 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4537 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
