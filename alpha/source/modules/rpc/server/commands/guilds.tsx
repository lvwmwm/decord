// Module ID: 16271
// Function ID: 16272
// Name: guilds
// Dependencies: [4876, 4921, 4915, 4880, 6444, 1072, 16255, 8901, 9316, 9313, 11775, 2]

// Module 16271 (guilds)
import GuildRecord from "GuildRecord" /* 4876 */;
import Constants2 from "Constants" /* 6444 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8901 */;
import RPCErrorDefault from "RPCError" /* 9313 */;
import botScopedAccess from "botScopedAccess" /* 9316 */;
import RPCHelpers from "RPCHelpers" /* 11775 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import GuildStore from "GuildStore" /* 4880 */;
import Constants from "Constants" /* 1072 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 16255 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let metroImportDefault;
let obj3;
let obj7;
const getGuildIconURL = GuildRecord.getGuildIconURL;
const RPC_SCOPE_CONFIG = Constants2.RPC_SCOPE_CONFIG;
({ RPCCommands, RPCErrors: metroImportDefault } = Constants);
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
        const obj2 = { errorCode: metroImportDefault.INVALID_GUILD };
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
      const obj2 = { errorCode: metroImportDefault.INVALID_GUILD };
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
const GET_CURRENT_USER_GUILD_MEMBER = RPCCommands.GET_CURRENT_USER_GUILD_MEMBER;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj6 = {
  scope: obj7,
  validateAccess(botScopeOnly) {
    if (botScopeOnly.botScopeOnly) {
      const obj = botScopedAccess;
      return obj.validateBotScopeHasGuildAccess(tmp2, tmp);
    }
  },
  handler(args) {
    const guild_id = args.args.guild_id;
    if (null == GuildStore.getGuild(guild_id)) {
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: metroImportDefault.INVALID_GUILD };
      const tmp8 = RPCErrorDefault;
      const tmp82 = new tmp8(obj2, "Invalid guild id: " + guild_id);
      throw tmp82;
    } else {
      const selfMember = GuildMemberStore.getSelfMember(guild_id);
      let transformGuildMemberResult = null;
      if (null != selfMember) {
        const obj = RPCHelpers;
        transformGuildMemberResult = obj.transformGuildMember(selfMember);
      }
      return transformGuildMemberResult;
    }
  }
};
obj7 = {};
const createRPCCommand2 = CONTEXT_MENU_ICON_NAMES.createRPCCommand;
const GET_CURRENT_USER_GUILD_MEMBER2 = RPCCommands.GET_CURRENT_USER_GUILD_MEMBER;
const ANY2 = RPC_SCOPE_CONFIG.ANY;
const items1 = [OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ, OAuth2Scopes.OAuth2Scopes.BOT];
obj7[ANY2] = items1;
obj[GET_CURRENT_USER_GUILD_MEMBER] = createRPCCommand2(GET_CURRENT_USER_GUILD_MEMBER2, obj6);
const GET_GUILD_MEMBER = RPCCommands.GET_GUILD_MEMBER;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
const obj8 = {
  scope: OAuth2Scopes.OAuth2Scopes.BOT,
  validateAccess(args) {
    const guild_id = args.args.guild_id;
    const socket = args.socket;
    const obj = botScopedAccess;
    return obj.validateBotScopeHasGuildAccess(socket, guild_id);
  },
  handler(args) {
    args = args.args;
    const guild_id = args.guild_id;
    const user_id = args.user_id;
    if (null == GuildStore.getGuild(guild_id)) {
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const obj2 = { errorCode: metroImportDefault.INVALID_GUILD };
      const tmp8 = RPCErrorDefault;
      const tmp82 = new tmp8(obj2, "Invalid guild id: " + guild_id);
      throw tmp82;
    } else {
      const member = GuildMemberStore.getMember(guild_id, user_id);
      let transformGuildMemberResult = null;
      if (null != member) {
        const obj = RPCHelpers;
        transformGuildMemberResult = obj.transformGuildMember(member);
      }
      return transformGuildMemberResult;
    }
  }
};
obj[GET_GUILD_MEMBER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_GUILD_MEMBER, obj8);
const result = size.fileFinishedImporting("modules/rpc/server/commands/guilds.tsx");

export default obj;
