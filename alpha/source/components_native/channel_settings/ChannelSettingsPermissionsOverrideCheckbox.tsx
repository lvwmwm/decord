// Module ID: 16990
// Function ID: 16991
// Name: ChannelSettingsPermissionsOverrideCheckbox
// Dependencies: [19, 17, 21, 587, 4890, 4514, 1126, 7588, 8451, 16991, 558, 576, 4594, 2]

// Module 16990 (ChannelSettingsPermissionsOverrideCheckbox)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import PermissionUtils from "PermissionUtils" /* 4514 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
function getIcon(arg0, arg1, icon) {
  if (PermissionUtils.DENY === arg0) {
    const DenyIcon = tmp(7588).DenyIcon;
    const colors3 = nativeDefault.colors;
    return <DenyIcon size="sm" style={arg2.icon} color={arg1 ? colors3.WHITE : colors3.ICON_FEEDBACK_CRITICAL} />;
  } else if (PermissionUtils.ALLOW === arg0) {
    const CheckmarkLargeBoldIcon = tmp(8451).CheckmarkLargeBoldIcon;
    const colors2 = nativeDefault.colors;
    return <CheckmarkLargeBoldIcon size="sm" style={arg2.icon} color={arg1 ? colors2.WHITE : colors2.ICON_FEEDBACK_POSITIVE} />;
  } else if (PermissionUtils.PASSTHROUGH === arg0) {
    const SlashIcon = tmp(16991).SlashIcon;
    const colors = nativeDefault.colors;
    return <SlashIcon size="sm" style={arg2.icon} color={arg1 ? colors.WHITE : colors.INTERACTIVE_TEXT_DEFAULT} />;
  } else {
    return null;
  }
}
({ Pressable: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
const md = nativeDefault.radii.md;
let createStyles = createStyles_mod;
let obj = { ternaryCheckBox: obj2, iconWrapper: { borderRadius: md - PX_4, marginHorizontal: PX_4 / 2, justifyContent: "center", height: "100%" }, icon: obj3, denyActive: obj4, denySelected: { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm - 2 }, allowActive: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE }, allowSelected: { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE }, passthroughSelected: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED }, passthroughActive: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER }, disabled: { opacity: 0.3 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: md, height: nativeDefault.space.PX_32, paddingVertical: PX_4, paddingHorizontal: PX_4 / 2, flexDirection: "row" };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_8 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
({ backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm - 2 });
({ backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED });
({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER });
let closure_6 = createStyles(obj);
let items = [PermissionUtils.DENY, PermissionUtils.PASSTHROUGH, PermissionUtils.ALLOW];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  let accessibilityRole;
  let accessibilityState;
  let permissionTitle;
  let styles;
  let tmp4;
  let tmp6;
  let type;
  const tmp = type;
  const obj = type(styles[11]);
  const cResult = obj.c(22);
  ({ permissionTitle, type } = selected);
  selected = selected.selected;
  styles = selected.styles;
  const onPress = selected.onPress;
  if (cResult[0] !== selected) {
    const obj2 = { selected };
    cResult[0] = selected;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = tmp(styles[12]);
  const radioA11yNative = tmpResult.useRadioA11yNative(tmp4);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (cResult[2] !== type) {
    let stringResult;
    if (tmp(styles[5]).DENY === type) {
      const intl2 = tmp(tmp2[6]).intl;
      stringResult = intl2.string(tmp(tmp2[6]).t["6639O5"]);
    } else if (tmp(styles[5]).ALLOW === type) {
      const intl = tmp(tmp2[6]).intl;
      stringResult = intl.string(tmp(tmp2[6]).t.RzDfSk);
    } else if (tmp(styles[5]).PASSTHROUGH === type) {
      const intl3 = tmp(tmp2[6]).intl;
      stringResult = intl3.string(tmp(tmp2[6]).t.ujC3ZS);
    }
    cResult[2] = type;
    cResult[3] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === permissionTitle) {
    let obj4;
    if (cResult[5] === tmp6) {
      obj4 = cResult[6];
    }
    const joined = obj4.join(", ");
    if (cResult[7] === selected) {
      if (cResult[8] === styles) {
        let tmp10;
        if (cResult[9] === type) {
          tmp10 = cResult[10];
        }
        if (cResult[11] === selected) {
          if (cResult[12] === styles) {
            let tmp11;
            if (cResult[13] === type) {
              tmp11 = cResult[14];
            }
            if (cResult[15] === accessibilityRole) {
              if (cResult[16] === accessibilityState) {
                if (cResult[17] === onPress) {
                  if (cResult[18] === joined) {
                    if (cResult[19] === tmp10) {
                      let tmp14;
                      if (cResult[20] === tmp11) {
                        tmp14 = cResult[21];
                      }
                      return tmp14;
                    }
                  }
                }
              }
            }
            class I {
              constructor(arg0) {
                tmp = selected;
                if (!tmp) {
                  if (!selected.pressed) {
                    tmp2 = styles;
                    iconWrapper = styles.iconWrapper;
                  }
                  return iconWrapper;
                }
                tmp3 = type;
                tmp4 = styles;
                tmp5 = closure_0;
                tmp6 = closure_2;
                if (closure_0(closure_2[5]).DENY === type) {
                  tmp7 = tmp ? tmp4.denySelected : tmp4.denyActive;
                } else if (tmp5(tmp6[5]).ALLOW === tmp3) {
                  tmp7 = tmp ? tmp4.allowSelected : tmp4.allowActive;
                } else if (tmp5(tmp6[5]).PASSTHROUGH === tmp3) {
                  tmp7 = tmp ? tmp4.passthroughSelected : tmp4.passthroughActive;
                }
                items = [, ];
                items[0] = tmp7;
                items[1] = tmp4.iconWrapper;
                iconWrapper = items;
                return;
              }
            }
            tmp17[0] = accessibilityRole;
            tmp17[1] = joined;
            tmp17[2] = accessibilityState;
            tmp17[3] = tmp10;
            tmp17[4] = onPress;
            tmp17[5] = tmp11;
            const tmp18 = <closure_3 {...tmp17} />;
            cResult[15] = accessibilityRole;
            cResult[16] = accessibilityState;
            cResult[17] = onPress;
            cResult[18] = joined;
            cResult[19] = tmp10;
            cResult[20] = tmp11;
            cResult[21] = tmp18;
            tmp14 = tmp18;
          }
        }
        class I {
          constructor(arg0) {
            tmp = selected;
            if (!tmp) {
              if (!selected.pressed) {
                tmp2 = styles;
                iconWrapper = styles.iconWrapper;
              }
              return iconWrapper;
            }
            tmp3 = type;
            tmp4 = styles;
            tmp5 = closure_0;
            tmp6 = closure_2;
            if (closure_0(closure_2[5]).DENY === type) {
              tmp7 = tmp ? tmp4.denySelected : tmp4.denyActive;
            } else if (tmp5(tmp6[5]).ALLOW === tmp3) {
              tmp7 = tmp ? tmp4.allowSelected : tmp4.allowActive;
            } else if (tmp5(tmp6[5]).PASSTHROUGH === tmp3) {
              tmp7 = tmp ? tmp4.passthroughSelected : tmp4.passthroughActive;
            }
            items = [, ];
            items[0] = tmp7;
            items[1] = tmp4.iconWrapper;
            iconWrapper = items;
            return;
          }
        }
        cResult[11] = selected;
        cResult[12] = styles;
        cResult[13] = type;
        cResult[14] = tmp13;
        tmp11 = tmp13;
      }
    }
    class I {
      constructor(arg0) {
        tmp = selected;
        if (!tmp) {
          if (!selected.pressed) {
            tmp2 = styles;
            iconWrapper = styles.iconWrapper;
          }
          return iconWrapper;
        }
        tmp3 = type;
        tmp4 = styles;
        tmp5 = closure_0;
        tmp6 = closure_2;
        if (closure_0(closure_2[5]).DENY === type) {
          tmp7 = tmp ? tmp4.denySelected : tmp4.denyActive;
        } else if (tmp5(tmp6[5]).ALLOW === tmp3) {
          tmp7 = tmp ? tmp4.allowSelected : tmp4.allowActive;
        } else if (tmp5(tmp6[5]).PASSTHROUGH === tmp3) {
          tmp7 = tmp ? tmp4.passthroughSelected : tmp4.passthroughActive;
        }
        items = [, ];
        items[0] = tmp7;
        items[1] = tmp4.iconWrapper;
        iconWrapper = items;
        return;
      }
    }
    cResult[7] = selected;
    cResult[8] = styles;
    cResult[9] = type;
    cResult[10] = I;
    tmp10 = I;
  }
  items = [permissionTitle, tmp6];
  const found = items.filter(Boolean);
  cResult[4] = permissionTitle;
  cResult[5] = tmp6;
  cResult[6] = found;
  obj4 = found;
}) : ((type) => {
  let accessibilityState;
  let found;
  let onPress;
  let permissionTitle;
  let stringResult;
  type = type.type;
  const selected = type.selected;
  const styles = type.styles;
  const tmp = type;
  ({ permissionTitle, onPress } = type);
  const obj = type(styles[12]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  items = [permissionTitle, ];
  const obj2 = {
    accessibilityRole: radioA11yNative.accessibilityRole,
    accessibilityLabel: found.join(", "),
    accessibilityState,
    style(pressed) {
      let tmp7;
      if (!selected) {
        let iconWrapper;
        if (!pressed.pressed) {
          iconWrapper = styles.iconWrapper;
        }
        return iconWrapper;
      }
      if (PermissionUtils.DENY === type) {
        tmp7 = tmp ? tmp4.denySelected : tmp4.denyActive;
      } else if (PermissionUtils.ALLOW === type) {
        tmp7 = tmp ? tmp4.allowSelected : tmp4.allowActive;
      } else if (PermissionUtils.PASSTHROUGH === type) {
        tmp7 = tmp ? tmp4.passthroughSelected : tmp4.passthroughActive;
      }
      items = [tmp7, styles.iconWrapper];
      iconWrapper = items;
    },
    onPress,
    children: getIcon(type, selected, styles)
  };
  accessibilityState = radioA11yNative.accessibilityState;
  const tmp4 = jsx;
  const tmp5 = closure_3;
  if (type(styles[5]).DENY === type) {
    const intl2 = tmp(tmp2[6]).intl;
    stringResult = intl2.string(tmp(tmp2[6]).t["6639O5"]);
  } else if (tmp(styles[5]).ALLOW === type) {
    const intl = tmp(tmp2[6]).intl;
    stringResult = intl.string(tmp(tmp2[6]).t.RzDfSk);
  } else if (tmp(styles[5]).PASSTHROUGH === type) {
    const intl3 = tmp(tmp2[6]).intl;
    stringResult = intl3.string(tmp(tmp2[6]).t.ujC3ZS);
  }
  items[1] = stringResult;
  found = items.filter(Boolean);
  return tmp4(tmp5, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((permissionTitle) => {
  let disabled;
  let onValueChange;
  const obj = permissionTitle(onValueChange[11]);
  const cResult = obj.c(13);
  permissionTitle = permissionTitle.permissionTitle;
  const value = permissionTitle.value;
  importDefault = value;
  ({ disabled, onValueChange } = permissionTitle);
  let tmp2 = undefined !== disabled && disabled;
  const tmp3 = closure_6();
  const styles = tmp3;
  if (cResult[0] === tmp3.ternaryCheckBox) {
    let tmp5;
    if (cResult[1] === (tmp2 && tmp3.disabled)) {
      tmp5 = cResult[2];
    }
    let str = "auto";
    if (tmp2) {
      str = "none";
    }
    if (cResult[3] === onValueChange) {
      if (cResult[4] === permissionTitle) {
        if (cResult[5] === tmp3) {
          let tmp6;
          if (cResult[6] === value) {
            tmp6 = cResult[7];
          }
          if (cResult[8] === permissionTitle) {
            if (cResult[9] === tmp5) {
              if (cResult[10] === str) {
                let tmp9;
                if (cResult[11] === tmp6) {
                  tmp9 = cResult[12];
                }
                return tmp9;
              }
            }
          }
          const tmp12 = <closure_4 style={tmp5} pointerEvents={str} accessibilityRole="radiogroup" accessibilityLabel={permissionTitle}>{tmp6}</closure_4>;
          cResult[8] = permissionTitle;
          cResult[9] = tmp5;
          cResult[10] = str;
          cResult[11] = tmp6;
          cResult[12] = tmp12;
          tmp9 = tmp12;
        }
      }
    }
    const mapped = items.map((type, index) => {
      permissionTitle = type;
      return <closure_1_9 key={"checkbox-" + arg1} permissionTitle={permissionTitle} type={arg0} selected={closure_1 === arg0} styles={styles} onPress={function onPress() {
        let tmp2 = null != onValueChange;
        const tmp = onValueChange;
        if (tmp2) {
          tmp2 = importDefault !== type;
        }
        if (tmp2) {
          tmp(type);
        }
      }} />;
    });
    cResult[3] = onValueChange;
    cResult[4] = permissionTitle;
    cResult[5] = tmp3;
    cResult[6] = value;
    cResult[7] = mapped;
    tmp6 = mapped;
  }
  items = [tmp3.ternaryCheckBox, tmp4];
  cResult[0] = tmp3.ternaryCheckBox;
  cResult[1] = tmp2 && tmp3.disabled;
  cResult[2] = items;
  tmp5 = items;
}) : ((permissionTitle) => {
  let disabled;
  let str;
  permissionTitle = permissionTitle.permissionTitle;
  ({ value: importDefault, disabled } = permissionTitle);
  if (disabled === undefined) {
    disabled = false;
  }
  const onValueChange = permissionTitle.onValueChange;
  let tmp = closure_6();
  const styles = tmp;
  items = [tmp.ternaryCheckBox, ];
  let disabled2 = disabled;
  let tmp2 = jsx;
  const tmp3 = closure_4;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  items[1] = disabled2;
  const obj = {
    style: items,
    pointerEvents: str,
    accessibilityRole: "radiogroup",
    accessibilityLabel: permissionTitle,
    children: items.map((type, index) => {
      permissionTitle = type;
      return <closure_1_9 key={"checkbox-" + arg1} permissionTitle={permissionTitle} type={arg0} selected={closure_1 === arg0} styles={styles} onPress={function onPress() {
        let tmp2 = null != onValueChange;
        const tmp = onValueChange;
        if (tmp2) {
          tmp2 = importDefault !== type;
        }
        if (tmp2) {
          tmp(type);
        }
      }} />;
    })
  };
  str = "auto";
  if (disabled) {
    str = "none";
  }
  return tmp2(tmp3, obj);
}));
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx");

export default memoResult;
