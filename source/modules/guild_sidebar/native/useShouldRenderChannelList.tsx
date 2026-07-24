// Module ID: 15134
// Function ID: 115113
// Name: useShouldRenderChannelList
// Dependencies: [57, 31, 6708, 4808, 653, 3981, 3982, 1207, 2]
// Exports: useShouldRenderChannelList

// Module 15134 (useShouldRenderChannelList)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ComponentActions } from "ME";

const require = arg1;
let c7 = false;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_sidebar/native/useShouldRenderChannelList.tsx");

export const useShouldRenderChannelList = function useShouldRenderChannelList() {
  const tmp = callback(React.useState(c7), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  const items = [first];
  const effect = React.useEffect(() => {
    function allowRender() {
      const outer2_7 = true;
      handleGatewayChange(true);
    }
    function handleGatewayChange(arg0) {
      if (outer2_5.isConnected()) {
        allowRender();
      }
    }
    function handleCacheChange() {
      if ("cache-loaded" === outer2_4.getLazyCacheStatus()) {
        allowRender();
      }
    }
    function handleNavigationChange() {
      const obj = first(handleGatewayChange[5]);
      const rootNavigationRef = first(handleGatewayChange[6]).getRootNavigationRef();
      let currentRoute;
      if (null != rootNavigationRef) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != obj.coerceGuildsRoute(currentRoute)) {
        allowRender();
      }
    }
    if (!allowRender) {
      let result = outer1_5.addReactChangeListener(handleGatewayChange);
      let result1 = outer1_4.addReactChangeListener(handleCacheChange);
      let ComponentDispatch = first(1207).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(outer1_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let rootNavigationRef = first(3982).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        const result = outer2_5.removeReactChangeListener(handleGatewayChange);
        const result1 = outer2_4.addReactChangeListener(handleCacheChange);
        const ComponentDispatch = first(handleGatewayChange[7]).ComponentDispatch;
        ComponentDispatch.unsubscribe(outer2_6.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const rootNavigationRef = first(handleGatewayChange[6]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
      };
    }
  }, items);
  return first;
};
