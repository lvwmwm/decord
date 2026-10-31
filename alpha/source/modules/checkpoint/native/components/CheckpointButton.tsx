// Module ID: 13687
// Function ID: 13688
// Name: CheckpointButton
// Dependencies: [19, 17, 6066, 21, 5014, 13662, 575, 5596, 13624, 2]
// Exports: default

// Module 13687 (CheckpointButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5596 */;
import CheckpointPressable from "CheckpointPressable" /* 13662 */;
import react from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp13;
const CheckpointTextDefault = tmp13(13624);
const ActivityIndicator = react_native.ActivityIndicator;
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY: metroRequire } = CheckpointConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3, label: { textTransform: "uppercase" } };
obj2 = { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
let closure_9 = createStyles(obj);
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
  let tmp8;
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
    color = metroRequire;
  }
  let borderColor = loading.borderColor;
  if (borderColor === undefined) {
    borderColor = hasOwnProperty;
  }
  color = undefined;
  ({ shadowColor, style } = loading);
  const tmp = closure_9();
  const obj = useToken;
  const token = obj.useToken("text-subtle");
  const obj2 = useToken;
  const token1 = obj2.useToken("border-normal");
  if (disabled) {
    color = token;
  }
  const items = [disabled, token1, borderColor];
  const items1 = [color];
  const memo = react.useMemo(() => ({ borderColor: disabled ? token1 : borderColor }), items);
  const memo1 = react.useMemo(() => ({ color }), items1);
  if (flag) {
    const obj3 = { color };
    tmp8 = metroImportDefault(ActivityIndicator, obj3);
  } else {
    tmp8 = null;
    if (null != Icon) {
      const obj4 = { color, size: str2 };
      tmp8 = metroImportDefault(Icon, obj4);
    }
  }
  const obj5 = { size: "lg", containerStyle: tmp.container, style: items2, shadowColor, onPress, disabled, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState, children: items3 };
  items2 = [tmp.button, memo, style];
  const tmp12 = metroImportAll;
  const tmp14 = CheckpointPressableDefault;
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  items3 = [, , ];
  const tmp15 = "start" === str && tmp8;
  items3[0] = tmp15;
  let tmp16 = null != label;
  if (tmp16) {
    const obj6 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: items4, children: label };
    items4 = [tmp.label, memo1];
    const tmp13Result = CheckpointTextDefault;
    tmp16 = metroImportDefault(tmp13Result, obj6);
  }
  items3[1] = tmp16;
  items3[2] = "end" === str && tmp8;
  return tmp12(tmp14, obj5);
};
