// Module ID: 7558
// Function ID: 60464
// Name: GetStartedScreen
// Dependencies: []
// Exports: default

// Module 7558 (GetStartedScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, ScrollView: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
const HelpdeskArticles = arg1(dependencyMap[3]).HelpdeskArticles;
const SafetyHubLinks = arg1(dependencyMap[4]).SafetyHubLinks;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { loadingIndicator: { paddingHorizontal: true, borderTopStartRadius: "/assets/modules/stage_channels/native/images", borderTopEndRadius: 25, marginTop: 24, lineHeight: null, textAlign: "b252f7dc065300671ba9347414eb0bad" } };
obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, flex: 1 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.headerContainer = { paddingVertical: importDefault(dependencyMap[7]).space.PX_16, alignItems: "center", gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.centerText = { textAlign: "center" };
const obj1 = { paddingVertical: importDefault(dependencyMap[7]).space.PX_16, alignItems: "center", gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.helpLink = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
let closure_13 = obj.createStyles(obj);
const obj2 = { marginTop: importDefault(dependencyMap[7]).space.PX_8 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default function GetStartedScreen(modalSessionId) {
  let initiateAgeVerification;
  let loading;
  modalSessionId = modalSessionId.modalSessionId;
  const arg1 = modalSessionId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  obj = { onComplete: modalSessionId.onClose, entryPoint: arg1(dependencyMap[9]).AgeVerificationModalEntryPoint.RETRY_MODAL };
  initiateAgeVerification = obj.useInitiateAgeVerification(obj);
  ({ loading, initiateAgeVerification } = initiateAgeVerification);
  const importDefault = initiateAgeVerification;
  let obj2 = arg1(dependencyMap[10]);
  const isManualAgeVerificationHidden = obj2.useIsManualAgeVerificationHidden("age_verification_retry_modal");
  const dependencyMap = isManualAgeVerificationHidden;
  const intl = arg1(dependencyMap[11]).intl;
  const intl2 = arg1(dependencyMap[11]).intl;
  const stringResult = intl.string(arg1(dependencyMap[11]).t.JSdbBe);
  const intl3 = arg1(dependencyMap[11]).intl;
  const stringResult2 = intl3.string(arg1(dependencyMap[11]).t.mFvt9M);
  let closure_3 = stringResult2;
  const items = [initiateAgeVerification, modalSessionId, isManualAgeVerificationHidden, stringResult2];
  const memo = React.useMemo(() => {
    let obj = { title: stringResult2 };
    const intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
    obj.description = intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.ecdUKD);
    const modalSessionId = stringResult2(async () => {
      const result = callback(closure_2[9]).trackAgeVerificationModalClicked(callback, callback(closure_2[9]).AgeVerificationModalVersion.RETRY, callback(closure_2[9]).AgeVerificationModalCta.GET_STARTED);
      yield closure_1();
    });
    obj.onPress = function() {
      return callback(...arguments);
    };
    const items = [obj];
    if (!isManualAgeVerificationHidden) {
      obj = {};
      const intl2 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
      obj.title = intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.LZO+Hd);
      const intl3 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
      obj.description = intl3.string(modalSessionId(isManualAgeVerificationHidden[11]).t.ty+iWP);
      obj.onPress = function onPress() {
        callback2(closure_2[12]).openUrl(constants.APPEALS_LINK);
        const obj = callback2(closure_2[12]);
        const result = callback(closure_2[9]).trackAgeVerificationModalClicked(callback, callback(closure_2[9]).AgeVerificationModalVersion.RETRY, callback(closure_2[9]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
      };
      items.push(obj);
    }
    return items;
  }, items);
  obj = {};
  if (loading) {
    const obj1 = { style: tmp.loadingIndicator, size: "small" };
    let obj5 = arg1(dependencyMap[13]);
    let WHITE;
    if (obj5.isAndroid()) {
      WHITE = importDefault(dependencyMap[7]).unsafe_rawColors.WHITE;
    }
    obj1.color = WHITE;
    loading = callback(closure_5, obj1);
    const tmp10 = closure_5;
    const tmp9 = callback;
  }
  const items1 = [loading, ];
  obj2 = { style: tmp.container };
  const obj3 = { style: tmp.headerContainer };
  const items2 = [callback(arg1(dependencyMap[14]).ShieldSpotIllustration, {}), callback(arg1(dependencyMap[15]).Text, { style: tmp.centerText, children: stringResult }), ];
  obj5 = { style: tmp.centerText, children: intl2.string(arg1(dependencyMap[11]).t.JNK1ue) };
  items2[2] = callback(arg1(dependencyMap[15]).Text, obj5);
  obj3.children = items2;
  const items3 = [callback2(closure_7, obj3), , ];
  const obj6 = {
    hasIcons: false,
    children: memo.map((arg0, arg1) => {
      let description;
      let onPress;
      let title;
      ({ title, description, onPress } = arg0);
      return callback(modalSessionId(isManualAgeVerificationHidden[17]).TableRow, { arrow: true, label, subLabel, onPress }, arg1);
    })
  };
  items3[1] = callback(arg1(dependencyMap[16]).TableRowGroup, obj6);
  const obj7 = { style: items4 };
  const items4 = [, ];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  const intl4 = arg1(dependencyMap[11]).intl;
  obj7.children = intl4.format(arg1(dependencyMap[11]).t.L+FgkZ, {
    handleOnHelpUrlHook() {
      const obj = initiateAgeVerification(isManualAgeVerificationHidden[12]);
      obj.openUrl(initiateAgeVerification(isManualAgeVerificationHidden[18]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = initiateAgeVerification(isManualAgeVerificationHidden[18]);
      const result = modalSessionId(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.LEARN_MORE);
    }
  });
  items3[2] = callback(arg1(dependencyMap[15]).Text, obj7);
  obj2.children = items3;
  items1[1] = callback2(closure_6, obj2);
  obj.children = items1;
  return callback2(closure_12, obj);
};
