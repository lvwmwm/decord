// Module ID: 18549
// Function ID: 18550
// Name: ConjureNativePreview
// Dependencies: [32, 19, 17, 6905, 4861, 6901, 1386, 2118, 18536, 6903, 1071, 6906, 21, 5012, 575, 6114, 5603, 18550, 14684, 504, 7646, 14012, 7693, 7660, 9954, 5587, 18551, 18552, 18553, 18555, 15905, 18557, 1112, 4244, 5610, 18559, 7691, 7813, 7436, 11725, 1378, 18561, 6084, 2]
// Exports: default

// Module 18549 (ConjureNativePreview)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl11 from "intl" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import Text_Text from "Text/Text" /* 5603 */;
import components_Button_Button from "components/Button/Button" /* 5610 */;
import Card_Card from "Card/Card" /* 6114 */;
import FramesConstants from "FramesConstants" /* 6906 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7436 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7646 */;
import leaveFrame from "leaveFrame" /* 7660 */;
import ConjurePlatformUtils from "ConjurePlatformUtils" /* 7693 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7813 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9954 */;
import useEdgeOnlySwipeExitDefault from "useEdgeOnlySwipeExit" /* 18550 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 18551 */;
import ConjurePreviewProfileDefault from "ConjurePreviewProfile" /* 18559 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore from "FramesStore" /* 6905 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import ReadStateStore from "ReadStateStore" /* 6901 */;
import UserStore from "UserStore" /* 1386 */;
import AppStateStore from "AppStateStore" /* 2118 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 18536 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_12;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
function StatusCard(body) {
  let Card;
  let children;
  let items;
  let items1;
  let obj2;
  let obj3;
  let title;
  body = body.body;
  ({ title, children } = body);
  const tmp = closure_23();
  const obj = { style: tmp.centered, children: closure_21(Card, obj2) };
  obj2 = { variant: "primary", style: tmp.card, children: authStore5(metroRequire, obj3) };
  obj3 = { style: tmp.cardBody, children: items1 };
  const obj4 = { style: tmp.cardCopy, children: items };
  Card = Card_Card.Card;
  items = [, ];
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", style: tmp.cardText, children: title };
  items[0] = closure_21(Text_Text.Text, obj5);
  let tmp2Result = null;
  if (null != body) {
    const obj6 = { variant: "body-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
    tmp2Result = tmp2(Text_Text.Text, obj6);
  }
  items[1] = tmp2Result;
  items1 = [authStore5(metroRequire, obj4), children];
  return closure_21(metroRequire, obj);
}
function HoldSwipeExit() {
  useEdgeOnlySwipeExitDefault(true);
  return null;
}
class PreviewFrame {
  constructor(applicationId) {
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
    let obj = applicationId(frameSurface[18]);
    const conjureControlActive = obj.useConjureControlActive(projectId);
    let obj2 = visible;
    const items = [projectId, visible];
    const active = top(projectId).active;
    const effect = visible.useEffect(() => () => closure_12(projectId), items);
    const tmp5 = closure_23();
    let obj3 = applicationId(frameSurface[19]);
    const items1 = [bottom];
    const stateFromStores = obj3.useStateFromStores(items1, () => {
      const obj = conjurePreviewSurface;
      return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
    });
    const items2 = [stateFromStores, frameSurface];
    const memo = visible.useMemo(() => {
      const obj = conjurePreviewSurface;
      return obj.getConjurePreviewSurface(stateFromStores, frameSurface);
    }, items2);
    const tmp9 = projectId(frameSurface[21])(applicationId, memo);
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
    const insets = tmp8(tmp2[25])().insets;
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
    const tmp8Result = projectId(frameSurface[27]);
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
      const obj6 = { frameId: tmp10.id, level: tmp(frameSurface[30]).FrameStackLevel.WithinAppContent, presentation: memo1, spinnerWhileLoading: tmpResult.isConjurePreviewSurface(tmp10.surface) };
      const tmp8Result3 = projectId(frameSurface[28]);
      const tmp8Result4 = projectId(frameSurface[29]);
      tmpResult = tmp(frameSurface[20]);
      items6 = [closure_21(tmp8Result4, obj6), ];
      let tmp35Result = null;
      const tmp33 = stateFromStores;
      if (visible) {
        tmp35Result = null;
        if (active) {
          tmp35Result = null;
          if (!conjureControlActive) {
            const obj7 = { projectId };
            tmp35Result = tmp35(tmp8(tmp2[31]), obj7);
          }
        }
      }
      items6[1] = tmp35Result;
      items7 = [closure_22(tmp8Result3, obj5), ];
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
      const obj8 = { title: intl.string(projectId(frameSurface[33]).lTPbnG), body: intl2.string(projectId(frameSurface[33]).e6GiAZ), children: closure_21(Button, obj9) };
      intl = tmp(tmp2[32]).intl;
      intl2 = tmp(tmp2[32]).intl;
      obj9 = {
        variant: "primary",
        size: "sm",
        text: intl3.string(projectId(frameSurface[33])["WFJ/vb"]),
        onPress() {
            return closure_11(null);
          }
      };
      Button = tmp(tmp2[34]).Button;
      intl3 = tmp(tmp2[32]).intl;
      tmp40Result = tmp40(StatusCard, obj8);
    } else {
      const obj10 = { style: tmp5.centered, children: closure_21(flag, {}) };
      tmp40Result = tmp40(stateFromStores, obj10);
    }
    return tmp40Result;
  }
}
function PreviewWidget(arg0) {
  let applicationId;
  let currentUser;
  let intl;
  let intl2;
  let projectId;
  let revoked;
  let tmp4;
  ({ projectId, applicationId, revoked } = arg0);
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (revoked) {
    const obj2 = { title: intl.string(_modDef4244["08U+YO"]), body: intl2.string(_modDef4244.pKBfrc) };
    intl = tmp(1112).intl;
    intl2 = tmp(1112).intl;
    tmp4 = closure_21(StatusCard, obj2);
  } else {
    tmp4 = null;
    if (null != stateFromStores) {
      const obj3 = { user: stateFromStores, projectId, applicationId };
      tmp4 = closure_21(ConjurePreviewProfileDefault, obj3);
    }
  }
  return tmp4;
}
function PreviewBot(projectId) {
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
  let tmp = closure_23();
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
  const items = [stateFromStores1];
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
        let obj = projectId(c2[36]);
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
      obj.preload(closure_19, tmp);
    }
  }, items3);
  const items4 = [stateFromStores2];
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
    const obj3 = { title: intl.string(previewApplicationId(4244)["VP/O8s"]), body: intl2.string(previewApplicationId(4244).Sl9ITD), children: closure_21(Button, obj4) };
    intl = tmp7(1112).intl;
    intl2 = tmp7(1112).intl;
    obj4 = { variant: "secondary", size: "sm", text: intl3.string(projectId(1112).t["5911Lb"]), onPress: callback };
    Button = tmp7(5610).Button;
    intl3 = tmp7(1112).intl;
    tmp28Result = closure_21(StatusCard, obj3);
  } else if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: closure_21(closure_5, {}) };
    tmp28Result = closure_21(closure_6, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: items8 };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: tmp19, screenIndex: "conjure-preview", alwaysRespectKeyboard: true, disableGradient: true };
    items8 = [closure_21(previewApplicationId(11725), obj7, stateFromStores.id), ];
    let tmp30Result = null;
    const tmp28 = closure_22;
    const tmp29 = closure_6;
    const tmp30 = closure_21;
    const tmp7Result4 = projectId(1378);
    if (tmp7Result4.isAndroid()) {
      tmp30Result = tmp30(tmp7(18561).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp30Result;
    tmp28Result = tmp28(tmp29, obj6);
  }
  return tmp28Result;
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ exitConjureDesignFeedback: closure_12, useConjureDesignFeedback: map1 } = conjureDesignFeedbackStore);
({ AnalyticsObjects: closure_15, AnalyticsObjectTypes: closure_16, AnalyticsSections: closure_17, AppStates: closure_18, ME: closure_19 } = Constants);
const isLaunched = FramesConstants.isLaunched;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
let createStyles = createStyles_mod;
let obj = { frame: { flex: 1 }, centered: obj2, card: { alignSelf: "stretch" }, cardBody: obj3, cardCopy: obj4, cardText: { textAlign: "center" }, dm: { flex: 1 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
const sidebars = createStyles(obj);
let context = react.createContext(false);
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default function ConjureNativePreview(arg0) {
  let Stack;
  let botInstall;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let mode;
  let obj5;
  let obj7;
  let previewApplicationId;
  let projectId;
  let widgetApplicationId;
  ({ projectId, previewApplicationId, mode, widgetApplicationId, botInstall } = arg0);
  if (null != botInstall) {
    let obj4;
    const obj2 = { variant: "primary", size: "sm", text: intl5.string(_modDef4244.RGeB11), onPress: null, loading: null };
    const Button = components_Button_Button.Button;
    intl5 = intl11.intl;
    ({ onAddBot: obj6.onPress, loading: obj6.loading } = botInstall);
    const tmp26 = closure_21(Button, obj2);
    const agentPrompt = botInstall.agentPrompt;
    const tmp27 = StatusCard;
    if (null == agentPrompt) {
      const obj3 = { title: intl6.string(_modDef4244.xlEjZ8), body: intl7.string(_modDef4244["4ByPbd"]), children: tmp26 };
      intl6 = tmp23(1112).intl;
      intl7 = tmp23(1112).intl;
      obj4 = obj3;
    } else {
      obj4 = { title: intl8.string(_modDef4244.sRzJdk), body: intl9.formatToPlainString(_modDef4244.cbU1iq, obj5), children: authStore5(Stack, obj7) };
      intl8 = tmp23(1112).intl;
      intl9 = tmp23(1112).intl;
      obj5 = { reason: agentPrompt.reason };
      obj7 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items };
      Stack = tmp23(6084).Stack;
      items = [tmp26, ];
      const obj8 = { variant: "secondary", size: "sm", text: intl10.string(_modDef4244.Vmb0K4), onPress: agentPrompt.onSkip, disabled: botInstall.loading };
      const Button2 = tmp23(5610).Button;
      intl10 = tmp23(1112).intl;
      items[1] = closure_21(Button2, obj8);
    }
    return closure_21(tmp27, obj4);
  } else if ("frame" === mode) {
    let tmp15Result;
    if (tmp4) {
      const obj9 = { applicationId: previewApplicationId, projectId, frameSurface: tmp2, launch: tmp3, visible: true };
      tmp15Result = tmp15(PreviewFrame, obj9);
    } else {
      const obj10 = { title: intl3.string(_modDef4244["7k4GyN"]), body: intl4.string(_modDef4244.zdIy3R) };
      intl3 = intl11.intl;
      intl4 = intl11.intl;
      tmp15Result = tmp15(StatusCard, obj10);
    }
    return tmp15Result;
  } else if ("widget" === mode) {
    let tmp12 = null;
    if (null != widgetApplicationId) {
      const obj11 = { projectId, applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === tmp.profileState };
      tmp12 = closure_21(PreviewWidget, obj11);
    }
    return tmp12;
  } else if ("bot" === mode) {
    const obj21 = { projectId, previewApplicationId };
    return closure_21(PreviewBot, obj21);
  } else if ("overlay" === mode) {
    return null;
  } else if (null === mode) {
    const obj = { title: intl.string(_modDef4244["7k4GyN"]), body: intl2.string(_modDef4244.zdIy3R) };
    intl = intl11.intl;
    intl2 = intl11.intl;
    return closure_21(StatusCard, obj);
  }
};
export const ConjureBuilderInlineContext = context;
export { PreviewFrame };
