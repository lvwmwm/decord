// Module ID: 10091
// Function ID: 78142
// Name: ButtonBadge
// Dependencies: []
// Exports: default

// Module 10091 (ButtonBadge)
class ButtonBadge {
  constructor(arg0) {
    str = global.badgePosition;
    if (str === undefined) {
      str = "left";
    }
    tmp = f78144(false);
    tmp2 = jsx;
    obj = {};
    tmp3 = importDefault(dependencyMap[10]);
    obj.size = arg1(dependencyMap[10]).CHANNEL_BADGE_SIZE;
    obj.maskSize = 2;
    obj.style = "left" === str ? tmp.unreadBadgeLeft : tmp.unreadBadgeRight;
    obj.maskColor = tmp.unreadBadgeMask.color;
    return tmp2(tmp3, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
let closure_6 = arg1(dependencyMap[2]).createStyles((arg0) => {
  let obj = { actionIconButtonPressable: { extraChildStyle: "isArray", extraUnderlayStyle: "Icon", 1458330862: "track", -516552717: "Array", -1047346797: "isArray", -1806515818: "hd", 1648162628: "sr", 500206416: "r", -630406073: "isArray", -570041138: "props" }, withoutMargin: { marginEnd: 0 } };
  obj = {};
  let prop;
  if (!arg0) {
    prop = importDefault(dependencyMap[3]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
  }
  obj.backgroundColor = prop;
  obj.filled = obj;
  obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: importDefault(dependencyMap[3]).colors.INPUT_BACKGROUND_DEFAULT };
  const merged = Object.assign(importDefault(dependencyMap[3]).shadows.SHADOW_LOW);
  obj.outlined = obj;
  obj.roundButton = { withTiming: "boolean", View: "string" };
  const obj1 = {};
  const colors = importDefault(dependencyMap[3]).colors;
  obj1.tintColor = arg0 ? colors.ICON_SUBTLE : colors.INTERACTIVE_TEXT_DEFAULT;
  obj.actionIcon = obj1;
  const obj2 = { marginLeft: 4 };
  let num2 = 0;
  if (obj6.isAndroid()) {
    num2 = -2;
  }
  obj2.marginTop = num2;
  obj.actionText = obj2;
  obj.unreadBadgeLeft = {};
  obj.unreadBadgeRight = {};
  const obj6 = arg1(dependencyMap[4]);
  obj.unreadBadgeMask = { color: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOW };
  const obj3 = { color: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOW };
  obj.countStyle = { position: "relative", marginLeft: importDefault(dependencyMap[3]).space.PX_8 };
  return obj;
});
let closure_7 = importAllResult.memo((color) => {
  let IconComponent;
  let source;
  ({ IconComponent, source } = color);
  const arg1 = source;
  let ICON_SUBTLE = color.color;
  const importDefault = ICON_SUBTLE;
  const isRefreshEnabled = color.isRefreshEnabled;
  const tmp = callback2(isRefreshEnabled);
  const dependencyMap = tmp;
  const items = [tmp, ICON_SUBTLE, source];
  if (null != IconComponent) {
    const obj = { size: "sm" };
    if (isRefreshEnabled) {
      ICON_SUBTLE = importDefault(dependencyMap[3]).colors.ICON_SUBTLE;
    }
    obj.color = ICON_SUBTLE;
    let tmp2Result = closure_4(IconComponent, obj);
    const tmp4 = closure_4;
  } else {
    tmp2Result = tmp2();
  }
  return tmp2Result;
});
const obj2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/IconActionButton.tsx");

export default function IconActionButton(variant) {
  let IconComponent;
  let accessibilityLabel;
  let badge;
  let badgePosition;
  let buttonText;
  let color;
  let disabled;
  let hitSlop;
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
  ({ buttonText, badge, badgePosition, color, accessibilityLabel, style } = variant);
  if (badgePosition === undefined) {
    badgePosition = "left";
  }
  let num = variant.count;
  if (num === undefined) {
    num = 0;
  }
  ({ noMargin, hitSlop, disabled, onPress, onLongPress } = variant);
  const tmp = importDefault(dependencyMap[6])("IconActionButton");
  const tmp2 = callback2(tmp);
  arg1(dependencyMap[7]);
  let tmp5 = null != buttonText;
  if (tmp5) {
    tmp5 = tmp4 <= 1.2;
  }
  let obj = { hitSlop, onPress, onLongPress, disabled, accessibilityRole: "button", accessibilityLabel };
  const items = [tmp2.actionIconButtonPressable, "outlined" === str ? tmp2.outlined : tmp2.filled, , , ];
  let roundButton;
  if (!tmp5) {
    roundButton = tmp2.roundButton;
  }
  items[2] = roundButton;
  let withoutMargin;
  if (noMargin) {
    withoutMargin = tmp2.withoutMargin;
  }
  items[3] = withoutMargin;
  items[4] = style;
  obj.style = items;
  const items1 = [callback(closure_7, { IconComponent, color, source, isRefreshEnabled: tmp }), , , ];
  if (tmp5) {
    obj = { variant: "text-sm/bold", style: tmp2.actionText, children: buttonText };
    tmp5 = callback(arg1(dependencyMap[9]).Text, obj);
  }
  items1[1] = tmp5;
  let tmp12 = null;
  if (num > 0) {
    obj = { style: tmp2.countStyle, value: num };
    tmp12 = callback(arg1(dependencyMap[5]).Badge, obj);
  }
  items1[2] = tmp12;
  if (badge) {
    const obj1 = { badgePosition };
    badge = callback(ButtonBadge, obj1);
  }
  items1[3] = badge;
  obj.children = items1;
  return closure_5(arg1(dependencyMap[8]).PressableOpacity, obj);
};
export const ICON_ACTION_BUTTON_SIZE = 32;
export { ButtonBadge };
