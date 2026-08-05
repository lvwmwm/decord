// Module ID: 10876
// Function ID: 10877
// Name: getVoiceChannelListInviteExperiment
// Dependencies: [4167, 2]
// Exports: getVoiceChannelListInviteExperiment, useVoiceChannelListInviteExperiment

// Module 10876 (getVoiceChannelListInviteExperiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: true } }];
let closure_0 = createExperiment.createExperiment({ kind: "guild", id: "2026-05_voice_channel_list_invite_embed", label: "Voice Channel List Invite Embed", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/messages/VoiceChannelListInviteExperiment.tsx");

export const getVoiceChannelListInviteExperiment = function getVoiceChannelListInviteExperiment(guildId) {
  return closure_0.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location });
};
export const useVoiceChannelListInviteExperiment = function useVoiceChannelListInviteExperiment(guildId) {
  return closure_0.useExperiment({ guildId: guildId.guildId, location: guildId.location });
};
