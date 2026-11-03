// Module ID: 19585
// Function ID: 19586
// Name: PastVcActivityMessagesExperiment
// Dependencies: [5362, 5359, 2]
// Exports: isPastVcActivityMessagesEnabled, useIsPastVcActivityMessagesEnabled

// Module 19585 (PastVcActivityMessagesExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5362 */;
import createExperiment from "module_5359" /* 5359 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let obj = { kind: "guild", id: "2026-02_past_vc_activity_messages", label: "Past VC Activity Messages", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Show past VC activity messages in system channel", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/PastVcActivityMessagesExperiment.tsx");

export default experiment;
export function isPastVcActivityMessagesEnabled(id, GuildSettingsModalOverview) {
  const obj = { guildId: id, location: GuildSettingsModalOverview };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: true }).enabled;
}
export function useIsPastVcActivityMessagesEnabled(guildId, location) {
  const obj = { guildId, location };
  return experiment.useExperiment(obj, { autoTrackExposure: true }).enabled;
}
