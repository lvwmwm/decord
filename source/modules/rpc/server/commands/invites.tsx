// Module ID: 13288
// Function ID: 100912
// Name: items
// Dependencies: []

// Module 13288 (items)
let RPCCommands;
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const InstantInviteSources = arg1(dependencyMap[4]).InstantInviteSources;
({ RPCCommands, RPCErrors: closure_6 } = arg1(dependencyMap[5]));
let obj = {};
const tmp2 = arg1(dependencyMap[5]);
obj = {};
obj = {};
const items = [arg1(dependencyMap[7]).OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, arg1(dependencyMap[7]).OAuth2Scopes.ACTIVITIES_INVITES_WRITE];
obj[arg1(dependencyMap[3]).RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(arg0) {
  let args;
  ({ socket: closure_0, args } = arg0);
  ({ user_id: closure_1, content: closure_2 } = args);
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
obj[RPCCommands.INVITE_USER_EMBEDDED] = arg1(dependencyMap[6]).createRPCCommand(RPCCommands.INVITE_USER_EMBEDDED, obj);
const obj2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/rpc/server/commands/invites.tsx");

export default obj;
