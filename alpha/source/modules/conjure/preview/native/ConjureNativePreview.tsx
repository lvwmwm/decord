// Module ID: 11810
// Function ID: 11811
// Name: ConjureNativePreview
// Dependencies: [32, 19, 17, 6810, 502, 4856, 6806, 1998, 11811, 6808, 1084, 6811, 21, 5004, 587, 558, 576, 5270, 6941, 10765, 10803, 11813, 10799, 504, 11815, 10779, 10804, 5629, 11816, 11817, 11818, 11822, 11824, 11826, 1125, 3863, 5280, 7743, 11834, 10777, 7448, 7242, 10930, 1381, 11943, 2]
// Exports: leaveConjurePreviewFrame

// Module 11810 (ConjureNativePreview)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import Text_Text from "Text/Text" /* 5270 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import FramesConstants from "FramesConstants" /* 6811 */;
import Card_Card from "Card/Card" /* 6941 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7242 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7448 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7743 */;
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 10765 */;
import ConjurePlatformUtils from "ConjurePlatformUtils" /* 10779 */;
import leaveFrame from "leaveFrame" /* 10803 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10804 */;
import useEdgeOnlySwipeExitDefault from "useEdgeOnlySwipeExit" /* 11813 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 11816 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 11834 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore_mod from "FramesStore" /* 6810 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import ReadStateStore from "ReadStateStore" /* 6806 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 11811 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, nextPromise;

let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_22;
let closure_23;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
let FramesStore = FramesStore_mod;
({ exitConjureDesignFeedback: map1, useConjureDesignFeedback: closure_14 } = conjureDesignFeedbackStore);
({ AnalyticsObjects: closure_16, AnalyticsObjectTypes: closure_17, AnalyticsSections: closure_18, AppStates: closure_19, ME: closure_20 } = Constants);
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_22, jsxs: closure_23 } = Fragment);
let createStyles = createStyles_mod;
let obj = { frame: { flex: 1 }, centered: obj2, card: { alignSelf: "stretch" }, cardBody: obj3, cardCopy: obj4, cardText: { textAlign: "center" }, widget: obj5, dm: { flex: 1 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5 = { padding: nativeDefault.space.PX_16 };
let closure_24 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function StatusCard(arg0) {
  let body;
  let children;
  let items;
  let items1;
  let title;
  const obj = react2;
  const cResult = obj.c(20);
  ({ title, body, children } = arg0);
  const tmp4 = closure_24();
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
                const tmp24 = authStore5(metroImportDefault, obj2);
                cResult[17] = tmp4.centered;
                cResult[18] = tmp18;
                cResult[19] = tmp24;
                tmp21 = tmp24;
              }
              const obj3 = { variant: "primary", style: tmp4.card, children: tmp14 };
              const tmp20 = authStore5(Card_Card.Card, obj3);
              cResult[14] = tmp4.card;
              cResult[15] = tmp14;
              cResult[16] = tmp20;
              tmp18 = tmp20;
            }
          }
          const obj4 = { style: tmp4.cardBody, children: items };
          items = [tmp10, children];
          const tmp17 = closure_23(metroImportDefault, obj4);
          cResult[10] = children;
          cResult[11] = tmp4.cardBody;
          cResult[12] = tmp10;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
      }
      const obj5 = { style: tmp4.cardCopy, children: items1 };
      items1 = [tmp5, tmp7];
      const tmp13 = closure_23(metroImportDefault, obj5);
      cResult[6] = tmp4.cardCopy;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    let tmp8 = null;
    if (null != body) {
      const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.cardText, children: body };
      tmp8 = authStore5(tmp(5270).Text, obj6);
    }
    cResult[3] = body;
    cResult[4] = tmp4.cardText;
    cResult[5] = tmp8;
    tmp7 = tmp8;
  }
  const obj7 = { variant: "heading-md/semibold", color: "text-default", style: tmp4.cardText, children: title };
  const tmp6 = authStore5(Text_Text.Text, obj7);
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
  const tmp = closure_24();
  const obj = { style: tmp.centered, children: authStore5(Card, obj2) };
  obj2 = { variant: "primary", style: tmp.card, children: closure_23(metroImportDefault, obj3) };
  obj3 = { style: tmp.cardBody, children: items1 };
  const obj4 = { style: tmp.cardCopy, children: items };
  Card = Card_Card.Card;
  items = [, ];
  const obj5 = { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title };
  items[0] = authStore5(Text_Text.Text, obj5);
  let tmp2Result = null;
  if (null != body) {
    const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
    tmp2Result = tmp2(Text_Text.Text, obj6);
  }
  items[1] = tmp2Result;
  items1 = [closure_23(metroImportDefault, obj4), children];
  return authStore5(metroImportDefault, obj);
});
let context = react.createContext(false);
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function HoldSwipeExit() {
  useEdgeOnlySwipeExitDefault(true);
  return null;
}
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewFrame(applicationId) {
  let closure_8;
  let frameSurface;
  let launch;
  let surface;
  let tmp24;
  let tmp25;
  let tmp5;
  let tmp = applicationId;
  let obj = applicationId(launch[16]);
  const cResult = obj.c(61);
  applicationId = applicationId.applicationId;
  const projectId = applicationId.projectId;
  ({ frameSurface, launch } = applicationId);
  const visible = applicationId.visible;
  const headerVisible = applicationId.headerVisible;
  const tmpResult = tmp(launch[22]);
  const conjureControlActive = tmpResult.useConjureControlActive(projectId);
  const active = closure_14(projectId).active;
  if (cResult[0] !== projectId) {
    const fn = function c() {
      return () => closure_2_13(projectId);
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === projectId) {
    let tmp6;
    let tmp11;
    let tmp13;
    if (cResult[3] === visible) {
      tmp6 = cResult[4];
    }
    let obj3 = react;
    const effect = react.useEffect(tmp5, tmp6);
    closure_24();
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ConjureProjectStore];
      cResult[5] = items;
      tmp11 = items;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== projectId) {
      class N {
        constructor() {
          const obj = conjurePreviewSurface2;
          return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
        }
      }
      cResult[6] = projectId;
      cResult[7] = N;
      tmp13 = N;
    } else {
      class N {
        constructor() {
          const obj = conjurePreviewSurface2;
          return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
        }
      }
    }
    const tmpResult3 = tmp(launch[23]);
    const stateFromStores = tmpResult3.useStateFromStores(tmp11, tmp13);
    if (cResult[8] === frameSurface) {
      let tmp20;
      class N {
        constructor() {
          const obj = conjurePreviewSurface2;
          return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
        }
      }
      react = tmp15;
      const tmp18 = projectId(launch[24])(applicationId, tmp15);
      let closure_5 = tmp18;
      if (cResult[11] !== tmp18) {
        class N {
          constructor() {
            const obj = conjurePreviewSurface2;
            return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
          }
        }
        let tmp21 = null;
        if (null != tmp18) {
          class N {
            constructor() {
              const obj = conjurePreviewSurface2;
              return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
            }
          }
          tmp21 = null;
          if (isLaunched(tmp18)) {
            class N {
              constructor() {
                const obj = conjurePreviewSurface2;
                return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
              }
            }
          }
        }
        cResult[11] = tmp18;
        cResult[12] = tmp21;
        tmp20 = tmp21;
      } else {
        class N {
          constructor() {
            const obj = conjurePreviewSurface2;
            return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
          }
        }
      }
      if (tmp20 != null) {
        class N {
          constructor() {
            const obj = conjurePreviewSurface2;
            return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
          }
        }
      }
      if (undefined == null) {
        class N {
          constructor() {
            const obj = conjurePreviewSurface2;
            return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
          }
        }
      }
      let c6 = tmp23;
      if (cResult[13] === undefined) {
        class N {
          constructor() {
            const obj = conjurePreviewSurface2;
            return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
          }
        }
        const effect1 = obj3.useEffect(tmp24, tmp25);
        if (launch != null) {
          class N {
            constructor() {
              const obj = conjurePreviewSurface2;
              return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
            }
          }
        }
        if (undefined == null) {
          class N {
            constructor() {
              const obj = conjurePreviewSurface2;
              return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
            }
          }
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + frameSurface + ":" + tmp27;
        const tmp30 = visible(obj3.useState(null), 2);
        class W {
          constructor() {
            if (null != c6) {
              const obj = ConjurePlatformUtils;
              const result = obj.setConjurePreviewFrameVisibility(tmp, visible);
            }
          }
        }
        FramesStore = tmp32;
        const first = tmp30[0];
        const tmp33 = visible(obj3.useState(combined), 2);
        if (tmp33[0] !== combined) {
          class N {
            constructor() {
              const obj = conjurePreviewSurface2;
              return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
            }
          }
          tmp32(null);
        }
        let closure_9 = tmp35;
        if (cResult[17] === applicationId) {
          class N {
            constructor() {
              const obj = conjurePreviewSurface2;
              return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
            }
          }
        }
        function re() {
          const tmp = closure_9;
          if (!tmp) {
            if (null == closure_5) {
              const mainFrame = FramesStore.getMainFrame();
              if (null != mainFrame) {
                const obj = leaveFrame;
                obj.leaveFrame(mainFrame.id);
              }
              const obj3 = { applicationId, surface: react, launch };
              const obj2 = FramesActionCreatorsDefault;
              const launchFrameResult = obj2.launchFrame(obj3);
              launchFrameResult.catch(() => closure_1_8(combined));
            }
          }
        }
        const items1 = [applicationId, first === combined, tmp18, launch, combined, tmp15];
        cResult[17] = applicationId;
        cResult[18] = first === combined;
        cResult[19] = tmp18;
        cResult[20] = launch;
        cResult[21] = combined;
        cResult[22] = tmp15;
        cResult[23] = re;
        cResult[24] = items1;
      }
      class W {
        constructor() {
          if (null != c6) {
            const obj = ConjurePlatformUtils;
            const result = obj.setConjurePreviewFrameVisibility(tmp, visible);
          }
        }
      }
      const items2 = [undefined, visible];
      cResult[13] = undefined;
      cResult[14] = visible;
      cResult[15] = W;
      cResult[16] = items2;
      tmp24 = W;
      tmp25 = items2;
    }
    const tmpResult4 = tmp(launch[19]);
    const conjurePreviewSurface = tmpResult4.getConjurePreviewSurface(stateFromStores, frameSurface);
    cResult[8] = frameSurface;
    cResult[9] = stateFromStores;
    cResult[10] = conjurePreviewSurface;
  }
  const items3 = [projectId, visible];
  cResult[2] = projectId;
  cResult[3] = visible;
  cResult[4] = items3;
  tmp6 = items3;
}) : (function PreviewFrame(applicationId) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items6;
  let items7;
  let obj9;
  let tmp40Result;
  let tmpResult;
  applicationId = applicationId.applicationId;
  const projectId = applicationId.projectId;
  const frameSurface = applicationId.frameSurface;
  const launch = applicationId.launch;
  const visible = applicationId.visible;
  let flag = applicationId.headerVisible;
  if (flag === undefined) {
    flag = true;
  }
  let iframeId;
  let combined;
  let closure_11;
  let closure_12;
  let top;
  let bottom;
  let left;
  let right;
  let tmp = applicationId;
  let obj = applicationId(frameSurface[22]);
  const conjureControlActive = obj.useConjureControlActive(projectId);
  let obj2 = visible;
  const items = [projectId, visible];
  const active = bottom(projectId).active;
  const effect = visible.useEffect(() => () => top(projectId), items);
  const tmp5 = closure_24();
  let obj3 = applicationId(frameSurface[23]);
  const items1 = [left];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    const obj = conjurePreviewSurface2;
    return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
  });
  const items2 = [stateFromStores, frameSurface];
  const memo = visible.useMemo(() => {
    const obj = conjurePreviewSurface2;
    return obj.getConjurePreviewSurface(stateFromStores, frameSurface);
  }, items2);
  const tmp9 = projectId(frameSurface[24])(applicationId, memo);
  let closure_8 = tmp9;
  let tmp10 = null;
  if (null != tmp9) {
    tmp10 = null;
    if (isLaunched(tmp9)) {
      tmp10 = tmp9;
    }
  }
  iframeId = undefined;
  if (tmp10 != null) {
    iframeId = tmp10.data.iframeId;
  }
  if (iframeId == null) {
    iframeId = null;
  }
  const items3 = [iframeId, visible];
  const effect1 = obj2.useEffect(() => {
    if (null != iframeId) {
      const obj = ConjurePlatformUtils;
      const result = obj.setConjurePreviewFrameVisibility(tmp, visible);
    }
  }, items3);
  let str;
  if (launch != null) {
    str = launch.customId;
  }
  if (str == null) {
    str = "";
  }
  combined = "" + frameSurface + ":" + str;
  const tmp15 = launch(obj2.useState(null), 2);
  closure_11 = tmp17;
  const first = tmp15[0];
  const tmp18 = launch(obj2.useState(combined), 2);
  if (tmp18[0] !== combined) {
    tmp18[1](combined);
    tmp15[1](null);
  }
  closure_12 = tmp21;
  const items4 = [applicationId, first === combined, tmp9, launch, combined, memo];
  const effect2 = obj2.useEffect(() => {
    const tmp = closure_12;
    if (!tmp) {
      if (null == closure_8) {
        const mainFrame = FramesStore.getMainFrame();
        if (null != mainFrame) {
          const obj = leaveFrame;
          obj.leaveFrame(mainFrame.id);
        }
        const obj3 = { applicationId, surface: memo, launch };
        const obj2 = FramesActionCreatorsDefault;
        const launchFrameResult = obj2.launchFrame(obj3);
        launchFrameResult.catch(() => closure_1_11(combined));
      }
    }
  }, items4);
  const insets = tmp8(tmp2[27])().insets;
  top = insets.top;
  bottom = insets.bottom;
  left = insets.left;
  right = insets.right;
  const items5 = [top, bottom, left, right, flag];
  const memo1 = obj2.useMemo(() => {
    const rect = { top, bottom, left, right };
    return getInlineFramePresentationDefault(rect, flag);
  }, items5);
  context = obj2.useContext(context);
  let applicationId1;
  const tmp8Result = projectId(frameSurface[29]);
  if (tmp10 != null) {
    applicationId1 = tmp10.applicationId;
  }
  if (applicationId1 == null) {
    applicationId1 = null;
  }
  tmp8Result(applicationId1);
  if (null != tmp10) {
    const obj4 = { style: tmp5.frame, children: items7 };
    const obj5 = { projectId, active: conjureControlActive, visible, children: items6 };
    const obj6 = { frameId: tmp10.id, level: tmp(frameSurface[31]).FrameStackLevel.WithinAppContent, presentation: memo1, spinnerWhileLoading: tmpResult.isConjurePreviewSurface(tmp10.surface) };
    const tmp8Result3 = projectId(frameSurface[33]);
    const tmp8Result4 = projectId(frameSurface[30]);
    tmpResult = tmp(frameSurface[19]);
    items6 = [closure_22(tmp8Result4, obj6), ];
    let tmp35Result = null;
    const tmp33 = memo;
    if (visible) {
      tmp35Result = null;
      if (active) {
        tmp35Result = null;
        if (!conjureControlActive) {
          const obj7 = { projectId };
          tmp35Result = tmp35(tmp8(tmp2[32]), obj7);
        }
      }
    }
    items6[1] = tmp35Result;
    items7 = [closure_23(tmp8Result3, obj5), ];
    let tmp35Result2 = null;
    if (visible) {
      tmp35Result2 = null;
      if (context) {
        tmp35Result2 = tmp35(HoldSwipeExit, {});
      }
    }
    items7[1] = tmp35Result2;
    tmp40Result = tmp32(tmp33, obj4);
  } else if (first === combined) {
    const obj8 = { title: intl.string(projectId(frameSurface[35]).lTPbnG), body: intl2.string(projectId(frameSurface[35]).e6GiAZ), children: closure_22(Button, obj9) };
    intl = tmp(tmp2[34]).intl;
    intl2 = tmp(tmp2[34]).intl;
    obj9 = {
      variant: "primary",
      size: "sm",
      text: intl3.string(projectId(frameSurface[35])["WFJ/vb"]),
      onPress() {
          return closure_11(null);
        }
    };
    Button = tmp(tmp2[36]).Button;
    intl3 = tmp(tmp2[34]).intl;
    tmp40Result = tmp40(closure_25, obj8);
  } else {
    const obj10 = { style: tmp5.centered, children: closure_22(flag, {}) };
    tmp40Result = tmp40(memo, obj10);
  }
  return tmp40Result;
});
let closure_28 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewWidget(applicationId) {
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
  const tmp4 = closure_24();
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
    const applicationWidget = new tmp(7743).ApplicationWidget(obj2);
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
      const obj3 = { title: intl.string(_modDef3863["08U+YO"]), body: intl2.string(_modDef3863.pKBfrc) };
      intl = tmp(1125).intl;
      intl2 = tmp(1125).intl;
      const tmp25 = authStore5(closure_25, obj3);
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
      const tmp20 = authStore5(metroRequire, obj4);
      cResult[8] = tmp4.widget;
      cResult[9] = tmp13;
      cResult[10] = tmp20;
      tmp17 = tmp20;
    }
    const obj5 = { userId: stateFromStores, widget: tmp9 };
    const tmp16 = authStore5(UserProfileApplicationWidgetCardDefault, obj5);
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
  const tmp = closure_24();
  let obj = applicationId(504);
  const items = [AuthenticationStore];
  [][0] = applicationId;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  if (revoked) {
    const obj2 = { title: intl.string(_modDef3863["08U+YO"]), body: intl2.string(_modDef3863.pKBfrc) };
    intl = tmp2(1125).intl;
    intl2 = tmp2(1125).intl;
    tmp6Result = tmp6(closure_25, obj2);
  } else {
    const obj3 = { contentContainerStyle: tmp.widget, children: closure_22(UserProfileApplicationWidgetCardDefault, obj4) };
    obj4 = { userId: stateFromStores, widget: tmp5 };
    tmp6Result = tmp6(closure_6, obj3);
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function PreviewBot(projectId) {
  let channelId;
  let first;
  let state;
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp7;
  let tmp = projectId;
  let tmp2 = dependencyMap;
  let obj = projectId(576);
  const cResult = obj.c(37);
  projectId = projectId.projectId;
  const previewApplicationId = projectId.previewApplicationId;
  const tmp4 = closure_24();
  let obj2 = stateFromStores;
  [tmp7, dependencyMap] = channelId(stateFromStores.useState(null), 2);
  let previewApplicationId1;
  const tmp5 = channelId;
  const tmp6 = channelId(stateFromStores.useState(null), 2);
  if (tmp7 != null) {
    previewApplicationId1 = tmp7.previewApplicationId;
  }
  channelId = null;
  if (previewApplicationId1 === previewApplicationId) {
    channelId = tmp7.channelId;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function u() {
      let channel = null;
      if (null != channelId) {
        channel = ChannelStore.getChannel(tmp);
      }
      return channel;
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(first, tmp12, tmp13);
  const tmp5Result = tmp5(obj2.useState(null), 2);
  let closure_5 = tmp5Result[1];
  let closure_6 = tmp16;
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp5Result[0] === previewApplicationId) {
      if (cResult[6] === previewApplicationId) {
        let tmp17;
        let tmp18;
        let tmp22;
        let tmp21;
        let tmp24;
        let tmp26;
        let tmp25;
        let tmp29;
        let tmp28;
        if (cResult[7] === projectId) {
          tmp17 = cResult[8];
          tmp18 = cResult[9];
        }
        const effect = obj2.useEffect(tmp17, tmp18);
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        if (id == null) {
          id = null;
        }
        if (cResult[10] !== id) {
          class D {
            constructor() {
              if (null != id) {
                const obj = ChannelActionCreatorsDefault;
                obj.preload(closure_20, tmp);
              }
            }
          }
          const items2 = [id];
          cResult[10] = id;
          cResult[11] = D;
          cResult[12] = items2;
          tmp22 = items2;
          tmp21 = D;
        } else {
          class D {
            constructor() {
              if (null != id) {
                const obj = ChannelActionCreatorsDefault;
                obj.preload(closure_20, tmp);
              }
            }
          }
          tmp22 = cResult[12];
        }
        const effect1 = obj2.useEffect(tmp21, tmp22);
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor() {
              if (null != id) {
                const obj = ChannelActionCreatorsDefault;
                obj.preload(closure_20, tmp);
              }
            }
          }
          const items3 = [ReadStateStore];
          cResult[13] = items3;
          tmp24 = items3;
        } else {
          class D {
            constructor() {
              if (null != id) {
                const obj = ChannelActionCreatorsDefault;
                obj.preload(closure_20, tmp);
              }
            }
          }
        }
        if (cResult[14] !== id) {
          class J {
            constructor() {
              const hasUnreadResult = null != id && ReadStateStore.hasUnread(tmp);
              return hasUnreadResult;
            }
          }
          const items4 = [id];
          cResult[14] = id;
          cResult[15] = items4;
          cResult[16] = J;
          tmp26 = J;
          tmp25 = items4;
        } else {
          class J {
            constructor() {
              const hasUnreadResult = null != id && ReadStateStore.hasUnread(tmp);
              return hasUnreadResult;
            }
          }
          tmp26 = cResult[16];
        }
        const tmpResult3 = tmp(504);
        const stateFromStores1 = tmpResult3.useStateFromStores(tmp24, tmp26, tmp25);
        const _Symbol2 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class J {
            constructor() {
              const hasUnreadResult = null != id && ReadStateStore.hasUnread(tmp);
              return hasUnreadResult;
            }
          }
          const items5 = [AppStateStore];
          class Z {
            constructor() {
              return state.getState() === constants.ACTIVE;
            }
          }
          cResult[17] = items5;
          cResult[18] = Z;
          tmp29 = Z;
          tmp28 = items5;
        } else {
          class J {
            constructor() {
              const hasUnreadResult = null != id && ReadStateStore.hasUnread(tmp);
              return hasUnreadResult;
            }
          }
          tmp29 = cResult[18];
        }
        const tmpResult4 = tmp(504);
        const stateFromStores2 = tmpResult4.useStateFromStores(tmp28, tmp29);
        if (cResult[19] === stateFromStores2) {
          class J {
            constructor() {
              const hasUnreadResult = null != id && ReadStateStore.hasUnread(tmp);
              return hasUnreadResult;
            }
          }
        }
        class Q {
          constructor() {
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
        }
        const items6 = [stateFromStores, stateFromStores1, stateFromStores2];
        cResult[19] = stateFromStores2;
        cResult[20] = stateFromStores;
        cResult[21] = stateFromStores1;
        cResult[22] = Q;
        cResult[23] = items6;
      }
    }
  }
  class N {
    constructor() {
      if (null == closure_4) {
        tmp = closure_6;
        if (!tmp) {
          flag = false;
          c0 = false;
          tmp2 = projectId;
          tmp3 = closure_2;
          obj = projectId(closure_2[39]);
          tmp4 = c0;
          conjurePreviewDm = obj.loadConjurePreviewDm(c0);
          nextPromise = conjurePreviewDm.then((channelId) => {
            const tmp = c0;
            if (!tmp) {
              const obj = { previewApplicationId, channelId };
              dependencyMap(obj);
            }
          }, () => {
            const tmp = c0;
            if (!tmp) {
              closure_5(previewApplicationId);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      return;
    }
  }
  const items7 = [projectId, previewApplicationId, stateFromStores, tmp5Result[0] === previewApplicationId];
  cResult[4] = stateFromStores;
  cResult[5] = tmp5Result[0] === previewApplicationId;
  cResult[6] = previewApplicationId;
  cResult[7] = projectId;
  cResult[8] = N;
  cResult[9] = items7;
  tmp18 = items7;
  tmp17 = N;
}) : (function PreviewBot(projectId) {
  let Button;
  let _undefined;
  let c2;
  let intl;
  let intl2;
  let intl3;
  let items8;
  let obj4;
  let state;
  let tmp28Result;
  let tmp4;
  projectId = projectId.projectId;
  const previewApplicationId = projectId.previewApplicationId;
  dependencyMap = undefined;
  let channelId;
  let stateFromStores;
  let closure_5;
  let closure_6;
  let id;
  let stateFromStores1;
  let stateFromStores2;
  let tmp = closure_24();
  let obj = stateFromStores;
  let tmp2 = channelId;
  const tmp3 = channelId(stateFromStores.useState(null), 2);
  [tmp4, c2] = tmp3;
  let previewApplicationId1;
  if (tmp4 != null) {
    previewApplicationId1 = tmp4.previewApplicationId;
  }
  channelId = null;
  if (previewApplicationId1 === previewApplicationId) {
    channelId = tmp4.channelId;
  }
  let obj2 = projectId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = obj2.useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items1);
  const tmp2Result = tmp2(obj.useState(null), 2);
  closure_5 = tmp2Result[1];
  closure_6 = tmp11;
  const items2 = [projectId, previewApplicationId, stateFromStores, tmp2Result[0] === previewApplicationId];
  const effect = obj.useEffect(() => {
    if (null == stateFromStores) {
      let tmp = closure_6;
      if (!tmp) {
        let c0 = false;
        let obj = projectId(c2[39]);
        const conjurePreviewDm = obj.loadConjurePreviewDm(c0);
        conjurePreviewDm.then((channelId) => {
          const tmp = c0;
          if (!tmp) {
            const obj = { previewApplicationId, channelId };
            c2(obj);
          }
        }, () => {
          const tmp = c0;
          if (!tmp) {
            closure_5(previewApplicationId);
          }
        });
        return () => {
          c0 = true;
        };
      }
    }
  }, items2);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (id == null) {
    id = null;
  }
  const items3 = [id];
  const effect1 = obj.useEffect(() => {
    if (null != id) {
      const obj = ChannelActionCreatorsDefault;
      obj.preload(closure_20, tmp);
    }
  }, items3);
  const items4 = [ReadStateStore];
  const items5 = [id];
  const tmp7Result = projectId(504);
  stateFromStores1 = tmp7Result.useStateFromStores(items4, () => {
    const hasUnreadResult = null != id && ReadStateStore.hasUnread(tmp);
    return hasUnreadResult;
  }, items5);
  const items6 = [AppStateStore];
  const tmp7Result3 = projectId(504);
  stateFromStores2 = tmp7Result3.useStateFromStores(items6, () => state.getState() === constants.ACTIVE);
  const items7 = [stateFromStores, stateFromStores1, stateFromStores2];
  const effect2 = obj.useEffect(() => {
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
  const callback = obj.useCallback(() => closure_5(null), []);
  if (tmp2Result[0] === previewApplicationId) {
    const obj3 = { title: intl.string(previewApplicationId(3863)["VP/O8s"]), body: intl2.string(previewApplicationId(3863).Sl9ITD), children: closure_22(Button, obj4) };
    intl = tmp7(1125).intl;
    intl2 = tmp7(1125).intl;
    obj4 = { variant: "secondary", size: "sm", text: intl3.string(projectId(1125).t["5911Lb"]), onPress: callback };
    Button = tmp7(5280).Button;
    intl3 = tmp7(1125).intl;
    tmp28Result = closure_22(closure_25, obj3);
  } else if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: closure_22(closure_5, {}) };
    tmp28Result = closure_22(id, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: items8 };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: tmp19, screenIndex: "conjure-preview", alwaysRespectKeyboard: true, disableGradient: true };
    items8 = [closure_22(previewApplicationId(10930), obj7, stateFromStores.id), ];
    let tmp30Result = null;
    const tmp28 = closure_23;
    const tmp29 = id;
    const tmp30 = closure_22;
    const tmp7Result4 = projectId(1381);
    if (tmp7Result4.isAndroid()) {
      tmp30Result = tmp30(tmp7(11943).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp30Result;
    tmp28Result = tmp28(tmp29, obj6);
  }
  return tmp28Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativePreview(arg0) {
  let availability;
  let frameHostAvailable;
  let frameLaunchParams;
  let frameSurface;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let mode;
  let obj5;
  let permissionsGate;
  let previewApplicationId;
  let projectId;
  let widgetApplicationId;
  const obj = react2;
  const cResult = obj.c(26);
  ({ projectId, previewApplicationId, mode, availability, frameSurface, frameLaunchParams, widgetApplicationId, frameHostAvailable, permissionsGate } = arg0);
  const tmp4 = closure_24();
  let previewBotMissing;
  if (permissionsGate != null) {
    previewBotMissing = permissionsGate.previewBotMissing;
  }
  if (true === previewBotMissing) {
    let first;
    const _Symbol4 = Symbol;
    const centered = tmp4.centered;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl8 = tmp(1125).intl;
      const stringResult = intl8.string(_modDef3863.FH2Udn);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === permissionsGate.loading) {
      let tmp43;
      if (cResult[2] === permissionsGate.onReviewPermissions) {
        tmp43 = cResult[3];
      }
      if (cResult[4] === tmp4.centered) {
        let tmp46;
        if (cResult[5] === tmp43) {
          tmp46 = cResult[6];
        }
        return tmp46;
      }
      const obj2 = { style: centered, children: tmp43 };
      const tmp49 = authStore5(metroImportDefault, obj2);
      cResult[4] = tmp4.centered;
      cResult[5] = tmp43;
      cResult[6] = tmp49;
      tmp46 = tmp49;
    }
    const obj3 = { variant: "primary", size: "sm", text: first, onPress: null, loading: null };
    ({ onReviewPermissions: obj9.onPress, loading: obj9.loading } = permissionsGate);
    const tmp45 = authStore5(components_Button_Button.Button, obj3);
    cResult[1] = permissionsGate.loading;
    cResult[2] = permissionsGate.onReviewPermissions;
    cResult[3] = tmp45;
    tmp43 = tmp45;
  } else if (null != permissionsGate) {
    let tmp28;
    let tmp27;
    let tmp32;
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = tmp(1125).intl;
      const stringResult1 = intl5.string(_modDef3863.FExK4w);
      const intl6 = tmp(1125).intl;
      const stringResult2 = intl6.string(_modDef3863["2pDCXO"]);
      cResult[7] = stringResult1;
      cResult[8] = stringResult2;
      tmp28 = stringResult2;
      tmp27 = stringResult1;
    } else {
      tmp27 = cResult[7];
      tmp28 = cResult[8];
    }
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl7 = tmp(1125).intl;
      const stringResult3 = intl7.string(_modDef3863["Nub/J6"]);
      cResult[9] = stringResult3;
      tmp32 = stringResult3;
    } else {
      tmp32 = cResult[9];
    }
    if (cResult[10] === permissionsGate.loading) {
      let tmp35;
      if (cResult[11] === permissionsGate.onReviewPermissions) {
        tmp35 = cResult[12];
      }
      return tmp35;
    }
    const obj4 = { title: tmp27, body: tmp28, children: authStore5(components_Button_Button.Button, obj5) };
    obj5 = { variant: "primary", size: "sm", text: tmp32, onPress: null, loading: null };
    ({ onReviewPermissions: obj8.onPress, loading: obj8.loading } = permissionsGate);
    const tmp38 = authStore5(closure_25, obj4);
    cResult[10] = permissionsGate.loading;
    cResult[11] = permissionsGate.onReviewPermissions;
    cResult[12] = tmp38;
    tmp35 = tmp38;
  } else if ("frame" === mode) {
    let tmp21Result;
    if (cResult[13] === frameHostAvailable) {
      if (cResult[14] === frameLaunchParams) {
        if (cResult[15] === frameSurface) {
          if (cResult[16] === previewApplicationId) {
            let tmp20;
            if (cResult[17] === projectId) {
              tmp20 = cResult[18];
            }
            return tmp20;
          }
        }
      }
    }
    if (frameHostAvailable) {
      const obj6 = { applicationId: previewApplicationId, projectId, frameSurface, launch: frameLaunchParams, visible: true };
      tmp21Result = tmp21(closure_28, obj6);
    } else {
      const obj7 = { title: intl3.string(_modDef3863["7k4GyN"]), body: intl4.string(_modDef3863.zdIy3R) };
      intl3 = tmp(1125).intl;
      intl4 = tmp(1125).intl;
      tmp21Result = tmp21(closure_25, obj7);
    }
    cResult[13] = frameHostAvailable;
    cResult[14] = frameLaunchParams;
    cResult[15] = frameSurface;
    cResult[16] = previewApplicationId;
    cResult[17] = projectId;
    cResult[18] = tmp21Result;
    tmp20 = tmp21Result;
  } else if ("widget" === mode) {
    if (cResult[19] === availability) {
      let tmp16;
      if (cResult[20] === widgetApplicationId) {
        tmp16 = cResult[21];
      }
      return tmp16;
    }
    let tmp17 = null;
    if (null != widgetApplicationId) {
      const obj10 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === availability.profileState };
      tmp17 = authStore5(closure_29, obj10);
    }
    cResult[19] = availability;
    cResult[20] = widgetApplicationId;
    cResult[21] = tmp17;
    tmp16 = tmp17;
  } else if ("bot" === mode) {
    if (cResult[22] === previewApplicationId) {
      let tmp12;
      if (cResult[23] === projectId) {
        tmp12 = cResult[24];
      }
      return tmp12;
    }
    const obj19 = { projectId, previewApplicationId };
    const tmp15 = authStore5(closure_30, obj19);
    cResult[22] = previewApplicationId;
    cResult[23] = projectId;
    cResult[24] = tmp15;
    tmp12 = tmp15;
  } else if ("overlay" === mode) {
    return null;
  } else if (null === mode) {
    let tmp7;
    const _Symbol = Symbol;
    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
      const obj20 = { title: intl.string(_modDef3863["7k4GyN"]), body: intl2.string(_modDef3863.zdIy3R) };
      intl = tmp(1125).intl;
      intl2 = tmp(1125).intl;
      const tmp11 = authStore5(closure_25, obj20);
      cResult[25] = tmp11;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[25];
    }
    return tmp7;
  }
}) : (function ConjureNativePreview(arg0) {
  let Button;
  let Button2;
  let availability;
  let frameHostAvailable;
  let frameLaunchParams;
  let frameSurface;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let mode;
  let obj3;
  let obj5;
  let permissionsGate;
  let previewApplicationId;
  let projectId;
  let widgetApplicationId;
  ({ projectId, previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
  ({ availability, frameSurface, frameLaunchParams, frameHostAvailable } = arg0);
  let previewBotMissing;
  const tmp = closure_24();
  if (permissionsGate != null) {
    previewBotMissing = permissionsGate.previewBotMissing;
  }
  if (true === previewBotMissing) {
    const obj2 = { style: tmp.centered, children: authStore5(Button2, obj3) };
    obj3 = { variant: "primary", size: "sm", text: intl8.string(_modDef3863.FH2Udn), onPress: null, loading: null };
    Button2 = components_Button_Button.Button;
    intl8 = intl9.intl;
    ({ onReviewPermissions: obj9.onPress, loading: obj9.loading } = permissionsGate);
    return authStore5(metroImportDefault, obj2);
  } else if (null != permissionsGate) {
    const obj4 = { title: intl5.string(_modDef3863.FExK4w), body: intl6.string(_modDef3863["2pDCXO"]), children: authStore5(Button, obj5) };
    intl5 = intl9.intl;
    intl6 = intl9.intl;
    obj5 = { variant: "primary", size: "sm", text: intl7.string(_modDef3863["Nub/J6"]), onPress: null, loading: null };
    Button = components_Button_Button.Button;
    intl7 = intl9.intl;
    ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
    return authStore5(closure_25, obj4);
  } else if ("frame" === mode) {
    let tmp13Result;
    if (frameHostAvailable) {
      const obj6 = { applicationId: previewApplicationId, projectId, frameSurface, launch: frameLaunchParams, visible: true };
      tmp13Result = tmp13(closure_28, obj6);
    } else {
      const obj8 = { title: intl3.string(_modDef3863["7k4GyN"]), body: intl4.string(_modDef3863.zdIy3R) };
      intl3 = intl9.intl;
      intl4 = intl9.intl;
      tmp13Result = tmp13(closure_25, obj8);
    }
    return tmp13Result;
  } else if ("widget" === mode) {
    let tmp10 = null;
    if (null != widgetApplicationId) {
      const obj17 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === availability.profileState };
      tmp10 = authStore5(closure_29, obj17);
    }
    return tmp10;
  } else if ("bot" === mode) {
    const obj18 = { projectId, previewApplicationId };
    return authStore5(closure_30, obj18);
  } else if ("overlay" === mode) {
    return null;
  } else if (null === mode) {
    const obj = { title: intl.string(_modDef3863["7k4GyN"]), body: intl2.string(_modDef3863.zdIy3R) };
    intl = intl9.intl;
    intl2 = intl9.intl;
    return authStore5(closure_25, obj);
  }
});
const result1 = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default tmp10;
export const leaveConjurePreviewFrame = function leaveConjurePreviewFrame(arg0) {
  const obj = conjurePreviewSurface2;
  const conjureBuilderPreviewFrames = obj.getConjureBuilderPreviewFrames(arg0);
  for (const item10011 of conjureBuilderPreviewFrames) {
    let obj2 = leaveFrame;
    let leaveFrameResult = obj2.leaveFrame(item10011.id);
    continue;
  }
};
export const ConjureBuilderInlineContext = context;
export const PreviewFrame = tmp9;
