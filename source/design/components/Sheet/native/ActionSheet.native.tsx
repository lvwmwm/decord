// Module ID: 5498
// Function ID: 46907
// Name: ActionSheet
// Dependencies: [31, 33, 4130, 689, 5187, 2]

// Module 5498 (ActionSheet)
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.content = obj;
obj.body = { gap: 24 };
let closure_3 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const tmp = callback();
  const obj = { ref };
  const merged = Object.assign(arg0);
  obj["contentStyles"] = tmp.content;
  obj["bodyStyles"] = tmp.body;
  return jsx(require(5187) /* Background */.BottomSheet, { ref });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = forwardRefResult;
