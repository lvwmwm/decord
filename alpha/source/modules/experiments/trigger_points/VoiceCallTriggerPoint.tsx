// Module ID: 18731
// Function ID: 18732
// Name: VoiceCallTriggerPoint
// Dependencies: [5189, 10563, 18732, 18250, 18733, 18734, 14479, 2]

// Module 18731 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5189 */;
import Helpers from "Helpers" /* 10563 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14479 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18250 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18732 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18733 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18734 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const CommonTriggerPointConfiguration = Helpers.CommonTriggerPointConfiguration;
const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new CommonTriggerPointConfiguration(items, CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
