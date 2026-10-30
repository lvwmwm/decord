// Module ID: 16422
// Function ID: 16423
// Name: getDisplayNameStylesFontName
// Dependencies: [1404, 2931, 4282, 2]
// Exports: default

// Module 16422 (getDisplayNameStylesFontName)
import DisplayNameFont from "DisplayNameFont" /* 1404 */;
import _modDef2931 from "module_2931" /* 2931 */;
import _modDef4282 from "module_4282" /* 4282 */;
import size from "module_2" /* 2 */;

const DISPLAY_NAME_STYLES_FONT_NAMES = {};
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.DEFAULT] = _modDef2931.ZEL6mz;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHERRY_BOMB] = _modDef2931.rN7cuX;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.CHICLE] = _modDef2931.CbHHnL;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.MUSEO_MODERNO] = _modDef2931.iEcEKO;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEO_CASTEL] = _modDef2931.DL7jLZ;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PIXELIFY] = _modDef2931.jq4aRp;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.SINISTRE] = _modDef2931.jV9DN4;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ZILLA_SLAB] = _modDef2931.KMR8rT;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.PLAYPEN_SANS] = _modDef2931.RP8HFf;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.ORBITRON] = _modDef2931.pwbAIk;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.NEW_ROCKER] = _modDef2931["Llo/Ia"];
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.KALAM] = _modDef2931.t9Les4;
DISPLAY_NAME_STYLES_FONT_NAMES[DisplayNameFont.DisplayNameFont.HEXAGON] = _modDef4282.ALTlzk;
const result = size.fileFinishedImporting("modules/display_name_styles/getDisplayNameStylesFontName.tsx");

export default function getDisplayNameStylesFontName(arg0) {
  let ZEL6mz = obj[arg0];
  if (ZEL6mz == null) {
    ZEL6mz = _modDef2931.ZEL6mz;
  }
  return ZEL6mz;
};
export { DISPLAY_NAME_STYLES_FONT_NAMES };
