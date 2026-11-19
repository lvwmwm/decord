// Module ID: 19516
// Function ID: 19517
// Name: VoiceCallTriggerPoint
// Dependencies: [5410, 9119, 19517, 19011, 19518, 19519, 14184, 2]

// Module 19516 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5410 */;
import Helpers from "Helpers" /* 9119 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14184 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19011 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19517 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19518 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19519 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
