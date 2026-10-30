// Module ID: 19330
// Function ID: 19331
// Name: AgeGateVerify
// Dependencies: [19, 17, 21, 5009, 575, 6728, 7286, 5619, 5629, 7947, 6723, 2]
// Exports: default

// Module 19330 (AgeGateVerify)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6723 */;
import AgeGateUtils from "AgeGateUtils" /* 6728 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7286 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp2;
const components_Button_Button = tmp2(5629);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, header: { textAlign: "center" }, body: { textAlign: "center" }, buttonWrapper: { width: "100%" } };
obj2 = { padding: nativeDefault.space.PX_16, flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateVerify.tsx");

export default function AgeGateVerify(source) {
  let items;
  let obj6;
  let verifyAgreementButtonText;
  let verifyGateDescription;
  let verifyTitle;
  source = source.source;
  const tmp = closure_6();
  let obj = AgeGateUtils;
  const ageGateVerifyContent = obj.useAgeGateVerifyContent(source);
  ({ verifyAgreementButtonText, verifyGateDescription, verifyTitle } = ageGateVerifyContent);
  let obj2 = { top: true, style: tmp.container, children: items };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items = [, , ];
  const obj3 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: verifyTitle };
  items[0] = React3(Text_Text.Heading, obj3);
  const obj4 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: verifyGateDescription };
  items[1] = React3(Text_Text.Text, obj4);
  let tmp6Result = null != verifyAgreementButtonText;
  const tmp5 = hasOwnProperty;
  if (tmp6Result) {
    const obj5 = { style: tmp.buttonWrapper, children: React3(components_Button_Button.Button, obj6) };
    obj6 = {
      text: verifyAgreementButtonText,
      onPress: function handleConfirm() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
        },
      grow: true
    };
    tmp6Result = tmp6(View, obj5);
  }
  items[2] = tmp6Result;
  return tmp5(SafeAreaPaddingView, obj2);
};
