// Module ID: 16079
// Function ID: 124421
// Name: commonTriggerPointConfiguration
// Dependencies: [4046, 6240, 8848, 16080, 15585, 16081, 16082, 7945, 2]

// Module 16079 (commonTriggerPointConfiguration)
const items = [require("items"), require("items").VoiceChannelHoistingExperiment, require("items").HangoutWindowExperiment, require("items"), require("items"), require("items").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("items").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
