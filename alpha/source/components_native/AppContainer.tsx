// Module ID: 16360
// Function ID: 16361
// Name: AppContainer
// Dependencies: [32, 19, 17, 6868, 4858, 4912, 1072, 4865, 21, 5009, 575, 5090, 8765, 16361, 6740, 1109, 1244, 5194, 5961, 7199, 16363, 6870, 5193, 1100, 5248, 6020, 1253, 5195, 16364, 7203, 1499, 1380, 16365, 1376, 11528, 16366, 16374, 5136, 16376, 1495, 11784, 12021, 12027, 16377, 5209, 12037, 16378, 16379, 16380, 17926, 1243, 2]

// Module 16360 (AppContainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1100 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import SentryInitUtils from "SentryInitUtils" /* 1244 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1495 */;
import Link from "Link" /* 1499 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import ManaContext from "ManaContext" /* 5136 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 5195 */;
import Portal from "Portal" /* 5209 */;
import useThemeDefault from "useTheme" /* 5248 */;
import enableScreens from "enableScreens" /* 5961 */;
import BackPressTracking from "BackPressTracking" /* 6020 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 6740 */;
import NavigationHistoryStore from "NavigationHistoryStore" /* 6868 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 6870 */;
import useNavigationTheme from "useNavigationTheme" /* 7203 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8765 */;
import StartupProfiler from "StartupProfiler" /* 11528 */;
import WebViewContext from "WebViewContext" /* 11784 */;
import _mod12021 from "module_12021" /* 12021 */;
import RouteManagerDefault from "RouteManager" /* 12027 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 12037 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 16361 */;
import useTrackNavigatorScreenImpression from "useTrackNavigatorScreenImpression" /* 16363 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 16364 */;
import _mod16366 from "module_16366" /* 16366 */;
import RootThemeContextProvider2 from "RootThemeContextProvider" /* 16374 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 16376 */;
import components_native_ErrorBoundaryDefault from "components_native/ErrorBoundary" /* 16377 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 16378 */;
import SafeAreaProvider2 from "SafeAreaProvider" /* 16379 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 16380 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import config from "config" /* 7199 */;
import SentryUtils from "SentryUtils" /* 1243 */;
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
let obj3 = { level: ReanimatedRexport.ReanimatedLogLevel.error, strict: false };
let result = ReanimatedRexport.configureReanimatedLogger(obj3);
try {
  const _module4 = enableScreens;
  _module4.enableFreeze();
} catch (err) {
}
let obj4 = { useTrackNavigatorScreenImpression: useTrackNavigatorScreenImpression.useTrackNavigatorScreenImpression };
config.setDesignConfig(obj4);
let c22 = false;
let closure_23 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
const result1 = SentryUtils.profiledRootComponent(function AppContainer(children) {
  children = children.children;
  const appEntryKey = children.appEntryKey;
  let obj = appEntryKey(16365);
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
      fn.__workletHash = 8891274578898;
      fn.__initData = __initData;
      const obj = appEntryKey(closure_3[11]);
      obj.runOnUI(fn)();
      c22 = true;
    }
  }, []);
  const effect1 = react.useEffect(() => {
    const obj = appEntryKey(dependencyMap[33]);
    const SplashScreenManager = obj.isIOS() && NativeModules.SplashScreenManager;
    if (SplashScreenManager) {
      const SplashScreenManager2 = NativeModules.SplashScreenManager;
      SplashScreenManager2.hideSplashScreen();
    }
  }, []);
  let obj2 = appEntryKey(17926);
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
        const obj = closure_1_2(closure_1_3[50]);
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
    ReanimatedScreenProvider = _mod16366.ReanimatedScreenProvider;
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
    Router = _mod12021.Router;
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
