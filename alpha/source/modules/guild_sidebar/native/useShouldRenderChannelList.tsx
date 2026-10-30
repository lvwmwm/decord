// Module ID: 18267
// Function ID: 18268
// Name: useShouldRenderChannelList
// Dependencies: [32, 19, 7648, 6562, 1072, 5193, 5194, 1109, 2]
// Exports: useShouldRenderChannelList

// Module 18267 (useShouldRenderChannelList)
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CacheStore from "CacheStore" /* 7648 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6562 */;
import size from "module_2" /* 2 */;

const ComponentActions = Constants.ComponentActions;
let c7 = false;
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export function useShouldRenderChannelList() {
  let closure_1;
  let first;
  [first, closure_1] = react.useState(c7);
  const items = [first];
  const effect = react.useEffect(() => {
    function allowRender() {
      c7 = true;
      checkGatewayConnection(true);
    }
    function checkGatewayConnection() {
      if (GatewayConnectionStore.isConnected()) {
        c7 = true;
        checkGatewayConnection(true);
      }
    }
    function checkCacheLoadStatus() {
      if ("cache-loaded" === CacheStore.getLazyCacheStatus()) {
        c7 = true;
        checkGatewayConnection(true);
      }
    }
    function checkNavigationState() {
      const coerceGuildsRoute = first(checkGatewayConnection[5]).coerceGuildsRoute;
      first(checkGatewayConnection[5]);
      const obj = first(checkGatewayConnection[6]);
      const rootNavigationRef = obj.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != coerceGuildsRoute(currentRoute)) {
        c7 = true;
        checkGatewayConnection(true);
      }
    }
    const tmp = allowRender;
    if (!tmp) {
      let obj = GatewayConnectionStore;
      let result = GatewayConnectionStore.addReactChangeListener(checkGatewayConnection);
      let result1 = CacheStore.addReactChangeListener(checkCacheLoadStatus);
      let ComponentDispatch = first(checkGatewayConnection[7]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      const obj3 = first(checkGatewayConnection[6]);
      let rootNavigationRef = obj3.getRootNavigationRef();
      const obj2 = CacheStore;
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", checkNavigationState);
      }
      if (obj.isConnected()) {
        c7 = true;
        checkGatewayConnection(true);
      }
      if ("cache-loaded" === obj2.getLazyCacheStatus()) {
        c7 = true;
        checkGatewayConnection(true);
      }
      return () => {
        const result = GatewayConnectionStore.removeReactChangeListener(checkGatewayConnection);
        const result1 = CacheStore.removeReactChangeListener(checkCacheLoadStatus);
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const obj = RootNavigationRef;
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", checkNavigationState);
        }
      };
    }
  }, items);
  return first;
}
