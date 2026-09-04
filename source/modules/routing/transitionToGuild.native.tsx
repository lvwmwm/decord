// Module ID: 7280
// Function ID: 7281
// Name: transitionToGuild
// Dependencies: [673, 7157, 5536, 1219, 2]
// Exports: transitionToGuild

// Module 7280 (transitionToGuild)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import transitionTo from "transitionTo" /* 1219 */;
import LayoutAnimation from "LayoutAnimation" /* 5536 */;
import getChannelIdForGuildTransition from "getChannelIdForGuildTransition" /* 7157 */;

const Routes = ME.Routes;
let result = set.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = getChannelIdForGuildTransition;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = LayoutAnimation.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "channel", delete: "getCurrentUser" });
  const obj2 = LayoutAnimation;
  obj = { navigationReplace: true };
  const obj3 = transitionTo;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
