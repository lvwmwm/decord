// Module ID: 8426
// Function ID: 8427
// Name: SearchableSelectActionComponentUtils
// Dependencies: [2045, 2109, 2103, 2067, 4441, 1376, 8419, 1982, 5693, 4942, 5021, 4943, 8427, 1374, 2]
// Exports: getInitialSnowflakeSelectOptions, getSnowflakeSelectDefaultValues, queryChannels, queryMentionables

// Module 8426 (SearchableSelectActionComponentUtils)
import NicknameUtilsDefault from "NicknameUtils" /* 4942 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5021 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5693 */;
import SnowflakeSelectDefaultValueTypes from "SnowflakeSelectDefaultValueTypes" /* 8427 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildRoleStore from "GuildRoleStore" /* 2103 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;
import UserStore from "UserStore" /* 1376 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8419 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/SearchableSelectActionComponentUtils.tsx");

export const MIN_REREQUEST_TIME = 1000;
export const queryMentionables = function queryMentionables(type, query, channelId) {
  _require = channelId;
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    const tmp2 = type === require("Server").ComponentType.USER_SELECT || type === require("Server").ComponentType.MENTIONABLE_SELECT;
    const tmp3 = type === require("Server").ComponentType.ROLE_SELECT || type === require("Server").ComponentType.MENTIONABLE_SELECT;
    let obj2 = { query, channel, canMentionEveryone: false, canMentionHere: false, canMentionUsers: tmp2, canMentionRoles: tmp3, includeAllGuildUsers: true, includeNonMentionableRoles: true, checkRecentlyTalkedOnEmptyQuery: false, limit: 15 };
    const obj = channel(5693);
    ({ users, roles } = channel(5693).queryMentionResults(obj2));
    const items = [];
    const queryMentionResultsResult = channel(5693).queryMentionResults(obj2);
    HermesBuiltin.arraySpread(roles.map((id) => ({ type: channelId(dependencyMap[10]).SelectOptionType.ROLE, value: id.id, label: id.name })), HermesBuiltin.arraySpread(users.map((user) => {
      let username = NicknameUtilsDefault.getNickname(channel.getGuildId(), closure_0, user.user);
      const obj2 = { type: InteractionComponentTypes.SelectOptionType.USER, value: user.user.id, label: null };
      if (username == null) {
        username = user.user.globalName;
      }
      if (username == null) {
        username = user.user.username;
      }
      obj2.label = username;
      return obj2;
    }), 0));
    return items;
  }
};
export const queryChannels = function queryChannels(query, arg1, channelTypes) {
  const channel = ChannelStore.getChannel(arg1);
  if (null == channel) {
    let items = [];
  } else {
    const obj2 = { query, channel, channelTypes, limit: 15 };
    const channels = AutocompleteUtilsDefault.queryApplicationCommandChannelResults(obj2).channels;
    items = channels.map((id) => {
      const obj = { type: require("InteractionComponentTypes").SelectOptionType.CHANNEL, value: id.id, label: require("useChannelName").computeChannelName(id, UserStore, RelationshipStore) };
      return obj;
    });
  }
  return items;
};
export const getInitialSnowflakeSelectOptions = function getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId) {
  const interactionComponentState = LocalInteractionComponentStateStore.getInteractionComponentState(containerId, selectActionComponent.id);
  const defaultValues = selectActionComponent.defaultValues;
  let channelTypes;
  if (selectActionComponent.type === channelTypes(1982).ComponentType.CHANNEL_SELECT) {
    channelTypes = selectActionComponent.channelTypes;
  }
  if (channelTypes === undefined) {
    channelTypes = [];
  }
  guild = undefined;
  if (null != defaultValues) {
    guild = GuildStore.getGuild(guildId);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (SnowflakeSelectDefaultValueTypes.SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = UserStore.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = GuildMemberStore.getNick(tmp16.id, user.id);
          }
          const obj2 = { type: tmp(5021).SelectOptionType.USER, value: user.id, label: null };
          if (nick == null) {
            nick = user.globalName;
          }
          if (nick == null) {
            nick = user.username;
          }
          obj2.label = nick;
          return obj2;
        }
      } else if (tmp(8427).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = GuildRoleStore.getRole(tmp8.id, type.id);
          let tmp12 = null;
          if (null != role) {
            const obj3 = { type: tmp(5021).SelectOptionType.ROLE, value: null, label: null };
            ({ id: obj4.value, name: obj4.label } = role);
            tmp12 = obj3;
          }
          return tmp12;
        }
      } else if (tmp(8427).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = ChannelStore.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              if (channelTypes.length <= 0) {
                const obj5 = { type: tmp(5021).SelectOptionType.CHANNEL, value: channel.id, label: tmp(4943).computeChannelName(channel, UserStore, RelationshipStore) };
                tmp5 = obj5;
                const tmpResult = tmp(4943);
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    let found = mapped.filter(tmp2(1374).isNotNullish);
  }
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type !== channelTypes(1982).ComponentType.USER_SELECT) {
    let type1;
    if (interactionComponentState != null) {
      type1 = interactionComponentState.type;
    }
    if (type1 !== tmp2(1982).ComponentType.ROLE_SELECT) {
      let type2;
      if (interactionComponentState != null) {
        type2 = interactionComponentState.type;
      }
      if (type2 !== tmp2(1982).ComponentType.MENTIONABLE_SELECT) {
        let type3;
        if (interactionComponentState != null) {
          type3 = interactionComponentState.type;
        }
      }
      if (found == null) {
        found = [];
      }
      return found;
    }
  }
  found = interactionComponentState.selectedOptions;
};
export const getSnowflakeSelectDefaultValues = function getSnowflakeSelectDefaultValues(defaultValues, guild_id) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  guild = undefined;
  if (null != defaultValues) {
    guild = GuildStore.getGuild(guild_id);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (SnowflakeSelectDefaultValueTypes.SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = UserStore.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = GuildMemberStore.getNick(tmp16.id, user.id);
          }
          const obj2 = { type: tmp(5021).SelectOptionType.USER, value: user.id, label: null };
          if (nick == null) {
            nick = user.globalName;
          }
          if (nick == null) {
            nick = user.username;
          }
          obj2.label = nick;
          return obj2;
        }
      } else if (tmp(8427).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = GuildRoleStore.getRole(tmp8.id, type.id);
          let tmp12 = null;
          if (null != role) {
            const obj3 = { type: tmp(5021).SelectOptionType.ROLE, value: null, label: null };
            ({ id: obj4.value, name: obj4.label } = role);
            tmp12 = obj3;
          }
          return tmp12;
        }
      } else if (tmp(8427).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = ChannelStore.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              if (channelTypes.length <= 0) {
                const obj5 = { type: tmp(5021).SelectOptionType.CHANNEL, value: channel.id, label: tmp(4943).computeChannelName(channel, UserStore, RelationshipStore) };
                tmp5 = obj5;
                const tmpResult = tmp(4943);
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    return mapped.filter(items(1374).isNotNullish);
  }
};
