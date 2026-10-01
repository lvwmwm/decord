// Module ID: 14294
// Function ID: 14295
// Name: voiceSettingsEventHandlers
// Dependencies: [14295, 8966, 2]

// Module 14294 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14295 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(8966).getDeprecatedVoiceSettings, fn(8966).getVoiceSettings);
