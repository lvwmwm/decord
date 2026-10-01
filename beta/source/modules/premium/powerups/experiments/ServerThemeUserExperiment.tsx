// Module ID: 4760
// Function ID: 4761
// Name: ServerThemeUserExperiment
// Dependencies: [1435, 2]
// Exports: getServerThemeUserEnabled, useServerThemeUserEnabled

// Module 4760 (ServerThemeUserExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-05-server-theme-user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeUserExperiment.tsx");

export const ServerThemeUserExperiment = apexExperiment;
export const getServerThemeUserEnabled = function getServerThemeUserEnabled(GuildPowerupsConstants) {
  const obj = { location: GuildPowerupsConstants };
  return apexExperiment.getConfig(obj).enabled;
};
export const useServerThemeUserEnabled = function useServerThemeUserEnabled(DefaultGuildThemePreferenceSetting) {
  const obj = { location: DefaultGuildThemePreferenceSetting };
  return apexExperiment.useConfig(obj).enabled;
};
