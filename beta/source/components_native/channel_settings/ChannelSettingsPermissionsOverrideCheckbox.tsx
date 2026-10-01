// Module ID: 16657
// Function ID: 16658
// Name: ChannelSettingsPermissionsOverrideCheckbox
// Dependencies: [19, 17, 21, 576, 4836, 4474, 1115, 7371, 8258, 16658, 4548, 2]

// Module 16657 (ChannelSettingsPermissionsOverrideCheckbox)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import PermissionUtils from "PermissionUtils" /* 4474 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
function OverrideOption(type) {
  let accessibilityState;
  let colors;
  let colors2;
  let colors3;
  let found;
  let onPress;
  let permissionTitle;
  let stringResult;
  let tmp4Result;
  type = type.type;
  const selected = type.selected;
  const styles = type.styles;
  const tmp = type;
  ({ permissionTitle, onPress } = type);
  const obj = type(styles[10]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  const tmp4 = jsx;
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
    children: tmp4Result
  };
  accessibilityState = radioA11yNative.accessibilityState;
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
  if (tmp(styles[5]).DENY === type) {
    const obj3 = { size: "sm", style: styles.icon, color: selected ? colors2.WHITE : colors2.ICON_FEEDBACK_CRITICAL };
    const DenyIcon = tmp(tmp2[7]).DenyIcon;
    colors2 = selected(tmp2[3]).colors;
    tmp4Result = tmp4(DenyIcon, obj3);
  } else if (tmp(styles[5]).ALLOW === type) {
    const obj4 = { size: "sm", style: styles.icon, color: selected ? colors.WHITE : colors.ICON_FEEDBACK_POSITIVE };
    const CheckmarkLargeBoldIcon = tmp(tmp2[8]).CheckmarkLargeBoldIcon;
    colors = selected(tmp2[3]).colors;
    tmp4Result = tmp4(CheckmarkLargeBoldIcon, obj4);
  } else {
    tmp4Result = null;
    if (tmp(styles[5]).PASSTHROUGH === type) {
      const obj5 = { size: "sm", style: styles.icon, color: selected ? colors3.WHITE : colors3.INTERACTIVE_TEXT_DEFAULT };
      const SlashIcon = tmp(tmp2[9]).SlashIcon;
      colors3 = selected(tmp2[3]).colors;
      tmp4Result = tmp4(SlashIcon, obj5);
    }
  }
  return tmp4(tmp5, obj2);
}
({ Pressable: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
const md = nativeDefault.radii.md;
let createStyles = createStyles_mod;
let obj = { ternaryCheckBox: obj2, iconWrapper: { borderRadius: md - PX_4, marginHorizontal: PX_4 / 2, justifyContent: "center", height: "100%" }, icon: obj3, denyActive: obj4, denySelected: obj5, allowActive: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE }, allowSelected: { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE }, passthroughSelected: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED }, passthroughActive: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER }, disabled: { opacity: 0.3 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: md, height: nativeDefault.space.PX_32, paddingVertical: PX_4, paddingHorizontal: PX_4 / 2, flexDirection: "row" };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_8 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj5 = { backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.sm - 2 };
({ backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED });
({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER });
let closure_6 = createStyles(obj);
let items = [PermissionUtils.DENY, PermissionUtils.PASSTHROUGH, PermissionUtils.ALLOW];
const memoResult = react.memo(function ChannelSettingsPermissionsOverrideCheckbox(permissionTitle) {
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
      return <OverrideOption key={"checkbox-" + arg1} permissionTitle={permissionTitle} type={arg0} selected={closure_1 === arg0} styles={styles} onPress={function onPress() {
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
});
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx");

export default memoResult;
