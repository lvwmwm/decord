// Module ID: 16425
// Function ID: 16426
// Name: UserProfileEditFormControls
// Dependencies: [32, 19, 17, 21, 5009, 575, 5619, 9506, 1188, 1114, 6974, 6978, 7077, 1376, 7364, 2]
// Exports: UserProfileEditFormButton, UserProfileEditFormLabelBadges, UserProfileEditFormSwitch

// Module 16425 (UserProfileEditFormControls)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import Text_Text from "Text/Text" /* 5619 */;
import Pressables from "Pressables" /* 6974 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9506 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function FormControlText(text) {
  text = text.text;
  const obj = { variant: "text-sm/medium", color: "text-default", style: closure_8().formControlText, children: text };
  return metroRequire(Text_Text.Text, obj);
}
function FormControlSubtext(text) {
  text = text.text;
  let tmp2 = null;
  if (null != text) {
    const obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.formControlText, children: text };
    tmp2 = metroRequire(Text_Text.Text, obj);
  }
  return tmp2;
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: obj2, buttonDisabled: { opacity: 0.5 }, buttonGroup: obj3, buttonInGroup: { borderWidth: 0 }, buttonTextContainer: { flexGrow: 1, flexShrink: 1, flexDirection: "column" }, formControlText: { marginRight: "auto", flexShrink: 1 }, labelTrailing: obj4, newBadge: { paddingTop: 0 } };
obj2 = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, flexShrink: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj4 = { flexDirection: "row", alignItems: "center", marginLeft: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormControls.tsx");

export function UserProfileEditFormLabelBadges(showPremiumIcon) {
  let intl;
  let items;
  let tmp3Result;
  let flag = showPremiumIcon.showPremiumIcon;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showPremiumIcon.showNewBadge;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_8();
  if (flag) {
    let tmp5 = null;
    const obj = { style: tmp.labelTrailing, "aria-hidden": true, children: items };
    const tmp3 = metroImportDefault;
    const tmp4 = hasOwnProperty;
    if (flag) {
      tmp5 = metroRequire(NitroWheelIcon.NitroWheelIcon, { size: "xs" });
    }
    items = [tmp5, ];
    let tmp9 = null;
    if (flag2) {
      const obj2 = { text: intl.string(intl2.t.y2b7CA), style: tmp.newBadge };
      const TextBadge = native.TextBadge;
      intl = intl2.intl;
      tmp9 = metroRequire(TextBadge, obj2);
    }
    items[1] = tmp9;
    tmp3Result = tmp3(tmp4, obj);
  } else {
    tmp3Result = null;
  }
  return tmp3Result;
}
export function UserProfileEditFormButton(loading) {
  let accessibilityValue;
  let buttonSubtext;
  let buttonText;
  let content;
  let disabled;
  let items;
  let items1;
  let items2;
  let items3;
  let label;
  let labelTrailing;
  let leading;
  let onPress;
  let stringResult;
  let tmp2Result2;
  let trailing;
  ({ label, buttonText, content, disabled } = loading);
  ({ labelTrailing, buttonSubtext, onPress, leading, trailing, accessibilityValue } = loading);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = loading.hideArrow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const footer = loading.footer;
  const tmp = closure_8();
  const obj = { onPress, style: items, accessibilityRole: "button", accessibilityLabel: label, accessibilityValue, accessibilityHint: stringResult, accessibilityState: { disabled, busy: flag }, disabled, children: items1 };
  items = [tmp.button, , ];
  let buttonInGroup = null != footer;
  const PressableHighlight = Pressables.PressableHighlight;
  if (buttonInGroup) {
    buttonInGroup = tmp.buttonInGroup;
  }
  items[1] = buttonInGroup;
  items[2] = disabled && tmp.buttonDisabled;
  stringResult = undefined;
  if (!disabled) {
    const intl = tmp3(1114).intl;
    stringResult = intl.string(tmp3(1114).t["4lAcxv"]);
  }
  items1 = [leading, , , ];
  if (content == null) {
    let tmp7 = null != buttonText;
    const obj2 = { style: tmp.buttonTextContainer, children: items2 };
    const tmp6 = hasOwnProperty;
    if (tmp7) {
      const obj3 = { text: buttonText };
      tmp7 = metroRequire(FormControlText, obj3);
    }
    items2 = [tmp7, ];
    const obj4 = { text: buttonSubtext };
    items2[1] = metroRequire(FormControlSubtext, obj4);
    content = tmp2(tmp6, obj2);
  }
  items1[1] = content;
  items1[2] = trailing;
  items1[3] = !flag2 && metroRequire(tmp3(6978).TableRowArrow, {});
  const tmp12 = !flag2 && metroRequire(tmp3(6978).TableRowArrow, {});
  const tmp2Result = metroImportDefault(PressableHighlight, obj);
  const obj5 = { label, labelTrailing, children: tmp2Result2 };
  tmp2Result2 = tmp2Result;
  const Input = tmp3(7077).Input;
  const tmp15 = metroRequire;
  if (null != footer) {
    const obj6 = { style: tmp.buttonGroup, children: items3 };
    items3 = [tmp2Result, footer];
    tmp2Result2 = tmp2(hasOwnProperty, obj6);
  }
  return tmp15(Input, obj5);
}
export function UserProfileEditFormSwitch(arg0) {
  let PressableHighlight;
  let accessibilityHint;
  let accessibilityLabel;
  let closure_129_1;
  let closure_2;
  let disabled;
  let first;
  let items1;
  let label;
  let obj3;
  let subLabel;
  let tmp9;
  let value;
  ({ subLabel, value } = arg0);
  ({ onValueChange: closure_129_1, accessibilityLabel, disabled } = arg0);
  ({ label, accessibilityHint } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  closure_2 = undefined;
  let tmp = closure_8();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  [first, closure_2] = react.useState(value);
  const items = [value];
  const effect = react.useEffect(() => {
    closure_2(value);
  }, items);
  if (isAndroidResult) {
    PressableHighlight = tmp2(6974).PressableHighlight;
  } else {
    PressableHighlight = React3;
  }
  function handleOnPress() {
    let tmpResult;
    if (closure_1_1 != null) {
      tmpResult = tmp(!value);
    }
    return tmpResult;
  }
  let tmp10;
  const obj2 = { label, children: tmp9(PressableHighlight, obj3) };
  const Input = tmp2(7077).Input;
  tmp9 = metroImportDefault;
  if (isAndroidResult) {
    tmp10 = handleOnPress;
  }
  obj3 = {
    onPress: tmp10,
    onAccessibilityTap: function handleAccessibilityTap() {
      const tmp = closure_2(!value);
      const timerId = setTimeout(() => {
        if (closure_1_1 != null) {
          tmp(!closure_1_0);
        }
      });
    },
    style: tmp.button,
    accessibilityRole: "switch",
    accessibilityLabel,
    accessibilityHint,
    accessibilityState: { disabled, checked: first },
    disabled,
    children: items1
  };
  if (accessibilityLabel == null) {
    accessibilityLabel = subLabel;
  }
  items1 = [metroRequire(FormControlText, { text: subLabel }), metroRequire(tmp2(7364).FormSwitch, { "aria-hidden": true, value, onValueChange: handleOnPress, disabled })];
  return metroRequire(Input, obj2);
}
