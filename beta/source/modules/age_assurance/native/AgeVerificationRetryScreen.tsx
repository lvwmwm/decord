// Module ID: 8039
// Function ID: 8040
// Name: AgeVerificationRetryScreen
// Dependencies: [5, 19, 17, 1074, 7868, 21, 4836, 576, 5048, 7861, 8035, 1115, 7859, 1364, 7872, 4832, 5999, 5917, 2111, 2]
// Exports: default

// Module 8039 (AgeVerificationRetryScreen)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c0, c1;

let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
const SafetyHubLinks = SafetyHubConstants.SafetyHubLinks;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingIndicator: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }, container: obj2, headerContainer: obj3, centerText: { textAlign: "center" }, helpLink: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default function GetStartedScreen(modalSessionId) {
  let WHITE;
  let initiateAgeVerification;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let loading;
  let obj12;
  modalSessionId = modalSessionId.modalSessionId;
  initiateAgeVerification = undefined;
  let isManualAgeVerificationHidden;
  const onClose = modalSessionId.onClose;
  const tmp = closure_13();
  let tmp2 = modalSessionId;
  let tmp3 = isManualAgeVerificationHidden;
  let obj = modalSessionId(isManualAgeVerificationHidden[8]);
  let obj2 = { onComplete: onClose, entryPoint: modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalEntryPoint.RETRY_MODAL };
  const initiateAgeVerification1 = obj.useInitiateAgeVerification(obj2);
  ({ loading, initiateAgeVerification } = initiateAgeVerification1);
  let obj3 = modalSessionId(isManualAgeVerificationHidden[10]);
  isManualAgeVerificationHidden = obj3.useIsManualAgeVerificationHidden("age_verification_retry_modal");
  let intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  const stringResult = intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JSdbBe);
  let intl2 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  const stringResult1 = intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue);
  let intl3 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  const stringResult2 = intl3.string(modalSessionId(isManualAgeVerificationHidden[11]).t.mFvt9M);
  let items = [initiateAgeVerification, modalSessionId, isManualAgeVerificationHidden, stringResult2];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj = {
      title: stringResult2,
      description: intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.ecdUKD),
      onPress: function() {
        return closure_0(...arguments);
      }
    };
    const tmp2 = isManualAgeVerificationHidden;
    intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
    let closure_0 = stringResult2(function*(arg0, value) {
      let v1;
      if (c0 === 2) {
        c0 = 3;
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
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const trackAgeVerificationModalClicked = v3(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked;
              const tmp10 = v3(isManualAgeVerificationHidden[9]);
              const result = trackAgeVerificationModalClicked(c0, v3(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, v3(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.GET_STARTED);
              c1 = 1;
              c0 = 1;
              const obj4 = { value: c1(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp4) {
          c0 = 3;
          throw tmp4;
        }
      }
    });
    const items = [obj];
    const tmp3 = isManualAgeVerificationHidden;
    if (!tmp3) {
      let obj2 = {
        title: intl2.string(tmp(tmp2[11]).t["LZO+Hd"]),
        description: intl3.string(tmp(tmp2[11]).t["ty+iWP"]),
        onPress() {
            const obj = initiateAgeVerification(isManualAgeVerificationHidden[12]);
            obj.openUrl(constants.APPEALS_LINK);
            const trackAgeVerificationModalClicked = modalSessionId(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked;
            modalSessionId(isManualAgeVerificationHidden[9]);
            const result = trackAgeVerificationModalClicked(closure_0, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
          }
      };
      const push = items.push;
      intl2 = tmp(tmp2[11]).intl;
      intl3 = tmp(tmp2[11]).intl;
      push(obj2);
    }
    return items;
  }, items);
  let tmp10 = closure_12;
  if (loading) {
    let obj4 = { style: tmp.loadingIndicator, size: "small", color: WHITE };
    WHITE = undefined;
    const tmp11 = closure_10;
    const tmp12 = closure_5;
    const tmp2Result = tmp2(tmp3[13]);
    if (tmp2Result.isAndroid()) {
      WHITE = initiateAgeVerification(tmp3[7]).unsafe_rawColors.WHITE;
    }
    loading = tmp11(tmp12, obj4);
  }
  const obj5 = { children: items1 };
  items1 = [loading, ];
  const obj6 = { style: tmp.container, children: items3 };
  const obj7 = { style: tmp.headerContainer, children: items2 };
  items2 = [closure_10(tmp2(tmp3[14]).ShieldSpotIllustration, {}), , ];
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult };
  items2[1] = closure_10(tmp2(tmp3[15]).Text, obj8);
  const obj9 = { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: stringResult1 };
  items2[2] = closure_10(tmp2(tmp3[15]).Text, obj9);
  items3 = [tmp9(closure_7, obj7), , ];
  const obj10 = {
    hasIcons: false,
    children: memo.map((item, index) => {
      let description;
      let onPress;
      let title;
      ({ title, description, onPress } = item);
      return closure_1_10(modalSessionId(isManualAgeVerificationHidden[17]).TableRow, { arrow: true, label, subLabel, onPress }, index);
    })
  };
  const TableRowGroup = tmp2(tmp3[16]).TableRowGroup;
  items3[1] = closure_10(TableRowGroup, obj10);
  const obj11 = { variant: "text-xs/medium", color: "text-muted", style: items4, children: intl4.format(tmp2(tmp3[11]).t["L+FgkZ"], obj12) };
  items4 = [, ];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  const Text = tmp2(tmp3[15]).Text;
  intl4 = tmp2(tmp3[11]).intl;
  obj12 = {
    handleOnHelpUrlHook() {
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
      AgeVerificationAnalyticsUtils;
      const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  };
  items3[2] = closure_10(Text, obj11);
  items1[1] = closure_11(closure_6, obj6);
  return closure_11(tmp10, obj5);
};
