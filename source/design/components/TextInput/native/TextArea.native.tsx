// Module ID: 8042
// Function ID: 8043
// Name: TextArea
// Dependencies: [19, 21, 7857, 8043, 2]

// Module 8042 (TextArea)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(require(8043) /* TextAreaField */.TextAreaField, { ref });
  return jsx(require(7857) /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
