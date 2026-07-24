// Module ID: 14947
// Function ID: 113932
// Name: useCallA11yState
// Dependencies: [1194, 4809, 566, 2]
// Exports: default

// Module 14947 (useCallA11yState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default function useCallA11yState(arg0) {
  const _require = arg0;
  const items = [closure_3, _isNativeReflectConstruct];
  return _require(566).useStateFromStoresObject(items, () => {
    const call = outer1_3.getCall(closure_0);
    const id = outer1_2.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    const obj = { isIncomingCall: hasItem, isOngoingCall: outer1_3.isCallActive(closure_0) && !hasItem };
    return obj;
  });
};
