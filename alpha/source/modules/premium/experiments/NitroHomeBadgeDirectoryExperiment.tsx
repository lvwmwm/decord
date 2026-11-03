// Module ID: 15457
// Function ID: 15458
// Name: NitroHomeBadgeDirectoryExperiment
// Dependencies: [1449, 2]
// Exports: useIsNitroHomeBadgeDirectoryEnabled

// Module 15457 (NitroHomeBadgeDirectoryExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-nitro-home-badge-directory", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/premium/experiments/NitroHomeBadgeDirectoryExperiment.tsx");

export default apexExperiment;
export function useIsNitroHomeBadgeDirectoryEnabled(location) {
  const obj = { location: location.location };
  return apexExperiment.useConfig(obj).enabled;
}
