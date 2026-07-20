// Module ID: 6753
// Function ID: 52876
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1318, 1282, 566, 686, 2, 5, 4660, 1921, 6763, 6778, 6779, 6780, 6781, 6786, 6765, 6792]

// Module 6753 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _callSuper from "_callSuper";
import initialize from "initialize";
import dispatcher from "dispatcher";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_12 } from "dispatcher";
import keys from "keys";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import CollectiblesPurchaseRecord from "CollectiblesPurchaseRecord";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
      let tmp3 = closure_27;
      if (closure_27(value)) {
        let tmp4 = closure_23;
        let addResult = closure_23.add(value);
      }
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
  return false;
}
function maybeAckViewedChannel(guildId, channelId) {
  if (tmp) {
    let tmp3 = !optInEnabled.isOptInEnabled(guildId);
    if (!tmp3) {
      const channel = channel.getChannel(channelId);
      tmp3 = null != channel && channel.isThread();
      const tmp5 = null != channel && channel.isThread();
    }
    if (!tmp3) {
      tmp3 = null != closure_15.ackMessageId(channelId);
    }
    if (!tmp3) {
      importDefault(dependencyMap[16]).wait(() => {
        let obj = arg1(closure_2[17]);
        obj = { object: constants.ACK_RECENT_CHANNEL_NEW_CHANNEL_VIEWED, objectType: constants2.ACK_AUTOMATIC };
        return obj.ack(arg1, obj, true, true, callback(closure_2[18]).atPreviousMillisecond(arg1));
      });
      const obj3 = importDefault(dependencyMap[16]);
    }
  }
}
function initializeNewChannels(guildId) {
  const arg1 = guildId;
  if (null == closure_21[guildId]) {
    const mapped = channels.getChannels(guildId)[closure_12].map((channel) => channel.channel.id);
    const member = member.getMember(guildId, id.getId());
    let joinedAt;
    if (null != member) {
      joinedAt = member.joinedAt;
    }
    if (null != joinedAt) {
      const _Set2 = Set;
      const set = new Set();
      closure_21[guildId] = set;
      const _Date2 = Date;
      const date = new Date(joinedAt);
      const time = date.getTime();
      if (0 !== mapped.length) {
        const _Set = Set;
        const set1 = new Set(mapped.filter((arg0) => {
          const extractTimestampResult = callback(closure_2[18]).extractTimestamp(arg0);
          let tmp2 = null == trackedAckMessageId.getTrackedAckMessageId(arg0);
          if (tmp2) {
            const _Date = Date;
            const timestamp = Date.now();
            tmp2 = extractTimestampResult > timestamp - callback(closure_2[14]).Millis.WEEK;
          }
          if (tmp2) {
            tmp2 = extractTimestampResult > guildRecentsDismissedAt.getGuildRecentsDismissedAt(arg0);
          }
          if (tmp2) {
            tmp2 = extractTimestampResult > callback;
          }
          if (tmp2) {
            tmp2 = !channelOrParentOptedIn.isChannelOrParentOptedIn(arg0, arg0);
          }
          return tmp2;
        }));
        closure_21[guildId] = set1;
        const _Date = Date;
        closure_22[guildId] = Date.now();
      }
    }
    const arr = channels.getChannels(guildId)[closure_12];
  }
}
function pruneNewChannels() {
  const keys = importDefault(dependencyMap[18]).keys(closure_21);
  const item = keys.forEach((arg0) => {
    const items = [...closure_21[arg0]];
    closure_21[arg0] = new Set(items.filter((arg0) => !channelOrParentOptedIn.isChannelOrParentOptedIn(arg0, arg0)));
  });
}
({ AnalyticsObjects: closure_17, AnalyticsObjectTypes: closure_18, GuildFeatures: closure_19 } = _isNativeReflectConstruct);
const set = new Set();
let closure_21 = {};
let closure_22 = {};
const set1 = new Set();
let tmp5 = (Store) => {
  class NewChannelsStore {
    constructor() {
      self = this;
      tmp = _classCallCheck(this, NewChannelsStore);
      obj = _getPrototypeOf(NewChannelsStore);
      tmp2 = _possibleConstructorReturn;
      if (closure_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = _getPrototypeOf;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = NewChannelsStore;
  callback2(NewChannelsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(_callSuper, initialize, dispatcher, keys, asyncGeneratorStep, closure_15, closure_16, _createForOfIteratorHelperLoose);
      const items = [closure_16];
      this.syncWith(items, closure_30);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getNewChannelIds",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = null == closure_21[arg0];
      }
      if (tmp) {
        callback4(arg0);
      }
      if (null == arg0) {
        const tmp6 = closure_20;
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
        const guild = guild.getGuild(guildId);
        let tmp2 = null == guild;
        if (!tmp2) {
          const features = guild.features;
          tmp2 = !features.has(constants.COMMUNITY);
        }
        let tmp3 = !tmp2;
        if (!tmp2) {
          let tmp4 = null != guildId;
          if (tmp4) {
            tmp4 = null == closure_21[guildId];
          }
          if (tmp4) {
            callback4(guildId);
          }
          let hasItem;
          if (null != closure_21[guildId]) {
            hasItem = obj.has(arg1);
          }
          if (hasItem) {
            hasItem = null == trackedAckMessageId.getTrackedAckMessageId(arg1);
          }
          tmp3 = hasItem;
        }
        return tmp3;
      }
    }
  };
  items[2] = obj;
  return callback(NewChannelsStore, items);
}(require("_callSuper").Store);
tmp5.displayName = "NewChannelsStore";
tmp5 = new tmp5(require("_isNativeReflectConstruct"), {
  BULK_CLEAR_RECENTS: function handleBulkClearRecents(guildId) {
    guildId = guildId.guildId;
    const arg1 = guildId;
    const channelIds = guildId.channelIds;
    if (null == closure_21[guildId]) {
      return false;
    } else {
      const item = channelIds.forEach((arg0) => closure_21[closure_0].delete(arg0));
      if (0 === closure_21[guildId].size) {
        delete r0[r1];
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
      if (null != closure_21[guildId]) {
        const _Date = Date;
        const timestamp = Date.now();
        if (closure_22[guildId] >= timestamp - importDefault(dependencyMap[14]).Millis.HOUR) {
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
      tmp2 = tmp !== arg1(dependencyMap[15]).SidebarType.VIEW_CHANNEL;
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
    let arg1;
    let importDefault;
    const tmp = guildHasCommunity(guild.id);
    if (tmp) {
      if (!set1.has(guild.id)) {
        set1.add(guild.id);
        arg1 = tmp6;
        guild = store.getGuild(guild.id);
        const _Set = Set;
        const set = new Set();
        importDefault = set;
        if (tmp15) {
          const items = [, ];
          ({ rulesChannelId: arr[0], publicUpdatesChannelId: arr[1] } = guild);
          const item = items.forEach((arg0) => {
            let hasItem = null != arg0;
            if (hasItem) {
              hasItem = tmp6.has(arg0);
            }
            if (hasItem) {
              set.add(arg0);
            }
          });
        }
        closure_21[guild.id] = set;
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
    delete r3[r2];
    set1.delete(guild.guild.id);
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (!channel.isVocal()) {
      let set = closure_21[channel.guild_id];
      if (null == set) {
        const _Set = Set;
        set = new Set();
      }
      closure_21[channel.guild_id] = set;
      closure_21[channel.guild_id].add(channel.id);
      const obj = closure_21[channel.guild_id];
      const tmp = closure_21;
    }
  }
});
const result = CollectiblesPurchaseRecord.fileFinishedImporting("modules/recent_channels/NewChannelsStore.tsx");

export default tmp5;
