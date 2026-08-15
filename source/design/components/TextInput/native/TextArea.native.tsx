// Module ID: 8092
// Function ID: 8093
// Name: TextArea
// Dependencies: [19, 21, 8072, 8093, 2]

// Module 8092 (TextArea)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(8093) /* TextAreaField */.TextAreaField, { ref });
  return jsx(require(8072) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
