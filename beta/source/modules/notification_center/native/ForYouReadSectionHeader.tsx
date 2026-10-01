// Module ID: 16072
// Function ID: 16073
// Name: ForYouReadSectionHeader
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 2]
// Exports: ForYouReadSectionHeader

// Module 16072 (ForYouReadSectionHeader)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c2;
let obj2;
({ View: c2, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { container: obj2, textHeader: { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 20 } };
obj2 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8, paddingHorizontal: 24 };
createStyles = createStyles.createStyles;
({ color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 20 });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = function ForYouReadSectionHeader() {
  let intl;
  const tmp = closure_4();
  ({ style: tmp.textHeader, variant: "text-sm/semibold", children: intl.string(intl2.t.hftC1K) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <React2 style={tmp.container}>{null}</React2>;
};
