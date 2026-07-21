// Module ID: 13306
// Function ID: 101102
// Name: RPC_EMBEDDED_APP_SCOPE
// Dependencies: []

// Module 13306 (RPC_EMBEDDED_APP_SCOPE)
let RPC_EMBEDDED_APP_SCOPE;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_2 = importDefault(dependencyMap[0]);
({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = arg1(dependencyMap[1]));
const RPCCommands = arg1(dependencyMap[2]).RPCCommands;
let obj = {};
const tmp2 = arg1(dependencyMap[1]);
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(args) {
    const user = user.getUser(args.args.id);
    let tmp2 = null;
    if (null != user) {
      tmp2 = importDefault(dependencyMap[4])(user);
    }
    return tmp2;
  }
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE];
obj[RPCCommands.GET_USER] = arg1(dependencyMap[3]).createRPCCommand(RPCCommands.GET_USER, obj);
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;
