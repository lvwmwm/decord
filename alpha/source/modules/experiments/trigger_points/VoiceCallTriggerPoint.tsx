// Module ID: 19701
// Function ID: 19702
// Name: VoiceCallTriggerPoint
// Dependencies: [5363, 10856, 19702, 19195, 19703, 19704, 15312, 2]

// Module 19701 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5363 */;
import Helpers from "Helpers" /* 10856 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15312 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19195 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19702 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19703 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19704 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
