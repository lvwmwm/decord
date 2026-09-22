// Module ID: 10392
// Function ID: 10393
// Name: ApplicationCommandsConstants
// Dependencies: [1363, 2]

// Module 10392 (ApplicationCommandsConstants)
import PlatformUtils from "PlatformUtils" /* 1363 */;
import size from "module_2" /* 2 */;

let num = 56;
if (PlatformUtils.isAndroid()) {
  num = 64;
}
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;
