// Module ID: 17691
// Function ID: 17692
// Name: useShouldRenderChannelList
// Dependencies: [32, 19, 7585, 6496, 1087, 558, 576, 5150, 5151, 1123, 2]

// Module 17691 (useShouldRenderChannelList)
import Constants from "Constants" /* 1087 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5150 */;
import RootNavigationRef from "RootNavigationRef" /* 5151 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CacheStore from "CacheStore" /* 7585 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6496 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let addListenerResult, flag, flag2, str, str2, tmp10, tmp11, tmp12, tmp13, tmp6, tmp8;

const ComponentActions = Constants.ComponentActions;
let c7 = false;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldRenderChannelList() {
  let closure_1;
  let first;
  let tmp4;
  let tmp5;
  let obj = first(576);
  const cResult = obj.c(3);
  let obj2 = react;
  [first, dependencyMap] = react.useState(c7);
  if (cResult[0] !== first) {
    class R {
      constructor() {
        tmp = allowRender;
        if (tmp) {
          return;
        } else {
          allowRender = function allowRender() { /* body not rendered: F153864 */ };
          checkGatewayConnection = function checkGatewayConnection() { /* body not rendered: F153865 */ };
          checkCacheLoadStatus = function checkCacheLoadStatus() { /* body not rendered: F153866 */ };
          checkNavigationState = function checkNavigationState() { /* body not rendered: F153867 */ };
          obj = closure_1_5;
          result = closure_1_5.addReactChangeListener(checkGatewayConnection);
          obj2 = closure_1_4;
          result1 = closure_1_4.addReactChangeListener(checkCacheLoadStatus);
          tmp4 = closure_0;
          tmp5 = closure_1;
          ComponentDispatch = closure_0(closure_1[9]).ComponentDispatch;
          tmp6 = closure_1_6;
          subscription = ComponentDispatch.subscribe(closure_1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          obj3 = closure_0(closure_1[8]);
          rootNavigationRef = obj3.getRootNavigationRef();
          tmp8 = null;
          if (rootNavigationRef != null) {
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", checkNavigationState);
          }
          if (obj.isConnected()) {
            flag = true;
            c7 = true;
            tmp10 = checkGatewayConnection;
            tmp11 = checkGatewayConnection(true);
          }
          str2 = "cache-loaded";
          if ("cache-loaded" === obj2.getLazyCacheStatus()) {
            flag2 = true;
            c7 = true;
            tmp12 = checkGatewayConnection;
            tmp13 = checkGatewayConnection(true);
          }
          return () => { /* body not rendered: F153868 */ };
        }
      }
    }
    const items = [first];
    cResult[0] = first;
    cResult[1] = R;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = R;
  } else {
    class R {
      constructor() {
        tmp = allowRender;
        if (tmp) {
          return;
        } else {
          allowRender = function allowRender() { /* body not rendered: F153864 */ };
          checkGatewayConnection = function checkGatewayConnection() { /* body not rendered: F153865 */ };
          checkCacheLoadStatus = function checkCacheLoadStatus() { /* body not rendered: F153866 */ };
          checkNavigationState = function checkNavigationState() { /* body not rendered: F153867 */ };
          obj = closure_1_5;
          result = closure_1_5.addReactChangeListener(checkGatewayConnection);
          obj2 = closure_1_4;
          result1 = closure_1_4.addReactChangeListener(checkCacheLoadStatus);
          tmp4 = closure_0;
          tmp5 = closure_1;
          ComponentDispatch = closure_0(closure_1[9]).ComponentDispatch;
          tmp6 = closure_1_6;
          subscription = ComponentDispatch.subscribe(closure_1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          obj3 = closure_0(closure_1[8]);
          rootNavigationRef = obj3.getRootNavigationRef();
          tmp8 = null;
          if (rootNavigationRef != null) {
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", checkNavigationState);
          }
          if (obj.isConnected()) {
            flag = true;
            c7 = true;
            tmp10 = checkGatewayConnection;
            tmp11 = checkGatewayConnection(true);
          }
          str2 = "cache-loaded";
          if ("cache-loaded" === obj2.getLazyCacheStatus()) {
            flag2 = true;
            c7 = true;
            tmp12 = checkGatewayConnection;
            tmp13 = checkGatewayConnection(true);
          }
          return () => { /* body not rendered: F153868 */ };
        }
      }
    }
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
      const coerceGuildsRoute = first(checkGatewayConnection[7]).coerceGuildsRoute;
      first(checkGatewayConnection[7]);
      const obj = first(checkGatewayConnection[8]);
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
      let ComponentDispatch = first(checkGatewayConnection[9]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      const obj3 = first(checkGatewayConnection[8]);
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
});
let result = size.fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = tmp2;
