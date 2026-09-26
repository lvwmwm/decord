// Module ID: 14086
// Function ID: 14087
// Name: voiceSettingsEventHandlers
// Dependencies: [14087, 8774, 2]

// Module 14086 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14087 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(8774).getDeprecatedVoiceSettings, fn(8774).getVoiceSettings);
