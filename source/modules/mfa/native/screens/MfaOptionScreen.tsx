// Module ID: 15594
// Function ID: 15595
// Name: MFAOptionScreen
// Dependencies: [19, 17, 21, 6884, 15595, 7063, 4934, 4477, 15596, 6915, 2]
// Exports: default

// Module 15594 (MFAOptionScreen)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4477 */;
import Stack from "Stack" /* 4934 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6884 */;
import BackgroundImageDefault from "BackgroundImage" /* 6915 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 7063 */;
import _modDef15595 from "module_15595" /* 15595 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/mfa/native/screens/MfaOptionScreen.tsx");

export default function MFAOptionScreen(arg0) {
  ({ headerImage, subtitle, screenProps, error } = arg0);
  ({ headerText, input, submit, mfaMethod, content } = arg0);
  const tmp3 = useWideAuthViewDefault();
  let obj = _modDef15595;
  const screenStyles = obj.useScreenStyles(tmp3);
  const first = screenProps.mfaChallenge.methods[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  obj = { bottom: !tmp3, top: !tmp3, style: screenStyles.contentContainer, children: null };
  obj = { style: screenStyles.mfaContainerHeader, spacing: 4, children: null };
  let tmp9 = null != headerImage;
  if (tmp9) {
    tmp9 = headerImage;
  }
  const items = [tmp9, callback(Text.Heading, { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText }), , ];
  let tmp10Result = null != subtitle;
  if (tmp10Result) {
    const obj2 = { variant: "heading-sm/normal", color: "text-default", children: null };
    obj2[2] = subtitle;
    tmp10Result = tmp10(tmp8(4477).Text, obj2);
  }
  items[2] = tmp10Result;
  tmp10Result = null != error;
  if (tmp10Result) {
    const obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    obj3[2] = error;
    tmp10Result = tmp10(tmp8(4477).Text, obj3);
  }
  let tmp10Result1 = type === mfaMethod;
  const obj4 = { children: null };
  items[3] = tmp10Result;
  obj[2] = items;
  const items1 = [closure_5(Stack.Stack, obj), input];
  obj4[0] = items1;
  const items2 = [closure_5(Stack.Stack, obj4), content, ];
  const obj5 = { style: screenStyles.submit, children: null };
  const items3 = [submit, ];
  if (tmp10Result1) {
    const obj6 = { props: null };
    obj6[0] = screenProps;
    tmp10Result1 = tmp10(tmp(15596), obj6);
  }
  items3[1] = tmp10Result1;
  obj5[1] = items3;
  items2[2] = closure_5(Stack.Stack, obj5);
  obj[3] = items2;
  const tmp7Result = closure_5(SafeAreaPaddingView.SafeAreaPaddingView, obj);
  const children = [callback(BackgroundImageDefault, { backgroundImageCover: false }), ];
  let tmp10Result2 = tmp7Result;
  if (tmp3) {
    const obj7 = { keyboardShouldPersistTaps: "handled", children: null };
    obj7[1] = tmp7Result;
    tmp10Result2 = tmp10(ScrollView, obj7);
  }
  children[1] = tmp10Result2;
  return closure_5(closure_6, { children });
};
