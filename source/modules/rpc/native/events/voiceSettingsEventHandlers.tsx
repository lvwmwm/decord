// Module ID: 14400
// Function ID: 14401
// Name: voiceSettingsEventHandlers
// Dependencies: [14401, 9520, 2]

// Module 14400 (voiceSettingsEventHandlers)
import importDefaultResult from "createVoiceSettingsEventHandlers" /* 14401 */;

const importDefaultResultResult = importDefaultResult(require("validateSocketClient").getDeprecatedVoiceSettings, require("validateSocketClient").getVoiceSettings);
const result = require("set").fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
