// Module ID: 16241
// Function ID: 16242
// Name: experiment
// Dependencies: [4170, 4167, 2]
// Exports: isPastVcActivityMessagesEnabled, useIsPastVcActivityMessagesEnabled

// Module 16241 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Show past VC activity messages in system channel", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-02_past_vc_activity_messages", label: "Past VC Activity Messages", commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items });
const obj = { kind: "guild", id: "2026-02_past_vc_activity_messages", label: "Past VC Activity Messages", commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
const result = require("set").fileFinishedImporting("modules/voice_calls/PastVcActivityMessagesExperiment.tsx");

export default experiment;
export const isPastVcActivityMessagesEnabled = function isPastVcActivityMessagesEnabled(id, GuildSettingsModalOverview) {
  return experiment.getCurrentConfig({ guildId: id, location: GuildSettingsModalOverview }, { autoTrackExposure: true }).enabled;
};
export const useIsPastVcActivityMessagesEnabled = function useIsPastVcActivityMessagesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: true }).enabled;
};
