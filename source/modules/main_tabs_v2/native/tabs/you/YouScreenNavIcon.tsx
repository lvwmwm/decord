// Module ID: 15482
// Function ID: 119187
// Name: str2
// Dependencies: [31, 27, 33, 15473, 15132, 689, 7873, 4130, 1212, 8372, 4126, 2]

// Module 15482 (str2)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import isYouNavFloating from "isYouNavFloating";
import { ICON_SIZE } from "getIconSize";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import { colors } from "_createForOfIteratorHelperLoose";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";
import isYouNavFloating from "isYouNavFloating";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = jsxProd);
isYouNavFloating = isYouNavFloating.isYouNavFloating();
const tmp4 = isYouNavFloating ? ICON_SIZE.md : ICON_SIZE.sm;
let str = "sm";
if (isYouNavFloating.isYouNavFloating()) {
  str = "md";
}
const result = (require("_createForOfIteratorHelperLoose").space.PX_32 - tmp4) / 2;
isYouNavFloating = isYouNavFloating.isYouNavFloating();
let closure_8 = isYouNavFloating ? colors.TEXT_DEFAULT : colors.WHITE;
let str2 = "text-overlay-light";
if (isYouNavFloating.isYouNavFloating()) {
  str2 = "text-default";
}
let num = 6;
if (isYouNavFloating.isYouNavFloating()) {
  num = 8;
}
let num2 = 2;
if (isYouNavFloating.isYouNavFloating()) {
  num2 = 4;
}
let obj = { shape: require("SolidCutout").CutoutShape.Circle, x: tmp4 - num - num2, y: -num2, size: num + 2 * num2 };
let items = [obj];
obj = {};
isYouNavFloating = {};
let prop;
if (!isYouNavFloating.isYouNavFloating()) {
  prop = require("_createForOfIteratorHelperLoose").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
}
isYouNavFloating.backgroundColor = prop;
isYouNavFloating.borderRadius = require("_createForOfIteratorHelperLoose").modules.button.BORDER_RADIUS;
isYouNavFloating.marginHorizontal = require("_createForOfIteratorHelperLoose").space.PX_4;
let str3 = "row";
if (isYouNavFloating.isYouNavFloating()) {
  str3 = "column";
}
isYouNavFloating.flexDirection = str3;
isYouNavFloating.alignItems = "center";
isYouNavFloating.padding = result;
isYouNavFloating.overflow = "hidden";
obj.container = isYouNavFloating;
isYouNavFloating = {};
let PX_4;
if (!isYouNavFloating.isYouNavFloating()) {
  PX_4 = require("_createForOfIteratorHelperLoose").space.PX_4;
}
isYouNavFloating.marginLeft = PX_4;
let PX_41;
if (isYouNavFloating.isYouNavFloating()) {
  PX_41 = require("_createForOfIteratorHelperLoose").space.PX_4;
}
isYouNavFloating.marginTop = PX_41;
obj.label = isYouNavFloating;
isYouNavFloating = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: num, width: num, position: "absolute", right: 0, top: 0 };
obj.dot = isYouNavFloating;
isYouNavFloating = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE, transform: null, position: "absolute", height: "200%", opacity: 0.15 };
let items1 = [{ rotate: "30deg" }];
isYouNavFloating.transform = items1;
obj.nitroSlant = isYouNavFloating;
isYouNavFloating = { width: require("_createForOfIteratorHelperLoose").space.PX_12, left: "75%" };
obj.nitroSlantLarge = isYouNavFloating;
isYouNavFloating = { width: require("_createForOfIteratorHelperLoose").space.PX_8, left: "45%" };
obj.nitroSlantSmall = isYouNavFloating;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(importAllResult.forwardRef((showRedDot, ref) => {
  let IconComponent;
  let accessibilityLabel;
  let label;
  let onPress;
  let showNitroSlant;
  ({ accessibilityLabel, label, showNitroSlant } = showRedDot);
  ({ onPress, IconComponent } = showRedDot);
  if (showNitroSlant === undefined) {
    showNitroSlant = false;
  }
  let flag = showRedDot.showRedDot;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  let obj = { size: str, color: closure_8 };
  const tmp2 = callback(IconComponent, obj);
  let tmp3 = tmp2;
  if (flag) {
    obj = {};
    obj = { cutouts: items, children: tmp2 };
    items = [callback(importDefault(7873), obj), ];
    const obj1 = { style: tmp.dot };
    items[1] = callback(View, obj1);
    obj.children = items;
    tmp3 = callback2(View, obj);
  }
  let tmp10;
  if (flag) {
    const obj2 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.text = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
    tmp10 = obj2;
  }
  const obj3 = { ref, style: tmp.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp10, onPress, hitSlop: importDefault(689).space.PX_8 };
  if (showNitroSlant) {
    let obj6 = require(15473) /* isYouNavFloating */;
    showNitroSlant = !obj6.isYouNavFloating();
  }
  if (showNitroSlant) {
    const obj4 = {};
    const obj5 = {};
    const items1 = [, ];
    ({ nitroSlant: arr2[0], nitroSlantSmall: arr2[1] } = tmp);
    obj5.style = items1;
    const items2 = [callback(View, obj5), ];
    obj6 = {};
    const items3 = [, ];
    ({ nitroSlant: arr4[0], nitroSlantLarge: arr4[1] } = tmp);
    obj6.style = items3;
    items2[1] = callback(View, obj6);
    obj4.children = items2;
    showNitroSlant = callback2(closure_6, obj4);
  }
  const items4 = [showNitroSlant, tmp3, ];
  if (null != label) {
    const obj7 = { style: tmp.label };
    str = "text-sm/semibold";
    if (obj13.isYouNavFloating()) {
      str = "text-xs/semibold";
    }
    obj7.variant = str;
    obj7.color = str2;
    obj7.maxFontSizeMultiplier = 2;
    if (null != label) {
      accessibilityLabel = label;
    }
    obj7.children = accessibilityLabel;
    let tmp23Result = callback(require(4126) /* Text */.Text, obj7);
    obj13 = require(15473) /* isYouNavFloating */;
    const tmp23 = callback;
  } else {
    tmp23Result = null;
    const obj11 = require(15473) /* isYouNavFloating */;
  }
  items4[2] = tmp23Result;
  obj3.children = items4;
  return callback2(require(8372) /* TwinButtons */.PressableScale, obj3);
}));
const result1 = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;
