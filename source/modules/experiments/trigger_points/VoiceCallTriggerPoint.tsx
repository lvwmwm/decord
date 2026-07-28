// Module ID: 16118
// Function ID: 124577
// Name: commonTriggerPointConfiguration
// Dependencies: [4080, 6276, 8892, 16119, 15624, 16120, 16121, 7982, 2]

// Module 16118 (commonTriggerPointConfiguration)
const items = [require("items"), require("items").VoiceChannelHoistingExperiment, require("items").HangoutWindowExperiment, require("items"), require("items"), require("items").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("items").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
