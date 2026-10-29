// Module ID: 11854
// Function ID: 11855
// Name: conjureStandaloneScenes
// Dependencies: [1084, 4864, 1111, 2]
// Exports: projectOpener

// Module 11854 (conjureStandaloneScenes)
import Constants from "Constants" /* 1084 */;
import router_utils from "router_utils" /* 1111 */;
import ChannelConstants from "ChannelConstants" /* 4864 */;
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
