// Module ID: 12266
// Function ID: 12267
// Name: openVibegrationsProject
// Dependencies: [1085, 2058, 1112, 2]
// Exports: openVibegrationsProject

// Module 12266 (openVibegrationsProject)
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/vibegrations/lib/openVibegrationsProject.tsx");

export const openVibegrationsProject = function openVibegrationsProject(id, projectId) {
  let CHANNELResult;
  const transitionTo = router_utils.transitionTo;
  router_utils;
  if (null == projectId) {
    CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS);
  } else {
    CHANNELResult = Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS, projectId);
  }
  transitionTo(CHANNELResult);
};
