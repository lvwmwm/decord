// Module ID: 15665
// Function ID: 15666
// Name: useCallA11yState
// Dependencies: [502, 5590, 504, 2]
// Exports: default

// Module 15665 (useCallA11yState)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5590 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default function useCallA11yState(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  const items = [CallStore, AuthenticationStore];
  return obj.useStateFromStoresObject(items, () => {
    const call = CallStore.getCall(closure_0);
    const id = AuthenticationStore.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    const obj2 = { isIncomingCall: hasItem, isOngoingCall: CallStore.isCallActive(closure_0) && !hasItem };
    CallStore.isCallActive(closure_0) && !hasItem;
    return obj2;
  });
};
