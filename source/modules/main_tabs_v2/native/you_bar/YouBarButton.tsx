// Module ID: 15119
// Function ID: 115150
// Name: YouBarButtonIcon
// Dependencies: [31, 27, 13997, 33, 4130, 689, 7873, 9128, 7771, 2]

// Module 15119 (YouBarButtonIcon)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function YouBarButtonIcon(hasBadge) {
  let badgeStyle;
  let icon;
  hasBadge = hasBadge.hasBadge;
  let obj = { size: closure_6, badgeRadius: 4, borderWidth: 2 };
  ({ icon, badgeStyle } = hasBadge);
  const tmp = (function useIconBadgeCutout(size) {
    size = size.size;
    let num = size.xOffset;
    if (num === undefined) {
      num = 0;
    }
    let num2 = size.yOffset;
    if (num2 === undefined) {
      num2 = 0;
    }
    const badgeRadius = size.badgeRadius;
    const badgeWidth = size.badgeWidth;
    const borderWidth = size.borderWidth;
    const items = [badgeRadius, borderWidth, size, num, num2, badgeWidth];
    return outer1_3.useMemo(() => {
      const sum = badgeRadius + borderWidth;
      const result = 2 * sum;
      let sum1 = result;
      if (null != badgeWidth) {
        sum1 = badgeWidth + 2 * borderWidth;
      }
      const obj = { shape: hasBadge(outer2_2[6]).CutoutShape.RoundedRect, x: size - (result - borderWidth) + num, y: size - (result - borderWidth) + num2, width: sum1, height: result, cornerRadius: Math.min(sum, size / 2, sum1 / 2) };
      return obj;
    }, items);
  })(obj);
  const importDefault = tmp;
  obj = { size: closure_6, badgeSize: 8 };
  let items = [tmp, hasBadge];
  obj = { style: obj1 };
  const memo = importAllResult.useMemo(() => {
    if (hasBadge) {
      const items = [closure_1];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  let items1 = [callback(importDefault(7873), { cutouts: memo, children: icon }), ];
  if (hasBadge) {
    const obj2 = { style: tmp2, size: 8, badgeStyle };
    hasBadge = callback(importDefault(9128), obj2);
  }
  items1[1] = hasBadge;
  obj.children = items1;
  return closure_8(View, obj);
}
class YouBarButtonContainer {
  constructor(arg0) {
    obj = { style: c9().buttonContainer, children: global.children };
    return jsx(View, obj);
  }
}
({ YOU_BAR_BUTTON_HIT_SLOP: closure_5, YOU_BAR_BUTTON_ICON_SIZE: closure_6 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { position: "relative", borderRadius: require("_createForOfIteratorHelperLoose").modules.button.BORDER_RADIUS, overflow: "hidden" };
obj.buttonContainer = obj;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function YouBarButton(arg0) {
  let accessibilityLabel;
  let badgeStyle;
  let hasBadge;
  let hasNameplate;
  let icon;
  let onLongPress;
  let onPress;
  let obj = {};
  ({ hasNameplate, icon, hasBadge, badgeStyle, onPress, onLongPress, accessibilityLabel } = arg0);
  obj = { accessibilityLabel };
  let str = "tertiary";
  if (hasNameplate) {
    str = "secondary-overlay";
  }
  obj.variant = str;
  obj.size = "sm";
  obj.icon = callback(YouBarButtonIcon, { icon, badgeStyle, hasBadge });
  obj.onPress = onPress;
  obj.onLongPress = onLongPress;
  obj.hitSlop = closure_5;
  obj.children = callback(require(7771) /* IconButton */.IconButton, obj);
  return callback(YouBarButtonContainer, obj);
});
let result = require("CONNECTION_BANNER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarButton.tsx");

export default memoResult;
export { YouBarButtonContainer };
