// Module ID: 15229
// Function ID: 15230
// Name: MfaOptionScreen
// Dependencies: [19, 17, 21, 6363, 15230, 6544, 5279, 4832, 15231, 6394, 2]
// Exports: default

// Module 15229 (MfaOptionScreen)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6363 */;
import BackgroundImageDefault from "BackgroundImage" /* 6394 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import MfaScreenUtilsDefault from "MfaScreenUtils" /* 15230 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const ScrollView = react_native.ScrollView;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/mfa/native/screens/MfaOptionScreen.tsx");

export default function MFAOptionScreen(arg0) {
  let content;
  let error;
  let headerImage;
  let headerText;
  let input;
  let items;
  let items1;
  let items2;
  let items3;
  let mfaMethod;
  let screenProps;
  let submit;
  let subtitle;
  ({ headerImage, subtitle, screenProps, error } = arg0);
  ({ headerText, input, submit, mfaMethod, content } = arg0);
  const tmp3 = useWideAuthViewDefault();
  const obj = MfaScreenUtilsDefault;
  const screenStyles = obj.useScreenStyles(tmp3);
  const first = screenProps.mfaChallenge.methods[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const rect = { bottom: !tmp3, top: !tmp3, style: screenStyles.contentContainer, children: items2 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const Stack = Stack_Stack.Stack;
  let tmp9 = null != headerImage;
  const obj2 = { style: screenStyles.mfaContainerHeader, spacing: 4, children: items };
  const Stack2 = Stack_Stack.Stack;
  if (tmp9) {
    tmp9 = headerImage;
  }
  items = [tmp9, , , ];
  const obj3 = { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText };
  items[1] = React3(Text_Text.Heading, obj3);
  let tmp10Result = null != subtitle;
  if (tmp10Result) {
    const obj4 = { variant: "heading-sm/normal", color: "text-default", children: subtitle };
    tmp10Result = tmp10(tmp8(4832).Text, obj4);
  }
  items[2] = tmp10Result;
  let tmp10Result4 = null != error;
  if (tmp10Result4) {
    const obj5 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp10Result4 = tmp10(tmp8(4832).Text, obj5);
  }
  let tmp10Result5 = type === mfaMethod;
  const obj6 = { children: items1 };
  items[3] = tmp10Result4;
  items1 = [hasOwnProperty(Stack2, obj2), input];
  items2 = [hasOwnProperty(Stack, obj6), content, ];
  const obj7 = { style: screenStyles.submit, children: items3 };
  items3 = [submit, ];
  const Stack3 = tmp8(5279).Stack;
  if (tmp10Result5) {
    const obj8 = { props: screenProps };
    tmp10Result5 = tmp10(tmp(15231), obj8);
  }
  items3[1] = tmp10Result5;
  items2[2] = hasOwnProperty(Stack3, obj7);
  const tmp7Result = hasOwnProperty(SafeAreaPaddingView, rect);
  const children = [React3(BackgroundImageDefault, { backgroundImageCover: false }), ];
  let tmp10Result6 = tmp7Result;
  const tmp15 = metroRequire;
  if (tmp3) {
    const obj9 = { keyboardShouldPersistTaps: "handled", children: tmp7Result };
    tmp10Result6 = tmp10(ScrollView, obj9);
  }
  children[1] = tmp10Result6;
  return hasOwnProperty(tmp15, { children });
};
