// Module ID: 7555
// Function ID: 60461
// Name: AgeVerificationEmbeddedIntroScreen
// Dependencies: []
// Exports: default

// Module 7555 (AgeVerificationEmbeddedIntroScreen)
let closure_3 = importAll(dependencyMap[0]);
const HelpdeskArticles = arg1(dependencyMap[1]).HelpdeskArticles;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { header: { textAlign: "center" } };
obj = { marginTop: importDefault(dependencyMap[4]).space.PX_16, textAlign: "center" };
obj.helpLink = obj;
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationEmbeddedIntroScreen.tsx");

export default function AgeVerificationEmbeddedIntroScreen(arg0) {
  let classificationId;
  let entryPoint;
  let modalSessionId;
  let navigation;
  let onClose;
  ({ entryPoint, navigation } = arg0);
  const arg1 = navigation;
  ({ onClose, modalSessionId, classificationId } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const items = [navigation];
  const isSuspendedUser = obj.useIsSuspendedUser();
  const callback = React.useCallback(() => {
    navigation.navigate(navigation(closure_2[6]).AgeVerificationGetStartedModalScenes.GOOGLE_WALLET_VERIFICATION);
  }, items);
  obj = {};
  obj = {};
  const obj1 = {};
  const obj2 = {};
  const items1 = [callback(arg1(dependencyMap[11]).ShieldSpotIllustration, {}), ];
  const obj3 = { top: "Array", bottom: "participantsLength", right: "Array" };
  const obj4 = { 9223372036854775807: "<string:1515257857>", 9223372036854775807: "<string:2080775>", 9223372036854775807: "<string:2264924464>" };
  let obj7 = arg1(dependencyMap[13]);
  obj4.children = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  const items2 = [callback(arg1(dependencyMap[12]).Text, obj4), ];
  const obj5 = { style: tmp.header, children: arg1(dependencyMap[13]).getAgeVerificationGetStartedSubtitle(entryPoint, undefined, isSuspendedUser) };
  items2[1] = callback(arg1(dependencyMap[12]).Text, obj5);
  obj3.children = items2;
  items1[1] = callback2(arg1(dependencyMap[10]).Stack, obj3);
  obj2.children = items1;
  const items3 = [callback2(arg1(dependencyMap[10]).Stack, obj2), callback(arg1(dependencyMap[14]).AgeVerificationMethodsContainer, { ageVerificationMethods: importDefault(dependencyMap[7])({ onClose, classificationId, onGoogleWalletSelect: callback }).ageVerificationMethods, modalSessionId })];
  obj1.children = items3;
  const items4 = [callback2(arg1(dependencyMap[10]).Stack, obj1), ];
  const obj6 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, style: tmp.helpLink };
  const intl = arg1(dependencyMap[15]).intl;
  obj7 = {
    handleOnHelpUrlHook() {
      const obj = callback(closure_2[17]);
      obj.openUrl(callback(closure_2[18]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  obj6.children = intl.format(importDefault(dependencyMap[16]).lG69e1, obj7);
  items4[1] = callback(arg1(dependencyMap[12]).Text, obj6);
  obj.children = items4;
  obj.children = callback2(arg1(dependencyMap[9]).ModalContent, obj);
  return callback(arg1(dependencyMap[8]).ModalScreen, obj);
};
