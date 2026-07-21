// Module ID: 11494
// Function ID: 89507
// Name: useGuildChannelCreated
// Dependencies: []
// Exports: useCompletedStates, usePermissions

// Module 11494 (useGuildChannelCreated)
function useGuildChannelCreated(guild) {
  const arg1 = guild;
  const items = [closure_8];
  const items1 = [guild];
  return arg1(dependencyMap[10]).useStateFromStores(items, () => {
    function hasNewChannel(channel) {
      let tmp = null != id;
      if (tmp) {
        const obj = callback(closure_2[12]);
        const extractTimestampResult = callback(closure_2[12]).extractTimestamp(channel.channel.id);
        tmp = extractTimestampResult - callback(closure_2[12]).extractTimestamp(id.id) > 500;
        const obj2 = callback(closure_2[12]);
      }
      return tmp;
    }
    let id;
    if (null != arg0) {
      id = arg0.id;
    }
    const channels = channels.getChannels(id);
    return channels[closure_6].some(hasNewChannel) || channels[closure_7].some(hasNewChannel);
  }, items1);
}
function useGuildPopulated(guild) {
  const arg1 = guild;
  const items = [closure_5];
  let closure_1 = arg1(dependencyMap[10]).useStateFromStores(items, () => {
    let systemChannelId;
    if (null != arg0) {
      systemChannelId = arg0.systemChannelId;
    }
    return channel.getChannel(systemChannelId);
  });
  const obj = arg1(dependencyMap[10]);
  const items1 = [closure_12];
  const stateFromStoresArray = arg1(dependencyMap[10]).useStateFromStoresArray(items1, () => {
    if (null != id) {
      const messages = messages.getMessages(id.id);
      let toArrayResult = messages.toArray();
    } else {
      toArrayResult = [];
    }
    return toArrayResult;
  });
  const dependencyMap = stateFromStoresArray;
  const obj2 = arg1(dependencyMap[10]);
  const items2 = [closure_9];
  const items3 = [guild, stateFromStoresArray];
  return arg1(dependencyMap[10]).useStateFromStores(items2, () => {
    let id;
    if (null != arg0) {
      id = arg0.id;
    }
    const memberCount = memberCount.getMemberCount(id);
    let num = 0;
    if (null != memberCount) {
      num = memberCount;
    }
    return num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
  }, items3);
}
function useGuildPersonalized(guild) {
  const arg1 = guild;
  let icon;
  const items = [closure_11];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => closure_11.hasLayers());
  const obj = arg1(dependencyMap[10]);
  const items1 = [closure_10];
  const stateFromStores1 = arg1(dependencyMap[10]).useStateFromStores(items1, () => {
    let id;
    if (null != arg0) {
      id = arg0.id;
    }
    return guild.getGuild(id);
  });
  if (null != stateFromStores1) {
    icon = stateFromStores1.icon;
  }
  return null != icon && !stateFromStores;
}
function useChannelsMessaged(closure_3) {
  const arg1 = closure_3;
  const items = [closure_4];
  let closure_1 = arg1(dependencyMap[10]).useStateFromStores(items, () => id.getId());
  const obj = arg1(dependencyMap[10]);
  const items1 = [closure_12];
  return arg1(dependencyMap[10]).useStateFromStores(items1, () => callback(closure_2[13]).some(arg0, (id) => {
    const messages = messages.getMessages(id.id);
    const toArrayResult = messages.toArray();
    return callback(closure_2[13]).some(toArrayResult, (author) => {
      let tmp = author.author.id === callback;
      if (tmp) {
        tmp = !callback(closure_2[14])(author);
      }
      return tmp;
    });
  }));
}
function useGuildMessaged(guild) {
  const arg1 = guild;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[10]).useStateFromStores(items, () => {
    let mutableBasicGuildChannelsForGuild = null;
    if (null != arg0) {
      mutableBasicGuildChannelsForGuild = mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(arg0.id);
    }
    return mutableBasicGuildChannelsForGuild;
  });
  const importDefault = stateFromStores;
  const items1 = [stateFromStores];
  return useChannelsMessaged(React.useMemo(() => {
    if (null == stateFromStores) {
      let items = [];
    } else {
      items = stateFromStores(closure_2[13]).values(stateFromStores);
      const obj = stateFromStores(closure_2[13]);
    }
    return items;
  }, items1));
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_6, GUILD_VOCAL_CHANNELS_KEY: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[3]);
({ Permissions: closure_14, MessageTypes: closure_15 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_progress/GuildProgressHooks.tsx");

export const usePermissions = function usePermissions(channel, guild) {
  guild = channel;
  const importDefault = guild;
  const items = [closure_13];
  const items1 = [guild, channel];
  return guild(dependencyMap[10]).useStateFromStoresObject(items, () => {
    const obj = { canInvite: arg0(closure_2[11]).canViewInviteModal(closure_13, arg1, arg0) };
    let canResult = null != arg1;
    if (canResult) {
      canResult = closure_13.can(constants.MANAGE_GUILD, arg1);
    }
    obj.canManageGuild = canResult;
    let canResult1 = null != arg0;
    if (canResult1) {
      canResult1 = closure_13.can(constants.SEND_MESSAGES, arg0);
    }
    obj.canMessage = canResult1;
    let canResult2 = null != arg1;
    if (canResult2) {
      canResult2 = closure_13.can(constants.MANAGE_CHANNELS, arg1);
    }
    obj.canCreateChannel = canResult2;
    return obj;
  }, items1);
};
export { useGuildChannelCreated };
export { useGuildPopulated };
export { useGuildPersonalized };
export { useChannelsMessaged };
export { useGuildMessaged };
export const useCompletedStates = function useCompletedStates(guild) {
  return { guildPopulated: useGuildPopulated(guild), guildMessaged: useGuildMessaged(guild), guildPersonalized: useGuildPersonalized(guild), guildChannelCreated: useGuildChannelCreated(guild) };
};
