// Module ID: 9464
// Function ID: 73749
// Name: getVoiceChannelListInviteExperiment
// Dependencies: []
// Exports: getVoiceChannelListInviteExperiment, useVoiceChannelListInviteExperiment

// Module 9464 (getVoiceChannelListInviteExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": false, "Bool(false)": false, config: { enabled: true } };
const items = [obj];
let closure_0 = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/messages/VoiceChannelListInviteExperiment.tsx");

export const getVoiceChannelListInviteExperiment = function getVoiceChannelListInviteExperiment(guildId) {
  return closure_0.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location });
};
export const useVoiceChannelListInviteExperiment = function useVoiceChannelListInviteExperiment(guildId) {
  return closure_0.useExperiment({ guildId: guildId.guildId, location: guildId.location });
};
