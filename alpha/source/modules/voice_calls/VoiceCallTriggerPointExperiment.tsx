// Module ID: 17790
// Function ID: 17791
// Name: VoiceCallTriggerPointExperiment
// Dependencies: [4977, 4974, 2]

// Module 17790 (VoiceCallTriggerPointExperiment)
import ExperimentConstants from "ExperimentConstants" /* 4977 */;
import createExperiment from "module_4974" /* 4974 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
