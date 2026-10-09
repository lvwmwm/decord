// Module ID: 14663
// Function ID: 14664
// Name: guilds
// Dependencies: [2082, 2086, 5636, 1085, 8441, 10899, 14655, 10896, 2]

// Module 14663 (guilds)
import GuildRecord from "GuildRecord" /* 2082 */;
import Constants2 from "Constants" /* 5636 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8441 */;
import RPCErrorDefault from "RPCError" /* 10896 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 10899 */;
import botScopedAccess from "botScopedAccess" /* 14655 */;
import GuildStore from "GuildStore" /* 2086 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let hasOwnProperty;
let obj3;
function handler() {
  let guildsArray;
  let obj = {
    guilds: guildsArray.map((id) => {
      let tmp;
      const obj = { id: id.id, name: id.name, icon_url: tmp };
      tmp = getGuildIconURL(id, 128);
      if (tmp == null) {
        tmp = null;
      }
      return obj;
    })
  };
  guildsArray = GuildStore.getGuildsArray();
  return obj;
}
const getGuildIconURL = GuildRecord.getGuildIconURL;
const RPC_SCOPE_CONFIG = Constants2.RPC_SCOPE_CONFIG;
({ RPCCommands, RPCErrors: hasOwnProperty } = Constants);
let obj = {};
let obj2 = {
  scope: obj3,
  validation(string) {
    let minResult;
    const obj = createRpcJoiSchemaObjectDefault(string);
    const requiredResult = obj.required();
    const keys = requiredResult.keys;
    const obj2 = { guild_id: string.string(), timeout: minResult.max(60) };
    const numberResult = string.number();
    minResult = numberResult.min(0);
    return keys(obj2);
  },
  validateAccess(botScopeOnly) {
    if (botScopeOnly.botScopeOnly) {
      const obj = botScopedAccess;
      return obj.validateBotScopeHasGuildAccess(tmp2, tmp);
    }
  },
  handler(socket) {
    let args;
    let server;
    let timeout;
    ({ server, args } = socket);
    ({ guild_id: require, timeout } = args);
    socket = socket.socket;
    if (timeout === undefined) {
      timeout = 0;
    }
    const storeWaitResult = server.storeWait(socket, () => GuildStore.getGuild(require), timeout);
    const catchPromise = storeWaitResult.catch(() => {
      const obj = { errorCode: constants.GET_GUILD_TIMED_OUT };
      const tmp = new RPCErrorDefault(obj, "Request to get guild timed out.");
      throw tmp;
    });
    return catchPromise.then(function(vanityURLCode) {
      let tmp2;
      if (null == vanityURLCode) {
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const obj2 = { errorCode: hasOwnProperty.INVALID_GUILD };
        const tmp5 = RPCErrorDefault;
        const tmp52 = new tmp5(obj2, "Invalid guild id: " + require);
        throw tmp52;
      } else {
        const obj = { id: null, name: null, icon_url: tmp2, members: [], vanity_url_code: vanityURLCode.vanityURLCode };
        ({ id: obj.id, name: obj.name } = vanityURLCode);
        tmp2 = getGuildIconURL(vanityURLCode, 128);
        if (tmp2 == null) {
          tmp2 = null;
        }
        return obj;
      }
    });
  }
};
obj3 = {};
const GET_GUILD = RPCCommands.GET_GUILD;
const ANY = RPC_SCOPE_CONFIG.ANY;
const items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.BOT];
obj3[ANY] = items;
obj[GET_GUILD] = obj2;
obj[RPCCommands.GET_GUILDS] = { scope: OAuth2Scopes.OAuth2Scopes.RPC, handler };
({ scope: OAuth2Scopes.OAuth2Scopes.RPC, handler });
const result = size.fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;
