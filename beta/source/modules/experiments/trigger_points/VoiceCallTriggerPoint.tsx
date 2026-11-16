// Module ID: 20201
// Function ID: 20202
// Name: VoiceCallTriggerPoint
// Dependencies: [5523, 9715, 20202, 19703, 20203, 20204, 15539, 2]

// Module 20201 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5523 */;
import Helpers from "Helpers" /* 9715 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15539 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19703 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 20202 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 20203 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 20204 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
