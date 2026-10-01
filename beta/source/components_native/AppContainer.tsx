// Module ID: 14115
// Function ID: 14116
// Name: AppContainer
// Dependencies: [32, 19, 17, 6746, 2045, 2099, 1074, 2052, 21, 4836, 576, 4566, 5438, 14116, 5042, 1110, 1232, 4693, 5211, 6457, 14118, 14119, 4692, 1101, 4767, 1241, 4694, 14120, 6462, 1486, 1370, 14121, 1364, 11027, 14122, 14130, 4611, 14132, 1482, 8923, 12299, 12305, 14133, 4708, 14134, 14136, 14137, 14138, 15555, 15563, 1231, 2]

// Module 14115 (AppContainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import SentryInitUtils from "SentryInitUtils" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1482 */;
import Link from "Link" /* 1486 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import ManaContext from "ManaContext" /* 4611 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 4694 */;
import Portal from "Portal" /* 4708 */;
import useThemeDefault from "useTheme" /* 4767 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 5042 */;
import enableScreens from "enableScreens" /* 5211 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5438 */;
import useNavigationTheme from "useNavigationTheme" /* 6462 */;
import NavigationHistoryStore from "NavigationHistoryStore" /* 6746 */;
import WebViewContext from "WebViewContext" /* 8923 */;
import StartupProfiler from "StartupProfiler" /* 11027 */;
import _mod12299 from "module_12299" /* 12299 */;
import RouteManagerDefault from "RouteManager" /* 12305 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14116 */;
import useTrackNavigatorScreenImpression from "useTrackNavigatorScreenImpression" /* 14118 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 14119 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 14120 */;
import _mod14122 from "module_14122" /* 14122 */;
import RootThemeContextProvider2 from "RootThemeContextProvider" /* 14130 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 14132 */;
import components_native_ErrorBoundaryDefault from "components_native/ErrorBoundary" /* 14133 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 14134 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 14136 */;
import SafeAreaProvider2 from "SafeAreaProvider" /* 14137 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 14138 */;
import ScreenRecordingPipDefault from "ScreenRecordingPip" /* 15555 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import config from "config" /* 6457 */;
import SentryUtils from "SentryUtils" /* 1231 */;
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
  return authStore2(DiscordGestureHandlerRootViewDefault, { style, children });
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
                tmpResult6.transitionTo(closure_12.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
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
        const tmp = closure_1_3;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const routes = rootNavigationRef.getState().routes;
            const found = routes.filter((name) => "modal" === name.name);
            rootNavigationRef.reset(closure_1_2(tmp[26])(found));
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
}
function ShareNavigationContainer(children) {
  children = children.children;
  const tmp = useThemeDefault();
  const obj = useNavigationTheme;
  const theme = obj.useNavigationTheme(tmp);
  return authStore2(Link.NavigationContainer, { theme, navigationInChildEnabled: true, children });
}
function AppNavigationContainerOrEmpty(arg0) {
  let appEntryKey;
  let children;
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    const obj2 = { children };
    return authStore2(AppNavigationContainer, obj2);
  } else if ("share" === appEntryKey) {
    const obj3 = { children };
    return authStore2(ShareNavigationContainer, obj3);
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
  let obj = appEntryKey(14121);
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
    const obj = appEntryKey(dependencyMap[32]);
    const SplashScreenManager = obj.isIOS() && NativeModules.SplashScreenManager;
    if (SplashScreenManager) {
      const SplashScreenManager2 = NativeModules.SplashScreenManager;
      SplashScreenManager2.hideSplashScreen();
    }
  }, []);
  let obj2 = appEntryKey(15563);
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
    const obj = { profile: StartupProfiler.Profiles.AppContainer, children: authStore2(ReanimatedScreenProvider, obj2) };
    const tmp = StartupProfilerDefault;
    obj2 = { children: authStore2(RootThemeContextProvider, obj3) };
    ReanimatedScreenProvider = _mod14122.ReanimatedScreenProvider;
    obj3 = { children: authStore2(ManaContextProvider, obj4) };
    RootThemeContextProvider = RootThemeContextProvider2.RootThemeContextProvider;
    obj4 = { value: memo1, children: authStore2(tmp2, obj5) };
    ManaContextProvider = ManaContext.ManaContextProvider;
    obj5 = { children: authStore2(Provider, obj6) };
    obj6 = { value: appEntryKey, children: authStore2(AppNavigationContainerOrEmpty, obj7) };
    obj7 = { appEntryKey, children: authStore2(WebViewContextProvider, obj8) };
    tmp2 = AccessibilityPreferencesContextProviderDefault;
    Provider = AppEntryKeyContext.AppEntryKeyContext.Provider;
    obj8 = { children: authStore2(Router, obj9) };
    WebViewContextProvider = WebViewContext.WebViewContextProvider;
    obj9 = { history: obj10.getHistory(), children: authStore2(GestureWrapper, obj11) };
    Router = _mod12299.Router;
    obj10 = RouteManagerDefault;
    obj11 = { children: authStore2(tmp3, obj12) };
    obj12 = { children: authStore2(PortalProvider, obj13) };
    obj13 = { children: closure_15(Component, obj14) };
    tmp3 = components_native_ErrorBoundaryDefault;
    PortalProvider = Portal.PortalProvider;
    obj14 = { children: items };
    Component = AnimatedKeyboardProviderDefault.Component;
    items = [authStore2(ThemedStatusBarDefault, {}), ];
    const obj15 = { children: items1 };
    items1 = [children, , , ];
    const SafeAreaProvider = SafeAreaProvider2.SafeAreaProvider;
    items1[1] = authStore2(SafeAreaProvider2.SafeAreaReporter, {});
    items1[2] = authStore2(DevToolsLazyDefault, {});
    items1[3] = authStore2(ScreenRecordingPipDefault, {});
    items[1] = closure_15(SafeAreaProvider, obj15);
    return authStore2(tmp, obj);
  }, items2);
});
const result2 = size.fileFinishedImporting("components_native/AppContainer.tsx");

export default result1;
