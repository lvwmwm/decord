// Module ID: 16497
// Function ID: 16498
// Name: commonTriggerPointConfiguration
// Dependencies: [4257, 7442, 9299, 16498, 15998, 16499, 16500, 8400, 2]

// Module 16497 (commonTriggerPointConfiguration)
const items = [require("experiment"), require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, require("experiment"), require("experiment"), require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("experiment").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
