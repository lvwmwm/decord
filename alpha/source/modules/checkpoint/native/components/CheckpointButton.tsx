// Module ID: 13933
// Function ID: 13934
// Name: CheckpointButton
// Dependencies: [19, 17, 6204, 21, 5143, 13906, 575, 5734, 13878, 2]
// Exports: default

// Module 13933 (CheckpointButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointPressable from "CheckpointPressable" /* 13906 */;
import react from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 6204 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const ActivityIndicator = react_native.ActivityIndicator;
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE: metroRequire, CHECKPOINT_PRIMARY: metroImportDefault } = CheckpointConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3, label: { textTransform: "uppercase" } };
obj2 = { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default function CheckpointButton(loading) {
  let Icon;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityState;
  let disabled;
  let items2;
  let items3;
  let items4;
  let label;
  let onPress;
  let shadowColor;
  let style;
  let tmp6;
  ({ Icon, label, accessibilityLabel, disabled } = loading);
  ({ onPress, accessibilityHint, accessibilityState } = loading);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let str = loading.iconPosition;
  if (str === undefined) {
    str = "start";
  }
  let str2 = loading.iconSize;
  if (str2 === undefined) {
    str2 = "sm";
  }
  let color = loading.color;
  if (color === undefined) {
    color = closure_7;
  }
  let borderColor = loading.borderColor;
  if (borderColor === undefined) {
    borderColor = closure_5;
  }
  color = undefined;
  ({ shadowColor, style } = loading);
  const tmp = closure_10();
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
    tmp6 = closure_8(ActivityIndicator, obj2);
  } else {
    tmp6 = null;
    if (null != Icon) {
      const obj3 = { color, size: str2 };
      tmp6 = closure_8(Icon, obj3);
    }
  }
  const obj4 = { size: "lg", containerStyle: tmp.container, style: items2, shadowColor, onPress, disabled, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState, children: items3 };
  items2 = [tmp.button, memo, style];
  const tmp10 = closure_9;
  const tmp11 = borderColor;
  const tmp12 = borderColor(color[5]);
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  items3 = [, , ];
  const tmp13 = "start" === str && tmp6;
  items3[0] = tmp13;
  let tmp14 = null != label;
  if (tmp14) {
    const obj5 = { variant: disabled(color[5]).CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: items4, children: label };
    items4 = [tmp.label, memo1];
    const tmp11Result = tmp11(color[8]);
    tmp14 = closure_8(tmp11Result, obj5);
  }
  items3[1] = tmp14;
  items3[2] = "end" === str && tmp6;
  return tmp10(tmp12, obj4);
};
