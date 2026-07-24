// Module ID: 14689
// Function ID: 111886
// Name: MFAOptionScreen
// Dependencies: [27, 33, 9233, 14690, 5121, 4541, 4126, 14691, 9258, 2]
// Exports: default

// Module 14689 (MFAOptionScreen)
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = jsxProd);
const result = require("useWideAuthView").fileFinishedImporting("modules/mfa/native/screens/MfaOptionScreen.tsx");

export default function MFAOptionScreen(arg0) {
  let content;
  let error;
  let headerImage;
  let headerText;
  let input;
  let mfaMethod;
  let screenProps;
  let submit;
  let subtitle;
  ({ headerImage, subtitle, screenProps, error } = arg0);
  ({ headerText, input, submit, mfaMethod, content } = arg0);
  const tmp = importDefault(9233)();
  let obj = importDefault(14690);
  const screenStyles = obj.useScreenStyles(tmp);
  const first = screenProps.mfaChallenge.methods[0];
  let type;
  if (null != first) {
    type = first.type;
  }
  let tmp5 = type === mfaMethod;
  obj = { bottom: !tmp, top: !tmp, style: screenStyles.contentContainer };
  obj = {};
  const obj1 = { style: screenStyles.mfaContainerHeader, spacing: 4 };
  let tmp7 = null != headerImage;
  if (tmp7) {
    tmp7 = headerImage;
  }
  const items = [tmp7, callback(require(4126) /* Text */.Text, { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText }), , ];
  let tmp8 = null != subtitle;
  if (tmp8) {
    const obj3 = { variant: "heading-sm/normal", color: "text-default", children: subtitle };
    tmp8 = callback(require(4126) /* Text */.Text, obj3);
  }
  items[2] = tmp8;
  let tmp12 = null != error;
  if (tmp12) {
    const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp12 = callback(require(4126) /* Text */.Text, obj4);
  }
  items[3] = tmp12;
  obj1.children = items;
  const items1 = [closure_5(require(4541) /* Stack */.Stack, obj1), input];
  obj.children = items1;
  const items2 = [closure_5(require(4541) /* Stack */.Stack, obj), content, ];
  const obj5 = { style: screenStyles.submit };
  const items3 = [submit, ];
  if (tmp5) {
    const obj6 = { props: screenProps };
    tmp5 = callback(importDefault(14691), obj6);
  }
  items3[1] = tmp5;
  obj5.children = items3;
  items2[2] = closure_5(require(4541) /* Stack */.Stack, obj5);
  obj.children = items2;
  const tmp6Result = closure_5(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
  const obj7 = {};
  const items4 = [callback(importDefault(9258), { backgroundImageCover: false }), ];
  let tmp23 = tmp6Result;
  if (tmp) {
    const obj8 = { keyboardShouldPersistTaps: "handled", children: tmp6Result };
    tmp23 = callback(ScrollView, obj8);
  }
  items4[1] = tmp23;
  obj7.children = items4;
  return closure_5(closure_6, obj7);
};
