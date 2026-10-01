// Module ID: 11721
// Function ID: 11722
// Name: ChatInputActionButton
// Dependencies: [19, 17, 21, 4836, 576, 4531, 5435, 2]

// Module 11721 (ChatInputActionButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let tmp;
const Pressables = tmp(5435);
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((height, marginHorizontal) => {
  let size1;
  const obj = { actionButton: size, actionButtonIcon: size1, actionButtonIconActive: { tintColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT }, actionButtonIconDisabled: { tintColor: nativeDefault.colors.ICON_MUTED } };
  size = { borderRadius: nativeDefault.radii.sm, height, width: height, marginHorizontal, flexShrink: 0, flexDirection: "row", alignItems: "center", justifyContent: "center" };
  size1 = { tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT, width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE };
  ({ tintColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT });
  ({ tintColor: nativeDefault.colors.ICON_MUTED });
  return obj;
});
const memoResult = react.memo(react.forwardRef((active, ref) => {
  let IconComponent;
  let accessibilityActions;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityState;
  let accessible;
  let activeIconStyle;
  let activeStyle;
  let disabled;
  let onAccessibilityAction;
  let onPress;
  let style;
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, disabled, accessibilityState, activeStyle, activeIconStyle, onPress, accessible, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, IconComponent } = active);
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj3 = useToken;
  const token2 = obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp6 = closure_5(token, token1);
  const flattenResult = StyleSheet.flatten(style);
  let height;
  if (flattenResult != null) {
    height = flattenResult.height;
  }
  let tmp9 = token;
  if (typeof height === "number") {
    tmp9 = height;
  }
  const bound = Math.max(0, (token2 - tmp9) / 2);
  const items = [tmp6.actionButton, style, ];
  let tmp12 = flag;
  const PressableOpacity = Pressables.PressableOpacity;
  if (flag) {
    tmp12 = !disabled;
  }
  if (tmp12) {
    tmp12 = activeStyle;
  }
  items[2] = tmp12;
  let tmp13;
  if (bound > 0) {
    tmp13 = bound;
  }
  const obj5 = { disabled };
  const merged = Object.assign(accessibilityState);
  const items1 = [tmp6.actionButtonIcon, flag && tmp6.actionButtonIconActive, , ];
  if (flag) {
    flag = activeIconStyle;
  }
  items1[2] = flag;
  if (disabled) {
    disabled = tmp6.actionButtonIconDisabled;
  }
  items1[3] = disabled;
  return <PressableOpacity ref={arg1} style={items} hitSlop={tmp13} disabled={disabled} accessible={accessible} accessibilityRole="button" accessibilityState={obj5} accessibilityLabel={accessibilityLabel} accessibilityHint={accessibilityHint} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} onPress={onPress}>{null}</PressableOpacity>;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButton.tsx");

export default memoResult;
