// Module ID: 7925
// Function ID: 63177
// Name: computeAllowNsfw
// Dependencies: [31, 1909, 1352, 1194, 1348, 1917, 3758, 1849, 653, 7926, 566, 483, 1881, 2]
// Exports: buildPermissionContext, computeCommandContextType, usePermissionContext

// Module 7925 (computeAllowNsfw)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChannelRecordBase } from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_11;
let closure_12;
const require = arg1;
function computeAllowNsfw(guild_id, arg1, viewNsfwCommandsOrDefault) {
  let nsfw = viewNsfwCommandsOrDefault;
  let tmp2 = !tmp;
  if (!!arg1) {
    let tmp5 = !tmp4;
    if (guild_id instanceof ChannelRecordBase) {
      if (null != guild_id.guild_id) {
        nsfw = guild_id.nsfw;
      }
      tmp5 = nsfw;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function computePermissions(isPrivate) {
  if (!(isPrivate instanceof ChannelRecordBase)) {
    if (null != isPrivate) {
      const permissions = closure_9.computePermissions(isPrivate);
      let flag = true;
      let flag2 = true;
      if (!obj6.has(permissions, constants2.ADMINISTRATOR)) {
        let obj = importAll(483);
        const hasItem = obj.has(permissions, constants2.VIEW_CHANNEL);
        if (tmp3) {
          let hasItem1 = hasItem;
          if (hasItem) {
            hasItem1 = importAll(483).has(permissions, constants2.USE_APPLICATION_COMMANDS);
            const obj2 = importAll(483);
          }
          const has = importAll(483).has;
          let SEND_MESSAGES_IN_THREADS = constants2;
          if (arg1) {
            SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
            let hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS);
          } else {
            hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS.SEND_MESSAGES);
          }
          const tmp14 = importAll(483);
        } else {
          flag = hasItem;
          flag2 = true;
        }
        tmp3 = isPrivate instanceof ChannelRecordBase;
      }
      obj = { computedPermissions: permissions, hasBaseAccessPermissions: flag, hasSendMessagesPermission: flag2 };
      return obj;
    }
  }
  obj = { computedPermissions: importAll(483).deserialize(0), hasBaseAccessPermissions: true, hasSendMessagesPermission: true };
  return obj;
}
function getContextGuildId(context) {
  return context instanceof ChannelRecordBase ? context.guild_id : context.id;
}
({ ChannelTypes: closure_11, Permissions: closure_12 } = ME);
const result = require("_callSuper").fileFinishedImporting("modules/application_commands/CommandPermissionContext.tsx");

export const buildPermissionContext = function buildPermissionContext(channel, items) {
  let tmp = channel;
  if (channel instanceof ChannelRecordBase) {
    tmp = channel;
    if (channel.isThread()) {
      channel = channel.getChannel(channel.parent_id);
      tmp = channel;
      if (null != channel) {
        tmp = channel;
      }
    }
  }
  let tmp5;
  if (null != tmp) {
    tmp5 = getContextGuildId(tmp);
  }
  let obj = require(7926) /* resolveNsfwTogglesWithDefaults */;
  const viewNsfwCommandsOrDefault = obj.getViewNsfwCommandsOrDefault();
  id = id.getId();
  currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (null != currentUser) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (null == tmp5) {
    items = [];
  } else {
    member = member.getMember(tmp5, id);
    items = undefined;
    if (null != member) {
      items = member.roles;
    }
  }
  let isThreadResult = channel instanceof ChannelRecordBase;
  if (isThreadResult) {
    isThreadResult = channel.isThread();
  }
  const isViewingRolesResult = viewingRoles.isViewingRoles(tmp5);
  const tmp11 = null != nsfwAllowed && nsfwAllowed;
  const tmp16 = computePermissions;
  obj = { context: tmp, userId: id, roleIds: items, isImpersonating: isViewingRolesResult, commandTypes: items };
  ({ computedPermissions: obj2.computedPermissions, hasBaseAccessPermissions: obj2.hasBaseAccessPermissions, hasSendMessagesPermission: obj2.hasSendMessagesPermission } = computePermissions(tmp, isThreadResult));
  obj.allowNsfw = computeAllowNsfw(tmp, tmp11, viewNsfwCommandsOrDefault);
  return obj;
};
export const usePermissionContext = function usePermissionContext(channel, items) {
  const _require = channel;
  let closure_1 = items;
  items = [channel];
  const memo = React.useMemo(() => {
    if (channel instanceof stateFromStores) {
      if (channel.isThread()) {
        channel = stateFromStoresArray.getChannel(channel.parent_id);
      }
      return channel;
    }
  }, items);
  let tmp2;
  if (null != memo) {
    tmp2 = getContextGuildId(memo);
  }
  React = tmp2;
  const viewNsfwCommandsOrDefault = _require(memo[9]).useViewNsfwCommandsOrDefault();
  const obj = _require(memo[9]);
  const items1 = [stateFromStores1];
  const stateFromStores = _require(memo[10]).useStateFromStores(items1, () => stateFromStores1.getId());
  const obj2 = _require(memo[10]);
  const items2 = [closure_10];
  stateFromStores1 = _require(memo[10]).useStateFromStores(items2, () => {
    const currentUser = outer1_10.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return null != nsfwAllowed && nsfwAllowed;
  });
  const obj3 = _require(memo[10]);
  const items3 = [stateFromStores2];
  const stateFromStoresArray = _require(memo[10]).useStateFromStoresArray(items3, () => {
    if (null == result) {
      let items = [];
    } else {
      const member = stateFromStores2.getMember(result, stateFromStores);
      items = undefined;
      if (null != member) {
        items = member.roles;
      }
    }
    return items;
  });
  const obj4 = _require(memo[10]);
  const items4 = [viewNsfwCommandsOrDefault];
  stateFromStores2 = _require(memo[10]).useStateFromStores(items4, () => viewNsfwCommandsOrDefault.isViewingRoles(result));
  const items5 = [items, memo, stateFromStores2, stateFromStoresArray, stateFromStores, stateFromStores1, viewNsfwCommandsOrDefault, channel];
  return React.useMemo(() => {
    let isThreadResult = channel instanceof stateFromStores;
    if (isThreadResult) {
      isThreadResult = channel.isThread();
    }
    const tmpResult = outer1_14(memo, isThreadResult);
    return { context: memo, userId: stateFromStores, roleIds: stateFromStoresArray, commandTypes: closure_1, isImpersonating: stateFromStores2, computedPermissions: tmpResult.computedPermissions, hasBaseAccessPermissions: tmpResult.hasBaseAccessPermissions, hasSendMessagesPermission: tmpResult.hasSendMessagesPermission, allowNsfw: outer1_13(memo, stateFromStores1, viewNsfwCommandsOrDefault) };
  }, items5);
};
export const computeCommandContextType = function computeCommandContextType(channel, applicationId) {
  if (channel instanceof ChannelRecordBase) {
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    if (null == guild_id) {
      let type;
      if (null != channel) {
        type = channel.type;
      }
      if (type !== constants.DM) {
        const PRIVATE_CHANNEL = require(1881) /* PermissionOverwriteType */.InteractionContextType.PRIVATE_CHANNEL;
      } else {
        let recipientId;
        if (null != channel) {
          recipientId = channel.getRecipientId();
        }
      }
      const BOT_DM = require(1881) /* PermissionOverwriteType */.InteractionContextType.BOT_DM;
    }
  }
  return require(1881) /* PermissionOverwriteType */.InteractionContextType.GUILD;
};
export { getContextGuildId };
