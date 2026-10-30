// Module ID: 18034
// Function ID: 18035
// Name: useCallA11yState
// Dependencies: [502, 6563, 504, 2]
// Exports: default

// Module 18034 (useCallA11yState)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 6563 */;
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
