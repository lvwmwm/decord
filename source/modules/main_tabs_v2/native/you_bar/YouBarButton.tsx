// Module ID: 14992
// Function ID: 112905
// Name: YouBarButtonIcon
// Dependencies: []

// Module 14992 (YouBarButtonIcon)
function YouBarButtonIcon(hasBadge) {
  let badgeStyle;
  let icon;
  hasBadge = hasBadge.hasBadge;
  const arg1 = hasBadge;
  let obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, size: closure_6 };
  ({ icon, badgeStyle } = hasBadge);
  const tmp = function useIconBadgeCutout(size) {
    size = size.size;
    const hasBadge = size;
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
    return badgeRadius.useMemo(() => {
      const sum = badgeRadius + borderWidth;
      const result = 2 * sum;
      let sum1 = result;
      if (null != badgeWidth) {
        sum1 = badgeWidth + 2 * borderWidth;
      }
      const obj = { shape: size(num2[6]).CutoutShape.RoundedRect, x: size - (result - borderWidth) + num, y: size - (result - borderWidth) + num2, width: sum1, height: result, cornerRadius: Math.min(sum, size / 2, sum1 / 2) };
      return obj;
    }, items);
  }(obj);
  const importDefault = tmp;
  obj = { size: closure_6, badgeSize: 8 };
  const items = [tmp, hasBadge];
  obj = { style: obj1 };
  const memo = importAllResult.useMemo(() => {
    if (hasBadge) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  const items1 = [callback(importDefault(dependencyMap[6]), { cutouts: memo, children: icon }), ];
  if (hasBadge) {
    const obj2 = { style: tmp2, size: 8, badgeStyle };
    hasBadge = callback(importDefault(dependencyMap[7]), obj2);
  }
  items1[1] = hasBadge;
  obj.children = items1;
  return closure_8(View, obj);
}
class YouBarButtonContainer {
  constructor(arg0) {
    obj = { style: closure_9().buttonContainer, children: global.children };
    return jsx(View, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ YOU_BAR_BUTTON_HIT_SLOP: closure_5, YOU_BAR_BUTTON_ICON_SIZE: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).modules.button.BORDER_RADIUS };
obj.buttonContainer = obj;
let closure_9 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
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
  obj.children = callback(arg1(dependencyMap[8]).IconButton, obj);
  return callback(YouBarButtonContainer, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarButton.tsx");

export default memoResult;
export { YouBarButtonContainer };
