// Module ID: 19463
// Function ID: 19464
// Name: VoiceCallTriggerPoint
// Dependencies: [5531, 9239, 19464, 18576, 19465, 19466, 14274, 2]

// Module 19463 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5531 */;
import Helpers from "Helpers" /* 9239 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14274 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18576 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19464 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19465 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19466 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
