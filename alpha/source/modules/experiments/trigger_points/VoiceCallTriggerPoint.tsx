// Module ID: 17341
// Function ID: 17342
// Name: VoiceCallTriggerPoint
// Dependencies: [4781, 10474, 17342, 16877, 17343, 17344, 12953, 2]

// Module 17341 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4781 */;
import Helpers from "Helpers" /* 10474 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 12953 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 16877 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17342 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17343 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17344 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
