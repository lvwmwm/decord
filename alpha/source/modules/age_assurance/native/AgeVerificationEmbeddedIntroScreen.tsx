// Module ID: 8156
// Function ID: 8157
// Name: AgeVerificationEmbeddedIntroScreen
// Dependencies: [19, 1072, 21, 5009, 575, 7961, 8149, 8157, 7964, 7965, 6022, 7966, 5619, 6720, 8159, 1114, 3093, 7947, 2062, 2]
// Exports: default

// Module 8156 (AgeVerificationEmbeddedIntroScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef3093 from "module_3093" /* 3093 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import AgeVerificationGetStartedModal from "AgeVerificationGetStartedModal" /* 8149 */;
import useAgeVerificationMethodsDefault from "useAgeVerificationMethods" /* 8157 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  let obj = navigation(7961);
  const items = [navigation];
  const isSuspendedUser = obj.useIsSuspendedUser();
  const callback = react.useCallback(() => {
    navigation.navigate(AgeVerificationGetStartedModal.AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  const ageVerificationMethods = useAgeVerificationMethodsDefault({ onClose, classificationId, onGoogleWalletSelect: callback }).ageVerificationMethods;
  const obj2 = { children: closure_6(ModalContent, obj3) };
  const ModalScreen = navigation(7964).ModalScreen;
  obj3 = { children: items4 };
  ModalContent = navigation(7965).ModalContent;
  const obj4 = { align: "center", justify: "center", spacing: 24, children: items3 };
  const Stack = navigation(6022).Stack;
  const obj5 = { align: "center", justify: "center", spacing: 16, children: items1 };
  const Stack2 = navigation(6022).Stack;
  items1 = [closure_5(navigation(7966).ShieldSpotIllustration, { height: 100, width: 177 }), ];
  const obj6 = { align: "center", justify: "center", spacing: 8, children: items2 };
  const Stack3 = navigation(6022).Stack;
  const obj7 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: obj8.getAgeVerificationGetStartedTitle(entryPoint) };
  const Text = navigation(5619).Text;
  obj8 = navigation(6720);
  items2 = [closure_5(Text, obj7), ];
  const obj9 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: obj10.getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser) };
  const Text2 = navigation(5619).Text;
  obj10 = navigation(6720);
  items2[1] = closure_5(Text2, obj9);
  items1[1] = closure_6(Stack3, obj6);
  items3 = [closure_6(Stack2, obj5), closure_5(navigation(8159).AgeVerificationMethodsContainer, { ageVerificationMethods, modalSessionId })];
  items4 = [closure_6(Stack, obj4), ];
  const obj11 = { variant: "text-xs/medium", color: "text-muted", style: tmp.helpLink, children: intl.format(_modDef3093.lG69e1, obj12) };
  const Text3 = navigation(5619).Text;
  intl = navigation(1114).intl;
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
};
