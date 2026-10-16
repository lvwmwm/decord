// Module ID: 6169
// Function ID: 6170
// Name: GuildMemberRequesterStore
// Dependencies: [2068, 2128, 2119, 6170, 584, 4797, 1103, 504, 2]

// Module 6169 (GuildMemberRequesterStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageTypes from "MessageTypes" /* 1103 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4797 */;
import GuildMemberRequesterDefault from "GuildMemberRequester" /* 6170 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildMemberStore from "GuildMemberStore" /* 2128 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2119 */;
import size from "module_2" /* 2 */;

const f37112 = (arg0, userIds) => {
  let items;
  const obj2 = { type: "GUILD_MEMBERS_REQUEST", guildIds: items, userIds };
  items = [arg0];
  const obj = DispatcherDefault;
  obj.dispatch(obj2);
};
function handleConnectionReset() {
  navigation.reset();
}
function requestMember(arg0, arg1) {
  navigation.request(arg0, arg1);
  return false;
}
function requestLeaderboardMembers(guildId, message) {
  const guild_space_data = message.guild_space_data;
  let leaderboard;
  const getGuildSpaceLeaderboardUserIds = GuildLeaderboardTypes.getGuildSpaceLeaderboardUserIds;
  GuildLeaderboardTypes;
  if (guild_space_data != null) {
    leaderboard = guild_space_data.leaderboard;
  }
  const guildSpaceLeaderboardUserIds = getGuildSpaceLeaderboardUserIds(leaderboard);
  const tmp4 = guildSpaceLeaderboardUserIds[Symbol.iterator]();
  while (tmp4 !== undefined) {
    let tmp7 = requestMember(guildId, tmp5);
    continue;
  }
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const channel = ChannelStore.getChannel(messages.channelId);
  let flag = null != channel && null != channel.guild_id;
  if (flag) {
    const guild_id = channel.guild_id;
    const item = messages.forEach((type) => {
      let author;
      let mentions;
      ({ author, mentions } = type);
      if (null != author) {
        navigation.request(guild_id, author.id);
      }
      if (mentions != null) {
        const item = mentions.forEach((id) => {
          navigation.request(guild_id, id.id);
          return false;
        });
      }
      if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
        requestLeaderboardMembers(guild_id, type);
      }
    });
    flag = false;
  }
  return flag;
}
function handleLoadSearchResults(arg0) {
  let data;
  let guildId;
  ({ guildId, data } = arg0);
  let items;
  if (null == guildId) {
    return false;
  } else {
    items = [];
    let item = data.forEach((messages) => {
      messages = messages.messages;
      let item = messages.forEach((arr) => {
        const item = arr.forEach((item) => {
          closure_1_0.push(item);
        });
      });
    });
    const item1 = items.forEach((type) => {
      let author;
      let mentions;
      ({ author, mentions } = type);
      if (null != author) {
        navigation.request(guild_id, author.id);
      }
      if (mentions != null) {
        const item = mentions.forEach((id) => {
          navigation.request(guild_id, id.id);
          return false;
        });
      }
      if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
        requestLeaderboardMembers(guild_id, type);
      }
    });
    return false;
  }
}
const metroRequire = new GuildMemberRequesterDefault(GuildMemberStore.isMember, f37112);
new GuildMemberRequesterDefault(GuildMemberStore.isMember, f37112);
const Store = get_initializedDefault.Store;
class GuildMemberRequesterStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildMemberStore, SelectedChannelStore);
  }
  requestMember(arg0, arg1) {
    navigation.request(arg0, arg1);
  }
  getDebugState(arg0) {
    return navigation.getDebugState(arg0);
  }
}
const prototype = GuildMemberRequesterStore.prototype;
GuildMemberRequesterStore.displayName = "GuildMemberRequesterStore";
let obj = {
  CONNECTION_CLOSED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  CONNECTION_RESUMED: function handleConnectionResumed() {
    const unacknowledged = navigation.requestUnacknowledged();
    return false;
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    function _loop(iter) {
      const members = iter.members;
      const item = members.forEach((user) => {
        navigation.acknowledge(iter.guildId, user.user.id);
      });
      if (null != iter.notFound) {
        const notFound = iter.notFound;
        const item1 = notFound.forEach((item) => navigation.acknowledge(iter.guildId, item));
      }
    }
    let iter = arg0.chunks[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
    return false;
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  SMART_SEARCH_FETCH_SUCCESS: function handleSmartSearchFetchSuccess(messages) {
    messages = messages.messages;
    const guildId = messages.smartSearchQuery.guildId;
    const item = messages.forEach((type) => {
      let author;
      let mentions;
      ({ author, mentions } = type);
      if (null != author) {
        navigation.request(guild_id, author.id);
      }
      if (mentions != null) {
        const item = mentions.forEach((id) => {
          navigation.request(guild_id, id.id);
          return false;
        });
      }
      if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
        requestLeaderboardMembers(guild_id, type);
      }
    });
    return false;
  },
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const channel = ChannelStore.getChannel(pins.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const guild_id = channel.guild_id;
      const mapped = pins.map((message) => message.message);
      const item = mapped.forEach((type) => {
        let author;
        let mentions;
        ({ author, mentions } = type);
        if (null != author) {
          navigation.request(guild_id, author.id);
        }
        if (mentions != null) {
          const item = mentions.forEach((id) => {
            navigation.request(guild_id, id.id);
            return false;
          });
        }
        if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
          requestLeaderboardMembers(guild_id, type);
        }
      });
      flag = false;
    }
    return flag;
  },
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    let channelId;
    let guildId;
    let message;
    ({ guildId, channelId, message } = arg0);
    if (channelId !== SelectedChannelStore.getCurrentlySelectedChannelId()) {
      return false;
    } else {
      if (guildId == null) {
        const channel = ChannelStore.getChannel(channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        guildId = guild_id;
      }
      if (null != guildId) {
        if (message.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
          requestLeaderboardMembers(guildId, message);
        }
      }
      return false;
    }
  },
  CONVERSATION_MESSAGES_FETCH_SUCCESS: function handleConversationMessagesFetchSuccess(messages) {
    messages = messages.messages;
    const messageReferences = messages.messageReferences;
    const channel = ChannelStore.getChannel(messages.channelId);
    let flag = null != channel && null != channel.guild_id;
    if (flag) {
      const guild_id = channel.guild_id;
      const combined = messages.concat(messageReferences);
      const item = combined.forEach((type) => {
        let author;
        let mentions;
        ({ author, mentions } = type);
        if (null != author) {
          navigation.request(guild_id, author.id);
        }
        if (mentions != null) {
          const item = mentions.forEach((id) => {
            navigation.request(guild_id, id.id);
            return false;
          });
        }
        if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
          requestLeaderboardMembers(guild_id, type);
        }
      });
      flag = false;
    }
    return flag;
  },
  CHANNEL_CONVERSATIONS_FETCH_SUCCESS: function handleChannelConversationsFetchSuccess(rawConversations) {
    rawConversations = rawConversations.rawConversations;
    const channel = ChannelStore.getChannel(rawConversations.channelId);
    if (null != channel) {
      if (null != channel.guild_id) {
        const mapped = rawConversations.map((messages) => {
          messages = messages.messages;
          if (messages == null) {
            messages = [];
          }
          return messages;
        });
        const guild_id = channel.guild_id;
        const flatResult = mapped.flat();
        let item = flatResult.forEach((type) => {
          let author;
          let mentions;
          ({ author, mentions } = type);
          if (null != author) {
            navigation.request(guild_id, author.id);
          }
          if (mentions != null) {
            const item = mentions.forEach((id) => {
              navigation.request(guild_id, id.id);
              return false;
            });
          }
          if (type.type === MessageTypes.MessageTypes.GUILD_SPACE_MESSAGE) {
            requestLeaderboardMembers(guild_id, type);
          }
        });
        return false;
      }
    }
    return false;
  }
};
const guildMemberRequesterStore = new GuildMemberRequesterStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/GuildMemberRequesterStore.tsx");

export default guildMemberRequesterStore;
