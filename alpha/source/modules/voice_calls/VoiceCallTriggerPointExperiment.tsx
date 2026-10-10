// Module ID: 18016
// Function ID: 18017
// Name: VoiceCallTriggerPointExperiment
// Dependencies: [5017, 5014, 2]

// Module 18016 (VoiceCallTriggerPointExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5017 */;
import createExperiment from "module_5014" /* 5014 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
