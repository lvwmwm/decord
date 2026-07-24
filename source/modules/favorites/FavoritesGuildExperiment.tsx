// Module ID: 10223
// Function ID: 78945
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getFavoritesGuildConfig, useFavoritesGuildConfig

// Module 10223 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-favorites-server", kind: "user", defaultConfig: { enabled: false, hasHigherPrivileges: false }, variations: { [1]: { enabled: true, hasHigherPrivileges: true }, [2]: { enabled: true, hasHigherPrivileges: false }, [3]: { enabled: true, hasHigherPrivileges: true, isFreemium: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const FavoritesGuildExperiment = apexExperiment;
export const useFavoritesGuildConfig = function useFavoritesGuildConfig(location) {
  return apexExperiment.useConfig({ location: location.location });
};
export const getFavoritesGuildConfig = function getFavoritesGuildConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};
