// Module ID: 17254
// Function ID: 17255
// Name: commonTriggerPointConfiguration
// Dependencies: [4395, 10740, 9104, 17255, 16754, 17256, 17257, 13115, 2]

// Module 17254 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 9104 */;
import experimentDefault2 from "experiment" /* 17256 */;
import experimentDefault3 from "experiment" /* 17257 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
