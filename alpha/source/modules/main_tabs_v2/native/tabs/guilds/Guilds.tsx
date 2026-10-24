// Module ID: 17435
// Function ID: 17436
// Name: guilds/Guilds
// Dependencies: [32, 19, 6496, 11180, 1087, 21, 558, 576, 5153, 9, 5156, 5150, 5151, 584, 1123, 17436, 5146, 9565, 17437, 16440, 17438, 17803, 16519, 5037, 2]

// Module 17435 (guilds/Guilds)
import TTITrackerDefault from "TTITracker" /* 9 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import native from "native" /* 5037 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5146 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5150 */;
import RootNavigationRef from "RootNavigationRef" /* 5151 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 5156 */;
import QuestsEligibility from "QuestsEligibility" /* 9565 */;
import MainTabsConstants from "MainTabsConstants" /* 11180 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 17436 */;
import GuildsRenderExperiment2 from "GuildsRenderExperiment" /* 17437 */;
import MainChannelsDefault from "MainChannels" /* 17438 */;
import YouBarDefault from "YouBar" /* 17803 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6496 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
const YouBarNavigatorScreens = MainTabsConstants.YouBarNavigatorScreens;
const ComponentActions = Constants.ComponentActions;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = false;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldRender(arg0) {
  let closure_0;
  let closure_2;
  let connected;
  let first;
  let tmp2;
  let tmp5;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(5);
  const isChatBesideChannelList = first(5153)().isChatBesideChannelList;
  if (cResult[0] !== arg0) {
    const fn = function u() {
      const tmp = closure_0;
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
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  let obj2 = react;
  [first, dependencyMap] = react.useState(tmp2);
  if (cResult[2] !== first) {
    const fn2 = function f() {
      let allowRender;
      let closure_4;
      if (allowRender) {
        c10 = true;
      } else {
        let c0 = true;
        allowRender = function allowRender() {
          const tmp = c0;
          if (tmp) {
            allowRenderAfterReady(true);
          }
        };
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
            if (typeof allowRender === "function") {
              const tmp4 = c0;
              if (tmp4) {
                allowRenderAfterReady(true);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        let tmp = connected;
        if (connected.isConnected()) {
          const tmp2 = c0;
          if (tmp2) {
            let tmp4 = allowRenderAfterReady(true);
          }
        }
        const _setTimeout = setTimeout;
        const timeout = setTimeout(allowRender, 4000);
        let obj = first(allowRenderAfterReady[13]);
        const subscription = obj.subscribe("CONNECTION_OPEN", allowRenderAfterReady);
        let ComponentDispatch = closure_0(allowRenderAfterReady[14]).ComponentDispatch;
        const subscription1 = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        let obj2 = closure_0(allowRenderAfterReady[12]);
        let rootNavigationRef = obj2.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.addListener("state", handleNavigationChange);
        }
        return () => {
          c0 = false;
          clearTimeout(closure_4);
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
    };
    const items = [first];
    cResult[2] = first;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp6 = items;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const effect = obj2.useEffect(tmp5, tmp6);
  if (!first) {
    first = isChatBesideChannelList;
  }
  return first;
}) : (function useShouldRender(arg0) {
  let closure_2;
  let connected;
  let first;
  let closure_0 = arg0;
  const isChatBesideChannelList = first(5153)().isChatBesideChannelList;
  [first, dependencyMap] = react.useState(() => {
    const tmp = closure_0;
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
      let obj = first(allowRender[13]);
      const subscription = obj.subscribe("CONNECTION_OPEN", allowRenderAfterReady);
      let ComponentDispatch = closure_0(allowRender[14]).ComponentDispatch;
      const subscription1 = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let obj2 = closure_0(allowRender[12]);
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
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsOnly() {
  let first;
  let tmp11;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(5);
  const obj2 = TabsPerformanceTracker;
  const trackTabPerformance = obj2.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp6 = useColorThemeBackgroundDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = QuestsEligibility;
    const isEligibleForQuests = tmpResult.getIsEligibleForQuests();
    cResult[0] = isEligibleForQuests;
    first = isEligibleForQuests;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "GuildsOnly" };
    cResult[1] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[1];
  }
  const GuildsRenderExperiment = tmp(17437).GuildsRenderExperiment;
  if (!GuildsRenderExperiment.useConfig(tmp9).enabled) {
    let tmp12;
    let tmp16;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const QuestDockExternalCoordinationContextProvider = tmp(16440).QuestDockExternalCoordinationContextProvider;
      const items = [metroImportAll(MainChannelsDefault, {}), metroImportAll(YouBarDefault, {}), ];
      const tmp13 = React4;
      const tmp14 = metroImportAll;
      if (first) {
        first = tmp14(tmp5(16519), {});
      }
      const obj4 = { children: items };
      items[2] = first;
      const tmp13Result = tmp13(QuestDockExternalCoordinationContextProvider, obj4);
      cResult[2] = tmp13Result;
      tmp12 = tmp13Result;
    } else {
      tmp12 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj5 = { gradient: tmp6, children: tmp12 };
      const tmp18 = metroImportAll(native.ThemeContextProvider, obj5);
      cResult[3] = tmp6;
      cResult[4] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[4];
    }
    tmp11 = tmp16;
  } else {
    tmp11 = null;
  }
  return tmp11;
}) : (function GuildsOnly() {
  let QuestDockExternalCoordinationContextProvider;
  let obj4;
  let tmp10;
  let tmp9Result;
  const obj = TabsPerformanceTracker;
  const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp5 = useColorThemeBackgroundDefault();
  const obj2 = QuestsEligibility;
  let isEligibleForQuests = obj2.getIsEligibleForQuests();
  const GuildsRenderExperiment = GuildsRenderExperiment2.GuildsRenderExperiment;
  if (!GuildsRenderExperiment.useConfig({ location: "GuildsOnly" }).enabled) {
    const obj3 = { gradient: tmp5, children: tmp10(QuestDockExternalCoordinationContextProvider, obj4) };
    const ThemeContextProvider = tmp(5037).ThemeContextProvider;
    QuestDockExternalCoordinationContextProvider = tmp(16440).QuestDockExternalCoordinationContextProvider;
    const items = [metroImportAll(MainChannelsDefault, {}), metroImportAll(YouBarDefault, {}), ];
    tmp10 = React4;
    if (isEligibleForQuests) {
      isEligibleForQuests = tmp9(tmp4(16519), {});
    }
    obj4 = { children: items };
    items[2] = isEligibleForQuests;
    tmp9Result = tmp9(ThemeContextProvider, obj3);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
}), () => true);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default memoResult;
