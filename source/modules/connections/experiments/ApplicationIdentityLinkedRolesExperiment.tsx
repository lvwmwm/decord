// Module ID: 16740
// Function ID: 16741
// Name: experiment
// Dependencies: [4215, 2]
// Exports: useApplicationIdentityLinkedRolesEnabled

// Module 16740 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enable Application Identity Linked Roles", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-04_application_identity_linked_roles", label: "Application Identity Linked Roles", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/connections/experiments/ApplicationIdentityLinkedRolesExperiment.tsx");

export const ApplicationIdentityLinkedRolesExperiment = experiment;
export const useApplicationIdentityLinkedRolesEnabled = function useApplicationIdentityLinkedRolesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false }).enabled;
};
