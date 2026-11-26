// Module ID: 14289
// Function ID: 14290
// Name: openConjureProject
// Dependencies: [1071, 4899, 1098, 2]
// Exports: openConjureProject

// Module 14289 (openConjureProject)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProject.tsx");

export function openConjureProject(guildId, id) {
  let CHANNELResult;
  const CONJURE_PROJECT = StaticChannelRoute.CONJURE_PROJECT;
  const transitionTo = router_utils.transitionTo;
  router_utils;
  if (null == id) {
    CHANNELResult = Routes.CHANNEL(guildId, CONJURE_PROJECT);
  } else {
    CHANNELResult = Routes.CHANNEL(guildId, CONJURE_PROJECT, id);
  }
  transitionTo(CHANNELResult);
}
