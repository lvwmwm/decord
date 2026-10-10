// Module ID: 16685
// Function ID: 16686
// Name: useShouldRenderChannelList
// Dependencies: [32, 19, 7197, 5757, 1085, 558, 576, 4976, 4977, 1121, 2]

// Module 16685 (useShouldRenderChannelList)
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CacheStore from "CacheStore" /* 7197 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5757 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
let c7 = false;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldRenderChannelList() {
  let closure_1;
  let first;
  let tmp4;
  let tmp5;
  let obj = first(576);
  const cResult = obj.c(3);
  [first, dependencyMap] = react.useState(c7);
  const obj2 = react;
  if (cResult[0] !== first) {
    const fn = function u() {
      let allowRender;
      const tmp = allowRender;
      if (!tmp) {
        allowRender = function allowRender() {
          c7 = true;
          handleGatewayChange(true);
        };
        function handleGatewayChange() {
          if (GatewayConnectionStore.isConnected()) {
            if (typeof allowRender === "function") {
              c7 = true;
              handleGatewayChange(true);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        function handleCacheChange() {
          if ("cache-loaded" === CacheStore.getLazyCacheStatus()) {
            if (typeof allowRender === "function") {
              c7 = true;
              handleGatewayChange(true);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
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
              c7 = true;
              handleGatewayChange(true);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        let result = GatewayConnectionStore.addReactChangeListener(handleGatewayChange);
        let result1 = CacheStore.addReactChangeListener(handleCacheChange);
        let ComponentDispatch = first(handleGatewayChange[9]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        let obj = first(handleGatewayChange[8]);
        let rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.addListener("state", handleNavigationChange);
        }
        return () => {
          const result = GatewayConnectionStore.removeReactChangeListener(handleGatewayChange);
          const result1 = CacheStore.addReactChangeListener(handleCacheChange);
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          const obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            rootNavigationRef.removeListener("state", handleNavigationChange);
          }
        };
      }
    };
    const items = [first];
    cResult[0] = first;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  return first;
}) : (function useShouldRenderChannelList() {
  let closure_1;
  let first;
  [first, closure_1] = react.useState(c7);
  const items = [first];
  const effect = react.useEffect(() => {
    function allowRender() {
      c7 = true;
      handleGatewayChange(true);
    }
    function handleGatewayChange() {
      if (GatewayConnectionStore.isConnected()) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    function handleCacheChange() {
      if ("cache-loaded" === CacheStore.getLazyCacheStatus()) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    function handleNavigationChange() {
      const coerceGuildsRoute = first(handleGatewayChange[7]).coerceGuildsRoute;
      first(handleGatewayChange[7]);
      const obj = first(handleGatewayChange[8]);
      const rootNavigationRef = obj.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != coerceGuildsRoute(currentRoute)) {
        c7 = true;
        handleGatewayChange(true);
      }
    }
    const tmp = allowRender;
    if (!tmp) {
      let result = GatewayConnectionStore.addReactChangeListener(handleGatewayChange);
      let result1 = CacheStore.addReactChangeListener(handleCacheChange);
      let ComponentDispatch = first(handleGatewayChange[9]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let obj = first(handleGatewayChange[8]);
      let rootNavigationRef = obj.getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        const result = GatewayConnectionStore.removeReactChangeListener(handleGatewayChange);
        const result1 = CacheStore.addReactChangeListener(handleCacheChange);
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const obj = RootNavigationRef;
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
      };
    }
  }, items);
  return first;
});
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = tmp2;
