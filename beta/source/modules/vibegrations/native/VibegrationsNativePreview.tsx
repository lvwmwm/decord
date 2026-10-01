// Module ID: 16276
// Function ID: 16277
// Name: VibegrationsNativePreview
// Dependencies: [32, 19, 17, 8499, 502, 2045, 4851, 1980, 16237, 1074, 8500, 21, 4836, 576, 5919, 4832, 8751, 12446, 16277, 8760, 16278, 16279, 16286, 16288, 1115, 3715, 5281, 504, 7047, 8387, 6584, 4849, 6531, 10882, 1364, 16292, 2]
// Exports: default, leaveVibegrationsPreviewFrame

// Module 16276 (VibegrationsNativePreview)
import nativeDefault from "native" /* 576 */;
import intl8 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import Text_Text from "Text/Text" /* 4832 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Card_Card from "Card/Card" /* 5919 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6531 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7047 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 8387 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore from "FramesStore" /* 8499 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import AppStateStore from "AppStateStore" /* 1980 */;
import vibegrationsDesignFeedbackStore from "vibegrationsDesignFeedbackStore" /* 16237 */;
import Constants from "Constants" /* 1074 */;
import FramesConstants from "FramesConstants" /* 8500 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c0, dependencyMap;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function StatusCard(arg0) {
  let Card;
  let body;
  let children;
  let items;
  let items1;
  let obj2;
  let obj3;
  let title;
  ({ title, body, children } = arg0);
  const tmp = closure_26();
  const obj = { style: tmp.centered, children: closure_24(Card, obj2) };
  obj2 = { variant: "primary", style: tmp.card, children: closure_25(metroImportDefault, obj3) };
  obj3 = { style: tmp.cardBody, children: items1 };
  const obj4 = { style: tmp.cardCopy, children: items };
  Card = Card_Card.Card;
  items = [, ];
  const obj5 = { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title };
  items[0] = closure_24(Text_Text.Text, obj5);
  const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
  items[1] = closure_24(Text_Text.Text, obj6);
  items1 = [closure_25(metroImportDefault, obj4), children];
  return closure_24(metroImportDefault, obj);
}
class PreviewFrame {
  constructor(applicationId) {
    let Button;
    let closure_2;
    let closure_3;
    let closure_5;
    let first;
    let intl;
    let intl2;
    let intl3;
    let items2;
    let obj8;
    let onOpenPublishedApp;
    let tmp27Result;
    let visible;
    applicationId = applicationId.applicationId;
    const projectId = applicationId.projectId;
    ({ visible, onOpenPublishedApp } = applicationId);
    if (onOpenPublishedApp === undefined) {
      onOpenPublishedApp = null;
    }
    first = undefined;
    closure_5 = undefined;
    let tmp = applicationId;
    let obj = applicationId(12446);
    const vibegrationsControlActive = obj.useVibegrationsControlActive(projectId);
    let obj2 = first;
    const items = [projectId, visible];
    const active = closure_14(projectId).active;
    const effect = first.useEffect(() => () => closure_2_13(projectId), items);
    const tmp5 = closure_26();
    const tmp6 = closure_23(applicationId, surface);
    dependencyMap = tmp6;
    const tmp8 = projectId(16277)(applicationId, surface);
    _slicedToArray = tmp8;
    let tmp9 = null;
    if (null != tmp8) {
      tmp9 = null;
      if (closure_21(tmp8)) {
        tmp9 = tmp8;
      }
    }
    [first, closure_5] = obj2.useState(false);
    const items1 = [applicationId, first, tmp8, tmp6];
    const effect1 = obj2.useEffect(() => {
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
          const obj4 = FramesActionCreatorsDefault;
          obj4.demoteMainFrame(closure_2);
        }
      }
    }, items1);
    let tmp15 = visible;
    const tmp7Result = projectId(16278);
    if (visible) {
      tmp15 = null != tmp9;
    }
    tmp7Result(tmp15);
    if (null != tmp9) {
      let obj3 = { style: tmp5.frame, children: items2 };
      let obj4 = { frameId: tmp9.id, layoutMode: constants4.FOCUSED };
      items2 = [closure_24(tmp(16279).InlineFrameView, obj4), , ];
      let tmp23Result = null;
      const tmp21 = closure_25;
      const tmp22 = closure_7;
      if (visible) {
        tmp23Result = null;
        if (active) {
          tmp23Result = null;
          if (!vibegrationsControlActive) {
            const obj5 = { projectId };
            tmp23Result = tmp23(tmp7(16286), obj5);
          }
        }
      }
      items2[1] = tmp23Result;
      let tmp23Result2 = null;
      if (visible) {
        const obj6 = { projectId, active: vibegrationsControlActive, onOpenPublishedApp };
        tmp23Result2 = tmp23(tmp7(16288), obj6);
      }
      items2[2] = tmp23Result2;
      tmp27Result = tmp21(tmp22, obj3);
    } else if (first) {
      const obj7 = { title: intl.string(projectId(3715).MeLWCr), body: intl2.string(projectId(3715)["1RCbQT"]), children: closure_24(Button, obj8) };
      intl = tmp(1115).intl;
      intl2 = tmp(1115).intl;
      obj8 = {
        variant: "primary",
        size: "sm",
        text: intl3.string(projectId(3715)["42EdIV"]),
        onPress() {
            return closure_5(false);
          }
      };
      Button = tmp(5281).Button;
      intl3 = tmp(1115).intl;
      tmp27Result = tmp27(StatusCard, obj7);
    } else {
      const obj9 = { style: tmp5.centered, children: closure_24(closure_5, {}) };
      tmp27Result = tmp27(closure_7, obj9);
    }
    return tmp27Result;
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
  const tmp = closure_26();
  let obj = applicationId(504);
  const items = [AuthenticationStore];
  [][0] = applicationId;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  if (revoked) {
    const obj2 = { title: intl.string(_modDef3715.SGHO9K), body: intl2.string(_modDef3715["pV/rS2"]) };
    intl = tmp2(1115).intl;
    intl2 = tmp2(1115).intl;
    tmp6Result = tmp6(StatusCard, obj2);
  } else {
    const obj3 = { contentContainerStyle: tmp.widget, children: closure_24(UserProfileApplicationWidgetCardDefault, obj4) };
    obj4 = { userId: stateFromStores, widget: tmp5 };
    tmp6Result = tmp6(closure_6, obj3);
  }
  return tmp6Result;
}
function PreviewBot(previewApplicationId) {
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
  let tmp = closure_26();
  let tmp2 = id;
  let tmp3 = dependencyMap;
  let obj = id(6584);
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
          const obj = stateFromStores(closure_2[31]);
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
      obj.preload(closure_19, tmp);
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
    let obj2 = { title: intl.string(stateFromStores(3715).bl4eBc), body: intl2.string(stateFromStores(3715)["4iyrze"]), children: tmp19Result };
    intl = tmp2(1115).intl;
    intl2 = tmp2(1115).intl;
    tmp19Result = null;
    const tmp20 = StatusCard;
    if (null != id && tmp8[0] === id) {
      const obj4 = { variant: "secondary", size: "sm", text: intl3.string(tmp2(1115).t["5911Lb"]), onPress: callback };
      const Button = tmp2(5281).Button;
      intl3 = tmp2(1115).intl;
      tmp19Result = tmp19(Button, obj4);
    }
    tmp19Result2 = tmp19(tmp20, obj2);
  }
  if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: closure_24(id1, {}) };
    tmp29Result = closure_24(stateFromStores2, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: items8 };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: ref, screenIndex: "vibegrations-preview", alwaysRespectKeyboard: true, disableGradient: true };
    items8 = [closure_24(stateFromStores(10882), obj7, stateFromStores.id), ];
    let tmp31Result = null;
    const tmp29 = closure_25;
    const tmp2Result6 = tmp2(1364);
    const tmp30 = stateFromStores2;
    const tmp31 = closure_24;
    if (tmp2Result6.isAndroid()) {
      tmp31Result = tmp31(tmp2(16292).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp31Result;
    tmp29Result = tmp29(tmp30, obj6);
  }
  tmp19Result2 = tmp29Result;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ exitVibegrationsDesignFeedback: map1, useVibegrationsDesignFeedback: closure_14 } = vibegrationsDesignFeedbackStore);
({ AnalyticsObjects: closure_15, AnalyticsObjectTypes: closure_16, AnalyticsSections: closure_17, AppStates: closure_18, ME: closure_19 } = Constants);
({ FrameLayoutModes: closure_20, isLaunched: closure_21, MAIN_SURFACE: closure_22, makeFrameId: closure_23 } = FramesConstants);
({ jsx: closure_24, jsxs: closure_25 } = Fragment);
let createStyles = createStyles_mod;
let obj = { frame: { flex: 1 }, centered: obj2, card: { alignSelf: "stretch" }, cardBody: obj3, cardCopy: obj4, cardText: { textAlign: "center" }, widget: obj5, dm: { flex: 1 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5 = { padding: nativeDefault.space.PX_16 };
const prioritySpeakerDucking = createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativePreview.tsx");

export default function VibegrationsNativePreview(arg0) {
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
    const obj2 = { title: intl5.string(_modDef3715.DYwf2n), body: intl6.string(_modDef3715.WWj3pN), children: closure_24(Button, obj3) };
    intl5 = intl8.intl;
    intl6 = intl8.intl;
    obj3 = { variant: "primary", size: "sm", text: intl7.string(_modDef3715["CRfE/E"]), onPress: null, loading: null };
    Button = components_Button_Button.Button;
    intl7 = intl8.intl;
    ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
    return closure_24(StatusCard, obj2);
  } else if ("frame" === mode) {
    let tmp14Result;
    if (tmp3) {
      const obj4 = { applicationId: previewApplicationId, projectId: tmp, visible: true };
      tmp14Result = tmp14(PreviewFrame, obj4);
    } else {
      const obj5 = { title: intl3.string(_modDef3715.FHOJiH), body: intl4.string(_modDef3715["1yLQoV"]) };
      intl3 = intl8.intl;
      intl4 = intl8.intl;
      tmp14Result = tmp14(StatusCard, obj5);
    }
    return tmp14Result;
  } else if ("widget" === mode) {
    let tmp11 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === tmp2.profileState };
      tmp11 = closure_24(PreviewWidget, obj6);
    }
    return tmp11;
  } else if ("bot" === mode) {
    const obj13 = { previewApplicationId };
    return closure_24(PreviewBot, obj13);
  } else if (null === mode) {
    const obj = { title: intl.string(_modDef3715.FHOJiH), body: intl2.string(_modDef3715["1yLQoV"]) };
    intl = intl8.intl;
    intl2 = intl8.intl;
    return closure_24(StatusCard, obj);
  }
};
export const leaveVibegrationsPreviewFrame = function leaveVibegrationsPreviewFrame(arg0) {
  const frameBySurface = FramesStore.getFrameBySurface(arg0, closure_22);
  if (null != frameBySurface) {
    const obj = FramesNativeManagerDefault;
    obj.leaveFrame(frameBySurface.id);
  }
};
export { PreviewFrame };
