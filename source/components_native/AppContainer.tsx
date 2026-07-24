// Module ID: 13529
// Function ID: 104106
// Name: GestureWrapper
// Dependencies: [57, 31, 27, 5722, 1348, 1906, 653, 1355, 33, 4130, 689, 3991, 4663, 13530, 4340, 1207, 1185, 3982, 4478, 5580, 13532, 13533, 3981, 1198, 4066, 675, 3983, 13534, 5586, 1457, 1327, 13535, 477, 10883, 13536, 13544, 3906, 13546, 1453, 10636, 10834, 10840, 13547, 4001, 13548, 13550, 13552, 13553, 13554, 14763, 14771, 14772, 1184, 2]

// Module 13529 (GestureWrapper)
import _slicedToArray from "_slicedToArray";
import useRequestGatewaySocket from "useRequestGatewaySocket";
import { NativeModules } from "timestamp";
import { handleHistoryStoreNavigationChange as closure_7 } from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import { isStaticChannelRoute } from "set";
import jsxProd from "setLevels";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_3991 from "module_3991";
import enableScreens from "enableScreens";
import designConfig from "designConfig";
import importDefaultResult from "isNonEmptyString";

let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
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
  return callback2(importDefault(13530), { style, children: children.children });
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
    const rootNavigationRef = ref2(outer1_3[17]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        const obj3 = ref2(outer1_3[22]);
        const tmp4 = null != ref2(outer1_3[22]).coerceGuildsRoute(currentRoute);
        const obj4 = ref2(outer1_3[22]);
        if (tmp6) {
          outer1_2(outer1_3[25]).track(outer1_10.NAV_DRAWER_OPENED);
          const obj5 = outer1_2(outer1_3[25]);
        }
        ref.current = currentRoute;
        tmp6 = null != ref2(outer1_3[22]).coerceChannelRoute(ref.current) && tmp4;
        const tmp17 = outer1_4(outer1_2(outer1_3[21])(currentRoute, true), 2)[1];
        if (null != tmp17) {
          if (outer1_13(tmp17)) {
            if (tmp17 !== outer1_9.getChannelId()) {
              const coerceChannelRouteResult = ref2(outer1_3[22]).coerceChannelRoute(currentRoute);
              if (!tmp23) {
                ref2(outer1_3[23]).transitionTo(outer1_12.CHANNEL(tmp16, tmp17), { openChannel: true, navigationReplace: false });
                const obj7 = ref2(outer1_3[23]);
              }
              const obj6 = ref2(outer1_3[22]);
              tmp23 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
            }
          }
        }
        const tmp15 = outer1_4(outer1_2(outer1_3[21])(currentRoute, true), 2);
      }
    }
    outer1_7();
  }, []);
  const memo = React.useMemo(() => {
    const tmp = outer1_2(outer1_3[26])();
    let name;
    if (null != tmp) {
      const first = tmp.routes[0];
      if (null != first) {
        name = first.name;
      }
    }
    outer1_2(outer1_3[27]).log("Initial Screen: " + name);
    return tmp;
  }, []);
  const _require = React.useRef(true);
  const effect = React.useEffect(() => {
    if (ref2.current) {
      ref2.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const rootNavigationRef = callback(outer2_3[17]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const routes = rootNavigationRef.getState().routes;
            const found = routes.filter((name) => "modal" === name.name);
            rootNavigationRef.reset(outer2_2(outer2_3[26])(found));
          }
        }
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  let obj = _require(5586);
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
  const theme = require(5586) /* useNavigationTheme */.useNavigationTheme(tmp);
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
({ AnalyticEvents: closure_10, ComponentActions: closure_11, Routes: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
_createForOfIteratorHelperLoose.rootBackgroundColor = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = module_3991.configureReanimatedLogger({ level: require("module_3991").ReanimatedLogLevel.error, strict: false });
enableScreens = enableScreens.enableFreeze();
let obj1 = { level: require("module_3991").ReanimatedLogLevel.error, strict: false };
designConfig.setDesignConfig({ useTrackNavigatorScreenImpression: require("useTrackNavigatorScreenImpression").useTrackNavigatorScreenImpression });
let c17 = false;
let closure_18 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
let obj2 = { useTrackNavigatorScreenImpression: require("useTrackNavigatorScreenImpression").useTrackNavigatorScreenImpression };
const result1 = require("isNonEmptyString").profiledRootComponent(function AppContainer(children) {
  children = children.children;
  const appEntryKey = children.appEntryKey;
  const requestGatewaySocket = appEntryKey(13535).useRequestGatewaySocket("AppContainer:" + appEntryKey);
  const effect = React.useEffect(() => {
    if (!outer1_17) {
      const RNScreensTurboModule = children.RNScreensTurboModule;
      let obj = appEntryKey(outer1_3[11]);
      const fn = function e() {
        children.RNScreensTurboModule = RNScreensTurboModule;
      };
      obj = { RNScreensTurboModule };
      fn.__closure = obj;
      fn.__workletHash = 8891274578898;
      fn.__initData = outer1_18;
      obj.runOnUI(fn)();
      outer1_17 = true;
    }
  }, []);
  const effect1 = React.useEffect(() => {
    let SplashScreenManager = appEntryKey(outer1_3[32]).isIOS();
    if (SplashScreenManager) {
      SplashScreenManager = outer1_6.SplashScreenManager;
    }
    if (SplashScreenManager) {
      const SplashScreenManager2 = outer1_6.SplashScreenManager;
      SplashScreenManager2.hideSplashScreen();
    }
  }, []);
  let tmp4 = (function useManaContextProviderValue() {
    const riveRendererExperiment = appEntryKey(outer1_3[50]).useRiveRendererExperiment("AppContainer");
    let obj = appEntryKey(outer1_3[50]);
    const riveAppStatePlaybackExperiment = appEntryKey(outer1_3[51]).useRiveAppStatePlaybackExperiment("AppContainer");
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
          let obj = callback(outer3_3[52]);
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
    let obj = { profile: appEntryKey(outer1_3[33]).Profiles.AppContainer };
    obj = {};
    obj = {};
    const obj1 = { value: tmp4 };
    const obj2 = {};
    const tmp = tmp4(outer1_3[33]);
    const obj3 = { value: appEntryKey };
    const obj4 = { appEntryKey };
    const obj5 = {};
    const obj6 = {};
    let obj9 = tmp4(outer1_3[41]);
    obj6.history = obj9.getHistory();
    const obj7 = {};
    const obj8 = {};
    const tmp2 = tmp4(outer1_3[37]);
    obj9 = {};
    const obj10 = {};
    const obj11 = {};
    tmp4 = tmp4(outer1_3[45]);
    const items = [outer1_14(tmp4(outer1_3[46]), {}), ];
    const obj12 = {};
    const items1 = [children, outer1_14(appEntryKey(outer1_3[47]).SafeAreaReporter, {}), outer1_14(tmp4(outer1_3[48]), {}), outer1_14(tmp4(outer1_3[49]), {})];
    obj12.children = items1;
    items[1] = outer1_15(appEntryKey(outer1_3[47]).SafeAreaProvider, obj12);
    obj11.children = items;
    obj10.children = outer1_15(tmp4, obj11);
    obj9.children = outer1_14(tmp4(outer1_3[44]).Component, obj10);
    obj8.children = outer1_14(appEntryKey(outer1_3[43]).PortalProvider, obj9);
    obj7.children = outer1_14(tmp4(outer1_3[42]), obj8);
    obj6.children = outer1_14(outer1_19, obj7);
    obj5.children = outer1_14(appEntryKey(outer1_3[40]).Router, obj6);
    obj4.children = outer1_14(appEntryKey(outer1_3[39]).WebViewContextProvider, obj5);
    obj3.children = outer1_14(outer1_23, obj4);
    obj2.children = outer1_14(appEntryKey(outer1_3[38]).AppEntryKeyContext.Provider, obj3);
    obj1.children = outer1_14(tmp2, obj2);
    obj.children = outer1_14(appEntryKey(outer1_3[36]).ManaContextProvider, obj1);
    obj.children = outer1_14(appEntryKey(outer1_3[35]).RootThemeContextProvider, obj);
    obj.children = outer1_14(appEntryKey(outer1_3[34]).ReanimatedScreenProvider, obj);
    return outer1_14(tmp, obj);
  }, items);
});
const result2 = require("get ActivityIndicator").fileFinishedImporting("components_native/AppContainer.tsx");

export default result1;
