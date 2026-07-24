// Module ID: 5737
// Function ID: 49337
// Name: transitionToGuild
// Dependencies: [653, 5600, 5162, 1198, 2]
// Exports: transitionToGuild

// Module 5737 (transitionToGuild)
import { Routes } from "ME";

let result = require("DeprecatedLayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(5600) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5162) /* DeprecatedLayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: undefined, update: undefined, delete: undefined });
  const obj2 = require(5162) /* DeprecatedLayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1198) /* shouldNavigate */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
