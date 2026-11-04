// Module ID: 19425
// Function ID: 19426
// Name: VoiceCallTriggerPoint
// Dependencies: [5239, 10678, 19426, 18920, 19427, 19428, 15087, 2]

// Module 19425 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5239 */;
import Helpers from "Helpers" /* 10678 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15087 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18920 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19426 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19427 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19428 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
