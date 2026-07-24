// Module ID: 11908
// Function ID: 92190
// Name: useGuildProfileGameProfilesExperiment
// Dependencies: [1428, 2]
// Exports: useGuildProfileGameProfilesExperiment

// Module 11908 (useGuildProfileGameProfilesExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-server-tag-game-profiles-mobile", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/guild_profile/GuildProfileGameProfilesExperiment.native.tsx");

export const useGuildProfileGameProfilesExperiment = function useGuildProfileGameProfilesExperiment(location) {
  return closure_0.useConfig({ location: location.location });
};
