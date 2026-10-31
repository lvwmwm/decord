// Module ID: 11520
// Function ID: 11521
// Name: GiftCodeRedeemError
// Dependencies: [19, 17, 21, 5014, 575, 1498, 7292, 5717, 11521, 11522, 5624, 1113, 5634, 6744, 2]
// Exports: default

// Module 11520 (GiftCodeRedeemError)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Link from "Link" /* 1498 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7292 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 }, header: { marginTop: 32, textAlign: "center" }, message: { marginTop: 8, textAlign: "center" }, footer: { paddingHorizontal: 24 } };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(message) {
  let Button;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj7;
  let tmp8Result;
  message = message.message;
  const tmp = closure_7();
  const obj = Link;
  const theme = obj.useTheme();
  const obj2 = { bottom: true, style: tmp.container, children: items1 };
  const obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: items };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const tmp6 = React3;
  const tmp9 = FastImageDefault;
  if (theme.dark) {
    tmp8Result = tmp8(11521);
  } else {
    tmp8Result = tmp8(11522);
  }
  items = [hasOwnProperty(tmp9, { source: tmp8Result }), , ];
  const obj4 = { variant: "heading-xl/bold", style: tmp.header, children: intl.formatToMarkdownString(intl3.t.JUvC0s, {}) };
  const Text = tmp2(5624).Text;
  intl = tmp2(1113).intl;
  items[1] = hasOwnProperty(Text, obj4);
  const obj5 = { variant: "text-lg/medium", style: tmp.message, children: message };
  items[2] = hasOwnProperty(Text_Text.Text, obj5);
  items1 = [metroRequire(tmp6, obj3), ];
  const obj6 = { style: tmp.footer, children: hasOwnProperty(Button, obj7) };
  obj7 = {
    text: intl2.string(intl3.t.cpT0Cq),
    size: "md",
    onPress() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    }
  };
  Button = tmp2(5634).Button;
  intl2 = tmp2(1113).intl;
  items1[1] = hasOwnProperty(_false, obj6);
  return metroRequire(SafeAreaPaddingView, obj2);
};
