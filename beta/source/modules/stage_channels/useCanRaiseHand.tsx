// Module ID: 9389
// Function ID: 9390
// Name: useCanRaiseHand
// Dependencies: [4469, 1085, 504, 2]
// Exports: useCanRaiseHand

// Module 9389 (useCanRaiseHand)
import Constants from "Constants" /* 1085 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel));
};
