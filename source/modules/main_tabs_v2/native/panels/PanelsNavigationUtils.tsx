// Module ID: 14836
// Function ID: 113126
// Name: convertPortraitToLandscapeScreens
// Dependencies: [3982, 3981, 1461, 491, 2]
// Exports: convertLandscapeToPortraitScreens, convertPortraitToLandscapeScreens

// Module 14836 (convertPortraitToLandscapeScreens)
const result = require("CommonActions").fileFinishedImporting("modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx");

export const convertPortraitToLandscapeScreens = function convertPortraitToLandscapeScreens() {
  let obj = require(3982) /* getRootNavigationRef */;
  const store = obj.getRootNavigationRef();
  if (null != store) {
    let state = store.getState();
    if (null != state) {
      const coerceMainRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceMainRoute(state.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 !== state2.index) {
            if (null != obj3.coerceChannelRoute(state2.routes[1])) {
              const coerceTabsRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceTabsRoute(state2.routes[0]);
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
                  const CommonActions = require(1461) /* CommonActions */.CommonActions;
                  obj = {};
                  const merged1 = Object.assign(state);
                  obj["routes"] = items1;
                  obj["index"] = items1.length - 1;
                  store.dispatch(CommonActions.reset(obj));
                }
                obj5 = require(3981) /* _createForOfIteratorHelperLoose */;
              }
              const obj4 = require(3981) /* _createForOfIteratorHelperLoose */;
            }
            obj3 = require(3981) /* _createForOfIteratorHelperLoose */;
          }
        }
      }
      const obj2 = require(3981) /* _createForOfIteratorHelperLoose */;
    }
  }
};
export const convertLandscapeToPortraitScreens = function convertLandscapeToPortraitScreens() {
  let obj = require(3982) /* getRootNavigationRef */;
  const store = obj.getRootNavigationRef();
  if (null != store) {
    let state = store.getState();
    if (null != state) {
      const coerceMainRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceMainRoute(state.routes[0]);
      if (null != coerceMainRouteResult) {
        const state2 = coerceMainRouteResult.state;
        if (null != state2) {
          if (0 === state.index) {
            if (0 !== state2.index) {
              const obj7 = require(3981) /* _createForOfIteratorHelperLoose */;
            }
          }
          let obj1 = require(3981) /* _createForOfIteratorHelperLoose */;
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
            const coerceGuildsRouteResult = require(3981) /* _createForOfIteratorHelperLoose */.coerceGuildsRoute(tmp5);
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
                let obj2 = require(491) /* v1 */;
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
              const CommonActions = require(1461) /* CommonActions */.CommonActions;
              obj2 = {};
              const merged1 = Object.assign(state);
              obj2["routes"] = items1;
              obj2["index"] = items1.length - 1;
              store.dispatch(CommonActions.reset(obj2));
            }
            const obj8 = require(3981) /* _createForOfIteratorHelperLoose */;
          }
        }
      }
      const obj6 = require(3981) /* _createForOfIteratorHelperLoose */;
    }
  }
};
