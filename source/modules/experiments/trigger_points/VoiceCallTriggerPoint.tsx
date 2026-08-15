// Module ID: 16547
// Function ID: 16548
// Name: commonTriggerPointConfiguration
// Dependencies: [4289, 7660, 4798, 16548, 16048, 16549, 16550, 8439, 2]

// Module 16547 (commonTriggerPointConfiguration)
const items = [require("experiment"), require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, require("experiment"), require("experiment"), require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("experiment").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
