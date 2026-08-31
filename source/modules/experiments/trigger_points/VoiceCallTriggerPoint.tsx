// Module ID: 16876
// Function ID: 16877
// Name: commonTriggerPointConfiguration
// Dependencies: [4362, 10545, 9827, 16877, 16376, 16878, 16879, 8105, 2]

// Module 16876 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 9827 */;
import experimentDefault2 from "experiment" /* 16878 */;
import experimentDefault3 from "experiment" /* 16879 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
