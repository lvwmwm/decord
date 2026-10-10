// Module ID: 8853
// Function ID: 8854
// Name: useDisplayNameStylesFont
// Dependencies: [1410, 558, 576, 5629, 2]

// Module 8853 (useDisplayNameStylesFont)
import react from "react" /* 576 */;
import DisplayNameFont from "DisplayNameFont" /* 1410 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const useDisplayNameStylesEnabled = tmp(5629);
const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = { [DisplayNameFont.DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [DisplayNameFont.DisplayNameFont.CHICLE]: "Jellybean-Normal", [DisplayNameFont.DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [DisplayNameFont.DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [DisplayNameFont.DisplayNameFont.PIXELIFY]: "8Bit-Normal", [DisplayNameFont.DisplayNameFont.SINISTRE]: "Vampyre-Normal", [DisplayNameFont.DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [DisplayNameFont.DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [DisplayNameFont.DisplayNameFont.ORBITRON]: "Mainframe-Bold", [DisplayNameFont.DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [DisplayNameFont.DisplayNameFont.KALAM]: "Journal-Bold" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayNameStylesFont(arg0) {
  let displayNameStyles;
  let first;
  let ignoreDisabledStylesSetting;
  const obj = react;
  const cResult = obj.c(1);
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useDisplayNameStylesFont-native" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = useDisplayNameStylesEnabled;
  if (tmpResult.useDisplayNameStylesEnabled(first)) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
}) : (function useDisplayNameStylesFont(arg0) {
  let displayNameStyles;
  let ignoreDisabledStylesSetting;
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const obj = useDisplayNameStylesEnabled;
  if (obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" })) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
});
const result = size.fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export { DISPLAY_NAME_STYLES_FONT_FAMILY_MAP };
export const useDisplayNameStylesFont = tmp2;
