// Module ID: 5732
// Function ID: 49299
// Name: transitionToGuild
// Dependencies: []
// Exports: transitionToGuild

// Module 5732 (transitionToGuild)
const Routes = require(dependencyMap[0]).Routes;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/routing/transitionToGuild.native.tsx");

export const transitionToGuild = function transitionToGuild(guildId) {
  let obj = require(dependencyMap[1]);
  const channelIdForGuildTransition = obj.getChannelIdForGuildTransition(guildId);
  const result = require(dependencyMap[2]).DeprecatedLayoutAnimation({ duration: 0, create: undefined, update: undefined, delete: undefined });
  const obj2 = require(dependencyMap[2]);
  obj = { navigationReplace: true };
  const obj3 = require(dependencyMap[3]);
  const merged = Object.assign(arg1);
  obj3.transitionTo(Routes.CHANNEL(guildId, channelIdForGuildTransition), obj);
};
