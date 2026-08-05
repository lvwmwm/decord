// Module ID: 16252
// Function ID: 16253
// Name: commonTriggerPointConfiguration
// Dependencies: [4170, 7269, 9129, 16253, 15757, 16254, 16255, 8113, 2]

// Module 16252 (commonTriggerPointConfiguration)
const items = [require("experiment"), require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, require("experiment"), require("experiment"), require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("experiment").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
