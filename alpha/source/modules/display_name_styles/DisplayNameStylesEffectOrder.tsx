// Module ID: 16314
// Function ID: 16315
// Name: DisplayNameStylesEffectOrder
// Dependencies: [19, 1410, 558, 15560, 2]

// Module 16314 (DisplayNameStylesEffectOrder)
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 15560 */;
import react from "react" /* 19 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1410 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const EFFECT_ORDER = DisplayNameStylesConstants.EFFECT_ORDER;
const FLYWHEEL_EFFECTS = DisplayNameStylesConstants.FLYWHEEL_EFFECTS;
let items = [...FLYWHEEL_EFFECTS];
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVisibleEffectOrder() {
  const obj = DisplayNameStylesFlywheelExperiment;
  return obj.useIsDisplayNameStylesFlywheelSettersEnabled("effect-order") ? items : EFFECT_ORDER;
}) : (function useVisibleEffectOrder() {
  let isDisplayNameStylesFlywheelSettersEnabled;
  const obj = isDisplayNameStylesFlywheelSettersEnabled(15560);
  isDisplayNameStylesFlywheelSettersEnabled = obj.useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return react.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items : EFFECT_ORDER, items);
});
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = tmp3;
