// Module ID: 6760
// Function ID: 6761
// Name: transitionToGuild
// Dependencies: [1074, 6638, 5893, 1101, 2]
// Exports: transitionToGuild

// Module 6760 (transitionToGuild)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5893 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 6638 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id, arg1) {
  const obj = getChannelIdForGuildTransition;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(id);
  const obj2 = DeprecatedLayoutAnimation;
  const result = obj2.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "dispatch", delete: "isArray" });
  const transitionTo = router_utils.transitionTo;
  const obj3 = { navigationReplace: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(id, channelIdForGuildTransition);
  const merged = Object.assign(arg1);
  transitionTo(CHANNELResult, obj3);
};
