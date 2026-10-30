// Module ID: 15273
// Function ID: 15274
// Name: NitroHomeBadgeDirectoryExperiment
// Dependencies: [1448, 2]
// Exports: useIsNitroHomeBadgeDirectoryEnabled

// Module 15273 (NitroHomeBadgeDirectoryExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-nitro-home-badge-directory", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/NitroHomeBadgeDirectoryExperiment.tsx");

export default apexExperiment;
export function useIsNitroHomeBadgeDirectoryEnabled(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj).enabled;
}
