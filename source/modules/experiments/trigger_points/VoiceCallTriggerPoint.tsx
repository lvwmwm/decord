// Module ID: 16056
// Function ID: 124206
// Name: commonTriggerPointConfiguration
// Dependencies: [4045, 7158, 8960, 16057, 15563, 16058, 16059, 7998, 2]

// Module 16056 (commonTriggerPointConfiguration)
const items = [require("items"), require("items").VoiceChannelHoistingExperiment, require("items").HangoutWindowExperiment, require("items"), require("items"), require("items").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("items").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
