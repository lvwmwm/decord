// Module ID: 10799
// Function ID: 10800
// Name: useCanRaiseHand
// Dependencies: [4726, 1082, 504, 2]
// Exports: useCanRaiseHand

// Module 10799 (useCanRaiseHand)
import Constants from "Constants" /* 1082 */;
import PermissionStore from "PermissionStore" /* 4726 */;
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
