// Module ID: 9476
// Function ID: 73828
// Name: items
// Dependencies: [4042, 2]
// Exports: getVoiceChannelListInviteExperiment, useVoiceChannelListInviteExperiment

// Module 9476 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-05_voice_channel_list_invite_embed", label: "Voice Channel List Invite Embed", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
let closure_0 = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/messages/VoiceChannelListInviteExperiment.tsx");

export const getVoiceChannelListInviteExperiment = function getVoiceChannelListInviteExperiment(guildId) {
  return closure_0.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location });
};
export const useVoiceChannelListInviteExperiment = function useVoiceChannelListInviteExperiment(guildId) {
  return closure_0.useExperiment({ guildId: guildId.guildId, location: guildId.location });
};
