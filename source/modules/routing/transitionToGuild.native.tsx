// Module ID: 6690
// Function ID: 6691
// Name: transitionToGuild
// Dependencies: [676, 5653, 5217, 1222, 2]
// Exports: transitionToGuild

// Module 6690 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id) {
  let obj = require(5653) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(id);
  const result = require(5217) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "accessibilityRole", update: "key", delete: "justifyContent" });
  const obj2 = require(5217) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(id, channelIdForGuildTransition), obj);
};
