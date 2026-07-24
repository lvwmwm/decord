// Module ID: 9457
// Function ID: 73537
// Dependencies: [31, 27, 653, 33, 4130, 689, 477, 8556, 2]

// Module 9457
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let StyleSheet;
let closure_3;
const require = arg1;
({ StyleSheet, View: closure_3 } = get_ActivityIndicator);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["borderTopWidth"] = StyleSheet.hairlineWidth;
obj["borderTopColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST;
obj.backdrop = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.PROFILE_GRADIENT_NOTE_BACKGROUND, height: require("ME").EXPRESSION_FOOTER_HEIGHT, bottom: undefined };
obj.backdropAndroid = _createForOfIteratorHelperLoose;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function EmojiPickerCategoriesBackdrop() {
  const tmp = callback();
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    obj = {};
    const items = [, ];
    ({ backdrop: arr[0], backdropAndroid: arr[1] } = tmp);
    obj.style = items;
    let tmp2Result = tmp2(tmp3, obj);
  } else {
    obj = { style: tmp.backdrop };
    const obj1 = { style: tmp.backdrop };
    obj.children = tmp2(importDefault(8556), obj1);
    tmp2Result = tmp2(tmp3, obj);
  }
  return tmp2Result;
});
const result = require("ME").fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategoriesBackdrop.tsx");

export default memoResult;
