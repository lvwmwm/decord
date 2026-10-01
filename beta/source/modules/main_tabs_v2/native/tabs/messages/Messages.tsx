// Module ID: 15654
// Function ID: 15655
// Name: messages/Messages
// Dependencies: [19, 4825, 5589, 21, 6583, 6603, 4566, 14629, 15655, 15659, 15678, 15680, 15681, 15682, 12997, 15683, 1364, 4693, 4692, 5893, 6895, 9, 14628, 1115, 15684, 8277, 576, 15660, 15686, 15688, 15733, 15734, 11375, 2]

// Module 15654 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5893 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6895 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const __initData = { code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const memoResult = react.memo(function Messages(style) {
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
  let obj11;
  let obj12;
  let recycleItems;
  let tmp21Result;
  let tmp22;
  let tmp23;
  let sharedValue;
  let dataKey;
  let sections;
  let externalScrollEventHandler;
  let tmp2 = sections;
  style = style.style;
  const tmp3 = dataKey(sections[4]);
  const analyticsLocations = tmp3(dataKey(sections[5]).MESSAGES).analyticsLocations;
  let obj = sharedValue(sections[6]);
  const tmp4 = sharedValue;
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
  const obj5 = dataKey(sections[11]);
  const config = obj5.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  dataKey(sections[12])({ listRef: ref, listRefHappeningNow: ref1 });
  dataKey(sections[13])();
  let obj6 = sharedValue(sections[14]);
  const commonTriggerPoint = obj6.useCommonTriggerPoint(sharedValue(sections[15]).DmGdmListRenderTriggerPoint);
  const items = [dataKey];
  const effect = externalScrollEventHandler.useEffect(() => {
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
  const layoutEffect = externalScrollEventHandler.useLayoutEffect(() => {
    const obj = TTIAnalyticsUtils;
    obj.trackAppUIViewed();
    const recordRender = TTITrackerDefault.recordRender;
    TTITrackerDefault;
    const reduced = sections.reduce((acc, item) => acc + item, 0);
    recordRender(reduced, GatewayConnectionStore.isConnected());
  });
  const obj7 = sharedValue(sections[22]);
  externalScrollEventHandler = obj7.useExternalScrollEventHandler({ id: "messages" });
  const fn = function w(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn.__workletHash = 5461403437592;
  fn.__initData = __initData;
  const obj9 = { accessibilityLabel: intl.string(sharedValue(sections[23]).t.OIgYlQ), data: tmp10, handleScrollAnimated: animatedScrollHandler, insetEnd: youBarTotalHeight, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listRefHappeningNow: ref1, listTop, recycleItems, scrollIndicatorInsetBottom: youBarTotalHeight1, scrollPosition: sharedValue };
  const obj8 = sharedValue(sections[6]);
  animatedScrollHandler = obj8.useAnimatedScrollHandler(fn);
  intl = sharedValue(sections[23]).intl;
  const obj10 = { value: analyticsLocations, children: closure_6(tmp22, obj11) };
  const AnalyticsLocationProvider = sharedValue(sections[4]).AnalyticsLocationProvider;
  obj11 = { style, children: tmp23(CutoutBackgroundProvider, obj12) };
  obj12 = { backgroundColor: dataKey(sections[26]).colors.PANEL_BG, children: items1 };
  tmp22 = dataKey(sections[24]);
  CutoutBackgroundProvider = sharedValue(sections[25]).CutoutBackgroundProvider;
  items1 = [closure_6(dataKey(sections[27]), { height: headerSize, scrollPosition: sharedValue }), , ];
  tmp23 = closure_7;
  if (showFullscreenEmptyState) {
    tmp21Result = tmp21(tmp(tmp2[28]), {});
  } else {
    let tmp24;
    if ("legend" === list) {
      tmp24 = tmp2[29];
    } else {
      tmp24 = "flash" === list ? tmp2[30] : tmp2[31];
    }
    const obj13 = { ref };
    const tmpResult = dataKey(tmp24);
    const merged = Object.assign(obj9);
    tmp21Result = tmp21(tmpResult, obj13);
  }
  items1[1] = tmp21Result;
  let tmp21Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp21Result2 = tmp21(tmp4(tmp2[32]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items1[2] = tmp21Result2;
  return closure_6(AnalyticsLocationProvider, obj10);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
