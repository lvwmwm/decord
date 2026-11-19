// Module ID: 10857
// Function ID: 10858
// Name: useCanRaiseHand
// Dependencies: [4724, 1083, 504, 2]
// Exports: useCanRaiseHand

// Module 10857 (useCanRaiseHand)
import Constants from "Constants" /* 1083 */;
import PermissionStore from "PermissionStore" /* 4724 */;
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
