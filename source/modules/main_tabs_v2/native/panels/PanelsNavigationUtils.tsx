// Module ID: 14674
// Function ID: 110641
// Name: convertPortraitToLandscapeScreens
// Dependencies: []
// Exports: convertLandscapeToPortraitScreens, convertPortraitToLandscapeScreens

// Module 14674 (convertPortraitToLandscapeScreens)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx");

export const convertPortraitToLandscapeScreens = function convertPortraitToLandscapeScreens() {
  let obj = require(dependencyMap[0]);
  const store = obj.getRootNavigationRef();
  if (null != store) {
    let state = store.getState();
    if (null != state) {
      const coerceMainRouteResult = require(dependencyMap[1]).coerceMainRoute(state.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 !== state2.index) {
            if (null != obj3.coerceChannelRoute(state2.routes[1])) {
              const coerceTabsRouteResult = require(dependencyMap[1]).coerceTabsRoute(state2.routes[0]);
              if (null != coerceTabsRouteResult) {
                const state3 = coerceTabsRouteResult.state;
                let tmp2;
                if (null != state3) {
                  state = coerceTabsRouteResult.state;
                  let index;
                  if (null != state) {
                    index = state.index;
                  }
                  tmp2 = state3.routes[index];
                }
                if (null != obj5.coerceGuildsRoute(tmp2)) {
                  obj = {};
                  const merged = Object.assign(state2);
                  obj["index"] = state2.index - 1;
                  const items = [state2.routes[0]];
                  const routes = state2.routes;
                  HermesBuiltin.arraySpread(routes.slice(2), 1);
                  obj["routes"] = items;
                  coerceMainRouteResult.state = obj;
                  const items1 = [coerceMainRouteResult];
                  const routes1 = state.routes;
                  HermesBuiltin.arraySpread(routes1.slice(1), 1);
                  const CommonActions = require(dependencyMap[2]).CommonActions;
                  obj = {};
                  const merged1 = Object.assign(state);
                  obj["routes"] = items1;
                  obj["index"] = items1.length - 1;
                  store.dispatch(CommonActions.reset(obj));
                }
                const obj5 = require(dependencyMap[1]);
              }
              const obj4 = require(dependencyMap[1]);
            }
            const obj3 = require(dependencyMap[1]);
          }
        }
      }
      const obj2 = require(dependencyMap[1]);
    }
  }
};
export const convertLandscapeToPortraitScreens = function convertLandscapeToPortraitScreens() {
  let obj = require(dependencyMap[0]);
  const store = obj.getRootNavigationRef();
  if (null != store) {
    let state = store.getState();
    if (null != state) {
      const coerceMainRouteResult = require(dependencyMap[1]).coerceMainRoute(state.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 === state.index) {
            if (0 !== state2.index) {
              const obj7 = require(dependencyMap[1]);
            }
          }
          let obj1 = require(dependencyMap[1]);
          const coerceTabsRouteResult = obj1.coerceTabsRoute(state2.routes[0]);
          if (null != coerceTabsRouteResult) {
            const state3 = coerceTabsRouteResult.state;
            let tmp5;
            if (null != state3) {
              state = coerceTabsRouteResult.state;
              let index;
              if (null != state) {
                index = state.index;
              }
              tmp5 = state3.routes[index];
            }
            const coerceGuildsRouteResult = require(dependencyMap[1]).coerceGuildsRoute(tmp5);
            if (null != coerceGuildsRouteResult) {
              obj = {};
              const merged = Object.assign(state2);
              obj["index"] = state2.index + 1;
              const items = [state2.routes[0], ];
              obj = { name: "channel" };
              const params3 = coerceGuildsRouteResult.params;
              let channelId;
              if (null != params3) {
                channelId = params3.channelId;
              }
              if (null == channelId) {
                let obj2 = require(dependencyMap[3]);
                const _HermesInternal = HermesInternal;
                channelId = "channel-" + obj2.v4();
              }
              obj.key = channelId;
              obj1 = {};
              const params = coerceGuildsRouteResult.params;
              let channelId1;
              if (null != params) {
                channelId1 = params.channelId;
              }
              obj1.channelId = channelId1;
              const params2 = coerceGuildsRouteResult.params;
              let guildId;
              if (null != params2) {
                guildId = params2.guildId;
              }
              obj1.guildId = guildId;
              obj.params = obj1;
              items[1] = obj;
              const routes = state2.routes;
              HermesBuiltin.arraySpread(routes.slice(1), 2);
              obj["routes"] = items;
              coerceMainRouteResult.state = obj;
              const items1 = [coerceMainRouteResult];
              const routes1 = state.routes;
              HermesBuiltin.arraySpread(routes1.slice(1), 1);
              const CommonActions = require(dependencyMap[2]).CommonActions;
              obj2 = {};
              const merged1 = Object.assign(state);
              obj2["routes"] = items1;
              obj2["index"] = items1.length - 1;
              store.dispatch(CommonActions.reset(obj2));
            }
            const obj8 = require(dependencyMap[1]);
          }
        }
      }
      const obj6 = require(dependencyMap[1]);
    }
  }
};
