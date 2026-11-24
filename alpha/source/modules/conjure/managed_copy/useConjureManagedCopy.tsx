// Module ID: 18300
// Function ID: 18301
// Name: useConjureManagedCopy
// Dependencies: [7572, 504, 2]
// Exports: default, useConjureCopyLastSync, useConjureDownstreamUpdates, useIsConjureManagedCopy

// Module 18300 (useConjureManagedCopy)
import ConjureManagedCopyStore from "ConjureManagedCopyStore" /* 7572 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f114478 = () => {
  let copy = null;
  if (null != id) {
    copy = ConjureManagedCopyStore.getCopy(tmp);
  }
  return copy;
};
const result = size.fileFinishedImporting("modules/conjure/managed_copy/useConjureManagedCopy.tsx");

export default function useConjureManagedCopy(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureManagedCopyStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f114478, items1);
};
export function useIsConjureManagedCopy(id) {
  _require = id;
  const items = [ConjureManagedCopyStore];
  const items1 = [id];
  const obj = require("get initialized");
  return null != obj.useStateFromStores(items, f114478, items1);
}
export function useConjureCopyLastSync(projectId) {
  _require = projectId;
  const items = [ConjureManagedCopyStore];
  const items1 = [projectId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => ConjureManagedCopyStore.getLastSync(projectId), items1);
}
export function useConjureDownstreamUpdates(projectId) {
  _require = projectId;
  const items = [ConjureManagedCopyStore];
  const items1 = [projectId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => ConjureManagedCopyStore.getDownstreamUpdates(projectId), items1);
}
