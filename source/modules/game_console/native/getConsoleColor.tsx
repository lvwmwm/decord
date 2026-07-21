// Module ID: 15729
// Function ID: 120321
// Name: getConsoleColor
// Dependencies: []
// Exports: default

// Module 15729 (getConsoleColor)
let PLAYSTATION;
let PLAYSTATION_STAGING;
let XBOX;
const obj = { [XBOX]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_XBOX, [PLAYSTATION]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION_STAGING]: importDefault(dependencyMap[1]).unsafe_rawColors.PLATFORM_PLAYSTATION };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = require(dependencyMap[0]).PlatformTypes);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
};
