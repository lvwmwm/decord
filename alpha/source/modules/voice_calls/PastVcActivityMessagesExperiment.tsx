// Module ID: 19420
// Function ID: 19421
// Name: PastVcActivityMessagesExperiment
// Dependencies: [5239, 5236, 2]
// Exports: isPastVcActivityMessagesEnabled, useIsPastVcActivityMessagesEnabled

// Module 19420 (PastVcActivityMessagesExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5239 */;
import createExperiment from "module_5236" /* 5236 */;
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
