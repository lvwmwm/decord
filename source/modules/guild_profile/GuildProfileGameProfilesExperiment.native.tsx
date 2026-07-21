// Module ID: 11868
// Function ID: 91873
// Name: useGuildProfileGameProfilesExperiment
// Dependencies: []
// Exports: useGuildProfileGameProfilesExperiment

// Module 11868 (useGuildProfileGameProfilesExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_profile/GuildProfileGameProfilesExperiment.native.tsx");

export const useGuildProfileGameProfilesExperiment = function useGuildProfileGameProfilesExperiment(location) {
  return closure_0.useConfig({ location: location.location });
};
