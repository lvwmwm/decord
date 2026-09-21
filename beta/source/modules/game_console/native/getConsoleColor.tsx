// Module ID: 17599
// Function ID: 17600
// Name: getConsoleColor
// Dependencies: [1078, 580, 2]
// Exports: default

// Module 17599 (getConsoleColor)
import nativeDefault from "native" /* 580 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const obj = { [XBOX]: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, [PLAYSTATION]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION_STAGING]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = Constants.PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
};
