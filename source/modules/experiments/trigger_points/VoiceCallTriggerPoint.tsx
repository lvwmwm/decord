// Module ID: 16175
// Function ID: 16176
// Name: commonTriggerPointConfiguration
// Dependencies: [4108, 6300, 8925, 16176, 15681, 16177, 16178, 8011, 2]

// Module 16175 (commonTriggerPointConfiguration)
const items = [require("experiment"), require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, require("experiment"), require("experiment"), require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("experiment").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
