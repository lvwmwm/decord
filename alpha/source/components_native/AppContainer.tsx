// Module ID: 16671
// Function ID: 16672
// Name: AppContainer
// Dependencies: [32, 19, 17, 6954, 5019, 5073, 1072, 5026, 21, 5170, 575, 1652, 8865, 16672, 6826, 1108, 1243, 5345, 6124, 7292, 16674, 6956, 5344, 1099, 5399, 6183, 1252, 5346, 16675, 7296, 1500, 1380, 16676, 1705, 1377, 11730, 16677, 16685, 5285, 16687, 1496, 11995, 12233, 12239, 16688, 5360, 12248, 16689, 16690, 16691, 18256, 1242, 2]

// Module 16671 (AppContainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1099 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import SentryInitUtils from "SentryInitUtils" /* 1243 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1496 */;
import Link from "Link" /* 1500 */;
import ChannelConstants from "ChannelConstants" /* 5026 */;
import ManaContext from "ManaContext" /* 5285 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5344 */;
import RootNavigationRef from "RootNavigationRef" /* 5345 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 5346 */;
import Portal from "Portal" /* 5360 */;
import useThemeDefault from "useTheme" /* 5399 */;
import enableScreens from "enableScreens" /* 6124 */;
import BackPressTracking from "BackPressTracking" /* 6183 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 6826 */;
import NavigationHistoryStore from "NavigationHistoryStore" /* 6954 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 6956 */;
import useNavigationTheme from "useNavigationTheme" /* 7296 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8865 */;
import StartupProfiler from "StartupProfiler" /* 11730 */;
import WebViewContext from "WebViewContext" /* 11995 */;
import _mod12233 from "module_12233" /* 12233 */;
import RouteManagerDefault from "RouteManager" /* 12239 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 12248 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 16672 */;
import useTrackNavigatorScreenImpression from "useTrackNavigatorScreenImpression" /* 16674 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 16675 */;
import _mod16677 from "module_16677" /* 16677 */;
import RootThemeContextProvider2 from "RootThemeContextProvider" /* 16685 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 16687 */;
import components_native_ErrorBoundaryDefault from "components_native/ErrorBoundary" /* 16688 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 16689 */;
import SafeAreaProvider2 from "SafeAreaProvider" /* 16690 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 16691 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import module_1652 from "module_1652" /* 1652 */;
import config from "config" /* 7292 */;
import SentryUtils from "SentryUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const StartupProfilerDefault = StartupProfiler;
let _require;

