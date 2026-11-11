// Module ID: 20045
// Function ID: 20046
// Name: VoiceCallTriggerPoint
// Dependencies: [5470, 9649, 20046, 19513, 20047, 20048, 15428, 2]

// Module 20045 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5470 */;
import Helpers from "Helpers" /* 9649 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15428 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19513 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 20046 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 20047 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 20048 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
