// Module ID: 8330
// Function ID: 8331
// Name: AgeVerificationEmbeddedIntroScreen
// Dependencies: [19, 1072, 21, 5243, 575, 8139, 8323, 8331, 8142, 8144, 6274, 8145, 5866, 6767, 8333, 1113, 3273, 8124, 2185, 2]
// Exports: default

// Module 8330 (AgeVerificationEmbeddedIntroScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import _modDef3273 from "module_3273" /* 3273 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8124 */;
import AgeVerificationGetStartedModal from "AgeVerificationGetStartedModal" /* 8323 */;
import useAgeVerificationMethodsDefault from "useAgeVerificationMethods" /* 8331 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { header: { textAlign: "center" }, helpLink: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_16, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx");

export default function AgeVerificationEmbeddedIntroScreen(arg0) {
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
  let obj = navigation(8139);
  const items = [navigation];
  const isSuspendedUser = obj.useIsSuspendedUser();
  const callback = react.useCallback(() => {
    navigation.navigate(AgeVerificationGetStartedModal.AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  const ageVerificationMethods = useAgeVerificationMethodsDefault({ onClose, classificationId, onGoogleWalletSelect: callback }).ageVerificationMethods;
  const obj2 = { children: closure_6(ModalContent, obj3) };
  const ModalScreen = navigation(8142).ModalScreen;
  obj3 = { children: items4 };
  ModalContent = navigation(8144).ModalContent;
  const obj4 = { align: "center", justify: "center", spacing: 24, children: items3 };
  const Stack = navigation(6274).Stack;
  const obj5 = { align: "center", justify: "center", spacing: 16, children: items1 };
  const Stack2 = navigation(6274).Stack;
  items1 = [closure_5(navigation(8145).ShieldSpotIllustration, { height: 100, width: 177 }), ];
  const obj6 = { align: "center", justify: "center", spacing: 8, children: items2 };
  const Stack3 = navigation(6274).Stack;
  const obj7 = { accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: obj8.getAgeVerificationGetStartedTitle(entryPoint) };
  const Text = navigation(5866).Text;
  obj8 = navigation(6767);
  items2 = [closure_5(Text, obj7), ];
  const obj9 = { variant: "body-md/medium", color: "text-strong", style: tmp.header, children: obj10.getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser) };
  const Text2 = navigation(5866).Text;
  obj10 = navigation(6767);
  items2[1] = closure_5(Text2, obj9);
  items1[1] = closure_6(Stack3, obj6);
  items3 = [closure_6(Stack2, obj5), closure_5(navigation(8333).AgeVerificationMethodsContainer, { ageVerificationMethods, modalSessionId })];
  items4 = [closure_6(Stack, obj4), ];
  const obj11 = { variant: "body-xs/medium", color: "text-muted", style: tmp.helpLink, children: intl.format(_modDef3273.lG69e1, obj12) };
  const Text3 = navigation(5866).Text;
  intl = navigation(1113).intl;
  obj12 = {
    handleOnHelpUrlHook() {
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(constants.AGE_VERIFICATION_LEARN_MORE));
    }
  };
  items4[1] = closure_5(Text3, obj11);
  return closure_5(ModalScreen, obj2);
};
