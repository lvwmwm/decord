// Module ID: 17122
// Function ID: 17123
// Name: VoiceCallTriggerPointExperiment
// Dependencies: [4753, 4750, 2]

// Module 17122 (VoiceCallTriggerPointExperiment)
import ExperimentConstants from "ExperimentConstants" /* 4753 */;
import createExperiment from "module_4750" /* 4750 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
