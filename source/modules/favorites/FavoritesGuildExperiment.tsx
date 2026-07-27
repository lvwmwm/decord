// Module ID: 10155
// Function ID: 78579
// Name: useFavoritesGuildConfig
// Dependencies: [1428, 2]
// Exports: getFavoritesGuildConfig, useFavoritesGuildConfig

// Module 10155 (useFavoritesGuildConfig)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-favorites-server", kind: "user", defaultConfig: { enabled: false, hasHigherPrivileges: false }, variations: { [1]: { enabled: true, hasHigherPrivileges: true }, [2]: { enabled: true, hasHigherPrivileges: false }, [3]: { enabled: true, hasHigherPrivileges: true, isFreemium: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const useFavoritesGuildConfig = function useFavoritesGuildConfig(location) {
  return closure_0.useConfig({ location: location.location });
};
export const getFavoritesGuildConfig = function getFavoritesGuildConfig(location) {
  return closure_0.getConfig({ location: location.location });
};
