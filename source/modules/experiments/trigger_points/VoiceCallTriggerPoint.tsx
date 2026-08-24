// Module ID: 16642
// Function ID: 16643
// Name: commonTriggerPointConfiguration
// Dependencies: [4293, 7698, 4803, 16643, 16146, 16644, 16645, 8478, 2]

// Module 16642 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 4803 */;
import experimentDefault2 from "experiment" /* 16644 */;
import experimentDefault3 from "experiment" /* 16645 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
