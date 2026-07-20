// Module ID: 4057
// Function ID: 33814
// Name: apexExperiment
// Dependencies: []
// Exports: getServerThemeUserEnabled, useServerThemeUserEnabled

// Module 4057 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { "Null": "all", "Null": "all", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeUserExperiment.tsx");

export const ServerThemeUserExperiment = apexExperiment;
export const getServerThemeUserEnabled = function getServerThemeUserEnabled(GuildPowerupsConstants) {
  return apexExperiment.getConfig({ location: GuildPowerupsConstants }).enabled;
};
export const useServerThemeUserEnabled = function useServerThemeUserEnabled(DefaultGuildThemePreferenceSetting) {
  return apexExperiment.useConfig({ location: DefaultGuildThemePreferenceSetting }).enabled;
};
