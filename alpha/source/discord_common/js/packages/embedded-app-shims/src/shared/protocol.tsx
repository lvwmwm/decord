// Module ID: 18829
// Function ID: 18830
// Name: protocol
// Dependencies: [18830, 2]
// Exports: generateNonce, isSameChildState, isShimWindowMessage, mergeChildStates, readNonce

// Module 18829 (protocol)
import Safe2 from "Safe" /* 18830 */;
import size from "module_2" /* 2 */;

const discordEmbeddedAppShim = "discordEmbeddedAppShim";
const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/protocol.tsx");

export const SHIM_MESSAGE_KEY = "discordEmbeddedAppShim";
export const isShimWindowMessage = function isShimWindowMessage(obj) {
  let tmp = null != obj && typeof obj === "object";
  if (tmp) {
    const _Object = Safe2.Safe.Object;
    tmp = null != _Object.getOwnPropertyDescriptor(obj, discordEmbeddedAppShim);
  }
  return tmp;
};
export const readNonce = function readNonce(arg0) {
  const _Object = Safe2.Safe.Object;
  const iter = _Object.getOwnPropertyDescriptor(arg0, "nonce");
  let value;
  if (iter != null) {
    value = iter.value;
  }
  let tmp2 = null;
  if (typeof value === "string") {
    tmp2 = value;
  }
  return tmp2;
};
export const generateNonce = function generateNonce() {
  const uint32Array = new Safe2.Safe.Constructor.Uint32Array(2);
  const Crypto = Safe2.Safe.Crypto;
  const randomValues = Crypto.getRandomValues(uint32Array);
  return "" + uint32Array[0] + "-" + uint32Array[1];
};
export const SILENT_CHILD_STATE = { audible: false };
export const mergeChildStates = function mergeChildStates(arg0) {
  let ArrayResult;
  const obj = { audible: ArrayResult.some((audible) => audible.audible) };
  const Safe = Safe2.Safe;
  ArrayResult = Safe.Array(arg0);
  return obj;
};
export const isSameChildState = function isSameChildState(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const Safe = Safe2.Safe;
  const _Array = Safe.Array;
  const _Object = Safe2.Safe.Object;
  const _ArrayResult = _Array(_Object.keys(arg0));
  return _ArrayResult.every((item) => closure_0[item] === closure_1[item]);
};
export const ParentToChildEvent = { STATE_UPDATED: 0, [0]: "STATE_UPDATED" };
export const ChildToParentEvent = { STATE_UPDATED: 0, [0]: "STATE_UPDATED", DISCONNECTED: 1, [1]: "DISCONNECTED", CONNECTION_ACCEPTED: 2, [2]: "CONNECTION_ACCEPTED" };
