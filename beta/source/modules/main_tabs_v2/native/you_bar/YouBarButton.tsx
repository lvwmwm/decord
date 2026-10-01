// Module ID: 16029
// Function ID: 16030
// Name: YouBarButton
// Dependencies: [19, 17, 14627, 21, 4836, 576, 8276, 7294, 7363, 2]

// Module 16029 (YouBarButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import IconButton2 from "IconButton" /* 7363 */;
import react from "react" /* 19 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
class YouBarButtonIcon {
  constructor(hasBadge) {
    let badgeStyle;
    let icon;
    let items3;
    hasBadge = hasBadge.hasBadge;
    let memo;
    const obj = { size, badgeRadius: 4, borderWidth: 2 };
    let tmp = size;
    let num2;
    let badgeRadius;
    let badgeWidth;
    let borderWidth;
    size = obj.size;
    let num = obj.xOffset;
    ({ icon, badgeStyle } = hasBadge);
    if (num === undefined) {
      num = 0;
    }
    num2 = obj.yOffset;
    if (num2 === undefined) {
      num2 = 0;
    }
    badgeRadius = obj.badgeRadius;
    badgeWidth = obj.badgeWidth;
    borderWidth = obj.borderWidth;
    let items = [badgeRadius, borderWidth, size, num, num2, badgeWidth];
    memo = react.useMemo(() => {
      const sum = badgeRadius + borderWidth;
      const result = 2 * sum;
      let sum1 = result;
      if (null != badgeWidth) {
        sum1 = tmp4 + 2 * tmp;
      }
      size = { shape: hasBadge(dependencyMap[6]).CutoutShape.RoundedRect, x: size - (result - tmp) + num, y: size - (result - tmp) + num2, width: sum1, height: result, cornerRadius: Math.min(sum, size / 2, sum1 / 2) };
      return size;
    }, items);
    const obj3 = { size: tmp, badgeSize: 8 };
    let num4;
    const size2 = obj3.size;
    const badgeSize = obj3.badgeSize;
    let num3 = obj3.xOffset;
    if (num3 === undefined) {
      num3 = 0;
    }
    num4 = obj3.yOffset;
    if (num4 === undefined) {
      num4 = 0;
    }
    let items1 = [size2, badgeSize, num4, num3];
    const items2 = [memo, hasBadge];
    const memo1 = obj2.useMemo(() => {
      const rect = { position: "absolute", left: size2 - badgeSize + num3, top: size2 - badgeSize + num4, right: "children", bottom: "icon", padding: "justifyContent", minWidth: "paddingHorizontal" };
      return rect;
    }, items1);
    const obj4 = { style: { position: "relative", height: tmp, width: tmp }, children: items3 };
    const memo2 = obj2.useMemo(() => {
      let items1;
      const tmp = hasBadge;
      if (tmp) {
        const items = [memo];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }, items2);
    items3 = [closure_7(memo(8276), { cutouts: memo2, children: icon }), ];
    const tmp5 = closure_8;
    const tmp6 = View;
    const tmp7 = closure_7;
    const tmp8 = memo;
    if (hasBadge) {
      const obj5 = { style: memo1, size: 8, badgeStyle };
      hasBadge = tmp7(tmp8(7294), obj5);
    }
    items3[1] = hasBadge;
    return tmp5(tmp6, obj4);
  }
}
class YouBarButtonContainer {
  constructor(children) {
    const obj = { style: closure_9().buttonContainer, children: children.children };
    return metroImportDefault(View, obj);
  }
}
const View = react_native.View;
({ YOU_BAR_BUTTON_HIT_SLOP: hasOwnProperty, YOU_BAR_BUTTON_ICON_SIZE: metroRequire } = YouBarConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { buttonContainer: obj2 };
obj2 = { position: "relative", borderRadius: nativeDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
const React4 = createStyles.createStyles(obj);
const memoResult = react.memo(function YouBarButton(arg0) {
  let accessibilityLabel;
  let badgeStyle;
  let hasBadge;
  let hasNameplate;
  let icon;
  let onLongPress;
  let onPress;
  let str;
  ({ hasNameplate, icon, hasBadge, badgeStyle, onPress, onLongPress, accessibilityLabel } = arg0);
  const obj = { accessibilityLabel, variant: str, size: "sm", icon: metroImportDefault(YouBarButtonIcon, { icon, badgeStyle, hasBadge }), onPress, onLongPress, hitSlop: hasOwnProperty };
  str = "tertiary";
  const IconButton = IconButton2.IconButton;
  const tmp2 = YouBarButtonContainer;
  if (hasNameplate) {
    str = "secondary-overlay";
  }
  const obj2 = { children: metroImportDefault(IconButton, obj) };
  return metroImportDefault(tmp2, obj2);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarButton.tsx");

export default memoResult;
export { YouBarButtonIcon };
export { YouBarButtonContainer };
