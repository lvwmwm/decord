// Module ID: 13309
// Function ID: 101108
// Name: items
// Dependencies: []

// Module 13309 (items)
let RPCCommands;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
const RPC_SCOPE_CONFIG = tmp2.RPC_SCOPE_CONFIG;
({ RPCCommands, RPCErrors: closure_6 } = arg1(dependencyMap[4]));
let obj = {};
obj = {};
obj = {};
const items = [arg1(dependencyMap[5]).OAuth2Scopes.RPC, tmp2.RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler() {
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
obj[RPCCommands.GET_SOUNDBOARD_SOUNDS] = obj;
const obj1 = {};
const obj2 = {};
const items1 = [arg1(dependencyMap[5]).OAuth2Scopes.RPC, arg1(dependencyMap[5]).OAuth2Scopes.RPC_VOICE_WRITE];
obj2[RPC_SCOPE_CONFIG.ALL] = items1;
obj1.scope = obj2;
obj1.validation = function validation(string) {
  let obj = importDefault(dependencyMap[8])(string);
  obj = { guild_id: string.string(), sound_id: string.string() };
  return obj.required().keys(obj);
};
obj1.handler = function handler(args) {
  ({ guild_id: closure_0, sound_id: closure_1 } = args.args);
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
obj[RPCCommands.PLAY_SOUNDBOARD_SOUND] = obj1;
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/rpc/server/commands/soundboard.tsx");

export default obj;
