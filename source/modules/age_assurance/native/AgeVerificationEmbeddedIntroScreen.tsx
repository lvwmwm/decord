// Module ID: 7565
// Function ID: 60625
// Name: AgeVerificationEmbeddedIntroScreen
// Dependencies: [31, 653, 33, 4131, 689, 6698, 7558, 7566, 6725, 6726, 4542, 6727, 4127, 4348, 7569, 1212, 2717, 6690, 1921, 2]
// Exports: default

// Module 7565 (AgeVerificationEmbeddedIntroScreen)
import result from "result";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { textAlign: "center" } };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, textAlign: "center" };
_createForOfIteratorHelperLoose.helpLink = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx");

export default function AgeVerificationEmbeddedIntroScreen(arg0) {
  let classificationId;
  let entryPoint;
  let modalSessionId;
  let navigation;
  let onClose;
  ({ entryPoint, navigation } = arg0);
  ({ onClose, modalSessionId, classificationId } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = navigation(6698);
  const items = [navigation];
  const isSuspendedUser = obj.useIsSuspendedUser();
  const callback = React.useCallback(() => {
    navigation.navigate(navigation(outer1_2[6]).AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  obj = {};
  obj = {};
  const obj1 = { align: "center", justify: "center", spacing: 24 };
  const obj2 = { align: "center", justify: "center", spacing: 16 };
  const items1 = [callback(navigation(6727).ShieldSpotIllustration, { height: 100, width: 177 }), ];
  const obj3 = { align: "center", justify: "center", spacing: 8 };
  const obj4 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  let obj7 = navigation(4348);
  obj4.children = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  const items2 = [callback(navigation(4127).Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: navigation(4348).getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser) };
  items2[1] = callback(navigation(4127).Text, obj5);
  obj3.children = items2;
  items1[1] = callback2(navigation(4542).Stack, obj3);
  obj2.children = items1;
  const items3 = [callback2(navigation(4542).Stack, obj2), callback(navigation(7569).AgeVerificationMethodsContainer, { ageVerificationMethods: importDefault(7566)({ onClose, classificationId, onGoogleWalletSelect: callback }).ageVerificationMethods, modalSessionId })];
  obj1.children = items3;
  const items4 = [callback2(navigation(4542).Stack, obj1), ];
  const obj6 = { variant: "text-xs/medium", color: "text-muted", style: tmp.helpLink };
  const intl = navigation(1212).intl;
  obj7 = {
    handleOnHelpUrlHook() {
      const obj = outer1_1(outer1_2[17]);
      obj.openUrl(outer1_1(outer1_2[18]).getArticleURL(outer1_4.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  obj6.children = intl.format(importDefault(2717).lG69e1, obj7);
  items4[1] = callback(navigation(4127).Text, obj6);
  obj.children = items4;
  obj.children = callback2(navigation(6726).ModalContent, obj);
  return callback(navigation(6725).ModalScreen, obj);
};
