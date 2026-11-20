// Module ID: 18745
// Function ID: 18746
// Name: messages/Messages
// Dependencies: [19, 6790, 21, 7918, 7937, 1655, 17705, 18746, 18750, 18768, 1380, 18770, 18771, 18772, 15318, 18773, 8678, 9, 17704, 1113, 18774, 9504, 575, 18751, 18776, 18781, 18825, 18826, 14206, 2]

// Module 18745 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import nativeDefault from "native" /* 575 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7918 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 8678 */;
import useMessagesSpecsDefault from "useMessagesSpecs" /* 18750 */;
import MessagesHeaderDefault from "MessagesHeader" /* 18751 */;
import useMessagesDataDefault from "useMessagesData" /* 18768 */;
import useMessagesScrollToTopDefault from "useMessagesScrollToTop" /* 18771 */;
import useMessagesReconnectToCallsEffectDefault from "useMessagesReconnectToCallsEffect" /* 18772 */;
import ChannelListPanelBackdropDefault from "ChannelListPanelBackdrop" /* 18774 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6790 */;
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
  let obj = sections(1655);
  const sharedValue = obj.useSharedValue(0);
  const obj2 = sections(17705);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  const obj3 = sections(17705);
  const youBarTotalHeight1 = obj3.useYouBarTotalHeight(-16);
  const obj4 = sections(18746);
  const doesLandOnHomeDrawer = obj4.useDoesLandOnHomeDrawer();
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = useMessagesSpecsDefault());
  useMessagesSpecsDefault();
  const tmp10 = useMessagesDataDefault();
  sections = tmp10.sections;
  const showFullscreenEmptyState = tmp10.showFullscreenEmptyState;
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const obj5 = react;
  const obj6 = sections(1380);
  if (obj6.isAndroid()) {
    AndroidMessagesListImplExperiment = tmp4(tmp13).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp(tmp13);
  }
  const config = AndroidMessagesListImplExperiment.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  useMessagesScrollToTopDefault({ listRef: ref, listRefHappeningNow: ref1 });
  useMessagesReconnectToCallsEffectDefault();
  const tmp4Result = sections(15318);
  const commonTriggerPoint = tmp4Result.useCommonTriggerPoint(tmp4(18773).DmGdmListRenderTriggerPoint);
  const layoutEffect = obj5.useLayoutEffect(() => {
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    const recordRender = TTITrackerDefault.recordRender;
    TTITrackerDefault;
    const reduced = sections.reduce((acc, item) => acc + item, 0);
    recordRender(reduced, GatewayConnectionStore.isConnected());
  });
  const tmp4Result3 = sections(17704);
  const items = [closure_7, sharedValue, tmp4Result3.useExternalScrollEventHandler({ id: "messages" })];
  let c0;
  let c1;
  [tmp20, tmp21, tmp22] = items;
  const externalScrollEventHandler = tmp4Result3.useExternalScrollEventHandler({ id: "messages" });
  const tmp4Result4 = sections(1655);
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
  const AnalyticsLocationProvider = tmp4(7918).AnalyticsLocationProvider;
  obj9 = { style, children: tmp26(CutoutBackgroundProvider, obj10) };
  obj10 = { backgroundColor: nativeDefault.colors.PANEL_BG, children: items2 };
  tmpResult = ChannelListPanelBackdropDefault;
  CutoutBackgroundProvider = tmp4(9504).CutoutBackgroundProvider;
  items2 = [closure_5(MessagesHeaderDefault, { height: headerSize, scrollPosition: sharedValue }), , ];
  tmp26 = closure_6;
  if (showFullscreenEmptyState) {
    tmp24Result = tmp24(tmp(18776), {});
  } else {
    let tmp27;
    if ("legend" === list) {
      tmp27 = 18781;
    } else {
      tmp27 = "flash" === list ? 18825 : 18826;
    }
    const obj11 = { ref };
    const tmpResult2 = importDefault(tmp27);
    const merged = Object.assign(obj7);
    tmp24Result = tmp24(tmpResult2, obj11);
  }
  items2[1] = tmp24Result;
  let tmp24Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp24Result2 = tmp24(tmp4(14206).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items2[2] = tmp24Result2;
  return closure_5(AnalyticsLocationProvider, obj8);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
