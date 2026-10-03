// Module ID: 17295
// Function ID: 17296
// Name: getConsoleColor
// Dependencies: [1085, 587, 2]
// Exports: default

// Module 17295 (getConsoleColor)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let PLAYSTATION;
let PLAYSTATION_STAGING;
let XBOX;
const PlatformTypes = Constants.PlatformTypes;
const obj = { [XBOX]: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, [PLAYSTATION]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION_STAGING]: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = PlatformTypes);
const result = size.fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
};
