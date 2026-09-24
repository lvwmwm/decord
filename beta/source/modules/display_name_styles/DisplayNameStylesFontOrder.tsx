// Module ID: 15608
// Function ID: 15609
// Name: DisplayNameStylesFontOrder
// Dependencies: [19, 1394, 1396, 558, 10007, 2]

// Module 15608 (DisplayNameStylesFontOrder)
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 10007 */;
import noop from "module_19" /* 19 */;

require = fn;
let items = [fn(1396).DisplayNameFont.DEFAULT, fn(1396).DisplayNameFont.ZILLA_SLAB, fn(1396).DisplayNameFont.CHERRY_BOMB, fn(1396).DisplayNameFont.CHICLE, fn(1396).DisplayNameFont.MUSEO_MODERNO, fn(1396).DisplayNameFont.NEO_CASTEL, fn(1396).DisplayNameFont.PIXELIFY, fn(1396).DisplayNameFont.SINISTRE];
const items1 = [...fn(1394).FLYWHEEL_FONTS];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFontOrder.tsx");

export const useVisibleFontOrder = ReactCompilerGating.isReactCompilerEnabled() ? (() => DisplayNameStylesFlywheelExperiment.useIsDisplayNameStylesFlywheelSettersEnabled("font-order") ? items1 : items) : (() => {
  isDisplayNameStylesFlywheelSettersEnabled = isDisplayNameStylesFlywheelSettersEnabled(10007).useIsDisplayNameStylesFlywheelSettersEnabled("font-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return noop.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items1 : items, items);
});
