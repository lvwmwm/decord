// Module ID: 12397
// Function ID: 12398
// Name: GiftCodeRedeemError
// Dependencies: [19, 17, 21, 5306, 575, 1503, 7415, 6020, 12398, 12399, 5929, 1113, 5936, 6848, 2]
// Exports: default

// Module 12397 (GiftCodeRedeemError)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Link from "Link" /* 1503 */;
import Text_Text from "Text/Text" /* 5929 */;
import FastImageDefault from "FastImage" /* 6020 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7415 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
    tmp8Result = tmp8(12398);
  } else {
    tmp8Result = tmp8(12399);
  }
  items = [hasOwnProperty(tmp9, { source: tmp8Result }), , ];
  const obj4 = { variant: "heading-xl/semibold", style: tmp.header, children: intl.formatToMarkdownString(intl3.t.JUvC0s, {}) };
  const Text = tmp2(5929).Text;
  intl = tmp2(1113).intl;
  items[1] = hasOwnProperty(Text, obj4);
  const obj5 = { variant: "body-lg/medium", style: tmp.message, children: message };
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
  Button = tmp2(5936).Button;
  intl2 = tmp2(1113).intl;
  items1[1] = hasOwnProperty(_false, obj6);
  return metroRequire(SafeAreaPaddingView, obj2);
};
