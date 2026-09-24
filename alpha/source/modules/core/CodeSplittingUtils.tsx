// Module ID: 4501
// Function ID: 4502
// Name: core/CodeSplittingUtils
// Dependencies: [4502, 1462, 2]

// Module 4501 (core/CodeSplittingUtils)
import NetworkUtilsDefault from "NetworkUtils" /* 1462 */;
import CodeSplittingUtils from "CodeSplittingUtils" /* 4502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

CodeSplittingUtils.setAwaitOnline(NetworkUtilsDefault.awaitOnline);
const result = size.fileFinishedImporting("modules/core/CodeSplittingUtils.tsx");
for (const key10026 in require("CodeSplittingUtils")) {
  arg5[key10026] = require("CodeSplittingUtils")[key10026];
  continue;
}
