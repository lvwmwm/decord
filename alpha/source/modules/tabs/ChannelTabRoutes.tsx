// Module ID: 11382
// Function ID: 11383
// Name: ChannelTabRoutes
// Dependencies: [1071, 4773, 4968, 4955, 1112, 4192, 1099, 2]
// Exports: getChannelTabPageName, getFriendsTabLocation, getTabLocationForPath, isSameTabLocation

// Module 11382 (ChannelTabRoutes)
import _mod1099 from "module_1099" /* 1099 */;
import intl6 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import matchPathCompat from "matchPathCompat" /* 4955 */;
import RouteUtils from "RouteUtils" /* 4968 */;
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4773 */;
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
    const obj2 = { kind: "route", routePath: pathname, routeLabel: intl5.string(intl6.t.TdEu5X) };
    intl5 = intl6.intl;
    tmp5 = obj2;
  } else if (pathname.startsWith(Routes.COLLECTIBLES_SHOP)) {
    const obj3 = { kind: "route", routePath: Routes.COLLECTIBLES_SHOP, routeLabel: intl4.string(intl6.t.pWG4ze) };
    intl4 = intl6.intl;
    tmp5 = obj3;
  } else if (pathname.startsWith(Routes.QUEST_HOME)) {
    const obj4 = { kind: "route", routePath: Routes.QUEST_HOME, routeLabel: intl3.string(intl6.t.JALI2K) };
    intl3 = intl6.intl;
    tmp5 = obj4;
  } else if (pathname.startsWith(Routes.APPLICATION_STORE)) {
    const obj5 = { kind: "route", routePath: Routes.APPLICATION_STORE, routeLabel: intl2.string(intl6.t.Ipxkog) };
    intl2 = intl6.intl;
    tmp5 = obj5;
  } else {
    tmp5 = null;
    const obj6 = { path, exact: true };
    const obj = matchPathCompat;
    const tmp2 = require;
    if (null != obj.matchPath(pathname, obj6)) {
      const _HermesInternal = HermesInternal;
      const obj7 = { kind: "route", routePath: "" + pathname + search + str, routeLabel: intl.string(_modDef4192.uk6jhJ) };
      intl = tmp2(1112).intl;
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

export function getChannelTabPageName(routePath) {
  const first = routePath.split(/[?#]/)[0];
  if (Routes.FRIENDS === first) {
    return "friends";
  } else if (Routes.COLLECTIBLES_SHOP === first) {
    return "shop";
  } else if (Routes.QUEST_HOME === first) {
    return "quests";
  } else if (Routes.APPLICATION_STORE === first) {
    return "nitro";
  } else {
    let str = "other";
    const obj2 = { path, exact: true };
    const obj = matchPathCompat;
    if (null != obj.matchPath(first, obj2)) {
      str = "conjure";
    }
    return str;
  }
}
export function getFriendsTabLocation() {
  let intl;
  const obj = { kind: "route", routePath: Routes.FRIENDS, routeLabel: intl.string(intl6.t.TdEu5X) };
  intl = intl6.intl;
  return obj;
}
export { getRouteTabForLocation };
export function getTabLocationForPath(path) {
  let tmp9;
  const obj = _mod1099;
  const parsePathResult = obj.parsePath(path);
  const pathname = parsePathResult.pathname;
  const obj2 = { pathname, search: parsePathResult.search, hash: parsePathResult.hash };
  const tmp4 = getRouteTabForLocation(obj2);
  if (null != tmp4) {
    return tmp4;
  } else {
    const obj3 = { path: path2, exact: true };
    const tmpResult = matchPathCompat;
    const matchPathResult = tmpResult.matchPath(pathname, obj3);
    if (null != matchPathResult) {
      if (!hasOwnProperty(matchPathResult.params.channelId)) {
        const params = matchPathResult.params;
        const guildId = params.guildId;
        const obj4 = { kind: "channel", channelId: params.channelId, guildId: tmp9 };
        tmp9 = null;
        if (guildId !== _false) {
          tmp9 = guildId;
        }
        return obj4;
      }
    }
    return null;
  }
}
export function isSameTabLocation(atResult, routeTabForLocation1) {
  let tmp;
  if ("route" === atResult.kind) {
    tmp = "route" === routeTabForLocation1.kind && atResult.routePath === routeTabForLocation1.routePath;
  } else {
    tmp = "channel" === routeTabForLocation1.kind && atResult.channelId === routeTabForLocation1.channelId;
  }
  return tmp;
}
