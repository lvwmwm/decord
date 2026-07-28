// Module ID: 6669
// Function ID: 58773
// Name: transitionToGuild
// Dependencies: [653, 5635, 5195, 1198, 2]
// Exports: transitionToGuild

// Module 6669 (transitionToGuild)
import { Routes } from "ME";

let result = require("DeprecatedLayoutAnimation").fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(5635) /* getChannelIdForGuildTransition */;
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(5195) /* DeprecatedLayoutAnimation */.DeprecatedLayoutAnimation({ duration: 0, create: undefined, update: undefined, delete: undefined });
  const obj2 = require(5195) /* DeprecatedLayoutAnimation */;
  obj = { navigationReplace: true };
  const obj3 = require(1198) /* shouldNavigate */;
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
