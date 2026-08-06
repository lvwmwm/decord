// Module ID: 15681
// Function ID: 15682
// Dependencies: [19, 21, 4285, 10637, 2]

// Module 15681
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_3 = createCacheKey.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = require("noop").memo(() => {
  const tmp = callback();
  return jsx(importDefault(10637), { style: callback().spinner, animate: true });
});
const result = require("createCacheKey").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;
