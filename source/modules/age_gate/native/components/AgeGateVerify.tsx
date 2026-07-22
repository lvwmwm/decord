// Module ID: 15869
// Function ID: 121433
// Name: AgeGateVerify
// Dependencies: []
// Exports: default

// Module 15869 (AgeGateVerify)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { defaultValue: 14, keyboardType: "en-PR", leadingIcon: "en", trailingText: "flex", padding: importDefault(dependencyMap[4]).space.PX_16, gap: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
obj.header = { textAlign: "center" };
obj.body = { textAlign: "center" };
obj.buttonWrapper = { width: "100%" };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default function AgeGateVerify(source) {
  let verifyGateDescription;
  let verifyTitle;
  source = source.source;
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  const ageGateVerifyContent = obj.useAgeGateVerifyContent(source);
  const verifyAgreementButtonText = ageGateVerifyContent.verifyAgreementButtonText;
  ({ verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  let obj1 = arg1(dependencyMap[6]);
  const maybePerformReactiveCheckForSource = obj1.useMaybePerformReactiveCheckForSource(source);
  obj = { top: true, style: tmp.container };
  const items = [callback(arg1(dependencyMap[8]).ShieldSpotIllustration, {}), , , ];
  obj = { style: tmp.header, children: verifyTitle };
  items[1] = callback(arg1(dependencyMap[9]).Text, obj);
  obj1 = { "Null": -1493172224, "Null": 1962934272, alignItems: 0, style: tmp.body, children: verifyGateDescription };
  items[2] = callback(arg1(dependencyMap[9]).Text, obj1);
  let tmp5 = null != verifyAgreementButtonText;
  if (tmp5) {
    const obj2 = { style: tmp.buttonWrapper };
    const obj3 = {
      text: verifyAgreementButtonText,
      onPress() {
          let obj = callback2(closure_2[11]);
          obj = { entryPoint: callback(closure_2[12]).AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
          const result = obj.showAgeVerificationGetStartedModal(obj);
        },
      grow: true
    };
    obj2.children = callback(arg1(dependencyMap[10]).Button, obj3);
    tmp5 = callback(View, obj2);
  }
  items[3] = tmp5;
  obj.children = items;
  return closure_5(arg1(dependencyMap[7]).SafeAreaPaddingView, obj);
};
