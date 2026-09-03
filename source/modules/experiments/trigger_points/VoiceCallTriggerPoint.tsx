// Module ID: 17168
// Function ID: 17169
// Name: commonTriggerPointConfiguration
// Dependencies: [4392, 10808, 9892, 17169, 16667, 17170, 17171, 8149, 2]

// Module 17168 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 9892 */;
import experimentDefault2 from "experiment" /* 17170 */;
import experimentDefault3 from "experiment" /* 17171 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
