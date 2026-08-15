// Module ID: 7302
// Function ID: 7303
// Name: transitionToGuild
// Dependencies: [676, 7197, 5443, 1222, 2]
// Exports: transitionToGuild

// Module 7302 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(7197) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5443) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "accessibilityRole", delete: "limit" });
  const obj2 = require(5443) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
