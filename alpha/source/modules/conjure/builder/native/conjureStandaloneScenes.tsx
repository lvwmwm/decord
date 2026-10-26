// Module ID: 11745
// Function ID: 11746
// Name: conjureStandaloneScenes
// Dependencies: [1087, 4830, 1114, 2]
// Exports: projectOpener

// Module 11745 (conjureStandaloneScenes)
import Constants from "Constants" /* 1087 */;
import router_utils from "router_utils" /* 1114 */;
import ChannelConstants from "ChannelConstants" /* 4830 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureStandaloneScenes.tsx");

export const ConjureScreenScenes = { PROJECTS: "PROJECTS", CHAT: "CHAT", DEBUG: "DEBUG" };
export function projectOpener(guildId, U) {
  let closure_1;
  let closure_0 = guildId;
  return (arg0, arg1) => {
    if (arg1 === guildId) {
      U(arg0);
    } else {
      const obj = router_utils;
      obj.transitionTo(Routes.CHANNEL(arg1, StaticChannelRoute.CONJURE, arg0));
    }
  };
}
