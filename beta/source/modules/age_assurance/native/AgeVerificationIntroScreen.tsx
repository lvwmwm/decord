// Module ID: 8034
// Function ID: 8035
// Name: AgeVerificationIntroScreen
// Dependencies: [5, 19, 17, 7860, 1074, 7868, 21, 4836, 576, 1613, 5048, 8035, 7872, 4832, 5999, 8036, 1115, 7859, 2111, 7861, 5281, 8037, 2]
// Exports: default

// Module 8034 (AgeVerificationIntroScreen)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 7860 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let _undefined, description, importDefault;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = AgeVerificationConstants.getAgeVerificationGetStartedSteps;
const HelpdeskArticles = Constants.HelpdeskArticles;
const SafetyHubLinks = SafetyHubConstants.SafetyHubLinks;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { getStartedContainer: obj2, getStartedHeaderContainer: obj3, ageGroupLearnMoreContainer: obj4, getStartedHeaderText: { textAlign: "center" }, getStartedRequestTextContainer: { alignItems: "center" }, getStartedFooterContainer: obj5, getStartedRequestText: obj6, getStartedFooterButtonsContainer: obj7 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj7 = { gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default function GetStartedScreen(modalSessionId) {
  let Button;
  let LinkExternalSmallIcon;
  let Text3;
  let Text4;
  let arr3;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items3;
  let items4;
  let loading;
  let obj12;
  let obj13;
  let obj16;
  let obj17;
  let obj20;
  let obj21;
  let obj4;
  let obj7;
  let obj9;
  modalSessionId = modalSessionId.modalSessionId;
  const entryPoint = modalSessionId.entryPoint;
  importDefault = undefined;
  const onClose = modalSessionId.onClose;
  const tmp = closure_12();
  let tmp3 = dependencyMap;
  let tmp2 = importDefault;
  let tmp4 = modalSessionId;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = modalSessionId(5048);
  const initiateAgeVerification = obj.useInitiateAgeVerification({ onComplete: onClose, entryPoint });
  ({ initiateAgeVerification: c1, loading } = initiateAgeVerification);
  let obj2 = modalSessionId(8035);
  const isManualAgeVerificationHidden = obj2.useIsManualAgeVerificationHidden("age_verification_get_started_modal");
  let obj3 = { children: closure_10(closure_5, obj4) };
  const tmp10 = closure_5;
  obj4 = { style: tmp.getStartedContainer, children: items1 };
  const obj5 = { style: tmp.getStartedHeaderContainer, children: items };
  items = [closure_9(modalSessionId(7872).ShieldSpotIllustration, {}), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText, children: obj7.getAgeVerificationGetStartedTitle(entryPoint) };
  const Text = modalSessionId(4832).Text;
  obj7 = modalSessionId(5048);
  items[1] = closure_9(Text, obj6);
  const obj8 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: obj9.getAgeVerificationGetStartedSubtitle(entryPoint) };
  const Text2 = modalSessionId(4832).Text;
  obj9 = modalSessionId(5048);
  items[2] = closure_9(Text2, obj8);
  items1 = [closure_10(closure_5, obj5), , ];
  const obj10 = {
    hasIcons: true,
    children: arr3.map((description, index) => {
      let tmpResult;
      description = description.description;
      const title = description.title;
      const obj = { index: index + 1, tip: closure_1_9(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
      tmpResult = null;
      const tmp2 = dependencyMap;
      const tmp3 = _undefined(dependencyMap[15]);
      const tmp4 = modalSessionId;
      if (null != description) {
        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
        tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
      }
      return closure_1_9(tmp3, obj, index);
    })
  };
  const TableRowGroup = modalSessionId(5999).TableRowGroup;
  arr3 = closure_6(modalSessionId);
  items1[1] = closure_9(TableRowGroup, obj10);
  const obj11 = { style: tmp.ageGroupLearnMoreContainer, children: closure_9(Text3, obj12) };
  obj12 = { variant: "text-xs/medium", color: "text-muted", children: intl.format(modalSessionId(1115).t["L+FgkZ"], obj13) };
  Text3 = modalSessionId(4832).Text;
  intl = modalSessionId(1115).intl;
  obj13 = {
    handleOnHelpUrlHook() {
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
      AgeVerificationAnalyticsUtils;
      const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  };
  items1[2] = closure_9(closure_5, obj11);
  const items2 = [closure_9(closure_4, obj3), ];
  const obj14 = { style: items3, children: items4 };
  items3 = [tmp.getStartedFooterContainer, { paddingBottom: bottom }];
  let tmp9Result = !isManualAgeVerificationHidden;
  const tmp8 = closure_11;
  if (tmp9Result) {
    const obj15 = { style: tmp.getStartedRequestTextContainer, children: closure_9(Text4, obj16) };
    obj16 = { variant: "text-xs/medium", color: "text-muted", style: tmp.getStartedRequestText, children: intl2.format(tmp4(1115).t.pJAxgQ, obj17) };
    Text4 = tmp4(4832).Text;
    intl2 = tmp4(1115).intl;
    obj17 = {
      handleOnRequestHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          obj.openUrl(SafetyHubLinks.APPEALS_LINK);
          const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
          AgeVerificationAnalyticsUtils;
          const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
        }
    };
    tmp9Result = tmp9(tmp10, obj15);
  }
  items4 = [tmp9Result, ];
  const obj18 = { children: items2 };
  const obj19 = { style: tmp.getStartedFooterButtonsContainer, children: closure_9(Button, obj20) };
  obj20 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(tmp4(1115).t.SJMnkX),
    onPress: _asyncToGenerator(async (arg0, value) => {
      let v1;
      let v3;
      if (modalSessionId === 2) {
        modalSessionId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          modalSessionId = 2;
          if (0 === _undefined) {
            if (arg0 === 1) {
              modalSessionId = 3;
              throw value;
            } else if (arg0 === 2) {
              modalSessionId = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const trackAgeVerificationModalClicked = modalSessionId(dependencyMap[19]).trackAgeVerificationModalClicked;
              const tmp6 = modalSessionId(dependencyMap[19]);
              const result = trackAgeVerificationModalClicked(modalSessionId, modalSessionId(dependencyMap[19]).AgeVerificationModalVersion.PRIMARY, modalSessionId(dependencyMap[19]).AgeVerificationModalCta.GET_STARTED);
              _undefined = 1;
              modalSessionId = 1;
              const obj4 = { value: _undefined(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            modalSessionId = 3;
            throw value;
          } else if (arg0 === 2) {
            modalSessionId = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            modalSessionId = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          modalSessionId = 3;
          throw tmp10;
        }
      }
    }),
    icon: closure_9(LinkExternalSmallIcon, obj21),
    loading,
    iconPosition: "end"
  };
  Button = tmp4(5281).Button;
  intl3 = tmp4(1115).intl;
  obj21 = { color: nativeDefault.colors.WHITE };
  LinkExternalSmallIcon = tmp4(8037).LinkExternalSmallIcon;
  items4[1] = closure_9(tmp10, obj19);
  items2[1] = closure_10(tmp10, obj14);
  return closure_10(tmp8, obj18);
};
