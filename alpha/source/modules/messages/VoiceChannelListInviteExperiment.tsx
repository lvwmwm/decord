// Module ID: 10241
// Function ID: 10242
// Name: VoiceChannelListInviteExperiment
// Dependencies: [5354, 2]
// Exports: getVoiceChannelListInviteExperiment, useVoiceChannelListInviteExperiment

// Module 10241 (VoiceChannelListInviteExperiment)
import createExperiment from "module_5354" /* 5354 */;
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
