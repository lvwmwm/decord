// Module ID: 14848
// Function ID: 14849
// Name: getDisplayNameStylesFontName
// Dependencies: [1410, 2958, 2]
// Exports: default

// Module 14848 (getDisplayNameStylesFontName)
import DisplayNameFont from "DisplayNameFont" /* 1410 */;
import _modDef2958 from "module_2958" /* 2958 */;
import size from "module_2" /* 2 */;

const DISPLAY_NAME_STYLES_FONT_NAMES = {};
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.DEFAULT] = _modDef2958.ZEL6mz;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHERRY_BOMB] = _modDef2958.rN7cuX;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHICLE] = _modDef2958.CbHHnL;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.MUSEO_MODERNO] = _modDef2958.iEcEKO;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEO_CASTEL] = _modDef2958.DL7jLZ;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PIXELIFY] = _modDef2958.jq4aRp;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.SINISTRE] = _modDef2958.jV9DN4;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ZILLA_SLAB] = _modDef2958.KMR8rT;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PLAYPEN_SANS] = _modDef2958.RP8HFf;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ORBITRON] = _modDef2958.pwbAIk;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEW_ROCKER] = _modDef2958["Llo/Ia"];
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.KALAM] = _modDef2958.t9Les4;
const result = size.fileFinishedImporting("modules/display_name_styles/getDisplayNameStylesFontName.tsx");

export default function getDisplayNameStylesFontName(arg0) {
  let ZEL6mz = obj[arg0];
  if (ZEL6mz == null) {
    ZEL6mz = _modDef2958.ZEL6mz;
  }
  return ZEL6mz;
};
export { DISPLAY_NAME_STYLES_FONT_NAMES };
