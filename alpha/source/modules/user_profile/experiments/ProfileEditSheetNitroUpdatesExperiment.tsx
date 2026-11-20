// Module ID: 15712
// Function ID: 15713
// Name: ProfileEditSheetNitroUpdatesExperiment
// Dependencies: [1450, 2]
// Exports: useProfileEditSheetNitroUpdatesConfig

// Module 15712 (ProfileEditSheetNitroUpdatesExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-11-profile-edit-sheet-nitro-updates", kind: "user", defaultConfig: { enabled: false, skipRoadblock: false }, variations: { 0: { enabled: false, skipRoadblock: false }, 1: { enabled: true, skipRoadblock: false }, 2: { enabled: true, skipRoadblock: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/ProfileEditSheetNitroUpdatesExperiment.tsx");

export function useProfileEditSheetNitroUpdatesConfig(change_avatar_action_sheet_native) {
  const obj = { location: change_avatar_action_sheet_native };
  return closure_0.useConfig(obj);
}
