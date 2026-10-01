// Module ID: 13006
// Function ID: 13007
// Name: IconButton/IconButton
// Dependencies: [19, 21, 4836, 576, 5753, 5435, 1177, 2]

// Module 13006 (IconButton/IconButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let obj4;
class SquareIconButton {
  constructor(size) {
    let Icon;
    let REFRESH_SMALL_16;
    let accessibilityHidden;
    let accessibilityLabel;
    let closure_1;
    let disableColor;
    let disabled;
    let iconStyle;
    let items1;
    let items2;
    let obj2;
    let onPress;
    let source;
    let style;
    size = size.size;
    ({ disableColor, accessibilityHidden } = size);
    ({ onPress, source, style, iconStyle, accessibilityLabel, disabled } = size);
    const tmp = closure_5();
    dependencyMap = tmp;
    const items = [size, tmp];
    const memo = react.useMemo(() => {
      if (obj.MEDIUM_32 === size) {
        return closure_1.medium;
      } else if (obj.LARGE_40 === tmp) {
        return closure_1.large;
      } else {
        const SMALL_24 = tmp2.SMALL_24;
        return closure_1.small;
      }
    }, items);
    let tmp6;
    const PressableOpacity = size(5435).PressableOpacity;
    if (!accessibilityHidden) {
      tmp6 = accessibilityLabel;
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: tmp6, accessibilityElementsHidden: accessibilityHidden, onPress, disabled, style: items1, children: tmp3(Icon, obj2) };
    items1 = [tmp.container, style, memo];
    Icon = tmp4(1177).Icon;
    if (size === obj.LARGE_40) {
      REFRESH_SMALL_16 = tmp4(1177).Icon.Sizes.MEDIUM;
    } else {
      REFRESH_SMALL_16 = tmp4(1177).Icon.Sizes.REFRESH_SMALL_16;
    }
    let icon = null;
    obj2 = { size: REFRESH_SMALL_16, style: items2, disableColor, source };
    if (!disableColor) {
      icon = tmp.icon;
    }
    items2 = [icon, iconStyle];
    return jsx(PressableOpacity, obj);
  }
}
class CircularIconButton {
  constructor(size) {
    let disableColor;
    let items;
    let largeCircular;
    let obj;
    let style;
    size = size.size;
    ({ style, disableColor } = size);
    const merged = Object.assign(size, Object.assign({ style: 0, size: 0, disableColor: 0 }));
    const tmp2 = closure_5();
    const tmp3 = jsx;
    const tmp4 = SquareIconButton;
    if (obj.SMALL_24 === size) {
      largeCircular = tmp2.smallCircular;
    } else if (obj.MEDIUM_32 === size) {
      largeCircular = tmp2.mediumCircular;
    } else if (obj.LARGE_40 === size) {
      largeCircular = tmp2.largeCircular;
    }
    obj = { style: items, size, disableColor };
    items = [largeCircular, style];
    const merged1 = Object.assign(merged);
    return tmp3(tmp4, obj);
  }
}
const jsx = Fragment.jsx;
const Sizes = { SMALL_24: 24, [24]: "SMALL_24", MEDIUM_32: 32, [32]: "MEDIUM_32", LARGE_40: 40, [40]: "LARGE_40" };
let createStyles = createStyles_mod;
let obj2 = { container: { borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: LegacyTokens.DARK_PRIMARY_700_LIGHT_PRIMARY_230 }, small: { height: Sizes.SMALL_24, width: Sizes.SMALL_24 }, medium: { height: Sizes.MEDIUM_32, width: Sizes.MEDIUM_32 }, large: { height: Sizes.LARGE_40, width: Sizes.LARGE_40 }, smallCircular: obj4, mediumCircular: { borderRadius: Sizes.MEDIUM_32 / 2 }, largeCircular: { borderRadius: Sizes.LARGE_40 / 2 }, icon: { tintColor: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_500 } };
createStyles = createStyles.createStyles;
obj4 = { borderRadius: Sizes.SMALL_24 / 2 };
({ borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: LegacyTokens.DARK_PRIMARY_700_LIGHT_PRIMARY_230 });
({ tintColor: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_500 });
const hasOwnProperty = createStyles(obj2);
SquareIconButton.Sizes = Sizes;
CircularIconButton.Sizes = Sizes;
let size = size_mod;
const result = size.fileFinishedImporting("design/void/IconButton/native/IconButton.tsx");

export { SquareIconButton };
export { CircularIconButton };
