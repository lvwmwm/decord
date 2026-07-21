// Module ID: 11732
// Function ID: 91129
// Name: setSendState
// Dependencies: []
// Exports: setSendState

// Module 11732 (setSendState)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({}));
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/instant_invite/InstantInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  const require = arg0;
  const dependencyMap = arg1;
  let obj = arg2;
  const state = obj.getState();
  obj = require(dependencyMap[1]);
  obj.batchUpdates(() => {
    let obj = {};
    const merged = Object.assign(closure_3);
    obj = {};
    const merged1 = Object.assign(closure_3[closure_0]);
    obj[arg1] = arg2;
    obj[arg0] = obj;
    arg2.setState(obj);
  });
};
export const useInstantInviteSendStates = obj;
