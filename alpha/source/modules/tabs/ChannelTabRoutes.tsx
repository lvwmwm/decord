// Module ID: 10278
// Function ID: 10279
// Name: ChannelTabRoutes
// Dependencies: [1072, 5162, 5367, 1113, 5354, 4131, 2]
// Exports: getRouteTabForLocation

// Module 10278 (ChannelTabRoutes)
import Constants from "Constants" /* 1072 */;
import intl6 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ChannelConstants from "ChannelConstants" /* 5162 */;
import matchPathCompat from "matchPathCompat" /* 5354 */;
import RouteUtils from "RouteUtils" /* 5367 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL = Routes.CHANNEL;
const RouteParam = RouteUtils.RouteParam;
const path = CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?");
const result = size.fileFinishedImporting("modules/tabs/ChannelTabRoutes.tsx");

export function getRouteTabForLocation(location) {
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
      const obj7 = { routePath: "" + pathname + search + str, routeLabel: intl.string(_modDef4131.uk6jhJ) };
      intl = tmp2(1113).intl;
      tmp5 = obj7;
    }
  }
  return tmp5;
}
