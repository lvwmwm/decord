// Module ID: 16082
// Function ID: 124427
// Name: items
// Dependencies: [4046, 4043, 2]

// Module 16082 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false } };
obj = { id: 1, label: "Treatment", config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
