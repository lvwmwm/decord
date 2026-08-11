// Module ID: 12209
// Function ID: 12210
// Name: useGuildProfileGameProfilesExperiment
// Dependencies: [1471, 2]
// Exports: useGuildProfileGameProfilesExperiment

// Module 12209 (useGuildProfileGameProfilesExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-07-server-tag-game-profiles-mobile", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/guild_profile/GuildProfileGameProfilesExperiment.native.tsx");

export const useGuildProfileGameProfilesExperiment = function useGuildProfileGameProfilesExperiment(location) {
  return closure_0.useConfig({ location: location.location });
};
