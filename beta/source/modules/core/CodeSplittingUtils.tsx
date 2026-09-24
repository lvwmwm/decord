// Module ID: 4468
// Function ID: 4469
// Name: core/CodeSplittingUtils
// Dependencies: [4469, 1466, 2]

// Module 4468 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1466 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
