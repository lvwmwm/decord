// Module ID: 12292
// Function ID: 12293
// Name: conjureStandaloneScenes
// Dependencies: [1072, 4999, 1099, 2]
// Exports: projectOpener

// Module 12292 (conjureStandaloneScenes)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import ChannelConstants from "ChannelConstants" /* 4999 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureStandaloneScenes.tsx");

export const ConjureScreenScenes = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
export function projectOpener(guildId, openHere) {
  let closure_0 = guildId;
  return (arg0, arg1) => {
    if (arg1 === guildId) {
      openHere(arg0);
    } else {
      const obj = router_utils;
      obj.transitionTo(Routes.CHANNEL(arg1, StaticChannelRoute.CONJURE, arg0));
    }
  };
}
