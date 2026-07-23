// Module ID: 5610
// Function ID: 47693
// Name: items
// Dependencies: [4042, 2]
// Exports: getGuildSpaceExperimentEnabled, useGuildSpaceExperimentEnabled

// Module 5610 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-06_guild_spaces", label: "Guild Space", defaultConfig: { enabled: false } };
obj = { id: 1, label: "Enable Guild Space", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/guild_space/GuildSpaceExperiment.tsx");

export const GuildSpaceExperiment = experiment;
export const getGuildSpaceExperimentEnabled = function getGuildSpaceExperimentEnabled(guildId, location) {
  return experiment.getCurrentConfig({ guildId, location }, { autoTrackExposure: false }).enabled;
};
export const useGuildSpaceExperimentEnabled = function useGuildSpaceExperimentEnabled(id, location) {
  return experiment.useExperiment({ guildId: id, location }, { autoTrackExposure: false }).enabled;
};
