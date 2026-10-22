// Module ID: 12971
// Function ID: 12972
// Name: CheckpointButton
// Dependencies: [19, 6001, 21, 4969, 12947, 587, 558, 576, 5238, 12911, 2]

// Module 12971 (CheckpointButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 5238 */;
import CheckpointTextDefault from "CheckpointText" /* 12911 */;
import CheckpointPressable from "CheckpointPressable" /* 12947 */;
import react from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 6001 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ CHECKPOINT_DARK_CYAN: closure_4, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3, label: { textTransform: "uppercase" } };
obj2 = { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointButton(arg0) {
  let Icon;
  let accessibilityHint;
  let accessibilityLabel;
  let accessibilityState;
  let borderColor;
  let color;
  let disabled;
  let iconPosition;
  let iconSize;
  let items;
  let items1;
  let label;
  let onPress;
  let shadowColor;
  let style;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(28);
  ({ onPress, Icon, label, accessibilityLabel, accessibilityHint, accessibilityState, disabled, iconPosition, iconSize, color, borderColor, shadowColor, style } = arg0);
  let str = "start";
  if (undefined !== iconPosition) {
    str = iconPosition;
  }
  let str2 = "sm";
  if (undefined !== iconSize) {
    str2 = iconSize;
  }
  if (undefined === color) {
    color = hasOwnProperty;
  }
  if (undefined === borderColor) {
    borderColor = React3;
  }
  const tmp5 = closure_8();
  const tmpResult = useToken;
  const token = tmpResult.useToken("text-subtle");
  const tmpResult2 = useToken;
  const token1 = tmpResult2.useToken("border-normal");
  if (undefined !== disabled && disabled) {
    color = token;
  }
  if (undefined !== disabled && disabled) {
    borderColor = token1;
  }
  if (cResult[0] !== borderColor) {
    const obj2 = { borderColor };
    cResult[0] = borderColor;
    cResult[1] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== color) {
    const obj3 = { color };
    cResult[2] = color;
    cResult[3] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Icon) {
    if (cResult[5] === color) {
      let tmp10;
      if (cResult[6] === str2) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp8) {
        if (cResult[9] === style) {
          let tmp13;
          if (cResult[10] === tmp5.button) {
            tmp13 = cResult[11];
          }
          if (accessibilityLabel == null) {
            accessibilityLabel = label;
          }
          if (cResult[12] === label) {
            if (cResult[13] === tmp9) {
              let tmp16;
              if (cResult[14] === tmp5.label) {
                tmp16 = cResult[15];
              }
              if (cResult[16] === accessibilityHint) {
                if (cResult[17] === accessibilityState) {
                  if (cResult[18] === (undefined !== disabled && disabled)) {
                    if (cResult[19] === onPress) {
                      if (cResult[20] === shadowColor) {
                        if (cResult[21] === tmp5.container) {
                          if (cResult[22] === tmp13) {
                            if (cResult[23] === accessibilityLabel) {
                              if (cResult[24] === ("start" === str && tmp10)) {
                                if (cResult[25] === tmp16) {
                                  let tmp22;
                                  if (cResult[26] === ("end" === str && tmp10)) {
                                    tmp22 = cResult[27];
                                  }
                                  return tmp22;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj4 = { size: "lg", containerStyle: tmp5.container, style: tmp13, shadowColor, onPress, disabled: undefined !== disabled && disabled, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState, children: items };
              items = ["start" === str && tmp10, tmp16, "end" === str && tmp10];
              const tmp25 = metroImportDefault(CheckpointPressableDefault, obj4);
              cResult[16] = accessibilityHint;
              cResult[17] = accessibilityState;
              cResult[18] = undefined !== disabled && disabled;
              cResult[19] = onPress;
              cResult[20] = shadowColor;
              cResult[21] = tmp5.container;
              cResult[22] = tmp13;
              cResult[23] = accessibilityLabel;
              cResult[24] = "start" === str && tmp10;
              cResult[25] = tmp16;
              cResult[26] = "end" === str && tmp10;
              cResult[27] = tmp25;
              tmp22 = tmp25;
            }
          }
          let tmp17 = null != label;
          if (tmp17) {
            const obj5 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: items1, children: label };
            items1 = [tmp5.label, tmp9];
            const tmp20 = CheckpointTextDefault;
            tmp17 = metroRequire(tmp20, obj5);
          }
          cResult[12] = label;
          cResult[13] = tmp9;
          cResult[14] = tmp5.label;
          cResult[15] = tmp17;
          tmp16 = tmp17;
        }
      }
      const items2 = [tmp5.button, tmp8, style];
      cResult[8] = tmp8;
      cResult[9] = style;
      cResult[10] = tmp5.button;
      cResult[11] = items2;
      tmp13 = items2;
    }
  }
  let tmp11 = null;
  if (null != Icon) {
    const obj6 = { color, size: str2 };
    tmp11 = metroRequire(Icon, obj6);
  }
  cResult[4] = Icon;
  cResult[5] = color;
  cResult[6] = str2;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : (function CheckpointButton(iconPosition) {
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
  ({ Icon, label, accessibilityLabel, disabled } = iconPosition);
  ({ onPress, accessibilityHint, accessibilityState } = iconPosition);
  if (disabled === undefined) {
    disabled = false;
  }
  let str = iconPosition.iconPosition;
  if (str === undefined) {
    str = "start";
  }
  let str2 = iconPosition.iconSize;
  if (str2 === undefined) {
    str2 = "sm";
  }
  let color = iconPosition.color;
  if (color === undefined) {
    color = hasOwnProperty;
  }
  let borderColor = iconPosition.borderColor;
  if (borderColor === undefined) {
    borderColor = React3;
  }
  color = undefined;
  ({ shadowColor, style } = iconPosition);
  const tmp = closure_8();
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
  let tmp8 = null;
  const memo1 = react.useMemo(() => ({ color }), items1);
  if (null != Icon) {
    const obj3 = { color, size: str2 };
    tmp8 = metroRequire(Icon, obj3);
  }
  const obj4 = { size: "lg", containerStyle: tmp.container, style: items2, shadowColor, onPress, disabled, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState, children: items3 };
  items2 = [tmp.button, memo, style];
  const tmp10 = metroImportDefault;
  const tmp12 = CheckpointPressableDefault;
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  items3 = [, , ];
  const tmp13 = "start" === str && tmp8;
  items3[0] = tmp13;
  let tmp14 = null != label;
  if (tmp14) {
    const obj5 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: items4, children: label };
    items4 = [tmp.label, memo1];
    const tmp11Result = CheckpointTextDefault;
    tmp14 = metroRequire(tmp11Result, obj5);
  }
  items3[1] = tmp14;
  items3[2] = "end" === str && tmp8;
  return tmp10(tmp12, obj4);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default tmp5;
