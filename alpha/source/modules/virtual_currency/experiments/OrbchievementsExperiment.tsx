// Module ID: 17263
// Function ID: 17264
// Name: OrbchievementsExperiment
// Dependencies: [1449, 2]
// Exports: useIsOrbchievementsEnabled, useIsOrbchievementsMobileEnabled

// Module 17263 (OrbchievementsExperiment)
import ApexExperiment_mod from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-07-orbchievements", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-10-orbchievements-mobile", kind: "user", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/virtual_currency/experiments/OrbchievementsExperiment.tsx");

export const Orbchievements = apexExperiment;
export const OrbchievementsMobile = apexExperiment1;
export function useIsOrbchievementsEnabled(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj).enabled;
}
export function useIsOrbchievementsMobileEnabled(location) {
  const obj = { location: location.location };
  return apexExperiment1.useConfig(obj).enabled;
}
