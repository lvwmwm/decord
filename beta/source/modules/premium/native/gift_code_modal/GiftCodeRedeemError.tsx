// Module ID: 10997
// Function ID: 10998
// Name: GiftCodeRedeemError
// Dependencies: [19, 17, 21, 4836, 576, 1486, 6544, 10998, 10999, 4832, 1115, 5281, 5039, 2]
// Exports: default

// Module 10997 (GiftCodeRedeemError)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Link from "Link" /* 1486 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ Image: c3, View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 }, header: { marginTop: 32, textAlign: "center" }, message: { marginTop: 8, textAlign: "center" }, footer: { paddingHorizontal: 24 } };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(message) {
  let Button;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj7;
  let tmp9Result;
  message = message.message;
  const tmp = closure_8();
  const obj = Link;
  const theme = obj.useTheme();
  const obj2 = { bottom: true, style: tmp.container, children: items1 };
  const obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: items };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const tmp6 = hasOwnProperty;
  const tmp8 = _false;
  if (theme.dark) {
    tmp9Result = tmp9(10998);
  } else {
    tmp9Result = tmp9(10999);
  }
  items = [metroRequire(tmp8, { source: tmp9Result }), , ];
  const obj4 = { variant: "heading-xl/bold", style: tmp.header, children: intl.formatToMarkdownString(intl3.t.JUvC0s, {}) };
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items[1] = metroRequire(Text, obj4);
  const obj5 = { variant: "text-lg/medium", style: tmp.message, children: message };
  items[2] = metroRequire(Text_Text.Text, obj5);
  items1 = [metroImportDefault(tmp6, obj3), ];
  const obj6 = { style: tmp.footer, children: metroRequire(Button, obj7) };
  obj7 = {
    text: intl2.string(intl3.t.cpT0Cq),
    size: "md",
    onPress() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    }
  };
  Button = tmp2(5281).Button;
  intl2 = tmp2(1115).intl;
  items1[1] = metroRequire(React3, obj6);
  return metroImportDefault(SafeAreaPaddingView, obj2);
};
