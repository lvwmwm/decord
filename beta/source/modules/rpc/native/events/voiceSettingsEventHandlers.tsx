// Module ID: 14845
// Function ID: 14846
// Name: voiceSettingsEventHandlers
// Dependencies: [14846, 9613, 2]

// Module 14845 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14846 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9613).getDeprecatedVoiceSettings, fn(9613).getVoiceSettings);
