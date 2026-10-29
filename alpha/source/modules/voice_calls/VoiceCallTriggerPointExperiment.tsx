// Module ID: 19301
// Function ID: 19302
// Name: VoiceCallTriggerPointExperiment
// Dependencies: [5228, 5225, 2]

// Module 19301 (VoiceCallTriggerPointExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5228 */;
import createExperiment from "module_5225" /* 5225 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
