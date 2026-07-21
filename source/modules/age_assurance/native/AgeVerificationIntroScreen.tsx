// Module ID: 7553
// Function ID: 60448
// Name: GetStartedScreen
// Dependencies: []
// Exports: default

// Module 7553 (GetStartedScreen)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ ScrollView: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = arg1(dependencyMap[3]).getAgeVerificationGetStartedSteps;
const HelpdeskArticles = arg1(dependencyMap[4]).HelpdeskArticles;
const SafetyHubLinks = arg1(dependencyMap[5]).SafetyHubLinks;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, gap: importDefault(dependencyMap[8]).space.PX_16, flex: 1 };
obj.getStartedContainer = obj;
const tmp4 = arg1(dependencyMap[6]);
obj.getStartedHeaderContainer = { alignItems: "center", gap: importDefault(dependencyMap[8]).space.PX_8 };
const obj1 = { alignItems: "center", gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.ageGroupLearnMoreContainer = { alignItems: "center", marginTop: -importDefault(dependencyMap[8]).space.PX_8 };
obj.getStartedHeaderText = { textAlign: "center" };
obj.getStartedRequestTextContainer = { alignItems: "center" };
const obj2 = { alignItems: "center", marginTop: -importDefault(dependencyMap[8]).space.PX_8 };
obj.getStartedFooterContainer = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingTop: importDefault(dependencyMap[8]).space.PX_48 };
const obj3 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingTop: importDefault(dependencyMap[8]).space.PX_48 };
obj.getStartedRequestText = { textAlign: "center", marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
const obj4 = { textAlign: "center", marginBottom: importDefault(dependencyMap[8]).space.PX_16 };
obj.getStartedFooterButtonsContainer = { gap: importDefault(dependencyMap[8]).space.PX_8 };
let closure_12 = obj.createStyles(obj);
const obj5 = { gap: importDefault(dependencyMap[8]).space.PX_8 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default function GetStartedScreen(onComplete) {
  const modalSessionId = onComplete.modalSessionId;
  const arg1 = modalSessionId;
  const entryPoint = onComplete.entryPoint;
  const tmp = callback5();
  let obj = arg1(dependencyMap[10]);
  const initiateAgeVerification = obj.useInitiateAgeVerification({ onComplete: onComplete.onClose, entryPoint });
  const importDefault = initiateAgeVerification.initiateAgeVerification;
  let obj1 = arg1(dependencyMap[11]);
  obj = {};
  obj = {};
  obj1 = { style: tmp.getStartedContainer };
  const obj2 = { style: tmp.getStartedHeaderContainer };
  const isManualAgeVerificationHidden = obj1.useIsManualAgeVerificationHidden("age_verification_get_started_modal");
  const items = [callback3(arg1(dependencyMap[12]).ShieldSpotIllustration, {}), , ];
  const obj3 = { style: tmp.getStartedHeaderText };
  let obj7 = arg1(dependencyMap[10]);
  obj3.children = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  items[1] = callback3(arg1(dependencyMap[13]).Text, obj3);
  const obj4 = { style: tmp.getStartedHeaderText };
  let obj9 = arg1(dependencyMap[10]);
  obj4.children = obj9.getAgeVerificationGetStartedSubtitle(entryPoint);
  items[2] = callback3(arg1(dependencyMap[13]).Text, obj4);
  obj2.children = items;
  const items1 = [callback4(closure_5, obj2), , ];
  const obj5 = {
    hasIcons: true,
    children: callback2(modalSessionId).map((children) => {
      const description = children.description;
      let obj = { index: arg1 + 1, tip: callback(modalSessionId(closure_2[13]).Text, { children: children.title }) };
      let tmp3 = null;
      if (null != description) {
        obj = { children: description };
        tmp3 = callback(modalSessionId(closure_2[13]).Text, obj);
      }
      obj.description = tmp3;
      return callback(initiateAgeVerification(closure_2[15]), obj, arg1);
    })
  };
  items1[1] = callback3(arg1(dependencyMap[14]).TableRowGroup, obj5);
  const obj6 = { style: tmp.ageGroupLearnMoreContainer };
  obj7 = {};
  const intl = arg1(dependencyMap[16]).intl;
  obj7.children = intl.format(arg1(dependencyMap[16]).t.L+FgkZ, {
    handleOnHelpUrlHook() {
      const obj = initiateAgeVerification(closure_2[17]);
      obj.openUrl(initiateAgeVerification(closure_2[18]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = initiateAgeVerification(closure_2[18]);
      const result = modalSessionId(closure_2[19]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(closure_2[19]).AgeVerificationModalVersion.PRIMARY, modalSessionId(closure_2[19]).AgeVerificationModalCta.LEARN_MORE);
    }
  });
  obj6.children = callback3(arg1(dependencyMap[13]).Text, obj7);
  items1[2] = callback3(closure_5, obj6);
  obj1.children = items1;
  obj.children = callback4(closure_5, obj1);
  const items2 = [callback3(closure_4, obj), ];
  obj9 = { style: items3 };
  const items3 = [tmp.getStartedFooterContainer, { paddingBottom: importDefault(dependencyMap[9])().bottom }];
  let tmp7 = !isManualAgeVerificationHidden;
  if (tmp7) {
    const obj10 = { style: tmp.getStartedRequestTextContainer };
    const obj11 = { style: tmp.getStartedRequestText };
    const intl2 = arg1(dependencyMap[16]).intl;
    const obj12 = {
      handleOnRequestHook() {
          initiateAgeVerification(closure_2[17]).openUrl(constants2.APPEALS_LINK);
          const obj = initiateAgeVerification(closure_2[17]);
          const result = modalSessionId(closure_2[19]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(closure_2[19]).AgeVerificationModalVersion.PRIMARY, modalSessionId(closure_2[19]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
        }
    };
    obj11.children = intl2.format(arg1(dependencyMap[16]).t.pJAxgQ, obj12);
    obj10.children = callback3(arg1(dependencyMap[13]).Text, obj11);
    tmp7 = callback3(closure_5, obj10);
  }
  const items4 = [tmp7, ];
  const obj13 = { style: tmp.getStartedFooterButtonsContainer };
  const obj14 = {};
  const intl3 = arg1(dependencyMap[16]).intl;
  obj14.text = intl3.string(arg1(dependencyMap[16]).t.SJMnkX);
  obj14.onPress = callback(async () => {
    const result = callback(closure_2[19]).trackAgeVerificationModalClicked(callback, callback(closure_2[19]).AgeVerificationModalVersion.PRIMARY, callback(closure_2[19]).AgeVerificationModalCta.GET_STARTED);
    yield closure_1();
  });
  const obj15 = { color: importDefault(dependencyMap[8]).colors.WHITE };
  obj14.icon = callback3(arg1(dependencyMap[21]).LinkExternalSmallIcon, obj15);
  obj14.loading = initiateAgeVerification.loading;
  obj14.iconPosition = "end";
  obj13.children = callback3(arg1(dependencyMap[20]).Button, obj14);
  items4[1] = callback3(closure_5, obj13);
  obj9.children = items4;
  items2[1] = callback4(closure_5, obj9);
  obj.children = items2;
  return callback4(closure_11, obj);
};
