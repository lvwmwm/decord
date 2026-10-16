// Module ID: 15561
// Function ID: 15562
// Name: getDisplayNameStylesFontName
// Dependencies: [1412, 2963, 2]
// Exports: default

// Module 15561 (getDisplayNameStylesFontName)
import DisplayNameFont from "DisplayNameFont" /* 1412 */;
import _modDef2963 from "module_2963" /* 2963 */;
import size from "module_2" /* 2 */;

const DISPLAY_NAME_STYLES_FONT_NAMES = {};
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.DEFAULT] = _modDef2963.ZEL6mz;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHERRY_BOMB] = _modDef2963.rN7cuX;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHICLE] = _modDef2963.CbHHnL;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.MUSEO_MODERNO] = _modDef2963.iEcEKO;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEO_CASTEL] = _modDef2963.DL7jLZ;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PIXELIFY] = _modDef2963.jq4aRp;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.SINISTRE] = _modDef2963.jV9DN4;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ZILLA_SLAB] = _modDef2963.KMR8rT;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PLAYPEN_SANS] = _modDef2963.RP8HFf;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ORBITRON] = _modDef2963.pwbAIk;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEW_ROCKER] = _modDef2963["Llo/Ia"];
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.KALAM] = _modDef2963.t9Les4;
const result = size.fileFinishedImporting("modules/display_name_styles/getDisplayNameStylesFontName.tsx");

export default function getDisplayNameStylesFontName(arg0) {
  let ZEL6mz = obj[arg0];
  if (ZEL6mz == null) {
    ZEL6mz = _modDef2963.ZEL6mz;
  }
  return ZEL6mz;
};
export { DISPLAY_NAME_STYLES_FONT_NAMES };
