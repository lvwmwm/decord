// Module ID: 10810
// Function ID: 83928
// Name: isLurkingGuildRoute
// Dependencies: [3759, 653, 3952, 3965, 686, 2]
// Exports: saveLastNonVoiceRoute, saveLastRoute

// Module 10810 (isLurkingGuildRoute)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Routes } from "ME";

const require = arg1;
function isLurkingGuildRoute(Routes) {
  let obj = require(3952) /* matchPath */;
  obj = {};
  const RouteParam = require(3965) /* isPseudoGuildId */.RouteParam;
  obj.path = Routes.CHANNEL(RouteParam.guildId());
  const matchPathResult = obj.matchPath(Routes, obj);
  let guildId;
  if (null != matchPathResult) {
    const params = matchPathResult.params;
    if (null != params) {
      guildId = params.guildId;
    }
  }
  let tmp3 = null == guildId;
  if (!tmp3) {
    tmp3 = !lurking.isLurking(guildId);
  }
  return !tmp3;
}
const result = require("matchPath").fileFinishedImporting("actions/DefaultRouteActionCreators.tsx");

export const saveLastRoute = function saveLastRoute(pathname) {
  if (!isLurkingGuildRoute(pathname)) {
    let obj = importDefault(686);
    obj = { type: "SAVE_LAST_ROUTE", path: pathname };
    obj.dispatch(obj);
  }
};
export const saveLastNonVoiceRoute = function saveLastNonVoiceRoute(Routes) {
  if (!isLurkingGuildRoute(Routes)) {
    let obj = importDefault(686);
    obj = { type: "SAVE_LAST_NON_VOICE_ROUTE", path: Routes };
    obj.dispatch(obj);
  }
};
