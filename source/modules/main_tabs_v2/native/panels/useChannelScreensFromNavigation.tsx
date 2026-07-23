// Module ID: 14790
// Function ID: 112808
// Name: getActiveTabsRoute
// Dependencies: [57, 31, 1348, 1906, 3947, 653, 1355, 3982, 3981, 3984, 2]
// Exports: default, isActiveTabsGuilds

// Module 14790 (getActiveTabsRoute)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { ME } from "ME";
import { isStaticChannelRoute } from "set";

const require = arg1;
function getActiveTabsRoute(coerceTabsRouteResult) {
  if (null != coerceTabsRouteResult) {
    const state3 = coerceTabsRouteResult.state;
    let tmp3;
    if (null != state3) {
      const state = coerceTabsRouteResult.state;
      let index;
      if (null != state) {
        index = state.index;
      }
      if (null == index) {
        const state2 = coerceTabsRouteResult.state;
        let length;
        if (null != state2) {
          length = state2.routes.length;
        }
        index = length - 1;
      }
      tmp3 = state3.routes[index];
    }
    if (null != tmp3) {
      return tmp3;
    } else {
      const params = coerceTabsRouteResult.params;
      let screen;
      if (null != params) {
        screen = params.screen;
      }
      if (null != screen) {
        let obj = { key: "resolved", name: coerceTabsRouteResult.params.screen, params: coerceTabsRouteResult.params.params };
        return obj;
      } else {
        obj = require(3982) /* getRootNavigationRef */;
        const rootNavigationRef = obj.getRootNavigationRef();
        let isReadyResult;
        if (null != rootNavigationRef) {
          isReadyResult = rootNavigationRef.isReady();
        }
        if (true === isReadyResult) {
          return rootNavigationRef.getCurrentRoute();
        }
      }
    }
  }
}
function resolveBackgroundScreen(index) {
  let obj = require(3981) /* _createForOfIteratorHelperLoose */;
  const coerceTabsRouteResult = obj.coerceTabsRoute(index.routes[0]);
  if (null == coerceTabsRouteResult) {
    return [];
  } else {
    const tmp9 = getActiveTabsRoute(coerceTabsRouteResult);
    if (null == tmp9) {
      return [];
    } else {
      const coerceGuildsRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceGuildsRoute(tmp9);
      if (null == coerceGuildsRouteResult) {
        return [];
      } else {
        const params3 = coerceGuildsRouteResult.params;
        if (null != params3) {
          const guildId = params3.guildId;
        }
        const params = coerceGuildsRouteResult.params;
        let channelId;
        if (null != params) {
          channelId = params.channelId;
        }
        let tmp3;
        if (null != channelId) {
          tmp3 = channelId;
        }
        if (null == tmp3) {
          return [];
        } else {
          if (!isStaticChannelRoute(tmp3)) {
            if (null == channel.getChannel(tmp3)) {
              return [];
            }
          }
          obj = { index: 0 };
          const params2 = coerceGuildsRouteResult.params;
          let search;
          if (null != params2) {
            search = params2.search;
          }
          if (null != search) {
            if (search) {
              let BACKGROUND_SAVED = obj.FALLBACK_RENDERED;
            }
            obj.type = BACKGROUND_SAVED;
            obj.guildId = guildId;
            obj.channelId = tmp3;
            obj.showCreateThread = false;
            const items = [obj];
            return items;
          }
          BACKGROUND_SAVED = obj.BACKGROUND_SAVED;
        }
      }
      const obj3 = require(3981) /* _createForOfIteratorHelperLoose */;
    }
  }
}
function resolveChannelScreens(index, isChatLockedOpen) {
  const items = [];
  for (let num = 0; num <= index.index; num = num + 1) {
    let tmp = arr2;
    let tmp2 = dependencyMap;
    let obj = arr2(3981);
    let coerceChannelRouteResult = obj.coerceChannelRoute(index.routes[num]);
    if (null != coerceChannelRouteResult) {
      obj = { index: items.length };
      let tmp4 = obj;
      obj.type = obj.DEFAULT;
      obj.guildId = coerceChannelRouteResult.params.guildId;
      obj.channelId = coerceChannelRouteResult.params.channelId;
      obj.showCreateThread = coerceChannelRouteResult.params.showCreateThread;
      let arr = items.push(obj);
    }
  }
  if (isChatLockedOpen.isChatLockedOpen) {
    arr2 = resolveBackgroundScreen(index);
    if (arr2.length > 0) {
      const items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(arr2, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(items.map((index) => {
        const obj = {};
        const merged = Object.assign(index);
        obj["index"] = index.index + arr2.length;
        return obj;
      }), arraySpreadResult);
      return items1;
    }
  }
  let tmp7 = items;
  if (items.length <= 0) {
    tmp7 = resolveBackgroundScreen(index);
  }
  return tmp7;
}
let obj = { DEFAULT: 0, [0]: "DEFAULT", BACKGROUND_SAVED: 1, [1]: "BACKGROUND_SAVED", FALLBACK_RENDERED: 2, [2]: "FALLBACK_RENDERED" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx");

export default function useChannelScreensFromNavigation(arg0) {
  let dependencyMap;
  let tmp3;
  let closure_0 = arg0;
  const tmp = importDefault(3984)();
  importDefault = tmp;
  [tmp3, dependencyMap] = callback(React.useState(() => {
    const arr = outer1_13(store.getState(), closure_1);
    if (arr.length > 0) {
      return arr;
    } else {
      let guildId = outer1_7.getGuildId();
      const channelId = outer1_6.getChannelId();
      if (null == channelId) {
        let items = [];
      } else {
        const obj = { index: 0, type: outer1_10.FALLBACK_RENDERED };
        if (null == guildId) {
          guildId = outer1_8;
        }
        obj.guildId = guildId;
        obj.channelId = channelId;
        items = [obj];
      }
    }
  }), 2);
  callback = React.useCallback((arg0, arg1) => {
    if (null != arg0) {
      if (arg0.length > 0) {
        callback(arg0);
      }
    }
    const coerceTabsRouteResult = store(outer1_2[8]).coerceTabsRoute(arg1.routes[0]);
    let tmp2;
    if (null != coerceTabsRouteResult) {
      const tmp4 = outer1_11(coerceTabsRouteResult);
      if (null != tmp4) {
        const coerceGuildsRouteResult = store(outer1_2[8]).coerceGuildsRoute(tmp4);
        let guildId;
        if (null != coerceGuildsRouteResult) {
          const params = coerceGuildsRouteResult.params;
          if (null != params) {
            guildId = params.guildId;
          }
        }
        tmp2 = guildId;
        const obj2 = store(outer1_2[8]);
      }
    }
    store = tmp2;
    callback((arg0) => {
      if (0 === arg0.length) {
        return arg0;
      } else {
        if (null == closure_0) {
          let items1 = arg0;
          if (arg0[0].type !== outer2_10.FALLBACK_RENDERED) {
            const obj = {};
            const merged = Object.assign(arg0[0]);
            obj["type"] = outer2_10.FALLBACK_RENDERED;
            const items = [obj];
            items1 = items;
          }
        }
        items1 = [];
      }
    });
  }, []);
  let items = [arg0, tmp, callback];
  const effect = React.useEffect(() => {
    const state = store.getState();
    callback(outer1_13(state, closure_1), state);
  }, items);
  let items1 = [arg0, callback];
  const effect1 = React.useEffect(() => {
    function handleStateChange(data) {
      outer1_3(outer2_13(data.data.state, handleStateChange(outer2_2[9]).getChatLayout()), data.data.state);
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      handleStateChange.removeListener("state", handleStateChange);
    };
  }, items1);
  return tmp3;
};
export const ChannelScreenType = obj;
export { getActiveTabsRoute };
export const isActiveTabsGuilds = function isActiveTabsGuilds(state) {
  const coerceTabsRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceTabsRoute(state.routes[0]);
  if (null == coerceTabsRouteResult) {
    return false;
  } else {
    const tmp3 = getActiveTabsRoute(coerceTabsRouteResult);
    let tmp4 = null != tmp3;
    if (tmp4) {
      tmp4 = null != require(3981) /* _createForOfIteratorHelperLoose */.coerceGuildsRoute(tmp3);
      const obj2 = require(3981) /* _createForOfIteratorHelperLoose */;
    }
    return tmp4;
  }
  const obj = require(3981) /* _createForOfIteratorHelperLoose */;
};
