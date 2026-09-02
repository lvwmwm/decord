// Module ID: 17148
// Function ID: 17149
// Name: commonTriggerPointConfiguration
// Dependencies: [4392, 10804, 9888, 17149, 16647, 17150, 17151, 8145, 2]

// Module 17148 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 9888 */;
import experimentDefault2 from "experiment" /* 17150 */;
import experimentDefault3 from "experiment" /* 17151 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
