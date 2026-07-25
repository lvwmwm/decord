// Module ID: 10825
// Function ID: 83949
// Name: computeGlobalSpoilerDisplay
// Dependencies: [3759, 653, 624, 3804, 2]
// Exports: useShouldDisplaySpoilerObscurity

// Module 10825 (computeGlobalSpoilerDisplay)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_3;
let closure_4;
const require = arg1;
function computeGlobalSpoilerDisplay(RenderSpoilers, stateFromStores) {
  if (constants.ALWAYS === RenderSpoilers) {
    return true;
  } else if (constants.IF_MODERATOR === RenderSpoilers) {
    return stateFromStores;
  } else {
    const ON_CLICK = constants.ON_CLICK;
    return false;
  }
}
({ Permissions: closure_3, SpoilerRenderSetting: closure_4 } = ME);
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/messages/computeGlobalSpoilerDisplay.tsx");

export default computeGlobalSpoilerDisplay;
export const useShouldDisplaySpoilerObscurity = function useShouldDisplaySpoilerObscurity(channel) {
  const _require = channel;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_2.can(outer1_3.MANAGE_MESSAGES, closure_0));
  const RenderSpoilers = _require(3804).RenderSpoilers;
  return !computeGlobalSpoilerDisplay(RenderSpoilers.useSetting(), stateFromStores);
};
