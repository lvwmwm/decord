// Module ID: 6761
// Function ID: 6762
// Name: transitionToGuild
// Dependencies: [1086, 6639, 6401, 1113, 2]
// Exports: transitionToGuild

// Module 6761 (transitionToGuild)
import Constants from "Constants" /* 1086 */;
import router_utils from "router_utils" /* 1113 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6401 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 6639 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id, arg1) {
  const obj = getChannelIdForGuildTransition;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(id);
  const obj2 = DeprecatedLayoutAnimation;
  const result = obj2.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "filter", delete: "section" });
  const transitionTo = router_utils.transitionTo;
  const obj3 = { navigationReplace: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(id, channelIdForGuildTransition);
  const merged = Object.assign(arg1);
  transitionTo(CHANNELResult, obj3);
};
