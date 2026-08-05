// Module ID: 15643
// Function ID: 15644
// Dependencies: [19, 21, 4255, 10582, 2]

// Module 15643
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_3 = createCacheKey.createStyles({ spinner: { width: 32, height: 32 } });
const memoResult = require("noop").memo(() => {
  const tmp = callback();
  return jsx(importDefault(10582), { style: callback().spinner, animate: true });
});
const result = require("createCacheKey").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListLoadingIndicator.tsx");

export default memoResult;
