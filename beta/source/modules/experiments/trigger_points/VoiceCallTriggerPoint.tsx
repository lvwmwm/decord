// Module ID: 19862
// Function ID: 19863
// Name: VoiceCallTriggerPoint
// Dependencies: [5387, 10829, 19863, 19325, 19864, 19865, 15392, 2]

// Module 19862 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5387 */;
import Helpers from "Helpers" /* 10829 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15392 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19325 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19863 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19864 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19865 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
