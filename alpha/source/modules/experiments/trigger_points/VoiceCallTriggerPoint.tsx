// Module ID: 18110
// Function ID: 18111
// Name: VoiceCallTriggerPoint
// Dependencies: [5019, 10175, 18111, 17633, 18112, 18113, 13861, 2]

// Module 18110 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5019 */;
import Helpers from "Helpers" /* 10175 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 13861 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17633 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18111 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18112 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18113 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
