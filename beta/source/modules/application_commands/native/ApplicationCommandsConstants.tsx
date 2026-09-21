// Module ID: 10640
// Function ID: 10641
// Name: ApplicationCommandsConstants
// Dependencies: [1368, 2]

// Module 10640 (ApplicationCommandsConstants)
import PlatformUtils from "PlatformUtils" /* 1368 */;
import size from "module_2" /* 2 */;

let num = 56;
if (PlatformUtils.isAndroid()) {
  num = 64;
}
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;
