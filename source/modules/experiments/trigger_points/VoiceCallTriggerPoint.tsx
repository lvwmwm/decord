// Module ID: 16825
// Function ID: 16826
// Name: commonTriggerPointConfiguration
// Dependencies: [4359, 10406, 9786, 16826, 16324, 16827, 16828, 8069, 2]

// Module 16825 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 9786 */;
import experimentDefault2 from "experiment" /* 16827 */;
import experimentDefault3 from "experiment" /* 16828 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
