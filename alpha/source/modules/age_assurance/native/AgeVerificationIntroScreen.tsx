// Module ID: 7676
// Function ID: 7677
// Name: AgeVerificationIntroScreen
// Dependencies: [5, 19, 17, 1085, 21, 5090, 587, 558, 576, 1630, 7545, 7508, 5905, 5086, 7677, 7678, 6267, 1126, 7492, 2127, 5915, 7679, 5375, 2]

// Module 7676 (AgeVerificationIntroScreen)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5915 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { getStartedContainer: obj2, getStartedHeaderContainer: obj3, ageGroupLearnMoreContainer: obj4, getStartedHeaderText: { textAlign: "center" }, getStartedFooterContainer: obj5, getStartedFooterButtonsContainer: obj6 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { alignItems: "center", marginTop: -nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_48 };
obj6 = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GetStartedScreen(modalSessionId) {
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
  const cResult = obj.c(57);
  modalSessionId = modalSessionId.modalSessionId;
  ({ onClose, entryPoint } = modalSessionId);
  let tmp4 = closure_10();
  const bottom = initiateAgeVerification(1630)().bottom;
  if (cResult[0] === entryPoint) {
    let tmp5;
    let tmp8;
    let tmp11;
    if (cResult[1] === onClose) {
      tmp5 = cResult[2];
    }
    let tmpResult = tmp(7545);
    const initiateAgeVerification1 = tmpResult.useInitiateAgeVerification(tmp5);
    ({ loading, initiateAgeVerification } = initiateAgeVerification1);
    const _Symbol = Symbol;
    ({ getStartedContainer, getStartedHeaderContainer } = tmp4);
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = closure_7(tmp(7508).ShieldSpotIllustration, {});
      cResult[3] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[3];
    }
    const getStartedHeaderText = tmp4.getStartedHeaderText;
    if (cResult[4] !== entryPoint) {
      const tmpResult4 = tmp(5905);
      const ageVerificationGetStartedTitle = tmpResult4.getAgeVerificationGetStartedTitle(entryPoint);
      cResult[4] = entryPoint;
      cResult[5] = ageVerificationGetStartedTitle;
      tmp11 = ageVerificationGetStartedTitle;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] === tmp4.getStartedHeaderText) {
      let tmp13;
      let tmp16;
      if (cResult[7] === tmp11) {
        tmp13 = cResult[8];
      }
      const getStartedHeaderText2 = tmp4.getStartedHeaderText;
      if (cResult[9] !== entryPoint) {
        const tmpResult5 = tmp(5905);
        const ageVerificationGetStartedSubtitle = tmpResult5.getAgeVerificationGetStartedSubtitle(entryPoint);
        cResult[9] = entryPoint;
        cResult[10] = ageVerificationGetStartedSubtitle;
        tmp16 = ageVerificationGetStartedSubtitle;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] === tmp4.getStartedHeaderText) {
        let tmp18;
        if (cResult[12] === tmp16) {
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp4.getStartedHeaderContainer) {
          if (cResult[15] === tmp18) {
            let tmp21;
            if (cResult[16] === tmp13) {
              tmp21 = cResult[17];
            }
            if (cResult[18] !== modalSessionId) {
              let tmp26;
              const _Symbol2 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                class F {
                  constructor(description, arg1) {
                    let tmpResult;
                    description = description.description;
                    const title = description.title;
                    const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                    tmpResult = null;
                    const tmp2 = dependencyMap;
                    const tmp3 = initiateAgeVerification(dependencyMap[14]);
                    const tmp4 = modalSessionId;
                    if (null != description) {
                      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                      tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                    }
                    return closure_1_7(tmp3, obj, arg1);
                  }
                }
                cResult[20] = F;
                tmp26 = F;
              } else {
                class F {
                  constructor(description, arg1) {
                    let tmpResult;
                    description = description.description;
                    const title = description.title;
                    const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                    tmpResult = null;
                    const tmp2 = dependencyMap;
                    const tmp3 = initiateAgeVerification(dependencyMap[14]);
                    const tmp4 = modalSessionId;
                    if (null != description) {
                      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                      tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                    }
                    return closure_1_7(tmp3, obj, arg1);
                  }
                }
              }
              const tmpResult6 = tmp(7678);
              const ageVerificationGetStartedSteps = tmpResult6.getAgeVerificationGetStartedSteps(modalSessionId);
              const mapped = ageVerificationGetStartedSteps.map(tmp26);
              cResult[18] = modalSessionId;
              cResult[19] = mapped;
            } else {
              class F {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[14]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                  }
                  return closure_1_7(tmp3, obj, arg1);
                }
              }
            }
            if (cResult[21] !== tmp25) {
              class F {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[14]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                  }
                  return closure_1_7(tmp3, obj, arg1);
                }
              }
              let obj2 = { hasIcons: true, children: tmp25 };
              cResult[21] = tmp25;
              cResult[22] = closure_7(tmp(6267).TableRowGroup, obj2);
              const tmp29 = closure_7(tmp(6267).TableRowGroup, obj2);
            } else {
              class F {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[14]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                  }
                  return closure_1_7(tmp3, obj, arg1);
                }
              }
            }
            const ageGroupLearnMoreContainer = tmp4.ageGroupLearnMoreContainer;
            if (cResult[23] !== modalSessionId) {
              class F {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[14]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                  }
                  return closure_1_7(tmp3, obj, arg1);
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
              cResult[24] = obj11.format(tmp(1126).t["L+FgkZ"], obj3);
              const formatResult = obj11.format(tmp(1126).t["L+FgkZ"], obj3);
            } else {
              class F {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[14]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                  }
                  return closure_1_7(tmp3, obj, arg1);
                }
              }
            }
            if (cResult[25] !== tmp30) {
              class F {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[14]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                  }
                  return closure_1_7(tmp3, obj, arg1);
                }
              }
              const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp30 };
              cResult[25] = tmp30;
              cResult[26] = closure_7(tmp(5086).Text, obj4);
              const tmp33 = closure_7(tmp(5086).Text, obj4);
            } else {
              class F {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[14]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                  }
                  return closure_1_7(tmp3, obj, arg1);
                }
              }
            }
            if (cResult[27] === tmp4.ageGroupLearnMoreContainer) {
              class F {
                constructor(description, arg1) {
                  let tmpResult;
                  description = description.description;
                  const title = description.title;
                  const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                  tmpResult = null;
                  const tmp2 = dependencyMap;
                  const tmp3 = initiateAgeVerification(dependencyMap[14]);
                  const tmp4 = modalSessionId;
                  if (null != description) {
                    const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                    tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                  }
                  return closure_1_7(tmp3, obj, arg1);
                }
              }
              if (cResult[30] === tmp4.getStartedContainer) {
                class F {
                  constructor(description, arg1) {
                    let tmpResult;
                    description = description.description;
                    const title = description.title;
                    const obj = { index: arg1 + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
                    tmpResult = null;
                    const tmp2 = dependencyMap;
                    const tmp3 = initiateAgeVerification(dependencyMap[14]);
                    const tmp4 = modalSessionId;
                    if (null != description) {
                      const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
                      tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
                    }
                    return closure_1_7(tmp3, obj, arg1);
                  }
                }
              }
              const obj5 = { children: closure_8(closure_5, obj6) };
              obj6 = { style: getStartedContainer, children: items };
              items = [tmp21, tmp28, tmp34];
              cResult[30] = tmp4.getStartedContainer;
              cResult[31] = tmp21;
              cResult[32] = tmp28;
              cResult[33] = tmp34;
              cResult[34] = closure_7(closure_4, obj5);
              const tmp43 = closure_7(closure_4, obj5);
            }
            const obj7 = { style: ageGroupLearnMoreContainer, children: tmp32 };
            cResult[27] = tmp4.ageGroupLearnMoreContainer;
            cResult[28] = tmp32;
            cResult[29] = closure_7(closure_5, obj7);
            const tmp37 = closure_7(closure_5, obj7);
          }
        }
        const obj8 = { style: getStartedHeaderContainer, children: items1 };
        items1 = [tmp8, tmp13, tmp18];
        const tmp24 = closure_8(closure_5, obj8);
        cResult[14] = tmp4.getStartedHeaderContainer;
        cResult[15] = tmp18;
        cResult[16] = tmp13;
        cResult[17] = tmp24;
        tmp21 = tmp24;
      }
      const obj9 = { variant: "heading-md/medium", color: "text-default", style: getStartedHeaderText2, children: tmp16 };
      const tmp20 = closure_7(tmp(5086).Text, obj9);
      cResult[11] = tmp4.getStartedHeaderText;
      cResult[12] = tmp16;
      cResult[13] = tmp20;
      tmp18 = tmp20;
    }
    const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: getStartedHeaderText, children: tmp11 };
    const tmp15 = closure_7(tmp(5086).Text, obj10);
    cResult[6] = tmp4.getStartedHeaderText;
    cResult[7] = tmp11;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  }
  const obj12 = { onComplete: onClose, entryPoint };
  cResult[0] = entryPoint;
  cResult[1] = onClose;
  cResult[2] = obj12;
  tmp5 = obj12;
}) : (function GetStartedScreen(modalSessionId) {
  let Button;
  let LinkExternalSmallIcon;
  let Text3;
  let ageVerificationGetStartedSteps;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj18;
  let obj4;
  let obj7;
  let obj9;
  modalSessionId = modalSessionId.modalSessionId;
  const entryPoint = modalSessionId.entryPoint;
  let initiateAgeVerification;
  const onClose = modalSessionId.onClose;
  const tmp = closure_10();
  const bottom = initiateAgeVerification(1630)().bottom;
  let obj = modalSessionId(7545);
  initiateAgeVerification = obj.useInitiateAgeVerification({ onComplete: onClose, entryPoint });
  initiateAgeVerification = initiateAgeVerification.initiateAgeVerification;
  let obj2 = { children: items2 };
  let obj3 = { children: closure_8(closure_5, obj4) };
  obj4 = { style: tmp.getStartedContainer, children: items1 };
  const loading = initiateAgeVerification.loading;
  const obj5 = { style: tmp.getStartedHeaderContainer, children: items };
  items = [closure_7(modalSessionId(7508).ShieldSpotIllustration, {}), , ];
  const obj6 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.getStartedHeaderText, children: obj7.getAgeVerificationGetStartedTitle(entryPoint) };
  const Text = modalSessionId(5086).Text;
  obj7 = modalSessionId(5905);
  items[1] = closure_7(Text, obj6);
  const obj8 = { variant: "heading-md/medium", color: "text-default", style: tmp.getStartedHeaderText, children: obj9.getAgeVerificationGetStartedSubtitle(entryPoint) };
  const Text2 = modalSessionId(5086).Text;
  obj9 = modalSessionId(5905);
  items[2] = closure_7(Text2, obj8);
  items1 = [closure_8(closure_5, obj5), , ];
  const obj10 = {
    hasIcons: true,
    children: ageVerificationGetStartedSteps.map((description, index) => {
      let tmpResult;
      description = description.description;
      const title = description.title;
      const obj = { index: index + 1, tip: closure_1_7(modalSessionId(dependencyMap[13]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: title }), description: tmpResult };
      tmpResult = null;
      const tmp2 = dependencyMap;
      const tmp3 = initiateAgeVerification(dependencyMap[14]);
      const tmp4 = modalSessionId;
      if (null != description) {
        const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: description };
        tmpResult = tmp(tmp4(tmp2[13]).Text, obj2);
      }
      return closure_1_7(tmp3, obj, index);
    })
  };
  const TableRowGroup = modalSessionId(6267).TableRowGroup;
  const obj11 = modalSessionId(7678);
  ageVerificationGetStartedSteps = obj11.getAgeVerificationGetStartedSteps(modalSessionId);
  items1[1] = closure_7(TableRowGroup, obj10);
  const obj12 = { style: tmp.ageGroupLearnMoreContainer, children: closure_7(Text3, obj13) };
  obj13 = { variant: "text-xs/medium", color: "text-muted", children: intl.format(modalSessionId(1126).t["L+FgkZ"], obj14) };
  Text3 = modalSessionId(5086).Text;
  intl = modalSessionId(1126).intl;
  obj14 = {
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
  items1[2] = closure_7(closure_5, obj12);
  items2 = [closure_7(closure_4, obj3), ];
  const obj15 = { style: items3, children: closure_7(closure_5, obj16) };
  items3 = [tmp.getStartedFooterContainer, { paddingBottom: bottom }];
  obj16 = { style: tmp.getStartedFooterButtonsContainer, children: closure_7(Button, obj17) };
  obj17 = {
    variant: "primary",
    size: "lg",
    text: intl2.string(modalSessionId(1126).t.SJMnkX),
    onPress: _asyncToGenerator(async (arg0, value) => {
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
              const trackAgeVerificationModalClicked = modalSessionId(dependencyMap[20]).trackAgeVerificationModalClicked;
              const tmp6 = modalSessionId(dependencyMap[20]);
              const result = trackAgeVerificationModalClicked(modalSessionId, modalSessionId(dependencyMap[20]).AgeVerificationModalVersion.PRIMARY, modalSessionId(dependencyMap[20]).AgeVerificationModalCta.GET_STARTED);
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
    }),
    icon: closure_7(LinkExternalSmallIcon, obj18),
    loading,
    iconPosition: "end"
  };
  Button = modalSessionId(5375).Button;
  intl2 = modalSessionId(1126).intl;
  obj18 = { color: initiateAgeVerification(587).colors.WHITE };
  LinkExternalSmallIcon = modalSessionId(7679).LinkExternalSmallIcon;
  items2[1] = closure_7(closure_5, obj15);
  return closure_8(closure_9, obj2);
});
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationIntroScreen.tsx");

export default tmp6;
