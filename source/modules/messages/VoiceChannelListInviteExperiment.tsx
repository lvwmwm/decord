// Module ID: 9468
// Function ID: 73763
// Name: items
// Dependencies: []
// Exports: getVoiceChannelListInviteExperiment, useVoiceChannelListInviteExperiment

// Module 9468 (items)
const _module = require(dependencyMap[0]);
let obj = { y: "<string:2802253826>", createBackgroundHighlight: "<string:3578855426>", y: "<string:3544256951>", defaultConfig: { enabled: false } };
obj = { -1174339580: false, -1169096700: false, config: { enabled: true } };
const items = [obj];
obj.treatments = items;
let closure_0 = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/messages/VoiceChannelListInviteExperiment.tsx");

export const getVoiceChannelListInviteExperiment = function getVoiceChannelListInviteExperiment(guildId) {
  return closure_0.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location });
};
export const useVoiceChannelListInviteExperiment = function useVoiceChannelListInviteExperiment(guildId) {
  return closure_0.useExperiment({ guildId: guildId.guildId, location: guildId.location });
};
