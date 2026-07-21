// Module ID: 14664
// Function ID: 110569
// Name: getActiveTabsRoute
// Dependencies: []
// Exports: default, isActiveTabsGuilds

// Module 14664 (getActiveTabsRoute)
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
        obj = arg1(dependencyMap[7]);
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
  let obj = arg1(dependencyMap[8]);
  const coerceTabsRouteResult = obj.coerceTabsRoute(index.routes[0]);
  if (null == coerceTabsRouteResult) {
    return [];
  } else {
    const tmp9 = getActiveTabsRoute(coerceTabsRouteResult);
    if (null == tmp9) {
      return [];
    } else {
      const coerceGuildsRouteResult = arg1(dependencyMap[8]).coerceGuildsRoute(tmp9);
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
      const obj3 = arg1(dependencyMap[8]);
    }
  }
}
function resolveChannelScreens(index, isChatLockedOpen) {
  const items = [];
  for (let num = 0; num <= index.index; num = num + 1) {
    let tmp = isChatLockedOpen;
    let tmp2 = dependencyMap;
    let obj = isChatLockedOpen(dependencyMap[8]);
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
    const arr2 = resolveBackgroundScreen(index);
    isChatLockedOpen = arr2;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const ME = arg1(dependencyMap[5]).ME;
const isStaticChannelRoute = arg1(dependencyMap[6]).isStaticChannelRoute;
const obj = { DEFAULT: 0, [0]: "DEFAULT", BACKGROUND_SAVED: 1, [1]: "BACKGROUND_SAVED", FALLBACK_RENDERED: 2, [2]: "FALLBACK_RENDERED" };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/panels/useChannelScreensFromNavigation.tsx");

export default function useChannelScreensFromNavigation(arg0) {
  let tmp3;
  const arg1 = arg0;
  const tmp = importDefault(dependencyMap[9])();
  const importDefault = tmp;
  [tmp3, closure_2] = callback(React.useState(() => {
    const arr = callback3(arg0.getState(), tmp);
    if (arr.length > 0) {
      return arr;
    } else {
      let guildId = guildId.getGuildId();
      const channelId = channelId.getChannelId();
      if (null == channelId) {
        let items = [];
      } else {
        const obj = { index: 0, type: constants.FALLBACK_RENDERED };
        if (null == guildId) {
          guildId = closure_8;
        }
        obj.guildId = guildId;
        obj.channelId = channelId;
        items = [obj];
      }
      const tmp = guildId;
    }
  }), 2);
  const callback = React.useCallback((arg0, arg1) => {
    if (null != arg0) {
      if (arg0.length > 0) {
        callback(arg0);
      }
    }
    const coerceTabsRouteResult = arg0(callback[8]).coerceTabsRoute(arg1.routes[0]);
    let tmp2;
    if (null != coerceTabsRouteResult) {
      const tmp4 = callback2(coerceTabsRouteResult);
      if (null != tmp4) {
        const coerceGuildsRouteResult = arg0(callback[8]).coerceGuildsRoute(tmp4);
        let guildId;
        if (null != coerceGuildsRouteResult) {
          const params = coerceGuildsRouteResult.params;
          if (null != params) {
            guildId = params.guildId;
          }
        }
        tmp2 = guildId;
        const obj2 = arg0(callback[8]);
      }
    }
    arg0 = tmp2;
    callback((arg0) => {
      if (0 === arg0.length) {
        return arg0;
      } else {
        if (null == null) {
          let items1 = arg0;
          if (arg0[0].type !== constants.FALLBACK_RENDERED) {
            const obj = {};
            const merged = Object.assign(arg0[0]);
            obj["type"] = constants.FALLBACK_RENDERED;
            const items = [obj];
            items1 = items;
          }
        }
        items1 = [];
      }
    });
  }, []);
  const items = [arg0, tmp, callback];
  const effect = React.useEffect(() => {
    const state = arg0.getState();
    callback(callback3(state, tmp), state);
  }, items);
  const items1 = [arg0, callback];
  const effect1 = React.useEffect(() => {
    function handleStateChange(data) {
      callback(callback2(data.data.state, handleStateChange(closure_2[9]).getChatLayout()), data.data.state);
    }
    const arg0 = handleStateChange;
    arg0.addListener("state", handleStateChange);
    return () => {
      handleStateChange.removeListener("state", handleStateChange);
    };
  }, items1);
  return tmp3;
};
export const ChannelScreenType = obj;
export { getActiveTabsRoute };
export const isActiveTabsGuilds = function isActiveTabsGuilds(state) {
  const coerceTabsRouteResult = arg1(dependencyMap[8]).coerceTabsRoute(state.routes[0]);
  if (null == coerceTabsRouteResult) {
    return false;
  } else {
    const tmp3 = getActiveTabsRoute(coerceTabsRouteResult);
    let tmp4 = null != tmp3;
    if (tmp4) {
      tmp4 = null != arg1(dependencyMap[8]).coerceGuildsRoute(tmp3);
      const obj2 = arg1(dependencyMap[8]);
    }
    return tmp4;
  }
  const obj = arg1(dependencyMap[8]);
};
