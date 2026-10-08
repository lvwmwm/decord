// Module ID: 16247
// Function ID: 16248
// Name: messages/Messages
// Dependencies: [19, 5079, 5753, 21, 558, 576, 6841, 6865, 4810, 15179, 16248, 16252, 16271, 1381, 16273, 16274, 16275, 13583, 16276, 4937, 4936, 6658, 7185, 9, 15178, 1126, 16253, 16277, 16279, 16324, 16325, 11518, 8987, 587, 16326, 2]

// Module 16247 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6658 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7185 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5753 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let recordRenderResult, trackAppUIViewedResult;

let metroImportDefault;
let metroRequire;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const __initData = { code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const __initData2 = { code: "function MessagesTsx2(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function Messages(arg0) {
  let AndroidMessagesListImplExperiment;
  let dataKey;
  let externalScrollEventHandler;
  let first;
  let headerSize;
  let list;
  let listItemHeight;
  let listItemSizes;
  let listItemSuggestedFriendHeight;
  let listLeft;
  let listTop;
  let recycleItems;
  let sections;
  let sharedValue;
  let tmp17;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp26;
  let tmp30;
  let tmp2 = sections;
  let obj = sharedValue(sections[5]);
  const cResult = obj.c(40);
  const tmp5 = dataKey(sections[6]);
  const analyticsLocations = tmp5(dataKey(sections[7]).MESSAGES).analyticsLocations;
  const obj2 = sharedValue(sections[8]);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = sharedValue(sections[9]);
  const youBarTotalHeight = obj3.useYouBarTotalHeight();
  const obj4 = sharedValue(sections[9]);
  const youBarTotalHeight1 = obj4.useYouBarTotalHeight(-16);
  const obj5 = sharedValue(sections[10]);
  const doesLandOnHomeDrawer = obj5.useDoesLandOnHomeDrawer();
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(sections[11])());
  dataKey(sections[11])();
  const tmp11 = dataKey(sections[12])();
  dataKey = tmp11.dataKey;
  sections = tmp11.sections;
  let obj6 = externalScrollEventHandler;
  const ref = externalScrollEventHandler.useRef(null);
  const ref1 = externalScrollEventHandler.useRef(null);
  const obj7 = sharedValue(sections[13]);
  if (obj7.isAndroid()) {
    AndroidMessagesListImplExperiment = tmp(tmp14).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp4(tmp14);
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { location: "Messages Tab" };
    cResult[0] = obj8;
    first = obj8;
  } else {
    first = cResult[0];
  }
  const config = AndroidMessagesListImplExperiment.useConfig(first);
  ({ list, recycleItems } = config);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { listRef: ref, listRefHappeningNow: ref1 };
    cResult[1] = obj9;
    tmp17 = obj9;
  } else {
    tmp17 = cResult[1];
  }
  dataKey(tmp2[15])(tmp17);
  dataKey(tmp2[16])();
  const tmpResult = sharedValue(tmp2[17]);
  const commonTriggerPoint = tmpResult.useCommonTriggerPoint(tmp(tmp2[18]).DmGdmListRenderTriggerPoint);
  if (cResult[2] !== dataKey) {
    const fn = function z() {
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
    };
    const items = [dataKey];
    cResult[2] = dataKey;
    cResult[3] = fn;
    cResult[4] = items;
    tmp22 = items;
    tmp21 = fn;
  } else {
    tmp21 = cResult[3];
    tmp22 = cResult[4];
  }
  const effect = obj6.useEffect(tmp21, tmp22);
  if (cResult[5] !== sections) {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        tmp2 = closure_1(closure_2[23]);
        recordRender = tmp2.recordRender;
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
    cResult[5] = sections;
    cResult[6] = D;
    tmp24 = D;
  } else {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        tmp2 = closure_1(closure_2[23]);
        recordRender = tmp2.recordRender;
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
  }
  const layoutEffect = obj6.useLayoutEffect(tmp24);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        tmp2 = closure_1(closure_2[23]);
        recordRender = tmp2.recordRender;
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
    cResult[7] = tmp27;
    tmp26 = tmp27;
  } else {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        tmp2 = closure_1(closure_2[23]);
        recordRender = tmp2.recordRender;
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
  }
  const tmpResult3 = sharedValue(tmp2[24]);
  externalScrollEventHandler = tmpResult3.useExternalScrollEventHandler(tmp26);
  const fn2 = function j(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn2.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn2.__workletHash = 5461403437592;
  fn2.__initData = __initData;
  const tmpResult4 = sharedValue(tmp2[8]);
  const animatedScrollHandler = tmpResult4.useAnimatedScrollHandler(fn2);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        tmp2 = closure_1(closure_2[23]);
        recordRender = tmp2.recordRender;
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
    const stringResult = obj13.string(sharedValue(tmp2[25]).t.OIgYlQ);
    cResult[8] = stringResult;
    tmp30 = stringResult;
  } else {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        tmp2 = closure_1(closure_2[23]);
        recordRender = tmp2.recordRender;
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
  }
  if (cResult[9] === tmp11) {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        tmp2 = closure_1(closure_2[23]);
        recordRender = tmp2.recordRender;
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
  }
  const obj10 = { accessibilityLabel: tmp30, data: tmp11, handleScrollAnimated: animatedScrollHandler, insetEnd: youBarTotalHeight, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listRefHappeningNow: ref1, listTop, recycleItems, scrollIndicatorInsetBottom: youBarTotalHeight1, scrollPosition: sharedValue };
  cResult[9] = tmp11;
  cResult[10] = animatedScrollHandler;
  cResult[11] = listItemHeight;
  cResult[12] = listItemSizes;
  cResult[13] = listItemSuggestedFriendHeight;
  cResult[14] = listLeft;
  cResult[15] = listTop;
  cResult[16] = recycleItems;
  cResult[17] = youBarTotalHeight1;
  cResult[18] = sharedValue;
  cResult[19] = youBarTotalHeight;
  cResult[20] = obj10;
}) : (function Messages(style) {
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
  const tmp3 = dataKey(sections[6]);
  const analyticsLocations = tmp3(dataKey(sections[7]).MESSAGES).analyticsLocations;
  let obj = sharedValue(sections[8]);
  sharedValue = obj.useSharedValue(0);
  const obj2 = sharedValue(sections[9]);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  const obj3 = sharedValue(sections[9]);
  const youBarTotalHeight1 = obj3.useYouBarTotalHeight(-16);
  const obj4 = sharedValue(sections[10]);
  const doesLandOnHomeDrawer = obj4.useDoesLandOnHomeDrawer();
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(sections[11])());
  dataKey(sections[11])();
  const tmp10 = dataKey(sections[12])();
  dataKey = tmp10.dataKey;
  sections = tmp10.sections;
  const showFullscreenEmptyState = tmp10.showFullscreenEmptyState;
  const ref = externalScrollEventHandler.useRef(null);
  const ref1 = externalScrollEventHandler.useRef(null);
  let obj6 = sharedValue(sections[13]);
  if (obj6.isAndroid()) {
    AndroidMessagesListImplExperiment = tmp4(tmp13).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp(tmp13);
  }
  const config = AndroidMessagesListImplExperiment.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  dataKey(tmp2[15])({ listRef: ref, listRefHappeningNow: ref1 });
  dataKey(tmp2[16])();
  const tmp4Result = sharedValue(tmp2[17]);
  const commonTriggerPoint = tmp4Result.useCommonTriggerPoint(tmp4(tmp2[18]).DmGdmListRenderTriggerPoint);
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
  const tmp4Result3 = sharedValue(tmp2[24]);
  externalScrollEventHandler = tmp4Result3.useExternalScrollEventHandler({ id: "messages" });
  const fn = function w(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn.__workletHash = 17197843851355;
  fn.__initData = __initData2;
  const obj7 = { accessibilityLabel: intl.string(sharedValue(tmp2[25]).t.OIgYlQ), data: tmp10, handleScrollAnimated: animatedScrollHandler, insetEnd: youBarTotalHeight, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listRefHappeningNow: ref1, listTop, recycleItems, scrollIndicatorInsetBottom: youBarTotalHeight1, scrollPosition: sharedValue };
  const tmp4Result4 = sharedValue(tmp2[8]);
  animatedScrollHandler = tmp4Result4.useAnimatedScrollHandler(fn);
  intl = tmp4(tmp2[25]).intl;
  const obj8 = { value: analyticsLocations, children: closure_6(tmpResult, obj9) };
  const AnalyticsLocationProvider = tmp4(tmp2[6]).AnalyticsLocationProvider;
  obj9 = { style, children: tmp24(CutoutBackgroundProvider, obj10) };
  obj10 = { backgroundColor: dataKey(tmp2[33]).colors.PANEL_BG, children: items1 };
  tmpResult = dataKey(tmp2[34]);
  CutoutBackgroundProvider = tmp4(tmp2[32]).CutoutBackgroundProvider;
  items1 = [closure_6(tmp(tmp2[26]), { height: headerSize, scrollPosition: sharedValue }), , ];
  tmp24 = closure_7;
  if (showFullscreenEmptyState) {
    tmp22Result = tmp22(tmp(tmp2[27]), {});
  } else {
    let tmp25;
    if ("legend" === list) {
      tmp25 = tmp2[28];
    } else {
      tmp25 = "flash" === list ? tmp2[29] : tmp2[30];
    }
    const obj11 = { ref };
    const tmpResult2 = dataKey(tmp25);
    const merged = Object.assign(obj7);
    tmp22Result = tmp22(tmpResult2, obj11);
  }
  items1[1] = tmp22Result;
  let tmp22Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp22Result2 = tmp22(tmp4(tmp2[31]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items1[2] = tmp22Result2;
  return closure_6(AnalyticsLocationProvider, obj8);
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default memoResult;
