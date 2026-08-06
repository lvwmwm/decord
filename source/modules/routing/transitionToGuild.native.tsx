// Module ID: 5878
// Function ID: 5879
// Name: transitionToGuild
// Dependencies: [676, 5760, 5351, 1222, 2]
// Exports: transitionToGuild

// Module 5878 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(5760) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5351) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "channel", update: "flex", delete: "y" });
  const obj2 = require(5351) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
