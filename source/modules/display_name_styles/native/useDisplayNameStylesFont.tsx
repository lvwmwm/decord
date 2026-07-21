// Module ID: 8509
// Function ID: 67889
// Name: DISPLAY_NAME_STYLES_FONT_FAMILY_MAP
// Dependencies: []
// Exports: useDisplayNameStylesFont

// Module 8509 (DISPLAY_NAME_STYLES_FONT_FAMILY_MAP)
const FLYWHEEL_FONTS = require(dependencyMap[0]).FLYWHEEL_FONTS;
const obj = { [require(dependencyMap[1]).DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [require(dependencyMap[1]).DisplayNameFont.CHICLE]: "Jellybean-Normal", [require(dependencyMap[1]).DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [require(dependencyMap[1]).DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [require(dependencyMap[1]).DisplayNameFont.PIXELIFY]: "8Bit-Normal", [require(dependencyMap[1]).DisplayNameFont.SINISTRE]: "Vampyre-Normal", [require(dependencyMap[1]).DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [require(dependencyMap[1]).DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [require(dependencyMap[1]).DisplayNameFont.ORBITRON]: "Mainframe-Bold", [require(dependencyMap[1]).DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [require(dependencyMap[1]).DisplayNameFont.KALAM]: "Journal-Bold" };
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = obj;
export const useDisplayNameStylesFont = function useDisplayNameStylesFont(arg0) {
  let displayNameStyles;
  let ignoreDisabledStylesSetting;
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const obj = require(dependencyMap[2]);
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" });
  require(dependencyMap[3]);
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
};
