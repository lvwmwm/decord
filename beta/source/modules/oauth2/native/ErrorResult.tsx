// Module ID: 8509
// Function ID: 8510
// Dependencies: [19, 17, 21, 4836, 576, 6544, 8510, 4832, 1115, 5281, 5039, 2]
// Exports: default

// Module 8509
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import AssetRegistryDefault from "AssetRegistry" /* 8510 */;
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
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, inner: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }, text: { marginTop: 24, textAlign: "center" }, image: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  let intl2;
  let items;
  let items1;
  error = error.error;
  const hideFooter = error.hideFooter;
  const tmp = closure_7();
  const obj = { bottom: true, style: tmp.container, children: items1 };
  const obj2 = { style: tmp.inner, children: items };
  const obj3 = { source: AssetRegistryDefault, style: tmp.image };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items = [hasOwnProperty(_false, obj3), ];
  const obj4 = { style: tmp.text, variant: "text-md/medium", children: error };
  const Text = Text_Text.Text;
  const tmp5 = React3;
  if (error == null) {
    const intl = tmp3(1115).intl;
    error = intl.string(tmp3(1115).t.mqn873);
  }
  items[1] = hasOwnProperty(Text, obj4);
  items1 = [metroRequire(tmp5, obj2), ];
  let tmp6Result = null;
  if (!hideFooter) {
    const obj5 = {
      size: "lg",
      text: intl2.string(intl3.t.cpT0Cq),
      onPress() {
          const arr = ModalActionCreatorsDefault;
          return arr.pop();
        }
    };
    const Button = tmp3(5281).Button;
    intl2 = tmp3(1115).intl;
    tmp6Result = tmp6(Button, obj5);
  }
  items1[1] = tmp6Result;
  return metroRequire(SafeAreaPaddingView, obj);
};
