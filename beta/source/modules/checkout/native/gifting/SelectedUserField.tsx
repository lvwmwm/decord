// Module ID: 10317
// Function ID: 10318
// Name: SelectedUserField
// Dependencies: [19, 17, 21, 4836, 576, 6039, 1115, 4678, 6472, 1177, 4832, 6034, 2]
// Exports: default

// Module 10317 (SelectedUserField)
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import CircleXIcon from "CircleXIcon" /* 6034 */;
import InputFieldContainer2 from "InputFieldContainer" /* 6039 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 6472 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ Pressable: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" }, opener: obj3, openerWithClearButton: { paddingRight: 0 }, searchIcon: obj4, userPill: obj5, userPillText: { marginLeft: 6 }, clearButton: obj6 };
obj2 = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 6 };
obj4 = { marginRight: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
obj6 = { alignItems: "center", justifyContent: "center", minWidth: 44, minHeight: 44, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default function SelectedUserField(onPress) {
  let InputFieldContainer;
  let closure_129_0;
  let combined;
  let formatToPlainString;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj10;
  let obj12;
  let obj13;
  let obj14;
  let selectedUser;
  let tmp2Result1;
  let v0Vb9FQ;
  ({ selectedUser, setSelectedUser: closure_129_0 } = onPress);
  onPress = onPress.onPress;
  const tmp = closure_7();
  const items = [tmp.opener, ];
  let openerWithClearButton = null != selectedUser;
  const obj = { style: tmp.container, children: hasOwnProperty(InputFieldContainer, obj14) };
  const obj2 = { style: tmp.content, children: items3 };
  InputFieldContainer = InputFieldContainer2.InputFieldContainer;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  const obj3 = { style: items, onPress, accessibilityRole: "button", accessibilityLabel: combined, children: items1 };
  items[1] = openerWithClearButton;
  if (null != selectedUser) {
    const intl3 = tmp4(1115).intl;
    const _HermesInternal2 = HermesInternal;
    const stringResult = intl3.string(intl6.t.xFn72s);
    const obj4 = UserUtilsDefault;
    combined = "" + stringResult + ", " + obj4.getName(selectedUser);
  } else {
    const intl = tmp4(1115).intl;
    const stringResult1 = intl.string(intl6.t.xFn72s);
    const intl2 = tmp4(1115).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + stringResult1 + ", " + intl2.string(tmp4(1115).t.R0vK0N);
  }
  items1 = [, ];
  const obj5 = { style: tmp.searchIcon, size: "xs", color: "interactive-text-default" };
  items1[0] = hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, obj5);
  if (null != selectedUser) {
    const obj6 = { style: tmp.userPill, children: items2 };
    const obj7 = { user: selectedUser, guildId: "Array", size: native.AvatarSizes.XSMALL_20 };
    const Avatar = tmp4(1177).Avatar;
    items2 = [hasOwnProperty(Avatar, obj7), ];
    const obj8 = { variant: "text-md/medium", style: tmp.userPillText, children: obj10.getName(selectedUser) };
    const Text2 = tmp4(4832).Text;
    obj10 = UserUtilsDefault;
    items2[1] = hasOwnProperty(Text2, obj8);
    tmp2Result1 = tmp6(tmp3, obj6);
  } else {
    const obj9 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.userPillText, children: intl4.string(intl6.t.R0vK0N) };
    const Text = tmp4(4832).Text;
    intl4 = tmp4(1115).intl;
    tmp2Result1 = tmp2(Text, obj9);
  }
  items1[1] = tmp2Result1;
  items3 = [metroRequire(_false, obj3), ];
  let tmp2Result = null;
  if (null != selectedUser) {
    const obj11 = {
      style: tmp.clearButton,
      onPress() {
          return closure_1_0(undefined);
        },
      accessibilityRole: "button",
      accessibilityLabel: formatToPlainString(v0Vb9FQ, obj12),
      children: hasOwnProperty(CircleXIcon.CircleXIcon, { size: "xs" })
    };
    const intl5 = tmp4(1115).intl;
    formatToPlainString = intl5.formatToPlainString;
    obj12 = { text: obj13.getName(selectedUser) };
    v0Vb9FQ = tmp4(1115).t["0Vb9FQ"];
    obj13 = UserUtilsDefault;
    tmp2Result = tmp2(tmp7, obj11);
  }
  items3[1] = tmp2Result;
  obj14 = { children: metroRequire(React3, obj2) };
  return hasOwnProperty(React3, obj);
};
