// Module ID: 14743
// Function ID: 14744
// Name: AppContainer
// Dependencies: [32, 19, 17, 6080, 2064, 2115, 1085, 2071, 21, 5091, 587, 4811, 558, 576, 8310, 14744, 5944, 1121, 1256, 4938, 5306, 6722, 14746, 14747, 4937, 1112, 4992, 1265, 4939, 14748, 6728, 1504, 1388, 14749, 1382, 11159, 14750, 14751, 14752, 10913, 11153, 16260, 4953, 16261, 16263, 1500, 11583, 16264, 16272, 4854, 16274, 1255, 2]

// Module 14743 (AppContainer)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import SentryInitUtils from "SentryInitUtils" /* 1256 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4937 */;
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import useThemeDefault from "useTheme" /* 4992 */;
import enableScreens from "enableScreens" /* 5306 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 5944 */;
import NavigationHistoryStore from "NavigationHistoryStore" /* 6080 */;
import useNavigationTheme from "useNavigationTheme" /* 6728 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8310 */;
import RouteManagerDefault from "RouteManager" /* 11159 */;
import StartupProfilerDefault from "StartupProfiler" /* 11583 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14744 */;
import useTrackNavigatorScreenImpression from "useTrackNavigatorScreenImpression" /* 14746 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 14747 */;
import useRequestGatewaySocket from "useRequestGatewaySocket" /* 14749 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 14750 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 14752 */;
import components_native_ErrorBoundaryDefault from "components_native/ErrorBoundary" /* 16260 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 16261 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 16263 */;
import RiveAppStatePlaybackExperiment from "RiveAppStatePlaybackExperiment" /* 16274 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import config from "config" /* 6722 */;
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
const Link = tmp(1504);
const ManaContext = tmp(4854);
const getInitialNavigationStateDefault = tmp4(4939);
const Portal = tmp(4953);
const WebViewContext = tmp(10913);
const _mod11153 = tmp(11153);
const StartupProfiler = tmp(11583);
const MainNavigationLoggerDefault = tmp4(14748);
const SafeAreaProvider2 = tmp(14751);
const _mod16264 = tmp(16264);
const RootThemeContextProvider2 = tmp(16272);
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
    const tmp9 = authStore3(DiscordGestureHandlerRootViewDefault, obj3);
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
  return authStore3(DiscordGestureHandlerRootViewDefault, { style, children });
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
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp19;
  let tmp7;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(8);
  children = children.children;
  let tmp4 = importDefault;
  let tmp5 = useThemeDefault();
  const ref = react.useRef(undefined);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
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
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = getInitialNavigationStateDefault();
    cResult[1] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[1];
  }
  let name;
  const log = MainNavigationLoggerDefault.log;
  MainNavigationLoggerDefault;
  if (tmp7 != null) {
    const first1 = tmp7.routes[0];
    if (first1 != null) {
      name = first1.name;
    }
  }
  log("Initial Screen: " + name);
  _require = obj2.useRef(true);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
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
                rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
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
    cResult[2] = C;
    cResult[3] = items;
    tmp14 = items;
    tmp13 = C;
  } else {
    class C {
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
                rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
              }
            }
          }, 0);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    tmp14 = cResult[3];
  }
  const effect = obj2.useEffect(tmp13, tmp14);
  let tmpResult = tmp(6728);
  const navigationTheme = tmpResult.useNavigationTheme(tmp5);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
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
                rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
              }
            }
          }, 0);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    let rootNavigationRef = obj4.getRootNavigationRef();
    cResult[4] = rootNavigationRef;
    tmp17 = rootNavigationRef;
  } else {
    class C {
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
                rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
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
  if (cResult[5] === children) {
    class C {
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
                rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
              }
            }
          }, 0);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    return tmp19;
  }
  const obj3 = { theme: navigationTheme, ref: tmp17, onReady: handleNavigationOnReady, onStateChange: first, initialState: tmp7, navigationInChildEnabled: true, children };
  tmp19 = closure_14(tmp(1504).NavigationContainer, obj3);
  cResult[5] = children;
  cResult[6] = navigationTheme;
  cResult[7] = tmp19;
}) : (function AppNavigationContainer(children) {
  let obj3;
  let ref2;
  children = children.children;
  let tmp = useThemeDefault();
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
            rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
          }
        }
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  let obj = require("useNavigationTheme");
  const navigationTheme = obj.useNavigationTheme(tmp);
  const obj2 = { theme: navigationTheme, ref: obj3.getRootNavigationRef(), onReady: handleNavigationOnReady, onStateChange: callback, initialState: memo, navigationInChildEnabled: true, children };
  const NavigationContainer = require("Link").NavigationContainer;
  obj3 = require("RootNavigationRef");
  return closure_14(NavigationContainer, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShareNavigationContainer(children) {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp4 = useThemeDefault();
  const obj2 = useNavigationTheme;
  const navigationTheme = obj2.useNavigationTheme(tmp4);
  if (cResult[0] === children) {
    let tmp6;
    if (cResult[1] === navigationTheme) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  const tmp7 = authStore3(Link.NavigationContainer, { theme: navigationTheme, navigationInChildEnabled: true, children });
  cResult[0] = children;
  cResult[1] = navigationTheme;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (function ShareNavigationContainer(children) {
  children = children.children;
  const tmp = useThemeDefault();
  const obj = useNavigationTheme;
  const theme = obj.useNavigationTheme(tmp);
  return authStore3(Link.NavigationContainer, { theme, navigationInChildEnabled: true, children });
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
      const tmp13 = authStore3(closure_19, obj2);
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
      const tmp9 = authStore3(closure_20, obj3);
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
    return authStore3(closure_19, obj2);
  } else if ("share" === appEntryKey) {
    const obj3 = { children };
    return authStore3(closure_20, obj3);
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
    const tmp18 = authStore3(ThemedStatusBarDefault, {});
    cResult[5] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = authStore3(SafeAreaProvider2.SafeAreaReporter, {});
    const tmp24 = authStore3(DevToolsLazyDefault, {});
    cResult[6] = tmp22;
    cResult[7] = tmp24;
    tmp20 = tmp24;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[6];
    tmp20 = cResult[7];
  }
  if (cResult[8] !== children) {
    const obj5 = { children: authStore3(Router, obj6) };
    const WebViewContextProvider = WebViewContext.WebViewContextProvider;
    obj6 = { history: tmp12, children: authStore3(closure_17, obj7) };
    obj7 = { children: authStore3(tmp29, obj8) };
    Router = _mod11153.Router;
    obj8 = { children: authStore3(PortalProvider, obj9) };
    obj9 = { children: authStore4(Component, obj10) };
    tmp29 = components_native_ErrorBoundaryDefault;
    PortalProvider = Portal.PortalProvider;
    obj10 = { children: items2 };
    items2 = [tmp15, ];
    Component = AnimatedKeyboardProviderDefault.Component;
    const obj11 = { children: items3 };
    items3 = [children, tmp19, tmp20];
    items2[1] = authStore4(SafeAreaProvider2.SafeAreaProvider, obj11);
    const tmp31 = authStore3(WebViewContextProvider, obj5);
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
      const obj12 = { profile: StartupProfiler.Profiles.AppContainer, children: authStore3(ReanimatedScreenProvider, obj13) };
      const tmp42 = StartupProfilerDefault;
      obj13 = { children: authStore3(RootThemeContextProvider, obj14) };
      ReanimatedScreenProvider = _mod16264.ReanimatedScreenProvider;
      obj14 = { children: authStore3(ManaContext.ManaContextProvider, obj15) };
      RootThemeContextProvider = RootThemeContextProvider2.RootThemeContextProvider;
      obj15 = { value: tmp11, children: tmp34 };
      const tmp43 = authStore3(tmp42, obj12);
      cResult[16] = tmp11;
      cResult[17] = tmp34;
      cResult[18] = tmp43;
      tmp39 = tmp43;
    }
    const obj16 = { children: authStore3(AppEntryKeyContext.AppEntryKeyContext.Provider, obj17) };
    obj17 = { value: appEntryKey, children: tmp32 };
    const tmp37 = AccessibilityPreferencesContextProviderDefault;
    const tmp38 = authStore3(tmp37, obj16);
    cResult[13] = appEntryKey;
    cResult[14] = tmp32;
    cResult[15] = tmp38;
    tmp34 = tmp38;
  }
  const tmp33 = authStore3(closure_21, { appEntryKey, children: tmp25 });
  cResult[10] = appEntryKey;
  cResult[11] = tmp25;
  cResult[12] = tmp33;
  tmp32 = tmp33;
}) : (function AppContainer(children) {
  children = children.children;
  const appEntryKey = children.appEntryKey;
  let obj = appEntryKey(14749);
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
    const obj = appEntryKey(dependencyMap[34]);
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
    const obj = { profile: StartupProfiler.Profiles.AppContainer, children: authStore3(ReanimatedScreenProvider, obj2) };
    const tmp = StartupProfilerDefault;
    obj2 = { children: authStore3(RootThemeContextProvider, obj3) };
    ReanimatedScreenProvider = _mod16264.ReanimatedScreenProvider;
    obj3 = { children: authStore3(ManaContextProvider, obj4) };
    RootThemeContextProvider = RootThemeContextProvider2.RootThemeContextProvider;
    obj4 = { value, children: authStore3(tmp2, obj5) };
    ManaContextProvider = ManaContext.ManaContextProvider;
    obj5 = { children: authStore3(Provider, obj6) };
    obj6 = { value: appEntryKey, children: authStore3(closure_21, obj7) };
    obj7 = { appEntryKey, children: authStore3(WebViewContextProvider, obj8) };
    tmp2 = AccessibilityPreferencesContextProviderDefault;
    Provider = AppEntryKeyContext.AppEntryKeyContext.Provider;
    obj8 = { children: authStore3(Router, obj9) };
    WebViewContextProvider = WebViewContext.WebViewContextProvider;
    obj9 = { history: obj10.getHistory(), children: authStore3(closure_17, obj11) };
    Router = _mod11153.Router;
    obj10 = RouteManagerDefault;
    obj11 = { children: authStore3(tmp3, obj12) };
    obj12 = { children: authStore3(PortalProvider, obj13) };
    obj13 = { children: authStore4(Component, obj14) };
    tmp3 = components_native_ErrorBoundaryDefault;
    PortalProvider = Portal.PortalProvider;
    obj14 = { children: items };
    Component = AnimatedKeyboardProviderDefault.Component;
    items = [authStore3(ThemedStatusBarDefault, {}), ];
    const obj15 = { children: items1 };
    items1 = [children, , ];
    const SafeAreaProvider = SafeAreaProvider2.SafeAreaProvider;
    items1[1] = authStore3(SafeAreaProvider2.SafeAreaReporter, {});
    items1[2] = authStore3(DevToolsLazyDefault, {});
    items[1] = authStore4(SafeAreaProvider, obj15);
    return authStore3(tmp, obj);
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
  let obj = memo(16274);
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
        const obj = closure_1_2(closure_1_3[51]);
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