let c10;
let closure_12;
let closure_14;
let closure_15;
let obj2;
let unpackModuleId;
function GestureWrapper(children) {
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
}
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
function AppNavigationContainer(children) {
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
        const obj = ref2(closure_1_3[17]);
        const rootNavigationRef = obj.getRootNavigationRef();
        const tmp = ref2;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const tmpResult = tmp(closure_1_3[22]);
            const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(rootNavigationRef.getState().routes);
            rootNavigationRef.reset(closure_1_2(closure_1_3[27])(modalRoutesAboveMainResult));
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
}
function ShareNavigationContainer(children) {
  children = children.children;
  const tmp = useThemeDefault();
  const obj = useNavigationTheme;
  const theme = obj.useNavigationTheme(tmp);
  const obj2 = Link;
  const ref = obj2.useNavigationContainerRef();
  const obj3 = BackPressTracking;
  const trackNavigationBackPress = obj3.useTrackNavigationBackPress(ref);
  return authStore3(Link.NavigationContainer, { ref, theme, navigationInChildEnabled: true, children });
}
function AppNavigationContainerOrEmpty(arg0) {
  let appEntryKey;
  let children;
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    const obj2 = { children };
    return authStore3(AppNavigationContainer, obj2);
  } else if ("share" === appEntryKey) {
    const obj3 = { children };
    return authStore3(ShareNavigationContainer, obj3);
  } else {
    const obj = GlobalUtils;
    return obj.assertNever(appEntryKey);
  }
}
const NativeModules = react_native.NativeModules;
let closure_7 = NavigationHistoryStore.handleHistoryStoreNavigationChange;
({ AnalyticEvents: c10, ComponentActions: unpackModuleId, Routes: closure_12 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { flex: { flex: 1 }, rootBackgroundColor: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let closure_16 = createStyles.createStyles(obj);
let obj3 = { level: module_1652.ReanimatedLogLevel.error, strict: false };
let result = module_1652.configureReanimatedLogger(obj3);
try {
  const _module4 = enableScreens;
  _module4.enableFreeze();
} catch (err) {
}
let obj4 = { useTrackNavigatorScreenImpression: useTrackNavigatorScreenImpression.useTrackNavigatorScreenImpression };
config.setDesignConfig(obj4);
let c22 = false;
let closure_23 = { code: "(function AppContainerTsx1(){let[RNScreensTurboModule]=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;})" };
const result1 = SentryUtils.profiledRootComponent(function AppContainer(children) {
  children = children.children;
  const appEntryKey = children.appEntryKey;
  let obj = appEntryKey(16676);
  const requestGatewaySocket = obj.useRequestGatewaySocket("AppContainer:" + appEntryKey);
  const effect = react.useEffect(() => {
    let tmp7;
    let tmp8;
    const tmp = c22;
    if (!tmp) {
      RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
      const items = [closure_23, RNScreensTurboModule];
      RNScreensTurboModule = undefined;
      [tmp7, tmp8] = items;
      const obj = appEntryKey(closure_3[33]);
      class AppContainerTsx1 {
        constructor() {
          children.RNScreensTurboModule = closure_0;
          return;
        }
      }
      const items1 = [tmp8];
      AppContainerTsx1.__closure = items1;
      AppContainerTsx1.__workletHash = 16271393189451;
      AppContainerTsx1.__initData = tmp7;
      obj.scheduleOnUI(AppContainerTsx1);
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
  let obj2 = appEntryKey(18256);
  const riveAppStatePlaybackExperiment = obj2.useRiveAppStatePlaybackExperiment("AppContainer");
  let items = [riveAppStatePlaybackExperiment];
  const memo = react.useMemo(() => {
    const items = [];
    const tmp = riveAppStatePlaybackExperiment;
    if (tmp) {
      items.push("rive-app-state-playback");
    }
    return items;
  }, items);
  let items1 = [memo];
  const memo1 = react.useMemo(() => {
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
  const items2 = [appEntryKey, children, memo1];
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
    ReanimatedScreenProvider = _mod16677.ReanimatedScreenProvider;
    obj3 = { children: authStore3(ManaContextProvider, obj4) };
    RootThemeContextProvider = RootThemeContextProvider2.RootThemeContextProvider;
    obj4 = { value: memo1, children: authStore3(tmp2, obj5) };
    ManaContextProvider = ManaContext.ManaContextProvider;
    obj5 = { children: authStore3(Provider, obj6) };
    obj6 = { value: appEntryKey, children: authStore3(AppNavigationContainerOrEmpty, obj7) };
    obj7 = { appEntryKey, children: authStore3(WebViewContextProvider, obj8) };
    tmp2 = AccessibilityPreferencesContextProviderDefault;
    Provider = AppEntryKeyContext.AppEntryKeyContext.Provider;
    obj8 = { children: authStore3(Router, obj9) };
    WebViewContextProvider = WebViewContext.WebViewContextProvider;
    obj9 = { history: obj10.getHistory(), children: authStore3(GestureWrapper, obj11) };
    Router = _mod12233.Router;
    obj10 = RouteManagerDefault;
    obj11 = { children: authStore3(tmp3, obj12) };
    obj12 = { children: authStore3(PortalProvider, obj13) };
    obj13 = { children: closure_15(Component, obj14) };
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
    items[1] = closure_15(SafeAreaProvider, obj15);
    return authStore3(tmp, obj);
  }, items2);
});
const result2 = size.fileFinishedImporting("components_native/AppContainer.tsx");

export default result1;
