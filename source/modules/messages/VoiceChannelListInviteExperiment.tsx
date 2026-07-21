// Module ID: 9468
// Function ID: 73774
// Name: items
// Dependencies: []
// Exports: getVoiceChannelListInviteExperiment, useVoiceChannelListInviteExperiment

// Module 9468 (items)
const _module = require(dependencyMap[0]);
let obj = { "Bool(false)": "<string:2803105794>", "Bool(false)": "<string:2018574338>", "Bool(false)": "<string:3762360787>", defaultConfig: { enabled: false } };
obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: false, 炖锅: false, config: { enabled: true } };
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
