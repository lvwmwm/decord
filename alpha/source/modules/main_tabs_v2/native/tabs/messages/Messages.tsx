// Module ID: 18356
// Function ID: 18357
// Name: messages/Messages
// Dependencies: [19, 6648, 21, 7410, 7435, 1652, 17339, 18357, 18361, 18379, 1377, 18381, 18382, 18383, 15582, 18384, 7753, 9, 17338, 1113, 18385, 9612, 575, 18362, 18387, 18392, 18436, 18437, 13542, 2]

// Module 18356 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import nativeDefault from "native" /* 575 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7410 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7435 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7753 */;
import useMessagesSpecsDefault from "useMessagesSpecs" /* 18361 */;
import MessagesHeaderDefault from "MessagesHeader" /* 18362 */;
import useMessagesDataDefault from "useMessagesData" /* 18379 */;
import useMessagesScrollToTopDefault from "useMessagesScrollToTop" /* 18382 */;
import useMessagesReconnectToCallsEffectDefault from "useMessagesReconnectToCallsEffect" /* 18383 */;
import ChannelListPanelBackdropDefault from "ChannelListPanelBackdrop" /* 18385 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6648 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { code: "(function MessagesTsx1(event){let[scrollPosition,handleGuildsNavigationScroll]=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);})" };
const memoResult = react.memo(function Messages(style) {
  let AndroidMessagesListImplExperiment;
  let CutoutBackgroundProvider;
  let animatedScrollHandler;
  let headerSize;
  let intl;
  let items2;
  let list;
  let listItemHeight;
  let listItemSizes;
  let listItemSuggestedFriendHeight;
  let listLeft;
  let listTop;
  let obj10;
  let obj9;
  let recycleItems;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp24Result;
  let tmp26;
  let tmpResult;
  let sections;
  style = style.style;
  const tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.MESSAGES).analyticsLocations;
  let obj = sections(1652);
  const sharedValue = obj.useSharedValue(0);
  const obj2 = sections(17339);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  const obj3 = sections(17339);
  const youBarTotalHeight1 = obj3.useYouBarTotalHeight(-16);
  const obj4 = sections(18357);
  const doesLandOnHomeDrawer = obj4.useDoesLandOnHomeDrawer();
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = useMessagesSpecsDefault());
  useMessagesSpecsDefault();
  const tmp10 = useMessagesDataDefault();
  sections = tmp10.sections;
  const showFullscreenEmptyState = tmp10.showFullscreenEmptyState;
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const obj5 = react;
  const obj6 = sections(1377);
  if (obj6.isAndroid()) {
    AndroidMessagesListImplExperiment = tmp4(tmp13).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp(tmp13);
  }
  const config = AndroidMessagesListImplExperiment.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  useMessagesScrollToTopDefault({ listRef: ref, listRefHappeningNow: ref1 });
  useMessagesReconnectToCallsEffectDefault();
  const tmp4Result = sections(15582);
  const commonTriggerPoint = tmp4Result.useCommonTriggerPoint(tmp4(18384).DmGdmListRenderTriggerPoint);
  const layoutEffect = obj5.useLayoutEffect(() => {
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    const recordRender = TTITrackerDefault.recordRender;
    TTITrackerDefault;
    const reduced = sections.reduce((acc, item) => acc + item, 0);
    recordRender(reduced, GatewayConnectionStore.isConnected());
  });
  const tmp4Result3 = sections(17338);
  const items = [closure_7, sharedValue, tmp4Result3.useExternalScrollEventHandler({ id: "messages" })];
  let c0;
  let c1;
  [tmp20, tmp21, tmp22] = items;
  const externalScrollEventHandler = tmp4Result3.useExternalScrollEventHandler({ id: "messages" });
  const tmp4Result4 = sections(1652);
  class MessagesTsx1 {
    constructor(contentOffset) {
      const result = _undefined.set(contentOffset.contentOffset.y);
      _undefined2(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
    }
  }
  const items1 = [tmp21, tmp22];
  MessagesTsx1.__closure = items1;
  MessagesTsx1.__workletHash = 2610387438817;
  MessagesTsx1.__initData = tmp20;
  const obj7 = { accessibilityLabel: intl.string(sections(1113).t.OIgYlQ), data: tmp10, handleScrollAnimated: animatedScrollHandler, insetEnd: youBarTotalHeight, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listRefHappeningNow: ref1, listTop, recycleItems, scrollIndicatorInsetBottom: youBarTotalHeight1, scrollPosition: sharedValue };
  animatedScrollHandler = tmp4Result4.useAnimatedScrollHandler(MessagesTsx1);
  intl = tmp4(1113).intl;
  const obj8 = { value: analyticsLocations, children: closure_5(tmpResult, obj9) };
  const AnalyticsLocationProvider = tmp4(7410).AnalyticsLocationProvider;
  obj9 = { style, children: tmp26(CutoutBackgroundProvider, obj10) };
  obj10 = { backgroundColor: nativeDefault.colors.PANEL_BG, children: items2 };
  tmpResult = ChannelListPanelBackdropDefault;
  CutoutBackgroundProvider = tmp4(9612).CutoutBackgroundProvider;
  items2 = [closure_5(MessagesHeaderDefault, { height: headerSize, scrollPosition: sharedValue }), , ];
  tmp26 = closure_6;
  if (showFullscreenEmptyState) {
    tmp24Result = tmp24(tmp(18387), {});
  } else {
    let tmp27;
    if ("legend" === list) {
      tmp27 = 18392;
    } else {
      tmp27 = "flash" === list ? 18436 : 18437;
    }
    const obj11 = { ref };
    const tmpResult2 = importDefault(tmp27);
    const merged = Object.assign(obj7);
    tmp24Result = tmp24(tmpResult2, obj11);
  }
  items2[1] = tmp24Result;
  let tmp24Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp24Result2 = tmp24(tmp4(13542).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items2[2] = tmp24Result2;
  return closure_5(AnalyticsLocationProvider, obj8);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
