// Module ID: 9456
// Function ID: 73535
// Name: ExpressionPickerCategories
// Dependencies: [31, 27, 33, 4130, 689, 1324, 4001, 9457, 2]
// Exports: default

// Module 9456 (ExpressionPickerCategories)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerRefresh = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const result = require("jsxProd").fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  let children;
  let portalHostName;
  let style;
  ({ children, portalHostName, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(1324)("ExpressionPickerCategories");
  let obj = { hostName: portalHostName };
  obj = {};
  const items = [tmp.container, , ];
  let containerRefresh = null;
  if (tmp2) {
    containerRefresh = tmp.containerRefresh;
  }
  items[1] = containerRefresh;
  items[2] = style;
  obj.style = items;
  let tmp7 = null;
  if (!tmp2) {
    tmp7 = callback(importDefault(9457), {});
  }
  const items1 = [tmp7, children];
  obj.children = items1;
  obj.children = closure_5(View, obj);
  return callback(require(4001) /* Portal */.Portal, obj);
};
