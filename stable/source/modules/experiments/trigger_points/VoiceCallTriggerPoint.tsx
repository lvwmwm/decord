// Module ID: 18467
// Function ID: 18468
// Name: VoiceCallTriggerPoint
// Dependencies: [5113, 10468, 18468, 17981, 18469, 18470, 14271, 2]

// Module 18467 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5113 */;
import Helpers from "Helpers" /* 10468 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14271 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17981 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18468 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18469 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18470 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
