// Module ID: 15323
// Function ID: 15324
// Name: InappropriateConversationModal
// Dependencies: [32, 19, 17, 1372, 10905, 21, 4836, 576, 504, 4678, 1485, 6004, 4832, 1115, 5281, 10912, 15324, 10918, 15325, 5936, 10938, 5039, 10913, 6421, 2]
// Exports: default

// Module 15323 (InappropriateConversationModal)
import react2 from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import useNavigation from "useNavigation" /* 1485 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import TrafficConeSpotIllustration from "TrafficConeSpotIllustration" /* 6004 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 10913 */;
import SafetyTipsSectionDefault from "SafetyTipsSection" /* 10918 */;
import TakeActionScreenDefault from "TakeActionScreen" /* 15324 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 10905 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const react_mod = react2;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function IntroScreen(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let senderId;
  let warningId;
  ({ warningId: require, senderId: importDefault, trackAnalyticsEvent: dependencyMap } = arg0);
  const tmp = closure_15();
  let obj = get_initialized;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(importDefault));
  const obj2 = UserUtilsDefault;
  const name = obj2.getName(stateFromStores);
  const obj3 = useNavigation;
  let closure_3 = obj3.useNavigation();
  const obj4 = { style: tmp.container, children: items1 };
  items1 = [closure_13(TrafficConeSpotIllustration.TrafficConeSpotIllustration, {}), , ];
  const obj5 = { style: tmp.warningText, children: items2 };
  const obj6 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: intl.string(intl5.t.sSMgC6) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items2 = [closure_13(Text, obj6), ];
  const obj7 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: intl2.format(intl5.t.q2QrTY, { username: name }) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items2[1] = closure_13(Text2, obj7);
  items1[1] = closure_14(closure_7, obj5);
  const obj8 = { style: tmp.ctaContainer, children: items3 };
  const obj9 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(intl5.t["+o4Q7e"]),
    grow: true,
    onPress() {
      const obj = { warningId: require, senderId: importDefault };
      closure_3.push("TAKE_ACTION", obj);
      dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
    }
  };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items3 = [closure_13(Button, obj9), ];
  const obj10 = {
    variant: "secondary",
    size: "lg",
    text: intl4.string(intl5.t.xLkGzP),
    grow: true,
    onPress() {
      closure_3.push("SAFETY_TIPS");
      dependencyMap(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
    }
  };
  const Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items3[1] = closure_13(Button2, obj10);
  items1[2] = closure_14(closure_7, obj8);
  return closure_14(closure_7, obj4);
}
function TakeActionScreen(arg0) {
  let channelId;
  let intl;
  let intl2;
  let isReported;
  let items;
  let items1;
  let senderId;
  let setReported;
  let trackAnalyticsEvent;
  ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.warningText, children: items };
  const obj3 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: intl.string(intl5.t["mWO+ys"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [map1(Text, obj3), ];
  const obj4 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: intl2.string(intl5.t.S0XtKF) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = map1(Text2, obj4);
  items1 = [authStore2(metroImportDefault, obj2), map1(TakeActionScreenDefault, { senderId, channelId, isReported, setReported, trackAnalyticsEvent })];
  return authStore2(metroImportDefault, obj);
}
function SafetyTipsScreen() {
  let arr;
  let intl;
  let obj2;
  let obj3;
  let tmp2;
  const tmp = closure_15();
  let obj = { style: tmp.container, children: map1(metroImportDefault, obj2) };
  obj2 = { style: tmp.safetyTips, children: map1(tmp2, obj3) };
  obj3 = {
    showHeader: true,
    description: intl.string(intl5.t.DJMZX6),
    safetyTips: arr.map((children, index) => {
      const obj = { variant: "text-sm/medium", children };
      return closure_1_13(Text_Text.Text, obj, index);
    })
  };
  tmp2 = SafetyTipsSectionDefault;
  intl = intl5.intl;
  arr = closure_12();
  return map1(metroImportDefault, obj);
}
function CrisisTextLineScreen(trackAnalyticsEvent) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  const tmp = closure_15();
  const obj = { style: tmp.container, children: items };
  items = [closure_13(trackAnalyticsEvent(15325).SafetyChatSpotIllustration, {}), , ];
  const obj2 = { style: tmp.warningText, children: items1 };
  const obj3 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: intl.string(trackAnalyticsEvent(1115).t.NUMAsF) };
  const Text = trackAnalyticsEvent(4832).Text;
  intl = trackAnalyticsEvent(1115).intl;
  items1 = [closure_13(Text, obj3), ];
  const obj4 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: intl2.string(trackAnalyticsEvent(1115).t.uicS5l) };
  const Text2 = trackAnalyticsEvent(4832).Text;
  intl2 = trackAnalyticsEvent(1115).intl;
  items1[1] = closure_13(Text2, obj4);
  items[1] = closure_14(closure_7, obj2);
  const obj5 = { style: tmp.ctaContainer, children: items2 };
  const obj6 = {
    variant: "secondary",
    size: "lg",
    text: intl3.string(trackAnalyticsEvent(1115).t.lkUb4S),
    grow: true,
    onPress() {
      metroRequire.openURL(React4);
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
    }
  };
  const Button = trackAnalyticsEvent(5281).Button;
  intl3 = trackAnalyticsEvent(1115).intl;
  items2 = [closure_13(Button, obj6), ];
  const obj7 = {
    variant: "secondary",
    size: "lg",
    text: intl4.string(trackAnalyticsEvent(1115).t.ogLlvy),
    grow: true,
    onPress() {
      metroRequire.openURL(authStore);
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
    }
  };
  const Button2 = trackAnalyticsEvent(5281).Button;
  intl4 = trackAnalyticsEvent(1115).intl;
  items2[1] = closure_13(Button2, obj7);
  items[2] = closure_14(closure_7, obj5);
  return closure_14(closure_7, obj);
}
let react = react_mod;
const useState = react2.useState;
({ Linking: metroRequire, View: metroImportDefault } = react_native);
({ CRISIS_TEXT_LINE_SMS_URI: c9, CRISIS_TEXT_LINE_URL: c10, TAKEOVER_MODAL_KEY: unpackModuleId, getInappropriateConversationsSafetyTips: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, warningText: obj3, ctaContainer: obj4, takeoverHeader: { textAlign: "center", maxWidth: 268 }, takeoverDescription: { textAlign: "center" }, safetyTips: { alignSelf: "stretch" } };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16, height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, display: "flex", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj4 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx");

export default function InappropriateConversationModal(channelId) {
  let isNudgeWarning;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let tmp2;
  let tmp3;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const senderId = channelId.senderId;
  let memo;
  const tmp = senderId(memo(false), 2);
  [tmp2, tmp3] = tmp;
  let obj = channelId(warningType[20]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  react = tmp4;
  let items = [channelId, warningId, warningType, senderId, tmp4];
  memo = react.useMemo(() => ({ channelId, senderId, warningId, warningType, isNudgeWarning }), items);
  const items1 = [channelId, warningId, memo];
  const items2 = [memo];
  const callback = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(unpackModuleId);
    const items = [warningId];
    const obj2 = ChannelSafetyWarningsActionCreators;
    const result = obj2.dismissChannelSafetyWarnings(channelId, items);
    const obj3 = { cta: SafetyWarningUtils.CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS };
    const trackCtaEvent = SafetyWarningUtils.trackCtaEvent;
    SafetyWarningUtils;
    const merged = Object.assign(memo);
    trackCtaEvent(obj3);
  }, items1);
  const effect = react.useEffect(() => {
    const obj = { viewName: SafetyWarningUtils.ViewNameTypes.SAFETY_TAKEOVER_MODAL };
    const trackNamedViewEvent = SafetyWarningUtils.trackNamedViewEvent;
    SafetyWarningUtils;
    const merged = Object.assign(memo);
    trackNamedViewEvent(obj);
  }, items2);
  const items3 = [channelId, warningId, senderId, warningType, tmp4];
  const callback1 = react.useCallback((cta) => {
    const obj = SafetyWarningUtils;
    const obj2 = { channelId, warningId, senderId, warningType, cta, isNudgeWarning };
    obj.trackCtaEvent(obj2);
  }, items3);
  let obj2 = { screens: obj6, initialRouteName: "INTRO" };
  let closure_3 = tmp2;
  react = tmp3;
  let obj3 = { title: "", fullscreen: true, headerRight: obj4.getHeaderCloseButton(() => callback()), headerLeft: obj5.getHeaderBackButton() };
  const Navigator = channelId(warningType[23]).Navigator;
  obj4 = channelId(warningType[19]);
  obj6 = { INTRO: obj7, TAKE_ACTION: obj8, SAFETY_TIPS: obj9, CRISIS_TEXT_LINE: obj10 };
  obj5 = channelId(warningType[19]);
  obj7 = {
    headerLeft() {
      return null;
    },
    render() {
      const obj = { warningId, senderId, trackAnalyticsEvent: callback1 };
      return closure_2_13(IntroScreen, obj);
    }
  };
  let merged = Object.assign(obj3);
  obj8 = {
    render() {
      const obj = { senderId, channelId, isReported, setReported, trackAnalyticsEvent: callback1 };
      return closure_2_13(TakeActionScreen, obj);
    }
  };
  const merged1 = Object.assign(obj3);
  obj9 = {
    render() {
      return closure_1_13(SafetyTipsScreen, {});
    }
  };
  const merged2 = Object.assign(obj3);
  obj10 = {
    render() {
      const obj = { trackAnalyticsEvent: callback1 };
      return closure_2_13(CrisisTextLineScreen, obj);
    }
  };
  const merged3 = Object.assign(obj3);
  return closure_13(Navigator, obj2);
};
