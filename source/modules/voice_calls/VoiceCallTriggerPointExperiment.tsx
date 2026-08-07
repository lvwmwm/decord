// Module ID: 16321
// Function ID: 16322
// Name: experiment
// Dependencies: [4217, 4214, 2]

// Module 16321 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Treatment", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items });
const obj = { kind: "guild", id: "2026-04_voice_call_trigger_point", label: "Voice Call Trigger Point Experiment", commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
const result = require("set").fileFinishedImporting("modules/voice_calls/VoiceCallTriggerPointExperiment.tsx");

export default experiment;
