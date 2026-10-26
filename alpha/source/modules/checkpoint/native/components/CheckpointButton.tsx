// Module ID: 13035
// Function ID: 13036
// Name: CheckpointButton
// Dependencies: [19, 17, 6015, 21, 4971, 13010, 587, 558, 576, 5252, 12971, 2]

// Module 13035 (CheckpointButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 5252 */;
import CheckpointTextDefault from "CheckpointText" /* 12971 */;
import CheckpointPressable from "CheckpointPressable" /* 13010 */;
import react from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 6015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const ActivityIndicator = react_native.ActivityIndicator;
({ CHECKPOINT_DARK_CYAN: hasOwnProperty, CHECKPOINT_PRIMARY: metroRequire } = CheckpointConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3, label: { textTransform: "uppercase" } };
obj2 = { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointButton(arg0) {
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
  let loading;
  let onPress;
  let shadowColor;
  let style;
  let tmp10;
  let tmp12;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(29);
  ({ onPress, Icon, label, accessibilityLabel, accessibilityHint, accessibilityState, disabled, loading, iconPosition, iconSize, color, borderColor, shadowColor, style } = arg0);
  let str = "start";
  if (undefined !== iconPosition) {
    str = iconPosition;
  }
  let str2 = "sm";
  if (undefined !== iconSize) {
    str2 = iconSize;
  }
  if (undefined === color) {
    color = metroRequire;
  }
  if (undefined === borderColor) {
    borderColor = hasOwnProperty;
  }
  const tmp6 = closure_9();
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
    tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== color) {
    const obj3 = { color };
    cResult[2] = color;
    cResult[3] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Icon) {
    if (cResult[5] === color) {
      if (cResult[6] === str2) {
        let tmp11;
        if (cResult[7] === (undefined !== loading && loading)) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp9) {
          if (cResult[10] === style) {
            let tmp16;
            if (cResult[11] === tmp6.button) {
              tmp16 = cResult[12];
            }
            if (accessibilityLabel == null) {
              accessibilityLabel = label;
            }
            if (cResult[13] === label) {
              if (cResult[14] === tmp10) {
                let tmp19;
                if (cResult[15] === tmp6.label) {
                  tmp19 = cResult[16];
                }
                if (cResult[17] === accessibilityHint) {
                  if (cResult[18] === accessibilityState) {
                    if (cResult[19] === (undefined !== disabled && disabled)) {
                      if (cResult[20] === onPress) {
                        if (cResult[21] === shadowColor) {
                          if (cResult[22] === tmp6.container) {
                            if (cResult[23] === tmp16) {
                              if (cResult[24] === accessibilityLabel) {
                                if (cResult[25] === ("start" === str && tmp11)) {
                                  if (cResult[26] === tmp19) {
                                    let tmp25;
                                    if (cResult[27] === ("end" === str && tmp11)) {
                                      tmp25 = cResult[28];
                                    }
                                    return tmp25;
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
                const obj4 = { size: "lg", containerStyle: tmp6.container, style: tmp16, shadowColor, onPress, disabled: undefined !== disabled && disabled, accessibilityRole: "button", accessibilityLabel, accessibilityHint, accessibilityState, children: items };
                items = ["start" === str && tmp11, tmp19, "end" === str && tmp11];
                const tmp28 = metroImportAll(CheckpointPressableDefault, obj4);
                cResult[17] = accessibilityHint;
                cResult[18] = accessibilityState;
                cResult[19] = undefined !== disabled && disabled;
                cResult[20] = onPress;
                cResult[21] = shadowColor;
                cResult[22] = tmp6.container;
                cResult[23] = tmp16;
                cResult[24] = accessibilityLabel;
                cResult[25] = "start" === str && tmp11;
                cResult[26] = tmp19;
                cResult[27] = "end" === str && tmp11;
                cResult[28] = tmp28;
                tmp25 = tmp28;
              }
            }
            let tmp20 = null != label;
            if (tmp20) {
              const obj5 = { variant: CheckpointPressable.CHECKPOINT_PRESSABLE_SIZES.lg.textVariant, style: items1, children: label };
              items1 = [tmp6.label, tmp10];
              const tmp23 = CheckpointTextDefault;
              tmp20 = metroImportDefault(tmp23, obj5);
            }
            cResult[13] = label;
            cResult[14] = tmp10;
            cResult[15] = tmp6.label;
            cResult[16] = tmp20;
            tmp19 = tmp20;
          }
        }
        const items2 = [tmp6.button, tmp9, style];
        cResult[9] = tmp9;
        cResult[10] = style;
        cResult[11] = tmp6.button;
        cResult[12] = items2;
        tmp16 = items2;
      }
    }
  }
  if (undefined !== loading && loading) {
    const obj6 = { color };
    tmp12 = metroImportDefault(ActivityIndicator, obj6);
  } else {
    tmp12 = null;
    if (null != Icon) {
      const obj7 = { color, size: str2 };
      tmp12 = metroImportDefault(Icon, obj7);
    }
  }
  cResult[4] = Icon;
  cResult[5] = color;
  cResult[6] = str2;
  cResult[7] = undefined !== loading && loading;
  cResult[8] = tmp12;
  tmp11 = tmp12;
}) : (function CheckpointButton(loading) {
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
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default tmp5;
