// Module ID: 15510
// Function ID: 15511
// Name: guilds
// Dependencies: [2086, 2122, 2090, 5895, 1087, 15503, 8731, 9172, 9169, 11335, 2]

// Module 15510 (guilds)
import GuildRecord from "GuildRecord" /* 2086 */;
import Constants2 from "Constants" /* 5895 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8731 */;
import RPCErrorDefault from "RPCError" /* 9169 */;
import botScopedAccess from "botScopedAccess" /* 9172 */;
import RPCHelpers from "RPCHelpers" /* 11335 */;
import GuildRoleStore from "GuildRoleStore" /* 2122 */;
import GuildStore from "GuildStore" /* 2090 */;
import Constants from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 15503 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let metroRequire;
let obj3;
const getGuildIconURL = GuildRecord.getGuildIconURL;
const RPC_SCOPE_CONFIG = Constants2.RPC_SCOPE_CONFIG;
({ RPCCommands, RPCErrors: metroRequire } = Constants);
let obj = {};
const GET_GUILD = RPCCommands.GET_GUILD;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: obj3,
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
        const obj2 = { errorCode: metroRequire.INVALID_GUILD };
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
const createRPCCommand = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const GET_GUILD2 = RPCCommands.GET_GUILD;
const ANY = RPC_SCOPE_CONFIG.ANY;
const items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.BOT];
obj3[ANY] = items;
obj[GET_GUILD] = createRPCCommand(GET_GUILD2, obj2);
const GET_GUILDS = RPCCommands.GET_GUILDS;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj4 = {
  scope: OAuth2Scopes.OAuth2Scopes.RPC,
  handler() {
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
};
obj[GET_GUILDS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_GUILDS, obj4);
const GET_ROLES = RPCCommands.GET_ROLES;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj5 = {
  scope: OAuth2Scopes.OAuth2Scopes.BOT,
  validateAccess(args) {
    const guild_id = args.args.guild_id;
    const socket = args.socket;
    const obj = botScopedAccess;
    return obj.validateBotScopeHasGuildAccess(socket, guild_id);
  },
  handler(args) {
    let sortedRoles;
    const guild_id = args.args.guild_id;
    if (null == GuildStore.getGuild(guild_id)) {
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: metroRequire.INVALID_GUILD };
      const tmp6 = RPCErrorDefault;
      const tmp62 = new tmp6(obj2, "Invalid guild id: " + guild_id);
      throw tmp62;
    } else {
      const obj = { roles: sortedRoles.map(RPCHelpers.transformRole) };
      sortedRoles = GuildRoleStore.getSortedRoles(guild_id);
      return obj;
    }
  }
};
obj[GET_ROLES] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_ROLES, obj5);
const result = size.fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;
