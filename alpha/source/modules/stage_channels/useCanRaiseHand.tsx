// Module ID: 12099
// Function ID: 12100
// Name: useCanRaiseHand
// Dependencies: [5073, 1083, 504, 2]
// Exports: useCanRaiseHand

// Module 12099 (useCanRaiseHand)
import Constants from "Constants" /* 1083 */;
import PermissionStore from "PermissionStore" /* 5073 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export function useCanRaiseHand(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(Permissions.REQUEST_TO_SPEAK, channel));
}
