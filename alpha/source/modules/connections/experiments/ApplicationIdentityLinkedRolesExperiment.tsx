// Module ID: 19747
// Function ID: 19748
// Name: ApplicationIdentityLinkedRolesExperiment
// Dependencies: [5231, 2]
// Exports: useApplicationIdentityLinkedRolesEnabled

// Module 19747 (ApplicationIdentityLinkedRolesExperiment)
import createExperiment from "module_5231" /* 5231 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "guild", id: "2026-04_application_identity_linked_roles", label: "Application Identity Linked Roles", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enable Application Identity Linked Roles", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx");

export const ApplicationIdentityLinkedRolesExperiment = experiment;
export function useApplicationIdentityLinkedRolesEnabled(guildId, location) {
  const obj = { guildId, location };
  return experiment.useExperiment(obj, { autoTrackExposure: false }).enabled;
}
