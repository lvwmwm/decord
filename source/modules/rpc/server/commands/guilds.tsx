// Module ID: 13286
// Function ID: 100898
// Dependencies: [131072, 2473918464, 3976200207, 4043309072, 2382364723, 33554439, 4026531840]

// Module 13286
let RPCCommands;
const getGuildIconURL = require(dependencyMap[0]).getGuildIconURL;
let closure_3 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[2]);
({ RPCCommands, RPCErrors: closure_4 } = _module);
let obj = {};
obj = {
  scope: require(dependencyMap[3]).OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(dependencyMap[4])(string);
    obj = { guild_id: string.string() };
    const requiredResult = obj.required();
    const numberResult = string.number();
    obj.timeout = string.number().min(0).max(60);
    return requiredResult.keys(obj);
  },
  handler(socket) {
    let args;
    let server;
    let timeout;
    ({ server, args } = socket);
    ({ guild_id: closure_0, timeout } = args);
    if (timeout === undefined) {
      timeout = 0;
    }
    const storeWaitResult = server.storeWait(socket.socket, () => guild.getGuild(closure_0), timeout);
    return server.storeWait(socket.socket, () => guild.getGuild(closure_0), timeout).catch(() => {
      let tmp = callback(closure_1[5]);
      tmp = new tmp({ errorCode: constants.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
      throw tmp;
    }).then((vanityURLCode) => {
      if (null == vanityURLCode) {
        let tmp6 = callback(closure_1[5]);
        let obj = { errorCode: constants.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        const prototype = tmp6.prototype;
        tmp6 = new tmp6(obj, "Invalid guild id: " + callback);
        throw tmp6;
      } else {
        obj = {};
        ({ id: obj.id, name: obj.name } = vanityURLCode);
        const tmp2 = callback2(vanityURLCode, 128);
        let tmp3 = null;
        if (null != tmp2) {
          tmp3 = tmp2;
        }
        obj.icon_url = tmp3;
        obj.members = [];
        obj.vanity_url_code = vanityURLCode.vanityURLCode;
        return obj;
      }
    });
  }
};
obj[RPCCommands.GET_GUILD] = obj;
obj = {
  scope: require(dependencyMap[3]).OAuth2Scopes.RPC,
  handler() {
    const obj = {};
    const guildsArray = guildsArray.getGuildsArray();
    obj.guilds = guildsArray.map((id) => {
      const obj = { id: id.id, name: id.name };
      const tmp = callback(id, 128);
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = tmp;
      }
      obj.icon_url = tmp2;
      return obj;
    });
    return obj;
  }
};
obj[RPCCommands.GET_GUILDS] = obj;
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;
