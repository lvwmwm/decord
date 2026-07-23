// Module ID: 6764
// Function ID: 52976
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1316, 1194, 1348, 1907, 1917, 1838, 4142, 4325, 653, 664, 5661, 686, 5069, 21, 566, 2]

// Module 6764 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import SidebarType from "SidebarType";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_12 } from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_createForOfIteratorHelperLoose";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "_possibleConstructorReturn";

let closure_17;
let closure_18;
let closure_19;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function guildHasCommunity(id) {
  const guild = store.getGuild(id);
  let hasItem;
  if (null != guild) {
    const features = guild.features;
    hasItem = features.has(constants.COMMUNITY);
  }
  return true === hasItem;
}
function seedCommunityBaseline() {
  let iter2;
  set1.clear();
  const tmp2 = _createForOfIteratorHelperLoose(store.getGuildIds());
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp3 = guildHasCommunity;
      if (guildHasCommunity(value)) {
        let tmp4 = set1;
        let addResult = set1.add(value);
      }
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
  return false;
}
function maybeAckViewedChannel(guildId, channelId) {
  let closure_0 = channelId;
  if (tmp) {
    let tmp3 = !optInEnabled.isOptInEnabled(guildId);
    if (!tmp3) {
      channel = channel.getChannel(channelId);
      tmp3 = null != channel && channel.isThread();
      const tmp5 = null != channel && channel.isThread();
    }
    if (!tmp3) {
      tmp3 = null != closure_15.ackMessageId(channelId);
    }
    if (!tmp3) {
      importDefault(686).wait(() => {
        let obj = channelId(outer1_2[17]);
        obj = { object: outer1_17.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED, objectType: outer1_18.ACK_AUTOMATIC };
        return obj.ack(channelId, obj, true, true, outer1_1(outer1_2[18]).atPreviousMillisecond(channelId));
      });
      const obj3 = importDefault(686);
    }
  }
}
function initializeNewChannels(guildId) {
  let closure_0 = guildId;
  if (null == dependencyMap[guildId]) {
    const mapped = channels.getChannels(guildId)[closure_12].map((channel) => channel.channel.id);
    member = member.getMember(guildId, id.getId());
    let joinedAt;
    if (null != member) {
      joinedAt = member.joinedAt;
    }
    if (null != joinedAt) {
      const _Set2 = Set;
      const set = new Set();
      dependencyMap[guildId] = set;
      const _Date2 = Date;
      const date = new Date(joinedAt);
      const time = date.getTime();
      if (0 !== mapped.length) {
        const _Set = Set;
        const set1 = new Set(mapped.filter((arg0) => {
          const extractTimestampResult = callback(outer1_2[18]).extractTimestamp(arg0);
          let tmp2 = null == outer1_15.getTrackedAckMessageId(arg0);
          if (tmp2) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp2 = extractTimestampResult > timestamp - callback(outer1_2[14]).Millis.WEEK;
          }
          if (tmp2) {
            tmp2 = extractTimestampResult > outer1_8.getGuildRecentsDismissedAt(closure_0);
          }
          if (tmp2) {
            tmp2 = extractTimestampResult > callback;
          }
          if (tmp2) {
            tmp2 = !outer1_16.isChannelOrParentOptedIn(closure_0, arg0);
          }
          return tmp2;
        }));
        dependencyMap[guildId] = set1;
        let _Date = Date;
        closure_22[guildId] = Date.now();
      }
    }
    const arr = channels.getChannels(guildId)[closure_12];
  }
}
function pruneNewChannels() {
  const keys = importDefault(21).keys(closure_21);
  const item = keys.forEach((arg0) => {
    let closure_0 = arg0;
    const items = [...outer1_21[arg0]];
    outer1_21[arg0] = new Set(items.filter((arg0) => !outer2_16.isChannelOrParentOptedIn(closure_0, arg0)));
  });
}
({ AnalyticsObjects: closure_17, AnalyticsObjectTypes: closure_18, GuildFeatures: closure_19 } = ME);
let set = new Set();
let closure_21 = {};
let closure_22 = {};
let set1 = new Set();
let tmp5 = ((Store) => {
  class NewChannelsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, NewChannelsStore);
      obj = outer1_6(NewChannelsStore);
      tmp2 = outer1_5;
      if (outer1_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(NewChannelsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_11, outer1_13, outer1_14, outer1_15, outer1_16, outer1_8);
      const items = [outer1_16];
      this.syncWith(items, outer1_30);
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getNewChannelIds",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = null == outer1_21[arg0];
      }
      if (tmp) {
        outer1_29(arg0);
      }
      if (null == arg0) {
        const tmp6 = outer1_20;
      }
      return tmp6;
    }
  };
  items[1] = obj;
  obj = {
    key: "shouldIndicateNewChannel",
    value(guildId) {
      if (null == guildId) {
        return false;
      } else {
        const guild = outer1_14.getGuild(guildId);
        let tmp2 = null == guild;
        if (!tmp2) {
          const features = guild.features;
          tmp2 = !features.has(outer1_19.COMMUNITY);
        }
        let tmp3 = !tmp2;
        if (!tmp2) {
          let tmp4 = null != guildId;
          if (tmp4) {
            tmp4 = null == outer1_21[guildId];
          }
          if (tmp4) {
            outer1_29(guildId);
          }
          let hasItem;
          if (null != outer1_21[guildId]) {
            hasItem = obj.has(arg1);
          }
          if (hasItem) {
            hasItem = null == outer1_15.getTrackedAckMessageId(arg1);
          }
          tmp3 = hasItem;
        }
        return tmp3;
      }
    }
  };
  items[2] = obj;
  return callback(NewChannelsStore, items);
})(require("initialize").Store);
tmp5.displayName = "NewChannelsStore";
tmp5 = new tmp5(require("dispatcher"), {
  BULK_CLEAR_RECENTS: function handleBulkClearRecents(guildId) {
    guildId = guildId.guildId;
    const channelIds = guildId.channelIds;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const item = channelIds.forEach((arg0) => outer1_21[guildId].delete(arg0));
      if (0 === dependencyMap[guildId].size) {
        delete tmp[tmp2];
      }
    }
  },
  CHANNEL_ACK() {
    return true;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    if (null == guildId) {
      return tmp;
    } else {
      if (null != dependencyMap[guildId]) {
        const _Date = Date;
        const timestamp = Date.now();
        if (table[guildId] >= timestamp - importDefault(664).Millis.HOUR) {
          let flag = false;
          if (null != channelId) {
            maybeAckViewedChannel(guildId, channelId);
            flag = false;
          }
        }
      }
      initializeNewChannels(guildId);
      flag = true;
    }
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(guildId) {
    guildId = guildId.guildId;
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = tmp !== require(5661) /* SidebarType */.SidebarType.VIEW_CHANNEL;
    }
    if (!tmp2) {
      maybeAckViewedChannel(guildId, guildId.channelId);
    }
    return false;
  },
  SIDEBAR_VIEW_GUILD: function handleSidebarViewGuild(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      maybeAckViewedChannel(guildId, tmp);
    }
    return false;
  },
  CONNECTION_OPEN: seedCommunityBaseline,
  CACHE_LOADED: seedCommunityBaseline,
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    if (guildHasCommunity(guild.id)) {
      set1.add(guild.id);
    }
    return false;
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    guild = guild.guild;
    let c0;
    let set;
    const tmp = guildHasCommunity(guild.id);
    if (tmp) {
      if (!set1.has(guild.id)) {
        set1.add(guild.id);
        c0 = tmp6;
        guild = store.getGuild(guild.id);
        const _Set = Set;
        set = new Set();
        if (tmp15) {
          const items = [, ];
          ({ rulesChannelId: arr[0], publicUpdatesChannelId: arr[1] } = guild);
          const item = items.forEach((arg0) => {
            let hasItem = null != arg0;
            if (hasItem) {
              hasItem = _undefined.has(arg0);
            }
            if (hasItem) {
              set.add(arg0);
            }
          });
        }
        dependencyMap[guild.id] = set;
        const _Date = Date;
        closure_22[guild.id] = Date.now();
        return true;
      }
    }
    if (!tmp) {
      set1.delete(guild.id);
    }
    return false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    delete tmp2[tmp];
    set1.delete(guild.guild.id);
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (!channel.isVocal()) {
      let set = dependencyMap[channel.guild_id];
      if (null == set) {
        const _Set = Set;
        set = new Set();
      }
      dependencyMap[channel.guild_id] = set;
      dependencyMap[channel.guild_id].add(channel.id);
      const obj = dependencyMap[channel.guild_id];
      const tmp = dependencyMap;
    }
  }
});
let result = set.fileFinishedImporting("modules/recent_channels/NewChannelsStore.tsx");

export default tmp5;
