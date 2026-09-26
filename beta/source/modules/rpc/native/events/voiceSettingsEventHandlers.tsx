// Module ID: 14835
// Function ID: 14836
// Name: voiceSettingsEventHandlers
// Dependencies: [14836, 9617, 2]

// Module 14835 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14836 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9617).getDeprecatedVoiceSettings, fn(9617).getVoiceSettings);
