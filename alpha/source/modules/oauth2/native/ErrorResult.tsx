// Module ID: 9238
// Function ID: 9239
// Dependencies: [19, 17, 21, 5092, 587, 558, 576, 6156, 9239, 1126, 5088, 5379, 5934, 6813, 2]

// Module 9238
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import FastImageDefault from "FastImage" /* 6156 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6813 */;
import AssetRegistryDefault from "AssetRegistry" /* 9239 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ErrorResult(arg0) {
  let error;
  let hideFooter;
  let intl2;
  let items;
  let items1;
  let tmp10;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(17);
  ({ error, hideFooter } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] !== tmp4.image) {
    const obj2 = { source: AssetRegistryDefault, style: tmp4.image };
    const tmp8 = FastImageDefault;
    const tmp9 = React3(tmp8, obj2);
    cResult[0] = tmp4.image;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== error) {
    let stringResult = error;
    if (error == null) {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.mqn873);
    }
    cResult[2] = error;
    cResult[3] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.text) {
    let tmp13;
    if (cResult[5] === tmp10) {
      tmp13 = cResult[6];
    }
    if (cResult[7] === tmp4.inner) {
      if (cResult[8] === tmp5) {
        let tmp15;
        let tmp19;
        if (cResult[9] === tmp13) {
          tmp15 = cResult[10];
        }
        if (cResult[11] !== hideFooter) {
          let tmp20 = null;
          if (!hideFooter) {
            const obj3 = {
              size: "lg",
              text: intl2.string(intl3.t.cpT0Cq),
              onPress() {
                          const arr = ModalActionCreatorsDefault;
                          return arr.pop();
                        }
            };
            const Button = tmp(5379).Button;
            intl2 = tmp(1126).intl;
            tmp20 = React3(Button, obj3);
          }
          cResult[11] = hideFooter;
          cResult[12] = tmp20;
          tmp19 = tmp20;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp15) {
            let tmp22;
            if (cResult[15] === tmp19) {
              tmp22 = cResult[16];
            }
            return tmp22;
          }
        }
        const obj4 = { bottom: true, style: tmp4.container, children: items };
        items = [tmp15, tmp19];
        const tmp24 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj4);
        cResult[13] = tmp4.container;
        cResult[14] = tmp15;
        cResult[15] = tmp19;
        cResult[16] = tmp24;
        tmp22 = tmp24;
      }
    }
    const obj5 = { style: tmp4.inner, children: items1 };
    items1 = [tmp5, tmp13];
    const tmp18 = hasOwnProperty(View, obj5);
    cResult[7] = tmp4.inner;
    cResult[8] = tmp5;
    cResult[9] = tmp13;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const obj6 = { style: tmp4.text, variant: "text-md/medium", children: tmp10 };
  const tmp14 = React3(Text_Text.Text, obj6);
  cResult[4] = tmp4.text;
  cResult[5] = tmp10;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (function ErrorResult(error) {
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
    const intl = tmp3(1126).intl;
    error = intl.string(tmp3(1126).t.mqn873);
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
    const Button = tmp3(5379).Button;
    intl2 = tmp3(1126).intl;
    tmp6Result = tmp6(Button, obj5);
  }
  items1[1] = tmp6Result;
  return hasOwnProperty(SafeAreaPaddingView, obj);
});
const result = size.fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default tmp5;
