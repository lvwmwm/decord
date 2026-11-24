// Module ID: 8712
// Function ID: 8713
// Name: computeGlobalSpoilerDisplay
// Dependencies: [4849, 1071, 563, 4742, 2]
// Exports: default, useShouldDisplaySpoilerObscurity

// Module 8712 (computeGlobalSpoilerDisplay)
import PermissionStore from "PermissionStore" /* 4849 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ Permissions: c3, SpoilerRenderSetting: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/messages/computeGlobalSpoilerDisplay.tsx");

export default function computeGlobalSpoilerDisplay(arg0, arg1) {
  if (constants2.ALWAYS === arg0) {
    return true;
  } else if (constants2.IF_MODERATOR === arg0) {
    return arg1;
  } else {
    const ON_CLICK = tmp.ON_CLICK;
    return false;
  }
};
export function useShouldDisplaySpoilerObscurity(stateFromStores) {
  _require = stateFromStores;
  const items = [PermissionStore];
  const obj = require("useStateFromStores");
  stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(constants.MANAGE_MESSAGES, stateFromStores));
  const RenderSpoilers = require("UserSettings").RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  let flag = true;
  if (constants2.ALWAYS !== setting) {
    flag = stateFromStores;
    if (constants2.IF_MODERATOR !== setting) {
      const ON_CLICK = tmp3.ON_CLICK;
      flag = false;
    }
  }
  return !flag;
}
