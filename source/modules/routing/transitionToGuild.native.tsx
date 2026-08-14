// Module ID: 6021
// Function ID: 6022
// Name: transitionToGuild
// Dependencies: [676, 5900, 5432, 1222, 2]
// Exports: transitionToGuild

// Module 6021 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(5900) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5432) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "call", delete: "type" });
  const obj2 = require(5432) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
