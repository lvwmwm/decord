// Module ID: 18223
// Function ID: 18224
// Name: messages/Messages
// Dependencies: [19, 5142, 6688, 21, 7446, 7471, 1652, 17220, 18224, 18228, 18246, 1377, 18248, 18249, 18250, 15487, 18251, 5322, 5321, 5732, 7778, 9, 17219, 1113, 18252, 9638, 575, 18229, 18254, 18259, 18303, 18304, 13471, 2]

// Module 18223 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5321 */;
import RootNavigationRef from "RootNavigationRef" /* 5322 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5732 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7778 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6688 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { code: "(function MessagesTsx1(event){let[scrollPosition,handleGuildsNavigationScroll]=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);})" };
const memoResult = react.memo(function Messages(style) {
  let AndroidMessagesListImplExperiment;
  let CutoutBackgroundProvider;
  let animatedScrollHandler;
  let headerSize;
  let intl;
  let items3;
  let list;
  let listItemHeight;
  let listItemSizes;
  let listItemSuggestedFriendHeight;
  let listLeft;
  let listTop;
  let obj10;
  let obj9;
  let recycleItems;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp25Result;
  let tmp27;
  let tmpResult;
  let dataKey;
  let sections;
  let tmp2 = dependencyMap;
  style = style.style;
  const tmp3 = sections(7446);
  const analyticsLocations = tmp3(sections(7471).MESSAGES).analyticsLocations;
  let obj = dataKey(1652);
  const sharedValue = obj.useSharedValue(0);
  const obj2 = dataKey(17220);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  const obj3 = dataKey(17220);
  const youBarTotalHeight1 = obj3.useYouBarTotalHeight(-16);
  const obj4 = dataKey(18224);
  const doesLandOnHomeDrawer = obj4.useDoesLandOnHomeDrawer();
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = sections(18228)());
  sections(18228)();
  const tmp10 = sections(18246)();
  dataKey = tmp10.dataKey;
  sections = tmp10.sections;
  const showFullscreenEmptyState = tmp10.showFullscreenEmptyState;
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  let obj6 = dataKey(1377);
  if (obj6.isAndroid()) {
    AndroidMessagesListImplExperiment = tmp4(tmp13).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp(tmp13);
  }
  const config = AndroidMessagesListImplExperiment.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  sections(18249)({ listRef: ref, listRefHappeningNow: ref1 });
  sections(18250)();
  const tmp4Result = dataKey(15487);
  const commonTriggerPoint = tmp4Result.useCommonTriggerPoint(tmp4(18251).DmGdmListRenderTriggerPoint);
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
  const tmp4Result3 = dataKey(17219);
  const items1 = [closure_8, sharedValue, tmp4Result3.useExternalScrollEventHandler({ id: "messages" })];
  let c0;
  let c1;
  [tmp21, tmp22, tmp23] = items1;
  const externalScrollEventHandler = tmp4Result3.useExternalScrollEventHandler({ id: "messages" });
  const tmp4Result4 = dataKey(1652);
  class MessagesTsx1 {
    constructor(contentOffset) {
      const result = _undefined.set(contentOffset.contentOffset.y);
      _undefined2(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
    }
  }
  const items2 = [tmp22, tmp23];
  MessagesTsx1.__closure = items2;
  MessagesTsx1.__workletHash = 2610387438817;
  MessagesTsx1.__initData = tmp21;
  const obj7 = { accessibilityLabel: intl.string(dataKey(1113).t.OIgYlQ), data: tmp10, handleScrollAnimated: animatedScrollHandler, insetEnd: youBarTotalHeight, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listRefHappeningNow: ref1, listTop, recycleItems, scrollIndicatorInsetBottom: youBarTotalHeight1, scrollPosition: sharedValue };
  animatedScrollHandler = tmp4Result4.useAnimatedScrollHandler(MessagesTsx1);
  intl = tmp4(1113).intl;
  const obj8 = { value: analyticsLocations, children: closure_6(tmpResult, obj9) };
  const AnalyticsLocationProvider = tmp4(7446).AnalyticsLocationProvider;
  obj9 = { style, children: tmp27(CutoutBackgroundProvider, obj10) };
  obj10 = { backgroundColor: sections(575).colors.PANEL_BG, children: items3 };
  tmpResult = sections(18252);
  CutoutBackgroundProvider = tmp4(9638).CutoutBackgroundProvider;
  items3 = [closure_6(tmp(18229), { height: headerSize, scrollPosition: sharedValue }), , ];
  tmp27 = closure_7;
  if (showFullscreenEmptyState) {
    tmp25Result = tmp25(tmp(18254), {});
  } else {
    let tmp28;
    if ("legend" === list) {
      tmp28 = 18259;
    } else {
      tmp28 = "flash" === list ? 18303 : 18304;
    }
    const obj11 = { ref };
    const tmpResult2 = sections(tmp28);
    const merged = Object.assign(obj7);
    tmp25Result = tmp25(tmpResult2, obj11);
  }
  items3[1] = tmp25Result;
  let tmp25Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp25Result2 = tmp25(tmp4(13471).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items3[2] = tmp25Result2;
  return closure_6(AnalyticsLocationProvider, obj8);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
