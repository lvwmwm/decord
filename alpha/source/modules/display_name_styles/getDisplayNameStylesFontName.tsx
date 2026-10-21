// Module ID: 15761
// Function ID: 15762
// Name: getDisplayNameStylesFontName
// Dependencies: [1412, 2928, 2]
// Exports: default

// Module 15761 (getDisplayNameStylesFontName)
import DisplayNameFont from "DisplayNameFont" /* 1412 */;
import _modDef2928 from "module_2928" /* 2928 */;
import size from "module_2" /* 2 */;

const DISPLAY_NAME_STYLES_FONT_NAMES = {};
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.DEFAULT] = _modDef2928.ZEL6mz;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHERRY_BOMB] = _modDef2928.rN7cuX;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHICLE] = _modDef2928.CbHHnL;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.MUSEO_MODERNO] = _modDef2928.iEcEKO;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEO_CASTEL] = _modDef2928.DL7jLZ;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PIXELIFY] = _modDef2928.jq4aRp;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.SINISTRE] = _modDef2928.jV9DN4;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ZILLA_SLAB] = _modDef2928.KMR8rT;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PLAYPEN_SANS] = _modDef2928.RP8HFf;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ORBITRON] = _modDef2928.pwbAIk;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEW_ROCKER] = _modDef2928["Llo/Ia"];
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.KALAM] = _modDef2928.t9Les4;
const result = size.fileFinishedImporting("modules/display_name_styles/getDisplayNameStylesFontName.tsx");

export default function getDisplayNameStylesFontName(arg0) {
  let ZEL6mz = obj[arg0];
  if (ZEL6mz == null) {
    ZEL6mz = _modDef2928.ZEL6mz;
  }
  return ZEL6mz;
};
export { DISPLAY_NAME_STYLES_FONT_NAMES };
