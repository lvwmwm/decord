// Module ID: 5067
// Function ID: 5068
// Name: DcfNewUserCooldownExperiment
// Dependencies: [1447, 1089, 2]
// Exports: getDcfNewUserCooldown, useDcfNewUserCooldown

// Module 5067 (DcfNewUserCooldownExperiment)
import DurationsDefault from "Durations" /* 1089 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj3;
const createApexExperiment = ApexExperiment.createApexExperiment;
const obj = { name: "2026-08-dcf-new-user-cooldown", kind: "user", defaultConfig: { newUserCooldownMs: DurationsDefault.Millis.DAY }, variations: obj3 };
obj3 = { 1: null, 2: null, 3: null };
({ newUserCooldownMs: DurationsDefault.Millis.DAY });
obj3[1] = { newUserCooldownMs: 2 * DurationsDefault.Millis.DAY };
({ newUserCooldownMs: 2 * DurationsDefault.Millis.DAY });
obj3[2] = { newUserCooldownMs: 3 * DurationsDefault.Millis.DAY };
({ newUserCooldownMs: 3 * DurationsDefault.Millis.DAY });
obj3[3] = { newUserCooldownMs: 7 * DurationsDefault.Millis.DAY };
({ newUserCooldownMs: 7 * DurationsDefault.Millis.DAY });
let closure_0 = createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dismissible_content/DcfNewUserCooldownExperiment.tsx");

export function useDcfNewUserCooldown() {
  return closure_0.useConfig({ location: "useDcfNewUserCooldown" }).newUserCooldownMs;
}
export function getDcfNewUserCooldown() {
  return closure_0.getConfig({ location: "getDcfNewUserCooldown" }).newUserCooldownMs;
}
