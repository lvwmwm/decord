// Module ID: 18805
// Function ID: 18806
// Name: VoiceCallTriggerPoint
// Dependencies: [5223, 10596, 18806, 18324, 18807, 18808, 14540, 2]

// Module 18805 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5223 */;
import Helpers from "Helpers" /* 10596 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14540 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18324 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18806 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18807 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18808 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
