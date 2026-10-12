// Module ID: 11199
// Function ID: 11200
// Name: DefaultRouteActionCreators
// Dependencies: [4751, 1085, 4944, 4957, 584, 2]
// Exports: saveLastNonVoiceRoute, saveLastRoute

// Module 11199 (DefaultRouteActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import matchPathCompat from "matchPathCompat" /* 4944 */;
import RouteUtils from "RouteUtils" /* 4957 */;
import LurkingStore from "LurkingStore" /* 4751 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("actions/DefaultRouteActionCreators.tsx");

export const saveLastRoute = function saveLastRoute(pathname) {
  let CHANNEL;
  let RouteParam;
  const obj = { path: CHANNEL(RouteParam.guildId()) };
  const matchPath = matchPathCompat.matchPath;
  CHANNEL = Routes.CHANNEL;
  matchPathCompat;
  RouteParam = RouteUtils.RouteParam;
  const matchPathResult = matchPath(pathname, obj);
  let guildId;
  if (matchPathResult != null) {
    const params = matchPathResult.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  const tmp5 = null == guildId || !LurkingStore.isLurking(guildId);
  if (tmp5) {
    const obj3 = { type: "SAVE_LAST_ROUTE", path: pathname };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
};
export const saveLastNonVoiceRoute = function saveLastNonVoiceRoute(Routes) {
  let CHANNEL;
  let RouteParam;
  const obj = { path: CHANNEL(RouteParam.guildId()) };
  const matchPath = matchPathCompat.matchPath;
  CHANNEL = Routes.CHANNEL;
  matchPathCompat;
  RouteParam = RouteUtils.RouteParam;
  const matchPathResult = matchPath(Routes, obj);
  let guildId;
  if (matchPathResult != null) {
    const params = matchPathResult.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  const tmp5 = null == guildId || !LurkingStore.isLurking(guildId);
  if (tmp5) {
    const obj3 = { type: "SAVE_LAST_NON_VOICE_ROUTE", path: Routes };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
};
