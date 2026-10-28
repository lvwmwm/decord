// Module ID: 16967
// Function ID: 16968
// Name: DisplayNameStylesEffectOrder
// Dependencies: [19, 1407, 558, 16129, 2]

// Module 16967 (DisplayNameStylesEffectOrder)
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 16129 */;
import react from "react" /* 19 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1407 */;
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
  const obj = isDisplayNameStylesFlywheelSettersEnabled(16129);
  isDisplayNameStylesFlywheelSettersEnabled = obj.useIsDisplayNameStylesFlywheelSettersEnabled("effect-order");
  items = [isDisplayNameStylesFlywheelSettersEnabled];
  return react.useMemo(() => isDisplayNameStylesFlywheelSettersEnabled ? items : EFFECT_ORDER, items);
});
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesEffectOrder.tsx");

export const useVisibleEffectOrder = tmp3;
