// Module ID: 13261
// Function ID: 13262
// Name: openConjureProject
// Dependencies: [1072, 5026, 1099, 2]
// Exports: openConjureProject

// Module 13261 (openConjureProject)
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import ChannelConstants from "ChannelConstants" /* 5026 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProject.tsx");

export function openConjureProject(guildId, id) {
  let CHANNELResult;
  const transitionTo = router_utils.transitionTo;
  router_utils;
  if (null == id) {
    CHANNELResult = Routes.CHANNEL(guildId, StaticChannelRoute.CONJURE);
  } else {
    CHANNELResult = Routes.CHANNEL(guildId, StaticChannelRoute.CONJURE, id);
  }
  transitionTo(CHANNELResult);
}
