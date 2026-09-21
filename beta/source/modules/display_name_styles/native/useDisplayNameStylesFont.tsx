// Module ID: 9974
// Function ID: 9975
// Name: useDisplayNameStylesFont
// Dependencies: [1394, 1396, 558, 568, 4992, 9975, 2]

// Module 9974 (useDisplayNameStylesFont)
import c from "c" /* 568 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1394 */;
import DisplayNameFont from "DisplayNameFont" /* 1396 */;
import useDisplayNameStylesEnabled from "useDisplayNameStylesEnabled" /* 4992 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 9975 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const FLYWHEEL_FONTS = DisplayNameStylesConstants.FLYWHEEL_FONTS;
const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = { [DisplayNameFont.DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [DisplayNameFont.DisplayNameFont.CHICLE]: "Jellybean-Normal", [DisplayNameFont.DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [DisplayNameFont.DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [DisplayNameFont.DisplayNameFont.PIXELIFY]: "8Bit-Normal", [DisplayNameFont.DisplayNameFont.SINISTRE]: "Vampyre-Normal", [DisplayNameFont.DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [DisplayNameFont.DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [DisplayNameFont.DisplayNameFont.ORBITRON]: "Mainframe-Bold", [DisplayNameFont.DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [DisplayNameFont.DisplayNameFont.KALAM]: "Journal-Bold" };
const result = size.fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export { DISPLAY_NAME_STYLES_FONT_FAMILY_MAP };
export const useDisplayNameStylesFont = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = c;
  const cResult = obj.c(1);
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "useDisplayNameStylesFont-native" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const displayNameStylesEnabled = useDisplayNameStylesEnabled.useDisplayNameStylesEnabled(first);
  DisplayNameStylesFlywheelExperiment;
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
}) : ((arg0) => {
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const obj = useDisplayNameStylesEnabled;
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" });
  DisplayNameStylesFlywheelExperiment;
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
});
