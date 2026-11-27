// Module ID: 17731
// Function ID: 17732
// Name: PanelsNavigationUtils
// Dependencies: [5220, 5219, 1506, 1269, 2]
// Exports: convertLandscapeToPortraitScreens, convertPortraitToLandscapeScreens

// Module 17731 (PanelsNavigationUtils)
import v1 from "v1" /* 1269 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import RootNavigationRef from "RootNavigationRef" /* 5220 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx");

export function convertPortraitToLandscapeScreens() {
  let items;
  const obj = RootNavigationRef;
  const store = obj.getRootNavigationRef();
  if (null != store) {
    const state1 = store.getState();
    if (null != state1) {
      const tmp2Result = NavigationRouteUtils;
      const coerceMainRouteResult = tmp2Result.coerceMainRoute(state1.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 !== state2.index) {
            const tmp2Result4 = NavigationRouteUtils;
            const coerceChannelRouteResult = tmp2Result4.coerceChannelRoute(state2.routes[1]);
            if (null != coerceChannelRouteResult) {
              if (null == coerceChannelRouteResult.params.subRouteId) {
                const tmp2Result5 = NavigationRouteUtils;
                const coerceTabsRouteResult = tmp2Result5.coerceTabsRoute(state2.routes[0]);
                if (null != coerceTabsRouteResult) {
                  const state3 = coerceTabsRouteResult.state;
                  let tmp5;
                  const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
                  NavigationRouteUtils;
                  if (state3 != null) {
                    const state = coerceTabsRouteResult.state;
                    let index;
                    const routes = state3.routes;
                    if (state != null) {
                      index = state.index;
                    }
                    tmp5 = routes[index];
                  }
                  if (null != coerceGuildsRoute(tmp5)) {
                    const obj2 = { index: state2.index - 1, routes: items };
                    const merged = Object.assign(state2);
                    items = [state2.routes[0]];
                    const routes1 = state2.routes;
                    HermesBuiltin.arraySpread(items, routes1.slice(2), 1);
                    const routes2 = state1.routes;
                    const substr = routes2.slice(1);
                    const obj3 = { state: obj2 };
                    const merged1 = Object.assign(coerceMainRouteResult);
                    const items1 = [obj3];
                    HermesBuiltin.arraySpread(items1, substr, 1);
                    const dispatch = store.dispatch;
                    const CommonActions = tmp2(1506).CommonActions;
                    const reset = CommonActions.reset;
                    const obj4 = { routes: items1, index: items1.length - 1 };
                    const merged2 = Object.assign(state1);
                    dispatch(reset(obj4));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
export function convertLandscapeToPortraitScreens() {
  let guildId;
  let items;
  let obj4;
  let tmp2Result8;
  const obj = RootNavigationRef;
  const store = obj.getRootNavigationRef();
  if (null != store) {
    const state1 = store.getState();
    if (null != state1) {
      const tmp2Result = NavigationRouteUtils;
      const coerceMainRouteResult = tmp2Result.coerceMainRoute(state1.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 === state1.index) {
            if (0 !== state2.index) {
              NavigationRouteUtils;
            }
          }
          const tmp2Result6 = NavigationRouteUtils;
          const coerceTabsRouteResult = tmp2Result6.coerceTabsRoute(state2.routes[0]);
          if (null != coerceTabsRouteResult) {
            const state3 = coerceTabsRouteResult.state;
            let tmp6;
            const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
            NavigationRouteUtils;
            if (state3 != null) {
              const state = coerceTabsRouteResult.state;
              let index;
              const routes = state3.routes;
              if (state != null) {
                index = state.index;
              }
              tmp6 = routes[index];
            }
            const coerceGuildsRouteResult = coerceGuildsRoute(tmp6);
            if (null != coerceGuildsRouteResult) {
              const obj2 = { index: state2.index + 1, routes: items };
              const merged = Object.assign(state2);
              items = [state2.routes[0], ];
              const _HermesInternal = HermesInternal;
              const obj3 = { name: "channel", key: "channel-" + tmp2Result8.v4(), params: obj4 };
              const params2 = coerceGuildsRouteResult.params;
              let channelId;
              tmp2Result8 = v1;
              if (params2 != null) {
                channelId = params2.channelId;
              }
              const params = coerceGuildsRouteResult.params;
              obj4 = { channelId, guildId };
              guildId = undefined;
              if (params != null) {
                guildId = params.guildId;
              }
              items[1] = obj3;
              const routes1 = state2.routes;
              HermesBuiltin.arraySpread(items, routes1.slice(1), 2);
              const routes2 = state1.routes;
              const substr = routes2.slice(1);
              const obj5 = { state: obj2 };
              const merged1 = Object.assign(coerceMainRouteResult);
              const items1 = [obj5];
              HermesBuiltin.arraySpread(items1, substr, 1);
              const dispatch = store.dispatch;
              const CommonActions = tmp2(1506).CommonActions;
              const reset = CommonActions.reset;
              const obj6 = { routes: items1, index: items1.length - 1 };
              const merged2 = Object.assign(state1);
              dispatch(reset(obj6));
            }
          }
        }
      }
    }
  }
}
