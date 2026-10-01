// Module ID: 9687
// Function ID: 9688
// Name: FavoritesGuildExperiment
// Dependencies: [1435, 2]
// Exports: getFavoritesGuildConfig, useFavoritesGuildConfig

// Module 9687 (FavoritesGuildExperiment)
import ApexExperiment_mod from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-01-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true } };
obj2[2] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-08-favorites-server", kind: "user", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
let closure_1 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/favorites/FavoritesGuildExperiment.tsx");

export const useFavoritesGuildConfig = function useFavoritesGuildConfig(location) {
  const _location = location.location;
  const config = closure_1.useConfig({ location: _location });
  const obj = { enabled: config.enabled || closure_0.useConfig({ location: _location }).enabled, isFreemium: config.enabled };
  return obj;
};
export const getFavoritesGuildConfig = function getFavoritesGuildConfig(location) {
  const _location = location.location;
  const config = closure_1.getConfig({ location: _location });
  const obj = { enabled: config.enabled || closure_0.getConfig({ location: _location }).enabled, isFreemium: config.enabled };
  return obj;
};
