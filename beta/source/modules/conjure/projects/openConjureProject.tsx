// Module ID: 13792
// Function ID: 13793
// Name: openConjureProject
// Dependencies: [1071, 4769, 1098, 2]
// Exports: openConjureProject

// Module 13792 (openConjureProject)
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
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
