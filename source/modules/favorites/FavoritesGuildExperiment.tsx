// Module ID: 10338
// Function ID: 79817
// Name: apexExperiment
// Dependencies: []
// Exports: useFavoritesGuildConfig

// Module 10338 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { done: true, body: true }, variations: { [1]: { done: null, body: null }, [2]: { done: "<string:1040334421>", body: "<string:1040334338>" } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const FavoritesGuildExperiment = apexExperiment;
export const useFavoritesGuildConfig = function useFavoritesGuildConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
