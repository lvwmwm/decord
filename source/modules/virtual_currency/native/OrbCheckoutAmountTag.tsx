// Module ID: 11842
// Function ID: 91896
// Name: OrbCheckoutAmountTag
// Dependencies: [27, 33, 4130, 689, 8749, 4126, 1212, 2]
// Exports: default

// Module 11842 (OrbCheckoutAmountTag)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.orbAmountTag = obj;
obj.orbsIcon = { width: 14, height: 14 };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/virtual_currency/native/OrbCheckoutAmountTag.tsx");

export default function OrbCheckoutAmountTag(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback2();
  let obj = { style: tmp.orbAmountTag };
  obj = { size: "custom", color: "icon-strong", style: tmp.orbsIcon };
  const items = [callback(require(8749) /* OrbsIcon */.OrbsIcon, obj), ];
  obj = { variant: "text-md/semibold" };
  if (null == orbAmount) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.pfChQr);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj1 = { orbAmount };
    stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.W4DfeF, obj1);
  }
  obj.accessibilityLabel = stringResult;
  let str = "--";
  if (null != orbAmount) {
    str = orbAmount;
  }
  obj.children = str;
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return closure_4(View, obj);
};
