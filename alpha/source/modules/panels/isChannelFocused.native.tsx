// Module ID: 6078
// Function ID: 6079
// Name: isChannelFocused
// Dependencies: [32, 19, 6041, 6079, 6080, 4980, 4978, 4979, 4981, 6081, 558, 576, 2]
// Exports: isChannelFocused, isChannelFocusedForReadStateAck

// Module 6078 (isChannelFocused)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4978 */;
import RootNavigationRef from "RootNavigationRef" /* 4979 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 4980 */;
import useChatLayout from "useChatLayout" /* 4981 */;
import NavigationHistoryStore2 from "NavigationHistoryStore" /* 6079 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 6081 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import VoicePanelStore from "VoicePanelStore" /* 6080 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useChatLayoutDefault = useChatLayout;
const NavigationHistoryStore = NavigationHistoryStore2;

function getFocusedChannelId() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const obj3 = useChatLayout;
  const isChatLockedOpen = obj3.getChatLayout().isChatLockedOpen;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const tmp4 = getChannelDetailsFromRouteDefault;
      return _slicedToArray(tmp4(rootNavigationRef.getCurrentRoute(), isChatLockedOpen), 2)[1];
    }
  }
  let tmp6 = channelId1;
  if (null === channelId1) {
    const tmp21 = getInitialNavigationStateDefault();
    let tmp7;
    const coerceMainRoute = NavigationRouteUtils.coerceMainRoute;
    NavigationRouteUtils;
    if (tmp21 != null) {
      const routes = tmp21.routes;
      if (routes != null) {
        let num2;
        if (tmp21 != null) {
          num2 = tmp21.index;
        }
        if (num2 == null) {
          num2 = 0;
        }
        tmp7 = routes[num2];
      }
    }
    const coerceMainRouteResult = coerceMainRoute(tmp7);
    let tmp9;
    if (null != coerceMainRouteResult) {
      const tmpResult3 = NavigationRouteUtils;
      if (isChatLockedOpen) {
        const state3 = coerceMainRouteResult.state;
        let tmp14;
        const coerceTabsRoute = tmpResult3.coerceTabsRoute;
        if (state3 != null) {
          const routes3 = state3.routes;
          if (routes3 != null) {
            const state4 = coerceMainRouteResult.state;
            let num4;
            if (state4 != null) {
              num4 = state4.index;
            }
            if (num4 == null) {
              num4 = 0;
            }
            tmp14 = routes3[num4];
          }
        }
        const coerceTabsRouteResult = coerceTabsRoute(tmp14);
        if (null != coerceTabsRouteResult) {
          const state5 = coerceTabsRouteResult.state;
          let tmp17;
          const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
          NavigationRouteUtils;
          if (state5 != null) {
            const routes4 = state5.routes;
            if (routes4 != null) {
              const state6 = coerceTabsRouteResult.state;
              let num5;
              if (state6 != null) {
                num5 = state6.index;
              }
              if (num5 == null) {
                num5 = 0;
              }
              tmp17 = routes4[num5];
            }
          }
          const coerceGuildsRouteResult = coerceGuildsRoute(tmp17);
          if (null != coerceGuildsRouteResult) {
            const params2 = coerceGuildsRouteResult.params;
            let channelId;
            if (params2 != null) {
              channelId = params2.channelId;
            }
            tmp9 = channelId;
          }
        }
      } else {
        const state = coerceMainRouteResult.state;
        let tmp11;
        const coerceChannelRoute = tmpResult3.coerceChannelRoute;
        if (state != null) {
          const routes2 = state.routes;
          if (routes2 != null) {
            const state2 = coerceMainRouteResult.state;
            let num3;
            if (state2 != null) {
              num3 = state2.index;
            }
            if (num3 == null) {
              num3 = 0;
            }
            tmp11 = routes2[num3];
          }
        }
        const coerceChannelRouteResult = coerceChannelRoute(tmp11);
        if (null != coerceChannelRouteResult) {
          const params = coerceChannelRouteResult.params;
          channelId1 = undefined;
          if (params != null) {
            channelId1 = params.channelId;
          }
          tmp9 = channelId1;
        }
      }
    }
    channelId1 = tmp9;
    tmp6 = tmp9;
  }
  return tmp6;
}
const CHANNEL_PREFIX = NavigationHistoryStore2.CHANNEL_PREFIX;
let channelId1 = null;
function isChannelFocused() {
  return null != getFocusedChannelId();
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsChannelFocused() {
  let closure_0;
  let first;
  let first1;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return null != getFocusedChannelId();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [first1, _require] = react.useState(first);
  const tmp6 = useChatLayoutDefault();
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function o() {
      closure_0(null != getFocusedChannelId());
    };
    cResult[1] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const items = [tmp6];
    cResult[2] = tmp6;
    cResult[3] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[3];
  }
  const effect = obj2.useEffect(tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function c() {
      const obj = closure_0(dependencyMap[7]);
      const rootNavigationRef = obj.getRootNavigationRef();
      if (null != rootNavigationRef) {
        function handleStateChange() {
          rootNavigationRef(null != getFocusedChannelId());
        }
        rootNavigationRef.addListener("state", handleStateChange);
        return () => {
          rootNavigationRef.removeListener("state", handleStateChange);
        };
      }
    };
    const items1 = [];
    cResult[4] = fn3;
    cResult[5] = items1;
    tmp11 = items1;
    tmp10 = fn3;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect1 = obj2.useEffect(tmp10, tmp11);
  return first1;
}) : (function useIsChannelFocused() {
  let closure_0;
  let first;
  [first, closure_0] = react.useState(() => null != getFocusedChannelId());
  const items = [useChatLayoutDefault()];
  const effect = react.useEffect(() => {
    closure_0(null != getFocusedChannelId());
  }, items);
  const effect1 = react.useEffect(() => {
    function handleStateChange() {
      rootNavigationRef(null != getFocusedChannelId());
    }
    const obj = closure_0(dependencyMap[7]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.addListener("state", handleStateChange);
      return () => {
        rootNavigationRef.removeListener("state", handleStateChange);
      };
    }
  }, []);
  return first;
});
const result = size.fileFinishedImporting("modules/panels/isChannelFocused.native.tsx");

export { getFocusedChannelId };
export { isChannelFocused };
export const useIsChannelFocused = tmp2;
export const isChannelFocusedForReadStateAck = function isChannelFocusedForReadStateAck(channelId, arg1) {
  if (ChannelRTCStore.getChatOpen(channelId)) {
    return true;
  } else {
    const state = VoicePanelStore.getState();
    if (state.isVoicePanelFullscreen()) {
      return false;
    } else if (getFocusedChannelId() === channelId) {
      return true;
    } else {
      if (null != arg1) {
        const lastFocusedTimestampForHistoryItem = NavigationHistoryStore.getLastFocusedTimestampForHistoryItem(CHANNEL_PREFIX + channelId);
        if (null != lastFocusedTimestampForHistoryItem) {
          if (lastFocusedTimestampForHistoryItem >= arg1) {
            return true;
          }
        }
      }
      return false;
    }
  }
};
