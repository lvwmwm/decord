// Module ID: 9159
// Function ID: 9160
// Name: DISPLAY_NAME_STYLES_FONT_FAMILY_MAP
// Dependencies: [1915, 1917, 4515, 9160, 2]
// Exports: useDisplayNameStylesFont

// Module 9159 (DISPLAY_NAME_STYLES_FONT_FAMILY_MAP)
import { FLYWHEEL_FONTS } from "items3";

let obj = { [require(1917).DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [require(1917).DisplayNameFont.CHICLE]: "Jellybean-Normal", [require(1917).DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [require(1917).DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [require(1917).DisplayNameFont.PIXELIFY]: "8Bit-Normal", [require(1917).DisplayNameFont.SINISTRE]: "Vampyre-Normal", [require(1917).DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [require(1917).DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [require(1917).DisplayNameFont.ORBITRON]: "Mainframe-Bold", [require(1917).DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [require(1917).DisplayNameFont.KALAM]: "Journal-Bold" };
const result = require("useDisplayNameStylesEnabled").fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = obj;
export const useDisplayNameStylesFont = function useDisplayNameStylesFont(arg0) {
  let displayNameStyles;
  let ignoreDisabledStylesSetting;
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const obj = require(4515) /* useDisplayNameStylesEnabled */;
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" });
  require(9160) /* apexExperiment */;
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
};
