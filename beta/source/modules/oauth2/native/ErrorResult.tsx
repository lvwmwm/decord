// Module ID: 9753
// Function ID: 9754
// Dependencies: [19, 17, 21, 5014, 575, 7292, 5717, 9754, 5624, 1113, 5634, 6744, 2]
// Exports: default

// Module 9753
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7292 */;
import AssetRegistryDefault from "AssetRegistry" /* 9754 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, inner: { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }, text: { marginTop: 24, textAlign: "center" }, image: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, gap: 16, paddingHorizontal: 16, justifyContent: "center", flexDirection: "column" };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  let intl2;
  let items;
  let items1;
  error = error.error;
  const hideFooter = error.hideFooter;
  const tmp = closure_6();
  const obj = { bottom: true, style: tmp.container, children: items1 };
  const obj2 = { style: tmp.inner, children: items };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj3 = { source: AssetRegistryDefault, style: tmp.image };
  const tmp7 = FastImageDefault;
  items = [React3(tmp7, obj3), ];
  const obj4 = { style: tmp.text, variant: "text-md/medium", children: error };
  const Text = Text_Text.Text;
  const tmp5 = View;
  if (error == null) {
    const intl = tmp3(1113).intl;
    error = intl.string(tmp3(1113).t.mqn873);
  }
  items[1] = React3(Text, obj4);
  items1 = [hasOwnProperty(tmp5, obj2), ];
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
    const Button = tmp3(5634).Button;
    intl2 = tmp3(1113).intl;
    tmp6Result = tmp6(Button, obj5);
  }
  items1[1] = tmp6Result;
  return hasOwnProperty(SafeAreaPaddingView, obj);
};
