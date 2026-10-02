// Module ID: 16959
// Function ID: 16960
// Name: getConsoleColor
// Dependencies: [1086, 588, 2]
// Exports: default

// Module 16959 (getConsoleColor)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
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
