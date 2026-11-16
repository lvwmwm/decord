// Module ID: 19865
// Function ID: 19866
// Name: VoiceCallTriggerPoint
// Dependencies: [5387, 10829, 19866, 19325, 19867, 19868, 15392, 2]

// Module 19865 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5387 */;
import Helpers from "Helpers" /* 10829 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15392 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19325 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19866 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19867 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19868 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
