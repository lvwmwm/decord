// Module ID: 11345
// Function ID: 88214
// Dependencies: [31, 27, 33, 4130, 689, 1324, 3834, 4660, 2]

// Module 11345
import importAllResult from "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles((arg0, height, marginHorizontal) => {
  let obj = {};
  obj = {};
  const radii = importDefault(689).radii;
  obj.borderRadius = arg0 ? radii.sm : radii.round;
  obj.height = height;
  obj.width = height;
  obj.marginHorizontal = marginHorizontal;
  obj.flexShrink = 0;
  obj.flexDirection = "row";
  obj.alignItems = "center";
  obj.justifyContent = "center";
  let prop;
  if (!arg0) {
    prop = importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
  }
  obj.backgroundColor = prop;
  obj.actionButton = obj;
  obj = { tintColor: importDefault(689).colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT, width: importDefault(689).modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE, height: importDefault(689).modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE };
  obj.actionButtonIcon = obj;
  obj.actionButtonIconActive = { tintColor: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  const obj1 = { tintColor: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  obj.actionButtonIconDisabled = { tintColor: importDefault(689).colors.ICON_MUTED };
  return obj;
});
const memoResult = importAllResult.memo(importAllResult.forwardRef((active, ref) => {
  let IconComponent;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityState;
  let accessible;
  let activeIconStyle;
  let activeStyle;
  let chatInputFloating;
  let disabled;
  let enabled;
  let onAccessibilityAction;
  let onPress;
  let style;
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, disabled, accessibilityState } = active);
  ({ activeStyle, activeIconStyle, onPress, accessible, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, IconComponent } = active);
  let obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInputActionButton" });
  ({ enabled, chatInputFloating } = mobileVisualRefreshConfig);
  let obj1 = require(3834) /* map */;
  let token = obj1.useToken(importDefault(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const token1 = require(3834) /* map */.useToken(importDefault(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj3 = require(3834) /* map */;
  const token2 = require(3834) /* map */.useToken(importDefault(689).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp5 = callback(enabled, token, token1);
  let tmp6;
  if (chatInputFloating) {
    const flattenResult = StyleSheet.flatten(style);
    let height;
    if (null != flattenResult) {
      height = flattenResult.height;
    }
    tmp6 = height;
  }
  if ("number" === typeof tmp6) {
    token = tmp6;
  }
  const bound = Math.max(0, (token2 - token) / 2);
  obj = { ref };
  const items = [tmp5.actionButton, style, ];
  let tmp13 = flag;
  if (flag) {
    tmp13 = !disabled;
  }
  if (tmp13) {
    tmp13 = activeStyle;
  }
  items[2] = tmp13;
  obj.style = items;
  let tmp14;
  if (bound > 0) {
    tmp14 = bound;
  }
  obj.hitSlop = tmp14;
  obj.disabled = disabled;
  obj.accessible = accessible;
  obj.accessibilityRole = "button";
  obj = { disabled };
  const merged = Object.assign(accessibilityState);
  obj.accessibilityState = obj;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  obj.onPress = onPress;
  obj1 = { size: "custom" };
  const items1 = [tmp5.actionButtonIcon, , , ];
  let actionButtonIconActive = flag;
  if (flag) {
    actionButtonIconActive = tmp5.actionButtonIconActive;
  }
  items1[1] = actionButtonIconActive;
  if (flag) {
    flag = activeIconStyle;
  }
  items1[2] = flag;
  if (disabled) {
    disabled = tmp5.actionButtonIconDisabled;
  }
  items1[3] = disabled;
  obj1.style = items1;
  obj.children = <IconComponent size="custom" />;
  return jsx(require(4660) /* PressableBase */.PressableOpacity, { disabled });
}));
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButton.tsx");

export default memoResult;
