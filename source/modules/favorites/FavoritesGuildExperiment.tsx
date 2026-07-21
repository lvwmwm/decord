// Module ID: 10337
// Function ID: 79804
// Name: apexExperiment
// Dependencies: []
// Exports: useFavoritesGuildConfig

// Module 10337 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: "<string:3547877632>", 1387159956: "<string:2977382673>", defaultConfig: { <string:1408262439>: null, <string:1359021556>: null }, variations: { [1]: { <string:1408262439>: null, <string:1359021556>: null }, [2]: { <string:1408262439>: null, <string:1359021556>: null } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const FavoritesGuildExperiment = apexExperiment;
export const useFavoritesGuildConfig = function useFavoritesGuildConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
