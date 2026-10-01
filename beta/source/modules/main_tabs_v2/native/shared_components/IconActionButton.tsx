// Module ID: 12830
// Function ID: 12831
// Name: IconActionButton
// Dependencies: [19, 21, 4836, 576, 1364, 1177, 5288, 5435, 4832, 7294, 2]
// Exports: default

// Module 12830 (IconActionButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useFontScale from "useFontScale" /* 5288 */;
import shared_components_Badge from "shared_components/Badge" /* 7294 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const shared_components_BadgeDefault = shared_components_Badge;
let dependencyMap;

let closure_4;
let hasOwnProperty;
class ButtonBadge {
  constructor(badgePosition) {
    let str = badgePosition.badgePosition;
    if (str === undefined) {
      str = "left";
    }
    const tmp = closure_6();
    const obj = { size: shared_components_Badge.CHANNEL_BADGE_SIZE, maskSize: 2, style: "left" === str ? tmp.unreadBadgeLeft : tmp.unreadBadgeRight, maskColor: tmp.unreadBadgeMask.color };
    const tmp3 = shared_components_BadgeDefault;
    return React3(tmp3, obj);
  }
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const metroRequire = createStyles.createStyles(() => {
  let num;
  let obj2;
  const obj = { actionIconButtonPressable: { minWidth: 32, minHeight: 32, borderRadius: 20, marginEnd: 12, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 12 }, withoutMargin: { marginEnd: 0 }, filled: {}, outlined: obj2, roundButton: { maxWidth: 32, maxHeight: 32 }, actionIcon: { tintColor: nativeDefault.colors.ICON_SUBTLE }, actionText: { marginLeft: 4, marginTop: num }, unreadBadgeLeft: { position: "absolute", left: -2, top: -1 }, unreadBadgeRight: { position: "absolute", right: -2, top: -1 }, unreadBadgeMask: { color: nativeDefault.colors.BACKGROUND_BASE_LOW }, countStyle: { position: "relative", marginLeft: nativeDefault.space.PX_8 } };
  obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  ({ tintColor: nativeDefault.colors.ICON_SUBTLE });
  num = 0;
  const obj4 = PlatformUtils;
  if (obj4.isAndroid()) {
    num = -2;
  }
  ({ color: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ position: "relative", marginLeft: nativeDefault.space.PX_8 });
  return obj;
});
let closure_7 = react.memo((color) => {
  let IconComponent;
  let actionIcon;
  let source;
  let tmp2Result;
  ({ IconComponent, source } = color);
  color = color.color;
  const tmp = closure_6();
  dependencyMap = tmp;
  const items = [tmp, color, source];
  if (null != IconComponent) {
    let obj = { size: "sm", color: color(576).colors.ICON_SUBTLE };
    tmp2Result = closure_4(IconComponent, obj);
  } else {
    tmp2Result = tmp2();
  }
  return tmp2Result;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/IconActionButton.tsx");

export default function IconActionButton(variant) {
  let IconComponent;
  let accessibilityLabel;
  let badge;
  let badgePosition;
  let buttonText;
  let buttonTextColor;
  let color;
  let disabled;
  let hitSlop;
  let items;
  let items1;
  let noMargin;
  let onLongPress;
  let onPress;
  let source;
  let style;
  let str = variant.variant;
  ({ source, IconComponent } = variant);
  if (str === undefined) {
    str = "filled";
  }
  ({ buttonText, badge, badgePosition, color, buttonTextColor, accessibilityLabel, style } = variant);
  if (badgePosition === undefined) {
    badgePosition = "left";
  }
  let num = variant.count;
  if (num === undefined) {
    num = 0;
  }
  ({ noMargin, hitSlop, disabled, onPress, onLongPress } = variant);
  const tmp = closure_6();
  useFontScale;
  let tmp10Result = null != buttonText && tmp5 <= 1.2;
  const obj = { hitSlop, onPress, onLongPress, disabled, accessibilityRole: "button", accessibilityLabel, style: items, children: items1 };
  items = [tmp.actionIconButtonPressable, "outlined" === str ? tmp.outlined : tmp.filled, , , ];
  let roundButton;
  const PressableOpacity = tmp2(5435).PressableOpacity;
  const tmp7 = hasOwnProperty;
  if (!tmp10Result) {
    roundButton = tmp.roundButton;
  }
  items[2] = roundButton;
  let withoutMargin;
  if (noMargin) {
    withoutMargin = tmp.withoutMargin;
  }
  items[3] = withoutMargin;
  items[4] = style;
  items1 = [React3(closure_7, { IconComponent, color, source }), , , ];
  if (tmp10Result) {
    const obj2 = { variant: "text-sm/bold", color: buttonTextColor, style: tmp.actionText, children: buttonText };
    tmp10Result = tmp10(tmp2(4832).Text, obj2);
  }
  items1[1] = tmp10Result;
  let tmp10Result2 = null;
  if (num > 0) {
    const obj3 = { style: tmp.countStyle, value: num };
    tmp10Result2 = tmp10(tmp2(1177).Badge, obj3);
  }
  items1[2] = tmp10Result2;
  if (badge) {
    const obj4 = { badgePosition };
    badge = tmp10(ButtonBadge, obj4);
  }
  items1[3] = badge;
  return tmp7(PressableOpacity, obj);
};
export const ICON_ACTION_BUTTON_SIZE = 32;
export { ButtonBadge };
