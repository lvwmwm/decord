// Module ID: 17086
// Function ID: 17087
// Name: ConjureNativePreview
// Dependencies: [32, 19, 17, 10807, 502, 2065, 6035, 1999, 17030, 10651, 1085, 10802, 21, 5092, 587, 558, 576, 5088, 6181, 11415, 10821, 11419, 504, 17087, 10804, 17088, 17089, 17090, 17094, 17095, 17097, 1126, 3849, 5379, 7325, 13242, 6852, 7014, 6799, 10362, 1382, 17101, 2]
// Exports: leaveConjurePreviewFrame

// Module 17086 (ConjureNativePreview)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import Card_Card from "Card/Card" /* 6181 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6799 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7014 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7325 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10804 */;
import leaveFrame from "leaveFrame" /* 10821 */;
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 11415 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 13242 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore from "FramesStore" /* 10807 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 17030 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10651 */;
import Constants from "Constants" /* 1085 */;
import FramesConstants from "FramesConstants" /* 10802 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
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
                const tmp24 = closure_23(metroImportDefault, obj2);
                cResult[17] = tmp4.centered;
                cResult[18] = tmp18;
                cResult[19] = tmp24;
                tmp21 = tmp24;
              }
              const obj3 = { variant: "primary", style: tmp4.card, children: tmp14 };
              const tmp20 = closure_23(Card_Card.Card, obj3);
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
    let tmp8 = null;
    if (null != body) {
      const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.cardText, children: body };
      tmp8 = closure_23(tmp(5088).Text, obj6);
    }
    cResult[3] = body;
    cResult[4] = tmp4.cardText;
    cResult[5] = tmp8;
    tmp7 = tmp8;
  }
  const obj7 = { variant: "heading-md/semibold", color: "text-default", style: tmp4.cardText, children: title };
  const tmp6 = closure_23(Text_Text.Text, obj7);
  cResult[0] = tmp4.cardText;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function StatusCard(body) {
  let Card;
  let children;
  let items;
  let items1;
  let obj2;
  let obj3;
  let title;
  body = body.body;
  ({ title, children } = body);
  const tmp = closure_25();
  const obj = { style: tmp.centered, children: closure_23(Card, obj2) };
  obj2 = { variant: "primary", style: tmp.card, children: closure_24(metroImportDefault, obj3) };
  obj3 = { style: tmp.cardBody, children: items1 };
  const obj4 = { style: tmp.cardCopy, children: items };
  Card = Card_Card.Card;
  items = [, ];
  const obj5 = { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title };
  items[0] = closure_23(Text_Text.Text, obj5);
  let tmp2Result = null;
  if (null != body) {
    const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
    tmp2Result = tmp2(Text_Text.Text, obj6);
  }
  items[1] = tmp2Result;
  items1 = [closure_24(metroImportDefault, obj4), children];
  return closure_23(metroImportDefault, obj);
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
  const tmpResult = tmp(11419);
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
      const tmp19 = projectId(17087)(applicationId, tmp16);
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
            const tmp18Result = projectId(17088);
            if (visible) {
              tmp35 = null != tmp21;
            }
            tmp18Result(tmp35);
            let applicationId1;
            const tmp18Result3 = projectId(17089);
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
                const obj4 = { frameId: tmp21.id, level: tmp(17094).FrameStackLevel.WithinAppContent, presentation: tmp56 };
                const tmp18Result4 = projectId(17090);
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
                    const tmp67 = closure_24(projectId(17097), obj6);
                    cResult[27] = conjureControlActive;
                    cResult[28] = tmp4;
                    class K {
                      constructor() {
                        const tmp = first;
                        if (!tmp) {
                          if (null == closure_3) {
                            const mainFrame = FramesStore.getMainFrame();
                            if (null != mainFrame) {
                              const obj = leaveFrame;
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
                    tmp63 = closure_23(tmp18(17095), obj7);
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
                const stringResult = intl.string(projectId(3849).lTPbnG);
                const intl2 = tmp(1126).intl;
                const stringResult1 = intl2.string(projectId(3849).e6GiAZ);
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
                  text: intl3.string(projectId(3849)["WFJ/vb"]),
                  onPress() {
                                  return closure_5(false);
                                }
                };
                Button = tmp(5379).Button;
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
      class K {
        constructor() {
          const tmp = first;
          if (!tmp) {
            if (null == closure_3) {
              const mainFrame = FramesStore.getMainFrame();
              if (null != mainFrame) {
                const obj = leaveFrame;
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
      cResult[17] = K;
      cResult[18] = items2;
      tmp32 = items2;
      tmp31 = K;
    }
    const tmpResult4 = tmp(11415);
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
          const obj = leaveFrame;
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
    const applicationWidget = new tmp(7325).ApplicationWidget(obj2);
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
      const obj3 = { title: intl.string(_modDef3849["08U+YO"]), body: intl2.string(_modDef3849.pKBfrc) };
      intl = tmp(1126).intl;
      intl2 = tmp(1126).intl;
      const tmp25 = closure_23(closure_26, obj3);
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
      const tmp20 = closure_23(metroRequire, obj4);
      cResult[8] = tmp4.widget;
      cResult[9] = tmp13;
      cResult[10] = tmp20;
      tmp17 = tmp20;
    }
    const obj5 = { userId: stateFromStores, widget: tmp9 };
    const tmp16 = closure_23(UserProfileApplicationWidgetCardDefault, obj5);
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
    const obj2 = { title: intl.string(_modDef3849["08U+YO"]), body: intl2.string(_modDef3849.pKBfrc) };
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
  let obj2 = id(6852);
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
              class H {
                constructor() {
                  if (null != id1) {
                    const obj = ChannelActionCreatorsDefault;
                    obj.preload(closure_20, tmp);
                  }
                }
              }
              const items2 = [id1];
              cResult[13] = id1;
              cResult[14] = H;
              cResult[15] = items2;
              tmp22 = items2;
              tmp21 = H;
            } else {
              class H {
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
              class H {
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
              class H {
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
  let obj = id(6852);
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
    let obj2 = { title: intl.string(stateFromStores(3849)["VP/O8s"]), body: intl2.string(stateFromStores(3849).Sl9ITD), children: tmp19Result };
    intl = tmp2(1126).intl;
    intl2 = tmp2(1126).intl;
    tmp19Result = null;
    const tmp20 = closure_26;
    if (null != id && tmp8[0] === id) {
      const obj4 = { variant: "secondary", size: "sm", text: intl3.string(tmp2(1126).t["5911Lb"]), onPress: callback };
      const Button = tmp2(5379).Button;
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
    items8 = [closure_23(stateFromStores(10362), obj7, stateFromStores.id), ];
    let tmp31Result = null;
    const tmp29 = closure_24;
    const tmp2Result6 = tmp2(1382);
    const tmp30 = stateFromStores2;
    const tmp31 = closure_23;
    if (tmp2Result6.isAndroid()) {
      tmp31Result = tmp31(tmp2(17101).PortalKeyboardRenderer, { portal: true });
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
  let obj5;
  let permissionsGate;
  let previewApplicationId;
  let projectId;
  let widgetApplicationId;
  const obj = react2;
  const cResult = obj.c(22);
  ({ projectId, previewApplicationId, mode, availability, frameSurface, widgetApplicationId, frameHostAvailable, permissionsGate } = arg0);
  let previewBotMissing;
  if (permissionsGate != null) {
    previewBotMissing = permissionsGate.previewBotMissing;
  }
  if (true === previewBotMissing) {
    let first;
    let tmp42;
    const _Symbol4 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl8 = tmp(1126).intl;
      const stringResult = intl8.string(_modDef3849.SWXbpN);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    const _Symbol5 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl9 = tmp(1126).intl;
      const stringResult1 = intl9.string(_modDef3849.FH2Udn);
      cResult[1] = stringResult1;
      tmp42 = stringResult1;
    } else {
      tmp42 = cResult[1];
    }
    if (cResult[2] === permissionsGate.loading) {
      let tmp45;
      if (cResult[3] === permissionsGate.onReviewPermissions) {
        tmp45 = cResult[4];
      }
      return tmp45;
    }
    const obj2 = { title: first, children: closure_23(components_Button_Button.Button, obj3) };
    obj3 = { variant: "primary", size: "sm", text: tmp42, onPress: null, loading: null };
    ({ onReviewPermissions: obj10.onPress, loading: obj10.loading } = permissionsGate);
    const tmp48 = closure_23(closure_26, obj2);
    cResult[2] = permissionsGate.loading;
    cResult[3] = permissionsGate.onReviewPermissions;
    cResult[4] = tmp48;
    tmp45 = tmp48;
  } else if (null != permissionsGate) {
    let tmp27;
    let tmp26;
    let tmp31;
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1126).intl;
      const stringResult2 = intl5.string(_modDef3849.xu1I8B);
      const intl6 = tmp(1126).intl;
      const stringResult3 = intl6.string(_modDef3849["8qJtGr"]);
      cResult[5] = stringResult2;
      cResult[6] = stringResult3;
      tmp27 = stringResult3;
      tmp26 = stringResult2;
    } else {
      tmp26 = cResult[5];
      tmp27 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl7 = tmp(1126).intl;
      const stringResult4 = intl7.string(_modDef3849["Nub/J6"]);
      cResult[7] = stringResult4;
      tmp31 = stringResult4;
    } else {
      tmp31 = cResult[7];
    }
    if (cResult[8] === permissionsGate.loading) {
      let tmp34;
      if (cResult[9] === permissionsGate.onReviewPermissions) {
        tmp34 = cResult[10];
      }
      return tmp34;
    }
    const obj4 = { title: tmp26, body: tmp27, children: closure_23(components_Button_Button.Button, obj5) };
    obj5 = { variant: "primary", size: "sm", text: tmp31, onPress: null, loading: null };
    ({ onReviewPermissions: obj8.onPress, loading: obj8.loading } = permissionsGate);
    const tmp37 = closure_23(closure_26, obj4);
    cResult[8] = permissionsGate.loading;
    cResult[9] = permissionsGate.onReviewPermissions;
    cResult[10] = tmp37;
    tmp34 = tmp37;
  } else if ("frame" === mode) {
    let tmp20Result;
    if (cResult[11] === frameHostAvailable) {
      if (cResult[12] === frameSurface) {
        if (cResult[13] === previewApplicationId) {
          let tmp19;
          if (cResult[14] === projectId) {
            tmp19 = cResult[15];
          }
          return tmp19;
        }
      }
    }
    if (frameHostAvailable) {
      const obj6 = { applicationId: previewApplicationId, projectId, frameSurface, visible: true };
      tmp20Result = tmp20(closure_27, obj6);
    } else {
      const obj7 = { title: intl3.string(_modDef3849["7k4GyN"]), body: intl4.string(_modDef3849.zdIy3R) };
      intl3 = tmp(1126).intl;
      intl4 = tmp(1126).intl;
      tmp20Result = tmp20(closure_26, obj7);
    }
    cResult[11] = frameHostAvailable;
    cResult[12] = frameSurface;
    cResult[13] = previewApplicationId;
    cResult[14] = projectId;
    cResult[15] = tmp20Result;
    tmp19 = tmp20Result;
  } else if ("widget" === mode) {
    if (cResult[16] === availability) {
      let tmp15;
      if (cResult[17] === widgetApplicationId) {
        tmp15 = cResult[18];
      }
      return tmp15;
    }
    let tmp16 = null;
    if (null != widgetApplicationId) {
      const obj9 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === availability.profileState };
      tmp16 = closure_23(closure_28, obj9);
    }
    cResult[16] = availability;
    cResult[17] = widgetApplicationId;
    cResult[18] = tmp16;
    tmp15 = tmp16;
  } else if ("bot" === mode) {
    let tmp11;
    if (cResult[19] !== previewApplicationId) {
      const obj19 = { previewApplicationId };
      const tmp14 = closure_23(closure_29, obj19);
      cResult[19] = previewApplicationId;
      cResult[20] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[20];
    }
    return tmp11;
  } else if ("overlay" === mode) {
    return null;
  } else if (null === mode) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
      const obj20 = { title: intl.string(_modDef3849["7k4GyN"]), body: intl2.string(_modDef3849.zdIy3R) };
      intl = tmp(1126).intl;
      intl2 = tmp(1126).intl;
      const tmp10 = closure_23(closure_26, obj20);
      cResult[21] = tmp10;
      tmp6 = tmp10;
    } else {
      tmp6 = cResult[21];
    }
    return tmp6;
  }
}) : (function ConjureNativePreview(arg0) {
  let Button;
  let Button2;
  let availability;
  let frameHostAvailable;
  let frameSurface;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let mode;
  let obj3;
  let obj5;
  let permissionsGate;
  let previewApplicationId;
  let projectId;
  let widgetApplicationId;
  ({ previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
  let previewBotMissing;
  ({ projectId, availability, frameSurface, frameHostAvailable } = arg0);
  if (permissionsGate != null) {
    previewBotMissing = permissionsGate.previewBotMissing;
  }
  if (true === previewBotMissing) {
    const obj2 = { title: intl8.string(_modDef3849.SWXbpN), children: closure_23(Button2, obj3) };
    intl8 = intl10.intl;
    obj3 = { variant: "primary", size: "sm", text: intl9.string(_modDef3849.FH2Udn), onPress: null, loading: null };
    Button2 = components_Button_Button.Button;
    intl9 = intl10.intl;
    ({ onReviewPermissions: obj9.onPress, loading: obj9.loading } = permissionsGate);
    return closure_23(closure_26, obj2);
  } else if (null != permissionsGate) {
    const obj4 = { title: intl5.string(_modDef3849.xu1I8B), body: intl6.string(_modDef3849["8qJtGr"]), children: closure_23(Button, obj5) };
    intl5 = intl10.intl;
    intl6 = intl10.intl;
    obj5 = { variant: "primary", size: "sm", text: intl7.string(_modDef3849["Nub/J6"]), onPress: null, loading: null };
    Button = components_Button_Button.Button;
    intl7 = intl10.intl;
    ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
    return closure_23(closure_26, obj4);
  } else if ("frame" === mode) {
    let tmp12Result;
    if (frameHostAvailable) {
      const obj6 = { applicationId: previewApplicationId, projectId, frameSurface, visible: true };
      tmp12Result = tmp12(closure_27, obj6);
    } else {
      const obj8 = { title: intl3.string(_modDef3849["7k4GyN"]), body: intl4.string(_modDef3849.zdIy3R) };
      intl3 = intl10.intl;
      intl4 = intl10.intl;
      tmp12Result = tmp12(closure_26, obj8);
    }
    return tmp12Result;
  } else if ("widget" === mode) {
    let tmp9 = null;
    if (null != widgetApplicationId) {
      const obj17 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === availability.profileState };
      tmp9 = closure_23(closure_28, obj17);
    }
    return tmp9;
  } else if ("bot" === mode) {
    const obj18 = { previewApplicationId };
    return closure_23(closure_29, obj18);
  } else if ("overlay" === mode) {
    return null;
  } else if (null === mode) {
    const obj = { title: intl.string(_modDef3849["7k4GyN"]), body: intl2.string(_modDef3849.zdIy3R) };
    intl = intl10.intl;
    intl2 = intl10.intl;
    return closure_23(closure_26, obj);
  }
});
const result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default tmp9;
export const leaveConjurePreviewFrame = function leaveConjurePreviewFrame(arg0) {
  const obj = conjurePreviewSurface2;
  const conjureBuilderPreviewFrames = obj.getConjureBuilderPreviewFrames(arg0);
  for (const item10011 of conjureBuilderPreviewFrames) {
    let obj2 = leaveFrame;
    let leaveFrameResult = obj2.leaveFrame(item10011.id);
    continue;
  }
};
export const PreviewFrame = tmp8;
