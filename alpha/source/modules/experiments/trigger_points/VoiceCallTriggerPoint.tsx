// Module ID: 19361
// Function ID: 19362
// Name: VoiceCallTriggerPoint
// Dependencies: [5234, 10658, 19362, 18864, 19363, 19364, 15046, 2]

// Module 19361 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5234 */;
import Helpers from "Helpers" /* 10658 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15046 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18864 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19362 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19363 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19364 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
