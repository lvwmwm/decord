// Module ID: 9129
// Function ID: 9130
// Name: apexExperiment
// Dependencies: [1471, 2]
// Exports: getGuildMembersInMobileVCInvitesExperiment

// Module 9129 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-guild-members-in-mobile-vc-invites", kind: "guild", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/instant_invite/GuildMembersInMobileVCInvitesExperiment.tsx");

export default apexExperiment;
export const getGuildMembersInMobileVCInvitesExperiment = function getGuildMembersInMobileVCInvitesExperiment(location) {
  return apexExperiment.getConfig({ location: location.location, guildId: location.guildId }).enabled;
};
