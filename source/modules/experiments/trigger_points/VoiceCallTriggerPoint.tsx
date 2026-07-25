// Module ID: 16067
// Function ID: 124374
// Name: commonTriggerPointConfiguration
// Dependencies: [4046, 6240, 8848, 16068, 15573, 16069, 16070, 7945, 2]

// Module 16067 (commonTriggerPointConfiguration)
const items = [require("items"), require("items").VoiceChannelHoistingExperiment, require("items").HangoutWindowExperiment, require("items"), require("items"), require("items").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("CommonTriggerPointConfiguration").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("items").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
