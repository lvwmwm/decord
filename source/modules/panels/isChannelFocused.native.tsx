// Module ID: 10229
// Function ID: 79022
// Name: getFocusedChannelId
// Dependencies: [57, 31, 4143, 5722, 4342, 3983, 3981, 3982, 3984, 2]
// Exports: isChannelFocusedForReadStateAck, useIsChannelFocused

// Module 10229 (getFocusedChannelId)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { CHANNEL_PREFIX } from "_createForOfIteratorHelperLoose";
import withEqualityFn from "withEqualityFn";

const require = arg1;
function getFocusedChannelId() {
  const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
  const obj = require(3982) /* getRootNavigationRef */;
  const isChatLockedOpen = require(3984) /* useChatLayout */.getChatLayout().isChatLockedOpen;
  let tmp2 = null;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const currentRoute = rootNavigationRef.getCurrentRoute();
      const coerceChannelRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceChannelRoute(currentRoute);
      if (tmp2 != coerceChannelRouteResult) {
        return coerceChannelRouteResult.params.channelId;
      } else {
        if (isChatLockedOpen) {
          const coerceGuildsRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceGuildsRoute(currentRoute);
          if (tmp2 != coerceGuildsRouteResult) {
            const params = coerceGuildsRouteResult.params;
            let channelId;
            if (tmp2 != params) {
              channelId = params.channelId;
            }
            return channelId;
          }
          const obj5 = require(3981) /* _createForOfIteratorHelperLoose */;
        }
        return channelId2;
      }
      const obj4 = require(3981) /* _createForOfIteratorHelperLoose */;
    }
  }
  if (tmp2 !== c9) {
    return c9;
  } else {
    const tmp30 = importDefault(3983)();
    let num6 = 6;
    let num4 = require(3981) /* _createForOfIteratorHelperLoose */;
    let tmp11;
    if (tmp2 != tmp30) {
      const routes = tmp30.routes;
      if (tmp2 != routes) {
        let index;
        if (tmp2 != tmp30) {
          index = tmp30.index;
        }
        let num2 = 0;
        if (tmp2 != index) {
          num2 = index;
        }
        tmp11 = routes[num2];
      }
    }
    let num3 = num4.coerceMainRoute(tmp11);
    if (tmp2 == num3) {
      c9 = tmp13;
    } else {
      num4 = require(dependencyMap[num6]);
      if (!isChatLockedOpen) {
        const state = num3.state;
        let tmp16;
        if (tmp2 != state) {
          const routes2 = state.routes;
          if (tmp2 != routes2) {
            const state2 = num3.state;
            let index1;
            if (tmp2 != state2) {
              index1 = state2.index;
            }
            let num5 = 0;
            if (tmp2 != index1) {
              num5 = index1;
            }
            tmp16 = routes2[num5];
          }
        }
        const coerceChannelRouteResult1 = num4.coerceChannelRoute(tmp16);
        if (tmp2 != coerceChannelRouteResult1) {
          const params2 = coerceChannelRouteResult1.params;
          let channelId1;
          if (tmp2 != params2) {
            channelId1 = params2.channelId;
          }
          tmp13 = channelId1;
        }
      }
    }
    const state3 = num3.state;
    let tmp20;
    if (tmp2 != state3) {
      const routes3 = state3.routes;
      if (tmp2 != routes3) {
        const state4 = num3.state;
        let index2;
        if (tmp2 != state4) {
          index2 = state4.index;
        }
        num3 = 0;
        if (tmp2 != index2) {
          num3 = index2;
        }
        tmp20 = routes3[num3];
      }
    }
    num4 = num4.coerceTabsRoute(tmp20);
    if (tmp2 != num4) {
      num6 = require(dependencyMap[num6]);
      num3 = num4.state;
      let tmp24;
      if (tmp2 != num3) {
        num3 = num3.routes;
        if (tmp2 != num3) {
          const state5 = num4.state;
          let index3;
          if (tmp2 != state5) {
            index3 = state5.index;
          }
          num4 = 0;
          if (tmp2 != index3) {
            num4 = index3;
          }
          tmp24 = num3[num4];
        }
      }
      const coerceGuildsRouteResult1 = num6.coerceGuildsRoute(tmp24);
      if (tmp2 != coerceGuildsRouteResult1) {
        const params3 = coerceGuildsRouteResult1.params;
        tmp2 = tmp2 == params3;
        channelId2 = undefined;
        if (!tmp2) {
          channelId2 = params3.channelId;
        }
        tmp13 = channelId2;
      }
    }
  }
}
function isChannelFocused() {
  return null != getFocusedChannelId();
}
let c9 = null;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/panels/isChannelFocused.native.tsx");

export { getFocusedChannelId };
export { isChannelFocused };
export const useIsChannelFocused = function useIsChannelFocused() {
  const tmp = callback(React.useState(() => outer1_11()), 2);
  let closure_0 = tmp[1];
  const items = [importDefault(3984)()];
  const effect = React.useEffect(() => {
    callback(outer1_11());
  }, items);
  const effect1 = React.useEffect(() => {
    function handleStateChange() {
      rootNavigationRef(outer2_11());
    }
    const rootNavigationRef = callback(outer1_2[7]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
    const obj = callback(outer1_2[7]);
  }, []);
  return tmp[0];
};
export const isChannelFocusedForReadStateAck = function isChannelFocusedForReadStateAck(channelId, timestamp) {
  if (chatOpen.getChatOpen(channelId)) {
    return true;
  } else {
    state = state.getState();
    if (state.isVoicePanelFullscreen()) {
      return false;
    } else if (getFocusedChannelId() === channelId) {
      return true;
    } else {
      if (null != timestamp) {
        lastFocusedTimestampForHistoryItem = lastFocusedTimestampForHistoryItem.getLastFocusedTimestampForHistoryItem(CHANNEL_PREFIX + channelId);
        if (null != lastFocusedTimestampForHistoryItem) {
          if (lastFocusedTimestampForHistoryItem >= timestamp) {
            return true;
          }
        }
      }
      return false;
    }
  }
};
