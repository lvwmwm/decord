// Module ID: 8158
// Function ID: 8159
// Name: AgeVerificationIntroScreen
// Dependencies: [5, 19, 17, 1072, 21, 5014, 575, 1625, 8019, 7974, 5624, 6726, 7060, 8159, 8160, 1113, 7955, 2061, 6729, 5634, 8161, 2]
// Exports: default

// Module 8158 (AgeVerificationIntroScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6729 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7955 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c1, description;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { getStartedContainer: obj2, getStartedHeaderContainer: obj3, ageGroupLearnMoreContainer: obj4, getStartedHeaderText: { textAlign: "center" }, getStartedFooterContainer: obj5, getStartedFooterButtonsContainer: obj6 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj6 = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default function GetStartedScreen(modalSessionId) {
  let Button;
  let LinkExternalSmallIcon;
  let Text3;
  let ageVerificationGetStartedSteps;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj18;
  let obj4;
  let obj7;
  let obj9;
  modalSessionId = modalSessionId.modalSessionId;
  const entryPoint = modalSessionId.entryPoint;
  let initiateAgeVerification;
  const onClose = modalSessionId.onClose;
  const tmp = closure_10();
  const bottom = initiateAgeVerification(1625)().bottom;
  let obj = modalSessionId(8019);
  initiateAgeVerification = obj.useInitiateAgeVerification({ onComplete: onClose, entryPoint });
  initiateAgeVerification = initiateAgeVerification.initiateAgeVerification;
  let obj2 = { children: items2 };
  let obj3 = { children: closure_8(closure_5, obj4) };
  obj4 = { style: tmp.getStartedContainer, children: items1 };
  const loading = initiateAgeVerification.loading;
  const obj5 = { style: tmp.getStartedHeaderContainer, children: items };
  items = [closure_7(modalSessionId(7974).ShieldSpotIllustration, {}), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText, children: obj7.getAgeVerificationGetStartedTitle(entryPoint) };
  const Text = modalSessionId(5624).Text;
  obj7 = modalSessionId(6726);
  items[1] = closure_7(Text, obj6);
  const obj8 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: obj9.getAgeVerificationGetStartedSubtitle(entryPoint) };
  const Text2 = modalSessionId(5624).Text;
  obj9 = modalSessionId(6726);
  items[2] = closure_7(Text2, obj8);
  items1 = [closure_8(closure_5, obj5), , ];
  const obj10 = {
    hasIcons: true,
    children: ageVerificationGetStartedSteps.map((description, index) => {
      let tmpResult;
      description = description.description;
      const title = description.title;
      const obj = { index: index + 1, tip: closure_1_7(modalSessionId(dependencyMap[10]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
      tmpResult = null;
      const tmp2 = dependencyMap;
      const tmp3 = initiateAgeVerification(dependencyMap[14]);
      const tmp4 = modalSessionId;
      if (null != description) {
        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
        tmpResult = tmp(tmp4(tmp2[10]).Text, obj2);
      }
      return closure_1_7(tmp3, obj, index);
    })
  };
  const TableRowGroup = modalSessionId(7060).TableRowGroup;
  const obj11 = modalSessionId(8159);
  ageVerificationGetStartedSteps = obj11.getAgeVerificationGetStartedSteps(modalSessionId);
  items1[1] = closure_7(TableRowGroup, obj10);
  const obj12 = { style: tmp.ageGroupLearnMoreContainer, children: closure_7(Text3, obj13) };
  obj13 = { variant: "text-xs/medium", color: "text-muted", children: intl.format(modalSessionId(1113).t["L+FgkZ"], obj14) };
  Text3 = modalSessionId(5624).Text;
  intl = modalSessionId(1113).intl;
  obj14 = {
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
  items1[2] = closure_7(closure_5, obj12);
  items2 = [closure_7(closure_4, obj3), ];
  const obj15 = { style: items3, children: closure_7(closure_5, obj16) };
  items3 = [tmp.getStartedFooterContainer, { paddingBottom: bottom }];
  obj16 = { style: tmp.getStartedFooterButtonsContainer, children: closure_7(Button, obj17) };
  obj17 = {
    variant: "primary",
    size: "lg",
    text: intl2.string(modalSessionId(1113).t.SJMnkX),
    onPress: _asyncToGenerator(async (arg0, value) => {
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          modalSessionId = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              modalSessionId = 3;
              throw value;
            } else if (arg0 === 2) {
              modalSessionId = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const trackAgeVerificationModalClicked = modalSessionId(dependencyMap[18]).trackAgeVerificationModalClicked;
              const tmp6 = modalSessionId(dependencyMap[18]);
              const result = trackAgeVerificationModalClicked(modalSessionId, modalSessionId(dependencyMap[18]).AgeVerificationModalVersion.PRIMARY, modalSessionId(dependencyMap[18]).AgeVerificationModalCta.GET_STARTED);
              c1 = 1;
              modalSessionId = 1;
              const obj4 = { value: initiateAgeVerification(), done: false };
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp10) {
          modalSessionId = 3;
          throw tmp10;
        }
      }
    }),
    icon: closure_7(LinkExternalSmallIcon, obj18),
    loading,
    iconPosition: "end"
  };
  Button = modalSessionId(5634).Button;
  intl2 = modalSessionId(1113).intl;
  obj18 = { color: initiateAgeVerification(575).colors.WHITE };
  LinkExternalSmallIcon = modalSessionId(8161).LinkExternalSmallIcon;
  items2[1] = closure_7(closure_5, obj15);
  return closure_8(closure_9, obj2);
};
