// Module ID: 13346
// Function ID: 101545
// Name: GestureWrapper
// Dependencies: []

// Module 13346 (GestureWrapper)
function GestureWrapper(children) {
  const tmp = callback4();
  const global = tmp;
  const isScreenLandscape = arg1(dependencyMap[10]).useIsScreenLandscape();
  const arg1 = isScreenLandscape;
  const items = [isScreenLandscape, tmp];
  const style = React.useMemo(() => {
    const items = [tmp.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = tmp.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return callback3(importDefault(dependencyMap[11]), { style, children: children.children });
}
function handleNavigationOnReady() {
  importDefault(dependencyMap[12]).flush();
  const ComponentDispatch = arg1(dependencyMap[13]).ComponentDispatch;
  ComponentDispatch.dispatch(constants.NAVIGATOR_READY);
  const routingInstrumentation = arg1(dependencyMap[14]).routingInstrumentation;
  const obj = importDefault(dependencyMap[12]);
  const result = routingInstrumentation.registerNavigationContainer(arg1(dependencyMap[15]).getRootNavigationRef());
  callback2();
}
function AppNavigationContainer(children) {
  let closure_0 = React.useRef(undefined);
  let callback = React.useCallback(() => {
    const rootNavigationRef = ref2(closure_3[15]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        const obj3 = ref2(closure_3[20]);
        const tmp4 = null != ref2(closure_3[20]).coerceGuildsRoute(currentRoute);
        const obj4 = ref2(closure_3[20]);
        if (tmp6) {
          callback(closure_3[23]).track(constants.NAV_DRAWER_OPENED);
          const obj5 = callback(closure_3[23]);
        }
        ref.current = currentRoute;
        const tmp6 = null != ref2(closure_3[20]).coerceChannelRoute(ref.current) && tmp4;
        const tmp17 = callback2(callback(closure_3[19])(currentRoute, true), 2)[1];
        if (null != tmp17) {
          if (tmp17 !== channelId.getChannelId()) {
            const coerceChannelRouteResult = ref2(closure_3[20]).coerceChannelRoute(currentRoute);
            if (!tmp21) {
              ref2(closure_3[21]).transitionTo(closure_11.CHANNEL(tmp16, tmp17), { accessible: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, lc: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 });
              const obj7 = ref2(closure_3[21]);
            }
            const obj6 = ref2(closure_3[20]);
            const tmp21 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
          }
        }
        const tmp15 = callback2(callback(closure_3[19])(currentRoute, true), 2);
      }
    }
    callback3();
  }, []);
  const memo = React.useMemo(() => {
    const tmp = callback(closure_3[24])();
    let name;
    if (null != tmp) {
      const first = tmp.routes[0];
      if (null != first) {
        name = first.name;
      }
    }
    callback(closure_3[25]).log("Initial Screen: " + name);
    return tmp;
  }, []);
  callback = React.useRef(true);
  const effect = React.useEffect(() => {
    if (ref2.current) {
      ref2.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const rootNavigationRef = callback(closure_3[15]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const routes = rootNavigationRef.getState().routes;
            const found = routes.filter((name) => "modal" === name.name);
            rootNavigationRef.reset(callback2(closure_3[24])(found));
          }
        }
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  let obj = callback(dependencyMap[26]);
  const navigationTheme = obj.useNavigationTheme(importDefault(dependencyMap[22])());
  obj = { theme: navigationTheme };
  const tmp = importDefault(dependencyMap[22])();
  obj.ref = callback(dependencyMap[15]).getRootNavigationRef();
  obj.onReady = handleNavigationOnReady;
  obj.onStateChange = callback;
  obj.initialState = memo;
  obj.children = children.children;
  return callback3(callback(dependencyMap[27]).NavigationContainer, obj);
}
function ShareNavigationContainer(children) {
  const tmp = importDefault(dependencyMap[22])();
  const theme = arg1(dependencyMap[26]).useNavigationTheme(tmp);
  return callback3(arg1(dependencyMap[27]).NavigationContainer, { theme, children: children.children });
}
function AppNavigationContainerOrEmpty(arg0) {
  let appEntryKey;
  let children;
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    let obj = { children };
    return callback3(AppNavigationContainer, obj);
  } else if ("share" === appEntryKey) {
    obj = { children };
    return callback3(ShareNavigationContainer, obj);
  } else {
    obj = arg1(dependencyMap[28]);
    return obj.assertNever(appEntryKey);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const NativeModules = arg1(dependencyMap[2]).NativeModules;
let closure_7 = arg1(dependencyMap[3]).handleHistoryStoreNavigationChange;
let closure_8 = importDefault(dependencyMap[4]);
({ AnalyticEvents: closure_9, ComponentActions: closure_10, Routes: closure_11 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { flex: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
obj.rootBackgroundColor = obj;
let closure_14 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const obj4 = arg1(dependencyMap[9]);
const result = obj4.configureReanimatedLogger({ level: arg1(dependencyMap[9]).ReanimatedLogLevel.error, strict: false });
const obj1 = { level: arg1(dependencyMap[9]).ReanimatedLogLevel.error, strict: false };
arg1(dependencyMap[16]).enableFreeze();
const obj6 = arg1(dependencyMap[16]);
const obj7 = arg1(dependencyMap[17]);
obj7.setDesignConfig({ useTrackNavigatorScreenImpression: arg1(dependencyMap[18]).useTrackNavigatorScreenImpression });
let closure_15 = false;
let closure_16 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
const obj2 = { useTrackNavigatorScreenImpression: arg1(dependencyMap[18]).useTrackNavigatorScreenImpression };
const result1 = importDefault(dependencyMap[50]).profiledRootComponent(function AppContainer(children) {
  children = children.children;
  const global = children;
  const appEntryKey = children.appEntryKey;
  const arg1 = appEntryKey;
  const requestGatewaySocket = arg1(dependencyMap[29]).useRequestGatewaySocket("AppContainer:" + appEntryKey);
  const effect = React.useEffect(() => {
    if (!closure_15) {
      const RNScreensTurboModule = children.RNScreensTurboModule;
      const children = RNScreensTurboModule;
      let obj = appEntryKey(closure_3[9]);
      const fn = function e() {
        RNScreensTurboModule.RNScreensTurboModule = RNScreensTurboModule;
      };
      obj = { RNScreensTurboModule };
      fn.__closure = obj;
      fn.__workletHash = 8891274578898;
      fn.__initData = closure_16;
      obj.runOnUI(fn)();
      closure_15 = true;
    }
  }, []);
  const effect1 = React.useEffect(() => {
    let SplashScreenManager = appEntryKey(closure_3[30]).isIOS();
    if (SplashScreenManager) {
      SplashScreenManager = closure_6.SplashScreenManager;
    }
    if (SplashScreenManager) {
      const SplashScreenManager2 = closure_6.SplashScreenManager;
      SplashScreenManager2.hideSplashScreen();
    }
  }, []);
  const tmp4 = function useManaContextProviderValue() {
    const riveRendererExperiment = appEntryKey(closure_3[48]).useRiveRendererExperiment("AppContainer");
    const children = riveRendererExperiment;
    const obj = appEntryKey(closure_3[48]);
    const riveAppStatePlaybackExperiment = appEntryKey(closure_3[49]).useRiveAppStatePlaybackExperiment("AppContainer");
    const appEntryKey = riveAppStatePlaybackExperiment;
    const items = [riveRendererExperiment, riveAppStatePlaybackExperiment];
    const memo = React.useMemo(() => {
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
    return React.useMemo(() => {
      let obj = {
        experiments: obj,
        captureException(arg0, tags) {
          let obj = callback(closure_3[50]);
          obj = { tags };
          return obj.captureException(arg0, obj);
        }
      };
      obj = { enabledExperiments: memo };
      return obj;
    }, items1);
  }();
  const importDefault = tmp4;
  const items = [appEntryKey, children, tmp4];
  return React.useMemo(() => {
    let obj = { profile: appEntryKey(closure_3[31]).Profiles.AppContainer };
    obj = {};
    obj = {};
    const obj1 = { value: tmp4 };
    const obj2 = {};
    const tmp = tmp4(closure_3[31]);
    const obj3 = { value: appEntryKey };
    const obj4 = { appEntryKey };
    const obj5 = {};
    const obj6 = {};
    let obj9 = tmp4(closure_3[39]);
    obj6.history = obj9.getHistory();
    const obj7 = {};
    const obj8 = {};
    const tmp2 = tmp4(closure_3[35]);
    obj9 = {};
    const obj10 = {};
    const obj11 = {};
    const tmp4 = tmp4(closure_3[43]);
    const items = [callback(tmp4(closure_3[44]), {}), ];
    const obj12 = {};
    const items1 = [children, callback(appEntryKey(closure_3[45]).SafeAreaReporter, {}), callback(tmp4(closure_3[46]), {}), callback(tmp4(closure_3[47]), {})];
    obj12.children = items1;
    items[1] = callback2(appEntryKey(closure_3[45]).SafeAreaProvider, obj12);
    obj11.children = items;
    obj10.children = callback2(tmp4, obj11);
    obj9.children = callback(tmp4(closure_3[42]).Component, obj10);
    obj8.children = callback(appEntryKey(closure_3[41]).PortalProvider, obj9);
    obj7.children = callback(tmp4(closure_3[40]), obj8);
    obj6.children = callback(closure_17, obj7);
    obj5.children = callback(appEntryKey(closure_3[38]).Router, obj6);
    obj4.children = callback(appEntryKey(closure_3[37]).WebViewContextProvider, obj5);
    obj3.children = callback(closure_21, obj4);
    obj2.children = callback(appEntryKey(closure_3[36]).AppEntryKeyContext.Provider, obj3);
    obj1.children = callback(tmp2, obj2);
    obj.children = callback(appEntryKey(closure_3[34]).ManaContextProvider, obj1);
    obj.children = callback(appEntryKey(closure_3[33]).RootThemeContextProvider, obj);
    obj.children = callback(appEntryKey(closure_3[32]).ReanimatedScreenProvider, obj);
    return callback(tmp, obj);
  }, items);
});
const importDefaultResult = importDefault(dependencyMap[50]);
const result2 = arg1(dependencyMap[51]).fileFinishedImporting("components_native/AppContainer.tsx");

export default result1;
