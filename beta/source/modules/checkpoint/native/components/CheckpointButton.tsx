// Module ID: 13934
// Function ID: 13935
// Name: CheckpointButton
// Dependencies: [19, 17, 6199, 21, 5140, 13906, 575, 5724, 13878, 2]
// Exports: default

// Module 13934 (CheckpointButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointPressable from "CheckpointPressable" /* 13906 */;
import react from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 6199 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let CHECKPOINT_CONTROL_ICON_SIZE;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const ActivityIndicator = react_native.ActivityIndicator;
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE: metroRequire, CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_PRIMARY: metroImportDefault } = CheckpointConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3, label: { textTransform: "uppercase" }, icon: { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE } };
obj2 = { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default function CheckpointButton(onPress) {
  let Icon;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityState;
  let color;
  let disabled;
  let items2;
  let items3;
  let items4;
  let label;
  let labelStyle;
  let labelVariant;
  let shadowColor;
  let style;
  let tmp7;
  ({ Icon, label, labelVariant } = onPress);
  onPress = onPress.onPress;
  if (labelVariant === undefined) {
    labelVariant = disabled(color[5]).CHECKPOINT_PRESSABLE_SIZES.lg.textVariant;
  }
  ({ accessibilityLabel, disabled, labelStyle, accessibilityHint, accessibilityState } = onPress);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = onPress.loading;
  if (flag === undefined) {
    flag = false;
  }
  let str = onPress.iconPosition;
  if (str === undefined) {
    str = "start";
  }
  color = onPress.color;
  if (color === undefined) {
    color = closure_7;
  }
  let borderColor = onPress.borderColor;
  if (borderColor === undefined) {
    borderColor = closure_5;
  }
  color = undefined;
  ({ shadowColor, style } = onPress);
  const tmp3 = closure_10();
  const obj = disabled(color[7]);
  if (disabled) {
    color = obj.useToken("text-subtle");
  }
  const items = [disabled, borderColor];
  const items1 = [color];
  const memo = react.useMemo(() => ({ borderColor: disabled ? metroRequire : borderColor }), items);
  const memo1 = react.useMemo(() => ({ color }), items1);
  if (flag) {
    const obj2 = { color };
    tmp7 = closure_8(ActivityIndicator, obj2);
  } else {
    tmp7 = null;
    if (null != Icon) {
      const obj3 = { color, size: "custom", style: tmp3.icon };
      tmp7 = closure_8(Icon, obj3);
    }
  }
  const obj4 = { size: "lg", containerStyle: tmp3.container, style: items2, shadowColor, onPress, disabled, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState, children: items3 };
  items2 = [tmp3.button, memo, style];
  const tmp11 = closure_9;
  const tmp12 = borderColor;
  const tmp13 = borderColor(color[5]);
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  items3 = [, , ];
  const tmp14 = "start" === str && tmp7;
  items3[0] = tmp14;
  let tmp15 = null != label;
  if (tmp15) {
    const obj5 = { variant: labelVariant, style: items4, children: label };
    items4 = [tmp3.label, memo1, labelStyle];
    tmp15 = closure_8(tmp12(tmp4[8]), obj5);
  }
  items3[1] = tmp15;
  items3[2] = "end" === str && tmp7;
  return tmp11(tmp13, obj4);
};
