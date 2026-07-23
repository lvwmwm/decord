// Module ID: 7565
// Function ID: 60524
// Name: GetStartedScreen
// Dependencies: [5, 31, 27, 653, 7544, 33, 4130, 689, 4347, 7538, 7561, 1212, 7536, 477, 5807, 4126, 5503, 5165, 1920, 2]
// Exports: default

// Module 7565 (GetStartedScreen)
import closure_3 from "jsxProd";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import { SafetyHubLinks } from "SafetyHubLinks";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ ActivityIndicator: closure_5, ScrollView: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { loadingIndicator: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerContainer = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.centerText = { textAlign: "center" };
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.helpLink = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default function GetStartedScreen(modalSessionId) {
  let initiateAgeVerification;
  let loading;
  modalSessionId = modalSessionId.modalSessionId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = modalSessionId(isManualAgeVerificationHidden[8]);
  obj = { onComplete: modalSessionId.onClose, entryPoint: modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalEntryPoint.RETRY_MODAL };
  initiateAgeVerification = obj.useInitiateAgeVerification(obj);
  ({ loading, initiateAgeVerification } = initiateAgeVerification);
  let obj2 = modalSessionId(isManualAgeVerificationHidden[10]);
  isManualAgeVerificationHidden = obj2.useIsManualAgeVerificationHidden("age_verification_retry_modal");
  let intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  let intl2 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  const stringResult = intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JSdbBe);
  let intl3 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  const stringResult2 = intl3.string(modalSessionId(isManualAgeVerificationHidden[11]).t.mFvt9M);
  let items = [initiateAgeVerification, modalSessionId, isManualAgeVerificationHidden, stringResult2];
  const memo = React.useMemo(() => {
    let obj = { title: stringResult2 };
    const intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
    obj.description = intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.ecdUKD);
    let closure_0 = stringResult2(async () => {
      const result = modalSessionId(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked(closure_0, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.GET_STARTED);
      yield outer2_1();
    });
    obj.onPress = function() {
      return callback(...arguments);
    };
    const items = [obj];
    if (!isManualAgeVerificationHidden) {
      obj = {};
      const intl2 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
      obj.title = intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t["LZO+Hd"]);
      const intl3 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
      obj.description = intl3.string(modalSessionId(isManualAgeVerificationHidden[11]).t["ty+iWP"]);
      obj.onPress = function onPress() {
        initiateAgeVerification(isManualAgeVerificationHidden[12]).openUrl(outer2_9.APPEALS_LINK);
        const obj = initiateAgeVerification(isManualAgeVerificationHidden[12]);
        const result = modalSessionId(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked(closure_0, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
      };
      items.push(obj);
    }
    return items;
  }, items);
  obj = {};
  if (loading) {
    const obj1 = { style: tmp.loadingIndicator, size: "small" };
    let obj5 = modalSessionId(isManualAgeVerificationHidden[13]);
    let WHITE;
    if (obj5.isAndroid()) {
      WHITE = initiateAgeVerification(isManualAgeVerificationHidden[7]).unsafe_rawColors.WHITE;
    }
    obj1.color = WHITE;
    loading = callback(closure_5, obj1);
    const tmp10 = closure_5;
    const tmp9 = callback;
  }
  const items1 = [loading, ];
  obj2 = { style: tmp.container };
  const obj3 = { style: tmp.headerContainer };
  const items2 = [callback(modalSessionId(isManualAgeVerificationHidden[14]).ShieldSpotIllustration, {}), , ];
  const obj4 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult };
  items2[1] = callback(modalSessionId(isManualAgeVerificationHidden[15]).Text, obj4);
  obj5 = { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue) };
  items2[2] = callback(modalSessionId(isManualAgeVerificationHidden[15]).Text, obj5);
  obj3.children = items2;
  const items3 = [callback2(closure_7, obj3), , ];
  const obj6 = {
    hasIcons: false,
    children: memo.map((arg0, arg1) => {
      let description;
      let onPress;
      let title;
      ({ title, description, onPress } = arg0);
      return outer1_10(modalSessionId(isManualAgeVerificationHidden[17]).TableRow, { arrow: true, label, subLabel, onPress }, arg1);
    })
  };
  items3[1] = callback(modalSessionId(isManualAgeVerificationHidden[16]).TableRowGroup, obj6);
  const obj7 = { variant: "text-xs/medium", color: "text-muted" };
  const items4 = [, ];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  obj7.style = items4;
  const intl4 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  obj7.children = intl4.format(modalSessionId(isManualAgeVerificationHidden[11]).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = initiateAgeVerification(isManualAgeVerificationHidden[12]);
      obj.openUrl(initiateAgeVerification(isManualAgeVerificationHidden[18]).getArticleURL(outer1_8.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = initiateAgeVerification(isManualAgeVerificationHidden[18]);
      const result = modalSessionId(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.LEARN_MORE);
    }
  });
  items3[2] = callback(modalSessionId(isManualAgeVerificationHidden[15]).Text, obj7);
  obj2.children = items3;
  items1[1] = callback2(closure_6, obj2);
  obj.children = items1;
  return callback2(closure_12, obj);
};
