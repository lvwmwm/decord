// Module ID: 9985
// Function ID: 9986
// Name: ChannelTabRoutes
// Dependencies: [1072, 4679, 4874, 1113, 4861, 4121, 1100, 2]
// Exports: getFriendsTabLocation, getTabLocationForPath

// Module 9985 (ChannelTabRoutes)
import _mod1100 from "module_1100" /* 1100 */;
import intl6 from "intl" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import matchPathCompat from "matchPathCompat" /* 4861 */;
import RouteUtils from "RouteUtils" /* 4874 */;
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4679 */;
import size from "module_2" /* 2 */;

let Routes;
let StaticChannelRoute;
let c3;
let hasOwnProperty;
function getRouteTabForLocation(location) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let pathname;
  let search;
  let tmp5;
  ({ pathname, search } = location);
  if (search === undefined) {
    search = "";
  }
  let str = location.hash;
  if (str === undefined) {
    str = "";
  }
  if (pathname === Routes.FRIENDS) {
    const obj2 = { routePath: pathname, routeLabel: intl5.string(intl6.t.TdEu5X) };
    intl5 = intl6.intl;
    tmp5 = obj2;
  } else if (pathname.startsWith(Routes.COLLECTIBLES_SHOP)) {
    const obj3 = { routePath: Routes.COLLECTIBLES_SHOP, routeLabel: intl4.string(intl6.t.pWG4ze) };
    intl4 = intl6.intl;
    tmp5 = obj3;
  } else if (pathname.startsWith(Routes.QUEST_HOME)) {
    const obj4 = { routePath: Routes.QUEST_HOME, routeLabel: intl3.string(intl6.t.JALI2K) };
    intl3 = intl6.intl;
    tmp5 = obj4;
  } else if (pathname.startsWith(Routes.APPLICATION_STORE)) {
    const obj5 = { routePath: Routes.APPLICATION_STORE, routeLabel: intl2.string(intl6.t.Ipxkog) };
    intl2 = intl6.intl;
    tmp5 = obj5;
  } else {
    tmp5 = null;
    const obj6 = { path, exact: true };
    const obj = matchPathCompat;
    const tmp2 = require;
    if (null != obj.matchPath(pathname, obj6)) {
      const _HermesInternal = HermesInternal;
      const obj7 = { routePath: "" + pathname + search + str, routeLabel: intl.string(_modDef4121.uk6jhJ) };
      intl = tmp2(1113).intl;
      tmp5 = obj7;
    }
  }
  return tmp5;
}
({ ME: c3, Routes } = Constants);
({ isStaticChannelRoute: hasOwnProperty, StaticChannelRoute } = ChannelConstants);
const CHANNEL = Routes.CHANNEL;
const RouteParam = RouteUtils.RouteParam;
const path = CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?");
const CHANNEL2 = Routes.CHANNEL;
const RouteParam2 = RouteUtils.RouteParam;
const guildIdResult = RouteParam2.guildId();
const RouteParam3 = RouteUtils.RouteParam;
const path2 = CHANNEL2(guildIdResult, RouteParam3.channelId(), ":messageId?");
const result = size.fileFinishedImporting("modules/tabs/ChannelTabRoutes.tsx");

export function getFriendsTabLocation() {
  let intl;
  const obj = { kind: "route", routePath: Routes.FRIENDS, routeLabel: intl.string(intl6.t.TdEu5X) };
  intl = intl6.intl;
  return obj;
}
export { getRouteTabForLocation };
export function getTabLocationForPath(path) {
  let tmp9;
  const obj = _mod1100;
  const parsePathResult = obj.parsePath(path);
  const pathname = parsePathResult.pathname;
  const obj2 = { pathname, search: parsePathResult.search, hash: parsePathResult.hash };
  const tmp4 = getRouteTabForLocation(obj2);
  if (null != tmp4) {
    const obj3 = { kind: "route" };
    const merged = Object.assign(tmp4);
    return obj3;
  } else {
    const obj4 = { path: path2, exact: true };
    const tmpResult = matchPathCompat;
    const matchPathResult = tmpResult.matchPath(pathname, obj4);
    if (null != matchPathResult) {
      if (!hasOwnProperty(matchPathResult.params.channelId)) {
        const params = matchPathResult.params;
        const guildId = params.guildId;
        const obj5 = { kind: "channel", channelId: params.channelId, guildId: tmp9 };
        tmp9 = null;
        if (guildId !== _false) {
          tmp9 = guildId;
        }
        return obj5;
      }
    }
    return null;
  }
}
