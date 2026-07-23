// Module ID: 9360
// Function ID: 73068
// Name: PremiumUpsellSectionDivider
// Dependencies: [31, 27, 6671, 33, 4130, 689, 9361, 4554, 668, 4652, 2]
// Exports: default

// Module 9360 (PremiumUpsellSectionDivider)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { height: 28, flex: 1, justifyContent: "center" };
  let num;
  if (arg0 === _createForOfIteratorHelperLoose.START) {
    num = 6;
  }
  obj.marginTop = num;
  let num2;
  if (arg0 === _createForOfIteratorHelperLoose.END) {
    num2 = 6;
  }
  obj.marginBottom = num2;
  obj.container = obj;
  obj = { justifyContent: "center", alignItems: "center" };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.lockContainer = obj;
  const obj1 = { width: 28, height: 28, justifyContent: "center", borderRadius: importDefault(689).radii.round };
  obj.lockGradient = obj1;
  obj.lock = { width: 16, height: 16, alignSelf: "center" };
  obj.divider = { height: 1 };
  const obj2 = { flex: 1, height: 14, left: 0, right: 0, position: "absolute" };
  let num3;
  if (arg0 === _createForOfIteratorHelperLoose.START) {
    num3 = 0;
  }
  obj2.bottom = num3;
  let num4;
  if (arg0 === _createForOfIteratorHelperLoose.END) {
    num4 = 0;
  }
  obj2.top = num4;
  obj.gradient = obj2;
  return obj;
});
_createForOfIteratorHelperLoose = { START: 0, [0]: "START", END: 1, [1]: "END" };
const result = require("items").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellSectionDivider.tsx");

export default function PremiumUpsellSectionDivider(arg0) {
  let position;
  let useTier0UpsellContent;
  ({ useTier0UpsellContent, position } = arg0);
  let lock = callback2(position);
  let obj = { style: lock.container };
  obj = { style: lock.gradient, children: callback(require(9361) /* PremiumUpsellGradientBackground */.PremiumUpsellGradientBackground, { useTier0UpsellContent }) };
  const items = [callback(closure_4, obj), , ];
  obj = { style: lock.divider, start: require(668) /* keys */.HorizontalGradient.START, end: require(668) /* keys */.HorizontalGradient.END };
  if (true === useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj.colors = PREMIUM_TIER_2_TRI_COLOR;
  items[1] = callback(importDefault(4554), obj);
  if (position !== _createForOfIteratorHelperLoose.START) {
    items[2] = tmp7;
    obj.children = items;
    return closure_7(closure_4, obj);
  } else {
    const obj1 = { style: lock.lockContainer };
    let obj2 = { style: lock.lockGradient, start: require(668) /* keys */.HorizontalGradient.START, end: require(668) /* keys */.HorizontalGradient.END };
    let LockIcon = Gradients;
    obj2.colors = useTier0UpsellContent ? LockIcon.PREMIUM_TIER_0 : LockIcon.PREMIUM_TIER_2_TRI_COLOR;
    LockIcon = require(4652) /* LockIcon */.LockIcon;
    const obj3 = { color: importDefault(689).colors.WHITE };
    lock = lock.lock;
    obj3.style = lock;
    obj2.children = callback(LockIcon, obj3);
    obj2 = tmp8(importDefault(4554), obj2);
    obj1.children = obj2;
    callback(closure_4, obj1);
    const tmp12 = importDefault(4554);
    const tmp9 = closure_4;
  }
};
export const PREMIUM_UPSELL_SECTION_DIVIDER_HEIGHT = 28;
export const PREMIUM_UPSELL_SECTION_DIVIDER_MARGIN = 6;
export const PremiumUpsellSectionDividerPosition = _createForOfIteratorHelperLoose;
