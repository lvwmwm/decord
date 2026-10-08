// Module ID: 7682
// Function ID: 7683
// Name: AgeVerificationEmbeddedIntroScreen
// Dependencies: [19, 1085, 21, 5090, 587, 558, 576, 5927, 7675, 7683, 7508, 5905, 5086, 5373, 7685, 1126, 3117, 7492, 2127, 7506, 7507, 2]

// Module 7682 (AgeVerificationEmbeddedIntroScreen)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import _modDef3117 from "module_3117" /* 3117 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import AgeVerificationGetStartedModal from "AgeVerificationGetStartedModal" /* 7675 */;
import useAgeVerificationMethodsDefault from "useAgeVerificationMethods" /* 7683 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { header: { textAlign: "center" }, helpLink: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_16, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AgeVerificationEmbeddedIntroScreen(arg0) {
  let classificationId;
  let entryPoint;
  let items;
  let items1;
  let items2;
  let items3;
  let modalSessionId;
  let obj7;
  let onClose;
  let tmp6;
  const tmp = navigation;
  let obj = navigation(576);
  const cResult = obj.c(32);
  ({ onClose, modalSessionId, classificationId, entryPoint, navigation } = arg0);
  const tmp4 = closure_7();
  const obj2 = navigation(5927);
  const isSuspendedUser = obj2.useIsSuspendedUser();
  if (cResult[0] !== navigation) {
    const fn = function l() {
      navigation.navigate(AgeVerificationGetStartedModal.AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === classificationId) {
    if (cResult[3] === onClose) {
      let tmp7;
      let tmp10;
      let tmp13;
      let tmp15;
      if (cResult[4] === tmp6) {
        tmp7 = cResult[5];
      }
      const ageVerificationMethods = useAgeVerificationMethodsDefault(tmp7).ageVerificationMethods;
      const _Symbol = Symbol;
      const tmp8 = importDefault;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = closure_5(tmp(7508).ShieldSpotIllustration, { height: 100, width: 177 });
        cResult[6] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== entryPoint) {
        const tmpResult = tmp(5905);
        const ageVerificationGetStartedTitle = tmpResult.getAgeVerificationGetStartedTitle(entryPoint);
        cResult[7] = entryPoint;
        cResult[8] = ageVerificationGetStartedTitle;
        tmp13 = ageVerificationGetStartedTitle;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp13) {
        const obj3 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp13 };
        const tmp17 = closure_5(tmp(5086).Text, obj3);
        cResult[9] = tmp13;
        cResult[10] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[10];
      }
      if (cResult[11] === entryPoint) {
        let tmp19;
        if (cResult[12] === isSuspendedUser) {
          tmp19 = cResult[13];
        }
        if (cResult[14] === tmp4.header) {
          let tmp21;
          if (cResult[15] === tmp19) {
            tmp21 = cResult[16];
          }
          if (cResult[17] === tmp15) {
            let tmp24;
            if (cResult[18] === tmp21) {
              tmp24 = cResult[19];
            }
            if (cResult[20] === ageVerificationMethods) {
              let tmp27;
              if (cResult[21] === modalSessionId) {
                tmp27 = cResult[22];
              }
              if (cResult[23] === tmp27) {
                let tmp30;
                let tmp33;
                let tmp35;
                if (cResult[24] === tmp24) {
                  tmp30 = cResult[25];
                }
                const _Symbol2 = Symbol;
                const helpLink = tmp4.helpLink;
                if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(1126).intl;
                  const obj4 = {
                    handleOnHelpUrlHook() {
                                      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
                                      AgeVerificationActionCreatorsDefault;
                                      const obj = HelpdeskUtilsDefault;
                                      openUrl(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
                                    }
                  };
                  const formatResult = intl.format(tmp8(3117).lG69e1, obj4);
                  cResult[26] = formatResult;
                  tmp33 = formatResult;
                } else {
                  tmp33 = cResult[26];
                }
                if (cResult[27] !== tmp4.helpLink) {
                  const obj5 = { variant: "text-xs/medium", color: "text-muted", style: helpLink, children: tmp33 };
                  const tmp37 = closure_5(tmp(5086).Text, obj5);
                  cResult[27] = tmp4.helpLink;
                  cResult[28] = tmp37;
                  tmp35 = tmp37;
                } else {
                  tmp35 = cResult[28];
                }
                if (cResult[29] === tmp30) {
                  let tmp38;
                  if (cResult[30] === tmp35) {
                    tmp38 = cResult[31];
                  }
                  return tmp38;
                }
                const obj6 = { children: closure_6(tmp(7507).ModalContent, obj7) };
                const ModalScreen = tmp(7506).ModalScreen;
                obj7 = { children: items };
                items = [tmp30, tmp35];
                const tmp41 = closure_5(ModalScreen, obj6);
                cResult[29] = tmp30;
                cResult[30] = tmp35;
                cResult[31] = tmp41;
                tmp38 = tmp41;
              }
              const obj8 = { align: "center", justify: "center", spacing: 24, children: items1 };
              items1 = [tmp24, tmp27];
              const tmp32 = closure_6(tmp(5373).Stack, obj8);
              cResult[23] = tmp27;
              cResult[24] = tmp24;
              cResult[25] = tmp32;
              tmp30 = tmp32;
            }
            const obj9 = { ageVerificationMethods, modalSessionId };
            const tmp29 = closure_5(tmp(7685).AgeVerificationMethodsContainer, obj9);
            cResult[20] = ageVerificationMethods;
            cResult[21] = modalSessionId;
            cResult[22] = tmp29;
            tmp27 = tmp29;
          }
          const obj10 = { align: "center", justify: "center", spacing: 16, children: items2 };
          items2 = [tmp10, ];
          const Stack = tmp(5373).Stack;
          const obj11 = { align: "center", justify: "center", spacing: 8, children: items3 };
          items3 = [tmp15, tmp21];
          items2[1] = closure_6(tmp(5373).Stack, obj11);
          const tmp26 = closure_6(Stack, obj10);
          cResult[17] = tmp15;
          cResult[18] = tmp21;
          cResult[19] = tmp26;
          tmp24 = tmp26;
        }
        const obj12 = { variant: "text-md/medium", color: "text-strong", style: tmp18, children: tmp19 };
        const tmp23 = closure_5(tmp(5086).Text, obj12);
        cResult[14] = tmp4.header;
        cResult[15] = tmp19;
        cResult[16] = tmp23;
        tmp21 = tmp23;
      }
      const tmpResult2 = tmp(5905);
      const ageVerificationGetStartedSubtitle = tmpResult2.getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser);
      cResult[11] = entryPoint;
      cResult[12] = isSuspendedUser;
      cResult[13] = ageVerificationGetStartedSubtitle;
      tmp19 = ageVerificationGetStartedSubtitle;
    }
  }
  const obj13 = { onClose, classificationId, onGoogleWalletSelect: tmp6 };
  cResult[2] = classificationId;
  cResult[3] = onClose;
  cResult[4] = tmp6;
  cResult[5] = obj13;
  tmp7 = obj13;
}) : (function AgeVerificationEmbeddedIntroScreen(arg0) {
  let ModalContent;
  let classificationId;
  let entryPoint;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let modalSessionId;
  let obj10;
  let obj12;
  let obj3;
  let obj8;
  let onClose;
  ({ entryPoint, navigation } = arg0);
  ({ onClose, modalSessionId, classificationId } = arg0);
  const tmp = closure_7();
  let obj = navigation(5927);
  const items = [navigation];
  const isSuspendedUser = obj.useIsSuspendedUser();
  const callback = react.useCallback(() => {
    navigation.navigate(AgeVerificationGetStartedModal.AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  const ageVerificationMethods = useAgeVerificationMethodsDefault({ onClose, classificationId, onGoogleWalletSelect: callback }).ageVerificationMethods;
  const obj2 = { children: closure_6(ModalContent, obj3) };
  const ModalScreen = navigation(7506).ModalScreen;
  obj3 = { children: items4 };
  ModalContent = navigation(7507).ModalContent;
  const obj4 = { align: "center", justify: "center", spacing: 24, children: items3 };
  const Stack = navigation(5373).Stack;
  const obj5 = { align: "center", justify: "center", spacing: 16, children: items1 };
  const Stack2 = navigation(5373).Stack;
  items1 = [closure_5(navigation(7508).ShieldSpotIllustration, { height: 100, width: 177 }), ];
  const obj6 = { align: "center", justify: "center", spacing: 8, children: items2 };
  const Stack3 = navigation(5373).Stack;
  const obj7 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: obj8.getAgeVerificationGetStartedTitle(entryPoint) };
  const Text = navigation(5086).Text;
  obj8 = navigation(5905);
  items2 = [closure_5(Text, obj7), ];
  const obj9 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: obj10.getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser) };
  const Text2 = navigation(5086).Text;
  obj10 = navigation(5905);
  items2[1] = closure_5(Text2, obj9);
  items1[1] = closure_6(Stack3, obj6);
  items3 = [closure_6(Stack2, obj5), closure_5(navigation(7685).AgeVerificationMethodsContainer, { ageVerificationMethods, modalSessionId })];
  items4 = [closure_6(Stack, obj4), ];
  const obj11 = { variant: "text-xs/medium", color: "text-muted", style: tmp.helpLink, children: intl.format(_modDef3117.lG69e1, obj12) };
  const Text3 = navigation(5086).Text;
  intl = navigation(1126).intl;
  obj12 = {
    handleOnHelpUrlHook() {
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  items4[1] = closure_5(Text3, obj11);
  return closure_5(ModalScreen, obj2);
});
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx");

export default tmp3;
