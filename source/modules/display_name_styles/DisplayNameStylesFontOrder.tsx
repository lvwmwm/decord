// Module ID: 14501
// Function ID: 14502
// Name: items
// Dependencies: [19, 1915, 1917, 9177, 2]
// Exports: useVisibleFontOrder

// Module 14501 (items)
import noop from "noop";

const require = arg1;
let items = [require("DisplayNameFont").DisplayNameFont.DEFAULT, require("DisplayNameFont").DisplayNameFont.ZILLA_SLAB, require("DisplayNameFont").DisplayNameFont.CHERRY_BOMB, require("DisplayNameFont").DisplayNameFont.CHICLE, require("DisplayNameFont").DisplayNameFont.MUSEO_MODERNO, require("DisplayNameFont").DisplayNameFont.NEO_CASTEL, require("DisplayNameFont").DisplayNameFont.PIXELIFY, require("DisplayNameFont").DisplayNameFont.SINISTRE];
const items1 = [...require("items3").FLYWHEEL_FONTS];
const result = require("DisplayNameFont").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = function useVisibleFontOrder() {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(9177).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  const items = [isDisplayNameStylesFlywheelSettersEnabled];
  return React.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? outer1_4 : outer1_3, items);
};
