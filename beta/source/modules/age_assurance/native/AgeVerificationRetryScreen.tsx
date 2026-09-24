// Module ID: 8894
// Function ID: 8895
// Name: AgeVerificationRetryScreen
// Dependencies: [5, 19, 17, 1078, 8728, 21, 4790, 580, 558, 568, 8721, 5002, 8890, 1119, 8719, 1368, 5939, 4786, 5935, 5854, 2112, 2]

// Module 8894 (AgeVerificationRetryScreen)
import nativeDefault from "native" /* 580 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8719 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8721 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const HelpdeskArticles = fn(1078).HelpdeskArticles;
const SafetyHubLinks = fn(8728).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { loadingIndicator: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }, container: { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 }, headerContainer: null, centerText: null, helpLink: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 };
obj2.headerContainer = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.centerText = { textAlign: "center" };
let obj4 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.helpLink = { marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = modalSessionId(568).c(46);
  ({ onClose, modalSessionId } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== onClose) {
    let obj2 = { onComplete: onClose, entryPoint: tmp(8721).AgeVerificationModalEntryPoint.RETRY_MODAL };
    cResult[0] = onClose;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  let obj = modalSessionId(568);
  const initiateAgeVerification1 = modalSessionId(5002).useInitiateAgeVerification(tmp5);
  ({ loading, initiateAgeVerification } = initiateAgeVerification1);
  const tmpResult = modalSessionId(5002);
  const isManualAgeVerificationHidden = modalSessionId(8890).useIsManualAgeVerificationHidden("age_verification_retry_modal");
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.JSdbBe);
    cResult[2] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.JNK1ue);
    cResult[3] = stringResult1;
    let tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1119).intl;
    const stringResult2 = intl3.string(tmp(1119).t.mFvt9M);
    cResult[4] = stringResult2;
    let tmp12 = stringResult2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1119).intl;
    const stringResult3 = intl4.string(tmp(1119).t.ecdUKD);
    cResult[5] = stringResult3;
    let tmp14 = stringResult3;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === initiateAgeVerification) {
    if (cResult[7] === modalSessionId) {
      let tmp16 = cResult[8];
    }
    if (cResult[9] === isManualAgeVerificationHidden) {
      if (cResult[10] === modalSessionId) {
        if (cResult[11] === tmp16) {
          let arr = cResult[12];
        }
        if (cResult[17] === loading) {
          if (cResult[18] === tmp4.loadingIndicator) {
            let tmp22 = cResult[19];
          }
          const _Symbol2 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp30 = closure_10(tmp(5939).ShieldSpotIllustration, {});
            cResult[20] = tmp30;
            let tmp28 = tmp30;
          } else {
            tmp28 = cResult[20];
          }
          if (cResult[21] !== tmp4.centerText) {
            let obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.centerText, children: tmp8 };
            const tmp34 = closure_10(tmp(4786).Text, obj3);
            let obj4 = { variant: "heading-md/medium", color: "text-strong", style: tmp4.centerText, children: tmp10 };
            const tmp35 = closure_10(tmp(4786).Text, obj4);
            cResult[21] = tmp4.centerText;
            cResult[22] = tmp34;
            cResult[23] = tmp35;
            let tmp32 = tmp35;
            let tmp31 = tmp34;
          } else {
            tmp31 = cResult[22];
            tmp32 = cResult[23];
          }
          if (cResult[24] === tmp4.headerContainer) {
            if (cResult[25] === tmp31) {
              if (cResult[26] === tmp32) {
                let tmp36 = cResult[27];
              }
              if (cResult[28] !== arr) {
                let obj5 = {
                  hasIcons: false,
                  children: arr.map((item, index) => {
                                  ({ title, description, onPress } = item);
                                  return closure_1_10(modalSessionId(closure_2[19]).TableRow, { arrow: true, label, subLabel, onPress }, index);
                                })
                };
                const tmp42 = closure_10(tmp(5935).TableRowGroup, obj5);
                cResult[28] = arr;
                cResult[29] = tmp42;
                let tmp40 = tmp42;
              } else {
                tmp40 = cResult[29];
              }
              if (cResult[30] === tmp4.centerText) {
                if (cResult[31] === tmp4.helpLink) {
                  let tmp43 = cResult[32];
                }
                if (cResult[33] !== modalSessionId) {
                  const intl7 = tmp(1119).intl;
                  const obj6 = {
                    handleOnHelpUrlHook() {
                                      const obj = AgeVerificationActionCreatorsDefault;
                                      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
                                      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
                                    }
                  };
                  const formatResult = intl7.format(tmp(1119).t["L+FgkZ"], obj6);
                  cResult[33] = modalSessionId;
                  cResult[34] = formatResult;
                  let tmp44 = formatResult;
                } else {
                  tmp44 = cResult[34];
                }
                if (cResult[35] === tmp43) {
                  if (cResult[36] === tmp44) {
                    let tmp46 = cResult[37];
                  }
                  if (cResult[38] === tmp4.container) {
                    if (cResult[39] === tmp36) {
                      if (cResult[40] === tmp40) {
                        if (cResult[41] === tmp46) {
                          let tmp49 = cResult[42];
                        }
                        if (cResult[43] === tmp49) {
                          if (cResult[44] === tmp22) {
                            let tmp53 = cResult[45];
                          }
                          return tmp53;
                        }
                        const obj7 = { children: null };
                        const items = [tmp22, tmp49];
                        obj7.children = items;
                        const tmp56 = closure_11(closure_12, obj7);
                        cResult[43] = tmp49;
                        cResult[44] = tmp22;
                        cResult[45] = tmp56;
                        tmp53 = tmp56;
                      }
                    }
                  }
                  const obj8 = { style: tmp4.container, children: null };
                  const items1 = [tmp36, tmp40, tmp46];
                  obj8.children = items1;
                  const tmp52 = closure_11(closure_6, obj8);
                  cResult[38] = tmp4.container;
                  cResult[39] = tmp36;
                  cResult[40] = tmp40;
                  cResult[41] = tmp46;
                  cResult[42] = tmp52;
                  tmp49 = tmp52;
                }
                const obj9 = { variant: "text-xs/medium", color: "text-muted", style: tmp43, children: tmp44 };
                const tmp48 = closure_10(tmp(4786).Text, obj9);
                cResult[35] = tmp43;
                cResult[36] = tmp44;
                cResult[37] = tmp48;
                tmp46 = tmp48;
              }
              const items2 = [, ];
              ({ centerText: arr4[0], helpLink: arr4[1] } = tmp4);
              cResult[30] = tmp4.centerText;
              cResult[31] = tmp4.helpLink;
              cResult[32] = items2;
              tmp43 = items2;
            }
          }
          const obj10 = { style: tmp4.headerContainer, children: null };
          const items3 = [tmp28, tmp31, tmp32];
          obj10.children = items3;
          const tmp39 = closure_11(closure_7, obj10);
          cResult[24] = tmp4.headerContainer;
          cResult[25] = tmp31;
          cResult[26] = tmp32;
          cResult[27] = tmp39;
          tmp36 = tmp39;
        }
        let tmp24Result = loading;
        if (loading) {
          const obj11 = { style: tmp4.loadingIndicator, size: "small", color: null };
          let WHITE;
          if (tmpResult4.isAndroid()) {
            WHITE = initiateAgeVerification(580).unsafe_rawColors.WHITE;
          }
          obj11.color = WHITE;
          tmp24Result = closure_10(closure_5, obj11);
          tmpResult4 = tmp(1368);
        }
        cResult[17] = loading;
        cResult[18] = tmp4.loadingIndicator;
        cResult[19] = tmp24Result;
        tmp22 = tmp24Result;
      }
    }
    const items4 = [tmp16];
    if (isManualAgeVerificationHidden) {
      cResult[9] = isManualAgeVerificationHidden;
      cResult[10] = modalSessionId;
      cResult[11] = tmp16;
      cResult[12] = items4;
      arr = items4;
    } else {
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1119).intl;
        const stringResult4 = intl5.string(tmp(1119).t["LZO+Hd"]);
        const intl6 = tmp(1119).intl;
        const stringResult5 = intl6.string(tmp(1119).t["ty+iWP"]);
        cResult[13] = stringResult4;
        cResult[14] = stringResult5;
        let onPress = stringResult5;
        let tmp17 = stringResult4;
      } else {
        tmp17 = cResult[13];
        onPress = cResult[14];
      }
      if (cResult[15] !== modalSessionId) {
        const obj12 = { title: tmp17, description: onPress, onPress: null };
        onPress = function onPress() {
          AgeVerificationActionCreatorsDefault.openUrl(SafetyHubLinks.APPEALS_LINK);
          const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
        };
        obj12.onPress = onPress;
        cResult[15] = modalSessionId;
        cResult[16] = obj12;
        let tmp20 = obj12;
      } else {
        tmp20 = cResult[16];
      }
      items4.push(tmp20);
    }
  }
  const obj13 = { title: tmp12, description: tmp14, onPress: null };
  dependencyMap = asyncGeneratorStep(async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const result = v3(8721).trackAgeVerificationModalClicked(modalSessionId, v3(8721).AgeVerificationModalVersion.RETRY, v3(8721).AgeVerificationModalCta.GET_STARTED);
            c1 = 1;
            v3 = 1;
            const obj5 = { value: initiateAgeVerification(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        v3 = tmp;
        throw tmp10;
      }
    }
  });
  obj13.onPress = function() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[6] = initiateAgeVerification;
  cResult[7] = modalSessionId;
  cResult[8] = obj13;
  tmp16 = obj13;
}) : ((modalSessionId) => {
  modalSessionId = modalSessionId.modalSessionId;
  initiateAgeVerification = undefined;
  let isManualAgeVerificationHidden;
  const tmp = closure_13();
  let obj = modalSessionId(isManualAgeVerificationHidden[11]);
  const initiateAgeVerification1 = obj.useInitiateAgeVerification({ onComplete: modalSessionId.onClose, entryPoint: modalSessionId(isManualAgeVerificationHidden[10]).AgeVerificationModalEntryPoint.RETRY_MODAL });
  ({ loading, initiateAgeVerification } = initiateAgeVerification1);
  let obj2 = { onComplete: modalSessionId.onClose, entryPoint: modalSessionId(isManualAgeVerificationHidden[10]).AgeVerificationModalEntryPoint.RETRY_MODAL };
  isManualAgeVerificationHidden = modalSessionId(isManualAgeVerificationHidden[12]).useIsManualAgeVerificationHidden("age_verification_retry_modal");
  let intl = modalSessionId(isManualAgeVerificationHidden[13]).intl;
  let obj3 = modalSessionId(isManualAgeVerificationHidden[12]);
  let intl2 = modalSessionId(isManualAgeVerificationHidden[13]).intl;
  const stringResult = intl.string(modalSessionId(isManualAgeVerificationHidden[13]).t.JSdbBe);
  let intl3 = modalSessionId(isManualAgeVerificationHidden[13]).intl;
  const stringResult2 = intl3.string(modalSessionId(isManualAgeVerificationHidden[13]).t.mFvt9M);
  let items = [initiateAgeVerification, modalSessionId, isManualAgeVerificationHidden, stringResult2];
  const memo = noop.useMemo(() => {
    let obj = { title: stringResult2, description: null, onPress: null };
    const intl = modalSessionId(isManualAgeVerificationHidden[13]).intl;
    obj.description = intl.string(modalSessionId(isManualAgeVerificationHidden[13]).t.ecdUKD);
    closure_0 = stringResult2(function*(arg0, value) {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const result = v3(8721).trackAgeVerificationModalClicked(c0, v3(8721).AgeVerificationModalVersion.RETRY, v3(8721).AgeVerificationModalCta.GET_STARTED);
              v1 = 1;
              c0 = 1;
              const obj4 = { value: v1(), done: false };
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
        } catch (tmp5) {
          c0 = tmp;
          throw tmp5;
        }
      }
    });
    obj.onPress = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const items = [obj];
    if (!isManualAgeVerificationHidden) {
      let obj2 = { title: null, description: null, onPress: null };
      const intl2 = tmp(tmp2[13]).intl;
      obj2.title = intl2.string(tmp(tmp2[13]).t["LZO+Hd"]);
      const intl3 = tmp(tmp2[13]).intl;
      obj2.description = intl3.string(tmp(tmp2[13]).t["ty+iWP"]);
      obj2.onPress = function onPress() {
        initiateAgeVerification(isManualAgeVerificationHidden[14]).openUrl(constants.APPEALS_LINK);
        const obj = initiateAgeVerification(isManualAgeVerificationHidden[14]);
        const result = modalSessionId(isManualAgeVerificationHidden[10]).trackAgeVerificationModalClicked(closure_0, modalSessionId(isManualAgeVerificationHidden[10]).AgeVerificationModalVersion.RETRY, modalSessionId(isManualAgeVerificationHidden[10]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
      };
      items.push(obj2);
    }
    return items;
  }, items);
  if (loading) {
    let obj4 = { style: tmp.loadingIndicator, size: "small", color: null };
    let WHITE;
    if (tmp2Result.isAndroid()) {
      WHITE = initiateAgeVerification(tmp3[7]).unsafe_rawColors.WHITE;
    }
    obj4.color = WHITE;
    loading = closure_10(closure_5, obj4);
    tmp2Result = tmp2(tmp3[15]);
  }
  const obj5 = { children: null };
  const items1 = [loading, ];
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.headerContainer, children: null };
  const items2 = [closure_10(modalSessionId(isManualAgeVerificationHidden[16]).ShieldSpotIllustration, {}), closure_10(modalSessionId(isManualAgeVerificationHidden[17]).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult }), ];
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult };
  const stringResult1 = intl2.string(modalSessionId(isManualAgeVerificationHidden[13]).t.JNK1ue);
  const tmp10 = closure_12;
  items2[2] = closure_10(modalSessionId(isManualAgeVerificationHidden[17]).Text, { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: intl2.string(modalSessionId(isManualAgeVerificationHidden[13]).t.JNK1ue) });
  obj7.children = items2;
  const items3 = [closure_11(closure_7, obj7), , ];
  const obj9 = { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: intl2.string(modalSessionId(isManualAgeVerificationHidden[13]).t.JNK1ue) };
  items3[1] = closure_10(modalSessionId(isManualAgeVerificationHidden[18]).TableRowGroup, {
    hasIcons: false,
    children: memo.map((item, index) => {
      ({ title, description, onPress } = item);
      return closure_1_10(modalSessionId(isManualAgeVerificationHidden[19]).TableRow, { arrow: true, label, subLabel, onPress }, index);
    })
  });
  const obj11 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
  const items4 = [, ];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  obj11.style = items4;
  const intl4 = tmp2(tmp3[13]).intl;
  obj11.children = intl4.format(modalSessionId(isManualAgeVerificationHidden[13]).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  });
  items3[2] = closure_10(modalSessionId(isManualAgeVerificationHidden[17]).Text, obj11);
  obj6.children = items3;
  items1[1] = closure_11(closure_6, obj6);
  obj5.children = items1;
  return closure_11(tmp10, obj5);
});
