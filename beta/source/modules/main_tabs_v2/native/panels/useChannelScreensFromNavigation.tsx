// Module ID: 15630
// Function ID: 15631
// Name: useChannelScreensFromNavigation
// Dependencies: [32, 19, 2045, 2099, 4655, 1074, 2052, 4693, 4692, 4695, 2]
// Exports: default, isActiveTabsGuilds

// Module 15630 (useChannelScreensFromNavigation)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import useChatLayoutDefault from "useChatLayout" /* 4695 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import size from "module_2" /* 2 */;

let importDefault;

function getActiveTabsRoute(coerceTabsRouteResult) {
  if (null != coerceTabsRouteResult) {
    const state3 = coerceTabsRouteResult.state;
    let tmp3;
    if (state3 != null) {
      const state = coerceTabsRouteResult.state;
      let index;
      const routes = state3.routes;
      if (state != null) {
        index = state.index;
      }
      if (index == null) {
        const state2 = coerceTabsRouteResult.state;
        let length;
        if (state2 != null) {
          length = state2.routes.length;
        }
        index = length - 1;
      }
      tmp3 = routes[index];
    }
    if (null != tmp3) {
      return tmp3;
    } else {
      const params = coerceTabsRouteResult.params;
      let screen;
      if (params != null) {
        screen = params.screen;
      }
      if (null != screen) {
        return { key: "resolved", name: coerceTabsRouteResult.params.screen, params: coerceTabsRouteResult.params.params };
      } else {
        const obj = RootNavigationRef;
        const rootNavigationRef = obj.getRootNavigationRef();
        let isReadyResult;
        if (rootNavigationRef != null) {
          isReadyResult = rootNavigationRef.isReady();
        }
        if (true === isReadyResult) {
          return rootNavigationRef.getCurrentRoute();
        }
      }
    }
  }
}
function resolveBackgroundScreen(state) {
  const first = state.routes[0];
  const obj = NavigationRouteUtils;
  const coerceTabsRouteResult = obj.coerceTabsRoute(first);
  if (null == coerceTabsRouteResult) {
    return [];
  } else {
    const tmp12 = getActiveTabsRoute(coerceTabsRouteResult);
    if (null == tmp12) {
      return [];
    } else {
      const tmp2Result = NavigationRouteUtils;
      const coerceGuildsRouteResult = tmp2Result.coerceGuildsRoute(tmp12);
      if (null == coerceGuildsRouteResult) {
        return [];
      } else {
        let guildId;
        const params3 = coerceGuildsRouteResult.params;
        if (params3 != null) {
          guildId = params3.guildId;
        }
        const params = coerceGuildsRouteResult.params;
        let channelId;
        if (params != null) {
          channelId = params.channelId;
        }
        if (null == channelId) {
          return [];
        } else {
          if (!isStaticChannelRoute(channelId)) {
            if (null == ChannelStore.getChannel(channelId)) {
              return [];
            }
          }
          const params2 = coerceGuildsRouteResult.params;
          let search;
          if (params2 != null) {
            search = params2.search;
          }
          if (search != null) {
            let BACKGROUND_SAVED;
            if (search) {
              BACKGROUND_SAVED = obj.FALLBACK_RENDERED;
            }
            const items = [{ index: 0, type: BACKGROUND_SAVED, guildId, channelId, showCreateThread: false }];
            return items;
          }
          BACKGROUND_SAVED = obj.BACKGROUND_SAVED;
        }
      }
    }
  }
}
function resolveChannelScreens(state, isChatLockedOpen) {
  let num;
  const items = [];
  for (let num = 0; num <= state.index; num = num + 1) {
    let tmp2 = state.routes[num];
    let obj = NavigationRouteUtils;
    let coerceChannelRouteResult = obj.coerceChannelRoute(tmp2);
    if (null != coerceChannelRouteResult) {
      let obj2 = { index: items.length, type: obj.DEFAULT, guildId: coerceChannelRouteResult.params.guildId, channelId: coerceChannelRouteResult.params.channelId, showCreateThread: coerceChannelRouteResult.params.showCreateThread };
      let arr = items.push(obj2);
    }
  }
  if (isChatLockedOpen.isChatLockedOpen) {
    const arr2 = resolveBackgroundScreen(state);
    if (arr2.length > 0) {
      const items1 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, arr2, 0);
      HermesBuiltin.arraySpread(items1, items.map((item) => {
        const obj = { index: item.index + arr2.length };
        const merged = Object.assign(item);
        return obj;
      }), arraySpreadResult);
      return items1;
    }
  }
  let tmp10 = items;
  if (items.length <= 0) {
    tmp10 = resolveBackgroundScreen(state);
  }
  return tmp10;
}
const ME = Constants.ME;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const ChannelScreenType = { DEFAULT: 0, [0]: "DEFAULT", BACKGROUND_SAVED: 1, [1]: "BACKGROUND_SAVED", FALLBACK_RENDERED: 2, [2]: "FALLBACK_RENDERED" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx");

export default function useChannelScreensFromNavigation(arg0) {
  let callback;
  let closure_1;
  let tmp3;
  let closure_0 = arg0;
  let tmp = useChatLayoutDefault();
  importDefault = tmp;
  let tmp2 = callback(react.useState(() => {
    let obj;
    let arr = resolveChannelScreens(closure_0.getState(), closure_1);
    if (arr.length <= 0) {
      let items;
      let guildId = SelectedGuildStore.getGuildId();
      const channelId = SelectedChannelStore.getChannelId();
      if (null == channelId) {
        items = [];
      } else {
        obj = { index: 0, type: obj.FALLBACK_RENDERED, guildId, channelId };
        if (guildId == null) {
          guildId = ME;
        }
        items = [obj];
      }
      arr = items;
    }
    return arr;
  }), 2);
  [tmp3, dependencyMap] = tmp2;
  callback = react.useCallback((arg0, arg1) => {
    if (null != arg0) {
      if (arg0.length > 0) {
        dependencyMap(arg0);
      }
    }
    const first = arg1.routes[0];
    const tmp2 = require;
    let obj = NavigationRouteUtils;
    const coerceTabsRouteResult = obj.coerceTabsRoute(first);
    let tmp5;
    if (null != coerceTabsRouteResult) {
      const tmp7 = getActiveTabsRoute(coerceTabsRouteResult);
      if (null != tmp7) {
        const tmp2Result = NavigationRouteUtils;
        const coerceGuildsRouteResult = tmp2Result.coerceGuildsRoute(tmp7);
        let guildId;
        if (coerceGuildsRouteResult != null) {
          const params = coerceGuildsRouteResult.params;
          if (params != null) {
            guildId = params.guildId;
          }
        }
        tmp5 = guildId;
      }
    }
    guildId = tmp5;
    dependencyMap((arg0) => {
      let tmp = arg0;
      if (0 !== arg0.length) {
        let items;
        if (null != guildId) {
          if (tmp2 !== arg0[0].guildId) {
            items = [];
          }
          tmp = items;
        }
        items = arg0;
        if (arg0[0].type !== constants.FALLBACK_RENDERED) {
          const obj = { type: tmp4.FALLBACK_RENDERED };
          const merged = Object.assign(arg0[0]);
          const items1 = [obj];
          items = items1;
        }
      }
      return tmp;
    });
  }, []);
  let items = [arg0, tmp, callback];
  const effect = react.useEffect(() => {
    const state = closure_0.getState();
    callback(resolveChannelScreens(state, closure_1), state);
  }, items);
  let items1 = [arg0, callback];
  const effect1 = react.useEffect(() => {
    function handleStateChange(data) {
      const state = data.data.state;
      const obj = handleStateChange(dependencyMap[9]);
      callback(resolveChannelScreens(state, obj.getChatLayout()), data.data.state);
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      handleStateChange.removeListener("state", handleStateChange);
    };
  }, items1);
  return tmp3;
};
export { ChannelScreenType };
export { getActiveTabsRoute };
export const isActiveTabsGuilds = function isActiveTabsGuilds(state) {
  const first = state.routes[0];
  const obj = NavigationRouteUtils;
  const coerceTabsRouteResult = obj.coerceTabsRoute(first);
  if (null == coerceTabsRouteResult) {
    return false;
  } else {
    const tmp6 = getActiveTabsRoute(coerceTabsRouteResult);
    let tmp7 = null != tmp6;
    if (tmp7) {
      const tmp2Result = NavigationRouteUtils;
      tmp7 = null != tmp2Result.coerceGuildsRoute(tmp6);
    }
    return tmp7;
  }
};
