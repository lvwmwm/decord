// Module ID: 14567
// Function ID: 109767
// Name: IntroScreen
// Dependencies: []
// Exports: default

// Module 14567 (IntroScreen)
function IntroScreen(arg0) {
  ({ warningId: closure_0, senderId: closure_1, trackAnalyticsEvent: closure_2 } = arg0);
  const tmp = callback5();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(closure_1));
  let obj1 = importDefault(dependencyMap[9]);
  const name = obj1.getName(stateFromStores);
  let obj2 = arg1(dependencyMap[10]);
  let closure_3 = obj2.useNavigation();
  obj = { style: tmp.container };
  const items1 = [callback3(arg1(dependencyMap[11]).TrafficConeSpotIllustration, {}), , ];
  obj = { style: tmp.warningText };
  obj1 = { style: tmp.takeoverHeader };
  const intl = arg1(dependencyMap[13]).intl;
  obj1.children = intl.string(arg1(dependencyMap[13]).t.sSMgC6);
  const items2 = [callback3(arg1(dependencyMap[12]).Text, obj1), ];
  obj2 = { variant: "text-md/medium", style: tmp.takeoverDescription };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj2.children = intl2.format(arg1(dependencyMap[13]).t.q2QrTY, { username: name });
  items2[1] = callback3(arg1(dependencyMap[12]).Text, obj2);
  obj.children = items2;
  items1[1] = callback4(closure_7, obj);
  const obj3 = { style: tmp.ctaContainer };
  const obj4 = {};
  const intl3 = arg1(dependencyMap[13]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[13]).t.+o4Q7e);
  obj4.onPress = function onPress() {
    callback2(callback(callback2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_TAKE_ACTION);
  };
  const items3 = [callback3(arg1(dependencyMap[14]).Button, obj4), ];
  const obj5 = { paddingVertical: "row", paddingLeft: 8, paddingRight: 16, left: "center" };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj5.text = intl4.string(arg1(dependencyMap[13]).t.xLkGzP);
  obj5.onPress = function onPress() {
    callback2(callback(callback2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_SAFETY_TIPS);
  };
  items3[1] = callback3(arg1(dependencyMap[14]).Button, obj5);
  obj3.children = items3;
  items1[2] = callback4(closure_7, obj3);
  obj.children = items1;
  return callback4(closure_7, obj);
}
function TakeActionScreen(arg0) {
  let channelId;
  let isReported;
  let senderId;
  let setReported;
  let trackAnalyticsEvent;
  ({ senderId, isReported, channelId, setReported, trackAnalyticsEvent } = arg0);
  const tmp = callback5();
  let obj = { style: tmp.container };
  obj = { style: tmp.warningText };
  obj = { style: tmp.takeoverHeader };
  const intl = arg1(dependencyMap[13]).intl;
  obj.children = intl.string(arg1(dependencyMap[13]).t.mWO+ys);
  const items = [callback3(arg1(dependencyMap[12]).Text, obj), ];
  const obj1 = { variant: "text-md/medium", style: tmp.takeoverDescription };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[13]).t.S0XtKF);
  items[1] = callback3(arg1(dependencyMap[12]).Text, obj1);
  obj.children = items;
  const items1 = [callback4(closure_7, obj), callback3(importDefault(dependencyMap[16]), { senderId, channelId, isReported, setReported, trackAnalyticsEvent })];
  obj.children = items1;
  return callback4(closure_7, obj);
}
function SafetyTipsScreen() {
  const tmp = callback5();
  let obj = { style: tmp.container };
  obj = { style: tmp.safetyTips };
  obj = { showHeader: true };
  const intl = arg1(dependencyMap[13]).intl;
  obj.description = intl.string(arg1(dependencyMap[13]).t.DJMZX6);
  const tmp2 = importDefault(dependencyMap[17]);
  obj.safetyTips = callback2().map((children) => callback2(callback(closure_2[12]).Text, { variant: "text-sm/medium", children }, arg1));
  obj.children = callback3(tmp2, obj);
  obj.children = callback3(closure_7, obj);
  return callback3(closure_7, obj);
}
function CrisisTextLineScreen(trackAnalyticsEvent) {
  const arg1 = trackAnalyticsEvent.trackAnalyticsEvent;
  const tmp = callback5();
  let obj = { style: tmp.container };
  const items = [callback3(arg1(dependencyMap[11]).SafetyChatSpotIllustration, {}), , ];
  obj = { style: tmp.warningText };
  obj = { style: tmp.takeoverHeader };
  const intl = arg1(dependencyMap[13]).intl;
  obj.children = intl.string(arg1(dependencyMap[13]).t.NUMAsF);
  const items1 = [callback3(arg1(dependencyMap[12]).Text, obj), ];
  const obj1 = { variant: "text-md/medium", style: tmp.takeoverDescription };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[13]).t.uicS5l);
  items1[1] = callback3(arg1(dependencyMap[12]).Text, obj1);
  obj.children = items1;
  items[1] = callback4(closure_7, obj);
  const obj2 = { style: tmp.ctaContainer };
  const obj3 = { paddingVertical: "row", paddingLeft: 8, paddingRight: 16, left: "center" };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[13]).t.lkUb4S);
  obj3.onPress = function onPress() {
    closure_6.openURL(closure_9);
    trackAnalyticsEvent(trackAnalyticsEvent(closure_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL_SMS);
  };
  const items2 = [callback3(arg1(dependencyMap[14]).Button, obj3), ];
  const obj4 = { paddingVertical: "row", paddingLeft: 8, paddingRight: 16, left: "center" };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj4.text = intl4.string(arg1(dependencyMap[13]).t.ogLlvy);
  obj4.onPress = function onPress() {
    closure_6.openURL(closure_10);
    trackAnalyticsEvent(trackAnalyticsEvent(closure_2[15]).CtaEventTypes.USER_TAKEOVER_MODAL_CTL_WEB);
  };
  items2[1] = callback3(arg1(dependencyMap[14]).Button, obj4);
  obj2.children = items2;
  items[2] = callback4(closure_7, obj2);
  obj.children = items;
  return callback4(closure_7, obj);
}
function getScreens(arg0) {
  ({ warningId: closure_0, senderId: closure_1, channelId: closure_2, isReported: closure_3, setReported: closure_4, handleDismiss: closure_5, trackAnalyticsEvent: closure_6 } = arg0);
  let obj = {};
  let obj1 = arg1(dependencyMap[18]);
  obj.headerRight = obj1.getHeaderCloseButton(() => callback());
  let obj2 = arg1(dependencyMap[18]);
  obj.headerLeft = obj2.getHeaderBackButton();
  obj = {};
  obj = {};
  const merged = Object.assign(obj);
  obj["headerLeft"] = function headerLeft() {
    return null;
  };
  obj["render"] = function render() {
    return callback2(closure_16, { warningId: closure_0, senderId: closure_1, trackAnalyticsEvent: closure_6 });
  };
  obj.INTRO = obj;
  obj1 = {};
  const merged1 = Object.assign(obj);
  obj1["render"] = function render() {
    return callback2(closure_17, { senderId: closure_1, channelId: closure_2, isReported: closure_3, setReported: closure_4, trackAnalyticsEvent: closure_6 });
  };
  obj.TAKE_ACTION = obj1;
  obj2 = {};
  const merged2 = Object.assign(obj);
  obj2["render"] = function render() {
    return callback2(closure_18, {});
  };
  obj.SAFETY_TIPS = obj2;
  const obj3 = {};
  const merged3 = Object.assign(obj);
  obj3["render"] = function render() {
    return callback2(closure_19, { trackAnalyticsEvent: closure_6 });
  };
  obj.CRISIS_TEXT_LINE = obj3;
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const useState = arg1(dependencyMap[1]).useState;
({ Linking: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ CRISIS_TEXT_LINE_SMS_URI: closure_9, CRISIS_TEXT_LINE_URL: closure_10, TAKEOVER_MODAL_KEY: closure_11, getInappropriateConversationsSafetyTips: closure_12 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { transform: -951910397, topOffset: -570424460, marginLeft: -1056963724, marginRight: 1124074356, marginVertical: "a", messageTypeIconSize: "NoResults", padding: importDefault(dependencyMap[7]).space.PX_32, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.container = obj;
const obj1 = { height: "r", width: "convertRouteToNavigation", overflow: "hardwareClassification", marginBottom: importDefault(dependencyMap[7]).space.PX_16, gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.warningText = obj1;
const obj2 = { -1861163602: "application/vnd.sentry.items.trace-metric+json", -738052821: "first-input", 1560505897: true, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.ctaContainer = obj2;
obj.takeoverHeader = {};
obj.takeoverDescription = { textAlign: "center" };
obj.safetyTips = { alignSelf: "stretch" };
let closure_15 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/components/InappropriateConversationModal.tsx");

export default function InappropriateConversationModal(channelId) {
  let tmp2;
  let tmp3;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const warningId = channelId.warningId;
  const importDefault = warningId;
  const warningType = channelId.warningType;
  const dependencyMap = warningType;
  const senderId = channelId.senderId;
  let callback = senderId;
  [tmp2, tmp3] = callback(useState(false), 2);
  let obj = arg1(dependencyMap[19]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  const React = tmp4;
  const items = [channelId, warningId, warningType, senderId, tmp4];
  const memo = React.useMemo(() => ({ channelId, senderId, warningId, warningType, isNudgeWarning: tmp4 }), items);
  const useState = memo;
  const items1 = [channelId, warningId, memo];
  const items2 = [memo];
  callback = React.useCallback(() => {
    let obj = warningId(warningType[20]);
    obj.popWithKey(closure_11);
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
    obj = { channelId, warningId, senderId, warningType, cta, isNudgeWarning: tmp4 };
    obj.trackCtaEvent(obj);
  }, items3);
  obj = { screens: getScreens({ channelId, warningId, senderId, isReported: tmp2, setReported: tmp3, handleDismiss: callback, trackAnalyticsEvent: callback1 }), initialRouteName: "INTRO" };
  return callback3(arg1(dependencyMap[22]).Navigator, obj);
};
