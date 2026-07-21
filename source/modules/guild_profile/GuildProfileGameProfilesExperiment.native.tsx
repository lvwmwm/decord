// Module ID: 11868
// Function ID: 91885
// Name: useGuildProfileGameProfilesExperiment
// Dependencies: []
// Exports: useGuildProfileGameProfilesExperiment

// Module 11868 (useGuildProfileGameProfilesExperiment)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_profile/GuildProfileGameProfilesExperiment.native.tsx");

export const useGuildProfileGameProfilesExperiment = function useGuildProfileGameProfilesExperiment(location) {
  return closure_0.useConfig({ location: location.location });
};
