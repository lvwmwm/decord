// Module ID: 13355
// Function ID: 13356
// Name: CheckpointButton
// Dependencies: [19, 17, 6375, 21, 5310, 13356, 575, 2]
// Exports: CheckpointButton, CheckpointShadowButton

// Module 13355 (CheckpointButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CheckpointPressable from "CheckpointPressable" /* 13356 */;
import react from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 6375 */;
import createStyles_mod from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;

let CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE;
let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_DARK_CYAN;
const Pressable = react_native.Pressable;
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { button: { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" }, shadowContainer: { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET }, shadow: { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_DARK_CYAN }, shadowDisabled: { borderColor: CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE } };
createStyles = createStyles.createStyles;
({ justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET });
({ backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_DARK_CYAN });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export function CheckpointButton(disabled) {
  let accessibilityHint;
  let accessibilityLabel;
  let children;
  let hitSlop;
  let onPress;
  let onPressIn;
  let style;
  let flag = disabled.disabled;
  ({ accessibilityLabel, accessibilityHint, children, onPress, onPressIn } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  ({ hitSlop, style } = disabled);
  const items = [closure_4().button, style];
  return <Pressable style={items} onPress={onPress} onPressIn={onPressIn} disabled={flag} hitSlop={hitSlop} accessibilityRole="button" accessibilityLabel={accessibilityLabel} accessibilityHint={accessibilityHint} accessibilityState={{ disabled: flag }}>{children}</Pressable>;
}
export function CheckpointShadowButton(disabled) {
  let accessibilityHint;
  let accessibilityLabel;
  let children;
  let items;
  let onPress;
  let onPressIn;
  let shadowColor;
  let style;
  let flag = disabled.disabled;
  ({ accessibilityLabel, accessibilityHint, children, onPress, onPressIn } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  ({ shadowColor, style } = disabled);
  const tmp = closure_4();
  const obj = { size: "lg", containerStyle: tmp.shadowContainer, style: items, shadowColor, onPress, onPressIn, disabled: flag, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState: { disabled: flag }, children };
  items = [tmp.shadow, , ];
  let shadowDisabled = flag;
  const tmp2 = jsx;
  const tmp3 = CheckpointPressableDefault;
  if (flag) {
    shadowDisabled = tmp.shadowDisabled;
  }
  items[1] = shadowDisabled;
  items[2] = style;
  return tmp2(tmp3, obj);
}
