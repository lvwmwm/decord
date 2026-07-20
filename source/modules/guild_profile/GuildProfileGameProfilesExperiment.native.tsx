// Module ID: 11861
// Function ID: 91850
// Name: useGuildProfileGameProfilesExperiment
// Dependencies: []
// Exports: useGuildProfileGameProfilesExperiment

// Module 11861 (useGuildProfileGameProfilesExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/guild_profile/GuildProfileGameProfilesExperiment.native.tsx");

export const useGuildProfileGameProfilesExperiment = function useGuildProfileGameProfilesExperiment(location) {
  return closure_0.useConfig({ location: location.location });
};
