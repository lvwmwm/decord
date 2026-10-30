// Module ID: 10205
// Function ID: 10206
// Name: ApplicationCommandsConstants
// Dependencies: [1376, 2]

// Module 10205 (ApplicationCommandsConstants)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

let num = 56;
if (PlatformUtils.isAndroid()) {
  num = 64;
}
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;
