// Module ID: 7585
// Function ID: 60740
// Name: TextArea
// Dependencies: [31, 33, 6671, 7586, 2]

// Module 7585 (TextArea)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj["children"] = jsx(require(7586) /* getLengthRemainingTextColor */.TextAreaField, { ref });
  return jsx(require(6671) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
