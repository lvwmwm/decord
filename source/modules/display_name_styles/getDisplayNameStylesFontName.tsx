// Module ID: 13637
// Function ID: 104747
// Name: getDisplayNameStylesFontName
// Dependencies: [1863, 2556, 2]
// Exports: default

// Module 13637 (getDisplayNameStylesFontName)
const obj = {};
obj[require("DisplayNameFont").DisplayNameFont.DEFAULT] = require("messagesProxy").ZEL6mz;
obj[require("DisplayNameFont").DisplayNameFont.CHERRY_BOMB] = require("messagesProxy").rN7cuX;
obj[require("DisplayNameFont").DisplayNameFont.CHICLE] = require("messagesProxy").CbHHnL;
obj[require("DisplayNameFont").DisplayNameFont.MUSEO_MODERNO] = require("messagesProxy").iEcEKO;
obj[require("DisplayNameFont").DisplayNameFont.NEO_CASTEL] = require("messagesProxy").DL7jLZ;
obj[require("DisplayNameFont").DisplayNameFont.PIXELIFY] = require("messagesProxy").jq4aRp;
obj[require("DisplayNameFont").DisplayNameFont.SINISTRE] = require("messagesProxy").jV9DN4;
obj[require("DisplayNameFont").DisplayNameFont.ZILLA_SLAB] = require("messagesProxy").KMR8rT;
obj[require("DisplayNameFont").DisplayNameFont.PLAYPEN_SANS] = require("messagesProxy").RP8HFf;
obj[require("DisplayNameFont").DisplayNameFont.ORBITRON] = require("messagesProxy").pwbAIk;
obj[require("DisplayNameFont").DisplayNameFont.NEW_ROCKER] = require("messagesProxy")["Llo/Ia"];
obj[require("DisplayNameFont").DisplayNameFont.KALAM] = require("messagesProxy").t9Les4;
const result = require("set").fileFinishedImporting("modules/display_name_styles/getDisplayNameStylesFontName.tsx");

export default function getDisplayNameStylesFontName(arg0) {
  let ZEL6mz = obj[arg0];
  if (null == ZEL6mz) {
    ZEL6mz = importDefault(2556).ZEL6mz;
  }
  return ZEL6mz;
};
export const DISPLAY_NAME_STYLES_FONT_NAMES = obj;
