// Module ID: 12985
// Function ID: 100509
// Name: RowGroup
// Dependencies: [31, 27, 33, 4130, 689, 4541, 5503, 2]
// Exports: RowGroup

// Module 12985 (RowGroup)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { overflow: "hidden" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_BORDER_RADIUS, padding: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = function RowGroup(children) {
  let title;
  let trailing;
  ({ title, trailing } = children);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  let tmp5Result = null != title;
  if (!tmp5Result) {
    tmp5Result = null != trailing;
  }
  if (tmp5Result) {
    obj = { direction: "horizontal", spacing: 4 };
    let tmp8 = null != title;
    if (tmp8) {
      obj = { title };
      tmp8 = callback(require(5503) /* TableRowGroupTitle */.TableRowGroupTitle, obj);
    }
    const items = [tmp8, trailing];
    obj.children = items;
    tmp5Result = closure_4(require(4541) /* Stack */.Stack, obj);
    const tmp5 = closure_4;
  }
  const items1 = [tmp5Result, callback(View, { style: tmp.content, children: children.children })];
  obj.children = items1;
  return closure_4(View, obj);
};
