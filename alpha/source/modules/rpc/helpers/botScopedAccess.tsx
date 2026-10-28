// Module ID: 9299
// Function ID: 9300
// Name: botScopedAccess
// Dependencies: [4856, 4936, 1084, 8864, 9298, 4941, 1096, 9290, 9296, 9300, 2]
// Exports: botCanViewChannel, canBotScopeReadMessages, isBotScopeOnly, validateBotScopeHasChannelAccess, validateBotScopeHasGuildAccess

// Module 9299 (botScopedAccess)
import BigFlagUtilsAll from "BigFlagUtils" /* 1096 */;
import PermissionUtilsAll from "PermissionUtils" /* 4941 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8864 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 9290 */;
import RPCErrorDefault from "RPCError" /* 9296 */;
import validateScopeDefault from "validateScope" /* 9298 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 9300 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let set;

let metroImportAll;
let metroImportDefault;
let metroRequire;
({ ChannelTypes: metroRequire, Permissions: metroImportDefault, RPCErrors: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/rpc/helpers/botScopedAccess.tsx");

export const isBotScopeOnly = function isBotScopeOnly(authorization, scope) {
  const scopes = authorization.authorization.scopes;
  if (scopes.has(OAuth2Scopes.OAuth2Scopes.BOT)) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(authorization.authorization.scopes);
    set.delete(OAuth2Scopes.OAuth2Scopes.BOT);
    return !validateScopeDefault(set, scope);
  } else {
    return false;
  }
};
export const botCanViewChannel = function botCanViewChannel(socket, context) {
  const bot = socket.application.bot;
  let id;
  if (bot != null) {
    id = bot.id;
  }
  if (null == id) {
    return false;
  } else {
    const obj2 = { user: id, context };
    const obj = PermissionUtilsAll;
    const permissions = obj.computePermissions(obj2);
    const obj3 = BigFlagUtilsAll;
    return obj3.has(permissions, metroImportDefault.VIEW_CHANNEL);
  }
};
export const canBotScopeReadMessages = function canBotScopeReadMessages(socket, channel) {
  const scopes = socket.authorization.scopes;
  if (scopes.has(OAuth2Scopes.OAuth2Scopes.MESSAGES_READ)) {
    return true;
  } else {
    if (channel.isThread()) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let type;
    if (channel != null) {
      type = channel.type;
    }
    return type === metroRequire.GUILD_APP && null != channel.application_id && channel.application_id === socket.application.id;
  }
};
export const validateBotScopeHasGuildAccess = function validateBotScopeHasGuildAccess(socket, guild_id) {
  if (isPostMessageSocketDefault(socket)) {
    if (guild_id !== getGuildIdForEmbeddedSurfaceDefault(socket.context.surface)) {
      const self3 = this;
      const self4 = this;
      const obj2 = { errorCode: metroImportAll.INVALID_PERMISSIONS };
      const tmp10 = new RPCErrorDefault(obj2, "Guild not in embedded context");
      throw tmp10;
    }
  } else {
    const self = this;
    const self2 = this;
    const obj = { errorCode: metroImportAll.INVALID_COMMAND };
    const tmp5 = new RPCErrorDefault(obj, "Access to guild data via BotScope only available for embedded apps");
    throw tmp5;
  }
};
export const validateBotScopeHasChannelAccess = function validateBotScopeHasChannelAccess(socket, arg1) {
  const channel = ChannelStore.getChannel(arg1);
  if (null == channel) {
    const _HermesInternal = HermesInternal;
    const self11 = this;
    const self12 = this;
    const obj = { errorCode: metroImportAll.INVALID_CHANNEL };
    const tmp28 = RPCErrorDefault;
    const tmp282 = new tmp28(obj, "Invalid channel id: " + arg1);
    throw tmp282;
  } else {
    const guildId = channel.getGuildId();
    if (null == guildId) {
      const self9 = this;
      const self10 = this;
      const obj2 = { errorCode: metroImportAll.INVALID_CHANNEL };
      const tmp24 = new RPCErrorDefault(obj2, "Access to channel data via BotScope only available for guild channels in embedded apps");
      throw tmp24;
    } else if (isPostMessageSocketDefault(socket)) {
      if (guildId !== getGuildIdForEmbeddedSurfaceDefault(socket.context.surface)) {
        const self7 = this;
        const self8 = this;
        const obj3 = { errorCode: metroImportAll.INVALID_PERMISSIONS };
        const tmp18 = new RPCErrorDefault(obj3, "Guild not in embedded context");
        throw tmp18;
      } else {
        const tmp39 = metroImportDefault;
        if (PermissionStore.can(metroImportDefault.VIEW_CHANNEL, channel)) {
          const bot = socket.application.bot;
          let id;
          if (bot != null) {
            id = bot.id;
          }
          let flag = false;
          if (null != id) {
            const obj5 = { user: id, context: channel };
            const obj4 = PermissionUtilsAll;
            const permissions = obj4.computePermissions(obj5);
            const obj6 = BigFlagUtilsAll;
            flag = obj6.has(permissions, tmp39.VIEW_CHANNEL);
          }
          if (!flag) {
            const self5 = this;
            const self6 = this;
            const obj7 = { errorCode: metroImportAll.INVALID_PERMISSIONS };
            const tmp14 = new RPCErrorDefault(obj7, "Bot cannot view channel");
            throw tmp14;
          }
        } else {
          const self3 = this;
          const self4 = this;
          const obj8 = { errorCode: metroImportAll.INVALID_PERMISSIONS };
          const tmp7 = new RPCErrorDefault(obj8, "User cannot view channel");
          throw tmp7;
        }
      }
    } else {
      const self = this;
      const self2 = this;
      const obj9 = { errorCode: metroImportAll.INVALID_COMMAND };
      const tmp3 = new RPCErrorDefault(obj9, "Access to guild data via BotScope only available for embedded apps");
      throw tmp3;
    }
  }
};
