// Module ID: 18903
// Function ID: 18904
// Name: getConsoleColor
// Dependencies: [1084, 587, 2]
// Exports: default

// Module 18903 (getConsoleColor)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
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
