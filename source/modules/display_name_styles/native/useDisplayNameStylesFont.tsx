// Module ID: 9455
// Function ID: 9456
// Name: DISPLAY_NAME_STYLES_FONT_FAMILY_MAP
// Dependencies: [1934, 1936, 4816, 9454, 2]
// Exports: useDisplayNameStylesFont

// Module 9455 (DISPLAY_NAME_STYLES_FONT_FAMILY_MAP)
import { FLYWHEEL_FONTS } from "items3";

let obj = { [require(1936).DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [require(1936).DisplayNameFont.CHICLE]: "Jellybean-Normal", [require(1936).DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [require(1936).DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [require(1936).DisplayNameFont.PIXELIFY]: "8Bit-Normal", [require(1936).DisplayNameFont.SINISTRE]: "Vampyre-Normal", [require(1936).DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [require(1936).DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [require(1936).DisplayNameFont.ORBITRON]: "Mainframe-Bold", [require(1936).DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [require(1936).DisplayNameFont.KALAM]: "Journal-Bold" };
const result = require("useDisplayNameStylesEnabled").fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = obj;
export const useDisplayNameStylesFont = function useDisplayNameStylesFont(arg0) {
  let displayNameStyles;
  let ignoreDisabledStylesSetting;
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const obj = require(4816) /* useDisplayNameStylesEnabled */;
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" });
  require(9454) /* apexExperiment */;
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
};
