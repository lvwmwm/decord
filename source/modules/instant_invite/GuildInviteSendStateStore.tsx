// Module ID: 12138
// Function ID: 95079
// Name: setSendState
// Dependencies: [621, 682, 2]
// Exports: setSendState

// Module 12138 (setSendState)
import keys from "keys";

let obj = keys.create(() => ({}));
const result = require("set").fileFinishedImporting("modules/instant_invite/GuildInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  const _require = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  _require(682).batchUpdates(() => {
    state.setState((arg0) => {
      let obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(arg0[outer1_0]);
      obj[outer1_1] = outer1_2;
      obj[outer1_0] = obj;
      return obj;
    });
  });
};
export const useGuildInviteSendStates = obj;
