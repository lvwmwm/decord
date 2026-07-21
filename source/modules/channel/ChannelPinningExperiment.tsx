// Module ID: 11800
// Function ID: 91561
// Name: useCanPinChannelsInGuild
// Dependencies: []
// Exports: useCanPinChannelsInGuild

// Module 11800 (useCanPinChannelsInGuild)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "RTC_CONNECTION_LOSS_RATE", 0: "handleJoinThreadVoice", defaultConfig: { canPinEverywhere: false }, variations: { [1]: { canPinEverywhere: true } } };
let closure_2 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/channel/ChannelPinningExperiment.tsx");

export const useCanPinChannelsInGuild = function useCanPinChannelsInGuild(guild_id) {
  let obj = require(dependencyMap[1]);
  const optInEnabledForGuild = obj.useOptInEnabledForGuild(guild_id);
  const canPinEverywhere = closure_2.useConfig({ location: "useCanPinChannelsInGuild" }).canPinEverywhere;
  obj = {};
  let tmp2 = optInEnabledForGuild;
  if (!optInEnabledForGuild) {
    tmp2 = canPinEverywhere;
  }
  obj.canPin = tmp2;
  obj.pinningNewlyAvailable = !optInEnabledForGuild && canPinEverywhere;
  return obj;
};
