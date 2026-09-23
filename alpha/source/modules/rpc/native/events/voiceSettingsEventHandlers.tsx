// Module ID: 14890
// Function ID: 14891
// Name: voiceSettingsEventHandlers
// Dependencies: [14891, 9664, 2]

// Module 14890 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14891 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9664).getDeprecatedVoiceSettings, fn(9664).getVoiceSettings);
