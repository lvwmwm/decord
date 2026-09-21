// Module ID: 10129
// Function ID: 10130
// Name: InstantInviteSendStateStore
// Dependencies: [562, 1252, 2]
// Exports: setSendState

// Module 10129 (InstantInviteSendStateStore)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let useInstantInviteSendStates = module_562.create(() => ({}));
const result = size.fileFinishedImporting("modules/instant_invite/InstantInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  useInstantInviteSendStates = arg2;
  state = useInstantInviteSendStates.getState();
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = {};
    const merged = Object.assign(closure_3);
    const obj2 = {};
    const merged1 = Object.assign(closure_3[closure_0]);
    obj2[closure_1] = closure_2;
    obj[closure_0] = obj2;
    obj.setState(obj);
  });
};
export { useInstantInviteSendStates };
