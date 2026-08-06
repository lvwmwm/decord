// Module ID: 10888
// Function ID: 10889
// Name: saveLastRoute
// Dependencies: [3913, 676, 4106, 4119, 709, 2]
// Exports: saveLastNonVoiceRoute, saveLastRoute

// Module 10888 (saveLastRoute)
import initialize from "initialize";
import { Routes } from "ME";

const require = arg1;
const result = require("matchPath").fileFinishedImporting("actions/DefaultRouteActionCreators.tsx");

export const saveLastRoute = function saveLastRoute(pathname) {
  let obj = require(4106) /* matchPath */;
  obj = { path: null };
  const RouteParam = require(4119) /* RouteParam */.RouteParam;
  obj[0] = Routes.CHANNEL(RouteParam.guildId());
  const matchPathResult = obj.matchPath(pathname, obj);
  let guildId;
  if (matchPathResult != null) {
    const params = matchPathResult.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  let tmp4 = null == guildId;
  if (!tmp4) {
    tmp4 = !initialize.isLurking(guildId);
  }
  if (tmp4) {
    obj = { type: "SAVE_LAST_ROUTE", path: null };
    obj[1] = pathname;
    importDefault(709).dispatch(obj);
    const obj3 = importDefault(709);
  }
};
export const saveLastNonVoiceRoute = function saveLastNonVoiceRoute(Routes) {
  let obj = require(4106) /* matchPath */;
  obj = { path: null };
  const RouteParam = require(4119) /* RouteParam */.RouteParam;
  obj[0] = Routes.CHANNEL(RouteParam.guildId());
  const matchPathResult = obj.matchPath(Routes, obj);
  let guildId;
  if (matchPathResult != null) {
    const params = matchPathResult.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  let tmp4 = null == guildId;
  if (!tmp4) {
    tmp4 = !initialize.isLurking(guildId);
  }
  if (tmp4) {
    obj = { type: "SAVE_LAST_NON_VOICE_ROUTE", path: null };
    obj[1] = Routes;
    importDefault(709).dispatch(obj);
    const obj3 = importDefault(709);
  }
};
