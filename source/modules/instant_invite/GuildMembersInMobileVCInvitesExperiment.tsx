// Module ID: 9963
// Function ID: 9964
// Name: apexExperiment
// Dependencies: [1467, 2]
// Exports: getGuildMembersInMobileVCInvitesExperiment

// Module 9963 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-guild-members-in-mobile-vc-invites", kind: "guild", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx");

export default apexExperiment;
export const getGuildMembersInMobileVCInvitesExperiment = function getGuildMembersInMobileVCInvitesExperiment(location) {
  return apexExperiment.getConfig({ location: location.location, guildId: location.guildId }).enabled;
};
