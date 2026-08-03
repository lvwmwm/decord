// Module ID: 5856
// Function ID: 5857
// Name: transitionToGuild
// Dependencies: [676, 5719, 5283, 1222, 2]
// Exports: transitionToGuild

// Module 5856 (transitionToGuild)
import { Routes } from "ME";

let result = require("LayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(id) {
  let obj = require(5719) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(id);
  const result = require(5283) /* LayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: "w", update: "text", delete: "text" });
  const obj2 = require(5283) /* LayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(id, channelIdForGuildTransition), obj);
};
