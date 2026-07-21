// Module ID: 14773
// Function ID: 111366
// Name: useCallA11yState
// Dependencies: []
// Exports: default

// Module 14773 (useCallA11yState)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default function useCallA11yState(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_2];
  return arg1(dependencyMap[2]).useStateFromStoresObject(items, () => {
    const call = closure_3.getCall(arg0);
    const id = id.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    const obj = { isIncomingCall: hasItem, isOngoingCall: closure_3.isCallActive(arg0) && !hasItem };
    return obj;
  });
};
