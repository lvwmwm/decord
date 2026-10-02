// Module ID: 8043
// Function ID: 8044
// Name: AgeVerificationRetryScreen
// Dependencies: [5, 19, 17, 1086, 7872, 21, 4837, 588, 558, 576, 7865, 5049, 8039, 1127, 7863, 1370, 7876, 4833, 5997, 5916, 2114, 2]

// Module 8043 (AgeVerificationRetryScreen)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2114 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7863 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7865 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7872 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, c1, dependencyMap;

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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let WHITE;
  let closure_2;
  let initiateAgeVerification;
  let items;
  let items1;
  let items3;
  let loading;
  let modalSessionId;
  let onClose;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp5;
  let tmp8;
  const tmp = modalSessionId;
  const tmp2 = dependencyMap;
  let obj = modalSessionId(576);
  const cResult = obj.c(46);
  ({ onClose, modalSessionId } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== onClose) {
    let obj2 = { onComplete: onClose, entryPoint: tmp(7865).AgeVerificationModalEntryPoint.RETRY_MODAL };
    cResult[0] = onClose;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = tmp(5049);
  const initiateAgeVerification1 = tmpResult.useInitiateAgeVerification(tmp5);
  ({ loading, initiateAgeVerification } = initiateAgeVerification1);
  const tmpResult3 = tmp(8039);
  const isManualAgeVerificationHidden = tmpResult3.useIsManualAgeVerificationHidden("age_verification_retry_modal");
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(tmp(1127).t.JSdbBe);
    cResult[2] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1127).intl;
    const stringResult1 = intl2.string(tmp(1127).t.JNK1ue);
    cResult[3] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1127).intl;
    const stringResult2 = intl3.string(tmp(1127).t.mFvt9M);
    cResult[4] = stringResult2;
    tmp12 = stringResult2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1127).intl;
    const stringResult3 = intl4.string(tmp(1127).t.ecdUKD);
    cResult[5] = stringResult3;
    tmp14 = stringResult3;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === initiateAgeVerification) {
    let tmp16;
    if (cResult[7] === modalSessionId) {
      tmp16 = cResult[8];
    }
    if (cResult[9] === isManualAgeVerificationHidden) {
      if (cResult[10] === modalSessionId) {
        let arr;
        if (cResult[11] === tmp16) {
          arr = cResult[12];
        }
        if (cResult[17] === loading) {
          let tmp23;
          let tmp29;
          let tmp33;
          let tmp32;
          if (cResult[18] === tmp4.loadingIndicator) {
            tmp23 = cResult[19];
          }
          const _Symbol2 = Symbol;
          const container = tmp4.container;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp31 = closure_10(tmp(7876).ShieldSpotIllustration, {});
            cResult[20] = tmp31;
            tmp29 = tmp31;
          } else {
            tmp29 = cResult[20];
          }
          if (cResult[21] !== tmp4.centerText) {
            let obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.centerText, children: tmp8 };
            const tmp35 = closure_10(tmp(4833).Text, obj3);
            let obj4 = { variant: "heading-md/medium", color: "text-strong", style: tmp4.centerText, children: tmp10 };
            const tmp36 = closure_10(tmp(4833).Text, obj4);
            cResult[21] = tmp4.centerText;
            cResult[22] = tmp35;
            cResult[23] = tmp36;
            tmp33 = tmp36;
            tmp32 = tmp35;
          } else {
            tmp32 = cResult[22];
            tmp33 = cResult[23];
          }
          if (cResult[24] === tmp4.headerContainer) {
            if (cResult[25] === tmp32) {
              let tmp37;
              let tmp41;
              if (cResult[26] === tmp33) {
                tmp37 = cResult[27];
              }
              if (cResult[28] !== arr) {
                const obj5 = {
                  hasIcons: false,
                  children: arr.map((item, index) => {
                                  let description;
                                  let onPress;
                                  let title;
                                  ({ title, description, onPress } = item);
                                  return closure_1_10(modalSessionId(closure_2[19]).TableRow, { arrow: true, label, subLabel, onPress }, index);
                                })
                };
                const TableRowGroup = tmp(5997).TableRowGroup;
                const tmp43 = closure_10(TableRowGroup, obj5);
                cResult[28] = arr;
                cResult[29] = tmp43;
                tmp41 = tmp43;
              } else {
                tmp41 = cResult[29];
              }
              if (cResult[30] === tmp4.centerText) {
                let tmp44;
                let tmp45;
                if (cResult[31] === tmp4.helpLink) {
                  tmp44 = cResult[32];
                }
                if (cResult[33] !== modalSessionId) {
                  const intl7 = tmp(1127).intl;
                  const obj6 = {
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
                  const formatResult = intl7.format(tmp(1127).t["L+FgkZ"], obj6);
                  cResult[33] = modalSessionId;
                  cResult[34] = formatResult;
                  tmp45 = formatResult;
                } else {
                  tmp45 = cResult[34];
                }
                if (cResult[35] === tmp44) {
                  let tmp47;
                  if (cResult[36] === tmp45) {
                    tmp47 = cResult[37];
                  }
                  if (cResult[38] === tmp4.container) {
                    if (cResult[39] === tmp37) {
                      if (cResult[40] === tmp41) {
                        let tmp50;
                        if (cResult[41] === tmp47) {
                          tmp50 = cResult[42];
                        }
                        if (cResult[43] === tmp50) {
                          let tmp54;
                          if (cResult[44] === tmp23) {
                            tmp54 = cResult[45];
                          }
                          return tmp54;
                        }
                        const obj7 = { children: items };
                        items = [tmp23, tmp50];
                        const tmp57 = closure_11(closure_12, obj7);
                        cResult[43] = tmp50;
                        cResult[44] = tmp23;
                        cResult[45] = tmp57;
                        tmp54 = tmp57;
                      }
                    }
                  }
                  const obj8 = { style: container, children: items1 };
                  items1 = [tmp37, tmp41, tmp47];
                  const tmp53 = closure_11(closure_6, obj8);
                  cResult[38] = tmp4.container;
                  cResult[39] = tmp37;
                  cResult[40] = tmp41;
                  cResult[41] = tmp47;
                  cResult[42] = tmp53;
                  tmp50 = tmp53;
                }
                const obj9 = { variant: "text-xs/medium", color: "text-muted", style: tmp44, children: tmp45 };
                const tmp49 = closure_10(tmp(4833).Text, obj9);
                cResult[35] = tmp44;
                cResult[36] = tmp45;
                cResult[37] = tmp49;
                tmp47 = tmp49;
              }
              const items2 = [, ];
              ({ centerText: arr4[0], helpLink: arr4[1] } = tmp4);
              cResult[30] = tmp4.centerText;
              cResult[31] = tmp4.helpLink;
              cResult[32] = items2;
              tmp44 = items2;
            }
          }
          const obj10 = { style: tmp4.headerContainer, children: items3 };
          items3 = [tmp29, tmp32, tmp33];
          const tmp40 = closure_11(closure_7, obj10);
          cResult[24] = tmp4.headerContainer;
          cResult[25] = tmp32;
          cResult[26] = tmp33;
          cResult[27] = tmp40;
          tmp37 = tmp40;
        }
        let tmp25Result = loading;
        if (tmp25Result) {
          const obj11 = { style: tmp4.loadingIndicator, size: "small", color: WHITE };
          WHITE = undefined;
          const tmp25 = closure_10;
          const tmp26 = closure_5;
          const tmpResult4 = tmp(1370);
          if (tmpResult4.isAndroid()) {
            WHITE = initiateAgeVerification(588).unsafe_rawColors.WHITE;
          }
          tmp25Result = tmp25(tmp26, obj11);
        }
        cResult[17] = loading;
        cResult[18] = tmp4.loadingIndicator;
        cResult[19] = tmp25Result;
        tmp23 = tmp25Result;
      }
    }
    const items4 = [tmp16];
    if (!isManualAgeVerificationHidden) {
      let tmp18;
      let tmp17;
      let tmp21;
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1127).intl;
        const stringResult4 = intl5.string(tmp(1127).t["LZO+Hd"]);
        const intl6 = tmp(1127).intl;
        const stringResult5 = intl6.string(tmp(1127).t["ty+iWP"]);
        cResult[13] = stringResult4;
        cResult[14] = stringResult5;
        tmp18 = stringResult5;
        tmp17 = stringResult4;
      } else {
        tmp17 = cResult[13];
        tmp18 = cResult[14];
      }
      if (cResult[15] !== modalSessionId) {
        const obj12 = {
          title: tmp17,
          description: tmp18,
          onPress() {
                  const obj = AgeVerificationActionCreatorsDefault;
                  obj.openUrl(SafetyHubLinks.APPEALS_LINK);
                  const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
                  AgeVerificationAnalyticsUtils;
                  const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
                }
        };
        cResult[15] = modalSessionId;
        cResult[16] = obj12;
        tmp21 = obj12;
      } else {
        tmp21 = cResult[16];
      }
      items4.push(tmp21);
    }
    cResult[9] = isManualAgeVerificationHidden;
    cResult[10] = modalSessionId;
    cResult[11] = tmp16;
    cResult[12] = items4;
    arr = items4;
  }
  const obj13 = {
    title: tmp12,
    description: tmp14,
    onPress: function() {
      return closure_2(...arguments);
    }
  };
  dependencyMap = _asyncToGenerator(async (arg0, value) => {
    let v3;
    if (modalSessionId === 2) {
      modalSessionId = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        modalSessionId = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            modalSessionId = 3;
            throw value;
          } else if (arg0 === 2) {
            modalSessionId = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const trackAgeVerificationModalClicked = modalSessionId(closure_1_2[10]).trackAgeVerificationModalClicked;
            const tmp6 = modalSessionId(closure_1_2[10]);
            const result = trackAgeVerificationModalClicked(modalSessionId, modalSessionId(closure_1_2[10]).AgeVerificationModalVersion.RETRY, modalSessionId(closure_1_2[10]).AgeVerificationModalCta.GET_STARTED);
            c1 = 1;
            modalSessionId = 1;
            const obj4 = { value: initiateAgeVerification(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          modalSessionId = 3;
          throw value;
        } else if (arg0 === 2) {
          modalSessionId = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          modalSessionId = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        modalSessionId = 3;
        throw tmp10;
      }
    }
  });
  cResult[6] = initiateAgeVerification;
  cResult[7] = modalSessionId;
  cResult[8] = obj13;
  tmp16 = obj13;
}) : ((modalSessionId) => {
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
  let obj = modalSessionId(isManualAgeVerificationHidden[11]);
  let obj2 = { onComplete: onClose, entryPoint: modalSessionId(isManualAgeVerificationHidden[10]).AgeVerificationModalEntryPoint.RETRY_MODAL };
  const initiateAgeVerification1 = obj.useInitiateAgeVerification(obj2);
  ({ loading, initiateAgeVerification } = initiateAgeVerification1);
  let obj3 = modalSessionId(isManualAgeVerificationHidden[12]);
  isManualAgeVerificationHidden = obj3.useIsManualAgeVerificationHidden("age_verification_retry_modal");
  let intl = modalSessionId(isManualAgeVerificationHidden[13]).intl;
  const stringResult = intl.string(modalSessionId(isManualAgeVerificationHidden[13]).t.JSdbBe);
  let intl2 = modalSessionId(isManualAgeVerificationHidden[13]).intl;
  const stringResult1 = intl2.string(modalSessionId(isManualAgeVerificationHidden[13]).t.JNK1ue);
  let intl3 = modalSessionId(isManualAgeVerificationHidden[13]).intl;
  const stringResult2 = intl3.string(modalSessionId(isManualAgeVerificationHidden[13]).t.mFvt9M);
  let items = [initiateAgeVerification, modalSessionId, isManualAgeVerificationHidden, stringResult2];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj = {
      title: stringResult2,
      description: intl.string(modalSessionId(isManualAgeVerificationHidden[13]).t.ecdUKD),
      onPress: function() {
        return closure_0(...arguments);
      }
    };
    const tmp2 = isManualAgeVerificationHidden;
    intl = modalSessionId(isManualAgeVerificationHidden[13]).intl;
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
          return { value: "IconComponent", done: null };
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
              const trackAgeVerificationModalClicked = v3(isManualAgeVerificationHidden[10]).trackAgeVerificationModalClicked;
              const tmp10 = v3(isManualAgeVerificationHidden[10]);
              const result = trackAgeVerificationModalClicked(c0, v3(isManualAgeVerificationHidden[10]).AgeVerificationModalVersion.RETRY, v3(isManualAgeVerificationHidden[10]).AgeVerificationModalCta.GET_STARTED);
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
            return { value: "IconComponent", done: null };
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
        title: intl2.string(tmp(tmp2[13]).t["LZO+Hd"]),
        description: intl3.string(tmp(tmp2[13]).t["ty+iWP"]),
        onPress() {
            const obj = initiateAgeVerification(isManualAgeVerificationHidden[14]);
            obj.openUrl(constants.APPEALS_LINK);
            const trackAgeVerificationModalClicked = modalSessionId(isManualAgeVerificationHidden[10]).trackAgeVerificationModalClicked;
            modalSessionId(isManualAgeVerificationHidden[10]);
            const result = trackAgeVerificationModalClicked(closure_0, modalSessionId(isManualAgeVerificationHidden[10]).AgeVerificationModalVersion.RETRY, modalSessionId(isManualAgeVerificationHidden[10]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
          }
      };
      const push = items.push;
      intl2 = tmp(tmp2[13]).intl;
      intl3 = tmp(tmp2[13]).intl;
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
    const tmp2Result = tmp2(tmp3[15]);
    if (tmp2Result.isAndroid()) {
      WHITE = initiateAgeVerification(tmp3[7]).unsafe_rawColors.WHITE;
    }
    loading = tmp11(tmp12, obj4);
  }
  const obj5 = { children: items1 };
  items1 = [loading, ];
  const obj6 = { style: tmp.container, children: items3 };
  const obj7 = { style: tmp.headerContainer, children: items2 };
  items2 = [closure_10(tmp2(tmp3[16]).ShieldSpotIllustration, {}), , ];
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult };
  items2[1] = closure_10(tmp2(tmp3[17]).Text, obj8);
  const obj9 = { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: stringResult1 };
  items2[2] = closure_10(tmp2(tmp3[17]).Text, obj9);
  items3 = [tmp9(closure_7, obj7), , ];
  const obj10 = {
    hasIcons: false,
    children: memo.map((item, index) => {
      let description;
      let onPress;
      let title;
      ({ title, description, onPress } = item);
      return closure_1_10(modalSessionId(isManualAgeVerificationHidden[19]).TableRow, { arrow: true, label, subLabel, onPress }, index);
    })
  };
  const TableRowGroup = tmp2(tmp3[18]).TableRowGroup;
  items3[1] = closure_10(TableRowGroup, obj10);
  const obj11 = { variant: "text-xs/medium", color: "text-muted", style: items4, children: intl4.format(tmp2(tmp3[13]).t["L+FgkZ"], obj12) };
  items4 = [, ];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  const Text = tmp2(tmp3[17]).Text;
  intl4 = tmp2(tmp3[13]).intl;
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
});
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default tmp5;
