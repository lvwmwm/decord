// Module ID: 18242
// Function ID: 18243
// Name: conjureStandaloneScenes
// Dependencies: [1071, 4769, 1098, 12297, 2]
// Exports: projectOpener, pushServerProjectScreen, takeServerProjectEntryPoint

// Module 18242 (conjureStandaloneScenes)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12297 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/builder/native/conjureStandaloneScenes.tsx");

export const ConjureScreenScenes = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
export function pushServerProjectScreen(guildId, arg1, project_list) {
  const CHANNELResult = Routes.CHANNEL(guildId, StaticChannelRoute.CONJURE_PROJECT, arg1);
  if (null != project_list) {
    const result = map.set(CHANNELResult, project_list);
  } else {
    map.delete(CHANNELResult);
  }
  const obj = router_utils;
  obj.transitionTo(CHANNELResult, { navigationReplace: false });
}
export function takeServerProjectEntryPoint(guildId, projectId) {
  const CHANNELResult = Routes.CHANNEL(guildId, StaticChannelRoute.CONJURE_PROJECT, projectId);
  const value = map.get(CHANNELResult);
  map.delete(CHANNELResult);
  return value;
}
export function projectOpener(guildId, arg1) {
  let closure_0 = guildId;
  let closure_1 = arg1;
  return (arg0, arg1) => {
    if (arg1 === guildId) {
      closure_1(arg0);
    } else if (null == arg1) {
      openConjureHomeScreenDefault(arg0);
    } else {
      const obj = router_utils;
      obj.transitionTo(Routes.CHANNEL(arg1, StaticChannelRoute.CONJURE_PROJECT, arg0));
    }
  };
}
