// Module ID: 5959
// Function ID: 5960
// Name: transitionToGuild
// Dependencies: [676, 5839, 5371, 1222, 2]
// Exports: transitionToGuild

// Module 5959 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(5839) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5371) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "r", update: "w", delete: "style" });
  const obj2 = require(5371) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
