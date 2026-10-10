// Module ID: 14798
// Function ID: 14799
// Name: AppContainer
// Dependencies: [32, 19, 17, 6073, 2065, 2116, 1085, 2072, 21, 5092, 587, 4850, 558, 576, 8326, 14799, 5937, 1121, 1256, 4977, 5307, 6723, 14801, 14802, 4976, 1112, 5031, 5375, 1265, 4978, 14803, 6729, 1504, 1388, 14804, 1382, 11200, 14805, 14806, 14807, 10953, 11194, 16327, 4992, 16328, 16330, 1500, 11629, 16331, 16339, 4893, 16341, 1255, 2]

// Module 14798 (AppContainer)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import SentryInitUtils from "SentryInitUtils" /* 1256 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import Link from "Link" /* 1504 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import useThemeDefault from "useTheme" /* 5031 */;
import enableScreens from "enableScreens" /* 5307 */;
import BackPressTracking from "BackPressTracking" /* 5375 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 5937 */;
import NavigationHistoryStore from "NavigationHistoryStore" /* 6073 */;
import useNavigationTheme from "useNavigationTheme" /* 6729 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8326 */;
import RouteManagerDefault from "RouteManager" /* 11200 */;
import StartupProfilerDefault from "StartupProfiler" /* 11629 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14799 */;
import useTrackNavigatorScreenImpression from "useTrackNavigatorScreenImpression" /* 14801 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 14802 */;
import useRequestGatewaySocket from "useRequestGatewaySocket" /* 14804 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 14805 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 14807 */;
import components_native_ErrorBoundaryDefault from "components_native/ErrorBoundary" /* 16327 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 16328 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 16330 */;
import RiveAppStatePlaybackExperiment from "RiveAppStatePlaybackExperiment" /* 16341 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import config from "config" /* 6723 */;
import SentryUtils from "SentryUtils" /* 1255 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, flag, num;

let c10;
let closure_12;
let closure_14;
let closure_15;
let obj2;
let tmp;
let tmp4;
let unpackModuleId;
const GlobalUtils = tmp(1388);
const AppEntryKeyContext = tmp(1500);
const ManaContext = tmp(4893);
const getInitialNavigationStateDefault = tmp4(4978);
const Portal = tmp(4992);
const WebViewContext = tmp(10953);
const _mod11194 = tmp(11194);
const StartupProfiler = tmp(11629);
const MainNavigationLoggerDefault = tmp4(14803);
const SafeAreaProvider2 = tmp(14806);
const _mod16331 = tmp(16331);
const RootThemeContextProvider2 = tmp(16339);
function handleNavigationOnReady() {
  const obj = ModalDispatchQueueDefault;
  obj.flush();
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(unpackModuleId.NAVIGATOR_READY);
  const routingInstrumentation = SentryInitUtils.routingInstrumentation;
  const registerNavigationContainer = routingInstrumentation.registerNavigationContainer;
  const obj2 = RootNavigationRef;
  const result = registerNavigationContainer(obj2.getRootNavigationRef());
  closure_7();
}
const NativeModules = react_native.NativeModules;
let closure_7 = NavigationHistoryStore.handleHistoryStoreNavigationChange;
({ AnalyticEvents: c10, ComponentActions: unpackModuleId, Routes: closure_12 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { flex: { flex: 1 }, rootBackgroundColor: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let closure_16 = createStyles.createStyles(obj);
let obj3 = { level: ReanimatedRexport.ReanimatedLogLevel.error, strict: false };
let result = ReanimatedRexport.configureReanimatedLogger(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function GestureWrapper(children) {
  const obj = react2;
  const cResult = obj.c(6);
  children = children.children;
  const tmp3 = closure_16();
  let rootBackgroundColor;
  const obj2 = useIsScreenLandscape;
  if (obj2.useIsScreenLandscape()) {
    rootBackgroundColor = tmp3.rootBackgroundColor;
  }
  if (cResult[0] === tmp3.flex) {
    let tmp5;
    if (cResult[1] === rootBackgroundColor) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const obj3 = { style: tmp5, children };
    const tmp9 = syncedClientThemes(DiscordGestureHandlerRootViewDefault, obj3);
    cResult[3] = children;
    cResult[4] = tmp5;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const items = [tmp3.flex, rootBackgroundColor];
  cResult[0] = tmp3.flex;
  cResult[1] = rootBackgroundColor;
  cResult[2] = items;
  tmp5 = items;
}) : (function GestureWrapper(children) {
  children = children.children;
  const tmp = closure_16();
  let closure_0 = tmp;
  const obj = useIsScreenLandscape;
  const isScreenLandscape = obj.useIsScreenLandscape();
  let items = [isScreenLandscape, tmp];
  const style = react.useMemo(() => {
    const items = [styles.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = styles.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return syncedClientThemes(DiscordGestureHandlerRootViewDefault, { style, children });
});
try {
  const _module5 = enableScreens;
  _module5.enableFreeze();
} catch (err) {
}
let obj4 = { useTrackNavigatorScreenImpression: useTrackNavigatorScreenImpression.useTrackNavigatorScreenImpression };
config.setDesignConfig(obj4);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppNavigationContainer(children) {
  let first;
  let ref2;
  let tmp10;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp22;
  let tmp9;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(9);
  children = children.children;
  let tmp4 = importDefault;
  let tmp5 = useThemeDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmpResult = tmp(4977);
    let rootNavigationRef = tmpResult.getRootNavigationRef();
    cResult[0] = rootNavigationRef;
    first = rootNavigationRef;
  } else {
    first = cResult[0];
  }
  const tmpResult3 = tmp(5375);
  const trackNavigationBackPress = tmpResult3.useTrackNavigationBackPress(first);
  const ref = react.useRef(undefined);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function v() {
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          const tmpResult = NavigationRouteUtils;
          const tmp4 = null != tmpResult.coerceGuildsRoute(currentRoute);
          const tmpResult4 = NavigationRouteUtils;
          const tmp5 = ref;
          const tmp6 = null != tmpResult4.coerceChannelRoute(ref.current) && tmp4;
          if (tmp6) {
            const obj5 = AnalyticsUtilsDefault;
            obj5.track(constants.NAV_DRAWER_OPENED);
          }
          tmp5.current = currentRoute;
          const tmp14 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2)[1];
          if (null != tmp14) {
            if (isStaticChannelRoute(tmp14)) {
              if (tmp14 !== SelectedChannelStore.getChannelId()) {
                const tmpResult5 = NavigationRouteUtils;
                const coerceChannelRouteResult = tmpResult5.coerceChannelRoute(currentRoute);
                const tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
                if (!tmp18) {
                  const tmpResult6 = router_utils;
                  tmpResult6.transitionTo(authStore2.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
                }
              }
            }
          }
        }
      }
      closure_7();
    };
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = getInitialNavigationStateDefault();
    cResult[2] = tmp11;
    tmp10 = tmp11;
  } else {
    tmp10 = cResult[2];
  }
  let name;
  const log = MainNavigationLoggerDefault.log;
  MainNavigationLoggerDefault;
  if (tmp10 != null) {
    const first1 = tmp10.routes[0];
    if (first1 != null) {
      name = first1.name;
    }
  }
  log("Initial Screen: " + name);
  _require = obj4.useRef(true);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        if (closure_1.current) {
          flag = false;
          tmp.current = false;
          return;
        } else {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          num = 0;
          closure_0 = setTimeout(() => {
            const obj = ref2(closure_1_3[19]);
            const rootNavigationRef = obj.getRootNavigationRef();
            const tmp = ref2;
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const tmpResult = tmp(closure_1_3[24]);
                const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(rootNavigationRef.getState().routes);
                rootNavigationRef.reset(closure_1_2(closure_1_3[29])(modalRoutesAboveMainResult));
              }
            }
          }, 0);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    const items = [];
    cResult[3] = S;
    cResult[4] = items;
    tmp17 = items;
    tmp16 = S;
  } else {
    class S {
      constructor() {
        if (closure_1.current) {
          flag = false;
          tmp.current = false;
          return;
        } else {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          num = 0;
          closure_0 = setTimeout(() => {
            const obj = ref2(closure_1_3[19]);
            const rootNavigationRef = obj.getRootNavigationRef();
            const tmp = ref2;
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const tmpResult = tmp(closure_1_3[24]);
                const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(rootNavigationRef.getState().routes);
                rootNavigationRef.reset(closure_1_2(closure_1_3[29])(modalRoutesAboveMainResult));
              }
            }
          }, 0);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    tmp17 = cResult[4];
  }
  const effect = obj4.useEffect(tmp16, tmp17);
  let tmpResult4 = tmp(6729);
  const navigationTheme = tmpResult4.useNavigationTheme(tmp5);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        if (closure_1.current) {
          flag = false;
          tmp.current = false;
          return;
        } else {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          num = 0;
          closure_0 = setTimeout(() => {
            const obj = ref2(closure_1_3[19]);
            const rootNavigationRef = obj.getRootNavigationRef();
            const tmp = ref2;
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const tmpResult = tmp(closure_1_3[24]);
                const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(rootNavigationRef.getState().routes);
                rootNavigationRef.reset(closure_1_2(closure_1_3[29])(modalRoutesAboveMainResult));
              }
            }
          }, 0);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    const rootNavigationRef1 = obj6.getRootNavigationRef();
    cResult[5] = rootNavigationRef1;
    tmp20 = rootNavigationRef1;
  } else {
    class S {
      constructor() {
        if (closure_1.current) {
          flag = false;
          tmp.current = false;
          return;
        } else {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          num = 0;
          closure_0 = setTimeout(() => {
            const obj = ref2(closure_1_3[19]);
            const rootNavigationRef = obj.getRootNavigationRef();
            const tmp = ref2;
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const tmpResult = tmp(closure_1_3[24]);
                const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(rootNavigationRef.getState().routes);
                rootNavigationRef.reset(closure_1_2(closure_1_3[29])(modalRoutesAboveMainResult));
              }
            }
          }, 0);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
  }
  if (cResult[6] === children) {
    class S {
      constructor() {
        if (closure_1.current) {
          flag = false;
          tmp.current = false;
          return;
        } else {
          tmp2 = globalThis;
          _setTimeout = setTimeout;
          num = 0;
          closure_0 = setTimeout(() => {
            const obj = ref2(closure_1_3[19]);
            const rootNavigationRef = obj.getRootNavigationRef();
            const tmp = ref2;
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const tmpResult = tmp(closure_1_3[24]);
                const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(rootNavigationRef.getState().routes);
                rootNavigationRef.reset(closure_1_2(closure_1_3[29])(modalRoutesAboveMainResult));
              }
            }
          }, 0);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    return tmp22;
  }
  const obj2 = { theme: navigationTheme, ref: tmp20, onReady: handleNavigationOnReady, onStateChange: tmp9, initialState: tmp10, navigationInChildEnabled: true, children };
  tmp22 = closure_14(tmp(1504).NavigationContainer, obj2);
  cResult[6] = children;
  cResult[7] = navigationTheme;
  cResult[8] = tmp22;
}) : (function AppNavigationContainer(children) {
  let obj4;
  let ref2;
  _require = undefined;
  children = children.children;
  let tmp = useThemeDefault();
  const tmp2 = require("BackPressTracking");
  const useTrackNavigationBackPress = tmp2.useTrackNavigationBackPress;
  let obj = require("RootNavigationRef");
  const trackNavigationBackPress = useTrackNavigationBackPress(obj.getRootNavigationRef());
  const ref = react.useRef(undefined);
  const callback = react.useCallback(() => {
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        const tmpResult = NavigationRouteUtils;
        const tmp4 = null != tmpResult.coerceGuildsRoute(currentRoute);
        const tmpResult4 = NavigationRouteUtils;
        const tmp5 = ref;
        const tmp6 = null != tmpResult4.coerceChannelRoute(ref.current) && tmp4;
        if (tmp6) {
          const obj5 = AnalyticsUtilsDefault;
          obj5.track(constants.NAV_DRAWER_OPENED);
        }
        tmp5.current = currentRoute;
        const tmp14 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2)[1];
        if (null != tmp14) {
          if (isStaticChannelRoute(tmp14)) {
            if (tmp14 !== SelectedChannelStore.getChannelId()) {
              const tmpResult5 = NavigationRouteUtils;
              const coerceChannelRouteResult = tmpResult5.coerceChannelRoute(currentRoute);
              const tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
              if (!tmp18) {
                const tmpResult6 = router_utils;
                tmpResult6.transitionTo(authStore2.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
              }
            }
          }
        }
      }
    }
    closure_7();
  }, []);
  const memo = react.useMemo(() => {
    const tmp = getInitialNavigationStateDefault();
    let name;
    const log = MainNavigationLoggerDefault.log;
    MainNavigationLoggerDefault;
    if (tmp != null) {
      const first = tmp.routes[0];
      if (first != null) {
        name = first.name;
      }
    }
    log("Initial Screen: " + name);
    return tmp;
  }, []);
  _require = react.useRef(true);
  const effect = react.useEffect(() => {
    let tmp;
    if (ref2.current) {
      tmp.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const obj = ref2(closure_1_3[19]);
        const rootNavigationRef = obj.getRootNavigationRef();
        const tmp = ref2;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const tmpResult = tmp(closure_1_3[24]);
            const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(rootNavigationRef.getState().routes);
            rootNavigationRef.reset(closure_1_2(closure_1_3[29])(modalRoutesAboveMainResult));
          }
        }
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  const obj2 = require("useNavigationTheme");
  const navigationTheme = obj2.useNavigationTheme(tmp);
  const obj3 = { theme: navigationTheme, ref: obj4.getRootNavigationRef(), onReady: handleNavigationOnReady, onStateChange: callback, initialState: memo, navigationInChildEnabled: true, children };
  const NavigationContainer = require("Link").NavigationContainer;
  obj4 = require("RootNavigationRef");
  return closure_14(NavigationContainer, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShareNavigationContainer(children) {
  const obj = react2;
  const cResult = obj.c(4);
  children = children.children;
  const tmp4 = useThemeDefault();
  const obj2 = useNavigationTheme;
  const navigationTheme = obj2.useNavigationTheme(tmp4);
  const obj3 = Link;
  const navigationContainerRef = obj3.useNavigationContainerRef();
  const obj4 = BackPressTracking;
  const trackNavigationBackPress = obj4.useTrackNavigationBackPress(navigationContainerRef);
  if (cResult[0] === children) {
    if (cResult[1] === navigationContainerRef) {
      let tmp8;
      if (cResult[2] === navigationTheme) {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  }
  const tmp9 = syncedClientThemes(Link.NavigationContainer, { ref: navigationContainerRef, theme: navigationTheme, navigationInChildEnabled: true, children });
  cResult[0] = children;
  cResult[1] = navigationContainerRef;
  cResult[2] = navigationTheme;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : (function ShareNavigationContainer(children) {
  children = children.children;
  const tmp = useThemeDefault();
  const obj = useNavigationTheme;
  const theme = obj.useNavigationTheme(tmp);
  const obj2 = Link;
  const ref = obj2.useNavigationContainerRef();
  const obj3 = BackPressTracking;
  const trackNavigationBackPress = obj3.useTrackNavigationBackPress(ref);
  return syncedClientThemes(Link.NavigationContainer, { ref, theme, navigationInChildEnabled: true, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppNavigationContainerOrEmpty(arg0) {
  let appEntryKey;
  let children;
  const obj = react2;
  const cResult = obj.c(6);
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    let tmp10;
    if (cResult[0] !== children) {
      const obj2 = { children };
      const tmp13 = syncedClientThemes(closure_19, obj2);
      cResult[0] = children;
      cResult[1] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[1];
    }
    return tmp10;
  } else if ("share" === appEntryKey) {
    let tmp6;
    if (cResult[2] !== children) {
      const obj3 = { children };
      const tmp9 = syncedClientThemes(closure_20, obj3);
      cResult[2] = children;
      cResult[3] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[3];
    }
    return tmp6;
  } else {
    let tmp4;
    if (cResult[4] !== appEntryKey) {
      const tmpResult = GlobalUtils;
      const assertNeverResult = tmpResult.assertNever(appEntryKey);
      cResult[4] = appEntryKey;
      cResult[5] = assertNeverResult;
      tmp4 = assertNeverResult;
    } else {
      tmp4 = cResult[5];
    }
    return tmp4;
  }
}) : (function AppNavigationContainerOrEmpty(arg0) {
  let appEntryKey;
  let children;
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    const obj2 = { children };
    return syncedClientThemes(closure_19, obj2);
  } else if ("share" === appEntryKey) {
    const obj3 = { children };
    return syncedClientThemes(closure_20, obj3);
  } else {
    const obj = GlobalUtils;
    return obj.assertNever(appEntryKey);
  }
});
let c22 = false;
let closure_23 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
let closure_24 = { code: "function AppContainerTsx2(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppContainer(arg0) {
  let Component;
  let PortalProvider;
  let ReanimatedScreenProvider;
  let RootThemeContextProvider;
  let Router;
  let appEntryKey;
  let children;
  let items2;
  let items3;
  let obj10;
  let obj13;
  let obj14;
  let obj15;
  let obj17;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let tmp12;
  let tmp15;
  let tmp19;
  let tmp20;
  let tmp25;
  let tmp29;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let tmp = require;
  let obj = react2;
  const cResult = obj.c(19);
  ({ children, appEntryKey } = arg0);
  let obj2 = useRequestGatewaySocket;
  const requestGatewaySocket = obj2.useRequestGatewaySocket("AppContainer:" + appEntryKey);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function o() {
      let RNScreensTurboModule;
      const tmp = c22;
      if (!tmp) {
        RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
        const fn = function e() {
          global.RNScreensTurboModule = RNScreensTurboModule;
        };
        const obj2 = { RNScreensTurboModule };
        fn.__closure = obj2;
        fn.__workletHash = 8891274578898;
        fn.__initData = __initData;
        const obj = closure_1(closure_3[11]);
        obj.runOnUI(fn)();
        c22 = true;
      }
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = react.useEffect(tmp5, tmp6);
  const obj3 = react;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      const obj = require("PlatformUtils");
      const SplashScreenManager = obj.isIOS() && NativeModules.SplashScreenManager;
      if (SplashScreenManager) {
        const SplashScreenManager2 = NativeModules.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const effect1 = obj3.useEffect(tmp8, tmp9);
  const tmp11 = closure_25();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = RouteManagerDefault;
    const history = obj4.getHistory();
    cResult[4] = history;
    tmp12 = history;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp18 = syncedClientThemes(ThemedStatusBarDefault, {});
    cResult[5] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = syncedClientThemes(SafeAreaProvider2.SafeAreaReporter, {});
    const tmp24 = syncedClientThemes(DevToolsLazyDefault, {});
    cResult[6] = tmp22;
    cResult[7] = tmp24;
    tmp20 = tmp24;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[6];
    tmp20 = cResult[7];
  }
  if (cResult[8] !== children) {
    const obj5 = { children: syncedClientThemes(Router, obj6) };
    const WebViewContextProvider = WebViewContext.WebViewContextProvider;
    obj6 = { history: tmp12, children: syncedClientThemes(closure_17, obj7) };
    obj7 = { children: syncedClientThemes(tmp29, obj8) };
    Router = _mod11194.Router;
    obj8 = { children: syncedClientThemes(PortalProvider, obj9) };
    obj9 = { children: authStore3(Component, obj10) };
    tmp29 = components_native_ErrorBoundaryDefault;
    PortalProvider = Portal.PortalProvider;
    obj10 = { children: items2 };
    items2 = [tmp15, ];
    Component = AnimatedKeyboardProviderDefault.Component;
    const obj11 = { children: items3 };
    items3 = [children, tmp19, tmp20];
    items2[1] = authStore3(SafeAreaProvider2.SafeAreaProvider, obj11);
    const tmp31 = syncedClientThemes(WebViewContextProvider, obj5);
    cResult[8] = children;
    cResult[9] = tmp31;
    tmp25 = tmp31;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] === appEntryKey) {
    let tmp32;
    if (cResult[11] === tmp25) {
      tmp32 = cResult[12];
    }
    if (cResult[13] === appEntryKey) {
      let tmp34;
      if (cResult[14] === tmp32) {
        tmp34 = cResult[15];
      }
      if (cResult[16] === tmp11) {
        let tmp39;
        if (cResult[17] === tmp34) {
          tmp39 = cResult[18];
        }
        return tmp39;
      }
      const obj12 = { profile: StartupProfiler.Profiles.AppContainer, children: syncedClientThemes(ReanimatedScreenProvider, obj13) };
      const tmp42 = StartupProfilerDefault;
      obj13 = { children: syncedClientThemes(RootThemeContextProvider, obj14) };
      ReanimatedScreenProvider = _mod16331.ReanimatedScreenProvider;
      obj14 = { children: syncedClientThemes(ManaContext.ManaContextProvider, obj15) };
      RootThemeContextProvider = RootThemeContextProvider2.RootThemeContextProvider;
      obj15 = { value: tmp11, children: tmp34 };
      const tmp43 = syncedClientThemes(tmp42, obj12);
      cResult[16] = tmp11;
      cResult[17] = tmp34;
      cResult[18] = tmp43;
      tmp39 = tmp43;
    }
    const obj16 = { children: syncedClientThemes(AppEntryKeyContext.AppEntryKeyContext.Provider, obj17) };
    obj17 = { value: appEntryKey, children: tmp32 };
    const tmp37 = AccessibilityPreferencesContextProviderDefault;
    const tmp38 = syncedClientThemes(tmp37, obj16);
    cResult[13] = appEntryKey;
    cResult[14] = tmp32;
    cResult[15] = tmp38;
    tmp34 = tmp38;
  }
  const tmp33 = syncedClientThemes(closure_21, { appEntryKey, children: tmp25 });
  cResult[10] = appEntryKey;
  cResult[11] = tmp25;
  cResult[12] = tmp33;
  tmp32 = tmp33;
}) : (function AppContainer(children) {
  children = children.children;
  const appEntryKey = children.appEntryKey;
  let obj = appEntryKey(14804);
  const requestGatewaySocket = obj.useRequestGatewaySocket("AppContainer:" + appEntryKey);
  const effect = react.useEffect(() => {
    let RNScreensTurboModule;
    const tmp = c22;
    if (!tmp) {
      RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
      const fn = function e() {
        children.RNScreensTurboModule = RNScreensTurboModule;
      };
      const obj2 = { RNScreensTurboModule };
      fn.__closure = obj2;
      fn.__workletHash = 417601113617;
      fn.__initData = __initData;
      const obj = appEntryKey(closure_3[11]);
      obj.runOnUI(fn)();
      c22 = true;
    }
  }, []);
  const effect1 = react.useEffect(() => {
    const obj = appEntryKey(dependencyMap[35]);
    const SplashScreenManager = obj.isIOS() && NativeModules.SplashScreenManager;
    if (SplashScreenManager) {
      const SplashScreenManager2 = NativeModules.SplashScreenManager;
      SplashScreenManager2.hideSplashScreen();
    }
  }, []);
  const tmp4 = closure_25();
  const value = tmp4;
  let items = [appEntryKey, children, tmp4];
  return react.useMemo(() => {
    let Component;
    let ManaContextProvider;
    let PortalProvider;
    let Provider;
    let ReanimatedScreenProvider;
    let RootThemeContextProvider;
    let Router;
    let WebViewContextProvider;
    let items;
    let items1;
    let obj10;
    let obj11;
    let obj12;
    let obj13;
    let obj14;
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let obj6;
    let obj7;
    let obj8;
    let obj9;
    let tmp2;
    let tmp3;
    const obj = { profile: StartupProfiler.Profiles.AppContainer, children: syncedClientThemes(ReanimatedScreenProvider, obj2) };
    const tmp = StartupProfilerDefault;
    obj2 = { children: syncedClientThemes(RootThemeContextProvider, obj3) };
    ReanimatedScreenProvider = _mod16331.ReanimatedScreenProvider;
    obj3 = { children: syncedClientThemes(ManaContextProvider, obj4) };
    RootThemeContextProvider = RootThemeContextProvider2.RootThemeContextProvider;
    obj4 = { value, children: syncedClientThemes(tmp2, obj5) };
    ManaContextProvider = ManaContext.ManaContextProvider;
    obj5 = { children: syncedClientThemes(Provider, obj6) };
    obj6 = { value: appEntryKey, children: syncedClientThemes(closure_21, obj7) };
    obj7 = { appEntryKey, children: syncedClientThemes(WebViewContextProvider, obj8) };
    tmp2 = AccessibilityPreferencesContextProviderDefault;
    Provider = AppEntryKeyContext.AppEntryKeyContext.Provider;
    obj8 = { children: syncedClientThemes(Router, obj9) };
    WebViewContextProvider = WebViewContext.WebViewContextProvider;
    obj9 = { history: obj10.getHistory(), children: syncedClientThemes(closure_17, obj11) };
    Router = _mod11194.Router;
    obj10 = RouteManagerDefault;
    obj11 = { children: syncedClientThemes(tmp3, obj12) };
    obj12 = { children: syncedClientThemes(PortalProvider, obj13) };
    obj13 = { children: authStore3(Component, obj14) };
    tmp3 = components_native_ErrorBoundaryDefault;
    PortalProvider = Portal.PortalProvider;
    obj14 = { children: items };
    Component = AnimatedKeyboardProviderDefault.Component;
    items = [syncedClientThemes(ThemedStatusBarDefault, {}), ];
    const obj15 = { children: items1 };
    items1 = [children, , ];
    const SafeAreaProvider = SafeAreaProvider2.SafeAreaProvider;
    items1[1] = syncedClientThemes(SafeAreaProvider2.SafeAreaReporter, {});
    items1[2] = syncedClientThemes(DevToolsLazyDefault, {});
    items[1] = authStore3(SafeAreaProvider, obj15);
    return syncedClientThemes(tmp, obj);
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function useManaContextProviderValue() {
  let tmp3;
  let tmp5;
  let tmp6;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(7);
  let obj2 = RiveAppStatePlaybackExperiment;
  const riveAppStatePlaybackExperiment = obj2.useRiveAppStatePlaybackExperiment("AppContainer");
  if (cResult[0] !== riveAppStatePlaybackExperiment) {
    const items = [];
    if (riveAppStatePlaybackExperiment) {
      items.push("rive-app-state-playback");
    }
    cResult[0] = riveAppStatePlaybackExperiment;
    cResult[1] = items;
    tmp3 = items;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== tmp3) {
    const obj3 = { enabledExperiments: tmp3 };
    cResult[2] = tmp3;
    cResult[3] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(arg0, tags) {
      const obj = SentryUtils;
      const obj2 = { tags };
      return obj.captureException(arg0, obj2);
    };
    cResult[4] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    const obj4 = { experiments: tmp5, captureException: tmp6 };
    cResult[5] = tmp5;
    cResult[6] = obj4;
    tmp7 = obj4;
  } else {
    tmp7 = cResult[6];
  }
  return tmp7;
}) : (function useManaContextProviderValue() {
  let memo;
  let obj = memo(16341);
  const riveAppStatePlaybackExperiment = obj.useRiveAppStatePlaybackExperiment("AppContainer");
  let items = [riveAppStatePlaybackExperiment];
  memo = react.useMemo(() => {
    const items = [];
    const tmp = riveAppStatePlaybackExperiment;
    if (tmp) {
      items.push("rive-app-state-playback");
    }
    return items;
  }, items);
  const items1 = [memo];
  return react.useMemo(() => {
    let obj2;
    let obj = {
      experiments: obj2,
      captureException(arg0, tags) {
        const obj = closure_1_2(closure_1_3[52]);
        const obj2 = { tags };
        return obj.captureException(arg0, obj2);
      }
    };
    obj2 = { enabledExperiments: memo };
    return obj;
  }, items1);
});
const result1 = SentryUtils.profiledRootComponent(tmp7);
const result2 = size.fileFinishedImporting("components_native/AppContainer.tsx");

export default result1;
