// Module ID: 14110
// Function ID: 14111
// Name: voiceSettingsEventHandlers
// Dependencies: [14111, 9446, 2]

// Module 14110 (voiceSettingsEventHandlers)
import importDefaultResult from "createVoiceSettingsEventHandlers" /* 14111 */;

const importDefaultResultResult = importDefaultResult(require("validateSocketClient").getDeprecatedVoiceSettings, require("validateSocketClient").getVoiceSettings);
const result = require("set").fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
