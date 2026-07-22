// Module ID: 9551
// Function ID: 74455
// Name: AUTOCOMPLETE_ROW_HEIGHT
// Dependencies: []

// Module 9551 (AUTOCOMPLETE_ROW_HEIGHT)
const _module = require(dependencyMap[0]);
let num = 56;
if (_module.isAndroid()) {
  num = 64;
}
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;
