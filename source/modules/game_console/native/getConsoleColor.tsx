// Module ID: 16084
// Function ID: 16085
// Name: getConsoleColor
// Dependencies: [676, 712, 2]
// Exports: default

// Module 16084 (getConsoleColor)
let PLAYSTATION;
let PLAYSTATION_STAGING;
let XBOX;
const obj = { [XBOX]: require("Themes").unsafe_rawColors.PLATFORM_XBOX, [PLAYSTATION]: require("Themes").unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION_STAGING]: require("Themes").unsafe_rawColors.PLATFORM_PLAYSTATION };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = require("ME").PlatformTypes);
const result = require("set").fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
};
