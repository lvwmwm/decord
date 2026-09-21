// Module ID: 14807
// Function ID: 14808
// Name: voiceSettingsEventHandlers
// Dependencies: [14808, 9581, 2]

// Module 14807 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14808 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9581).getDeprecatedVoiceSettings, fn(9581).getVoiceSettings);
