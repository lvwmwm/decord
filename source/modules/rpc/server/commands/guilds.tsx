// Module ID: 13400
// Function ID: 103054
// Dependencies: [1391, 1838, 653, 8310, 10499, 10496, 2]

// Module 13400
import { getGuildIconURL } from "isGuildOwner";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";

let RPCCommands;
let closure_4;
({ RPCCommands, RPCErrors: closure_4 } = ME);
let obj = {};
obj = {
  scope: require("set").OAuth2Scopes.RPC,
  validation(string) {
    let obj = importDefault(10499)(string);
    obj = { guild_id: string.string() };
    const requiredResult = obj.required();
    const numberResult = string.number();
    obj.timeout = string.number().min(0).max(60);
    return requiredResult.keys(obj);
  },
  handler(socket) {
    let args;
    let importDefault;
    let server;
    let timeout;
    ({ server, args } = socket);
    ({ guild_id: importDefault, timeout } = args);
    if (timeout === undefined) {
      timeout = 0;
    }
    const storeWaitResult = server.storeWait(socket.socket, () => outer1_3.getGuild(closure_0), timeout);
    return server.storeWait(socket.socket, () => outer1_3.getGuild(closure_0), timeout).catch(() => {
      let tmp = outer1_0(outer1_1[5]);
      tmp = new tmp({ errorCode: outer1_4.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
      throw tmp;
    }).then((vanityURLCode) => {
      if (null == vanityURLCode) {
        let tmp6 = outer1_0(outer1_1[5]);
        let obj = { errorCode: outer1_4.INVALID_GUILD };
        const _HermesInternal = HermesInternal;
        const prototype = tmp6.prototype;
        tmp6 = new tmp6(obj, "Invalid guild id: " + closure_0);
        throw tmp6;
      } else {
        obj = {};
        ({ id: obj.id, name: obj.name } = vanityURLCode);
        const tmp2 = outer1_2(vanityURLCode, 128);
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
  scope: require("set").OAuth2Scopes.RPC,
  handler() {
    let obj = {};
    guildsArray = guildsArray.getGuildsArray();
    obj.guilds = guildsArray.map((id) => {
      const obj = { id: id.id, name: id.name };
      const tmp = outer1_2(id, 128);
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
const result = require("ME").fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;
