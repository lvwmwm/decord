// Module ID: 14899
// Function ID: 14900
// Name: voiceSettingsEventHandlers
// Dependencies: [14900, 9668, 2]

// Module 14899 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14900 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9668).getDeprecatedVoiceSettings, fn(9668).getVoiceSettings);
