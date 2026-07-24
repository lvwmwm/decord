// Module ID: 14740
// Function ID: 112327
// Name: IntroScreen
// Dependencies: [57, 31, 27, 1849, 10166, 33, 4130, 689, 566, 3969, 1456, 5807, 4126, 1212, 4543, 10163, 14741, 10186, 5087, 10160, 4337, 10164, 5517, 2]
// Exports: default

// Module 14740 (IntroScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { useState } from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function IntroScreen(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ warningId: require, senderId: importDefault, trackAnalyticsEvent: dependencyMap } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getUser(closure_1));
  let obj1 = importDefault(3969);
  const name = obj1.getName(stateFromStores);
  let obj2 = require(1456) /* useNavigation */;
  let _slicedToArray = obj2.useNavigation();
  obj = { style: tmp.container };
  const items1 = [callback2(require(5807) /* AccountAgeTier10LargeBadge */.TrafficConeSpotIllustration, {}), , ];
  obj = { style: tmp.warningText };
  obj1 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.sSMgC6);
  const items2 = [callback2(require(4126) /* Text */.Text, obj1), ];
  obj2 = { variant: "text-md/medium", style: tmp.takeoverDescription };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.q2QrTY, { username: name });
  items2[1] = callback2(require(4126) /* Text */.Text, obj2);
  obj.children = items2;
  items1[1] = callback3(closure_7, obj);
  const obj3 = { style: tmp.ctaContainer };
  const obj4 = { variant: "primary", size: "lg", text: null, grow: true };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl3.string(require(1212) /* getSystemLocale */.t["+o4Q7e"]);
  obj4.onPress = function onPress() {
    callback(outer1_0(outer1_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
  };
  const items3 = [callback2(require(4543) /* Button */.Button, obj4), ];
  const obj5 = { variant: "secondary", size: "lg", text: null, grow: true };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj5.text = intl4.string(require(1212) /* getSystemLocale */.t.xLkGzP);
  obj5.onPress = function onPress() {
    callback(outer1_0(outer1_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
  };
  items3[1] = callback2(require(4543) /* Button */.Button, obj5);
  obj3.children = items3;
  items1[2] = callback3(closure_7, obj3);
  obj.children = items1;
  return callback3(closure_7, obj);
}
function TakeActionScreen(arg0) {
  let channelId;
  let isReported;
  let senderId;
  let setReported;
  let trackAnalyticsEvent;
  ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.warningText };
  obj = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["mWO+ys"]);
  const items = [callback2(require(4126) /* Text */.Text, obj), ];
  const obj1 = { variant: "text-md/medium", style: tmp.takeoverDescription };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.S0XtKF);
  items[1] = callback2(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  const items1 = [callback3(closure_7, obj), callback2(importDefault(14741), { senderId, channelId, isReported, setReported, trackAnalyticsEvent })];
  obj.children = items1;
  return callback3(closure_7, obj);
}
function SafetyTipsScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.safetyTips };
  obj = { showHeader: true };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.description = intl.string(require(1212) /* getSystemLocale */.t.DJMZX6);
  const tmp2 = importDefault(10186);
  obj.safetyTips = callback().map((children) => outer1_13(outer1_0(outer1_2[12]).Text, { variant: "text-sm/medium", children }, arg1));
  obj.children = callback2(tmp2, obj);
  obj.children = callback2(closure_7, obj);
  return callback2(closure_7, obj);
}
function CrisisTextLineScreen(trackAnalyticsEvent) {
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  const items = [callback2(trackAnalyticsEvent(5807).SafetyChatSpotIllustration, {}), , ];
  obj = { style: tmp.warningText };
  obj = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header" };
  const intl = trackAnalyticsEvent(1212).intl;
  obj.children = intl.string(trackAnalyticsEvent(1212).t.NUMAsF);
  const items1 = [callback2(trackAnalyticsEvent(4126).Text, obj), ];
  const obj1 = { variant: "text-md/medium", style: tmp.takeoverDescription };
  const intl2 = trackAnalyticsEvent(1212).intl;
  obj1.children = intl2.string(trackAnalyticsEvent(1212).t.uicS5l);
  items1[1] = callback2(trackAnalyticsEvent(4126).Text, obj1);
  obj.children = items1;
  items[1] = callback3(closure_7, obj);
  const obj2 = { style: tmp.ctaContainer };
  const obj3 = { variant: "secondary", size: "lg", text: null, grow: true };
  const intl3 = trackAnalyticsEvent(1212).intl;
  obj3.text = intl3.string(trackAnalyticsEvent(1212).t.lkUb4S);
  obj3.onPress = function onPress() {
    outer1_6.openURL(outer1_9);
    trackAnalyticsEvent(trackAnalyticsEvent(outer1_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
  };
  const items2 = [callback2(trackAnalyticsEvent(4543).Button, obj3), ];
  const obj4 = { variant: "secondary", size: "lg", text: null, grow: true };
  const intl4 = trackAnalyticsEvent(1212).intl;
  obj4.text = intl4.string(trackAnalyticsEvent(1212).t.ogLlvy);
  obj4.onPress = function onPress() {
    outer1_6.openURL(outer1_10);
    trackAnalyticsEvent(trackAnalyticsEvent(outer1_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
  };
  items2[1] = callback2(trackAnalyticsEvent(4543).Button, obj4);
  obj2.children = items2;
  items[2] = callback3(closure_7, obj2);
  obj.children = items;
  return callback3(closure_7, obj);
}
function getScreens(arg0) {
  let _slicedToArray;
  let result;
  let closure_6;
  let dependencyMap;
  let importDefault;
  let require;
  let useState;
  ({ warningId: require, senderId: importDefault, channelId: dependencyMap, isReported: _slicedToArray, setReported: result, handleDismiss: useState, trackAnalyticsEvent: closure_6 } = arg0);
  let obj = { title: "", fullscreen: true };
  let obj1 = require(5087) /* HeaderBackImage */;
  obj.headerRight = obj1.getHeaderCloseButton(() => callback());
  let obj2 = require(5087) /* HeaderBackImage */;
  obj.headerLeft = obj2.getHeaderBackButton();
  obj = {};
  obj = {};
  const merged = Object.assign(obj);
  obj["headerLeft"] = function headerLeft() {
    return null;
  };
  obj["render"] = function render() {
    return outer1_13(outer1_16, { warningId: closure_0, senderId: closure_1, trackAnalyticsEvent: closure_6 });
  };
  obj.INTRO = obj;
  obj1 = {};
  const merged1 = Object.assign(obj);
  obj1["render"] = function render() {
    return outer1_13(outer1_17, { senderId: closure_1, channelId: closure_2, isReported: _slicedToArray, setReported: result, trackAnalyticsEvent: closure_6 });
  };
  obj.TAKE_ACTION = obj1;
  obj2 = {};
  const merged2 = Object.assign(obj);
  obj2["render"] = function render() {
    return outer1_13(outer1_18, {});
  };
  obj.SAFETY_TIPS = obj2;
  const obj3 = {};
  const merged3 = Object.assign(obj);
  obj3["render"] = function render() {
    return outer1_13(outer1_19, { trackAnalyticsEvent: closure_6 });
  };
  obj.CRISIS_TEXT_LINE = obj3;
  return obj;
}
({ Linking: closure_6, View: closure_7 } = get_ActivityIndicator);
({ CRISIS_TEXT_LINE_SMS_URI: closure_9, CRISIS_TEXT_LINE_URL: closure_10, TAKEOVER_MODAL_KEY: closure_11, getInappropriateConversationsSafetyTips: closure_12 } = LOCATION_CONTEXT_MOBILE);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", justifyContent: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_32, gap: require("_createForOfIteratorHelperLoose").space.PX_16, height: "100%" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, display: "flex", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.warningText = obj1;
let obj2 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.ctaContainer = obj2;
_createForOfIteratorHelperLoose.takeoverHeader = { textAlign: "center", maxWidth: 268 };
_createForOfIteratorHelperLoose.takeoverDescription = { textAlign: "center" };
_createForOfIteratorHelperLoose.safetyTips = { alignSelf: "stretch" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx");

export default function InappropriateConversationModal(channelId) {
  let tmp2;
  let tmp3;
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const senderId = channelId.senderId;
  [tmp2, tmp3] = senderId(memo(false), 2);
  let obj = channelId(warningType[19]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  const React = tmp4;
  let items = [channelId, warningId, warningType, senderId, tmp4];
  memo = React.useMemo(() => ({ channelId, senderId, warningId, warningType, isNudgeWarning: result }), items);
  const items1 = [channelId, warningId, memo];
  const items2 = [memo];
  const callback = React.useCallback(() => {
    let obj = warningId(warningType[20]);
    obj.popWithKey(outer1_11);
    const items = [warningId];
    const result = channelId(warningType[21]).dismissChannelSafetyWarnings(channelId, items);
    const obj2 = channelId(warningType[21]);
    obj = {};
    const merged = Object.assign(memo);
    obj["cta"] = channelId(warningType[15]).CtaEventTypes.USER_TAKEOVER_MODAL_DISMISS;
    channelId(warningType[15]).trackCtaEvent(obj);
  }, items1);
  const effect = React.useEffect(() => {
    let obj = channelId(warningType[15]);
    obj = {};
    const merged = Object.assign(memo);
    obj["viewName"] = channelId(warningType[15]).ViewNameTypes.SAFETY_TAKEOVER_MODAL;
    obj.trackNamedViewEvent(obj);
  }, items2);
  const items3 = [channelId, warningId, senderId, warningType, tmp4];
  const callback1 = React.useCallback((cta) => {
    let obj = channelId(warningType[15]);
    obj = { channelId, warningId, senderId, warningType, cta, isNudgeWarning: result };
    obj.trackCtaEvent(obj);
  }, items3);
  obj = { screens: getScreens({ channelId, warningId, senderId, isReported: tmp2, setReported: tmp3, handleDismiss: callback, trackAnalyticsEvent: callback1 }), initialRouteName: "INTRO" };
  return callback2(channelId(warningType[22]).Navigator, obj);
};
