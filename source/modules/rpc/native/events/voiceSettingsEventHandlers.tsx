// Module ID: 14144
// Function ID: 14145
// Name: voiceSettingsEventHandlers
// Dependencies: [14145, 9468, 2]

// Module 14144 (voiceSettingsEventHandlers)
import importDefaultResult from "createVoiceSettingsEventHandlers" /* 14145 */;

const importDefaultResultResult = importDefaultResult(require("validateSocketClient").getDeprecatedVoiceSettings, require("validateSocketClient").getVoiceSettings);
const result = require("set").fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = importDefaultResultResult;
