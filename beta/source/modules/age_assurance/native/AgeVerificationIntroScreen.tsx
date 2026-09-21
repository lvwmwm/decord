// Module ID: 8857
// Function ID: 8858
// Name: AgeVerificationIntroScreen
// Dependencies: [5, 19, 17, 8688, 1078, 8696, 21, 4758, 580, 558, 568, 1616, 4970, 8858, 5907, 4754, 8859, 5903, 1119, 8687, 2112, 8689, 8860, 5188, 2]

// Module 8857 (AgeVerificationIntroScreen)
import nativeDefault from "native" /* 580 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8687 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8689 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(8688).getAgeVerificationGetStartedSteps;
const HelpdeskArticles = fn(1078).HelpdeskArticles;
const SafetyHubLinks = fn(8696).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { getStartedContainer: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 }, getStartedHeaderContainer: null, ageGroupLearnMoreContainer: null, getStartedHeaderText: null, getStartedRequestTextContainer: null, getStartedFooterContainer: null, getStartedRequestText: null, getStartedFooterButtonsContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
obj2.getStartedHeaderContainer = { alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.ageGroupLearnMoreContainer = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedHeaderText = { textAlign: "center" };
obj2.getStartedRequestTextContainer = { alignItems: "center" };
let obj5 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.getStartedFooterContainer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj2.getStartedRequestText = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
let obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.getStartedFooterButtonsContainer = { gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((modalSessionId) => {
  const cResult = modalSessionId(568).c(63);
  modalSessionId = modalSessionId.modalSessionId;
  ({ onClose, entryPoint } = modalSessionId);
  const tmp4 = closure_12();
  const bottom = initiateAgeVerification(1616)().bottom;
  if (cResult[0] === entryPoint) {
    if (cResult[1] === onClose) {
      let tmp5 = cResult[2];
    }
    const initiateAgeVerification1 = tmp(4970).useInitiateAgeVerification(tmp5);
    ({ loading, initiateAgeVerification } = initiateAgeVerification1);
    let tmpResult = tmp(4970);
    const isManualAgeVerificationHidden = tmp(8858).useIsManualAgeVerificationHidden("age_verification_get_started_modal");
    const _Symbol = Symbol;
    ({ getStartedContainer, getStartedHeaderContainer } = tmp4);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = closure_9(tmp(5907).ShieldSpotIllustration, {});
      cResult[3] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== entryPoint) {
      const ageVerificationGetStartedTitle = tmp(4970).getAgeVerificationGetStartedTitle(entryPoint);
      cResult[4] = entryPoint;
      cResult[5] = ageVerificationGetStartedTitle;
      let tmp12 = ageVerificationGetStartedTitle;
      const tmpResult5 = tmp(4970);
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === tmp4.getStartedHeaderText) {
      if (cResult[7] === tmp12) {
        let tmp14 = cResult[8];
      }
      if (cResult[9] !== entryPoint) {
        const ageVerificationGetStartedSubtitle = tmp(4970).getAgeVerificationGetStartedSubtitle(entryPoint);
        cResult[9] = entryPoint;
        cResult[10] = ageVerificationGetStartedSubtitle;
        let tmp17 = ageVerificationGetStartedSubtitle;
        const tmpResult6 = tmp(4970);
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp4.getStartedHeaderText) {
        if (cResult[12] === tmp17) {
          let tmp19 = cResult[13];
        }
        if (cResult[14] === tmp4.getStartedHeaderContainer) {
          if (cResult[15] === tmp19) {
            if (cResult[16] === tmp14) {
              let tmp22 = cResult[17];
            }
            if (cResult[18] !== modalSessionId) {
              const _Symbol2 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                class B {
                  constructor(arg0, arg1) {
                    description = modalSessionId.description;
                    tmp = closure_1_9;
                    tmp2 = closure_1_2;
                    obj = { index: arg1 + 1, tip: null, description: null };
                    tmp3 = initiateAgeVerification(closure_1_2[16]);
                    tmp4 = closure_0;
                    obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                    tmpResult = null;
                    if (null != description) {
                      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      obj1.children = description;
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                    }
                    obj.description = tmpResult;
                    return tmp(tmp3, obj, arg1);
                  }
                }
                cResult[20] = B;
                const tmp27 = B;
              } else {
                class B {
                  constructor(arg0, arg1) {
                    description = modalSessionId.description;
                    tmp = closure_1_9;
                    tmp2 = closure_1_2;
                    obj = { index: arg1 + 1, tip: null, description: null };
                    tmp3 = initiateAgeVerification(closure_1_2[16]);
                    tmp4 = closure_0;
                    obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                    tmpResult = null;
                    if (null != description) {
                      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      obj1.children = description;
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                    }
                    obj.description = tmpResult;
                    return tmp(tmp3, obj, arg1);
                  }
                }
              }
              const mapped = closure_6(modalSessionId).map(tmp27);
              cResult[18] = modalSessionId;
              cResult[19] = mapped;
              const arr2 = closure_6(modalSessionId);
            } else {
              class B {
                constructor(arg0, arg1) {
                  description = modalSessionId.description;
                  tmp = closure_1_9;
                  tmp2 = closure_1_2;
                  obj = { index: arg1 + 1, tip: null, description: null };
                  tmp3 = initiateAgeVerification(closure_1_2[16]);
                  tmp4 = closure_0;
                  obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                  tmpResult = null;
                  if (null != description) {
                    obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                    obj1.children = description;
                    tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                  }
                  obj.description = tmpResult;
                  return tmp(tmp3, obj, arg1);
                }
              }
              if (cResult[21] !== tmp26) {
                class B {
                  constructor(arg0, arg1) {
                    description = modalSessionId.description;
                    tmp = closure_1_9;
                    tmp2 = closure_1_2;
                    obj = { index: arg1 + 1, tip: null, description: null };
                    tmp3 = initiateAgeVerification(closure_1_2[16]);
                    tmp4 = closure_0;
                    obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                    tmpResult = null;
                    if (null != description) {
                      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      obj1.children = description;
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                    }
                    obj.description = tmpResult;
                    return tmp(tmp3, obj, arg1);
                  }
                }
                let obj2 = { hasIcons: true, children: tmp26 };
                const tmp32 = closure_9(tmp(5903).TableRowGroup, obj2);
                cResult[21] = tmp26;
                cResult[22] = tmp32;
              } else {
                class B {
                  constructor(arg0, arg1) {
                    description = modalSessionId.description;
                    tmp = closure_1_9;
                    tmp2 = closure_1_2;
                    obj = { index: arg1 + 1, tip: null, description: null };
                    tmp3 = initiateAgeVerification(closure_1_2[16]);
                    tmp4 = closure_0;
                    obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                    tmpResult = null;
                    if (null != description) {
                      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      obj1.children = description;
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                    }
                    obj.description = tmpResult;
                    return tmp(tmp3, obj, arg1);
                  }
                }
              }
              if (cResult[23] !== modalSessionId) {
                class B {
                  constructor(arg0, arg1) {
                    description = modalSessionId.description;
                    tmp = closure_1_9;
                    tmp2 = closure_1_2;
                    obj = { index: arg1 + 1, tip: null, description: null };
                    tmp3 = initiateAgeVerification(closure_1_2[16]);
                    tmp4 = closure_0;
                    obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                    tmpResult = null;
                    if (null != description) {
                      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      obj1.children = description;
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                    }
                    obj.description = tmpResult;
                    return tmp(tmp3, obj, arg1);
                  }
                }
                let obj3 = {
                  handleOnHelpUrlHook() {
                                  const obj = AgeVerificationActionCreatorsDefault;
                                  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
                                  const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
                                }
                };
                const formatResult = obj11.format(tmp(1119).t["L+FgkZ"], obj3);
                cResult[23] = modalSessionId;
                cResult[24] = formatResult;
              } else {
                class B {
                  constructor(arg0, arg1) {
                    description = modalSessionId.description;
                    tmp = closure_1_9;
                    tmp2 = closure_1_2;
                    obj = { index: arg1 + 1, tip: null, description: null };
                    tmp3 = initiateAgeVerification(closure_1_2[16]);
                    tmp4 = closure_0;
                    obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                    tmpResult = null;
                    if (null != description) {
                      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      obj1.children = description;
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                    }
                    obj.description = tmpResult;
                    return tmp(tmp3, obj, arg1);
                  }
                }
              }
              if (cResult[25] !== tmp33) {
                class B {
                  constructor(arg0, arg1) {
                    description = modalSessionId.description;
                    tmp = closure_1_9;
                    tmp2 = closure_1_2;
                    obj = { index: arg1 + 1, tip: null, description: null };
                    tmp3 = initiateAgeVerification(closure_1_2[16]);
                    tmp4 = closure_0;
                    obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                    tmpResult = null;
                    if (null != description) {
                      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      obj1.children = description;
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                    }
                    obj.description = tmpResult;
                    return tmp(tmp3, obj, arg1);
                  }
                }
                let obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp33 };
                const tmp36 = closure_9(tmp(4754).Text, obj4);
                cResult[25] = tmp33;
                cResult[26] = tmp36;
              } else {
                class B {
                  constructor(arg0, arg1) {
                    description = modalSessionId.description;
                    tmp = closure_1_9;
                    tmp2 = closure_1_2;
                    obj = { index: arg1 + 1, tip: null, description: null };
                    tmp3 = initiateAgeVerification(closure_1_2[16]);
                    tmp4 = closure_0;
                    obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                    tmpResult = null;
                    if (null != description) {
                      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      obj1.children = description;
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                    }
                    obj.description = tmpResult;
                    return tmp(tmp3, obj, arg1);
                  }
                }
              }
              if (cResult[27] === tmp4.ageGroupLearnMoreContainer) {
                class B {
                  constructor(arg0, arg1) {
                    description = modalSessionId.description;
                    tmp = closure_1_9;
                    tmp2 = closure_1_2;
                    obj = { index: arg1 + 1, tip: null, description: null };
                    tmp3 = initiateAgeVerification(closure_1_2[16]);
                    tmp4 = closure_0;
                    obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                    tmpResult = null;
                    if (null != description) {
                      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      obj1.children = description;
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                    }
                    obj.description = tmpResult;
                    return tmp(tmp3, obj, arg1);
                  }
                }
                if (cResult[30] === tmp4.getStartedContainer) {
                  class B {
                    constructor(arg0, arg1) {
                      description = modalSessionId.description;
                      tmp = closure_1_9;
                      tmp2 = closure_1_2;
                      obj = { index: arg1 + 1, tip: null, description: null };
                      tmp3 = initiateAgeVerification(closure_1_2[16]);
                      tmp4 = closure_0;
                      obj.tip = closure_1_9(closure_0(closure_1_2[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: modalSessionId.title });
                      tmpResult = null;
                      if (null != description) {
                        obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                        obj1.children = description;
                        tmpResult = tmp(tmp4(tmp2[15]).Text, obj1);
                      }
                      obj.description = tmpResult;
                      return tmp(tmp3, obj, arg1);
                    }
                  }
                }
                const obj5 = { children: null };
                const obj6 = { style: getStartedContainer, children: null };
                const items = [tmp22, tmp31, tmp37];
                obj6.children = items;
                obj5.children = closure_10(closure_5, obj6);
                const tmp46 = closure_9(closure_4, obj5);
                cResult[30] = tmp4.getStartedContainer;
                cResult[31] = tmp22;
                cResult[32] = tmp31;
                cResult[33] = tmp37;
                cResult[34] = tmp46;
              }
              const obj7 = { style: tmp4.ageGroupLearnMoreContainer, children: tmp35 };
              const tmp40 = closure_9(closure_5, obj7);
              cResult[27] = tmp4.ageGroupLearnMoreContainer;
              cResult[28] = tmp35;
              cResult[29] = tmp40;
            }
          }
        }
        const obj8 = { style: getStartedHeaderContainer, children: null };
        const items1 = [tmp9, tmp14, tmp19];
        obj8.children = items1;
        const tmp25 = closure_10(closure_5, obj8);
        cResult[14] = tmp4.getStartedHeaderContainer;
        cResult[15] = tmp19;
        cResult[16] = tmp14;
        cResult[17] = tmp25;
        tmp22 = tmp25;
      }
      const obj9 = { variant: "heading-md/medium", color: "text-default", style: tmp4.getStartedHeaderText, children: tmp17 };
      const tmp21 = closure_9(tmp(4754).Text, obj9);
      cResult[11] = tmp4.getStartedHeaderText;
      cResult[12] = tmp17;
      cResult[13] = tmp21;
      tmp19 = tmp21;
    }
    const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.getStartedHeaderText, children: tmp12 };
    const tmp16 = closure_9(tmp(4754).Text, obj10);
    cResult[6] = tmp4.getStartedHeaderText;
    cResult[7] = tmp12;
    cResult[8] = tmp16;
    tmp14 = tmp16;
    const tmpResult4 = tmp(8858);
  }
  const obj12 = { onComplete: onClose, entryPoint };
  cResult[0] = entryPoint;
  cResult[1] = onClose;
  cResult[2] = obj12;
  tmp5 = obj12;
}) : ((onComplete) => {
  const modalSessionId = onComplete.modalSessionId;
  const entryPoint = onComplete.entryPoint;
  importDefault = undefined;
  const tmp = closure_12();
  const initiateAgeVerification = modalSessionId(4970).useInitiateAgeVerification({ onComplete: onComplete.onClose, entryPoint });
  ({ initiateAgeVerification: c1, loading } = initiateAgeVerification);
  let obj = modalSessionId(4970);
  const isManualAgeVerificationHidden = modalSessionId(8858).useIsManualAgeVerificationHidden("age_verification_get_started_modal");
  let obj3 = { children: null };
  let obj4 = { style: tmp.getStartedContainer, children: null };
  let obj5 = { style: tmp.getStartedHeaderContainer, children: null };
  const items = [closure_9(modalSessionId(5907).ShieldSpotIllustration, {}), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText, children: null };
  let obj2 = modalSessionId(8858);
  const tmp8 = closure_11;
  obj6.children = modalSessionId(4970).getAgeVerificationGetStartedTitle(entryPoint);
  items[1] = closure_9(modalSessionId(4754).Text, obj6);
  const obj8 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: null };
  const obj7 = modalSessionId(4970);
  obj8.children = modalSessionId(4970).getAgeVerificationGetStartedSubtitle(entryPoint);
  items[2] = closure_9(modalSessionId(4754).Text, obj8);
  obj5.children = items;
  const items1 = [closure_10(closure_5, obj5), , ];
  const obj10 = { hasIcons: true, children: null };
  const obj9 = modalSessionId(4970);
  obj10.children = closure_6(modalSessionId).map((children, index) => {
    const description = children.description;
    const obj = { index: index + 1, tip: closure_1_9(modalSessionId(4754).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.title }), description: null };
    let tmpResult = null;
    if (null != description) {
      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
      tmpResult = tmp(modalSessionId(4754).Text, obj2);
    }
    obj.description = tmpResult;
    return closure_1_9(_undefined(8859), obj, index);
  });
  items1[1] = closure_9(modalSessionId(5903).TableRowGroup, obj10);
  const obj11 = { style: tmp.ageGroupLearnMoreContainer, children: null };
  const obj12 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl = modalSessionId(1119).intl;
  obj12.children = intl.format(modalSessionId(1119).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  });
  obj11.children = closure_9(modalSessionId(4754).Text, obj12);
  items1[2] = closure_9(closure_5, obj11);
  obj4.children = items1;
  obj3.children = closure_10(closure_5, obj4);
  const items2 = [closure_9(closure_4, obj3), ];
  const obj14 = { style: null, children: null };
  const items3 = [tmp.getStartedFooterContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj14.style = items3;
  let tmp9Result = !isManualAgeVerificationHidden;
  if (!isManualAgeVerificationHidden) {
    const obj15 = { style: tmp.getStartedRequestTextContainer, children: null };
    const obj16 = { variant: "text-xs/medium", color: "text-muted", style: tmp.getStartedRequestText, children: null };
    const intl2 = tmp4(1119).intl;
    const obj17 = {
      handleOnRequestHook() {
          AgeVerificationActionCreatorsDefault.openUrl(SafetyHubLinks.APPEALS_LINK);
          const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
        }
    };
    obj16.children = intl2.format(tmp4(1119).t.pJAxgQ, obj17);
    obj15.children = tmp9(tmp4(4754).Text, obj16);
    tmp9Result = tmp9(tmp10, obj15);
  }
  const obj18 = { children: null };
  const items4 = [tmp9Result, ];
  const obj19 = { style: tmp.getStartedFooterButtonsContainer, children: null };
  const obj20 = { variant: "primary", size: "lg", text: null, onPress: null, icon: null, loading: null, iconPosition: "end" };
  const intl3 = tmp4(1119).intl;
  obj20.text = intl3.string(modalSessionId(1119).t.SJMnkX);
  obj20.onPress = asyncGeneratorStep(async (arg0, value) => {
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
        if (0 === v1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const result = v3(8689).trackAgeVerificationModalClicked(modalSessionId, v3(8689).AgeVerificationModalVersion.PRIMARY, v3(8689).AgeVerificationModalCta.GET_STARTED);
            v1 = 1;
            v3 = 1;
            const obj5 = { value: v1(), done: false };
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
  const arr3 = closure_6(modalSessionId);
  const obj13 = {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  };
  obj20.icon = closure_9(modalSessionId(8860).LinkExternalSmallIcon, { color: nativeDefault.colors.WHITE });
  obj20.loading = loading;
  obj19.children = closure_9(modalSessionId(5188).Button, obj20);
  items4[1] = closure_9(closure_5, obj19);
  obj14.children = items4;
  items2[1] = closure_10(closure_5, obj14);
  obj18.children = items2;
  return closure_10(tmp8, obj18);
});
