// Module ID: 14792
// Function ID: 14793
// Name: getDisplayNameStylesFontName
// Dependencies: [1410, 2955, 2]
// Exports: default

// Module 14792 (getDisplayNameStylesFontName)
import DisplayNameFont from "DisplayNameFont" /* 1410 */;
import _modDef2955 from "module_2955" /* 2955 */;
import size from "module_2" /* 2 */;

const DISPLAY_NAME_STYLES_FONT_NAMES = {};
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.DEFAULT] = _modDef2955.ZEL6mz;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHERRY_BOMB] = _modDef2955.rN7cuX;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHICLE] = _modDef2955.CbHHnL;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.MUSEO_MODERNO] = _modDef2955.iEcEKO;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEO_CASTEL] = _modDef2955.DL7jLZ;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PIXELIFY] = _modDef2955.jq4aRp;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.SINISTRE] = _modDef2955.jV9DN4;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ZILLA_SLAB] = _modDef2955.KMR8rT;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PLAYPEN_SANS] = _modDef2955.RP8HFf;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ORBITRON] = _modDef2955.pwbAIk;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEW_ROCKER] = _modDef2955["Llo/Ia"];
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.KALAM] = _modDef2955.t9Les4;
const result = size.fileFinishedImporting("modules/display_name_styles/getDisplayNameStylesFontName.tsx");

export default function getDisplayNameStylesFontName(arg0) {
  let ZEL6mz = obj[arg0];
  if (ZEL6mz == null) {
    ZEL6mz = _modDef2955.ZEL6mz;
  }
  return ZEL6mz;
};
export { DISPLAY_NAME_STYLES_FONT_NAMES };
