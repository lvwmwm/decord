// Module ID: 16383
// Function ID: 127851
// Name: items
// Dependencies: [4042, 2]
// Exports: useApplicationIdentityLinkedRolesEnabled

// Module 16383 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-04_application_identity_linked_roles", label: "Application Identity Linked Roles", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Enable Application Identity Linked Roles", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx");

export const ApplicationIdentityLinkedRolesExperiment = experiment;
export const useApplicationIdentityLinkedRolesEnabled = function useApplicationIdentityLinkedRolesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};
