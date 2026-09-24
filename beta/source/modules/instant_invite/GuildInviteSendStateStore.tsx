// Module ID: 13461
// Function ID: 13462
// Name: GuildInviteSendStateStore
// Dependencies: [562, 1252, 2]
// Exports: setSendState

// Module 13461 (GuildInviteSendStateStore)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useGuildInviteSendStates = module_562.create(() => ({}));
const result = size.fileFinishedImporting("modules/instant_invite/GuildInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const obj2 = {};
      const merged1 = Object.assign(arg0[closure_1_0]);
      obj2[closure_1_1] = closure_1_2;
      obj[closure_1_0] = obj2;
      return obj;
    });
  });
};
export { useGuildInviteSendStates };
