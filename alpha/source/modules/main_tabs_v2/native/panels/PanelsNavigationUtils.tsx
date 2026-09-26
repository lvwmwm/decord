// Module ID: 15631
// Function ID: 15632
// Name: PanelsNavigationUtils
// Dependencies: [4693, 4692, 1490, 1255, 2]
// Exports: convertLandscapeToPortraitScreens, convertPortraitToLandscapeScreens

// Module 15631 (PanelsNavigationUtils)
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx");

export const convertPortraitToLandscapeScreens = function convertPortraitToLandscapeScreens() {
  const store = RootNavigationRef.getRootNavigationRef();
  if (null != store) {
    const state1 = store.getState();
    if (null != state1) {
      const coerceMainRouteResult = tmp(4692).coerceMainRoute(state1.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 !== state2.index) {
            if (null != tmpResult4.coerceChannelRoute(state2.routes[1])) {
              const coerceTabsRouteResult = tmp(4692).coerceTabsRoute(state2.routes[0]);
              if (null != coerceTabsRouteResult) {
                const state3 = coerceTabsRouteResult.state;
                let tmp4;
                if (state3 != null) {
                  const state = coerceTabsRouteResult.state;
                  let index;
                  if (state != null) {
                    index = state.index;
                  }
                  tmp4 = state3.routes[index];
                }
                if (null != tmpResult6.coerceGuildsRoute(tmp4)) {
                  const obj2 = {};
                  const merged = Object.assign(state2);
                  obj2.index = state2.index - 1;
                  const items = [state2.routes[0]];
                  const routes = state2.routes;
                  HermesBuiltin.arraySpread(routes.slice(2), 1);
                  obj2.routes = items;
                  const routes1 = state1.routes;
                  const substr = routes1.slice(1);
                  const obj3 = {};
                  const merged1 = Object.assign(coerceMainRouteResult);
                  obj3.state = obj2;
                  const items1 = [obj3];
                  HermesBuiltin.arraySpread(substr, 1);
                  const CommonActions = tmp(1490).CommonActions;
                  const obj4 = {};
                  const merged2 = Object.assign(state1);
                  obj4.routes = items1;
                  obj4.index = items1.length - 1;
                  store.dispatch(CommonActions.reset(obj4));
                }
                tmpResult6 = tmp(4692);
              }
              const tmpResult5 = tmp(4692);
            }
            tmpResult4 = tmp(4692);
          }
        }
      }
      const tmpResult = tmp(4692);
    }
  }
};
export const convertLandscapeToPortraitScreens = function convertLandscapeToPortraitScreens() {
  const store = RootNavigationRef.getRootNavigationRef();
  if (null != store) {
    const state1 = store.getState();
    if (null != state1) {
      const coerceMainRouteResult = tmp(4692).coerceMainRoute(state1.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 === state1.index) {
            if (0 !== state2.index) {
              const tmpResult5 = tmp(4692);
            }
          }
          const coerceTabsRouteResult = tmp(4692).coerceTabsRoute(state2.routes[0]);
          if (null != coerceTabsRouteResult) {
            const state3 = coerceTabsRouteResult.state;
            let tmp5;
            if (state3 != null) {
              const state = coerceTabsRouteResult.state;
              let index;
              if (state != null) {
                index = state.index;
              }
              tmp5 = state3.routes[index];
            }
            const coerceGuildsRouteResult = tmp(4692).coerceGuildsRoute(tmp5);
            if (null != coerceGuildsRouteResult) {
              const obj2 = {};
              const merged = Object.assign(state2);
              obj2.index = state2.index + 1;
              const items = [state2.routes[0], ];
              const params3 = coerceGuildsRouteResult.params;
              let channelId;
              if (params3 != null) {
                channelId = params3.channelId;
              }
              if (channelId == null) {
                const _HermesInternal = HermesInternal;
                channelId = "channel-" + tmp(1255).v4();
                const tmpResult8 = tmp(1255);
              }
              const obj3 = { name: "channel", key: channelId, params: null };
              const params = coerceGuildsRouteResult.params;
              let channelId1;
              if (params != null) {
                channelId1 = params.channelId;
              }
              const obj4 = { channelId: channelId1, guildId: null };
              const params2 = coerceGuildsRouteResult.params;
              let guildId;
              if (params2 != null) {
                guildId = params2.guildId;
              }
              obj4.guildId = guildId;
              obj3.params = obj4;
              items[1] = obj3;
              const routes = state2.routes;
              HermesBuiltin.arraySpread(routes.slice(1), 2);
              obj2.routes = items;
              const routes1 = state1.routes;
              const substr = routes1.slice(1);
              const obj5 = {};
              const merged1 = Object.assign(coerceMainRouteResult);
              obj5.state = obj2;
              const items1 = [obj5];
              HermesBuiltin.arraySpread(substr, 1);
              const CommonActions = tmp(1490).CommonActions;
              const obj6 = {};
              const merged2 = Object.assign(state1);
              obj6.routes = items1;
              obj6.index = items1.length - 1;
              store.dispatch(CommonActions.reset(obj6));
            }
            const tmpResult7 = tmp(4692);
          }
          const tmpResult6 = tmp(4692);
        }
      }
      const tmpResult = tmp(4692);
    }
  }
};
