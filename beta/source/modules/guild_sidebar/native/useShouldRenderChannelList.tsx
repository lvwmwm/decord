// Module ID: 15895
// Function ID: 15896
// Name: useShouldRenderChannelList
// Dependencies: [32, 19, 6896, 5589, 1074, 4692, 4693, 1110, 2]
// Exports: useShouldRenderChannelList

// Module 15895 (useShouldRenderChannelList)
import Constants from "Constants" /* 1074 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CacheStore from "CacheStore" /* 6896 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
let c7 = false;
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = function useShouldRenderChannelList() {
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
      const coerceGuildsRoute = first(handleGatewayChange[5]).coerceGuildsRoute;
      first(handleGatewayChange[5]);
      const obj = first(handleGatewayChange[6]);
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
      let ComponentDispatch = first(handleGatewayChange[7]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let obj = first(handleGatewayChange[6]);
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
};
