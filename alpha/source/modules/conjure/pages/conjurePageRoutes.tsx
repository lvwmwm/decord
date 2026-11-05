// Module ID: 7536
// Function ID: 7537
// Name: conjurePageRoutes
// Dependencies: [1072, 4999, 5179, 5192, 2]
// Exports: conjureOpenProjectId, conjurePageProjectId, conjurePageRoute, conjureServerHomeRoute, conjureServerProjectRoute, isConjurePagePath

// Module 7536 (conjurePageRoutes)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4999 */;
import matchPathCompat from "matchPathCompat" /* 5179 */;
import RouteUtils from "RouteUtils" /* 5192 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const items = [Routes.CONJURE, Routes.CONJURE_PROJECT(":projectId")];
const CHANNEL = Routes.CHANNEL;
const RouteParam = RouteUtils.RouteParam;
const CHANNELResult = CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE_PROJECT, ":projectId");
const hasOwnProperty = CHANNELResult;
const result = size.fileFinishedImporting("modules/conjure/pages/conjurePageRoutes.tsx");

export const CONJURE_PAGE_PATHS = items;
export function conjurePageRoute(arg0) {
  let CONJURE;
  if (null == arg0) {
    CONJURE = Routes.CONJURE;
  } else {
    CONJURE = Routes.CONJURE_PROJECT(arg0);
  }
  return CONJURE;
}
export function isConjurePagePath(pathname) {
  const obj = matchPathCompat;
  const obj2 = { path: items, exact: true };
  return null != obj.matchPath(pathname, obj2);
}
export const CONJURE_SERVER_PROJECT_PATH = CHANNELResult;
export function conjureServerProjectRoute(result, arg1) {
  return Routes.CHANNEL(result, StaticChannelRoute.CONJURE_PROJECT, arg1);
}
export function conjureServerHomeRoute(arg0) {
  return Routes.CHANNEL(arg0, StaticChannelRoute.CONJURE);
}
export function conjurePageProjectId(pathname) {
  const obj = matchPathCompat;
  const obj2 = { path: Routes.CONJURE_PROJECT(":projectId"), exact: true };
  const matchPathResult = obj.matchPath(pathname, obj2);
  let projectId;
  if (matchPathResult != null) {
    projectId = matchPathResult.params.projectId;
  }
  if (projectId == null) {
    projectId = null;
  }
  return projectId;
}
export function conjureOpenProjectId(pathname) {
  const obj = matchPathCompat;
  const obj2 = { path: Routes.CONJURE_PROJECT(":projectId"), exact: true };
  const matchPathResult = obj.matchPath(pathname, obj2);
  let projectId;
  if (matchPathResult != null) {
    projectId = matchPathResult.params.projectId;
  }
  if (projectId == null) {
    projectId = null;
  }
  if (projectId == null) {
    const obj3 = { path: hasOwnProperty, exact: true };
    const tmpResult = matchPathCompat;
    const matchPathResult1 = tmpResult.matchPath(pathname, obj3);
    let projectId1;
    if (matchPathResult1 != null) {
      projectId1 = matchPathResult1.params.projectId;
    }
    projectId = projectId1;
  }
  if (projectId == null) {
    projectId = null;
  }
  return projectId;
}
