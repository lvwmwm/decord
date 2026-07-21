// Module ID: 14517
// Function ID: 109330
// Name: MFAOptionScreen
// Dependencies: []
// Exports: default

// Module 14517 (MFAOptionScreen)
const ScrollView = require(dependencyMap[0]).ScrollView;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = _module);
const _module1 = require(dependencyMap[9]);
const result = _module1.fileFinishedImporting("modules/mfa/native/screens/MfaOptionScreen.tsx");

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
  const tmp = importDefault(dependencyMap[2])();
  let obj = importDefault(dependencyMap[3]);
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
  const items = [tmp7, callback(require(dependencyMap[6]).Text, { variant: "heading-xl/extrabold", style: screenStyles.mfaContainerHeaderText, children: headerText }), , ];
  let tmp8 = null != subtitle;
  if (tmp8) {
    const obj3 = { children: subtitle };
    tmp8 = callback(require(dependencyMap[6]).Text, obj3);
  }
  items[2] = tmp8;
  let tmp12 = null != error;
  if (tmp12) {
    const obj4 = { children: error };
    tmp12 = callback(require(dependencyMap[6]).Text, obj4);
  }
  items[3] = tmp12;
  obj1.children = items;
  const items1 = [closure_5(require(dependencyMap[5]).Stack, obj1), input];
  obj.children = items1;
  const items2 = [closure_5(require(dependencyMap[5]).Stack, obj), content, ];
  const obj5 = { style: screenStyles.submit };
  const items3 = [submit, ];
  if (tmp5) {
    const obj6 = { props: screenProps };
    tmp5 = callback(importDefault(dependencyMap[7]), obj6);
  }
  items3[1] = tmp5;
  obj5.children = items3;
  items2[2] = closure_5(require(dependencyMap[5]).Stack, obj5);
  obj.children = items2;
  const tmp6Result = closure_5(require(dependencyMap[4]).SafeAreaPaddingView, obj);
  const obj7 = {};
  const items4 = [callback(importDefault(dependencyMap[8]), { backgroundImageCover: false }), ];
  let tmp23 = tmp6Result;
  if (tmp) {
    const obj8 = { keyboardShouldPersistTaps: "handled", children: tmp6Result };
    tmp23 = callback(ScrollView, obj8);
  }
  items4[1] = tmp23;
  obj7.children = items4;
  return closure_5(closure_6, obj7);
};
