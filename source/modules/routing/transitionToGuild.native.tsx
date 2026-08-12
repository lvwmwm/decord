// Module ID: 5998
// Function ID: 5999
// Name: transitionToGuild
// Dependencies: [676, 5878, 5410, 1222, 2]
// Exports: transitionToGuild

// Module 5998 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(5878) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5410) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "accessibilityRole", delete: "string" });
  const obj2 = require(5410) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
