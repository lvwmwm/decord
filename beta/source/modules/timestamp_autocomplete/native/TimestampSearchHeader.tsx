// Module ID: 11882
// Function ID: 11883
// Name: TimestampSearchHeader
// Dependencies: [19, 17, 21, 9578, 4836, 576, 4795, 4832, 1115, 8053, 2]
// Exports: useTimestampSearchHeaderHeight

// Module 11882 (TimestampSearchHeader)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import ClockIcon from "ClockIcon" /* 4795 */;
import Text_Text from "Text/Text" /* 4832 */;
import Form from "Form" /* 8053 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
({ StyleSheet: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "text-sm/semibold";
let c7 = "text-sm/medium";
let createStyles = createStyles_mod;
let obj = { container: obj2, headerRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 12 }, icon: { marginRight: 12 }, description: { paddingHorizontal: 16, paddingBottom: 12 }, divider: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: 0, backgroundColor: nativeDefault.colors.MOBILE_COMMAND_BAR_DIVIDER };
let closure_8 = createStyles(obj);
const memoResult = react.memo(function TimestampSearchHeader() {
  let intl;
  let items;
  let items1;
  let items2;
  const tmp = closure_8();
  const obj3 = { style: tmp.headerRow, children: items };
  items = [, ];
  const obj = { style: tmp.container, children: items2 };
  const obj2 = { accessible: true, accessibilityRole: "header", children: items1 };
  const obj4 = { size: "sm", style: tmp.icon };
  items[0] = React3(ClockIcon.ClockIcon, obj4);
  const obj5 = { variant, color: "mobile-text-heading-primary", children: "@time" };
  items[1] = React3(Text_Text.Text, obj5);
  items1 = [hasOwnProperty(_false, obj3), ];
  const obj6 = { style: tmp.description, variant: variant2, color: "text-muted", children: intl.string(intl2.t.V6L3TV) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items1[1] = React3(Text, obj6);
  items2 = [hasOwnProperty(_false, obj2), ];
  const obj7 = { style: tmp.divider };
  items2[1] = React3(Form.FormDivider, obj7);
  return hasOwnProperty(_false, obj);
});
const result = size.fileFinishedImporting("modules/timestamp_autocomplete/native/TimestampSearchHeader.tsx");

export default memoResult;
export const useTimestampSearchHeaderHeight = function useTimestampSearchHeaderHeight() {
  const obj = useScaledTextLineHeight;
  const sum = 24 + obj.useScaledTextLineHeight(c6);
  const obj2 = useScaledTextLineHeight;
  return sum + obj2.useScaledTextLineHeight(c7) + 12 + hairlineWidth.hairlineWidth;
};
