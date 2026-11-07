// Module ID: 20203
// Function ID: 20204
// Name: ApplicationIdentityLinkedRolesExperiment
// Dependencies: [5352, 2]
// Exports: useApplicationIdentityLinkedRolesEnabled

// Module 20203 (ApplicationIdentityLinkedRolesExperiment)
import createExperiment from "module_5352" /* 5352 */;
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
