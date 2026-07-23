// Module ID: 7802
// Function ID: 62282
// Name: getSnowflakeSelectDefaultValues
// Dependencies: [1348, 1917, 1910, 1838, 3767, 1849, 7795, 1881, 4974, 4319, 4359, 4320, 7803, 1327, 2]
// Exports: getInitialSnowflakeSelectOptions, queryChannels, queryMentionables

// Module 7802 (getSnowflakeSelectDefaultValues)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
function getSnowflakeSelectDefaultValues(defaultValues, closure_1) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  let guild2;
  if (null != defaultValues) {
    guild2 = guild.getGuild(closure_1);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (items(outer1_2[12]).SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = outer1_8.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != user) {
            nick = outer1_4.getNick(user.id, user.id);
          }
          let obj = { type: items(outer1_2[10]).SelectOptionType.USER, value: user.id };
          if (null == nick) {
            nick = user.globalName;
          }
          if (null == nick) {
            nick = user.username;
          }
          obj.label = nick;
          return obj;
        }
      } else if (items(outer1_2[12]).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == user) {
          return null;
        } else {
          const role = outer1_5.getRole(user.id, type.id);
          let tmp15 = null;
          if (null != role) {
            obj = { type: items(outer1_2[10]).SelectOptionType.ROLE };
            ({ id: obj3.value, name: obj3.label } = role);
            tmp15 = obj;
          }
          return tmp15;
        }
      } else if (items(outer1_2[12]).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == user) {
          return null;
        } else {
          const channel = outer1_3.getChannel(type.id);
          let tmp4 = null;
          if (null != channel) {
            tmp4 = null;
            if (channel.guild_id === user.id) {
              if (items.length <= 0) {
                obj = { type: items(outer1_2[10]).SelectOptionType.CHANNEL, value: channel.id, label: items(outer1_2[11]).computeChannelName(channel, outer1_8, outer1_7) };
                tmp4 = obj;
                const obj2 = items(outer1_2[11]);
              } else {
                tmp4 = null;
              }
            }
          }
          return tmp4;
        }
      }
    });
    return mapped.filter(items(1327).isNotNullish);
  }
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/interaction_components/SearchableSelectActionComponentUtils.tsx");

export const MIN_REREQUEST_TIME = 1000;
export const queryMentionables = function queryMentionables(type, query, channelId) {
  let roles;
  let users;
  const _require = channelId;
  const channel = store.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    let tmp4 = type === _require(1881).ComponentType.USER_SELECT;
    if (!tmp4) {
      tmp4 = type === _require(1881).ComponentType.MENTIONABLE_SELECT;
    }
    let tmp7 = type === _require(1881).ComponentType.ROLE_SELECT;
    if (!tmp7) {
      tmp7 = type === _require(1881).ComponentType.MENTIONABLE_SELECT;
    }
    let obj = channel(4974);
    obj = { query, channel, canMentionEveryone: false, canMentionHere: false, canMentionUsers: tmp4, canMentionRoles: tmp7, includeAllGuildUsers: true, includeNonMentionableRoles: true, checkRecentlyTalkedOnEmptyQuery: false, limit: 15 };
    ({ users, roles } = obj.queryMentionResults(obj));
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(users.map((user) => {
      let obj = channel(outer1_2[9]);
      let username = obj.getNickname(channel.getGuildId(), channelId, user.user);
      obj = { type: channelId(outer1_2[10]).SelectOptionType.USER, value: user.user.id };
      if (null == username) {
        username = user.user.globalName;
      }
      if (null == username) {
        username = user.user.username;
      }
      obj.label = username;
      return obj;
    }), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(roles.map((id) => ({ type: channelId(outer1_2[10]).SelectOptionType.ROLE, value: id.id, label: id.name })), arraySpreadResult);
    return items;
  }
};
export const queryChannels = function queryChannels(query, channelId, channelTypes) {
  const channel = store.getChannel(channelId);
  if (null == channel) {
    let items = [];
  } else {
    let obj = importDefault(4974);
    obj = { query, channel, channelTypes, limit: 15 };
    const channels = obj.queryApplicationCommandChannelResults(obj).channels;
    items = channels.map((id) => {
      const obj = { type: outer1_0(outer1_2[10]).SelectOptionType.CHANNEL, value: id.id, label: outer1_0(outer1_2[11]).computeChannelName(id, outer1_8, outer1_7) };
      return obj;
    });
  }
  return items;
};
export const getInitialSnowflakeSelectOptions = function getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId) {
  let defaultValues;
  let type;
  interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectActionComponent.id);
  ({ defaultValues, type } = selectActionComponent);
  let channelTypes;
  if (type === require(1881) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT) {
    channelTypes = selectActionComponent.channelTypes;
  }
  let items = getSnowflakeSelectDefaultValues(defaultValues, guildId, channelTypes);
  type = undefined;
  if (null != interactionComponentState) {
    type = interactionComponentState.type;
  }
  if (type !== require(1881) /* PermissionOverwriteType */.ComponentType.USER_SELECT) {
    let type1;
    if (null != interactionComponentState) {
      type1 = interactionComponentState.type;
    }
    if (type1 !== require(1881) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT) {
      let type2;
      if (null != interactionComponentState) {
        type2 = interactionComponentState.type;
      }
      if (type2 !== require(1881) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT) {
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
