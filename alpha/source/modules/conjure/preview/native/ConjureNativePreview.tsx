// Module ID: 16890
// Function ID: 16891
// Name: ConjureNativePreview
// Dependencies: [32, 19, 17, 10612, 502, 2063, 6040, 1998, 16838, 11251, 1085, 10613, 21, 5090, 587, 558, 576, 5086, 6186, 12368, 11150, 12372, 504, 16891, 10618, 16892, 16893, 16894, 16898, 16899, 16901, 1126, 3827, 5375, 7314, 13099, 6842, 7001, 6789, 10342, 1381, 16905, 2]
// Exports: leaveConjurePreviewFrame

// Module 16890 (ConjureNativePreview)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl8 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import Card_Card from "Card/Card" /* 6186 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6789 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7001 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7314 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10618 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 11150 */;
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 12368 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 13099 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore from "FramesStore" /* 10612 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 16838 */;
import ConjureProjectStore from "ConjureProjectStore" /* 11251 */;
import Constants from "Constants" /* 1085 */;
import FramesConstants from "FramesConstants" /* 10613 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c0, catchPromise, dependencyMap, flag, obj1;

let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ exitConjureDesignFeedback: map1, useConjureDesignFeedback: closure_14 } = conjureDesignFeedbackStore);
({ AnalyticsObjects: closure_16, AnalyticsObjectTypes: closure_17, AnalyticsSections: closure_18, AppStates: closure_19, ME: closure_20 } = Constants);
({ FrameLayoutModes: closure_21, isLaunched: closure_22 } = FramesConstants);
({ jsx: closure_23, jsxs: closure_24 } = Fragment);
let createStyles = createStyles_mod;
let obj = { frame: { flex: 1 }, centered: obj2, card: { alignSelf: "stretch" }, cardBody: obj3, cardCopy: obj4, cardText: { textAlign: "center" }, widget: obj5, dm: { flex: 1 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5 = { padding: nativeDefault.space.PX_16 };
let closure_25 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function StatusCard(arg0) {
  let body;
  let children;
  let items;
  let items1;
  let title;
  const obj = react2;
  const cResult = obj.c(20);
  ({ title, body, children } = arg0);
  const tmp4 = closure_25();
  if (cResult[0] === tmp4.cardText) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === body) {
      let tmp7;
      if (cResult[4] === tmp4.cardText) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.cardCopy) {
        if (cResult[7] === tmp5) {
          let tmp10;
          if (cResult[8] === tmp7) {
            tmp10 = cResult[9];
          }
          if (cResult[10] === children) {
            if (cResult[11] === tmp4.cardBody) {
              let tmp14;
              if (cResult[12] === tmp10) {
                tmp14 = cResult[13];
              }
              if (cResult[14] === tmp4.card) {
                let tmp18;
                if (cResult[15] === tmp14) {
                  tmp18 = cResult[16];
                }
                if (cResult[17] === tmp4.centered) {
                  let tmp21;
                  if (cResult[18] === tmp18) {
                    tmp21 = cResult[19];
                  }
                  return tmp21;
                }
                const obj2 = { style: tmp4.centered, children: tmp18 };
                const tmp24 = version(metroImportDefault, obj2);
                cResult[17] = tmp4.centered;
                cResult[18] = tmp18;
                cResult[19] = tmp24;
                tmp21 = tmp24;
              }
              const obj3 = { variant: "primary", style: tmp4.card, children: tmp14 };
              const tmp20 = version(Card_Card.Card, obj3);
              cResult[14] = tmp4.card;
              cResult[15] = tmp14;
              cResult[16] = tmp20;
              tmp18 = tmp20;
            }
          }
          const obj4 = { style: tmp4.cardBody, children: items };
          items = [tmp10, children];
          const tmp17 = closure_24(metroImportDefault, obj4);
          cResult[10] = children;
          cResult[11] = tmp4.cardBody;
          cResult[12] = tmp10;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
      }
      const obj5 = { style: tmp4.cardCopy, children: items1 };
      items1 = [tmp5, tmp7];
      const tmp13 = closure_24(metroImportDefault, obj5);
      cResult[6] = tmp4.cardCopy;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.cardText, children: body };
    const tmp9 = version(Text_Text.Text, obj6);
    cResult[3] = body;
    cResult[4] = tmp4.cardText;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const obj7 = { variant: "heading-md/semibold", color: "text-default", style: tmp4.cardText, children: title };
  const tmp6 = version(Text_Text.Text, obj7);
  cResult[0] = tmp4.cardText;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function StatusCard(arg0) {
  let Card;
  let body;
  let children;
  let items;
  let items1;
  let obj2;
  let obj3;
  let title;
  ({ title, body, children } = arg0);
  const tmp = closure_25();
  const obj = { style: tmp.centered, children: version(Card, obj2) };
  obj2 = { variant: "primary", style: tmp.card, children: closure_24(metroImportDefault, obj3) };
  obj3 = { style: tmp.cardBody, children: items1 };
  const obj4 = { style: tmp.cardCopy, children: items };
  Card = Card_Card.Card;
  items = [, ];
  const obj5 = { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title };
  items[0] = version(Text_Text.Text, obj5);
  const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
  items[1] = version(Text_Text.Text, obj6);
  items1 = [closure_24(metroImportDefault, obj4), children];
  return version(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewFrame(applicationId) {
  let Button;
  let closure_3;
  let first;
  let frameSurface;
  let intl3;
  let items1;
  let obj9;
  let onOpenPublishedApp;
  let surface;
  let tmp6;
  let visible;
  let tmp = applicationId;
  let obj = applicationId(576);
  const cResult = obj.c(43);
  applicationId = applicationId.applicationId;
  const projectId = applicationId.projectId;
  ({ frameSurface, visible, onOpenPublishedApp } = applicationId);
  let tmp4 = null;
  if (undefined !== onOpenPublishedApp) {
    tmp4 = onOpenPublishedApp;
  }
  const tmpResult = tmp(12372);
  const conjureControlActive = tmpResult.useConjureControlActive(projectId);
  const active = closure_14(projectId).active;
  if (cResult[0] !== projectId) {
    const fn = function c() {
      return () => closure_2_13(projectId);
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === projectId) {
    let tmp7;
    let tmp12;
    let tmp14;
    if (cResult[3] === visible) {
      tmp7 = cResult[4];
    }
    let obj3 = first;
    const effect = first.useEffect(tmp6, tmp7);
    const tmp10 = closure_25();
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ConjureProjectStore];
      cResult[5] = items;
      tmp12 = items;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== projectId) {
      const fn2 = function x() {
        const obj = conjurePreviewSurface2;
        return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
      };
      cResult[6] = projectId;
      cResult[7] = fn2;
      tmp14 = fn2;
    } else {
      tmp14 = cResult[7];
    }
    const tmpResult3 = tmp(504);
    const stateFromStores = tmpResult3.useStateFromStores(tmp12, tmp14);
    if (cResult[8] === frameSurface) {
      let tmp16;
      let tmp21;
      if (cResult[9] === stateFromStores) {
        tmp16 = cResult[10];
      }
      dependencyMap = tmp16;
      const tmp19 = projectId(16891)(applicationId, tmp16);
      _slicedToArray = tmp19;
      if (cResult[11] !== tmp19) {
        let tmp22 = null;
        if (null != tmp19) {
          tmp22 = null;
          if (closure_22(tmp19)) {
            tmp22 = tmp19;
          }
        }
        cResult[11] = tmp19;
        cResult[12] = tmp22;
        tmp21 = tmp22;
      } else {
        tmp21 = cResult[12];
      }
      const tmp25 = _slicedToArray(obj3.useState(false), 2);
      first = tmp25[0];
      let closure_5 = tmp27;
      const tmp28 = _slicedToArray(obj3.useState(frameSurface), 2);
      if (tmp28[0] !== frameSurface) {
        tmp28[1](frameSurface);
        tmp25[1](false);
      }
      if (cResult[13] === applicationId) {
        if (cResult[14] === first) {
          if (cResult[15] === tmp19) {
            let tmp31;
            let tmp32;
            let tmp44;
            if (cResult[16] === tmp16) {
              tmp31 = cResult[17];
              tmp32 = cResult[18];
            }
            const effect1 = obj3.useEffect(tmp31, tmp32);
            let tmp35 = visible;
            const tmp18Result = projectId(16892);
            if (visible) {
              tmp35 = null != tmp21;
            }
            tmp18Result(tmp35);
            let applicationId1;
            const tmp18Result3 = projectId(16893);
            if (tmp21 != null) {
              applicationId1 = tmp21.applicationId;
            }
            if (applicationId1 == null) {
              applicationId1 = null;
            }
            tmp18Result3(applicationId1);
            if (null != tmp21) {
              let tmp56;
              let tmp58;
              const _Symbol5 = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { layoutMode: constants4.FOCUSED };
                cResult[19] = obj2;
                tmp56 = obj2;
              } else {
                tmp56 = cResult[19];
              }
              if (cResult[20] !== tmp21.id) {
                const obj4 = { frameId: tmp21.id, level: tmp(16898).FrameStackLevel.WithinAppContent, presentation: tmp56 };
                const tmp18Result4 = projectId(16894);
                const tmp61 = closure_23(tmp18Result4, obj4);
                cResult[20] = tmp21.id;
                cResult[21] = tmp61;
                tmp58 = tmp61;
              } else {
                tmp58 = cResult[21];
              }
              if (cResult[22] === conjureControlActive) {
                if (cResult[23] === projectId) {
                  if (cResult[24] === active) {
                    let tmp62;
                    if (cResult[25] === visible) {
                      tmp62 = cResult[26];
                    }
                    if (cResult[27] === conjureControlActive) {
                      if (cResult[28] === tmp4) {
                        if (cResult[29] === projectId) {
                          if (cResult[30] === tmp58) {
                            if (cResult[31] === tmp62) {
                              let tmp65;
                              if (cResult[32] === visible) {
                                tmp65 = cResult[33];
                              }
                              if (cResult[34] === tmp10.frame) {
                                let tmp68;
                                if (cResult[35] === tmp65) {
                                  tmp68 = cResult[36];
                                }
                                tmp44 = tmp68;
                              }
                              const obj5 = { style: tmp10.frame, children: tmp65 };
                              const tmp71 = closure_23(closure_7, obj5);
                              cResult[34] = tmp10.frame;
                              cResult[35] = tmp65;
                              cResult[36] = tmp71;
                              tmp68 = tmp71;
                            }
                          }
                        }
                      }
                    }
                    const obj6 = { projectId, active: conjureControlActive, visible, onOpenPublishedApp: tmp4, children: items1 };
                    items1 = [tmp58, tmp62];
                    const tmp67 = closure_24(projectId(16901), obj6);
                    cResult[27] = conjureControlActive;
                    cResult[28] = tmp4;
                    class L {
                      constructor() {
                        const tmp = first;
                        if (!tmp) {
                          if (null == closure_3) {
                            const mainFrame = FramesStore.getMainFrame();
                            if (null != mainFrame) {
                              const obj = FramesNativeManagerDefault;
                              obj.leaveFrame(mainFrame.id);
                            }
                            const obj3 = { applicationId, surface };
                            const obj2 = FramesActionCreatorsDefault;
                            const launchFrameResult = obj2.launchFrame(obj3);
                            launchFrameResult.catch(() => closure_1_5(true));
                          }
                        }
                      }
                    }
                    cResult[30] = tmp58;
                    cResult[31] = tmp62;
                    cResult[32] = visible;
                    cResult[33] = tmp67;
                    tmp65 = tmp67;
                  }
                }
              }
              let tmp63 = null;
              if (visible) {
                tmp63 = null;
                if (active) {
                  tmp63 = null;
                  if (!conjureControlActive) {
                    const obj7 = { projectId };
                    tmp63 = closure_23(tmp18(16899), obj7);
                  }
                }
              }
              cResult[22] = conjureControlActive;
              cResult[23] = projectId;
              cResult[24] = active;
              cResult[25] = visible;
              cResult[26] = tmp63;
              tmp62 = tmp63;
            } else if (first) {
              let tmp49;
              let tmp48;
              let tmp52;
              const _Symbol3 = Symbol;
              if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1126).intl;
                const stringResult = intl.string(projectId(3827).lTPbnG);
                const intl2 = tmp(1126).intl;
                const stringResult1 = intl2.string(projectId(3827).e6GiAZ);
                cResult[37] = stringResult;
                cResult[38] = stringResult1;
                tmp49 = stringResult1;
                tmp48 = stringResult;
              } else {
                tmp48 = cResult[37];
                tmp49 = cResult[38];
              }
              const _Symbol4 = Symbol;
              if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                const obj8 = { title: tmp48, body: tmp49, children: closure_23(Button, obj9) };
                obj9 = {
                  variant: "primary",
                  size: "sm",
                  text: intl3.string(projectId(3827)["WFJ/vb"]),
                  onPress() {
                                  return closure_5(false);
                                }
                };
                Button = tmp(5375).Button;
                intl3 = tmp(1126).intl;
                const tmp55 = closure_23(closure_26, obj8);
                cResult[39] = tmp55;
                tmp52 = tmp55;
              } else {
                tmp52 = cResult[39];
              }
              tmp44 = tmp52;
            } else {
              let tmp40;
              const _Symbol2 = Symbol;
              if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp43 = closure_23(closure_5, {});
                cResult[40] = tmp43;
                tmp40 = tmp43;
              } else {
                tmp40 = cResult[40];
              }
              if (cResult[41] !== tmp10.centered) {
                const obj10 = { style: tmp10.centered, children: tmp40 };
                const tmp47 = closure_23(closure_7, obj10);
                cResult[41] = tmp10.centered;
                cResult[42] = tmp47;
                tmp44 = tmp47;
              } else {
                tmp44 = cResult[42];
              }
            }
            return tmp44;
          }
        }
      }
      class L {
        constructor() {
          const tmp = first;
          if (!tmp) {
            if (null == closure_3) {
              const mainFrame = FramesStore.getMainFrame();
              if (null != mainFrame) {
                const obj = FramesNativeManagerDefault;
                obj.leaveFrame(mainFrame.id);
              }
              const obj3 = { applicationId, surface };
              const obj2 = FramesActionCreatorsDefault;
              const launchFrameResult = obj2.launchFrame(obj3);
              launchFrameResult.catch(() => closure_1_5(true));
            }
          }
        }
      }
      const items2 = [applicationId, first, tmp19, tmp16];
      cResult[13] = applicationId;
      cResult[14] = first;
      cResult[15] = tmp19;
      cResult[16] = tmp16;
      cResult[17] = L;
      cResult[18] = items2;
      tmp32 = items2;
      tmp31 = L;
    }
    const tmpResult4 = tmp(12368);
    const conjurePreviewSurface = tmpResult4.getConjurePreviewSurface(stateFromStores, frameSurface);
    cResult[8] = frameSurface;
    cResult[9] = stateFromStores;
    cResult[10] = conjurePreviewSurface;
    tmp16 = conjurePreviewSurface;
  }
  const items3 = [projectId, visible];
  cResult[2] = projectId;
  cResult[3] = visible;
  cResult[4] = items3;
  tmp7 = items3;
}) : (function PreviewFrame(applicationId) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let obj10;
  let obj5;
  let obj7;
  let onOpenPublishedApp;
  let tmp29Result2;
  let tmp31;
  let tmp8Result5;
  let visible;
  applicationId = applicationId.applicationId;
  const projectId = applicationId.projectId;
  const frameSurface = applicationId.frameSurface;
  ({ visible, onOpenPublishedApp } = applicationId);
  if (onOpenPublishedApp === undefined) {
    onOpenPublishedApp = null;
  }
  let memo;
  let first;
  let closure_7;
  let tmp = applicationId;
  let obj = applicationId(frameSurface[21]);
  const conjureControlActive = obj.useConjureControlActive(projectId);
  let obj2 = memo;
  const items = [projectId, visible];
  const active = closure_14(projectId).active;
  const effect = memo.useEffect(() => () => closure_2_13(projectId), items);
  const tmp5 = closure_25();
  let obj3 = applicationId(frameSurface[22]);
  const items1 = [ConjureProjectStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    const obj = conjurePreviewSurface2;
    return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
  });
  const items2 = [stateFromStores, frameSurface];
  memo = memo.useMemo(() => {
    const obj = conjurePreviewSurface2;
    return obj.getConjurePreviewSurface(stateFromStores, frameSurface);
  }, items2);
  const tmp9 = projectId(frameSurface[23])(applicationId, memo);
  let closure_5 = tmp9;
  let tmp10 = null;
  if (null != tmp9) {
    tmp10 = null;
    if (closure_22(tmp9)) {
      tmp10 = tmp9;
    }
  }
  const tmp12 = stateFromStores(obj2.useState(false), 2);
  first = tmp12[0];
  closure_7 = tmp14;
  const tmp15 = stateFromStores(obj2.useState(frameSurface), 2);
  if (tmp15[0] !== frameSurface) {
    tmp15[1](frameSurface);
    tmp12[1](false);
  }
  const items3 = [applicationId, first, tmp9, memo];
  const effect1 = obj2.useEffect(() => {
    const tmp = first;
    if (!tmp) {
      if (null == closure_5) {
        const mainFrame = FramesStore.getMainFrame();
        if (null != mainFrame) {
          const obj = FramesNativeManagerDefault;
          obj.leaveFrame(mainFrame.id);
        }
        const obj3 = { applicationId, surface: memo };
        const obj2 = FramesActionCreatorsDefault;
        const launchFrameResult = obj2.launchFrame(obj3);
        launchFrameResult.catch(() => closure_1_7(true));
      }
    }
  }, items3);
  let tmp20 = visible;
  const tmp8Result = projectId(frameSurface[25]);
  if (visible) {
    tmp20 = null != tmp10;
  }
  tmp8Result(tmp20);
  let applicationId1;
  const tmp8Result4 = projectId(frameSurface[26]);
  if (tmp10 != null) {
    applicationId1 = tmp10.applicationId;
  }
  if (applicationId1 == null) {
    applicationId1 = null;
  }
  tmp8Result4(applicationId1);
  if (null != tmp10) {
    const obj4 = { style: tmp5.frame, children: tmp31(tmp8Result5, obj5) };
    obj5 = { projectId, active: conjureControlActive, visible, onOpenPublishedApp, children: items4 };
    const obj6 = { frameId: tmp10.id, level: tmp(frameSurface[28]).FrameStackLevel.WithinAppContent, presentation: obj7 };
    tmp8Result5 = projectId(frameSurface[30]);
    obj7 = { layoutMode: constants4.FOCUSED };
    const tmp8Result6 = projectId(frameSurface[27]);
    items4 = [closure_23(tmp8Result6, obj6), ];
    let tmp29Result = null;
    const tmp30 = closure_7;
    tmp31 = closure_24;
    if (visible) {
      tmp29Result = null;
      if (active) {
        tmp29Result = null;
        if (!conjureControlActive) {
          const obj8 = { projectId };
          tmp29Result = tmp29(tmp8(tmp2[29]), obj8);
        }
      }
    }
    items4[1] = tmp29Result;
    tmp29Result2 = tmp29(tmp30, obj4);
  } else if (first) {
    const obj9 = { title: intl.string(projectId(frameSurface[32]).lTPbnG), body: intl2.string(projectId(frameSurface[32]).e6GiAZ), children: closure_23(Button, obj10) };
    intl = tmp(tmp2[31]).intl;
    intl2 = tmp(tmp2[31]).intl;
    obj10 = {
      variant: "primary",
      size: "sm",
      text: intl3.string(projectId(frameSurface[32])["WFJ/vb"]),
      onPress() {
          return closure_7(false);
        }
    };
    Button = tmp(tmp2[33]).Button;
    intl3 = tmp(tmp2[31]).intl;
    tmp29Result2 = tmp36(closure_26, obj9);
  } else {
    const obj11 = { style: tmp5.centered, children: closure_23(closure_5, {}) };
    tmp29Result2 = tmp36(closure_7, obj11);
  }
  return tmp29Result2;
});
let closure_27 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewWidget(applicationId) {
  let id;
  let intl;
  let intl2;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(11);
  applicationId = applicationId.applicationId;
  const revoked = applicationId.revoked;
  const tmp4 = closure_25();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function l() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== applicationId) {
    const self = this;
    const self2 = this;
    const obj2 = { applicationId };
    const applicationWidget = new tmp(7314).ApplicationWidget(obj2);
    cResult[2] = applicationId;
    cResult[3] = applicationWidget;
    tmp9 = applicationWidget;
  } else {
    tmp9 = cResult[3];
  }
  if (revoked) {
    let tmp21;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { title: intl.string(_modDef3827["08U+YO"]), body: intl2.string(_modDef3827.pKBfrc) };
      intl = tmp(1126).intl;
      intl2 = tmp(1126).intl;
      const tmp25 = version(closure_26, obj3);
      cResult[4] = tmp25;
      tmp21 = tmp25;
    } else {
      tmp21 = cResult[4];
    }
    tmp17 = tmp21;
  } else {
    if (cResult[5] === stateFromStores) {
      let tmp13;
      if (cResult[6] === tmp9) {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4.widget) {
        if (cResult[9] === tmp13) {
          tmp17 = cResult[10];
        }
      }
      const obj4 = { contentContainerStyle: tmp4.widget, children: tmp13 };
      const tmp20 = version(metroRequire, obj4);
      cResult[8] = tmp4.widget;
      cResult[9] = tmp13;
      cResult[10] = tmp20;
      tmp17 = tmp20;
    }
    const obj5 = { userId: stateFromStores, widget: tmp9 };
    const tmp16 = version(UserProfileApplicationWidgetCardDefault, obj5);
    cResult[5] = stateFromStores;
    cResult[6] = tmp9;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  return tmp17;
}) : (function PreviewWidget(applicationId) {
  let id;
  let intl;
  let intl2;
  let obj4;
  let tmp6Result;
  applicationId = applicationId.applicationId;
  const revoked = applicationId.revoked;
  const tmp = closure_25();
  let obj = applicationId(504);
  const items = [AuthenticationStore];
  [][0] = applicationId;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  if (revoked) {
    const obj2 = { title: intl.string(_modDef3827["08U+YO"]), body: intl2.string(_modDef3827.pKBfrc) };
    intl = tmp2(1126).intl;
    intl2 = tmp2(1126).intl;
    tmp6Result = tmp6(closure_26, obj2);
  } else {
    const obj3 = { contentContainerStyle: tmp.widget, children: closure_23(UserProfileApplicationWidgetCardDefault, obj4) };
    obj4 = { userId: stateFromStores, widget: tmp5 };
    tmp6Result = tmp6(closure_6, obj3);
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewBot(previewApplicationId) {
  let closure_2;
  let closure_3;
  let first;
  let id;
  let state;
  let tmp10;
  let tmp16;
  let tmp9;
  let tmp = id;
  let tmp2 = dependencyMap;
  let obj = id(576);
  const cResult = obj.c(43);
  previewApplicationId = previewApplicationId.previewApplicationId;
  const tmp4 = closure_25();
  let obj2 = id(6842);
  const application = obj2.useApplication(previewApplicationId);
  const data = application.data;
  id = undefined;
  if (data != null) {
    const bot = data.bot;
    if (bot != null) {
      id = bot.id;
    }
  }
  if (id == null) {
    id = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function u() {
      if (null == id) {
        return null;
      } else {
        const dMFromUserId = ChannelStore.getDMFromUserId(tmp);
        let channel = null;
        const obj = ChannelStore;
        if (null != dMFromUserId) {
          channel = obj.getChannel(dMFromUserId);
        }
        return channel;
      }
    };
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
  const tmp13 = _slicedToArray(react.useState(null), 2);
  dependencyMap = tmp13[1];
  const tmp12 = _slicedToArray;
  _slicedToArray = tmp14;
  const tmp12Result = tmp12(react.useState(0), 2);
  [tmp16, react] = tmp12Result;
  if (cResult[4] === id) {
    if (cResult[5] === stateFromStores) {
      let tmp17;
      if (cResult[6] === (null != id && tmp13[0] === id)) {
        tmp17 = cResult[7];
      }
      if (cResult[8] === tmp16) {
        if (cResult[9] === id) {
          if (cResult[10] === stateFromStores) {
            let tmp18;
            let tmp22;
            let tmp21;
            let tmp24;
            let tmp26;
            let tmp25;
            let tmp29;
            let tmp28;
            if (cResult[11] === (null != id && tmp13[0] === id)) {
              tmp18 = cResult[12];
            }
            const effect = obj4.useEffect(tmp17, tmp18);
            let id1;
            if (stateFromStores != null) {
              id1 = stateFromStores.id;
            }
            if (id1 == null) {
              id1 = null;
            }
            if (cResult[13] !== id1) {
              class V {
                constructor() {
                  if (null != id1) {
                    const obj = ChannelActionCreatorsDefault;
                    obj.preload(closure_20, tmp);
                  }
                }
              }
              const items2 = [id1];
              cResult[13] = id1;
              cResult[14] = V;
              cResult[15] = items2;
              tmp22 = items2;
              tmp21 = V;
            } else {
              class V {
                constructor() {
                  if (null != id1) {
                    const obj = ChannelActionCreatorsDefault;
                    obj.preload(closure_20, tmp);
                  }
                }
              }
              tmp22 = cResult[15];
            }
            const effect1 = obj4.useEffect(tmp21, tmp22);
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class V {
                constructor() {
                  if (null != id1) {
                    const obj = ChannelActionCreatorsDefault;
                    obj.preload(closure_20, tmp);
                  }
                }
              }
              const items3 = [ReadStateStore];
              cResult[16] = items3;
              tmp24 = items3;
            } else {
              class V {
                constructor() {
                  if (null != id1) {
                    const obj = ChannelActionCreatorsDefault;
                    obj.preload(closure_20, tmp);
                  }
                }
              }
            }
            if (cResult[17] !== id1) {
              class Y {
                constructor() {
                  const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                  return hasUnreadResult;
                }
              }
              const items4 = [id1];
              cResult[17] = id1;
              cResult[18] = items4;
              cResult[19] = Y;
              tmp26 = Y;
              tmp25 = items4;
            } else {
              class Y {
                constructor() {
                  const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                  return hasUnreadResult;
                }
              }
              tmp26 = cResult[19];
            }
            const tmpResult3 = tmp(504);
            const stateFromStores1 = tmpResult3.useStateFromStores(tmp24, tmp26, tmp25);
            const _Symbol2 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              class Y {
                constructor() {
                  const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                  return hasUnreadResult;
                }
              }
              const items5 = [AppStateStore];
              const fn2 = function $() {
                return state.getState() === constants.ACTIVE;
              };
              cResult[20] = items5;
              cResult[21] = fn2;
              tmp29 = fn2;
              tmp28 = items5;
            } else {
              class Y {
                constructor() {
                  const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                  return hasUnreadResult;
                }
              }
              tmp29 = cResult[21];
            }
            const tmpResult4 = tmp(504);
            const stateFromStores2 = tmpResult4.useStateFromStores(tmp28, tmp29);
            if (cResult[22] === stateFromStores2) {
              class Y {
                constructor() {
                  const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                  return hasUnreadResult;
                }
              }
            }
            function te() {
              let tmp2 = null != stateFromStores;
              const tmp = stateFromStores;
              if (tmp2) {
                tmp2 = stateFromStores1;
              }
              if (tmp2) {
                tmp2 = stateFromStores2;
              }
              if (tmp2) {
                const obj2 = { section: constants3.CHANNEL, object: constants.ACK_INCOMING_MESSAGE, objectType: constants2.ACK_AUTOMATIC };
                const obj = ReadStateActionCreators;
                obj.ackChannel(tmp, obj2);
              }
            }
            const items6 = [stateFromStores, stateFromStores1, stateFromStores2];
            cResult[22] = stateFromStores2;
            cResult[23] = stateFromStores;
            cResult[24] = stateFromStores1;
            cResult[25] = te;
            cResult[26] = items6;
          }
        }
      }
      const items7 = [id, stateFromStores, null != id && tmp13[0] === id, tmp16];
      cResult[8] = tmp16;
      cResult[9] = id;
      cResult[10] = stateFromStores;
      cResult[11] = null != id && tmp13[0] === id;
      cResult[12] = items7;
      tmp18 = items7;
    }
  }
  class T {
    constructor() {
      if (null != c0) {
        tmp2 = closure_1;
        if (null == closure_1) {
          tmp3 = closure_3;
          if (!tmp3) {
            flag = false;
            c0 = false;
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj = closure_1(closure_2[37]);
            obj1 = { recipientIds: null, navigateToChannel: false };
            obj1.recipientIds = tmp;
            openPrivateChannelResult = obj.openPrivateChannel(obj1);
            catchPromise = openPrivateChannelResult.catch(() => {
              const tmp = c0;
              if (!tmp) {
                closure_2(id);
              }
            });
            return () => {
              c0 = true;
            };
          }
        }
      }
      return;
    }
  }
  cResult[4] = id;
  cResult[5] = stateFromStores;
  cResult[6] = null != id && tmp13[0] === id;
  cResult[7] = T;
  tmp17 = T;
}) : (function PreviewBot(previewApplicationId) {
  let closure_2;
  let closure_3;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let items8;
  let state;
  let tmp19Result;
  let tmp19Result2;
  let tmp29Result;
  let id;
  let stateFromStores;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let id1;
  let stateFromStores1;
  let stateFromStores2;
  previewApplicationId = previewApplicationId.previewApplicationId;
  let tmp = closure_25();
  let tmp2 = id;
  let tmp3 = dependencyMap;
  let obj = id(6842);
  const application = obj.useApplication(previewApplicationId);
  const data = application.data;
  id = undefined;
  const isLoading = application.isLoading;
  if (data != null) {
    const bot = data.bot;
    if (bot != null) {
      id = bot.id;
    }
  }
  if (id == null) {
    id = null;
  }
  const items = [ChannelStore];
  const items1 = [id];
  const tmp2Result = tmp2(504);
  stateFromStores = tmp2Result.useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      const dMFromUserId = ChannelStore.getDMFromUserId(tmp);
      let channel = null;
      const obj = ChannelStore;
      if (null != dMFromUserId) {
        channel = obj.getChannel(dMFromUserId);
      }
      return channel;
    }
  }, items1);
  const tmp8 = _slicedToArray(react.useState(null), 2);
  dependencyMap = tmp8[1];
  const tmp7 = _slicedToArray;
  _slicedToArray = tmp9;
  const tmp7Result = tmp7(react.useState(0), 2);
  react = tmp7Result[1];
  const items2 = [id, stateFromStores, null != id && tmp8[0] === id, tmp7Result[0]];
  const effect = obj3.useEffect(() => {
    let tmp;
    if (null != c0) {
      if (null == stateFromStores) {
        const tmp3 = closure_3;
        if (!tmp3) {
          c0 = false;
          const obj2 = { recipientIds: tmp, navigateToChannel: false };
          const obj = stateFromStores(closure_2[37]);
          const openPrivateChannelResult = obj.openPrivateChannel(obj2);
          openPrivateChannelResult.catch(() => {
            const tmp = c0;
            if (!tmp) {
              closure_2(id);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
  }, items2);
  id1 = undefined;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  if (id1 == null) {
    id1 = null;
  }
  const items3 = [id1];
  const effect1 = obj3.useEffect(() => {
    if (null != id1) {
      const obj = ChannelActionCreatorsDefault;
      obj.preload(closure_20, tmp);
    }
  }, items3);
  const items4 = [ReadStateStore];
  const items5 = [id1];
  const tmp2Result4 = tmp2(504);
  stateFromStores1 = tmp2Result4.useStateFromStores(items4, () => {
    const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
    return hasUnreadResult;
  }, items5);
  const items6 = [AppStateStore];
  const tmp2Result5 = tmp2(504);
  stateFromStores2 = tmp2Result5.useStateFromStores(items6, () => state.getState() === constants.ACTIVE);
  const items7 = [stateFromStores, stateFromStores1, stateFromStores2];
  const effect2 = obj3.useEffect(() => {
    let tmp2 = null != stateFromStores;
    const tmp = stateFromStores;
    if (tmp2) {
      tmp2 = stateFromStores1;
    }
    if (tmp2) {
      tmp2 = stateFromStores2;
    }
    if (tmp2) {
      const obj2 = { section: constants3.CHANNEL, object: constants.ACK_INCOMING_MESSAGE, objectType: constants2.ACK_AUTOMATIC };
      const obj = ReadStateActionCreators;
      obj.ackChannel(tmp, obj2);
    }
  }, items7);
  const callback = obj3.useCallback(() => {
    closure_2(null);
    closure_4((arg0) => arg0 + 1);
  }, []);
  const ref = react.useRef(null);
  if (!isLoading) {
    if (null != id) {
      return tmp19Result2;
    }
    let obj2 = { title: intl.string(stateFromStores(3827)["VP/O8s"]), body: intl2.string(stateFromStores(3827).Sl9ITD), children: tmp19Result };
    intl = tmp2(1126).intl;
    intl2 = tmp2(1126).intl;
    tmp19Result = null;
    const tmp20 = closure_26;
    if (null != id && tmp8[0] === id) {
      const obj4 = { variant: "secondary", size: "sm", text: intl3.string(tmp2(1126).t["5911Lb"]), onPress: callback };
      const Button = tmp2(5375).Button;
      intl3 = tmp2(1126).intl;
      tmp19Result = tmp19(Button, obj4);
    }
    tmp19Result2 = tmp19(tmp20, obj2);
  }
  if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: closure_23(id1, {}) };
    tmp29Result = closure_23(stateFromStores2, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: items8 };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: ref, screenIndex: "conjure-preview", alwaysRespectKeyboard: true, disableGradient: true };
    items8 = [closure_23(stateFromStores(10342), obj7, stateFromStores.id), ];
    let tmp31Result = null;
    const tmp29 = closure_24;
    const tmp2Result6 = tmp2(1381);
    const tmp30 = stateFromStores2;
    const tmp31 = closure_23;
    if (tmp2Result6.isAndroid()) {
      tmp31Result = tmp31(tmp2(16905).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp31Result;
    tmp29Result = tmp29(tmp30, obj6);
  }
  tmp19Result2 = tmp29Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativePreview(arg0) {
  let availability;
  let frameHostAvailable;
  let frameSurface;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let mode;
  let obj3;
  let permissionsGate;
  let previewApplicationId;
  let projectId;
  let tmp25;
  let tmp26;
  let widgetApplicationId;
  const obj = react2;
  const cResult = obj.c(17);
  ({ projectId, previewApplicationId, mode, availability, frameSurface, widgetApplicationId, frameHostAvailable, permissionsGate } = arg0);
  if (null != permissionsGate) {
    let tmp30;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1126).intl;
      const stringResult = intl5.string(_modDef3827.xu1I8B);
      const intl6 = tmp(1126).intl;
      const stringResult1 = intl6.string(_modDef3827["8qJtGr"]);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp25 = stringResult;
      tmp26 = stringResult1;
    } else {
      [tmp25, tmp26] = cResult;
    }
    const _Symbol3 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl7 = tmp(1126).intl;
      const stringResult2 = intl7.string(_modDef3827["Nub/J6"]);
      cResult[2] = stringResult2;
      tmp30 = stringResult2;
    } else {
      tmp30 = cResult[2];
    }
    if (cResult[3] === permissionsGate.loading) {
      let tmp33;
      if (cResult[4] === permissionsGate.onReviewPermissions) {
        tmp33 = cResult[5];
      }
      return tmp33;
    }
    const obj2 = { title: tmp25, body: tmp26, children: version(components_Button_Button.Button, obj3) };
    obj3 = { variant: "primary", size: "sm", text: tmp30, onPress: null, loading: null };
    ({ onReviewPermissions: obj8.onPress, loading: obj8.loading } = permissionsGate);
    const tmp36 = version(closure_26, obj2);
    cResult[3] = permissionsGate.loading;
    cResult[4] = permissionsGate.onReviewPermissions;
    cResult[5] = tmp36;
    tmp33 = tmp36;
  } else if ("frame" === mode) {
    let tmp19Result;
    if (cResult[6] === frameHostAvailable) {
      if (cResult[7] === frameSurface) {
        if (cResult[8] === previewApplicationId) {
          let tmp18;
          if (cResult[9] === projectId) {
            tmp18 = cResult[10];
          }
          return tmp18;
        }
      }
    }
    if (frameHostAvailable) {
      const obj4 = { applicationId: previewApplicationId, projectId, frameSurface, visible: true };
      tmp19Result = tmp19(closure_27, obj4);
    } else {
      const obj5 = { title: intl3.string(_modDef3827["7k4GyN"]), body: intl4.string(_modDef3827.zdIy3R) };
      intl3 = tmp(1126).intl;
      intl4 = tmp(1126).intl;
      tmp19Result = tmp19(closure_26, obj5);
    }
    cResult[6] = frameHostAvailable;
    cResult[7] = frameSurface;
    cResult[8] = previewApplicationId;
    cResult[9] = projectId;
    cResult[10] = tmp19Result;
    tmp18 = tmp19Result;
  } else if ("widget" === mode) {
    if (cResult[11] === availability) {
      let tmp14;
      if (cResult[12] === widgetApplicationId) {
        tmp14 = cResult[13];
      }
      return tmp14;
    }
    let tmp15 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === availability.profileState };
      tmp15 = version(closure_28, obj6);
    }
    cResult[11] = availability;
    cResult[12] = widgetApplicationId;
    cResult[13] = tmp15;
    tmp14 = tmp15;
  } else if ("bot" === mode) {
    let tmp10;
    if (cResult[14] !== previewApplicationId) {
      const obj7 = { previewApplicationId };
      const tmp13 = version(closure_29, obj7);
      cResult[14] = previewApplicationId;
      cResult[15] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[15];
    }
    return tmp10;
  } else if ("overlay" === mode) {
    return null;
  } else if (null === mode) {
    let tmp5;
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      const obj15 = { title: intl.string(_modDef3827["7k4GyN"]), body: intl2.string(_modDef3827.zdIy3R) };
      intl = tmp(1126).intl;
      intl2 = tmp(1126).intl;
      const tmp9 = version(closure_26, obj15);
      cResult[16] = tmp9;
      tmp5 = tmp9;
    } else {
      tmp5 = cResult[16];
    }
    return tmp5;
  }
}) : (function ConjureNativePreview(arg0) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let mode;
  let obj3;
  let permissionsGate;
  let previewApplicationId;
  let widgetApplicationId;
  ({ previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
  if (null != permissionsGate) {
    const obj2 = { title: intl5.string(_modDef3827.xu1I8B), body: intl6.string(_modDef3827["8qJtGr"]), children: version(Button, obj3) };
    intl5 = intl8.intl;
    intl6 = intl8.intl;
    obj3 = { variant: "primary", size: "sm", text: intl7.string(_modDef3827["Nub/J6"]), onPress: null, loading: null };
    Button = components_Button_Button.Button;
    intl7 = intl8.intl;
    ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
    return version(closure_26, obj2);
  } else if ("frame" === mode) {
    let tmp15Result;
    if (tmp4) {
      const obj4 = { applicationId: previewApplicationId, projectId: tmp, frameSurface: tmp3, visible: true };
      tmp15Result = tmp15(closure_27, obj4);
    } else {
      const obj5 = { title: intl3.string(_modDef3827["7k4GyN"]), body: intl4.string(_modDef3827.zdIy3R) };
      intl3 = intl8.intl;
      intl4 = intl8.intl;
      tmp15Result = tmp15(closure_26, obj5);
    }
    return tmp15Result;
  } else if ("widget" === mode) {
    let tmp12 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === tmp2.profileState };
      tmp12 = version(closure_28, obj6);
    }
    return tmp12;
  } else if ("bot" === mode) {
    const obj13 = { previewApplicationId };
    return version(closure_29, obj13);
  } else if ("overlay" === mode) {
    return null;
  } else if (null === mode) {
    const obj = { title: intl.string(_modDef3827["7k4GyN"]), body: intl2.string(_modDef3827.zdIy3R) };
    intl = intl8.intl;
    intl2 = intl8.intl;
    return version(closure_26, obj);
  }
});
const result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default tmp9;
export const leaveConjurePreviewFrame = function leaveConjurePreviewFrame(arg0) {
  const obj = conjurePreviewSurface2;
  const conjureBuilderPreviewFrames = obj.getConjureBuilderPreviewFrames(arg0);
  for (const item10011 of conjureBuilderPreviewFrames) {
    let obj2 = FramesNativeManagerDefault;
    let leaveFrameResult = obj2.leaveFrame(item10011.id);
    continue;
  }
};
export const PreviewFrame = tmp8;
