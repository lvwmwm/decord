// Module ID: 11500
// Function ID: 11501
// Name: conjureStandaloneScenes
// Dependencies: [1085, 2072, 1112, 2]
// Exports: projectOpener

// Module 11500 (conjureStandaloneScenes)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureStandaloneScenes.tsx");

export const ConjureScreenScenes = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
export function projectOpener(guildId, L) {
  let closure_1;
  let closure_0 = guildId;
  return (arg0, arg1) => {
    if (arg1 === guildId) {
      L(arg0);
    } else {
      const obj = router_utils;
      obj.transitionTo(Routes.CHANNEL(arg1, StaticChannelRoute.CONJURE, arg0));
    }
  };
}
