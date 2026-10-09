// Module ID: 9687
// Function ID: 9688
// Name: ApplicationCommandsConstants
// Dependencies: [1382, 2]

// Module 9687 (ApplicationCommandsConstants)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let num = 56;
if (PlatformUtils.isAndroid()) {
  num = 64;
}
const result = size.fileFinishedImporting("modules/application_commands/native/ApplicationCommandsConstants.tsx");

export const AUTOCOMPLETE_ROW_HEIGHT = 48;
export const AUTOCOMPLETE_EMOJI_ROW_HEIGHT = num;
