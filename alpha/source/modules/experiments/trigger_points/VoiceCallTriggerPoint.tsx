// Module ID: 18463
// Function ID: 18464
// Name: VoiceCallTriggerPoint
// Dependencies: [5113, 10468, 18464, 17977, 18465, 18466, 14267, 2]

// Module 18463 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5113 */;
import Helpers from "Helpers" /* 10468 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14267 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17977 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18464 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18465 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18466 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
