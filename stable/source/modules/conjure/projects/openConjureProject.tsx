// Module ID: 12266
// Function ID: 12267
// Name: openConjureProject
// Dependencies: [1085, 2058, 1112, 2]
// Exports: openConjureProject

// Module 12266 (openConjureProject)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProject.tsx");

export const openConjureProject = function openConjureProject(id, projectId) {
  let CHANNELResult;
  const transitionTo = router_utils.transitionTo;
  router_utils;
  if (null == projectId) {
    CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.CONJURE);
  } else {
    CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.CONJURE, projectId);
  }
  transitionTo(CHANNELResult);
};
