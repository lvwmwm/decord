// Module ID: 9188
// Function ID: 71970
// Name: SplitTextInput
// Dependencies: [31, 33, 6707, 9189, 2]

// Module 9188 (SplitTextInput)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj["children"] = jsx(require(9189) /* SplitTextField */.SplitTextField, { ref });
  return jsx(require(6707) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
