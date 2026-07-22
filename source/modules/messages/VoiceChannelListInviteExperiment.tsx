// Module ID: 9469
// Function ID: 73787
// Name: items
// Dependencies: []
// Exports: getVoiceChannelListInviteExperiment, useVoiceChannelListInviteExperiment

// Module 9469 (items)
const _module = require(dependencyMap[0]);
let obj = { shapes: "<string:2805465090>", flex: "<string:4132503554>", sk: "<string:3678474733>", defaultConfig: { enabled: false } };
obj = { displayNameStylesEnabled: null, submitButtonEnabled: 154, config: { enabled: true } };
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
