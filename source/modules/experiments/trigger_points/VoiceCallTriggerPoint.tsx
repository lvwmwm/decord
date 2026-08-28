// Module ID: 16843
// Function ID: 16844
// Name: commonTriggerPointConfiguration
// Dependencies: [4360, 10521, 9804, 16844, 16342, 16845, 16846, 8083, 2]

// Module 16843 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 9804 */;
import experimentDefault2 from "experiment" /* 16845 */;
import experimentDefault3 from "experiment" /* 16846 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
