// Module ID: 16009
// Function ID: 123884
// Name: commonTriggerPointConfiguration
// Dependencies: [4045, 7158, 8921, 16010, 15516, 16011, 16012, 7911, 2]

// Module 16009 (commonTriggerPointConfiguration)
const items = [require("items"), require("items").VoiceChannelHoistingExperiment, require("items").HangoutWindowExperiment, require("items"), require("items"), require("items").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("items").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
