// Module ID: 13485
// Function ID: 103646
// Name: items
// Dependencies: [5, 4578, 1849, 4033, 482, 8354, 5733, 4585, 10528, 5768, 5739, 10525, 5770, 5482, 2]

// Module 13485 (items)
import set from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import sum from "sum";

let RPCCommands;
let closure_6;
const require = arg1;
RPC_SCOPE_CONFIG = RPC_SCOPE_CONFIG.RPC_SCOPE_CONFIG;
({ RPCCommands, RPCErrors: closure_6 } = sum);
let obj = {};
obj = {};
obj = {};
const items = [require("set").OAuth2Scopes.RPC, RPC_SCOPE_CONFIG.RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler() {
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
obj[RPCCommands.GET_SOUNDBOARD_SOUNDS] = obj;
const obj1 = {};
const obj2 = {};
const items1 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_WRITE];
obj2[RPC_SCOPE_CONFIG.ALL] = items1;
obj1.scope = obj2;
obj1.validation = function validation(string) {
  let obj = importDefault(10528)(string);
  obj = { guild_id: string.string(), sound_id: string.string() };
  return obj.required().keys(obj);
};
obj1.handler = function handler(args) {
  let importDefault;
  let require;
  ({ guild_id: require, sound_id: importDefault } = args.args);
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
obj[RPCCommands.PLAY_SOUNDBOARD_SOUND] = obj1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/server/commands/soundboard.tsx");

export default obj;
