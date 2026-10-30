// Module ID: 17636
// Function ID: 17637
// Name: OrbchievementsExperiment
// Dependencies: [1448, 2]
// Exports: useIsOrbchievementsEnabled

// Module 17636 (OrbchievementsExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-orbchievements", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/experiments/OrbchievementsExperiment.tsx");

export const Orbchievements = apexExperiment;
export function useIsOrbchievementsEnabled(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj).enabled;
}
