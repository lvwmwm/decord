// Module ID: 16978
// Function ID: 16979
// Name: VibegrationsNativePreview
// Dependencies: [32, 19, 17, 9343, 502, 2045, 4805, 1983, 16949, 1078, 9344, 21, 4790, 580, 558, 568, 4786, 5856, 9590, 13218, 16979, 9599, 16980, 16981, 16988, 1119, 3714, 5220, 504, 7906, 9231, 7442, 4803, 7389, 10370, 1368, 16990, 2]
// Exports: leaveVibegrationsPreviewFrame

// Module 16978 (VibegrationsNativePreview)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import _modDef3714 from "module_3714" /* 3714 */;
import Text_Text from "Text/Text" /* 4786 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4803 */;
import components_Button_Button from "components/Button/Button" /* 5220 */;
import Card from "Card" /* 5856 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7389 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 9231 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9590 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9599 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9343 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ReadStateStore from "ReadStateStore" /* 4805 */;
import AppStateStore from "AppStateStore" /* 1983 */;

const initialize = intl(504);
const util = intl(1119);
const UserProfileApplicationWidgetTypes = intl(7906);
require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const vibegrationsDesignFeedbackStore = fn(16949);
({ exitVibegrationsDesignFeedback: map1, useVibegrationsDesignFeedback: closure_14 } = vibegrationsDesignFeedbackStore);
const Constants = fn(1078);
({ AnalyticsObjects: closure_15, AnalyticsObjectTypes: closure_16, AnalyticsSections: closure_17, AppStates: closure_18, ME: closure_19 } = Constants);
const FramesConstants = fn(9344);
({ FrameLayoutModes: closure_20, isLaunched: closure_21, MAIN_SURFACE: closure_22, makeFrameId: closure_23 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_24, jsxs: closure_25 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { frame: { flex: 1 }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, card: { alignSelf: "stretch" }, cardBody: null, cardCopy: null, cardText: null, widget: null, controlOverlay: null, controlText: null, dm: null };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
obj2.cardBody = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj4 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.cardCopy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.cardText = { textAlign: "center" };
let obj5 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.widget = { padding: nativeDefault.space.PX_16 };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "flex-end", padding: nativeDefault.space.PX_16 };
obj2.controlOverlay = rect;
let obj6 = { padding: nativeDefault.space.PX_16 };
obj2.controlText = { textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8 };
obj2.dm = { flex: 1 };
let closure_26 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ title, body, children } = arg0);
  const tmp4 = closure_26();
  if (cResult[0] === tmp4.cardText) {
    if (cResult[1] === title) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === body) {
      if (cResult[4] === tmp4.cardText) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.cardCopy) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] === children) {
            if (cResult[11] === tmp4.cardBody) {
              if (cResult[12] === tmp10) {
                let tmp14 = cResult[13];
              }
              if (cResult[14] === tmp4.card) {
                if (cResult[15] === tmp14) {
                  let tmp18 = cResult[16];
                }
                if (cResult[17] === tmp4.centered) {
                  if (cResult[18] === tmp18) {
                    let tmp21 = cResult[19];
                  }
                  return tmp21;
                }
                const obj2 = { style: tmp4.centered, children: tmp18 };
                const tmp24 = closure_1_24(React5, obj2);
                cResult[17] = tmp4.centered;
                cResult[18] = tmp18;
                cResult[19] = tmp24;
                tmp21 = tmp24;
              }
              const obj3 = { variant: "primary", style: tmp4.card, children: tmp14 };
              const tmp20 = closure_1_24(tmp(5856).Card, obj3);
              cResult[14] = tmp4.card;
              cResult[15] = tmp14;
              cResult[16] = tmp20;
              tmp18 = tmp20;
            }
          }
          const obj4 = { style: tmp4.cardBody, children: null };
          const items = [tmp10, children];
          obj4.children = items;
          const tmp17 = closure_1_25(React5, obj4);
          cResult[10] = children;
          cResult[11] = tmp4.cardBody;
          cResult[12] = tmp10;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
      }
      const obj5 = { style: tmp4.cardCopy, children: null };
      const items1 = [tmp5, tmp7];
      obj5.children = items1;
      const tmp13 = closure_1_25(React5, obj5);
      cResult[6] = tmp4.cardCopy;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.cardText, children: body };
    const tmp9 = closure_1_24(tmp(4786).Text, obj6);
    cResult[3] = body;
    cResult[4] = tmp4.cardText;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = closure_1_24(Text_Text.Text, { variant: "heading-md/semibold", color: "text-default", style: tmp4.cardText, children: title });
  cResult[0] = tmp4.cardText;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  ({ title, body, children } = arg0);
  const tmp = closure_26();
  const obj = { style: tmp.centered, children: null };
  const obj2 = { variant: "primary", style: tmp.card, children: null };
  const obj3 = { style: tmp.cardBody, children: null };
  const obj4 = { style: tmp.cardCopy, children: null };
  const items = [closure_1_24(Text_Text.Text, { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title }), closure_1_24(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body })];
  obj4.children = items;
  const items1 = [closure_1_25(React5, obj4), children];
  obj3.children = items1;
  obj2.children = closure_1_25(React5, obj3);
  obj.children = closure_1_24(Card.Card, obj2);
  return closure_1_24(React5, obj);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  const cResult = applicationId(568).c(38);
  applicationId = applicationId.applicationId;
  const projectId = applicationId.projectId;
  const visible = applicationId.visible;
  let obj = applicationId(568);
  const vibegrationsControlActive = applicationId(13218).useVibegrationsControlActive(projectId);
  const active = closure_14(projectId).active;
  if (cResult[0] !== projectId) {
    const fn = function c() {
      return () => closure_2_13(projectId);
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === projectId) {
    if (cResult[3] === visible) {
      let tmp6 = cResult[4];
    }
    const effect = first.useEffect(tmp5, tmp6);
    let frame = closure_26();
    if (cResult[5] !== applicationId) {
      const tmp12 = closure_23(applicationId, closure_22);
      cResult[5] = applicationId;
      cResult[6] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[6];
    }
    dependencyMap = tmp9;
    const tmp15 = projectId(16979)(applicationId, closure_22);
    _slicedToArray = tmp15;
    if (cResult[7] !== tmp15) {
      let tmp18 = null;
      if (null != tmp15) {
        tmp18 = null;
        if (closure_21(tmp15)) {
          tmp18 = tmp15;
        }
      }
      cResult[7] = tmp15;
      cResult[8] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    [first, closure_5] = first.useState(false);
    if (cResult[9] === applicationId) {
      if (cResult[10] === first) {
        if (cResult[11] === tmp15) {
          if (cResult[12] === tmp9) {
            let tmp23 = cResult[13];
            let tmp24 = cResult[14];
          }
          const effect1 = obj3.useEffect(tmp23, tmp24);
          let tmp27 = visible;
          if (visible) {
            tmp27 = null != tmp16;
          }
          tmp13(16980)(tmp27);
          if (null != tmp16) {
            if (cResult[15] !== tmp16.id) {
              let obj4 = { frameId: tmp16.id, layoutMode: constants4.FOCUSED };
              const tmp52 = closure_24(tmp(16981).InlineFrameView, obj4);
              cResult[15] = tmp16.id;
              cResult[16] = tmp52;
              let tmp49 = tmp52;
            } else {
              tmp49 = cResult[16];
            }
            if (cResult[17] === vibegrationsControlActive) {
              if (cResult[18] === projectId) {
                if (cResult[19] === active) {
                  if (cResult[20] === visible) {
                    let tmp53 = cResult[21];
                  }
                  if (cResult[22] === vibegrationsControlActive) {
                    if (cResult[23] === frame.controlOverlay) {
                      if (cResult[24] === frame.controlText) {
                        if (cResult[25] === visible) {
                          let tmp56 = cResult[26];
                        }
                        if (cResult[27] === frame.frame) {
                          if (cResult[28] === tmp49) {
                            if (cResult[29] === tmp53) {
                            }
                          }
                        }
                        const obj5 = { style: frame.frame, children: null };
                        const items = [tmp49, tmp53, tmp56];
                        obj5.children = items;
                        const tmp63 = closure_25(closure_7, obj5);
                        frame = frame.frame;
                        cResult[27] = frame;
                        cResult[28] = tmp49;
                        cResult[29] = tmp53;
                        class O {
                          constructor() {
                            if (!closure_4) {
                              tmp = closure_3;
                              tmp2 = null;
                              if (null == closure_3) {
                                tmp13 = closure_8;
                                mainFrame = closure_8.getMainFrame();
                                if (null != mainFrame) {
                                  tmp3 = closure_1;
                                  tmp4 = closure_2;
                                  obj = closure_1(closure_2[18]);
                                  leaveFrameResult = obj.leaveFrame(mainFrame.id);
                                }
                                tmp6 = closure_1;
                                tmp7 = closure_2;
                                obj2 = closure_1(closure_2[21]);
                                obj1 = { applicationId: null, surface: null };
                                tmp8 = applicationId;
                                obj1.applicationId = applicationId;
                                tmp9 = MAIN_SURFACE;
                                obj1.surface = MAIN_SURFACE;
                                launchFrameResult = obj2.launchFrame(obj1);
                                catchPromise = launchFrameResult.catch(() => closure_1_5(true));
                                obj4 = closure_1(closure_2[21]);
                                tmp11 = closure_2;
                                demoteMainFrameResult = obj4.demoteMainFrame(closure_2);
                              }
                            }
                            return;
                          }
                        }
                        cResult[31] = tmp63;
                      }
                    }
                  }
                  let tmp57 = null;
                  if (visible) {
                    tmp57 = null;
                    if (vibegrationsControlActive) {
                      const obj6 = { style: frame.controlOverlay, pointerEvents: "box-only", accessibilityLiveRegion: "polite", children: null };
                      const obj7 = { variant: "text-sm/medium", color: "text-default", style: frame.controlText, children: null };
                      const intl4 = tmp(1119).intl;
                      obj7.children = intl4.string(tmp13(3714).dIE9zO);
                      obj6.children = closure_24(tmp(4786).Text, obj7);
                      tmp57 = closure_24(closure_7, obj6);
                    }
                  }
                  cResult[22] = vibegrationsControlActive;
                  cResult[23] = frame.controlOverlay;
                  cResult[24] = frame.controlText;
                  cResult[25] = visible;
                  cResult[26] = tmp57;
                  tmp56 = tmp57;
                }
              }
            }
            let tmp54 = null;
            if (visible) {
              tmp54 = null;
              if (active) {
                tmp54 = null;
                if (!vibegrationsControlActive) {
                  const obj8 = { projectId };
                  tmp54 = closure_24(tmp13(16988), obj8);
                }
              }
            }
            cResult[17] = vibegrationsControlActive;
            cResult[18] = projectId;
            cResult[19] = active;
            cResult[20] = visible;
            cResult[21] = tmp54;
            tmp53 = tmp54;
          } else if (first) {
            const _Symbol2 = Symbol;
            if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1119).intl;
              const stringResult = intl.string(tmp13(3714).MeLWCr);
              const intl2 = tmp(1119).intl;
              const stringResult1 = intl2.string(tmp13(3714)["1RCbQT"]);
              cResult[32] = stringResult;
              cResult[33] = stringResult1;
              let tmp41 = stringResult1;
              let Button = stringResult;
            } else {
              Button = cResult[32];
              tmp41 = cResult[33];
            }
            const _Symbol3 = Symbol;
            if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
              const obj9 = { title: Button, body: tmp41, children: null };
              Button = tmp(5220).Button;
              const obj10 = { variant: "primary", size: "sm", text: null, onPress: null };
              const intl3 = tmp(1119).intl;
              obj10.text = intl3.string(tmp13(3714)["42EdIV"]);
              obj10.onPress = function onPress() {
                return closure_5(false);
              };
              tmp41 = closure_24(Button, obj10);
              obj9.children = tmp41;
              const tmp47 = closure_24(closure_27, obj9);
              cResult[34] = tmp47;
            }
          } else {
            const _Symbol = Symbol;
            if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp35 = closure_24(closure_5, {});
              cResult[35] = tmp35;
              let tmp32 = tmp35;
            } else {
              tmp32 = cResult[35];
            }
            if (cResult[36] !== frame.centered) {
              const obj11 = { style: frame.centered, children: tmp32 };
              const tmp39 = closure_24(closure_7, obj11);
              cResult[36] = frame.centered;
              cResult[37] = tmp39;
              let tmp36 = tmp39;
            } else {
              tmp36 = cResult[37];
            }
            return tmp36;
          }
          const tmp13Result = tmp13(16980);
        }
      }
    }
    class O {
      constructor() {
        if (!closure_4) {
          tmp = closure_3;
          tmp2 = null;
          if (null == closure_3) {
            tmp13 = closure_8;
            mainFrame = closure_8.getMainFrame();
            if (null != mainFrame) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[18]);
              leaveFrameResult = obj.leaveFrame(mainFrame.id);
            }
            tmp6 = closure_1;
            tmp7 = closure_2;
            obj2 = closure_1(closure_2[21]);
            obj1 = { applicationId: null, surface: null };
            tmp8 = applicationId;
            obj1.applicationId = applicationId;
            tmp9 = MAIN_SURFACE;
            obj1.surface = MAIN_SURFACE;
            launchFrameResult = obj2.launchFrame(obj1);
            catchPromise = launchFrameResult.catch(() => closure_1_5(true));
            obj4 = closure_1(closure_2[21]);
            tmp11 = closure_2;
            demoteMainFrameResult = obj4.demoteMainFrame(closure_2);
          }
        }
        return;
      }
    }
    const items1 = [applicationId, first, tmp15, tmp9];
    cResult[9] = applicationId;
    cResult[10] = first;
    cResult[11] = tmp15;
    cResult[12] = tmp9;
    cResult[13] = O;
    cResult[14] = items1;
    tmp24 = items1;
    tmp23 = O;
  }
  const items2 = [projectId, ];
  cResult[2] = projectId;
  cResult[3] = visible;
  cResult[4] = items2;
  tmp6 = items2;
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  const projectId = applicationId.projectId;
  const visible = applicationId.visible;
  first = undefined;
  closure_5 = undefined;
  const vibegrationsControlActive = applicationId(13218).useVibegrationsControlActive(projectId);
  const items = [projectId, visible];
  const effect = first.useEffect(() => () => closure_2_13(projectId), items);
  const tmp5 = closure_26();
  const tmp6 = closure_23(applicationId, closure_22);
  dependencyMap = tmp6;
  const tmp8 = projectId(16979)(applicationId, closure_22);
  _slicedToArray = tmp8;
  let tmp9 = null;
  if (null != tmp8) {
    tmp9 = null;
    if (closure_21(tmp8)) {
      tmp9 = tmp8;
    }
  }
  [first, closure_5] = first.useState(false);
  const items1 = [applicationId, first, tmp8, tmp6];
  const effect1 = obj2.useEffect(() => {
    if (!first) {
      if (null == closure_3) {
        const mainFrame = FramesStore.getMainFrame();
        if (null != mainFrame) {
          FramesNativeManagerDefault.leaveFrame(mainFrame.id);
        }
        const obj3 = { applicationId, surface };
        FramesActionCreatorsDefault.launchFrame(obj3).catch(() => closure_1_5(true));
        const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj3);
        FramesActionCreatorsDefault.demoteMainFrame(closure_2);
      }
    }
  }, items1);
  let tmp15 = visible;
  let obj = applicationId(13218);
  if (visible) {
    tmp15 = null != tmp9;
  }
  projectId(16980)(tmp15);
  if (null != tmp9) {
    let obj3 = { style: tmp5.frame, children: null };
    let obj4 = { frameId: tmp9.id, layoutMode: constants4.FOCUSED };
    const items2 = [closure_24(tmp(16981).InlineFrameView, obj4), , ];
    let tmp23Result = null;
    if (visible) {
      tmp23Result = null;
      if (closure_14(projectId).active) {
        tmp23Result = null;
        if (!vibegrationsControlActive) {
          const obj5 = { projectId };
          tmp23Result = tmp23(tmp7(16988), obj5);
        }
      }
    }
    items2[1] = tmp23Result;
    let tmp23Result2 = null;
    if (visible) {
      tmp23Result2 = null;
      if (vibegrationsControlActive) {
        const obj6 = { style: tmp5.controlOverlay, pointerEvents: "box-only", accessibilityLiveRegion: "polite", children: null };
        const obj7 = { variant: "text-sm/medium", color: "text-default", style: tmp5.controlText, children: null };
        const intl4 = tmp(1119).intl;
        obj7.children = intl4.string(tmp7(3714).dIE9zO);
        obj6.children = tmp23(tmp(4786).Text, obj7);
        tmp23Result2 = tmp23(tmp22, obj6);
      }
    }
    items2[2] = tmp23Result2;
    obj3.children = items2;
    let tmp27Result = closure_25(tmp22, obj3);
  } else if (first) {
    const obj8 = { title: null, body: null, children: null };
    const intl = tmp(1119).intl;
    obj8.title = intl.string(tmp7(3714).MeLWCr);
    const intl2 = tmp(1119).intl;
    obj8.body = intl2.string(tmp7(3714)["1RCbQT"]);
    const obj9 = { variant: "primary", size: "sm", text: null, onPress: null };
    const intl3 = tmp(1119).intl;
    obj9.text = intl3.string(tmp7(3714)["42EdIV"]);
    obj9.onPress = function onPress() {
      return closure_5(false);
    };
    obj8.children = tmp27(tmp(5220).Button, obj9);
    tmp27Result = tmp27(closure_27, obj8);
  } else {
    const obj10 = { style: tmp5.centered, children: tmp27(closure_5, {}) };
    tmp27Result = tmp27(closure_7, obj10);
  }
  return tmp27Result;
});
let closure_28 = tmp7;
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let intl = require;
  let stringResult = dependencyMap;
  const cResult = c.c(11);
  applicationId = applicationId.applicationId;
  const tmp3 = closure_26();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function l() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== applicationId) {
    const obj2 = { applicationId };
    const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj2);
    cResult[2] = applicationId;
    cResult[3] = applicationWidget;
    let tmp8 = applicationWidget;
  } else {
    tmp8 = cResult[3];
  }
  if (applicationId.revoked) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { title: null, body: null };
      const intl2 = util.intl;
      obj3.title = intl2.string(_modDef3714.SGHO9K);
      intl = util.intl;
      stringResult = intl.string(_modDef3714["pV/rS2"]);
      obj3.body = stringResult;
      const tmp26 = closure_1_24(closure_27, obj3);
      cResult[4] = tmp26;
    }
  } else {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === tmp8) {
        let tmp14 = cResult[7];
      }
      if (cResult[8] === tmp3.widget) {
        if (cResult[9] === tmp14) {
          let tmp18 = cResult[10];
        }
        return tmp18;
      }
      const obj4 = { contentContainerStyle: tmp3.widget, children: tmp14 };
      const tmp21 = closure_1_24(timestampProducer, obj4);
      cResult[8] = tmp3.widget;
      cResult[9] = tmp14;
      cResult[10] = tmp21;
      tmp18 = tmp21;
    }
    const obj5 = { userId: stateFromStores, widget: tmp8 };
    const tmp17 = closure_1_24(UserProfileApplicationWidgetCardDefault, obj5);
    cResult[5] = stateFromStores;
    cResult[6] = tmp8;
    cResult[7] = tmp17;
    tmp14 = tmp17;
  }
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  const tmp = closure_26();
  const items = [AuthenticationStore];
  [][0] = applicationId;
  const stateFromStores = applicationId(504).useStateFromStores(items, () => id.getId());
  if (applicationId.revoked) {
    const obj2 = { title: null, body: null };
    const intl = tmp2(1119).intl;
    obj2.title = intl.string(_modDef3714.SGHO9K);
    const intl2 = tmp2(1119).intl;
    obj2.body = intl2.string(_modDef3714["pV/rS2"]);
    let tmp6Result = tmp6(closure_27, obj2);
  } else {
    const obj3 = { contentContainerStyle: tmp.widget, children: null };
    const obj4 = { userId: stateFromStores, widget: tmp5 };
    obj3.children = tmp6(UserProfileApplicationWidgetCardDefault, obj4);
    tmp6Result = tmp6(closure_6, obj3);
  }
  return tmp6Result;
});
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((previewApplicationId) => {
  const cResult = id(568).c(43);
  closure_26();
  let obj = id(568);
  const application = id(7442).useApplication(previewApplicationId.previewApplicationId);
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
    let first = items;
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
        if (null != dMFromUserId) {
          channel = ChannelStore.getChannel(dMFromUserId);
        }
        return channel;
      }
    };
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  let obj2 = id(7442);
  const stateFromStores = id(504).useStateFromStores(first, tmp9, tmp10);
  const tmp13 = _slicedToArray(noop.useState(null), 2);
  dependencyMap = tmp13[1];
  _slicedToArray = tmp14;
  const tmpResult = id(504);
  [tmp16, noop] = noop.useState(0);
  if (cResult[4] === id) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === tmp14) {
        let tmp17 = cResult[7];
      }
      if (cResult[8] === tmp16) {
        if (cResult[9] === id) {
          if (cResult[10] === stateFromStores) {
            if (cResult[11] === tmp14) {
              let tmp18 = cResult[12];
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
              class W {
                constructor() {
                  if (null != c5) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[32]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
              const items2 = [id1];
              cResult[13] = id1;
              cResult[14] = W;
              cResult[15] = items2;
              let tmp22 = items2;
              const tmp21 = W;
            } else {
              class W {
                constructor() {
                  if (null != c5) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[32]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
              tmp22 = cResult[15];
            }
            const effect1 = obj4.useEffect(tmp21, tmp22);
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class W {
                constructor() {
                  if (null != c5) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[32]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
              const items3 = [ReadStateStore];
              cResult[16] = items3;
              const tmp24 = items3;
            } else {
              class W {
                constructor() {
                  if (null != c5) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[32]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
            }
            if (cResult[17] !== id1) {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              const items4 = [id1];
              cResult[17] = id1;
              cResult[18] = items4;
              cResult[19] = Y;
              let tmp26 = Y;
              const tmp25 = items4;
            } else {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              tmp26 = cResult[19];
            }
            const stateFromStores1 = tmp(504).useStateFromStores(tmp24, tmp26, tmp25);
            const _Symbol2 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              const items5 = [AppStateStore];
              const fn2 = function $() {
                return state.getState() === constants.ACTIVE;
              };
              cResult[20] = items5;
              cResult[21] = fn2;
              let tmp29 = fn2;
              const tmp28 = items5;
            } else {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              tmp29 = cResult[21];
            }
            const tmpResult3 = tmp(504);
            const stateFromStores2 = tmp(504).useStateFromStores(tmp28, tmp29);
            if (cResult[22] === stateFromStores2) {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
            }
            function te() {
              let tmp2 = null != stateFromStores;
              if (tmp2) {
                tmp2 = stateFromStores1;
              }
              if (tmp2) {
                tmp2 = stateFromStores2;
              }
              if (tmp2) {
                const obj2 = { section: constants3.CHANNEL, object: constants.ACK_INCOMING_MESSAGE, objectType: constants2.ACK_AUTOMATIC };
                ReadStateActionCreators.ackChannel(stateFromStores, obj2);
              }
            }
            const items6 = [stateFromStores, stateFromStores1, stateFromStores2];
            cResult[22] = stateFromStores2;
            cResult[23] = stateFromStores;
            cResult[24] = stateFromStores1;
            cResult[25] = te;
            cResult[26] = items6;
            const tmpResult4 = tmp(504);
          }
        }
      }
      const items7 = [id, stateFromStores, tmp14, tmp16];
      cResult[8] = tmp16;
      cResult[9] = id;
      cResult[10] = stateFromStores;
      cResult[11] = tmp14;
      cResult[12] = items7;
      tmp18 = items7;
    }
  }
  class R {
    constructor() {
      if (null != c0) {
        tmp2 = closure_1;
        if (null == closure_1) {
          tmp3 = closure_3;
          if (!closure_3) {
            flag = false;
            c0 = false;
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj = closure_1(closure_2[32]);
            obj1 = { recipientIds: null, navigateToChannel: false };
            obj1.recipientIds = tmp;
            openPrivateChannelResult = obj.openPrivateChannel(obj1);
            catchPromise = openPrivateChannelResult.catch(() => {
              if (!c0) {
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
  cResult[7] = R;
  tmp17 = R;
}) : ((previewApplicationId) => {
  let id;
  let stateFromStores;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let id1;
  let stateFromStores1;
  let stateFromStores2;
  let tmp = closure_26();
  const application = id(7442).useApplication(previewApplicationId.previewApplicationId);
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
  let obj = id(7442);
  const items = [ChannelStore];
  const items1 = [id];
  stateFromStores = id(504).useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      const dMFromUserId = ChannelStore.getDMFromUserId(tmp);
      let channel = null;
      if (null != dMFromUserId) {
        channel = ChannelStore.getChannel(dMFromUserId);
      }
      return channel;
    }
  }, items1);
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  dependencyMap = tmp8[1];
  _slicedToArray = tmp9;
  const tmp7Result = _slicedToArray(noop.useState(0), 2);
  noop = tmp7Result[1];
  const items2 = [id, stateFromStores, null != id && tmp8[0] === id, tmp7Result[0]];
  const effect = obj3.useEffect(() => {
    if (null != c0) {
      if (null == stateFromStores) {
        if (!closure_3) {
          c0 = false;
          const obj2 = { recipientIds: tmp, navigateToChannel: false };
          const obj = stateFromStores(4803);
          stateFromStores(4803).openPrivateChannel(obj2).catch(() => {
            if (!c0) {
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
      ChannelActionCreatorsDefault.preload(guildId, tmp);
    }
  }, items3);
  const tmp2Result = id(504);
  const items4 = [ReadStateStore];
  const items5 = [id1];
  stateFromStores1 = id(504).useStateFromStores(items4, () => {
    let hasUnreadResult = null != id1;
    if (hasUnreadResult) {
      hasUnreadResult = ReadStateStore.hasUnread(tmp);
    }
    return hasUnreadResult;
  }, items5);
  const tmp2Result4 = id(504);
  const items6 = [AppStateStore];
  stateFromStores2 = id(504).useStateFromStores(items6, () => state.getState() === constants.ACTIVE);
  const items7 = [stateFromStores, stateFromStores1, stateFromStores2];
  const effect2 = obj3.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = stateFromStores1;
    }
    if (tmp2) {
      tmp2 = stateFromStores2;
    }
    if (tmp2) {
      const obj2 = { section: constants3.CHANNEL, object: constants.ACK_INCOMING_MESSAGE, objectType: constants2.ACK_AUTOMATIC };
      ReadStateActionCreators.ackChannel(stateFromStores, obj2);
    }
  }, items7);
  const callback = obj3.useCallback(() => {
    dependencyMap(null);
    closure_4((arg0) => arg0 + 1);
  }, []);
  const tmp2Result5 = id(504);
  if (!application.isLoading) {
    let obj2 = { title: null, body: null, children: null };
    const intl = tmp2(1119).intl;
    obj2.title = intl.string(stateFromStores(3714).bl4eBc);
    const intl2 = tmp2(1119).intl;
    obj2.body = intl2.string(stateFromStores(3714)["4iyrze"]);
    let tmp19Result = null;
    if (tmp9) {
      const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp2(1119).intl;
      obj4.text = intl3.string(tmp2(1119).t["5911Lb"]);
      obj4.onPress = callback;
      tmp19Result = tmp19(tmp2(5220).Button, obj4);
    }
    obj2.children = tmp19Result;
    return closure_24(closure_27, obj2);
  }
  if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: null };
    tmp = id1;
    obj5.children = closure_24(id1, {});
    closure_24(stateFromStores2, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: null };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: ref, screenIndex: "vibegrations-preview", alwaysRespectKeyboard: true, disableGradient: true };
    const items8 = [closure_24(stateFromStores(10370), obj7, stateFromStores.id), ];
    let tmp29Result = null;
    if (tmp2Result6.isAndroid()) {
      tmp29Result = tmp29(tmp2(16990).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp29Result;
    obj6.children = items8;
    closure_25(stateFromStores2, obj6);
    tmp29 = closure_24;
    tmp2Result6 = tmp2(1368);
  }
});
ReactCompilerGating = fn(558);
let obj7 = { textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativePreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ projectId, previewApplicationId, mode, availability, widgetApplicationId, frameHostAvailable, permissionsGate } = arg0);
  if (null != permissionsGate) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1119).intl;
      const stringResult = intl5.string(_modDef3714.DYwf2n);
      const intl6 = tmp(1119).intl;
      const stringResult1 = intl6.string(_modDef3714.WWj3pN);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp25 = stringResult;
      tmp26 = stringResult1;
    } else {
      [tmp25, tmp26] = cResult;
    }
    const _Symbol3 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl7 = tmp(1119).intl;
      const stringResult2 = intl7.string(_modDef3714["CRfE/E"]);
      cResult[2] = stringResult2;
      let tmp30 = stringResult2;
    } else {
      tmp30 = cResult[2];
    }
    if (cResult[3] === permissionsGate.loading) {
      if (cResult[4] === permissionsGate.onReviewPermissions) {
        let tmp33 = cResult[5];
      }
      return tmp33;
    }
    const obj2 = { title: tmp25, body: tmp26, children: null };
    const obj3 = { variant: "primary", size: "sm", text: tmp30, onPress: null, loading: null };
    ({ onReviewPermissions: obj8.onPress, loading: obj8.loading } = permissionsGate);
    obj2.children = closure_1_24(tmp(5220).Button, obj3);
    const tmp36 = closure_1_24(closure_27, obj2);
    cResult[3] = permissionsGate.loading;
    cResult[4] = permissionsGate.onReviewPermissions;
    cResult[5] = tmp36;
    tmp33 = tmp36;
  } else if ("frame" === mode) {
    if (cResult[6] === frameHostAvailable) {
      if (cResult[7] === previewApplicationId) {
        if (cResult[8] === projectId) {
          return cResult[9];
        }
      }
    }
    if (frameHostAvailable) {
      const obj4 = { applicationId: previewApplicationId, projectId, visible: true };
      let tmp18Result = tmp18(closure_28, obj4);
    } else {
      const obj5 = { title: null, body: null };
      const intl3 = tmp(1119).intl;
      obj5.title = intl3.string(_modDef3714.FHOJiH);
      const intl4 = tmp(1119).intl;
      obj5.body = intl4.string(_modDef3714["1yLQoV"]);
      tmp18Result = tmp18(closure_27, obj5);
    }
    cResult[6] = frameHostAvailable;
    cResult[7] = previewApplicationId;
    cResult[8] = projectId;
    cResult[9] = tmp18Result;
  } else if ("widget" === mode) {
    if (cResult[10] === availability) {
      if (cResult[11] === widgetApplicationId) {
        let tmp14 = cResult[12];
      }
      return tmp14;
    }
    let tmp15 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === availability.profileState };
      tmp15 = closure_1_24(closure_29, obj6);
    }
    cResult[10] = availability;
    cResult[11] = widgetApplicationId;
    cResult[12] = tmp15;
    tmp14 = tmp15;
  } else if ("bot" === mode) {
    if (cResult[13] !== previewApplicationId) {
      const obj7 = { previewApplicationId };
      const tmp13 = closure_1_24(closure_30, obj7);
      cResult[13] = previewApplicationId;
      cResult[14] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[14];
    }
    return tmp10;
  } else if (null === mode) {
    const _Symbol = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj15 = { title: null, body: null };
      const intl = tmp(1119).intl;
      obj15.title = intl.string(_modDef3714.FHOJiH);
      const intl2 = tmp(1119).intl;
      obj15.body = intl2.string(_modDef3714["1yLQoV"]);
      const tmp9 = closure_1_24(closure_27, obj15);
      cResult[15] = tmp9;
      let tmp5 = tmp9;
    } else {
      tmp5 = cResult[15];
    }
    return tmp5;
  }
}) : ((arg0) => {
  ({ previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
  if (null != permissionsGate) {
    const obj2 = { title: null, body: null, children: null };
    const intl5 = util.intl;
    obj2.title = intl5.string(_modDef3714.DYwf2n);
    const intl6 = util.intl;
    obj2.body = intl6.string(_modDef3714.WWj3pN);
    const obj3 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
    const intl7 = util.intl;
    obj3.text = intl7.string(_modDef3714["CRfE/E"]);
    ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
    obj2.children = closure_1_24(components_Button_Button.Button, obj3);
    return closure_1_24(closure_27, obj2);
  } else if ("frame" === mode) {
    if (tmp3) {
      const obj4 = { applicationId: previewApplicationId, projectId: tmp, visible: true };
      let tmp14Result = tmp14(closure_28, obj4);
    } else {
      const obj5 = { title: null, body: null };
      const intl3 = util.intl;
      obj5.title = intl3.string(_modDef3714.FHOJiH);
      const intl4 = util.intl;
      obj5.body = intl4.string(_modDef3714["1yLQoV"]);
      tmp14Result = tmp14(closure_27, obj5);
    }
    return tmp14Result;
  } else if ("widget" === mode) {
    let tmp11 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === tmp2.profileState };
      tmp11 = closure_1_24(closure_29, obj6);
    }
    return tmp11;
  } else if ("bot" === mode) {
    const obj13 = { previewApplicationId };
    return closure_1_24(closure_30, obj13);
  } else if (null === mode) {
    const obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3714.FHOJiH);
    const intl2 = util.intl;
    obj.body = intl2.string(_modDef3714["1yLQoV"]);
    return closure_1_24(closure_27, obj);
  }
});
export const leaveVibegrationsPreviewFrame = function leaveVibegrationsPreviewFrame(arg0) {
  const frameBySurface = FramesStore.getFrameBySurface(arg0, surface);
  if (null != frameBySurface) {
    FramesNativeManagerDefault.leaveFrame(frameBySurface.id);
  }
};
export const PreviewFrame = tmp7;
