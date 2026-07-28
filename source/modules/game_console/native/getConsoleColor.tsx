// Module ID: 15963
// Function ID: 123231
// Name: getConsoleColor
// Dependencies: [653, 689, 2]
// Exports: default

// Module 15963 (getConsoleColor)
let PLAYSTATION;
let PLAYSTATION_STAGING;
let XBOX;
const obj = { [XBOX]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_XBOX, [PLAYSTATION]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION_STAGING]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PLATFORM_PLAYSTATION };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = require("ME").PlatformTypes);
const result = require("set").fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
};
