// Module ID: 10337
// Function ID: 79793
// Name: apexExperiment
// Dependencies: []
// Exports: useFavoritesGuildConfig

// Module 10337 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "<string:3084210432>", 0: "<string:2978234641>", defaultConfig: { "Bool(false)": null, "Bool(false)": null }, variations: { [1]: { "Bool(false)": null, "Bool(false)": null }, [2]: { "Bool(false)": true, "Bool(false)": true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const FavoritesGuildExperiment = apexExperiment;
export const useFavoritesGuildConfig = function useFavoritesGuildConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
