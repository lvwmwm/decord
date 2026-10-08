// Module ID: 9668
// Function ID: 9669
// Name: ApplicationCommandsConstants
// Dependencies: [1381, 2]

// Module 9668 (ApplicationCommandsConstants)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import size from "module_2" /* 2 */;

let num = 56;
if (PlatformUtils.isAndroid()) {
  num = 64;
}
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;
