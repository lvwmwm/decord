// Module ID: 4094
// Function ID: 33945
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getServerThemeUserEnabled, useServerThemeUserEnabled

// Module 4094 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-05-server-theme-user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeUserExperiment.tsx");

export const ServerThemeUserExperiment = apexExperiment;
export const getServerThemeUserEnabled = function getServerThemeUserEnabled(GuildPowerupsConstants) {
  return apexExperiment.getConfig({ location: GuildPowerupsConstants }).enabled;
};
export const useServerThemeUserEnabled = function useServerThemeUserEnabled(DefaultGuildThemePreferenceSetting) {
  return apexExperiment.useConfig({ location: DefaultGuildThemePreferenceSetting }).enabled;
};
