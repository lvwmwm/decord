// Module ID: 14064
// Function ID: 14065
// Name: voiceSettingsEventHandlers
// Dependencies: [14065, 10900, 2]

// Module 14064 (voiceSettingsEventHandlers)
import importDefaultResult from "createVoiceSettingsEventHandlers" /* 14065 */;

const importDefaultResultResult = importDefaultResult(require("validateSocketClient").getDeprecatedVoiceSettings, require("validateSocketClient").getVoiceSettings);
const result = require("set").fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
