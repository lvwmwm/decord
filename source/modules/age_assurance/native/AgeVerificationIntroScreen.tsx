// Module ID: 7560
// Function ID: 60508
// Name: GetStartedScreen
// Dependencies: [5, 31, 27, 7537, 653, 7544, 33, 4130, 689, 1557, 4347, 7561, 5807, 4126, 5503, 7562, 1212, 7536, 1920, 7538, 4543, 7563, 2]
// Exports: default

// Module 7560 (GetStartedScreen)
import SafetyHubLinks from "SafetyHubLinks";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { getAgeVerificationGetStartedSteps as closure_6 } from "set";
import { HelpdeskArticles } from "ME";
import { SafetyHubLinks } from "SafetyHubLinks";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_9;
const require = arg1;
({ ScrollView: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16, flex: 1 };
_createForOfIteratorHelperLoose.getStartedContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.getStartedHeaderContainer = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.ageGroupLearnMoreContainer = { alignItems: "center", marginTop: -require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.getStartedHeaderText = { textAlign: "center" };
_createForOfIteratorHelperLoose.getStartedRequestTextContainer = { alignItems: "center" };
let obj2 = { alignItems: "center", marginTop: -require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.getStartedFooterContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_48 };
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_48 };
_createForOfIteratorHelperLoose.getStartedRequestText = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj4 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.getStartedFooterButtonsContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default function GetStartedScreen(onComplete) {
  const modalSessionId = onComplete.modalSessionId;
  const entryPoint = onComplete.entryPoint;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = modalSessionId(4347);
  let initiateAgeVerification = obj.useInitiateAgeVerification({ onComplete: onComplete.onClose, entryPoint });
  initiateAgeVerification = initiateAgeVerification.initiateAgeVerification;
  let obj1 = modalSessionId(7561);
  obj = {};
  obj = {};
  obj1 = { style: tmp.getStartedContainer };
  let obj2 = { style: tmp.getStartedHeaderContainer };
  const isManualAgeVerificationHidden = obj1.useIsManualAgeVerificationHidden("age_verification_get_started_modal");
  const items = [callback3(modalSessionId(5807).ShieldSpotIllustration, {}), , ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText };
  let obj7 = modalSessionId(4347);
  obj3.children = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  items[1] = callback3(modalSessionId(4126).Text, obj3);
  const obj4 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText };
  let obj9 = modalSessionId(4347);
  obj4.children = obj9.getAgeVerificationGetStartedSubtitle(entryPoint);
  items[2] = callback3(modalSessionId(4126).Text, obj4);
  obj2.children = items;
  const items1 = [callback4(closure_5, obj2), , ];
  const obj5 = {
    hasIcons: true,
    children: callback2(modalSessionId).map((description) => {
      description = description.description;
      let obj = { index: arg1 + 1 };
      obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: description.title };
      obj.tip = outer1_9(modalSessionId(outer1_2[13]).Text, obj);
      let tmp3 = null;
      if (null != description) {
        obj = { variant: "text-xs/medium", color: "text-subtle", children: description };
        tmp3 = outer1_9(modalSessionId(outer1_2[13]).Text, obj);
      }
      obj.description = tmp3;
      return outer1_9(initiateAgeVerification(outer1_2[15]), obj, arg1);
    })
  };
  items1[1] = callback3(modalSessionId(5503).TableRowGroup, obj5);
  const obj6 = { style: tmp.ageGroupLearnMoreContainer };
  obj7 = { variant: "text-xs/medium", color: "text-muted" };
  const intl = modalSessionId(1212).intl;
  obj7.children = intl.format(modalSessionId(1212).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = initiateAgeVerification(outer1_2[17]);
      obj.openUrl(initiateAgeVerification(outer1_2[18]).getArticleURL(outer1_7.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = initiateAgeVerification(outer1_2[18]);
      const result = modalSessionId(outer1_2[19]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(outer1_2[19]).AgeVerificationModalVersion.PRIMARY, modalSessionId(outer1_2[19]).AgeVerificationModalCta.LEARN_MORE);
    }
  });
  obj6.children = callback3(modalSessionId(4126).Text, obj7);
  items1[2] = callback3(closure_5, obj6);
  obj1.children = items1;
  obj.children = callback4(closure_5, obj1);
  const items2 = [callback3(closure_4, obj), ];
  obj9 = { style: items3 };
  items3 = [tmp.getStartedFooterContainer, { paddingBottom: initiateAgeVerification(1557)().bottom }];
  let tmp7 = !isManualAgeVerificationHidden;
  if (tmp7) {
    const obj10 = { style: tmp.getStartedRequestTextContainer };
    const obj11 = { variant: "text-xs/medium", color: "text-muted", style: tmp.getStartedRequestText };
    const intl2 = modalSessionId(1212).intl;
    const obj12 = {
      handleOnRequestHook() {
          initiateAgeVerification(outer1_2[17]).openUrl(outer1_8.APPEALS_LINK);
          const obj = initiateAgeVerification(outer1_2[17]);
          const result = modalSessionId(outer1_2[19]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(outer1_2[19]).AgeVerificationModalVersion.PRIMARY, modalSessionId(outer1_2[19]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
        }
    };
    obj11.children = intl2.format(modalSessionId(1212).t.pJAxgQ, obj12);
    obj10.children = callback3(modalSessionId(4126).Text, obj11);
    tmp7 = callback3(closure_5, obj10);
  }
  const items4 = [tmp7, ];
  const obj13 = { style: tmp.getStartedFooterButtonsContainer };
  const obj14 = { variant: "primary", size: "lg" };
  const intl3 = modalSessionId(1212).intl;
  obj14.text = intl3.string(modalSessionId(1212).t.SJMnkX);
  obj14.onPress = callback(async () => {
    const result = modalSessionId(outer2_2[19]).trackAgeVerificationModalClicked(outer1_0, modalSessionId(outer2_2[19]).AgeVerificationModalVersion.PRIMARY, modalSessionId(outer2_2[19]).AgeVerificationModalCta.GET_STARTED);
    yield outer1_1();
  });
  const obj15 = { color: initiateAgeVerification(689).colors.WHITE };
  obj14.icon = callback3(modalSessionId(7563).LinkExternalSmallIcon, obj15);
  obj14.loading = initiateAgeVerification.loading;
  obj14.iconPosition = "end";
  obj13.children = callback3(modalSessionId(4543).Button, obj14);
  items4[1] = callback3(closure_5, obj13);
  obj9.children = items4;
  items2[1] = callback4(closure_5, obj9);
  obj.children = items2;
  return callback4(closure_11, obj);
};
