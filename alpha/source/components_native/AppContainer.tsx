// Module ID: 15800
// Function ID: 15801
// Name: AppContainer
// Dependencies: [32, 19, 17, 6653, 4762, 4816, 4946, 1071, 4769, 21, 4913, 575, 1653, 8150, 15801, 6431, 1107, 1242, 5090, 5868, 7187, 15803, 6654, 5089, 1098, 5122, 5927, 1255, 5091, 15804, 7192, 1501, 1254, 15805, 1706, 1378, 11978, 15806, 15814, 5030, 15816, 1497, 10814, 13739, 13745, 15817, 5105, 15818, 15820, 15821, 15822, 17441, 1241, 2]

// Module 15800 (AppContainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1098 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import SentryInitUtils from "SentryInitUtils" /* 1242 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1497 */;
import Link from "Link" /* 1501 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import ManaContext from "ManaContext" /* 5030 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 5091 */;
import Portal from "Portal" /* 5105 */;
import useThemeDefault from "useTheme" /* 5122 */;
import enableScreens from "enableScreens" /* 5868 */;
import BackPressTracking from "BackPressTracking" /* 5927 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 6431 */;
import NavigationHistoryStore from "NavigationHistoryStore" /* 6653 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 6654 */;
import useNavigationTheme from "useNavigationTheme" /* 7192 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8150 */;
import WebViewContext from "WebViewContext" /* 10814 */;
import StartupProfiler from "StartupProfiler" /* 11978 */;
import _mod13739 from "module_13739" /* 13739 */;
import RouteManagerDefault from "RouteManager" /* 13745 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 15801 */;
import useTrackNavigatorScreenImpression from "useTrackNavigatorScreenImpression" /* 15803 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 15804 */;
import _mod15806 from "module_15806" /* 15806 */;
import RootThemeContextProvider2 from "RootThemeContextProvider" /* 15814 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 15816 */;
import components_native_ErrorBoundaryDefault from "components_native/ErrorBoundary" /* 15817 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 15818 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 15820 */;
import SafeAreaProvider2 from "SafeAreaProvider" /* 15821 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 15822 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import module_1653 from "module_1653" /* 1653 */;
import config from "config" /* 7187 */;
import SentryUtils from "SentryUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const StartupProfilerDefault = StartupProfiler;
let _require;

