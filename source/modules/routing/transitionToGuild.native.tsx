// Module ID: 5851
// Function ID: 5852
// Name: transitionToGuild
// Dependencies: [676, 5733, 5297, 1222, 2]
// Exports: transitionToGuild

// Module 5851 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id) {
  let obj = require(5733) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(id);
  const result = require(5297) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "channel", update: "call", delete: "y" });
  const obj2 = require(5297) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(id, channelIdForGuildTransition), obj);
};
