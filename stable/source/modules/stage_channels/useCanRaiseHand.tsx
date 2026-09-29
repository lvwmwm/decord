// Module ID: 10229
// Function ID: 10230
// Name: useCanRaiseHand
// Dependencies: [4427, 1085, 504, 2]
// Exports: useCanRaiseHand

// Module 10229 (useCanRaiseHand)
import PermissionStore from "PermissionStore" /* 4427 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCanRaiseHand.tsx");

export const useCanRaiseHand = function useCanRaiseHand(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.REQUEST_TO_SPEAK, closure_0));
};
