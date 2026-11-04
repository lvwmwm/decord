// Module ID: 8163
// Function ID: 8164
// Name: AgeVerificationRetryScreen
// Dependencies: [5, 19, 17, 1072, 21, 5014, 575, 8019, 6729, 1113, 1375, 7974, 5624, 7060, 6975, 7955, 2061, 2]
// Exports: default

// Module 8163 (AgeVerificationRetryScreen)
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

let c0, c1;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { loadingIndicator: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }, container: obj2, headerContainer: obj3, centerText: { textAlign: "center" }, helpLink: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
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
  let obj11;
  modalSessionId = modalSessionId.modalSessionId;
  initiateAgeVerification = undefined;
  let stringResult2;
  const onClose = modalSessionId.onClose;
  const tmp = closure_12();
  const tmp2 = modalSessionId;
  const tmp3 = stringResult2;
  let obj = modalSessionId(stringResult2[7]);
  let obj2 = { onComplete: onClose, entryPoint: modalSessionId(stringResult2[8]).AgeVerificationModalEntryPoint.RETRY_MODAL };
  const initiateAgeVerification1 = obj.useInitiateAgeVerification(obj2);
  ({ loading, initiateAgeVerification } = initiateAgeVerification1);
  let intl = modalSessionId(stringResult2[9]).intl;
  const stringResult = intl.string(modalSessionId(stringResult2[9]).t.JSdbBe);
  const intl2 = modalSessionId(stringResult2[9]).intl;
  const stringResult1 = intl2.string(modalSessionId(stringResult2[9]).t.JNK1ue);
  const intl3 = modalSessionId(stringResult2[9]).intl;
  stringResult2 = intl3.string(modalSessionId(stringResult2[9]).t.mFvt9M);
  let items = [initiateAgeVerification, modalSessionId, stringResult2];
  const memo = react.useMemo(() => {
    let intl;
    let obj = {
      title: stringResult2,
      description: intl.string(modalSessionId(stringResult2[9]).t.ecdUKD),
      onPress() {
        return closure_0(...arguments);
      }
    };
    intl = modalSessionId(stringResult2[9]).intl;
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const trackAgeVerificationModalClicked = v3(stringResult2[8]).trackAgeVerificationModalClicked;
              const tmp10 = v3(stringResult2[8]);
              const result = trackAgeVerificationModalClicked(c0, v3(stringResult2[8]).AgeVerificationModalVersion.RETRY, v3(stringResult2[8]).AgeVerificationModalCta.GET_STARTED);
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp4) {
          c0 = 3;
          throw tmp4;
        }
      }
    });
    const items = [obj];
    return items;
  }, items);
  const tmp9 = closure_11;
  if (loading) {
    let obj3 = { style: tmp.loadingIndicator, size: "small", color: WHITE };
    let tmp10 = closure_9;
    WHITE = undefined;
    const tmp11 = closure_5;
    const tmp2Result = tmp2(tmp3[10]);
    if (tmp2Result.isAndroid()) {
      WHITE = initiateAgeVerification(tmp3[6]).unsafe_rawColors.WHITE;
    }
    loading = tmp10(tmp11, obj3);
  }
  let obj4 = { children: items1 };
  items1 = [loading, ];
  const obj5 = { style: tmp.container, children: items3 };
  const obj6 = { style: tmp.headerContainer, children: items2 };
  items2 = [closure_9(tmp2(tmp3[11]).ShieldSpotIllustration, {}), , ];
  const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult };
  items2[1] = closure_9(tmp2(tmp3[12]).Text, obj7);
  const obj8 = { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: stringResult1 };
  items2[2] = closure_9(tmp2(tmp3[12]).Text, obj8);
  items3 = [tmp8(closure_7, obj6), , ];
  const obj9 = {
    hasIcons: false,
    children: memo.map((item, index) => {
      let description;
      let onPress;
      let title;
      ({ title, description, onPress } = item);
      return closure_1_9(modalSessionId(stringResult2[14]).TableRow, { arrow: true, label, subLabel, onPress }, index);
    })
  };
  const TableRowGroup = tmp2(tmp3[13]).TableRowGroup;
  items3[1] = closure_9(TableRowGroup, obj9);
  const obj10 = { variant: "text-xs/medium", color: "text-muted", style: items4, children: intl4.format(tmp2(tmp3[9]).t["L+FgkZ"], obj11) };
  items4 = [, ];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  const Text = tmp2(tmp3[12]).Text;
  intl4 = tmp2(tmp3[9]).intl;
  obj11 = {
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
  items3[2] = closure_9(Text, obj10);
  items1[1] = closure_10(closure_6, obj5);
  return closure_10(tmp9, obj4);
};
