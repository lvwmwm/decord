// Module ID: 6867
// Function ID: 6868
// Name: isChannelFocused
// Dependencies: [32, 19, 6837, 6868, 6869, 5195, 5193, 5194, 5196, 6870, 6871, 2]
// Exports: isChannelFocused, isChannelFocusedForReadStateAck, useIsChannelFocused

// Module 6867 (isChannelFocused)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 5195 */;
import useChatLayout from "useChatLayout" /* 5196 */;
import NavigationHistoryStore2 from "NavigationHistoryStore" /* 6868 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 6870 */;
import hasSecondaryViewChatDefault from "hasSecondaryViewChat" /* 6871 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import VoicePanelStore from "VoicePanelStore" /* 6869 */;
import size from "module_2" /* 2 */;

const useChatLayoutDefault = useChatLayout;
const NavigationHistoryStore = NavigationHistoryStore2;

function getFocusedChannelId() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  const obj3 = useChatLayout;
  const isChatLockedOpen = obj3.getChatLayout().isChatLockedOpen;
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      const tmpResult = NavigationRouteUtils;
      const result = tmpResult.coerceChannelSecondaryViewChatRoute(rootState.routes[rootState.index]);
      let channelId;
      if (result != null) {
        channelId = result.params.channelId;
      }
      if (null != channelId) {
        return channelId;
      } else {
        const tmp7 = getChannelDetailsFromRouteDefault;
        return _slicedToArray(tmp7(rootNavigationRef.getCurrentRoute(), isChatLockedOpen), 2)[1];
      }
    }
  }
  let tmp9 = channelId2;
  if (null === channelId2) {
    const tmp24 = getInitialNavigationStateDefault();
    let tmp10;
    const coerceMainRoute = NavigationRouteUtils.coerceMainRoute;
    NavigationRouteUtils;
    if (tmp24 != null) {
      const routes = tmp24.routes;
      if (routes != null) {
        let num2;
        if (tmp24 != null) {
          num2 = tmp24.index;
        }
        if (num2 == null) {
          num2 = 0;
        }
        tmp10 = routes[num2];
      }
    }
    const coerceMainRouteResult = coerceMainRoute(tmp10);
    let tmp12;
    if (null != coerceMainRouteResult) {
      const tmpResult5 = NavigationRouteUtils;
      if (isChatLockedOpen) {
        const state3 = coerceMainRouteResult.state;
        let tmp17;
        const coerceTabsRoute = tmpResult5.coerceTabsRoute;
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
            tmp17 = routes3[num4];
          }
        }
        const coerceTabsRouteResult = coerceTabsRoute(tmp17);
        if (null != coerceTabsRouteResult) {
          const state5 = coerceTabsRouteResult.state;
          let tmp20;
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
              tmp20 = routes4[num5];
            }
          }
          const coerceGuildsRouteResult = coerceGuildsRoute(tmp20);
          if (null != coerceGuildsRouteResult) {
            const params2 = coerceGuildsRouteResult.params;
            let channelId1;
            if (params2 != null) {
              channelId1 = params2.channelId;
            }
            tmp12 = channelId1;
          }
        }
      } else {
        const state = coerceMainRouteResult.state;
        let tmp14;
        const coerceChannelRoute = tmpResult5.coerceChannelRoute;
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
            tmp14 = routes2[num3];
          }
        }
        const coerceChannelRouteResult = coerceChannelRoute(tmp14);
        if (null != coerceChannelRouteResult) {
          const params = coerceChannelRouteResult.params;
          channelId2 = undefined;
          if (params != null) {
            channelId2 = params.channelId;
          }
          tmp12 = channelId2;
        }
      }
    }
    channelId2 = tmp12;
    tmp9 = tmp12;
  }
  return tmp9;
}
const CHANNEL_PREFIX = NavigationHistoryStore2.CHANNEL_PREFIX;
let channelId2 = null;
let result = size.fileFinishedImporting("modules/panels/isChannelFocused.native.tsx");

export { getFocusedChannelId };
export function isChannelFocused() {
  return null != getFocusedChannelId();
}
export function useIsChannelFocused() {
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
}
export function isChannelFocusedForReadStateAck(channelId, arg1) {
  if (ChannelRTCStore.getChatOpen(channelId)) {
    return true;
  } else {
    const state = VoicePanelStore.getState();
    if (state.isVoicePanelFullscreen()) {
      return false;
    } else if (hasSecondaryViewChatDefault(channelId)) {
      const obj2 = RootNavigationRef;
      const rootNavigationRef = obj2.getRootNavigationRef();
      let tmp12 = null != rootNavigationRef && rootNavigationRef.isReady();
      const tmp10 = require;
      if (tmp12) {
        const rootState = rootNavigationRef.getRootState();
        const tmp10Result = tmp10(5193);
        const result = tmp10Result.coerceChannelSecondaryViewChatRoute(rootState.routes[rootState.index]);
        channelId = undefined;
        if (result != null) {
          channelId = result.params.channelId;
        }
        tmp12 = channelId === channelId;
      }
      return tmp12;
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
}
