// Module ID: 8038
// Function ID: 8039
// Name: AgeVerificationIntroScreen
// Dependencies: [5, 19, 17, 7864, 1086, 7872, 21, 4837, 588, 558, 576, 1619, 5049, 8039, 7876, 4833, 8040, 5997, 1127, 7863, 2114, 7865, 8041, 5282, 2]

// Module 8038 (AgeVerificationIntroScreen)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2114 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7863 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 7864 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7865 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7872 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _undefined, importDefault, modalSessionId;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = AgeVerificationConstants.getAgeVerificationGetStartedSteps;
const HelpdeskArticles = Constants.HelpdeskArticles;
const SafetyHubLinks = SafetyHubConstants.SafetyHubLinks;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { getStartedContainer: obj2, getStartedHeaderContainer: obj3, ageGroupLearnMoreContainer: obj4, getStartedHeaderText: { textAlign: "center" }, getStartedRequestTextContainer: { alignItems: "center" }, getStartedFooterContainer: obj5, getStartedRequestText: obj6, getStartedFooterButtonsContainer: obj7 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj7 = { gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((modalSessionId) => {
  let entryPoint;
  let getStartedContainer;
  let getStartedHeaderContainer;
  let initiateAgeVerification;
  let items;
  let items1;
  let loading;
  let obj6;
  let onClose;
  const tmp = modalSessionId;
  let tmp2 = dependencyMap;
  let obj = modalSessionId(576);
  const cResult = obj.c(63);
  modalSessionId = modalSessionId.modalSessionId;
  ({ onClose, entryPoint } = modalSessionId);
  let tmp4 = closure_12();
  const bottom = initiateAgeVerification(1619)().bottom;
  if (cResult[0] === entryPoint) {
    let tmp5;
    let tmp9;
    let tmp12;
    if (cResult[1] === onClose) {
      tmp5 = cResult[2];
    }
    let tmpResult = tmp(5049);
    const initiateAgeVerification1 = tmpResult.useInitiateAgeVerification(tmp5);
    ({ loading, initiateAgeVerification } = initiateAgeVerification1);
    const tmpResult4 = tmp(8039);
    const isManualAgeVerificationHidden = tmpResult4.useIsManualAgeVerificationHidden("age_verification_get_started_modal");
    const _Symbol = Symbol;
    ({ getStartedContainer, getStartedHeaderContainer } = tmp4);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = closure_9(tmp(7876).ShieldSpotIllustration, {});
      cResult[3] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    const getStartedHeaderText = tmp4.getStartedHeaderText;
    if (cResult[4] !== entryPoint) {
      const tmpResult5 = tmp(5049);
      const ageVerificationGetStartedTitle = tmpResult5.getAgeVerificationGetStartedTitle(entryPoint);
      cResult[4] = entryPoint;
      cResult[5] = ageVerificationGetStartedTitle;
      tmp12 = ageVerificationGetStartedTitle;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === tmp4.getStartedHeaderText) {
      let tmp14;
      let tmp17;
      if (cResult[7] === tmp12) {
        tmp14 = cResult[8];
      }
      const getStartedHeaderText2 = tmp4.getStartedHeaderText;
      if (cResult[9] !== entryPoint) {
        const tmpResult6 = tmp(5049);
        const ageVerificationGetStartedSubtitle = tmpResult6.getAgeVerificationGetStartedSubtitle(entryPoint);
        cResult[9] = entryPoint;
        cResult[10] = ageVerificationGetStartedSubtitle;
        tmp17 = ageVerificationGetStartedSubtitle;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp4.getStartedHeaderText) {
        let tmp19;
        if (cResult[12] === tmp17) {
          tmp19 = cResult[13];
        }
        if (cResult[14] === tmp4.getStartedHeaderContainer) {
          if (cResult[15] === tmp19) {
            let tmp22;
            if (cResult[16] === tmp14) {
              tmp22 = cResult[17];
            }
            if (cResult[18] !== modalSessionId) {
              let tmp27;
              const _Symbol2 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                class B {
                  constructor(description, arg1) {
                    let tmpResult;
                    description = description.description;
                    const title = description.title;
                    const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                    tmpResult = null;
                    const tmp2 = dependencyMap;
                    const tmp3 = initiateAgeVerification(dependencyMap[16]);
                    const tmp4 = modalSessionId;
                    if (null != description) {
                      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                    }
                    return closure_1_9(tmp3, obj, arg1);
                  }
                }
                cResult[20] = B;
                tmp27 = B;
              } else {
                class B {
                  constructor(description, arg1) {
                    let tmpResult;
                    description = description.description;
                    const title = description.title;
                    const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                    tmpResult = null;
                    const tmp2 = dependencyMap;
                    const tmp3 = initiateAgeVerification(dependencyMap[16]);
                    const tmp4 = modalSessionId;
                    if (null != description) {
                      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                    }
                    return closure_1_9(tmp3, obj, arg1);
                  }
                }
              }
              const arr2 = closure_6(modalSessionId);
              const mapped = arr2.map(tmp27);
              cResult[18] = modalSessionId;
              cResult[19] = mapped;
            } else {
              class B {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[16]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                  }
                  return closure_1_9(tmp3, obj, arg1);
                }
              }
            }
            if (cResult[21] !== tmp26) {
              class B {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[16]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                  }
                  return closure_1_9(tmp3, obj, arg1);
                }
              }
              let obj2 = { hasIcons: true, children: tmp26 };
              cResult[21] = tmp26;
              cResult[22] = closure_9(tmp(5997).TableRowGroup, obj2);
              const tmp31 = closure_9(tmp(5997).TableRowGroup, obj2);
            } else {
              class B {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[16]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                  }
                  return closure_1_9(tmp3, obj, arg1);
                }
              }
            }
            const ageGroupLearnMoreContainer = tmp4.ageGroupLearnMoreContainer;
            if (cResult[23] !== modalSessionId) {
              class B {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[16]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                  }
                  return closure_1_9(tmp3, obj, arg1);
                }
              }
              const obj3 = {
                handleOnHelpUrlHook() {
                              const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
                              AgeVerificationActionCreatorsDefault;
                              const obj = HelpdeskUtilsDefault;
                              openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
                              const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
                              AgeVerificationAnalyticsUtils;
                              const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
                            }
              };
              cResult[23] = modalSessionId;
              cResult[24] = obj11.format(tmp(1127).t["L+FgkZ"], obj3);
              const formatResult = obj11.format(tmp(1127).t["L+FgkZ"], obj3);
            } else {
              class B {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[16]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                  }
                  return closure_1_9(tmp3, obj, arg1);
                }
              }
            }
            if (cResult[25] !== tmp32) {
              class B {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[16]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                  }
                  return closure_1_9(tmp3, obj, arg1);
                }
              }
              const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp32 };
              cResult[25] = tmp32;
              cResult[26] = closure_9(tmp(4833).Text, obj4);
              const tmp35 = closure_9(tmp(4833).Text, obj4);
            } else {
              class B {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[16]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                  }
                  return closure_1_9(tmp3, obj, arg1);
                }
              }
            }
            if (cResult[27] === tmp4.ageGroupLearnMoreContainer) {
              class B {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[16]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                  }
                  return closure_1_9(tmp3, obj, arg1);
                }
              }
              if (cResult[30] === tmp4.getStartedContainer) {
                class B {
                  constructor(description, arg1) {
                    let tmpResult;
                    description = description.description;
                    const title = description.title;
                    const obj = { index: arg1 + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                    tmpResult = null;
                    const tmp2 = dependencyMap;
                    const tmp3 = initiateAgeVerification(dependencyMap[16]);
                    const tmp4 = modalSessionId;
                    if (null != description) {
                      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                      tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
                    }
                    return closure_1_9(tmp3, obj, arg1);
                  }
                }
              }
              const obj5 = { children: closure_10(closure_5, obj6) };
              obj6 = { style: getStartedContainer, children: items };
              items = [tmp22, tmp30, tmp36];
              cResult[30] = tmp4.getStartedContainer;
              cResult[31] = tmp22;
              cResult[32] = tmp30;
              cResult[33] = tmp36;
              cResult[34] = closure_9(closure_4, obj5);
              const tmp45 = closure_9(closure_4, obj5);
            }
            const obj7 = { style: ageGroupLearnMoreContainer, children: tmp34 };
            cResult[27] = tmp4.ageGroupLearnMoreContainer;
            cResult[28] = tmp34;
            cResult[29] = closure_9(closure_5, obj7);
            const tmp39 = closure_9(closure_5, obj7);
          }
        }
        const obj8 = { style: getStartedHeaderContainer, children: items1 };
        items1 = [tmp9, tmp14, tmp19];
        const tmp25 = closure_10(closure_5, obj8);
        cResult[14] = tmp4.getStartedHeaderContainer;
        cResult[15] = tmp19;
        cResult[16] = tmp14;
        cResult[17] = tmp25;
        tmp22 = tmp25;
      }
      const obj9 = { variant: "heading-md/medium", color: "text-default", style: getStartedHeaderText2, children: tmp17 };
      const tmp21 = closure_9(tmp(4833).Text, obj9);
      cResult[11] = tmp4.getStartedHeaderText;
      cResult[12] = tmp17;
      cResult[13] = tmp21;
      tmp19 = tmp21;
    }
    const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: getStartedHeaderText, children: tmp12 };
    const tmp16 = closure_9(tmp(4833).Text, obj10);
    cResult[6] = tmp4.getStartedHeaderText;
    cResult[7] = tmp12;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const obj12 = { onComplete: onClose, entryPoint };
  cResult[0] = entryPoint;
  cResult[1] = onClose;
  cResult[2] = obj12;
  tmp5 = obj12;
}) : ((modalSessionId) => {
  let Button;
  let LinkExternalSmallIcon;
  let Text3;
  let Text4;
  let arr3;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items3;
  let items4;
  let loading;
  let obj12;
  let obj13;
  let obj16;
  let obj17;
  let obj20;
  let obj21;
  let obj4;
  let obj7;
  let obj9;
  modalSessionId = modalSessionId.modalSessionId;
  const entryPoint = modalSessionId.entryPoint;
  importDefault = undefined;
  const onClose = modalSessionId.onClose;
  const tmp = closure_12();
  let tmp3 = dependencyMap;
  let tmp2 = importDefault;
  let tmp4 = modalSessionId;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = modalSessionId(5049);
  const initiateAgeVerification = obj.useInitiateAgeVerification({ onComplete: onClose, entryPoint });
  ({ initiateAgeVerification: c1, loading } = initiateAgeVerification);
  let obj2 = modalSessionId(8039);
  const isManualAgeVerificationHidden = obj2.useIsManualAgeVerificationHidden("age_verification_get_started_modal");
  let obj3 = { children: closure_10(closure_5, obj4) };
  const tmp10 = closure_5;
  obj4 = { style: tmp.getStartedContainer, children: items1 };
  const obj5 = { style: tmp.getStartedHeaderContainer, children: items };
  items = [closure_9(modalSessionId(7876).ShieldSpotIllustration, {}), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText, children: obj7.getAgeVerificationGetStartedTitle(entryPoint) };
  const Text = modalSessionId(4833).Text;
  obj7 = modalSessionId(5049);
  items[1] = closure_9(Text, obj6);
  const obj8 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: obj9.getAgeVerificationGetStartedSubtitle(entryPoint) };
  const Text2 = modalSessionId(4833).Text;
  obj9 = modalSessionId(5049);
  items[2] = closure_9(Text2, obj8);
  items1 = [closure_10(closure_5, obj5), , ];
  const obj10 = {
    hasIcons: true,
    children: arr3.map((description, index) => {
      let tmpResult;
      description = description.description;
      const title = description.title;
      const obj = { index: index + 1, tip: closure_1_9(modalSessionId(dependencyMap[15]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
      tmpResult = null;
      const tmp2 = dependencyMap;
      const tmp3 = _undefined(dependencyMap[16]);
      const tmp4 = modalSessionId;
      if (null != description) {
        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
        tmpResult = tmp(tmp4(tmp2[15]).Text, obj2);
      }
      return closure_1_9(tmp3, obj, index);
    })
  };
  const TableRowGroup = modalSessionId(5997).TableRowGroup;
  arr3 = closure_6(modalSessionId);
  items1[1] = closure_9(TableRowGroup, obj10);
  const obj11 = { style: tmp.ageGroupLearnMoreContainer, children: closure_9(Text3, obj12) };
  obj12 = { variant: "text-xs/medium", color: "text-muted", children: intl.format(modalSessionId(1127).t["L+FgkZ"], obj13) };
  Text3 = modalSessionId(4833).Text;
  intl = modalSessionId(1127).intl;
  obj13 = {
    handleOnHelpUrlHook() {
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
      AgeVerificationAnalyticsUtils;
      const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }
  };
  items1[2] = closure_9(closure_5, obj11);
  const items2 = [closure_9(closure_4, obj3), ];
  const obj14 = { style: items3, children: items4 };
  items3 = [tmp.getStartedFooterContainer, { paddingBottom: bottom }];
  let tmp9Result = !isManualAgeVerificationHidden;
  const tmp8 = closure_11;
  if (tmp9Result) {
    const obj15 = { style: tmp.getStartedRequestTextContainer, children: closure_9(Text4, obj16) };
    obj16 = { variant: "text-xs/medium", color: "text-muted", style: tmp.getStartedRequestText, children: intl2.format(tmp4(1127).t.pJAxgQ, obj17) };
    Text4 = tmp4(4833).Text;
    intl2 = tmp4(1127).intl;
    obj17 = {
      handleOnRequestHook() {
          const obj = AgeVerificationActionCreatorsDefault;
          obj.openUrl(SafetyHubLinks.APPEALS_LINK);
          const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
          AgeVerificationAnalyticsUtils;
          const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
        }
    };
    tmp9Result = tmp9(tmp10, obj15);
  }
  items4 = [tmp9Result, ];
  const obj18 = { children: items2 };
  const obj19 = { style: tmp.getStartedFooterButtonsContainer, children: closure_9(Button, obj20) };
  obj20 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(tmp4(1127).t.SJMnkX),
    onPress: _asyncToGenerator(async (arg0, value) => {
      let v1;
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
          if (0 === _undefined) {
            if (arg0 === 1) {
              modalSessionId = 3;
              throw value;
            } else if (arg0 === 2) {
              modalSessionId = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const trackAgeVerificationModalClicked = modalSessionId(dependencyMap[21]).trackAgeVerificationModalClicked;
              const tmp6 = modalSessionId(dependencyMap[21]);
              const result = trackAgeVerificationModalClicked(modalSessionId, modalSessionId(dependencyMap[21]).AgeVerificationModalVersion.PRIMARY, modalSessionId(dependencyMap[21]).AgeVerificationModalCta.GET_STARTED);
              _undefined = 1;
              modalSessionId = 1;
              const obj4 = { value: _undefined(), done: false };
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
    }),
    icon: closure_9(LinkExternalSmallIcon, obj21),
    loading,
    iconPosition: "end"
  };
  Button = tmp4(5282).Button;
  intl3 = tmp4(1127).intl;
  obj21 = { color: nativeDefault.colors.WHITE };
  LinkExternalSmallIcon = tmp4(8041).LinkExternalSmallIcon;
  items4[1] = closure_9(tmp10, obj19);
  items2[1] = closure_10(tmp10, obj14);
  return closure_10(tmp8, obj18);
});
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default tmp6;
