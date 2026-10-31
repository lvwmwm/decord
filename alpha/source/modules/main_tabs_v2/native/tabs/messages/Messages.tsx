// Module ID: 18066
// Function ID: 18067
// Name: messages/Messages
// Dependencies: [19, 5015, 6568, 21, 7326, 7351, 5095, 17064, 18067, 18071, 18089, 1375, 18091, 18092, 18093, 15342, 18094, 5199, 5198, 5609, 7654, 9, 17063, 1113, 18095, 9510, 575, 18072, 18097, 18102, 18146, 18147, 13320, 2]

// Module 18066 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5609 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7654 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const __initData = { code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const memoResult = react.memo(function Messages(style) {
  let AndroidMessagesListImplExperiment;
  let CutoutBackgroundProvider;
  let animatedScrollHandler;
  let headerSize;
  let intl;
  let items1;
  let list;
  let listItemHeight;
  let listItemSizes;
  let listItemSuggestedFriendHeight;
  let listLeft;
  let listTop;
  let obj10;
  let obj9;
  let recycleItems;
  let tmp22Result;
  let tmp24;
  let tmpResult;
  let sharedValue;
  let dataKey;
  let sections;
  let externalScrollEventHandler;
  let tmp2 = sections;
  style = style.style;
  const tmp3 = dataKey(sections[4]);
  const analyticsLocations = tmp3(dataKey(sections[5]).MESSAGES).analyticsLocations;
  let obj = sharedValue(sections[6]);
  sharedValue = obj.useSharedValue(0);
  const obj2 = sharedValue(sections[7]);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  const obj3 = sharedValue(sections[7]);
  const youBarTotalHeight1 = obj3.useYouBarTotalHeight(-16);
  const obj4 = sharedValue(sections[8]);
  const doesLandOnHomeDrawer = obj4.useDoesLandOnHomeDrawer();
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(sections[9])());
  dataKey(sections[9])();
  const tmp10 = dataKey(sections[10])();
  dataKey = tmp10.dataKey;
  sections = tmp10.sections;
  const showFullscreenEmptyState = tmp10.showFullscreenEmptyState;
  const ref = externalScrollEventHandler.useRef(null);
  const ref1 = externalScrollEventHandler.useRef(null);
  let obj6 = sharedValue(sections[11]);
  if (obj6.isAndroid()) {
    AndroidMessagesListImplExperiment = tmp4(tmp13).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp(tmp13);
  }
  const config = AndroidMessagesListImplExperiment.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  dataKey(tmp2[13])({ listRef: ref, listRefHappeningNow: ref1 });
  dataKey(tmp2[14])();
  const tmp4Result = sharedValue(tmp2[15]);
  const commonTriggerPoint = tmp4Result.useCommonTriggerPoint(tmp4(tmp2[16]).DmGdmListRenderTriggerPoint);
  const items = [dataKey];
  const effect = obj5.useEffect(() => {
    if (null != dataKey) {
      const obj6 = PlatformUtils;
      if (!obj6.isAndroid()) {
        if (!AccessibilityStore.useReducedMotion) {
          const tmp6Result = RootNavigationRef;
          const rootNavigationRef = tmp6Result.getRootNavigationRef();
          let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp2) {
            const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
            NavigationRouteUtils;
            const tmp6Result5 = RootNavigationRef;
            const rootNavigationRef1 = tmp6Result5.getRootNavigationRef();
            let currentRoute;
            if (rootNavigationRef1 != null) {
              currentRoute = rootNavigationRef1.getCurrentRoute();
            }
            tmp2 = null != coerceGuildsRoute(currentRoute);
          }
          if (tmp2) {
            const tmp6Result6 = DeprecatedLayoutAnimation;
            const result = tmp6Result6.DeprecatedLayoutAnimation();
          }
        }
      }
    }
  }, items);
  const layoutEffect = obj5.useLayoutEffect(() => {
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    const recordRender = TTITrackerDefault.recordRender;
    TTITrackerDefault;
    const reduced = sections.reduce((acc, item) => acc + item, 0);
    recordRender(reduced, GatewayConnectionStore.isConnected());
  });
  const tmp4Result3 = sharedValue(tmp2[22]);
  externalScrollEventHandler = tmp4Result3.useExternalScrollEventHandler({ id: "messages" });
  const fn = function w(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn.__workletHash = 5461403437592;
  fn.__initData = __initData;
  const obj7 = { accessibilityLabel: intl.string(sharedValue(tmp2[23]).t.OIgYlQ), data: tmp10, handleScrollAnimated: animatedScrollHandler, insetEnd: youBarTotalHeight, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listRefHappeningNow: ref1, listTop, recycleItems, scrollIndicatorInsetBottom: youBarTotalHeight1, scrollPosition: sharedValue };
  const tmp4Result4 = sharedValue(tmp2[6]);
  animatedScrollHandler = tmp4Result4.useAnimatedScrollHandler(fn);
  intl = tmp4(tmp2[23]).intl;
  const obj8 = { value: analyticsLocations, children: closure_6(tmpResult, obj9) };
  const AnalyticsLocationProvider = tmp4(tmp2[4]).AnalyticsLocationProvider;
  obj9 = { style, children: tmp24(CutoutBackgroundProvider, obj10) };
  obj10 = { backgroundColor: dataKey(tmp2[26]).colors.PANEL_BG, children: items1 };
  tmpResult = dataKey(tmp2[24]);
  CutoutBackgroundProvider = tmp4(tmp2[25]).CutoutBackgroundProvider;
  items1 = [closure_6(tmp(tmp2[27]), { height: headerSize, scrollPosition: sharedValue }), , ];
  tmp24 = closure_7;
  if (showFullscreenEmptyState) {
    tmp22Result = tmp22(tmp(tmp2[28]), {});
  } else {
    let tmp25;
    if ("legend" === list) {
      tmp25 = tmp2[29];
    } else {
      tmp25 = "flash" === list ? tmp2[30] : tmp2[31];
    }
    const obj11 = { ref };
    const tmpResult2 = dataKey(tmp25);
    const merged = Object.assign(obj7);
    tmp22Result = tmp22(tmpResult2, obj11);
  }
  items1[1] = tmp22Result;
  let tmp22Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp22Result2 = tmp22(tmp4(tmp2[32]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items1[2] = tmp22Result2;
  return closure_6(AnalyticsLocationProvider, obj8);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
