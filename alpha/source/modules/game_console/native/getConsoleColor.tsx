// Module ID: 17652
// Function ID: 17653
// Name: getConsoleColor
// Dependencies: [1074, 576, 2]
// Exports: default

// Module 17652 (getConsoleColor)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const obj = { [XBOX]: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, [PLAYSTATION]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION_STAGING]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
};
