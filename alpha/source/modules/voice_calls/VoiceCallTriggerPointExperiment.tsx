// Module ID: 20048
// Function ID: 20049
// Name: VoiceCallTriggerPointExperiment
// Dependencies: [5470, 5467, 2]

// Module 20048 (VoiceCallTriggerPointExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5470 */;
import createExperiment from "module_5467" /* 5467 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
