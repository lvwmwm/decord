// Module ID: 5897
// Function ID: 5898
// Name: transitionToGuild
// Dependencies: [676, 5779, 5370, 1222, 2]
// Exports: transitionToGuild

// Module 5897 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(5779) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5370) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "channel", update: "to", delete: "y" });
  const obj2 = require(5370) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
