// Module ID: 5234
// Function ID: 5235
// Name: ServerThemeUserExperiment
// Dependencies: [1447, 2]
// Exports: getServerThemeUserEnabled, useServerThemeUserEnabled

// Module 5234 (ServerThemeUserExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-05-server-theme-user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeUserExperiment.tsx");

export const ServerThemeUserExperiment = apexExperiment;
export function getServerThemeUserEnabled(GuildPowerupsConstants) {
  const obj = { location: GuildPowerupsConstants };
  return apexExperiment.getConfig(obj).enabled;
}
export function useServerThemeUserEnabled(DefaultGuildThemePreferenceSetting) {
  const obj = { location: DefaultGuildThemePreferenceSetting };
  return apexExperiment.useConfig(obj).enabled;
}
