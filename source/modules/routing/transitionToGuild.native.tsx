// Module ID: 5957
// Function ID: 5958
// Name: transitionToGuild
// Dependencies: [676, 5839, 5371, 1222, 2]
// Exports: transitionToGuild

// Module 5957 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(5839) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5371) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "accessibilityRole", delete: "fill" });
  const obj2 = require(5371) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
