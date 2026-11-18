// Module ID: 20204
// Function ID: 20205
// Name: VoiceCallTriggerPoint
// Dependencies: [5523, 9715, 20205, 19704, 20206, 20207, 15539, 2]

// Module 20204 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5523 */;
import Helpers from "Helpers" /* 9715 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15539 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19704 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 20205 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 20206 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 20207 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
