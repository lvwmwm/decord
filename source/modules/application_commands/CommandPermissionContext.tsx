// Module ID: 7919
// Function ID: 63140
// Name: computeAllowNsfw
// Dependencies: []
// Exports: buildPermissionContext, computeCommandContextType, usePermissionContext

// Module 7919 (computeAllowNsfw)
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
        let obj = importAll(dependencyMap[11]);
        const hasItem = obj.has(permissions, constants2.VIEW_CHANNEL);
        if (tmp3) {
          let hasItem1 = hasItem;
          if (hasItem) {
            hasItem1 = importAll(dependencyMap[11]).has(permissions, constants2.USE_APPLICATION_COMMANDS);
            const obj2 = importAll(dependencyMap[11]);
          }
          const has = importAll(dependencyMap[11]).has;
          let SEND_MESSAGES_IN_THREADS = constants2;
          if (arg1) {
            SEND_MESSAGES_IN_THREADS = SEND_MESSAGES_IN_THREADS.SEND_MESSAGES_IN_THREADS;
            let hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS);
          } else {
            hasItem2 = has(permissions, SEND_MESSAGES_IN_THREADS.SEND_MESSAGES);
          }
          const tmp14 = importAll(dependencyMap[11]);
        } else {
          flag = hasItem;
          flag2 = true;
        }
        const tmp3 = isPrivate instanceof ChannelRecordBase;
      }
      obj = { computedPermissions: permissions, hasBaseAccessPermissions: flag, hasSendMessagesPermission: flag2 };
      return obj;
    }
  }
  obj = { 1892349761: null, 1197558275: null, 788929875: null, computedPermissions: importAll(dependencyMap[11]).deserialize(0) };
  return obj;
}
function getContextGuildId(context) {
  return context instanceof ChannelRecordBase ? context.guild_id : context.id;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const ChannelRecordBase = arg1(dependencyMap[2]).ChannelRecordBase;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ ChannelTypes: closure_11, Permissions: closure_12 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/application_commands/CommandPermissionContext.tsx");

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
  let obj = items(dependencyMap[9]);
  const viewNsfwCommandsOrDefault = obj.getViewNsfwCommandsOrDefault();
  const id = id.getId();
  const currentUser = currentUser.getCurrentUser();
  let nsfwAllowed;
  if (null != currentUser) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  if (null == tmp5) {
    items = [];
  } else {
    const member = member.getMember(tmp5, id);
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
  items = channel;
  const importAll = items;
  items = [channel];
  const memo = React.useMemo((self) => {
    if (self instanceof stateFromStores) {
      if (self.isThread()) {
        let channel = stateFromStoresArray.getChannel(self.parent_id);
      }
      return channel;
    }
    channel = self;
  }, items);
  const dependencyMap = memo;
  let tmp2;
  if (null != memo) {
    tmp2 = getContextGuildId(memo);
  }
  const React = tmp2;
  const viewNsfwCommandsOrDefault = items(dependencyMap[9]).useViewNsfwCommandsOrDefault();
  let closure_4 = viewNsfwCommandsOrDefault;
  const obj = items(dependencyMap[9]);
  const items1 = [closure_6];
  const stateFromStores = items(dependencyMap[10]).useStateFromStores(items1, () => stateFromStores1.getId());
  const ChannelRecordBase = stateFromStores;
  const obj2 = items(dependencyMap[10]);
  const items2 = [closure_10];
  const stateFromStores1 = items(dependencyMap[10]).useStateFromStores(items2, () => {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return null != nsfwAllowed && nsfwAllowed;
  });
  closure_6 = stateFromStores1;
  const obj3 = items(dependencyMap[10]);
  const items3 = [closure_8];
  const stateFromStoresArray = items(dependencyMap[10]).useStateFromStoresArray(items3, () => {
    if (null == tmp2) {
      let items = [];
    } else {
      const member = stateFromStores2.getMember(tmp2, stateFromStores);
      items = undefined;
      if (null != member) {
        items = member.roles;
      }
    }
    return items;
  });
  let closure_7 = stateFromStoresArray;
  const obj4 = items(dependencyMap[10]);
  const items4 = [closure_4];
  const stateFromStores2 = items(dependencyMap[10]).useStateFromStores(items4, () => viewNsfwCommandsOrDefault.isViewingRoles(tmp2));
  closure_8 = stateFromStores2;
  const items5 = [items, memo, stateFromStores2, stateFromStoresArray, stateFromStores, stateFromStores1, viewNsfwCommandsOrDefault, channel];
  return React.useMemo(() => {
    let isThreadResult = arg0 instanceof stateFromStores;
    if (isThreadResult) {
      isThreadResult = arg0.isThread();
    }
    const tmpResult = closure_14(memo, isThreadResult);
    return { context: memo, userId: stateFromStores, roleIds: stateFromStoresArray, commandTypes: arg1, isImpersonating: stateFromStores2, computedPermissions: tmpResult.computedPermissions, hasBaseAccessPermissions: tmpResult.hasBaseAccessPermissions, hasSendMessagesPermission: tmpResult.hasSendMessagesPermission, allowNsfw: callback(memo, stateFromStores1, viewNsfwCommandsOrDefault) };
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
        const PRIVATE_CHANNEL = applicationId(dependencyMap[12]).InteractionContextType.PRIVATE_CHANNEL;
      } else {
        let recipientId;
        if (null != channel) {
          recipientId = channel.getRecipientId();
        }
      }
      const BOT_DM = applicationId(dependencyMap[12]).InteractionContextType.BOT_DM;
    }
  }
  return applicationId(dependencyMap[12]).InteractionContextType.GUILD;
};
export { getContextGuildId };
