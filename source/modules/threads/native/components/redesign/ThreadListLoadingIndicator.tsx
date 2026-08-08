// Module ID: 15780
// Function ID: 15781
// Dependencies: [19, 21, 4303, 10700, 2]

// Module 15780
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_3 = createCacheKey.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = require("noop").memo(() => {
  const tmp = callback();
  return jsx(importDefault(10700), { style: callback().spinner, animate: true });
});
const result = require("createCacheKey").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;
