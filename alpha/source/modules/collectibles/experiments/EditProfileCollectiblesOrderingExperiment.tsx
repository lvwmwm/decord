// Module ID: 15029
// Function ID: 15030
// Name: EditProfileCollectiblesOrderingExperiment
// Dependencies: [1448, 2]
// Exports: useIsEditProfileCollectiblesOrderingEnabled

// Module 15029 (EditProfileCollectiblesOrderingExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-edit-profile-collectibles-ordering", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/collectibles/experiments/EditProfileCollectiblesOrderingExperiment.tsx");

export function useIsEditProfileCollectiblesOrderingEnabled(collectibles_picker) {
  const obj = { location: collectibles_picker };
  return closure_0.useConfig(obj).enabled;
}
