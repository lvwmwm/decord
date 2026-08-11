// Module ID: 16420
// Function ID: 16421
// Name: commonTriggerPointConfiguration
// Dependencies: [4218, 7378, 9241, 16421, 15922, 16422, 16423, 8335, 2]

// Module 16420 (commonTriggerPointConfiguration)
const items = [require("experiment"), require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, require("experiment"), require("experiment"), require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("experiment").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
