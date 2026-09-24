// Module ID: 7618
// Function ID: 7619
// Name: transitionToGuild
// Dependencies: [1078, 7496, 7258, 1105, 2]
// Exports: transitionToGuild

// Module 7618 (transitionToGuild)
import Constants from "Constants" /* 1078 */;
import router_utils from "router_utils" /* 1105 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 7258 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 7496 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId, arg1) {
  const channelIdForGuildTransition = getChannelIdForGuildTransition.getChannelIdForGuildTransition(guildId);
  const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "unicodeVersion", delete: "Text" });
  const obj3 = router_utils;
  const obj4 = { navigationReplace: true };
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj4);
};
