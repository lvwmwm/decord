// Module ID: 12439
// Function ID: 12440
// Name: ConjureNativePreview
// Dependencies: [32, 19, 17, 6981, 502, 4990, 6977, 2122, 12415, 6979, 1072, 6982, 21, 5141, 575, 7118, 5761, 12440, 11102, 504, 11062, 12405, 11081, 11125, 11114, 5743, 12441, 12442, 12443, 12451, 12455, 12457, 1113, 3995, 5768, 7917, 12459, 11079, 7625, 7415, 11401, 1377, 12578, 2]
// Exports: default

// Module 12439 (ConjureNativePreview)
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import Text_Text from "Text/Text" /* 5761 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import FramesConstants from "FramesConstants" /* 6982 */;
import Card_Card from "Card/Card" /* 7118 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7415 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7625 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7917 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11062 */;
import ConjurePlatformUtils from "ConjurePlatformUtils" /* 11081 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11114 */;
import leaveFrame from "leaveFrame" /* 11125 */;
import useEdgeOnlySwipeExitDefault from "useEdgeOnlySwipeExit" /* 12440 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 12441 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12459 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore from "FramesStore" /* 6981 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import ReadStateStore from "ReadStateStore" /* 6977 */;
import AppStateStore from "AppStateStore" /* 2122 */;
import conjureDesignFeedbackStore from "conjureDesignFeedbackStore" /* 12415 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let dependencyMap;

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
  const tmp = closure_24();
  const obj = { style: tmp.centered, children: authStore6(Card, obj2) };
  obj2 = { variant: "primary", style: tmp.card, children: sidebars(metroImportDefault, obj3) };
  obj3 = { style: tmp.cardBody, children: items1 };
  const obj4 = { style: tmp.cardCopy, children: items };
  Card = Card_Card.Card;
  items = [, ];
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", style: tmp.cardText, children: title };
  items[0] = authStore6(Text_Text.Text, obj5);
  let tmp2Result = null;
  if (null != body) {
    const obj6 = { variant: "body-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
    tmp2Result = tmp2(Text_Text.Text, obj6);
  }
  items[1] = tmp2Result;
  items1 = [sidebars(metroImportDefault, obj4), children];
  return authStore6(metroImportDefault, obj);
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
    const active = bottom(projectId).active;
    const effect = visible.useEffect(() => () => top(projectId), items);
    const tmp5 = closure_24();
    let obj3 = applicationId(frameSurface[19]);
    const items1 = [left];
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
      items6 = [closure_22(tmp8Result4, obj6), ];
      let tmp35Result = null;
      const tmp33 = memo;
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
      const obj8 = { title: intl.string(projectId(frameSurface[33]).lTPbnG), body: intl2.string(projectId(frameSurface[33]).e6GiAZ), children: closure_22(Button, obj9) };
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
      const obj10 = { style: tmp5.centered, children: closure_22(flag, {}) };
      tmp40Result = tmp40(memo, obj10);
    }
    return tmp40Result;
  }
}
function PreviewWidget(applicationId) {
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
    const obj2 = { title: intl.string(_modDef3995["08U+YO"]), body: intl2.string(_modDef3995.pKBfrc) };
    intl = tmp2(1113).intl;
    intl2 = tmp2(1113).intl;
    tmp6Result = tmp6(StatusCard, obj2);
  } else {
    const obj3 = { contentContainerStyle: tmp.widget, children: closure_22(UserProfileApplicationWidgetCardDefault, obj4) };
    obj4 = { userId: stateFromStores, widget: tmp5 };
    tmp6Result = tmp6(closure_6, obj3);
  }
  return tmp6Result;
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
        let obj = projectId(c2[37]);
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
    const obj3 = { title: intl.string(previewApplicationId(3995)["VP/O8s"]), body: intl2.string(previewApplicationId(3995).Sl9ITD), children: closure_22(Button, obj4) };
    intl = tmp7(1113).intl;
    intl2 = tmp7(1113).intl;
    obj4 = { variant: "secondary", size: "sm", text: intl3.string(projectId(1113).t["5911Lb"]), onPress: callback };
    Button = tmp7(5768).Button;
    intl3 = tmp7(1113).intl;
    tmp28Result = closure_22(StatusCard, obj3);
  } else if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: closure_22(closure_5, {}) };
    tmp28Result = closure_22(id, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: items8 };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: tmp19, screenIndex: "conjure-preview", alwaysRespectKeyboard: true, disableGradient: true };
    items8 = [closure_22(previewApplicationId(11401), obj7, stateFromStores.id), ];
    let tmp30Result = null;
    const tmp28 = closure_23;
    const tmp29 = id;
    const tmp30 = closure_22;
    const tmp7Result4 = projectId(1377);
    if (tmp7Result4.isAndroid()) {
      tmp30Result = tmp30(tmp7(12578).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp30Result;
    tmp28Result = tmp28(tmp29, obj6);
  }
  return tmp28Result;
}
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
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
let context = react.createContext(false);
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default function ConjureNativePreview(arg0) {
  let Button;
  let botInstall;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let mode;
  let obj3;
  let previewApplicationId;
  let projectId;
  let widgetApplicationId;
  ({ projectId, previewApplicationId, mode, widgetApplicationId, botInstall } = arg0);
  if (null != botInstall) {
    const obj2 = { title: intl5.string(_modDef3995.xlEjZ8), body: intl6.string(_modDef3995["4ByPbd"]), children: authStore6(Button, obj3) };
    intl5 = intl8.intl;
    intl6 = intl8.intl;
    obj3 = { variant: "primary", size: "sm", text: intl7.string(_modDef3995.RGeB11), onPress: null, loading: null };
    Button = components_Button_Button.Button;
    intl7 = intl8.intl;
    ({ onAddBot: obj7.onPress, loading: obj7.loading } = botInstall);
    return authStore6(StatusCard, obj2);
  } else if ("frame" === mode) {
    let tmp15Result;
    if (tmp4) {
      const obj4 = { applicationId: previewApplicationId, projectId, frameSurface: tmp2, launch: tmp3, visible: true };
      tmp15Result = tmp15(PreviewFrame, obj4);
    } else {
      const obj5 = { title: intl3.string(_modDef3995["7k4GyN"]), body: intl4.string(_modDef3995.zdIy3R) };
      intl3 = intl8.intl;
      intl4 = intl8.intl;
      tmp15Result = tmp15(StatusCard, obj5);
    }
    return tmp15Result;
  } else if ("widget" === mode) {
    let tmp12 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === tmp.profileState };
      tmp12 = authStore6(PreviewWidget, obj6);
    }
    return tmp12;
  } else if ("bot" === mode) {
    const obj13 = { projectId, previewApplicationId };
    return authStore6(PreviewBot, obj13);
  } else if ("overlay" === mode) {
    return null;
  } else if (null === mode) {
    const obj = { title: intl.string(_modDef3995["7k4GyN"]), body: intl2.string(_modDef3995.zdIy3R) };
    intl = intl8.intl;
    intl2 = intl8.intl;
    return authStore6(StatusCard, obj);
  }
};
export const ConjureBuilderInlineContext = context;
export { PreviewFrame };
