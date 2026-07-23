// Module ID: 9910
// Function ID: 76662
// Name: map
// Dependencies: [31, 27, 1921, 33, 4130, 689, 624, 4126, 1827, 2]
// Exports: PileOverflow

// Module 9910 (map)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsxs: closure_4, jsx: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, flexShrink: 0 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let items = [[64, "text-lg/semibold"], [48, "text-md/semibold"], [40, "text-md/semibold"], [30, "text-sm/semibold"], [24, "text-xs/semibold"], [16, "text-xxs/semibold"]];
const map = new Map(items);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("design/components/Pile/native/PileOverflow.native.tsx");

export const PileOverflow = function PileOverflow(size) {
  let borderRadius;
  let value;
  size = size.size;
  ({ borderRadius, value } = size);
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.locale);
  obj = {};
  const items1 = [_createForOfIteratorHelperLoose().container, ];
  obj = { borderRadius, minWidth: size, height: size };
  let num = 4;
  if (size >= 32) {
    num = 8;
  }
  obj.paddingHorizontal = num;
  items1[1] = obj;
  obj.style = items1;
  const obj1 = { lineClamp: 1, maxFontSizeMultiplier: 2 };
  value = map.get(size);
  let str = "text-md/semibold";
  if (null != value) {
    str = value;
  }
  obj1.variant = str;
  const items2 = ["+", require(1827) /* shortenAndLocalizeNumber */.humanizeValue(value, stateFromStores)];
  obj1.children = items2;
  obj.children = closure_4(require(4126) /* Text */.Text, obj1);
  return closure_5(View, obj);
};
