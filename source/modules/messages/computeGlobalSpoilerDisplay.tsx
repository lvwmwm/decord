// Module ID: 10875
// Function ID: 84359
// Name: computeGlobalSpoilerDisplay
// Dependencies: [3758, 653, 624, 3803, 2]
// Exports: useShouldDisplaySpoilerObscurity

// Module 10875 (computeGlobalSpoilerDisplay)
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
  const RenderSpoilers = _require(3803).RenderSpoilers;
  return !computeGlobalSpoilerDisplay(RenderSpoilers.useSetting(), stateFromStores);
};
