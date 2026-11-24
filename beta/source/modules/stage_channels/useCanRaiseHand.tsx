// Module ID: 10919
// Function ID: 10920
// Name: useCanRaiseHand
// Dependencies: [4845, 1082, 504, 2]
// Exports: useCanRaiseHand

// Module 10919 (useCanRaiseHand)
import Constants from "Constants" /* 1082 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export function useCanRaiseHand(id) {
  _require = id;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(Permissions.REQUEST_TO_SPEAK, id));
}
