// Module ID: 14929
// Function ID: 14930
// Name: AppContainer
// Dependencies: [32, 19, 17, 7658, 2044, 2098, 1074, 2051, 21, 4829, 576, 4561, 5430, 14930, 5035, 1110, 1232, 4687, 5203, 7369, 14932, 14933, 4686, 1101, 4763, 1241, 4688, 14934, 7374, 1485, 1370, 14935, 1364, 11870, 14936, 14944, 4606, 14946, 1481, 9814, 13131, 13137, 14947, 4702, 14948, 14950, 14951, 14952, 16348, 16356, 1231, 2]

// Module 14929 (AppContainer)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import SentryInitUtils from "SentryInitUtils" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1481 */;
import Link from "Link" /* 1485 */;
import ManaContext from "ManaContext" /* 4606 */;
import RootNavigationRef from "RootNavigationRef" /* 4687 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 4688 */;
import Portal from "Portal" /* 4702 */;
import useThemeDefault from "useTheme" /* 4763 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 5035 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5430 */;
import useNavigationTheme from "useNavigationTheme" /* 7374 */;
import WebViewContext from "WebViewContext" /* 9814 */;
import StartupProfiler from "StartupProfiler" /* 11870 */;
import MemoryRouter from "MemoryRouter" /* 13131 */;
import RouteManagerDefault from "RouteManager" /* 13137 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14930 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 14933 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 14934 */;
import ReanimatedScreenProvider from "ReanimatedScreenProvider" /* 14936 */;
import RootThemeContextProvider from "RootThemeContextProvider" /* 14944 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 14946 */;
import ErrorBoundaryDefault from "ErrorBoundary" /* 14947 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 14948 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 14950 */;
import SafeAreaProvider from "SafeAreaProvider" /* 14951 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 14952 */;
import ScreenRecordingPipDefault from "ScreenRecordingPip" /* 16348 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
function GestureWrapper(children) {
  const tmp = closure_16();
  const styles = tmp;
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  let items = [isScreenLandscape, tmp];
  const style = noop.useMemo(() => {
    const items = [styles.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = styles.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return closure_1_14(DiscordGestureHandlerRootViewDefault, { style, children: children.children });
}
function handleNavigationOnReady() {
  ModalDispatchQueueDefault.flush();
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.NAVIGATOR_READY);
  const routingInstrumentation = SentryInitUtils.routingInstrumentation;
  const result = routingInstrumentation.registerNavigationContainer(RootNavigationRef.getRootNavigationRef());
  closure_7();
}
function AppNavigationContainer(children) {
  noop.useRef(undefined);
  const callback = noop.useCallback(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        const tmpResult = tmp(4686);
        const tmp4 = null != tmp(4686).coerceGuildsRoute(currentRoute);
        const tmp5 = ref;
        const tmpResult4 = tmp(4686);
        if (tmp6) {
          AnalyticsUtilsDefault.track(constants.NAV_DRAWER_OPENED);
        }
        tmp5.current = currentRoute;
        tmp6 = null != tmp(4686).coerceChannelRoute(ref.current) && tmp4;
        const tmp14 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2)[1];
        if (null != tmp14) {
          if (isStaticChannelRoute(tmp14)) {
            if (tmp14 !== SelectedChannelStore.getChannelId()) {
              const coerceChannelRouteResult = tmp(4686).coerceChannelRoute(currentRoute);
              if (!tmp18) {
                tmp(1101).transitionTo(closure_2_12.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
                const tmpResult6 = tmp(1101);
              }
              tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
              const tmpResult5 = tmp(4686);
            }
          }
        }
        const tmp12 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2);
      }
    }
    closure_7();
  }, []);
  const memo = noop.useMemo(() => {
    const tmp = getInitialNavigationStateDefault();
    let name;
    if (tmp != null) {
      const first = tmp.routes[0];
      if (first != null) {
        name = first.name;
      }
    }
    MainNavigationLoggerDefault.log("Initial Screen: " + name);
    return tmp;
  }, []);
  _require = noop.useRef(true);
  const effect = noop.useEffect(() => {
    if (ref2.current) {
      tmp.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const rootNavigationRef = ref2(dependencyMap[17]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const routes = rootNavigationRef.getState().routes;
            const found = routes.filter((name) => "modal" === name.name);
            rootNavigationRef.reset(closure_1_2(dependencyMap[26])(found));
          }
        }
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  let tmp = useThemeDefault();
  const navigationTheme = require("useNavigationTheme").useNavigationTheme(tmp);
  const obj2 = { theme: navigationTheme, ref: null, onReady: null, onStateChange: null, initialState: null, navigationInChildEnabled: true, children: null };
  const obj = require("useNavigationTheme");
  obj2.ref = require("RootNavigationRef").getRootNavigationRef();
  obj2.onReady = handleNavigationOnReady;
  obj2.onStateChange = callback;
  obj2.initialState = memo;
  obj2.children = children.children;
  return closure_14(require("Link").NavigationContainer, obj2);
}
function ShareNavigationContainer(children) {
  const tmp = useThemeDefault();
  const theme = useNavigationTheme.useNavigationTheme(tmp);
  return closure_1_14(Link.NavigationContainer, { theme, navigationInChildEnabled: true, children: children.children });
}
function AppNavigationContainerOrEmpty(arg0) {
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    const obj2 = { children };
    return closure_1_14(AppNavigationContainer, obj2);
  } else if ("share" === appEntryKey) {
    const obj3 = { children };
    return closure_1_14(ShareNavigationContainer, obj3);
  } else {
    return GlobalUtils.assertNever(appEntryKey);
  }
}
const NativeModules = fn(17).NativeModules;
let closure_7 = fn(7658).handleHistoryStoreNavigationChange;
const Constants = fn(1074);
({ AnalyticEvents: c10, ComponentActions: closure_11, Routes: closure_12 } = Constants);
const isStaticChannelRoute = fn(2051).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { flex: { flex: 1 }, rootBackgroundColor: { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND } };
let closure_16 = createStyles.createStyles(obj2);
const ReanimatedRexport = fn(4561);
let obj3 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let result = ReanimatedRexport.configureReanimatedLogger({ level: fn(4561).ReanimatedLogLevel.error, strict: false });
try {
  fn(5203).enableFreeze();
  let obj6 = fn(5203);
  let obj8 = { useTrackNavigatorScreenImpression: fn(14932).useTrackNavigatorScreenImpression };
  fn(7369).setDesignConfig(obj8);
  let c22 = false;
  let closure_23 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
  let obj7 = fn(7369);
  const result1 = SentryUtilsDefault.profiledRootComponent(function AppContainer(children) {
    children = children.children;
    const appEntryKey = children.appEntryKey;
    const requestGatewaySocket = appEntryKey(14935).useRequestGatewaySocket("AppContainer:" + appEntryKey);
    const effect = noop.useEffect(() => {
      if (!c22) {
        RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
        const fn = function e() {
          children.RNScreensTurboModule = RNScreensTurboModule;
        };
        const obj2 = { RNScreensTurboModule };
        fn.__closure = obj2;
        fn.__workletHash = 8891274578898;
        fn.__initData = __initData;
        appEntryKey(4561).runOnUI(fn)();
        c22 = true;
        const obj = appEntryKey(4561);
      }
    }, []);
    const effect1 = noop.useEffect(() => {
      let SplashScreenManager = appEntryKey(1364).isIOS();
      if (SplashScreenManager) {
        SplashScreenManager = NativeModules.SplashScreenManager;
      }
      if (SplashScreenManager) {
        const SplashScreenManager2 = NativeModules.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
    }, []);
    let obj = appEntryKey(14935);
    const riveAppStatePlaybackExperiment = appEntryKey(16356).useRiveAppStatePlaybackExperiment("AppContainer");
    closure_129_0 = riveAppStatePlaybackExperiment;
    let items = [riveAppStatePlaybackExperiment];
    const memo = noop.useMemo(() => {
      const items = [];
      if (children) {
        items.push("rive-app-state-playback");
      }
      return items;
    }, items);
    closure_129_1 = memo;
    let items1 = [memo];
    const memo1 = noop.useMemo(() => {
      const obj = {
        experiments: { enabledExperiments: appEntryKey },
        captureException(arg0, tags) {
          return memo1(dependencyMap[50]).captureException(arg0, { tags });
        }
      };
      return obj;
    }, items1);
    const items2 = [appEntryKey, children, memo1];
    return noop.useMemo(() => {
      const obj = { profile: StartupProfiler.Profiles.AppContainer, children: null };
      const obj2 = { children: null };
      const obj3 = { children: null };
      const obj4 = { value: memo1, children: null };
      const obj5 = { children: null };
      const tmp = StartupProfilerDefault;
      const obj6 = { value: appEntryKey, children: null };
      const obj7 = { appEntryKey, children: null };
      const obj8 = { children: null };
      const obj9 = { history: null, children: null };
      const tmp2 = AccessibilityPreferencesContextProviderDefault;
      obj9.history = RouteManagerDefault.getHistory();
      const obj11 = { children: null };
      const obj12 = { children: null };
      const obj13 = { children: null };
      const obj14 = { children: null };
      const items = [closure_2_14(ThemedStatusBarDefault, {}), ];
      const obj15 = { children: null };
      const items1 = [children, closure_2_14(SafeAreaProvider.SafeAreaReporter, {}), closure_2_14(DevToolsLazyDefault, {}), closure_2_14(ScreenRecordingPipDefault, {})];
      obj15.children = items1;
      items[1] = __initData(SafeAreaProvider.SafeAreaProvider, obj15);
      obj14.children = items;
      obj13.children = __initData(AnimatedKeyboardProviderDefault.Component, obj14);
      obj12.children = closure_2_14(Portal.PortalProvider, obj13);
      obj11.children = closure_2_14(ErrorBoundaryDefault, obj12);
      obj9.children = closure_2_14(GestureWrapper, obj11);
      obj8.children = closure_2_14(MemoryRouter.Router, obj9);
      obj7.children = closure_2_14(WebViewContext.WebViewContextProvider, obj8);
      obj6.children = closure_2_14(AppNavigationContainerOrEmpty, obj7);
      obj5.children = closure_2_14(AppEntryKeyContext.AppEntryKeyContext.Provider, obj6);
      obj4.children = closure_2_14(tmp2, obj5);
      obj3.children = closure_2_14(ManaContext.ManaContextProvider, obj4);
      obj2.children = closure_2_14(RootThemeContextProvider.RootThemeContextProvider, obj3);
      obj.children = closure_2_14(ReanimatedScreenProvider.ReanimatedScreenProvider, obj2);
      return closure_2_14(tmp, obj);
    }, items2);
  });
  const importDefaultResult = SentryUtilsDefault;
  const result2 = fn(2).fileFinishedImporting("components_native/AppContainer.tsx");
  exports.default = result1;
} catch (err) {
}
