// Module ID: 9130
// Function ID: 9131
// Name: GuildMembersInMobileVCInvitesExperiment
// Dependencies: [1448, 2]
// Exports: getGuildMembersInMobileVCInvitesExperiment

// Module 9130 (GuildMembersInMobileVCInvitesExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-09-guild-members-in-mobile-vc-invites", kind: "guild", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx");

export default apexExperiment;
export function getGuildMembersInMobileVCInvitesExperiment(location) {
  const obj = { location: location.location, guildId: location.guildId };
  return apexExperiment.getConfig(obj).enabled;
}
