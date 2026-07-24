// Module ID: 7645
// Function ID: 60823
// Name: TextArea
// Dependencies: [31, 33, 7575, 7646, 2]

// Module 7645 (TextArea)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj["children"] = jsx(require(7646) /* getLengthRemainingTextColor */.TextAreaField, { ref });
  return jsx(require(7575) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
