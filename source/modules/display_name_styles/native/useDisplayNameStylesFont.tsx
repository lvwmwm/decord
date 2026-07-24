// Module ID: 8561
// Function ID: 68168
// Name: DISPLAY_NAME_STYLES_FONT_FAMILY_MAP
// Dependencies: [1861, 1863, 4362, 8560, 2]
// Exports: useDisplayNameStylesFont

// Module 8561 (DISPLAY_NAME_STYLES_FONT_FAMILY_MAP)
import { FLYWHEEL_FONTS } from "items3";

let obj = { [require(1863).DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [require(1863).DisplayNameFont.CHICLE]: "Jellybean-Normal", [require(1863).DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [require(1863).DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [require(1863).DisplayNameFont.PIXELIFY]: "8Bit-Normal", [require(1863).DisplayNameFont.SINISTRE]: "Vampyre-Normal", [require(1863).DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [require(1863).DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [require(1863).DisplayNameFont.ORBITRON]: "Mainframe-Bold", [require(1863).DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [require(1863).DisplayNameFont.KALAM]: "Journal-Bold" };
const result = require("useDisplayNameStylesEnabled").fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = obj;
export const useDisplayNameStylesFont = function useDisplayNameStylesFont(arg0) {
  let displayNameStyles;
  let ignoreDisabledStylesSetting;
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const obj = require(4362) /* useDisplayNameStylesEnabled */;
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" });
  require(8560) /* apexExperiment */;
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
};
