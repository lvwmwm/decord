// Module ID: 14257
// Function ID: 14258
// Name: voiceSettingsEventHandlers
// Dependencies: [14258, 8939, 2]

// Module 14257 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14258 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(8939).getDeprecatedVoiceSettings, fn(8939).getVoiceSettings);
