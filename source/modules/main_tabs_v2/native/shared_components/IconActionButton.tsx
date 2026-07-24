// Module ID: 10132
// Function ID: 78400
// Name: ButtonBadge
// Dependencies: [31, 33, 4130, 689, 477, 1273, 1324, 4549, 4660, 4126, 9164, 2]
// Exports: default

// Module 10132 (ButtonBadge)
import importAllResult from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
class ButtonBadge {
  constructor(arg0) {
    str = global.badgePosition;
    if (str === undefined) {
      str = "left";
    }
    tmp = f78402(false);
    tmp2 = jsx;
    obj = {};
    tmp3 = require("DEFAULT_BADGE_SIZE");
    obj.size = require("DEFAULT_BADGE_SIZE").CHANNEL_BADGE_SIZE;
    obj.maskSize = 2;
    obj.style = "left" === str ? tmp.unreadBadgeLeft : tmp.unreadBadgeRight;
    obj.maskColor = tmp.unreadBadgeMask.color;
    return tmp2(tmp3, obj);
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { actionIconButtonPressable: { minWidth: 32, minHeight: 32, borderRadius: 20, marginEnd: 12, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 12 }, withoutMargin: { marginEnd: 0 } };
  obj = {};
  let prop;
  if (!arg0) {
    prop = importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
  }
  obj.backgroundColor = prop;
  obj.filled = obj;
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: importDefault(689).colors.INPUT_BACKGROUND_DEFAULT };
  const merged = Object.assign(importDefault(689).shadows.SHADOW_LOW);
  obj.outlined = obj;
  obj.roundButton = { maxWidth: 32, maxHeight: 32 };
  const obj1 = {};
  const colors = importDefault(689).colors;
  obj1.tintColor = arg0 ? colors.ICON_SUBTLE : colors.INTERACTIVE_TEXT_DEFAULT;
  obj.actionIcon = obj1;
  const obj2 = { marginLeft: 4 };
  let num2 = 0;
  if (obj6.isAndroid()) {
    num2 = -2;
  }
  obj2.marginTop = num2;
  obj.actionText = obj2;
  obj.unreadBadgeLeft = { position: "absolute", left: -2, top: -1 };
  obj.unreadBadgeRight = { position: "absolute", right: -2, top: -1 };
  obj6 = require(477) /* set */;
  obj.unreadBadgeMask = { color: importDefault(689).colors.BACKGROUND_BASE_LOW };
  const obj3 = { color: importDefault(689).colors.BACKGROUND_BASE_LOW };
  obj.countStyle = { position: "relative", marginLeft: importDefault(689).space.PX_8 };
  return obj;
});
let closure_7 = importAllResult.memo((color) => {
  let IconComponent;
  let source;
  ({ IconComponent, source } = color);
  let ICON_SUBTLE = color.color;
  const isRefreshEnabled = color.isRefreshEnabled;
  const tmp = callback2(isRefreshEnabled);
  const dependencyMap = tmp;
  const items = [tmp, ICON_SUBTLE, source];
  if (null != IconComponent) {
    let obj = { size: "sm" };
    if (isRefreshEnabled) {
      ICON_SUBTLE = ICON_SUBTLE(689).colors.ICON_SUBTLE;
    }
    obj.color = ICON_SUBTLE;
    let tmp2Result = closure_4(IconComponent, obj);
    const tmp4 = closure_4;
  } else {
    tmp2Result = tmp2();
  }
  return tmp2Result;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/IconActionButton.tsx");

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
  const tmp = importDefault(1324)("IconActionButton");
  const tmp2 = callback2(tmp);
  require(4549) /* getFontScale */;
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
    tmp5 = callback(require(4126) /* Text */.Text, obj);
  }
  items1[1] = tmp5;
  let tmp12 = null;
  if (num > 0) {
    obj = { style: tmp2.countStyle, value: num };
    tmp12 = callback(require(1273) /* Button */.Badge, obj);
  }
  items1[2] = tmp12;
  if (badge) {
    const obj1 = { badgePosition };
    badge = callback(ButtonBadge, obj1);
  }
  items1[3] = badge;
  obj.children = items1;
  return closure_5(require(4660) /* PressableBase */.PressableOpacity, obj);
};
export const ICON_ACTION_BUTTON_SIZE = 32;
export { ButtonBadge };
