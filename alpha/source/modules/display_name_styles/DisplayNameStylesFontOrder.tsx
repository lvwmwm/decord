// Module ID: 15609
// Function ID: 15610
// Name: DisplayNameStylesFontOrder
// Dependencies: [19, 1408, 1410, 558, 14847, 2]

// Module 15609 (DisplayNameStylesFontOrder)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1408 */;
import DisplayNameFont from "DisplayNameFont" /* 1410 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 14847 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const FLYWHEEL_FONTS = DisplayNameStylesConstants.FLYWHEEL_FONTS;
let items = [DisplayNameFont.DisplayNameFont.DEFAULT, DisplayNameFont.DisplayNameFont.ZILLA_SLAB, DisplayNameFont.DisplayNameFont.CHERRY_BOMB, DisplayNameFont.DisplayNameFont.CHICLE, DisplayNameFont.DisplayNameFont.MUSEO_MODERNO, DisplayNameFont.DisplayNameFont.NEO_CASTEL, DisplayNameFont.DisplayNameFont.PIXELIFY, DisplayNameFont.DisplayNameFont.SINISTRE];
const items1 = [...FLYWHEEL_FONTS];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibleFontOrder() {
  const obj = DisplayNameStylesFlywheelExperiment;
  return obj.useIsDisplayNameStylesFlywheelSettersEnabled("font-order") ? items1 : items;
}) : (function useVisibleFontOrder() {
  let isDisplayNameStylesFlywheelSettersEnabled;
  const obj = isDisplayNameStylesFlywheelSettersEnabled(14847);
  isDisplayNameStylesFlywheelSettersEnabled = obj.useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return react.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items1 : items, items);
});
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = tmp2;
