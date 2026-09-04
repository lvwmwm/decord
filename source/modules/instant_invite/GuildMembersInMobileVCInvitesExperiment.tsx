// Module ID: 9775
// Function ID: 9776
// Name: apexExperiment
// Dependencies: [1468, 2]
// Exports: getGuildMembersInMobileVCInvitesExperiment

// Module 9775 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-guild-members-in-mobile-vc-invites", kind: "guild", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx");

export default apexExperiment;
export const getGuildMembersInMobileVCInvitesExperiment = function getGuildMembersInMobileVCInvitesExperiment(location) {
  return apexExperiment.getConfig({ location: location.location, guildId: location.guildId }).enabled;
};
