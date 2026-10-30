// Module ID: 12047
// Function ID: 12048
// Name: conjureStandaloneScenes
// Dependencies: [1072, 4865, 1100, 2]
// Exports: projectOpener

// Module 12047 (conjureStandaloneScenes)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1100 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureStandaloneScenes.tsx");

export const ConjureScreenScenes = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
export function projectOpener(guildId, callback) {
  let closure_0 = guildId;
  let closure_1 = callback;
  return (arg0, arg1) => {
    if (arg1 === guildId) {
      callback(arg0);
    } else {
      const obj = router_utils;
      obj.transitionTo(Routes.CHANNEL(arg1, StaticChannelRoute.CONJURE, arg0));
    }
  };
}
