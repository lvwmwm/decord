// Module ID: 4972
// Function ID: 4973
// Name: ServerThemeUserExperiment
// Dependencies: [1452, 558, 576, 2]
// Exports: getServerThemeUserEnabled

// Module 4972 (ServerThemeUserExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { kind: "user", name: "2026-05-server-theme-user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useServerThemeUserEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useServerThemeUserEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
});
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeUserExperiment.tsx");

export const ServerThemeUserExperiment = apexExperiment;
export const getServerThemeUserEnabled = function getServerThemeUserEnabled(GuildPowerupsConstants) {
  const obj = { location: GuildPowerupsConstants };
  return apexExperiment.getConfig(obj).enabled;
};
export const useServerThemeUserEnabled = tmp3;
