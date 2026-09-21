// Module ID: 11119
// Function ID: 11120
// Name: SelectedUserField
// Dependencies: [19, 17, 21, 4756, 576, 6863, 1115, 4600, 7296, 1177, 4752, 6858, 2]
// Exports: default

// Module 11119 (SelectedUserField)
import nativeDefault from "native" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import InputFieldContainer from "InputFieldContainer" /* 6863 */;
import MagnifyingGlassIcon from "MagnifyingGlassIcon" /* 7296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { marginHorizontal: nativeDefault.space.PX_16 }, content: { flexDirection: "row", overflow: "hidden", alignItems: "center", display: "flex" }, opener: null, openerWithClearButton: null, searchIcon: null, userPill: null, userPillText: null, clearButton: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.opener = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 6 };
obj2.openerWithClearButton = { paddingRight: 0 };
let obj4 = { flexDirection: "row", alignItems: "center", flex: 1, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 6 };
obj2.searchIcon = { marginRight: nativeDefault.space.PX_8 };
const obj5 = { marginRight: nativeDefault.space.PX_8 };
obj2.userPill = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
obj2.userPillText = { marginLeft: 6 };
let obj6 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingVertical: 6, paddingHorizontal: 6 };
obj2.clearButton = { alignItems: "center", justifyContent: "center", minWidth: 44, minHeight: 44, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/SelectedUserField.tsx");

export default function SelectedUserField(onPress) {
  ({ selectedUser, setSelectedUser: require } = onPress);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.content, children: null };
  const items = [tmp.opener, ];
  let openerWithClearButton = null != selectedUser;
  if (openerWithClearButton) {
    openerWithClearButton = tmp.openerWithClearButton;
  }
  const obj3 = { style: items, onPress: onPress.onPress, accessibilityRole: "button", accessibilityLabel: null, children: null };
  items[1] = openerWithClearButton;
  if (null != selectedUser) {
    const intl3 = tmp4(1115).intl;
    const stringResult = intl3.string(tmp4(1115).t.xFn72s);
    const _HermesInternal2 = HermesInternal;
    let combined = "" + stringResult + ", " + UserUtilsDefault.getName(selectedUser);
  } else {
    const intl = tmp4(1115).intl;
    const intl2 = tmp4(1115).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl.string(tmp4(1115).t.xFn72s) + ", " + intl2.string(tmp4(1115).t.R0vK0N);
    const stringResult1 = intl.string(tmp4(1115).t.xFn72s);
  }
  obj3.accessibilityLabel = combined;
  const items1 = [hasOwnProperty(MagnifyingGlassIcon.MagnifyingGlassIcon, { style: tmp.searchIcon, size: "xs", color: "interactive-text-default" }), ];
  if (null != selectedUser) {
    const obj6 = { style: tmp.userPill, children: null };
    const obj7 = { user: selectedUser, guildId: "Array", size: tmp4(1177).AvatarSizes.XSMALL_20 };
    const items2 = [tmp2(tmp4(1177).Avatar, obj7), ];
    const obj8 = { variant: "text-md/medium", style: tmp.userPillText, children: UserUtilsDefault.getName(selectedUser) };
    items2[1] = tmp2(tmp4(4752).Text, obj8);
    obj6.children = items2;
    let tmp2Result1 = tmp6(tmp3, obj6);
  } else {
    const obj9 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.userPillText, children: null };
    const intl4 = tmp4(1115).intl;
    obj9.children = intl4.string(tmp4(1115).t.R0vK0N);
    tmp2Result1 = tmp2(tmp4(4752).Text, obj9);
  }
  items1[1] = tmp2Result1;
  obj3.children = items1;
  const items3 = [timestampProducer(React3, obj3), ];
  let tmp2Result = null;
  if (null != selectedUser) {
    const obj11 = {
      style: tmp.clearButton,
      onPress() {
          return require(undefined);
        },
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null
    };
    const intl5 = tmp4(1115).intl;
    const obj12 = { text: UserUtilsDefault.getName(selectedUser) };
    obj11.accessibilityLabel = intl5.formatToPlainString(tmp4(1115).t["0Vb9FQ"], obj12);
    obj11.children = tmp2(tmp4(6858).CircleXIcon, { size: "xs" });
    tmp2Result = tmp2(tmp7, obj11);
  }
  items3[1] = tmp2Result;
  obj2.children = items3;
  obj.children = hasOwnProperty(InputFieldContainer.InputFieldContainer, { children: timestampProducer(React4, obj2) });
  return hasOwnProperty(React4, obj);
};
