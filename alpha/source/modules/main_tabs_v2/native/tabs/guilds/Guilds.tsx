// Module ID: 18311
// Function ID: 18312
// Name: guilds/Guilds
// Dependencies: [32, 19, 6703, 11702, 1072, 21, 5325, 9, 5328, 5322, 5323, 572, 1108, 18312, 5318, 9823, 18313, 5207, 17311, 18314, 18690, 17390, 2]

// Module 18311 (guilds/Guilds)
import TTITrackerDefault from "TTITracker" /* 9 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5322 */;
import RootNavigationRef from "RootNavigationRef" /* 5323 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 5328 */;
import MainTabsConstants from "MainTabsConstants" /* 11702 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6703 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
const YouBarNavigatorScreens = MainTabsConstants.YouBarNavigatorScreens;
const ComponentActions = Constants.ComponentActions;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = false;
const memoResult = react.memo(function GuildsOnly() {
  let QuestDockExternalCoordinationContextProvider;
  let closure_2;
  let connected;
  let enabled;
  let first;
  let obj4;
  let tmp11Result;
  let tmp12;
  let tmp = enabled;
  let tmp2 = dependencyMap;
  let obj = enabled(18312);
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp4 = first;
  const tmp5 = first(5318)();
  let obj2 = enabled(9823);
  let isEligibleForQuests = obj2.getIsEligibleForQuests();
  const GuildsRenderExperiment = enabled(18313).GuildsRenderExperiment;
  enabled = GuildsRenderExperiment.useConfig({ location: "GuildsOnly" }).enabled;
  first = undefined;
  dependencyMap = undefined;
  const isChatBesideChannelList = first(5325)().isChatBesideChannelList;
  [first, dependencyMap] = react.useState(() => {
    const tmp = enabled;
    if (tmp) {
      TTITrackerDefault;
      let landOnHome = c10 || "other" !== tmp5;
      if (!landOnHome) {
        const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
        landOnHome = MobileHomeDrawerExperiment.getConfig({ location: "app-start" }).landOnHome;
      }
      return landOnHome;
    } else {
      return true;
    }
  });
  const items = [first];
  const effect = react.useEffect(() => {
    let closure_1;
    let timeout;
    function allowRender() {
      const tmp = c0;
      if (tmp) {
        allowRender(true);
      }
    }
    function allowRenderAfterReady() {
      const timerId = setTimeout(allowRender, 0);
    }
    function handleNavigationChange() {
      const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
      NavigationRouteUtils;
      const obj = RootNavigationRef;
      const rootNavigationRef = obj.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != coerceGuildsRoute(currentRoute)) {
        const tmp3 = c0;
        if (tmp3) {
          allowRender(true);
        }
      }
    }
    if (timeout) {
      c10 = true;
    } else {
      let c0 = true;
      let tmp = connected;
      if (connected.isConnected()) {
        const tmp2 = c0;
        if (tmp2) {
          let tmp3 = allowRender;
          allowRender(true);
        }
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(allowRender, 4000);
      let obj = first(allowRender[11]);
      const subscription = obj.subscribe("CONNECTION_OPEN", allowRenderAfterReady);
      let ComponentDispatch = enabled(allowRender[12]).ComponentDispatch;
      const subscription1 = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let obj2 = enabled(allowRender[10]);
      let rootNavigationRef = obj2.getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        c0 = false;
        clearTimeout(closure_1);
        const obj = DispatcherDefault;
        obj.unsubscribe("CONNECTION_OPEN", allowRenderAfterReady);
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const obj2 = RootNavigationRef;
        const rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
      };
    }
  }, items);
  if (!first) {
    first = isChatBesideChannelList;
  }
  if (!enabled) {
    const obj3 = { gradient: tmp5, children: tmp12(QuestDockExternalCoordinationContextProvider, obj4) };
    const ThemeContextProvider = tmp(5207).ThemeContextProvider;
    QuestDockExternalCoordinationContextProvider = tmp(17311).QuestDockExternalCoordinationContextProvider;
    const items1 = [closure_8(tmp4(18314), {}), closure_8(tmp4(18690), {}), ];
    tmp12 = closure_9;
    if (isEligibleForQuests) {
      isEligibleForQuests = tmp11(tmp4(17390), {});
    }
    obj4 = { children: items1 };
    items1[2] = isEligibleForQuests;
    tmp11Result = tmp11(ThemeContextProvider, obj3);
  } else {
    tmp11Result = null;
  }
  return tmp11Result;
}, () => true);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
