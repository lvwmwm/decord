// Module ID: 14804
// Function ID: 14805
// Name: voiceSettingsEventHandlers
// Dependencies: [14805, 9585, 2]

// Module 14804 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14805 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9585).getDeprecatedVoiceSettings, fn(9585).getVoiceSettings);