let closure_12;
let closure_15;
let closure_16;
let map1;
let obj2;
let unpackModuleId;
function GestureWrapper(children) {
  children = children.children;
  const tmp = closure_17();
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
  return closure_15(DiscordGestureHandlerRootViewDefault, { style, children });
}
function handleNavigationOnReady() {
  const obj = ModalDispatchQueueDefault;
  obj.flush();
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.NAVIGATOR_READY);
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
    let tmp13;
    let tmp14;
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
          obj5.track(unpackModuleId.NAV_DRAWER_OPENED);
        }
        tmp5.current = currentRoute;
        [tmp13, tmp14] = getChannelDetailsFromRouteDefault(currentRoute, true);
        _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2);
        if (null != tmp14) {
          if (isStaticChannelRoute(tmp14)) {
            let subRouteId;
            const channelId = SelectedChannelStore.getChannelId();
            const tmpResult5 = NavigationRouteUtils;
            const coerceChannelRouteResult = tmpResult5.coerceChannelRoute(currentRoute);
            if (coerceChannelRouteResult != null) {
              subRouteId = coerceChannelRouteResult.params.subRouteId;
            }
            let tmp19 = tmp14 !== channelId;
            if (!tmp19) {
              tmp19 = null != subRouteId && tmp13 !== SelectedGuildStore.getGuildId();
              const tmp20 = null != subRouteId && tmp13 !== SelectedGuildStore.getGuildId();
            }
            if (tmp19) {
              const tmp22 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
              if (!tmp22) {
                const tmpResult6 = router_utils;
                tmpResult6.transitionTo(map1.CHANNEL(tmp13, tmp14, subRouteId), { openChannel: true, navigationReplace: false });
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
        const obj = ref2(closure_1_3[18]);
        const rootNavigationRef = obj.getRootNavigationRef();
        const tmp = ref2;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const tmpResult = tmp(closure_1_3[23]);
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
  const obj2 = require("useNavigationTheme");
  const navigationTheme = obj2.useNavigationTheme(tmp);
  const obj3 = { theme: navigationTheme, ref: obj4.getRootNavigationRef(), onReady: handleNavigationOnReady, onStateChange: callback, initialState: memo, navigationInChildEnabled: true, children };
  const NavigationContainer = require("Link").NavigationContainer;
  obj4 = require("RootNavigationRef");
  return closure_15(NavigationContainer, obj3);
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
  return closure_15(Link.NavigationContainer, { ref, theme, navigationInChildEnabled: true, children });
}
function AppNavigationContainerOrEmpty(arg0) {
  let appEntryKey;
  let children;
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    const obj2 = { children };
    return closure_15(AppNavigationContainer, obj2);
  } else if ("share" === appEntryKey) {
    const obj3 = { children };
    return closure_15(ShareNavigationContainer, obj3);
  } else {
    const obj = GlobalUtils;
    return obj.assertNever(appEntryKey);
  }
}
const NativeModules = react_native.NativeModules;
let closure_7 = NavigationHistoryStore.handleHistoryStoreNavigationChange;
({ AnalyticEvents: unpackModuleId, ComponentActions: closure_12, Routes: map1 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let obj = { flex: { flex: 1 }, rootBackgroundColor: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let closure_17 = createStyles.createStyles(obj);
let obj3 = { level: module_1653.ReanimatedLogLevel.error, strict: false };
let result = module_1653.configureReanimatedLogger(obj3);
try {
  const _module4 = enableScreens;
  _module4.enableFreeze();
} catch (err) {
}
let obj4 = { useTrackNavigatorScreenImpression: useTrackNavigatorScreenImpression.useTrackNavigatorScreenImpression };
config.setDesignConfig(obj4);
let c23 = false;
let closure_24 = { code: "(function AppContainerTsx1(){let[RNScreensTurboModule]=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;})" };
const result1 = SentryUtils.profiledRootComponent(function AppContainer(children) {
  children = children.children;
  const appEntryKey = children.appEntryKey;
  let obj = appEntryKey(15805);
  const requestGatewaySocket = obj.useRequestGatewaySocket("AppContainer:" + appEntryKey);
  const effect = react.useEffect(() => {
    let tmp7;
    let tmp8;
    const tmp = c23;
    if (!tmp) {
      RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
      const items = [closure_24, RNScreensTurboModule];
      RNScreensTurboModule = undefined;
      [tmp7, tmp8] = items;
      const obj = appEntryKey(closure_3[34]);
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
      c23 = true;
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
  let obj2 = appEntryKey(17441);
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
        const obj = closure_1_2(closure_1_3[52]);
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
    const obj = { profile: StartupProfiler.Profiles.AppContainer, children: closure_15(ReanimatedScreenProvider, obj2) };
    const tmp = StartupProfilerDefault;
    obj2 = { children: closure_15(RootThemeContextProvider, obj3) };
    ReanimatedScreenProvider = _mod15806.ReanimatedScreenProvider;
    obj3 = { children: closure_15(ManaContextProvider, obj4) };
    RootThemeContextProvider = RootThemeContextProvider2.RootThemeContextProvider;
    obj4 = { value: memo1, children: closure_15(tmp2, obj5) };
    ManaContextProvider = ManaContext.ManaContextProvider;
    obj5 = { children: closure_15(Provider, obj6) };
    obj6 = { value: appEntryKey, children: closure_15(AppNavigationContainerOrEmpty, obj7) };
    obj7 = { appEntryKey, children: closure_15(WebViewContextProvider, obj8) };
    tmp2 = AccessibilityPreferencesContextProviderDefault;
    Provider = AppEntryKeyContext.AppEntryKeyContext.Provider;
    obj8 = { children: closure_15(Router, obj9) };
    WebViewContextProvider = WebViewContext.WebViewContextProvider;
    obj9 = { history: obj10.getHistory(), children: closure_15(GestureWrapper, obj11) };
    Router = _mod13739.Router;
    obj10 = RouteManagerDefault;
    obj11 = { children: closure_15(tmp3, obj12) };
    obj12 = { children: closure_15(PortalProvider, obj13) };
    obj13 = { children: authStore3(Component, obj14) };
    tmp3 = components_native_ErrorBoundaryDefault;
    PortalProvider = Portal.PortalProvider;
    obj14 = { children: items };
    Component = AnimatedKeyboardProviderDefault.Component;
    items = [closure_15(ThemedStatusBarDefault, {}), ];
    const obj15 = { children: items1 };
    items1 = [children, , ];
    const SafeAreaProvider = SafeAreaProvider2.SafeAreaProvider;
    items1[1] = closure_15(SafeAreaProvider2.SafeAreaReporter, {});
    items1[2] = closure_15(DevToolsLazyDefault, {});
    items[1] = authStore3(SafeAreaProvider, obj15);
    return closure_15(tmp, obj);
  }, items2);
});
const result2 = size.fileFinishedImporting("components_native/AppContainer.tsx");

export default result1;
