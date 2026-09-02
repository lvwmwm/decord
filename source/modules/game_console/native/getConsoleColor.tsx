// Module ID: 16992
// Function ID: 16993
// Name: getConsoleColor
// Dependencies: [673, 709, 2]
// Exports: default

// Module 16992 (getConsoleColor)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import ThemesDefault from "Themes" /* 709 */;

const obj = { [XBOX]: ThemesDefault.unsafe_rawColors.PLATFORM_XBOX, [PLAYSTATION]: ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, [PLAYSTATION_STAGING]: ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION };
({ XBOX, PLAYSTATION, PLAYSTATION_STAGING } = ME.PlatformTypes);
const result = set.fileFinishedImporting("modules/game_console/native/getConsoleColor.tsx");

export default function getConsoleColor(arg0) {
  return obj[arg0];
};
