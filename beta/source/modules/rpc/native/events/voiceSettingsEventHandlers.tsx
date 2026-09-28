// Module ID: 14085
// Function ID: 14086
// Name: voiceSettingsEventHandlers
// Dependencies: [14086, 8774, 2]

// Module 14085 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14086 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(8774).getDeprecatedVoiceSettings, fn(8774).getVoiceSettings);
