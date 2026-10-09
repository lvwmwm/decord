// Module ID: 12297
// Function ID: 12298
// Name: openConjureProject
// Dependencies: [1085, 2071, 1112, 2]
// Exports: openConjureForMe, openConjureProject

// Module 12297 (openConjureProject)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const target = "target";
const result = size.fileFinishedImporting("modules/conjure/projects/openConjureProject.tsx");

export const CONJURE_TARGET_PARAM = "target";
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
export const openConjureForMe = function openConjureForMe(arg0) {
  let str;
  const transitionTo = router_utils.transitionTo;
  const obj = { search: str.toString() };
  const obj2 = { [closure_1_4]: "user" };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(arg0, StaticChannelRoute.CONJURE);
  str = new URLSearchParams(obj2);
  transitionTo(CHANNELResult, obj);
};
