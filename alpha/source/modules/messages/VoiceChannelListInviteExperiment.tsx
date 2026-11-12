// Module ID: 11822
// Function ID: 11823
// Name: VoiceChannelListInviteExperiment
// Dependencies: [5467, 2]
// Exports: getVoiceChannelListInviteExperiment, useVoiceChannelListInviteExperiment

// Module 11822 (VoiceChannelListInviteExperiment)
import createExperiment from "module_5467" /* 5467 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "guild", id: "2026-05_voice_channel_list_invite_embed", label: "Voice Channel List Invite Embed", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: true } }];
let closure_0 = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/VoiceChannelListInviteExperiment.tsx");

export function getVoiceChannelListInviteExperiment(guildId) {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return closure_0.getCurrentConfig(obj);
}
export function useVoiceChannelListInviteExperiment(guildId) {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return closure_0.useExperiment(obj);
}
