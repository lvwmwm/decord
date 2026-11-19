// Module ID: 18289
// Function ID: 18290
// Name: conjureStandaloneScenes
// Dependencies: [1072, 4648, 12226, 1099, 2]
// Exports: projectOpener

// Module 18289 (conjureStandaloneScenes)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import ChannelConstants from "ChannelConstants" /* 4648 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12226 */;
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
    } else if (null == arg1) {
      openConjureHomeScreenDefault(arg0);
    } else {
      const obj = router_utils;
      obj.transitionTo(Routes.CHANNEL(arg1, StaticChannelRoute.CONJURE, arg0));
    }
  };
}
