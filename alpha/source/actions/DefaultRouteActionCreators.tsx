// Module ID: 11833
// Function ID: 11834
// Name: DefaultRouteActionCreators
// Dependencies: [4938, 1084, 5041, 5054, 584, 2]
// Exports: saveLastNonVoiceRoute, saveLastRoute

// Module 11833 (DefaultRouteActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import matchPathCompat from "matchPathCompat" /* 5041 */;
import RouteUtils from "RouteUtils" /* 5054 */;
import LurkingStore from "LurkingStore" /* 4938 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("actions/DefaultRouteActionCreators.tsx");

export function saveLastRoute(pathname) {
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
}
export function saveLastNonVoiceRoute(Routes) {
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
}
