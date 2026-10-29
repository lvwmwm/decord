// Module ID: 19298
// Function ID: 19299
// Name: VoiceCallTriggerPoint
// Dependencies: [5228, 10632, 19299, 18804, 19300, 19301, 15002, 2]

// Module 19298 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5228 */;
import Helpers from "Helpers" /* 10632 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15002 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18804 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19299 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19300 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19301 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
