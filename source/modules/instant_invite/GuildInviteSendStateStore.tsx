// Module ID: 12020
// Function ID: 92902
// Name: setSendState
// Dependencies: []
// Exports: setSendState

// Module 12020 (setSendState)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({}));
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/instant_invite/GuildInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  const require = arg0;
  const dependencyMap = arg1;
  let obj = arg2;
  obj = require(dependencyMap[1]);
  obj.batchUpdates(() => {
    arg2.setState((arg0) => {
      let obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(arg0[closure_0]);
      obj[closure_1] = closure_2;
      obj[closure_0] = obj;
      return obj;
    });
  });
};
export const useGuildInviteSendStates = obj;
