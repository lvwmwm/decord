// Module ID: 7342
// Function ID: 7343
// Name: transitionToGuild
// Dependencies: [1074, 7217, 5581, 1100, 2]
// Exports: transitionToGuild

// Module 7342 (transitionToGuild)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import transitionTo from "transitionTo" /* 1100 */;
import LayoutAnimation from "LayoutAnimation" /* 5581 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 7217 */;

const Routes = ME.Routes;
let result = set.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = getChannelIdForGuildTransition;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = LayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "WireType", delete: "isArray" });
  const obj2 = LayoutAnimation;
  obj = { navigationReplace: true };
  const obj3 = transitionTo;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
