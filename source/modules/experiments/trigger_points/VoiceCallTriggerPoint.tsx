// Module ID: 15892
// Function ID: 121711
// Name: commonTriggerPointConfiguration
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 15892 (commonTriggerPointConfiguration)
const items = [require("__exportStarResult1"), require("__exportStarResult1").VoiceChannelHoistingExperiment, require("__exportStarResult1").HangoutWindowExperiment, require("__exportStarResult1"), require("__exportStarResult1"), require("__exportStarResult1").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("__exportStarResult1").CommonTriggerPointConfiguration(items, require("__exportStarResult1").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("__exportStarResult1").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
