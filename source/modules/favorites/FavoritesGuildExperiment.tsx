// Module ID: 10331
// Function ID: 79774
// Name: apexExperiment
// Dependencies: []
// Exports: useFavoritesGuildConfig

// Module 10331 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: null, -1845285747: null, defaultConfig: {}, variations: { [1]: {}, [2]: {} } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const FavoritesGuildExperiment = apexExperiment;
export const useFavoritesGuildConfig = function useFavoritesGuildConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
