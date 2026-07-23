// Module ID: 13945
// Function ID: 106732
// Name: BountiesScrollRecapFooter
// Dependencies: [31, 27, 4122, 33, 4130, 689, 477, 1212, 4126, 8708, 566, 3842, 2]
// Exports: BountiesScrollRecapFooter, BountiesScrollRecapFooterGradient

// Module 13945 (BountiesScrollRecapFooter)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { flex: 1, alignItems: "center", justifyContent: "center", gap: importDefault(689).space.PX_4 };
  obj.container = obj;
  obj.headerLabel = { textTransform: "uppercase" };
  obj = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_4 };
  obj.orbRow = obj;
  obj.rive = { flex: 1, width: "100%" };
  const obj1 = {};
  let num = 0;
  if (obj5.isIOS()) {
    num = 6;
  }
  obj1.marginTop = num;
  obj.orbAmount = obj1;
  return obj;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export const BountiesScrollRecapFooter = function BountiesScrollRecapFooter(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback3();
  const intl = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1212) /* getSystemLocale */.t.d6Rrn6);
  let obj = { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount };
  obj = { variant: "text-xs/bold", color: "text-brand", style: tmp.headerLabel, accessible: false, children: stringResult };
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants" };
  const items1 = [callback(require(8708) /* OrbsIcon */.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), ];
  const obj1 = { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
};
export const BountiesScrollRecapFooterGradient = function BountiesScrollRecapFooterGradient() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  obj = { style: callback3().rive };
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.useReducedMotion);
  obj = { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center" };
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj.withReducedMotion = str;
  obj.children = closure_5(require(3842) /* ManaContext */.BountiesScrollGradientRive, obj);
  return closure_5(View, obj);
};
