// Module ID: 6956
// Function ID: 6957
// Name: transitionToGuild
// Dependencies: [1074, 6834, 6089, 1101, 2]
// Exports: transitionToGuild

// Module 6956 (transitionToGuild)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6089 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 6834 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId, arg1) {
  const channelIdForGuildTransition = getChannelIdForGuildTransition.getChannelIdForGuildTransition(guildId);
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "paddingHorizontal", delete: "add" });
  const obj3 = router_utils;
  const obj4 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj4);
};
