// Module ID: 13476
// Function ID: 103779
// Name: GestureWrapper
// Dependencies: [57, 31, 27, 5722, 1906, 653, 33, 4130, 689, 3991, 4663, 13477, 4340, 1207, 1185, 3982, 4478, 5582, 13479, 13480, 3981, 1198, 4066, 675, 3983, 13481, 5588, 1457, 1327, 13482, 477, 10856, 13483, 13491, 3906, 13493, 1453, 10607, 10805, 10811, 13494, 4001, 13495, 13497, 13499, 13500, 13501, 14716, 14724, 14725, 1184, 2]

// Module 13476 (GestureWrapper)
import _slicedToArray from "_slicedToArray";
import setLevels from "setLevels";
import { NativeModules } from "Link";
import { handleHistoryStoreNavigationChange as closure_7 } from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "RootThemeContextProvider";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_3991 from "module_3991";
import enableScreens from "enableScreens";
import designConfig from "designConfig";
import importDefaultResult from "isNonEmptyString";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_9;
const require = arg1;
function GestureWrapper(children) {
  const tmp = _createForOfIteratorHelperLoose();
  const global = tmp;
  isScreenLandscape = isScreenLandscape(4663).useIsScreenLandscape();
  let items = [isScreenLandscape, tmp];
  const style = React.useMemo(() => {
    const items = [tmp.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = tmp.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return callback2(importDefault(13477), { style, children: children.children });
}
function handleNavigationOnReady() {
  importDefault(4340).flush();
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(constants.NAVIGATOR_READY);
  const routingInstrumentation = require(1185) /* _maybeBackfillMissingBreadcrumbsFromTelemetryRing */.routingInstrumentation;
  const obj = importDefault(4340);
  const result = routingInstrumentation.registerNavigationContainer(require(3982) /* getRootNavigationRef */.getRootNavigationRef());
  callback();
}
function AppNavigationContainer(children) {
  let closure_0 = React.useRef(undefined);
  const callback = React.useCallback(() => {
    const rootNavigationRef = ref2(outer1_3[15]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        const obj3 = ref2(outer1_3[20]);
        const tmp4 = null != ref2(outer1_3[20]).coerceGuildsRoute(currentRoute);
        const obj4 = ref2(outer1_3[20]);
        if (tmp6) {
          outer1_2(outer1_3[23]).track(outer1_9.NAV_DRAWER_OPENED);
          const obj5 = outer1_2(outer1_3[23]);
        }
        ref.current = currentRoute;
        tmp6 = null != ref2(outer1_3[20]).coerceChannelRoute(ref.current) && tmp4;
        const tmp17 = outer1_4(outer1_2(outer1_3[19])(currentRoute, true), 2)[1];
        if (null != tmp17) {
          if (tmp17 !== outer1_8.getChannelId()) {
            const coerceChannelRouteResult = ref2(outer1_3[20]).coerceChannelRoute(currentRoute);
            if (!tmp21) {
              ref2(outer1_3[21]).transitionTo(outer1_11.CHANNEL(tmp16, tmp17), { openChannel: true, navigationReplace: false });
              const obj7 = ref2(outer1_3[21]);
            }
            const obj6 = ref2(outer1_3[20]);
            tmp21 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
          }
        }
        const tmp15 = outer1_4(outer1_2(outer1_3[19])(currentRoute, true), 2);
      }
    }
    outer1_7();
  }, []);
  const memo = React.useMemo(() => {
    const tmp = outer1_2(outer1_3[24])();
    let name;
    if (null != tmp) {
      const first = tmp.routes[0];
      if (null != first) {
        name = first.name;
      }
    }
    outer1_2(outer1_3[25]).log("Initial Screen: " + name);
    return tmp;
  }, []);
  const _require = React.useRef(true);
  const effect = React.useEffect(() => {
    if (ref2.current) {
      ref2.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const rootNavigationRef = callback(outer2_3[15]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const routes = rootNavigationRef.getState().routes;
            const found = routes.filter((name) => "modal" === name.name);
            rootNavigationRef.reset(outer2_2(outer2_3[24])(found));
          }
        }
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  let obj = _require(5588);
  const navigationTheme = obj.useNavigationTheme(importDefault(4066)());
  obj = { theme: navigationTheme };
  let tmp = importDefault(4066)();
  obj.ref = _require(3982).getRootNavigationRef();
  obj.onReady = handleNavigationOnReady;
  obj.onStateChange = callback;
  obj.initialState = memo;
  obj.children = children.children;
  return callback2(_require(1457).NavigationContainer, obj);
}
function ShareNavigationContainer(children) {
  const tmp = importDefault(4066)();
  const theme = require(5588) /* useNavigationTheme */.useNavigationTheme(tmp);
  return callback2(require(1457) /* Link */.NavigationContainer, { theme, children: children.children });
}
function AppNavigationContainerOrEmpty(arg0) {
  let appEntryKey;
  let children;
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    let obj = { children };
    return callback2(AppNavigationContainer, obj);
  } else if ("share" === appEntryKey) {
    obj = { children };
    return callback2(ShareNavigationContainer, obj);
  } else {
    obj = require(1327) /* isDiscordFrontendDevelopment */;
    return obj.assertNever(appEntryKey);
  }
}
({ AnalyticEvents: closure_9, ComponentActions: closure_10, Routes: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
_createForOfIteratorHelperLoose.rootBackgroundColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = module_3991.configureReanimatedLogger({ level: require("module_3991").ReanimatedLogLevel.error, strict: false });
enableScreens = enableScreens.enableFreeze();
let obj1 = { level: require("module_3991").ReanimatedLogLevel.error, strict: false };
designConfig.setDesignConfig({ useTrackNavigatorScreenImpression: require("useTrackNavigatorScreenImpression").useTrackNavigatorScreenImpression });
let c15 = false;
let closure_16 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
let obj2 = { useTrackNavigatorScreenImpression: require("useTrackNavigatorScreenImpression").useTrackNavigatorScreenImpression };
const result1 = require("isNonEmptyString").profiledRootComponent(function AppContainer(children) {
  children = children.children;
  const appEntryKey = children.appEntryKey;
  const requestGatewaySocket = appEntryKey(13482).useRequestGatewaySocket("AppContainer:" + appEntryKey);
  const effect = React.useEffect(() => {
    if (!outer1_15) {
      const RNScreensTurboModule = children.RNScreensTurboModule;
      let obj = appEntryKey(outer1_3[9]);
      const fn = function e() {
        children.RNScreensTurboModule = RNScreensTurboModule;
      };
      obj = { RNScreensTurboModule };
      fn.__closure = obj;
      fn.__workletHash = 8891274578898;
      fn.__initData = outer1_16;
      obj.runOnUI(fn)();
      outer1_15 = true;
    }
  }, []);
  const effect1 = React.useEffect(() => {
    let SplashScreenManager = appEntryKey(outer1_3[30]).isIOS();
    if (SplashScreenManager) {
      SplashScreenManager = outer1_6.SplashScreenManager;
    }
    if (SplashScreenManager) {
      const SplashScreenManager2 = outer1_6.SplashScreenManager;
      SplashScreenManager2.hideSplashScreen();
    }
  }, []);
  let tmp4 = (function useManaContextProviderValue() {
    const riveRendererExperiment = appEntryKey(outer1_3[48]).useRiveRendererExperiment("AppContainer");
    let obj = appEntryKey(outer1_3[48]);
    const riveAppStatePlaybackExperiment = appEntryKey(outer1_3[49]).useRiveAppStatePlaybackExperiment("AppContainer");
    let items = [riveRendererExperiment, riveAppStatePlaybackExperiment];
    const memo = outer1_5.useMemo(() => {
      const items = [];
      if (riveRendererExperiment) {
        items.push("rive-mobile-renderer");
      }
      if (riveAppStatePlaybackExperiment) {
        items.push("rive-app-state-playback");
      }
      return items;
    }, items);
    const items1 = [memo];
    return outer1_5.useMemo(() => {
      obj = {
        experiments: obj,
        captureException(arg0, tags) {
          let obj = callback(outer3_3[50]);
          obj = { tags };
          return obj.captureException(arg0, obj);
        }
      };
      obj = { enabledExperiments: memo };
      return obj;
    }, items1);
  })();
  const importDefault = tmp4;
  let items = [appEntryKey, children, tmp4];
  return React.useMemo(() => {
    let obj = { profile: appEntryKey(outer1_3[31]).Profiles.AppContainer };
    obj = {};
    obj = {};
    const obj1 = { value: tmp4 };
    const obj2 = {};
    const tmp = tmp4(outer1_3[31]);
    const obj3 = { value: appEntryKey };
    const obj4 = { appEntryKey };
    const obj5 = {};
    const obj6 = {};
    let obj9 = tmp4(outer1_3[39]);
    obj6.history = obj9.getHistory();
    const obj7 = {};
    const obj8 = {};
    const tmp2 = tmp4(outer1_3[35]);
    obj9 = {};
    const obj10 = {};
    const obj11 = {};
    tmp4 = tmp4(outer1_3[43]);
    const items = [outer1_12(tmp4(outer1_3[44]), {}), ];
    const obj12 = {};
    const items1 = [children, outer1_12(appEntryKey(outer1_3[45]).SafeAreaReporter, {}), outer1_12(tmp4(outer1_3[46]), {}), outer1_12(tmp4(outer1_3[47]), {})];
    obj12.children = items1;
    items[1] = outer1_13(appEntryKey(outer1_3[45]).SafeAreaProvider, obj12);
    obj11.children = items;
    obj10.children = outer1_13(tmp4, obj11);
    obj9.children = outer1_12(tmp4(outer1_3[42]).Component, obj10);
    obj8.children = outer1_12(appEntryKey(outer1_3[41]).PortalProvider, obj9);
    obj7.children = outer1_12(tmp4(outer1_3[40]), obj8);
    obj6.children = outer1_12(outer1_17, obj7);
    obj5.children = outer1_12(appEntryKey(outer1_3[38]).Router, obj6);
    obj4.children = outer1_12(appEntryKey(outer1_3[37]).WebViewContextProvider, obj5);
    obj3.children = outer1_12(outer1_21, obj4);
    obj2.children = outer1_12(appEntryKey(outer1_3[36]).AppEntryKeyContext.Provider, obj3);
    obj1.children = outer1_12(tmp2, obj2);
    obj.children = outer1_12(appEntryKey(outer1_3[34]).ManaContextProvider, obj1);
    obj.children = outer1_12(appEntryKey(outer1_3[33]).RootThemeContextProvider, obj);
    obj.children = outer1_12(appEntryKey(outer1_3[32]).ReanimatedScreenProvider, obj);
    return outer1_12(tmp, obj);
  }, items);
});
const result2 = require("get ActivityIndicator").fileFinishedImporting("components_native/AppContainer.tsx");

export default result1;
