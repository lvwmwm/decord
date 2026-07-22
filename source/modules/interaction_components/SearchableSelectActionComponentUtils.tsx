// Module ID: 7796
// Function ID: 62245
// Name: getSnowflakeSelectDefaultValues
// Dependencies: []
// Exports: getInitialSnowflakeSelectOptions, queryChannels, queryMentionables

// Module 7796 (getSnowflakeSelectDefaultValues)
function getSnowflakeSelectDefaultValues(defaultValues, guildId) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  guildId = items;
  let guild2;
  if (null != defaultValues) {
    guild2 = guild.getGuild(guildId);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (items(closure_2[12]).SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = user2.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != user) {
            nick = nick.getNick(user.id, user.id);
          }
          let obj = { type: items(closure_2[10]).SelectOptionType.USER, value: user.id };
          if (null == nick) {
            nick = user.globalName;
          }
          if (null == nick) {
            nick = user.username;
          }
          obj.label = nick;
          return obj;
        }
      } else if (items(closure_2[12]).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == user) {
          return null;
        } else {
          const role = role.getRole(user.id, type.id);
          let tmp15 = null;
          if (null != role) {
            obj = { type: items(closure_2[10]).SelectOptionType.ROLE };
            ({ id: obj3.value, name: obj3.label } = role);
            tmp15 = obj;
          }
          return tmp15;
        }
      } else if (items(closure_2[12]).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == user) {
          return null;
        } else {
          const channel = channel.getChannel(type.id);
          let tmp4 = null;
          if (null != channel) {
            tmp4 = null;
            if (channel.guild_id === user.id) {
              if (items.length <= 0) {
                obj = { type: items(closure_2[10]).SelectOptionType.CHANNEL, value: channel.id, label: items(closure_2[11]).computeChannelName(channel, user2, closure_7) };
                tmp4 = obj;
                const obj2 = items(closure_2[11]);
              } else {
                tmp4 = null;
              }
            }
          }
          return tmp4;
        }
      }
    });
    return mapped.filter(guildId(dependencyMap[13]).isNotNullish);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/interaction_components/SearchableSelectActionComponentUtils.tsx");

export const MIN_REREQUEST_TIME = 1000;
export const queryMentionables = function queryMentionables(type, query, channelId) {
  let roles;
  let users;
  query = channelId;
  const channel = store.getChannel(channelId);
  const importDefault = channel;
  if (null == channel) {
    return [];
  } else {
    let tmp4 = type === query(dependencyMap[7]).ComponentType.USER_SELECT;
    if (!tmp4) {
      tmp4 = type === query(dependencyMap[7]).ComponentType.MENTIONABLE_SELECT;
    }
    let tmp7 = type === query(dependencyMap[7]).ComponentType.ROLE_SELECT;
    if (!tmp7) {
      tmp7 = type === query(dependencyMap[7]).ComponentType.MENTIONABLE_SELECT;
    }
    let obj = importDefault(dependencyMap[8]);
    obj = { query, channel, canMentionEveryone: false, canMentionHere: false, canMentionUsers: tmp4, canMentionRoles: tmp7, includeAllGuildUsers: true, includeNonMentionableRoles: true, checkRecentlyTalkedOnEmptyQuery: false, limit: 15 };
    ({ users, roles } = obj.queryMentionResults(obj));
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(users.map((user) => {
      let obj = channel(closure_2[9]);
      let username = obj.getNickname(channel.getGuildId(), arg2, user.user);
      obj = { type: arg2(closure_2[10]).SelectOptionType.USER, value: user.user.id };
      if (null == username) {
        username = user.user.globalName;
      }
      if (null == username) {
        username = user.user.username;
      }
      obj.label = username;
      return obj;
    }), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(roles.map((id) => ({ type: arg2(closure_2[10]).SelectOptionType.ROLE, value: id.id, label: id.name })), arraySpreadResult);
    return items;
  }
};
export const queryChannels = function queryChannels(query, channelId, channelTypes) {
  const channel = store.getChannel(channelId);
  if (null == channel) {
    let items = [];
  } else {
    let obj = importDefault(dependencyMap[8]);
    obj = { query, channel, channelTypes, limit: 15 };
    const channels = obj.queryApplicationCommandChannelResults(obj).channels;
    items = channels.map((id) => {
      const obj = { type: callback(closure_2[10]).SelectOptionType.CHANNEL, value: id.id, label: callback(closure_2[11]).computeChannelName(id, closure_8, closure_7) };
      return obj;
    });
  }
  return items;
};
export const getInitialSnowflakeSelectOptions = function getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId) {
  let defaultValues;
  let type;
  const interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectActionComponent.id);
  ({ defaultValues, type } = selectActionComponent);
  let channelTypes;
  if (type === containerId(dependencyMap[7]).ComponentType.CHANNEL_SELECT) {
    channelTypes = selectActionComponent.channelTypes;
  }
  let items = getSnowflakeSelectDefaultValues(defaultValues, guildId, channelTypes);
  type = undefined;
  if (null != interactionComponentState) {
    type = interactionComponentState.type;
  }
  if (type !== containerId(dependencyMap[7]).ComponentType.USER_SELECT) {
    let type1;
    if (null != interactionComponentState) {
      type1 = interactionComponentState.type;
    }
    if (type1 !== containerId(dependencyMap[7]).ComponentType.ROLE_SELECT) {
      let type2;
      if (null != interactionComponentState) {
        type2 = interactionComponentState.type;
      }
      if (type2 !== containerId(dependencyMap[7]).ComponentType.MENTIONABLE_SELECT) {
        let type3;
        if (null != interactionComponentState) {
          type3 = interactionComponentState.type;
        }
      }
      if (null == items) {
        items = [];
      }
      return items;
    }
  }
  items = interactionComponentState.selectedOptions;
};
export { getSnowflakeSelectDefaultValues };
