// Module ID: 8596
// Function ID: 8597
// Name: CommandPermissionContext
// Dependencies: [19, 2101, 2049, 2063, 502, 2045, 2108, 2067, 4469, 1372, 1074, 8597, 504, 1086, 1979, 2]
// Exports: buildPermissionContext, computeCommandContextType, getContextGuildId, usePermissionContext

// Module 8596 (CommandPermissionContext)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import Server from "Server" /* 1979 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 8597 */;
import react_mod from "react" /* 19 */;
import ImpersonateStore from "ImpersonateStore" /* 2101 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_14;
let map1;
function computePermissions(isPrivate, arg1) {
  let deserializer;
  if (!(isPrivate instanceof ChannelRecordBase)) {
    if (null != isPrivate) {
      const permissions = PermissionStore.computePermissions(isPrivate);
      let flag = true;
      let flag2 = true;
      const obj5 = BigFlagUtilsAll;
      if (!obj5.has(permissions, constants2.ADMINISTRATOR)) {
        const tmp3 = isPrivate instanceof tmp;
        const tmp11Result = BigFlagUtilsAll;
        const hasItem = tmp11Result.has(permissions, tmp13.VIEW_CHANNEL);
        if (tmp3) {
          let hasItem2;
          let hasItem1 = hasItem;
          if (hasItem1) {
            const tmp11Result3 = BigFlagUtilsAll;
            hasItem1 = tmp11Result3.has(permissions, tmp13.USE_APPLICATION_COMMANDS);
          }
          const has = BigFlagUtilsAll.has;
          BigFlagUtilsAll;
          if (arg1) {
            hasItem2 = has(permissions, tmp13.SEND_MESSAGES_IN_THREADS);
          } else {
            hasItem2 = has(permissions, tmp13.SEND_MESSAGES);
          }
          flag = hasItem2;
          flag2 = hasItem1;
        } else {
          flag = true;
          flag2 = hasItem;
        }
      }
      return { computedPermissions: permissions, hasBaseAccessPermissions: flag2, hasSendMessagesPermission: flag };
    }
  }
  const obj2 = { computedPermissions: deserializer.deserialize(0), hasBaseAccessPermissions: true, hasSendMessagesPermission: true };
  deserializer = BigFlagUtilsAll;
  return obj2;
}
let react = react_mod;
const ChannelRecordBase = ChannelRecord.ChannelRecordBase;
const isGuildNSFW = GuildRecord.isGuildNSFW;
({ ChannelTypes: map1, Permissions: closure_14 } = Constants);
const result = size.fileFinishedImporting("modules/application_commands/CommandPermissionContext.tsx");

export const buildPermissionContext = function buildPermissionContext(channel, items) {
  let tmp16;
  let obj = channel;
  if (channel instanceof ChannelRecordBase) {
    obj = channel;
    if (channel.isThread()) {
      channel = ChannelStore.getChannel(channel.parent_id);
      obj = channel;
    }
  }
  let tmp5;
  if (null != obj) {
    tmp5 = obj instanceof tmp ? obj.guild_id : obj.id;
  }
  const obj2 = AgeRestrictedContentSettingsUtils;
  let viewNsfwCommandsOrDefault = obj2.getViewNsfwCommandsOrDefault();
  const id = AuthenticationStore.getId();
  const currentUser = UserStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.nsfwAllowed;
  }
  if (flag == null) {
    flag = false;
  }
  if (null != tmp5) {
    const member = GuildMemberStore.getMember(tmp5, id);
    let roles;
    if (member != null) {
      roles = member.roles;
    }
    if (roles == null) {
      roles = [];
    }
    items = roles;
  } else {
    items = [];
  }
  let isThreadResult = channel instanceof tmp;
  const isViewingRolesResult = ImpersonateStore.isViewingRoles(tmp5);
  const tmp12 = computePermissions;
  if (isThreadResult) {
    isThreadResult = channel.isThread();
  }
  const tmp12Result = tmp12(obj, isThreadResult);
  const obj3 = { context: obj, userId: id, roleIds: items, isImpersonating: isViewingRolesResult, commandTypes: items, computedPermissions: tmp12Result.computedPermissions, hasBaseAccessPermissions: tmp12Result.hasBaseAccessPermissions, hasSendMessagesPermission: tmp12Result.hasSendMessagesPermission, allowNsfw: tmp16 };
  tmp16 = flag;
  if (tmp16) {
    let tmp17 = !(obj instanceof tmp);
    if (!tmp17) {
      if (null != obj.guild_id) {
        viewNsfwCommandsOrDefault = obj.isNSFW() || tmp15;
        obj.isNSFW() || tmp15;
      }
      tmp17 = viewNsfwCommandsOrDefault;
    }
    tmp16 = tmp17;
  }
  return obj3;
};
export const usePermissionContext = function usePermissionContext(channel, items) {
  let closure_3;
  let stateFromStoresArray;
  _require = channel;
  const commandTypes = items;
  let obj = react;
  items = [channel];
  const memo = react.useMemo(() => {
    let tmp = channel;
    if (channel instanceof ChannelRecordBase) {
      tmp = obj;
      if (channel.isThread()) {
        channel = ChannelStore.getChannel(obj.parent_id);
        if (channel == null) {
          channel = obj;
        }
        tmp = channel;
      }
    }
    return tmp;
  }, items);
  let tmp;
  if (null != memo) {
    tmp = memo instanceof stateFromStoresArray ? memo.guild_id : memo.id;
  }
  react = tmp;
  const obj3 = require("AgeRestrictedContentSettingsUtils");
  let viewNsfwCommandsOrDefault = obj3.useViewNsfwCommandsOrDefault();
  const items1 = [viewNsfwCommandsOrDefault];
  const obj4 = require("get initialized");
  const stateFromStores = obj4.useStateFromStores(items1, () => viewNsfwCommandsOrDefault.getId());
  const items2 = [UserStore];
  const obj5 = require("get initialized");
  const stateFromStores1 = obj5.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.nsfwAllowed;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items3 = [GuildMemberStore];
  const obj6 = require("get initialized");
  stateFromStoresArray = obj6.useStateFromStoresArray(items3, () => {
    let items;
    if (null != closure_3) {
      const member = GuildMemberStore.getMember(tmp, stateFromStores);
      let roles;
      if (member != null) {
        roles = member.roles;
      }
      if (roles == null) {
        roles = [];
      }
      items = roles;
    } else {
      items = [];
    }
    return items;
  });
  const items4 = [stateFromStores];
  const obj7 = require("get initialized");
  const stateFromStores2 = obj7.useStateFromStores(items4, () => ImpersonateStore.isViewingRoles(closure_3));
  require("get initialized");
  [][0] = tmp;
  let tmp10 = stateFromStores1;
  if (tmp10) {
    let tmp12 = !(memo instanceof stateFromStoresArray);
    if (!tmp12) {
      if (null != memo.guild_id) {
        viewNsfwCommandsOrDefault = memo.isNSFW() || tmp9;
        memo.isNSFW() || tmp9;
      }
      tmp12 = viewNsfwCommandsOrDefault;
    }
    tmp10 = tmp12;
  }
  viewNsfwCommandsOrDefault = tmp10;
  const items5 = [items, memo, stateFromStores2, stateFromStoresArray, stateFromStores, tmp10, channel];
  return obj.useMemo(() => {
    let isThreadResult = channel instanceof ChannelRecordBase;
    const obj = channel;
    const tmp = computePermissions;
    if (isThreadResult) {
      isThreadResult = obj.isThread();
    }
    const tmpResult = tmp(memo, isThreadResult);
    return { context: memo, userId: stateFromStores, roleIds: stateFromStoresArray, commandTypes, isImpersonating: stateFromStores2, computedPermissions: tmpResult.computedPermissions, hasBaseAccessPermissions: tmpResult.hasBaseAccessPermissions, hasSendMessagesPermission: tmpResult.hasSendMessagesPermission, allowNsfw: viewNsfwCommandsOrDefault };
  }, items5);
};
export const computeCommandContextType = function computeCommandContextType(channel, applicationId) {
  if (channel instanceof ChannelRecordBase) {
    let GUILD;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (null == guild_id) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type === map1.DM) {
        let PRIVATE_CHANNEL;
        let recipientId;
        if (channel != null) {
          recipientId = channel.getRecipientId();
        }
        if (recipientId === applicationId) {
          PRIVATE_CHANNEL = Server.InteractionContextType.BOT_DM;
        }
        GUILD = PRIVATE_CHANNEL;
      }
      PRIVATE_CHANNEL = Server.InteractionContextType.PRIVATE_CHANNEL;
    }
    return GUILD;
  }
  GUILD = Server.InteractionContextType.GUILD;
};
export const getContextGuildId = function getContextGuildId(context) {
  return context instanceof ChannelRecordBase ? context.guild_id : context.id;
};
