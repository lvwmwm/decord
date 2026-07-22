// Module ID: 10800
// Function ID: 83879
// Name: isLurkingGuildRoute
// Dependencies: []
// Exports: saveLastNonVoiceRoute, saveLastRoute

// Module 10800 (isLurkingGuildRoute)
function isLurkingGuildRoute(Routes) {
  let obj = arg1(dependencyMap[2]);
  obj = {};
  const RouteParam = arg1(dependencyMap[3]).RouteParam;
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
let closure_3 = importDefault(dependencyMap[0]);
const Routes = arg1(dependencyMap[1]).Routes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("actions/DefaultRouteActionCreators.tsx");

export const saveLastRoute = function saveLastRoute(pathname) {
  if (!isLurkingGuildRoute(pathname)) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "SAVE_LAST_ROUTE", path: pathname };
    obj.dispatch(obj);
  }
};
export const saveLastNonVoiceRoute = function saveLastNonVoiceRoute(Routes) {
  if (!isLurkingGuildRoute(Routes)) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "SAVE_LAST_NON_VOICE_ROUTE", path: Routes };
    obj.dispatch(obj);
  }
};
