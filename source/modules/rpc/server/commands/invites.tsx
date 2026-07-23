// Module ID: 13402
// Function ID: 103068
// Name: items
// Dependencies: [5, 1347, 1348, 4033, 653, 482, 13403, 8310, 10497, 10819, 13406, 669, 10486, 2]

// Module 13402 (items)
import closure_2 from "sum";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { InstantInviteSources } from "ME";
import sum from "sum";
import createRPCCommand from "createRPCCommand";

let RPCCommands;
let closure_6;
const require = arg1;
({ RPCCommands, RPCErrors: closure_6 } = sum);
let obj = {};
obj = {};
obj = {};
const items = [require("set").OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, require("set").OAuth2Scopes.ACTIVITIES_INVITES_WRITE];
obj[require("RPC_SCOPE_CONFIG").RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler(arg0) {
  let args;
  let closure_2;
  let dependencyMap;
  let require;
  ({ socket: require, args } = arg0);
  ({ user_id: dependencyMap, content: closure_2 } = args);
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
obj[RPCCommands.INVITE_USER_EMBEDDED] = createRPCCommand.createRPCCommand(RPCCommands.INVITE_USER_EMBEDDED, obj);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/server/commands/invites.tsx");

export default obj;
