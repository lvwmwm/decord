// Module ID: 6000
// Function ID: 6001
// Name: transitionToGuild
// Dependencies: [676, 5879, 5411, 1222, 2]
// Exports: transitionToGuild

// Module 6000 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(5879) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5411) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "call", delete: "jsx" });
  const obj2 = require(5411) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
