// Module ID: 8986
// Function ID: 8987
// Name: ICYMIStore
// Dependencies: [32, 8987, 5356, 1246, 6913, 8639, 502, 4991, 8996, 5013, 6196, 5074, 6900, 5084, 6833, 1385, 8998, 9000, 1072, 9002, 1089, 9003, 8999, 9006, 9012, 8791, 8795, 8992, 9014, 9001, 9009, 7596, 6198, 504, 572, 2]

// Module 8986 (ICYMIStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1089 */;
import ICYMITypes from "ICYMITypes" /* 8999 */;
import ContentInventoryConstants from "ContentInventoryConstants" /* 9002 */;
import ICYMIUtils from "ICYMIUtils" /* 9003 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9006 */;
import parseWaterwheelsCard2 from "parseWaterwheelsCard" /* 9012 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ContentInventoryStore from "ContentInventoryStore" /* 8987 */;
import ExperimentStore from "ExperimentStore" /* 5356 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 6913 */;
import LabFeatureStore from "LabFeatureStore" /* 8639 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import GuildAffinitiesStore from "GuildAffinitiesStore" /* 8996 */;
import GuildStore from "GuildStore" /* 5013 */;
import MessageStore from "MessageStore" /* 6196 */;
import PermissionStore from "PermissionStore" /* 5074 */;
import ReadStateStore from "ReadStateStore" /* 6900 */;
import RelationshipStore from "RelationshipStore" /* 5084 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6833 */;
import UserStore from "UserStore" /* 1385 */;
import ICYMIFiltersStore from "ICYMIFiltersStore" /* 8998 */;
import ICYMIUnreadStateStore from "ICYMIUnreadStateStore" /* 9000 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _require, closure_37, closure_41, guildIds, guildScheduledEventsForGuild, hasNewContent;

let c9;
let closure_24;
let closure_25;
let closure_26;
let metroImportAll;
let metroImportDefault;
const f95135 = (id) => id.id;
function filterStaffGuild(data) {
  if (ICYMIFiltersStore.filterStaffContent()) {
    obj = ICYMIUtils;
    const tmp2 = require;
    if (obj.isGuildItem(data)) {
      if (data.data.guild_id === tmp2(8999).GAME_CONTENT_GUILD_ID) {
        return true;
      } else {
        const guild = GuildStore.getGuild(data.data.guild_id);
        if (null != guild) {
          const features = guild.features;
        }
        return false;
      }
    }
    return true;
  } else {
    return true;
  }
}
function hydrateDiscoverItem(type) {
  if (type.type !== ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM) {
    return true;
  } else {
    const tmpResult = WaterwheelsDiscoverExperiment;
    if (tmpResult.getWaterwheelsDiscoverEnabled("icymi_store")) {
      const data = type.data;
      let item;
      const parseWaterwheelsCard = parseWaterwheelsCard2.parseWaterwheelsCard;
      parseWaterwheelsCard2;
      if (data != null) {
        item = data.item;
      }
      const parseWaterwheelsCardResult = parseWaterwheelsCard(item);
      let flag2 = parseWaterwheelsCardResult.ok;
      if (flag2) {
        const id = type.id;
        obj = { card: parseWaterwheelsCardResult.card };
        const merged = Object.assign(type);
        closure_37[id] = obj;
        flag2 = true;
      }
      return flag2;
    } else {
      return false;
    }
  }
}
function injectItemsIntoList(arr, arr2, arg2, arg3) {
  let closure_0 = arg2;
  let c1 = 7;
  const found = arr.filter((type) => type.type !== ACTIVITY);
  const item = arr2.forEach((item, index) => {
    if ((index + 1) * c1 < found1.length) {
      found1.splice((index + 1) * tmp, 0, item);
    } else {
      found1.push(item);
    }
  });
  return found;
}
function injectRecommendedGuildsRow() {
  closure_48 = closure_48.filter((type) => type.type !== require("ICYMITypes").ICYMIItemTypes.RECOMMENDED_GUILDS);
  closure_49 = closure_49.filter((type) => type.type !== require("ICYMITypes").ICYMIItemTypes.RECOMMENDED_GUILDS);
  if (0 !== length.length) {
    const guildsArray = GuildStore.getGuildsArray();
    const tmp25 = guildsArray.filter((features) => {
      features = features.features;
      return features.has(constants.COMMUNITY);
    }).length >= 5;
    const readTimestamp = ICYMIUnreadStateStore.getReadTimestamp("recommendedGuilds");
    if (tmp25) {
      if (null != readTimestamp) {
        const _Date = Date;
        if (Date.now() - lastJoinedRecommendedGuild > DAY) {
          const _Date2 = Date;
        }
      }
    }
    obj = { id: "recommendedGuilds", type: ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS, score: 50 };
    closure_37[obj.id] = obj;
    closure_36[obj.id] = obj;
    if (0 === closure_48.length) {
      items = [obj];
      HermesBuiltin.arraySpread(items, closure_49, 1);
      closure_49 = items;
    } else {
      if (tmp25) {
        if (tmp25) {
          const _Math = Math;
          const _Math2 = Math;
          closure_48.splice(Math.round(2 * Math.random()) + 3 - 1, 0, obj);
        } else {
          closure_48.splice(5, 0, obj);
        }
      }
      const items1 = [];
      items1[HermesBuiltin.arraySpread(items1, closure_48, 0)] = obj;
      closure_48 = items1;
    }
  }
}
function finalizeNewDehydratedItemsContent() {
  let blockedOrIgnored;
  let closure_46;
  let items1;
  const self = this;
  set = new Set();
  const item = items1.forEach((id) => {
    set.add(id.id);
  });
  if (null != _null) {
    if (set.has(_null.id)) {
      let id = tmp19.id;
      const type = _null.type;
      const findIndexResult = items1.findIndex((id) => id.id === id && id.type === type);
      if (-1 !== findIndexResult) {
        _null = items1[findIndexResult];
        const found = items1.filter((id) => id.id !== id);
        items = [_null];
        HermesBuiltin.arraySpread(items, found, 1);
        items1 = items;
      }
    } else {
      items1 = [_null];
      let tmp2 = items1;
      HermesBuiltin.arraySpread(items1, items1, 1);
      set.add(_null.id);
    }
  }
  const item1 = items1.forEach((id) => {
    closure_1_36[id.id] = id;
    const tmp = set;
    const tmp2 = type;
    if (id.type === set(type[22]).ICYMIItemTypes.CUSTOM_STATUS) {
      if (blockedOrIgnored.isBlockedOrIgnored(id.data.user_id)) {
        closure_1_38[id.id] = true;
      } else {
        id = id.id;
        const tmpResult = tmp(tmp2[21]);
        closure_1_37[id] = tmpResult.customStatusToContentInventoryEntry(id);
      }
    }
  });
}
function reload(arg0) {
  let channel;
  let closure_30;
  let closure_35;
  let found;
  let found1;
  let items2;
  let load_id;
  function injectGuildEvents() {
    let channel_id;
    guildIds = guildIds.getGuildIds();
    items = [];
    const iter = guildIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null == closure_39[nextResult]) {
        guildScheduledEventsForGuild = guildScheduledEventsForGuild.getGuildScheduledEventsForGuild(tmp3);
        let num = 0;
        for (const item10031 of guildScheduledEventsForGuild) {
          let tmp12 = item10031;
          if (!closure_8(item10031)) {
            let tmp23 = items2;
            if (closure_7(tmp12, 2 * items2(items2[20]).Seconds.DAY)) {
              if (null == closure_37[tmp12.id]) {
                let obj2 = { id: tmp12.id, type: items1(tmp23[22]).ICYMIItemTypes.GUILD_EVENT, score: 10, event_id: tmp12.id };
                let id = tmp12.id;
                closure_37[id] = obj2;
              }
              let obj3 = { id: tmp12.id, type: items1(tmp23[22]).ICYMIItemTypes.GUILD_EVENT, score: 10, data: obj7 };
              let push = items.push;
              let obj7 = { guild_id: null, event_id: null, channel_id };
              ({ guild_id: obj4.guild_id, id: obj4.event_id, channel_id } = tmp12);
              let arr = push(obj3);
              let sum = num + 1;
              num = sum;
              if (1 <= sum) {
                obj.return();
                break;
              }
              break;
            }
          }
          continue;
        }
      }
      continue;
    }
    const sorted = items.sort((data, data2) => {
      const guildAffinity = closure_1_14.getGuildAffinity(data.data.guild_id);
      const guildAffinity1 = closure_1_14.getGuildAffinity(data2.data.guild_id);
      let num = 0;
      if (null != guildAffinity1) {
        num = guildAffinity1.score;
      }
      let num2 = 0;
      if (null != guildAffinity) {
        num2 = guildAffinity.score;
      }
      return num - num2;
    });
    items1 = [];
    items2 = [];
    const item = items.forEach((id) => {
      closure_2_36[id.id] = id;
      if (null != ICYMIUnreadStateStore.getReadTimestamp(id.id)) {
        items2.push(id);
      } else {
        items1.push(id);
      }
    });
    closure_48 = closure_62(closure_48, items1, items1(items2[22]).ICYMIItemTypes.GUILD_EVENT, 7);
    closure_49 = closure_62(closure_49, items2, items1(items2[22]).ICYMIItemTypes.GUILD_EVENT, 7);
  }
  if (closure_33.length > 0) {
    dehydratedItems = closure_33;
    closure_33 = [];
    closure_34 = [];
  }
  closure_41 = closure_41 + 1;
  if (null != arg0) {
    ({ newUnread: found, newRead: found1 } = arg0);
  } else {
    let tmp26 = dehydratedItems;
    items = [];
    let items1 = [];
    items2 = [];
    let item = dehydratedItems.forEach((id) => {
      const tmp = null != readTimestamp.getReadTimestamp(id.id);
      let tmp4 = id.type === set(dependencyMap[22]).ICYMIItemTypes.MESSAGE;
      if (tmp4) {
        const message_context = id.data.message_context;
        let prop;
        if (message_context != null) {
          prop = message_context.external_content_application_id;
        }
        tmp4 = null == prop;
      }
      let tmp6 = tmp;
      if (tmp4) {
        let tmp7 = tmp;
        if (!tmp7) {
          const tmp2Result = set(dependencyMap[29]);
          tmp7 = !tmp2Result.isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        items1.push(id);
      } else {
        if (id.type === set(dependencyMap[22]).ICYMIItemTypes.MESSAGE) {
          if (id.data.has_mention) {
            items3.push(id);
          }
        }
        items2.push(id);
      }
    });
    const items3 = [];
    let tmp28 = items3;
    let tmp29 = items2;
    let num = 0;
    let tmp30 = items3;
    let tmp31 = items1;
    HermesBuiltin.arraySpread(items3, items1, HermesBuiltin.arraySpread(items3, items2, 0));
    const items4 = [
      items3,
      items.sort((id, id2) => {
          obj = set(dependencyMap[21]);
          return obj.compareGravityUnreadIds(id.id, id2.id);
        })
    ];
    let tmp33 = _slicedToArray;
    let num2 = 2;
    let tmp34 = _slicedToArray(items4, 2);
    [found, found1] = tmp34;
  }
  let tmp3 = injectGuildEvents();
  set = new Set();
  let closure_1 = {};
  const items5 = [];
  const items6 = [];
  const feed = ContentInventoryStore.getFeed(ContentInventoryFeedKey.GLOBAL_FEED);
  let entries;
  if (feed != null) {
    entries = feed.entries;
  }
  if (entries == null) {
    entries = [];
  }
  let sorted = entries.sort((rank, rank2) => rank.rank - rank2.rank);
  const substr = sorted.slice(0, 5);
  const item1 = entries.forEach(function(content) {
    let obj6;
    obj = set;
    if (!set.has(content.content.id)) {
      const tmpResult = items(items2[26]);
      if (!tmpResult.isEntryExpired(content.content)) {
        const tmpResult2 = items(items2[27]);
        if (tmpResult2.isGamingLikeEntry(content.content)) {
          if (null == closure_1[content.content.author_id]) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            const author_id = content.content.author_id;
            set = new Set();
            closure_1[author_id] = set;
          }
          const obj4 = closure_1[content.content.author_id];
          if (!obj4.has(content.content.extra.application_id)) {
            const obj5 = closure_1[content.content.author_id];
            obj5.add(content.content.extra.application_id);
          }
        }
        if (null == closure_2_37[content.content.id]) {
          const id = content.content.id;
          closure_2_37[id] = { id: content.content.id, type: items(items2[22]).ICYMIItemTypes.ACTIVITY, score: 15, activity: content.content };
          const obj2 = { id: content.content.id, type: items(items2[22]).ICYMIItemTypes.ACTIVITY, score: 15, activity: content.content };
        }
        const obj3 = { id: content.content.id, type: items(items2[22]).ICYMIItemTypes.ACTIVITY, score: 15, data: obj6 };
        obj6 = { user_id: content.content.author_id, content_id: content.content.id };
        obj.add(content.content.id);
        closure_2_36[obj3.id] = obj3;
        if (null != ICYMIUnreadStateStore.getReadTimestamp(obj3.id)) {
          items6.push(obj3);
        } else {
          items5.push(obj3);
        }
      }
    }
  });
  let tmp8 = items;
  items(items2[22]).ICYMIItemTypes.ACTIVITY;
  found = undefined;
  found = found.filter((type) => type.type !== ACTIVITY);
  const item2 = items5.forEach((item, index) => {
    if ((index + 1) * c1 < found1.length) {
      found1.splice((index + 1) * tmp, 0, item);
    } else {
      found1.push(item);
    }
  });
  const ACTIVITY = items(items2[22]).ICYMIItemTypes.ACTIVITY;
  let c1 = 5;
  found1 = undefined;
  found1 = found1.filter((type) => type.type !== ACTIVITY);
  const item3 = items6.forEach((item, index) => {
    if ((index + 1) * c1 < found1.length) {
      found1.splice((index + 1) * tmp, 0, item);
    } else {
      found1.push(item);
    }
  });
  let tmp14 = injectRecommendedGuildsRow();
  let tmp15 = null != newTrackingProps.load_id;
  if (tmp15) {
    let tmp16 = load_id;
    let tmp17 = newTrackingProps;
    tmp15 = load_id !== newTrackingProps.load_id;
  }
  if (tmp15) {
    obj = { newTrackingProps, hasNewContent, unreadFeedItems: found, readFeedItems: found1, homeSessionId: "gravity" };
    let tmp18 = newTrackingProps;
    let tmp19 = hasNewContent;
    let tmp20 = found;
    let tmp21 = found1;
    const tmp8Result = tmp8(items2[28]);
    tmp8Result.trackFeedLoaded(obj);
    let tmp23 = newTrackingProps;
    load_id = newTrackingProps.load_id;
    if (load_id == null) {
      load_id = null;
    }
    newTrackingProps = {};
  }
  c50 = 0;
  if (found.length + found1.length === 0) {
    c57 = true;
  }
  const items7 = [...found1];
  const tmp8Result2 = tmp8(items2[21]);
  tmp8Result2.hydrateItems(items7, 0, tmp8(items2[22]).ICYMI_PAGE_SIZE, closure_37);
  let c54 = false;
}
function getNewUnreadItems(arr10, channelId) {
  items = [];
  set = new Set(dehydratedItems.map((id) => id.id));
  const iter = arr10[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = require;
    if (nextResult.type !== ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS) {
      if (!set.has(tmp2.id)) {
        let tmp7 = null == ICYMIUnreadStateStore.getReadTimestamp(tmp2.id);
        if (tmp7) {
          let tmp9 = tmp2.type !== tmp3(8999).ICYMIItemTypes.MESSAGE;
          if (!tmp9) {
            let tmp3Result = tmp3(9001);
            let result = tmp3Result.isItemUnreadInChannel(tmp2.data.channel_id, tmp2.data.message_id);
            if (result) {
              result = tmp2.data.channel_id !== channelId;
            }
            tmp9 = result;
          }
          tmp7 = tmp9;
        }
        if (tmp7) {
          let arr = items.push(tmp2);
        }
      }
    }
    continue;
  }
  return items;
}
function maybeFilterChannelItems(channelId, score) {
  let closure_30;
  const f95150 = (data) => {
    obj = channelId(dependencyMap[21]);
    const isGuildItemResult = obj.isGuildItem(data);
    let tmp2 = !isGuildItemResult;
    if (isGuildItemResult) {
      tmp2 = data.data.channel_id !== channelId;
    }
    return tmp2;
  };
  obj = require("ICYMIUtils");
  const numberToCustomScoreResult = obj.numberToCustomScore(score);
  if (numberToCustomScoreResult === require("ICYMIUtils").ICYMICustomScore.MUTED) {
    let tmp2 = channelId;
    dehydratedItems = dehydratedItems.filter(f95150);
    closure_48 = closure_48.filter(f95150);
    closure_49 = closure_49.filter(f95150);
    closure_33 = closure_33.filter(f95150);
    _require = channelId;
    closure_34 = closure_34.filter(f95150);
  }
}
function maybeFilterGuildItems(guildId, guildScore) {
  let closure_30;
  const f95151 = (data) => {
    obj = guildId(dependencyMap[21]);
    const isGuildItemResult = obj.isGuildItem(data);
    let tmp2 = !isGuildItemResult;
    if (isGuildItemResult) {
      tmp2 = data.data.guild_id !== guildId;
    }
    return tmp2;
  };
  obj = require("ICYMIUtils");
  const numberToCustomScoreResult = obj.numberToCustomScore(guildScore);
  if (numberToCustomScoreResult === require("ICYMIUtils").ICYMICustomScore.MUTED) {
    let tmp2 = guildId;
    dehydratedItems = dehydratedItems.filter(f95151);
    closure_48 = closure_48.filter(f95151);
    closure_49 = closure_49.filter(f95151);
    closure_33 = closure_33.filter(f95151);
    _require = guildId;
    closure_34 = closure_34.filter(f95151);
  }
}
function handleReaction(colors) {
  let emoji;
  let reactionType;
  ({ emoji, reactionType } = colors);
  if (null == closure_37[colors.messageId]) {
    return false;
  } else if (closure_37[colors.messageId].type !== ICYMITypes.ICYMIItemTypes.MESSAGE) {
    return false;
  } else {
    let addReactionResult;
    const tmp5 = AuthenticationStore.getId() === tmp2;
    if ("MESSAGE_REACTION_ADD" === tmp) {
      const message2 = tmp3.message;
      obj = { colors: colors.colors, reactionType };
      addReactionResult = message2.addReaction(emoji, tmp5, obj);
    } else {
      const message = tmp3.message;
      addReactionResult = message.removeReaction(emoji, tmp5, reactionType);
    }
    closure_37[colors.messageId].message = addReactionResult;
  }
}
function handleAck(channelId) {
  let flag;
  let tmp6;
  channelId = channelId.channelId;
  items = [];
  const items1 = [];
  const item = items1.forEach((type, index) => {
    if (index > c50) {
      if (type.type === ICYMITypes.ICYMIItemTypes.MESSAGE) {
        if (type.data.channel_id === channelId) {
          items.push(type);
        }
      }
    }
    items1.push(type);
  });
  const items2 = [];
  const items3 = [];
  const items4 = [];
  const item1 = closure_33.forEach((id) => {
    const tmp = null != readTimestamp.getReadTimestamp(id.id);
    let tmp4 = id.type === set(dependencyMap[22]).ICYMIItemTypes.MESSAGE;
    if (tmp4) {
      const message_context = id.data.message_context;
      let prop;
      if (message_context != null) {
        prop = message_context.external_content_application_id;
      }
      tmp4 = null == prop;
    }
    let tmp6 = tmp;
    if (tmp4) {
      let tmp7 = tmp;
      if (!tmp7) {
        const tmp2Result = set(dependencyMap[29]);
        tmp7 = !tmp2Result.isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
      }
      tmp6 = tmp7;
    }
    if (tmp6) {
      items1.push(id);
    } else {
      if (id.type === set(dependencyMap[22]).ICYMIItemTypes.MESSAGE) {
        if (id.data.has_mention) {
          items3.push(id);
        }
      }
      items2.push(id);
    }
  });
  const items5 = [...items3];
  const items6 = [
    items5,
    items2.sort((id, id2) => {
      obj = set(dependencyMap[21]);
      return obj.compareGravityUnreadIds(id.id, id2.id);
    })
  ];
  const tmp4 = _slicedToArray(items6, 2);
  const arr8 = getNewUnreadItems(tmp4[0], channelId);
  const tmp5 = c44;
  if (tmp5) {
    tmp6 = flag && arr8.length >= channelId(items1[22]).MIN_ITEMS_FOR_NEW_PILL;
    const tmp14 = flag && arr8.length >= channelId(items1[22]).MIN_ITEMS_FOR_NEW_PILL;
  } else {
    tmp6 = tmp2;
    if (tmp6) {
      const _Date = Date;
      const diff = Date.now() - closure_32;
      flag = false;
      const arr9 = closure_33;
      if (diff > 6 * items(items1[20]).Millis.HOUR) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        new Set(items1.map(f95135));
        const substr = arr9.slice(0, 20);
        flag = substr.filter((id) => set1.has(id.id)).length >= 3;
      }
      tmp6 = flag;
    }
  }
  flag = tmp6;
  if (0 === items.length) {
    if (flag === flag) {
      return false;
    }
  }
  if (0 !== items.length) {
    const items7 = [];
    HermesBuiltin.arraySpread(items7, items, HermesBuiltin.arraySpread(items7, items7, 0));
  }
}
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ eventScheduledToStartWithin: metroImportDefault, isGuildEventEnded: metroImportAll, isGuildScheduledEventActive: c9 } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ ChannelTypes: closure_24, GuildFeatures: closure_25, Permissions: closure_26 } = Constants);
const ContentInventoryFeedKey = ContentInventoryConstants.ContentInventoryFeedKey;
const DAY = DurationsDefault.Millis.DAY;
let closure_29 = 3 * DurationsDefault.Millis.DAY;
let dehydratedItems = [];
let c31 = null;
let closure_33 = [];
let closure_34 = [];
let newTrackingProps = {};
let closure_36 = {};
const errors = {};
let closure_38 = {};
let obj = {};
obj = {};
let c41 = 0;
let c42 = false;
let c43 = false;
let c44 = false;
let items = null;
let c46 = null;
let c47 = 0;
let closure_48 = [];
let closure_49 = [];
let c50 = 0;
const length = [];
const lastJoinedRecommendedGuild = 0;
let muted = true;
let refreshing = false;
let set = new Set();
let focused = false;
let c57 = false;
let timestamp = 0;
let takenAt = 0;
const PersistedStore = get_initializedDefault.PersistedStore;
class ICYMIStore extends PersistedStore {
  initialize(dehydratedItems) {
    this.waitFor(ApexExperimentStore, AuthenticationStore, ChannelStore, ContentInventoryStore, ExperimentStore, GuildAffinitiesStore, GuildScheduledEventStore, GuildStore, ICYMIFiltersStore, LabFeatureStore, ICYMIUnreadStateStore, MessageStore, PermissionStore, ReadStateStore, RelationshipStore, UserGuildSettingsStore, UserStore);
    if (null != dehydratedItems) {
      dehydratedItems = dehydratedItems.dehydratedItems;
      if (dehydratedItems == null) {
        dehydratedItems = [];
      }
      let closure_30 = dehydratedItems;
      const item = dehydratedItems.forEach((id) => {
        closure_1_36[id.id] = id;
      });
      let customGuildScores = dehydratedItems.customGuildScores;
      if (customGuildScores == null) {
        customGuildScores = {};
      }
      let prop = dehydratedItems.customChannelScoresByGuild;
      if (prop == null) {
        prop = {};
      }
      let num = dehydratedItems.numOpens;
      if (num == null) {
        num = 0;
      }
      let c47 = num;
      let num2 = dehydratedItems.lastOpened;
      if (num2 == null) {
        num2 = 0;
      }
      let closure_32 = num2;
      let num3 = dehydratedItems.lastJoinedRecommendedGuild;
      if (num3 == null) {
        num3 = 0;
      }
      let closure_52 = num3;
      let num4 = dehydratedItems.lastTakenICYMISurvey;
      if (num4 == null) {
        num4 = 0;
      }
      takenAt = num4;
    }
  }
  getVersion() {
    return c41;
  }
  getDehydratedItems() {
    return dehydratedItems;
  }
  getNewDehydratedItems() {
    return closure_33;
  }
  getDehydratedItem(arg0) {
    let tmp = closure_36[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getHydratedItem(id) {
    let tmp = closure_37[id];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getMessage(arg0) {
    let message = null;
    if (null != closure_37[arg0]) {
      message = null;
      if (closure_37[arg0].type === ICYMITypes.ICYMIItemTypes.MESSAGE) {
        message = tmp.message;
      }
    }
    return message;
  }
  getHydratedItems() {
    return closure_37;
  }
  getUnreadDisplayItems() {
    return closure_48;
  }
  getNewUnreadDehydratedItems() {
    return closure_34;
  }
  getReadDisplayItems() {
    return closure_49;
  }
  getNextIndexToHydrate() {
    return c50;
  }
  getMissingItems() {
    return closure_38;
  }
  customMuted(id, id2) {
    const self = this;
    const customGuildScore = this.getCustomGuildScore(id);
    let tmp4 = customGuildScore === ICYMIUtils.ICYMICustomScore.MUTED;
    if (!tmp4) {
      const customChannelScore = self.getCustomChannelScore(id, id);
      tmp4 = customChannelScore === ICYMIUtils.ICYMICustomScore.MUTED;
    }
    return tmp4;
  }
  getCustomChannelScore(guild_id, id) {
    if (null != obj[guild_id]) {
      let UNKNOWN;
      if (null != obj[guild_id][id]) {
        obj = ICYMIUtils;
        UNKNOWN = obj.numberToCustomScore(obj[guild_id][id]);
      }
      return UNKNOWN;
    }
    UNKNOWN = ICYMIUtils.ICYMICustomScore.UNKNOWN;
  }
  getCustomGuildScore(id) {
    let num = obj[id];
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getCustomGuildScores() {
    return obj;
  }
  hasNewContent() {
    return c43;
  }
  getCurrentStatusAttachments(arg0) {
    if (null != items) {
      return [];
    }
  }
  getLoadId() {
    return c31;
  }
  hasOpenedEnoughTimes() {
    return 5 === c47;
  }
  hasOpened() {
    return c44;
  }
  getDiscoverableGuilds() {
    return length;
  }
  videosMuted() {
    return muted;
  }
  isRefreshing() {
    return refreshing;
  }
  isHydrating() {
    return set.size > 0;
  }
  notificationItem() {
    return c46;
  }
  getIsTabFocused() {
    return focused;
  }
  isFirstPageHydrated() {
    return c57;
  }
  lastScrollEvent() {
    return timestamp;
  }
  lastTakenICYMISurvey() {
    return takenAt;
  }
  getIndexInHydratedFeed(id) {
    if ("recommended_guilds" !== id) {
      let findIndexResult;
      if ("recommendedGuilds" !== id) {
        items = [];
        HermesBuiltin.arraySpread(items, closure_49, HermesBuiltin.arraySpread(items, closure_48, 0));
        const found = items.filter((item) => null != closure_1_37[item.id]);
        findIndexResult = found.findIndex((id) => id.id === id);
      }
      return findIndexResult;
    }
    const items1 = [...closure_49];
    findIndexResult = items1.findIndex((type) => type.type === id(dependencyMap[22]).ICYMIItemTypes.RECOMMENDED_GUILDS);
  }
  getState() {
    obj = { dehydratedItems, numOpens, customGuildScores: obj, customChannelScoresByGuild: obj, lastOpened, lastJoinedRecommendedGuild, lastTakenICYMISurvey: takenAt };
    return obj;
  }
}
const prototype = ICYMIStore.prototype;
ICYMIStore.displayName = "ICYMIStore";
ICYMIStore.persistKey = "ICYMIStore";
obj = {
  LOGOUT: function handleLogout() {
    let closure_30 = [];
    closure_33 = [];
    closure_34 = [];
    closure_36 = {};
    let closure_35 = {};
    closure_37 = {};
    closure_38 = {};
    c31 = null;
    c41 = 0;
    c42 = false;
    let c43 = false;
    c44 = false;
    closure_48 = [];
    closure_49 = [];
    c50 = 0;
    let closure_32 = 0;
    let closure_52 = 0;
    muted = true;
    refreshing = false;
    new Set();
    let c46 = null;
    focused = false;
    c57 = false;
    items = null;
    timestamp = 0;
  },
  LOAD_ICYMI_FROM_NOTIFICATION: function handleLoadICYMIFromNotification(arg0) {
    let customStatusItem;
    let items1;
    let items2;
    let items4;
    let items7;
    let messageItem;
    let obj2;
    let obj4;
    ({ messageItem, customStatusItem } = arg0);
    if (null != customStatusItem) {
      if (null != c31) {
        if (items7.length > 0) {
          items = items7;
        } else {
          items = [];
          HermesBuiltin.arraySpread(items, items1, 0);
        }
        items7 = items;
        finalizeNewDehydratedItemsContent();
        reload();
      }
      return true;
    } else if (null != messageItem) {
      obj = { id: messageItem.message.id, type: items2(items4[22]).ICYMIItemTypes.MESSAGE, score: 50, data: obj2 };
      obj2 = { channel_id: messageItem.channel_id, message_id: messageItem.message.id, guild_id: messageItem.guild_id, channel_type: constants.GUILD_TEXT };
      closure_36[messageItem.message.id] = obj;
      const id = messageItem.message.id;
      const obj3 = { message: obj4.createMessageRecord(messageItem.message) };
      const merged = Object.assign(obj);
      closure_37[id] = obj3;
      obj4 = items2(items4[32]);
      if (null == c31) {
        if (null == closure_35) {
          items1 = [obj];
          HermesBuiltin.arraySpread(items1, items1, 1);
          items2 = [];
          const items3 = [];
          items4 = [];
          const item = items1.forEach((id) => {
            const tmp = null != readTimestamp.getReadTimestamp(id.id);
            let tmp4 = id.type === set(dependencyMap[22]).ICYMIItemTypes.MESSAGE;
            if (tmp4) {
              const message_context = id.data.message_context;
              let prop;
              if (message_context != null) {
                prop = message_context.external_content_application_id;
              }
              tmp4 = null == prop;
            }
            let tmp6 = tmp;
            if (tmp4) {
              let tmp7 = tmp;
              if (!tmp7) {
                const tmp2Result = set(dependencyMap[29]);
                tmp7 = !tmp2Result.isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
              }
              tmp6 = tmp7;
            }
            if (tmp6) {
              items1.push(id);
            } else {
              if (id.type === set(dependencyMap[22]).ICYMIItemTypes.MESSAGE) {
                if (id.data.has_mention) {
                  items3.push(id);
                }
              }
              items2.push(id);
            }
          });
          const items5 = [];
          HermesBuiltin.arraySpread(items5, items3, HermesBuiltin.arraySpread(items5, items4, 0));
          const items6 = [
            items5,
            items2.sort((id, id2) => {
                    obj = set(dependencyMap[21]);
                    return obj.compareGravityUnreadIds(id.id, id2.id);
                  })
          ];
          [closure_48, closure_49] = items6;
          _slicedToArray(items6, 2);
        }
        return true;
      }
      items7 = [obj];
      HermesBuiltin.arraySpread(items7, items7, 1);
      reload();
    } else {
      return false;
    }
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadDehydrated(items) {
    let arr10;
    let arr11;
    let c43;
    let isInitialLoad;
    let isReloading;
    let loadId;
    let readTimestamp;
    let startTime;
    let str;
    items = items.items;
    set = undefined;
    let tmp = set;
    let tmp2 = dependencyMap;
    ({ loadId, startTime, isInitialLoad, isReloading } = items);
    const self = this;
    set = new Set(set(8999).SUPPORTED_ITEM_TYPES);
    const found = items.filter((type) => set.has(type.type));
    const found1 = found.filter(hydrateDiscoverItem);
    const found2 = found1.filter(filterStaffGuild);
    closure_33 = found2.map((type) => {
      if (type.type === set(dependencyMap[22]).ICYMIItemTypes.MESSAGE) {
        if (null != type.data.message_context) {
          let tmp2 = null != type.data.message_context.reply_message_id;
          if (tmp2) {
            const _parseInt = parseInt;
            tmp2 = 0 !== parseInt(type.data.message_context.reply_message_id);
          }
          const message_context = {};
          if (tmp2) {
            message_context.reply_message_id = type.data.message_context.reply_message_id;
          }
          let tmp3 = null != type.data.message_context.before_message_id;
          if (tmp3) {
            const _parseInt2 = parseInt;
            tmp3 = 0 !== parseInt(type.data.message_context.before_message_id);
          }
          if (tmp3) {
            message_context.before_message_id = type.data.message_context.before_message_id;
          }
          let tmp5 = null != type.data.message_context.after_message_id;
          if (tmp5) {
            const _parseInt3 = parseInt;
            tmp5 = 0 !== parseInt(type.data.message_context.after_message_id);
          }
          if (tmp5) {
            message_context.after_message_id = type.data.message_context.after_message_id;
          }
          let tmp7 = null != type.data.message_context.external_content_application_id;
          if (tmp7) {
            const _parseInt4 = parseInt;
            tmp7 = 0 !== parseInt(type.data.message_context.external_content_application_id);
          }
          if (tmp7) {
            message_context.external_content_application_id = type.data.message_context.external_content_application_id;
          }
          let tmp9 = null != type.data.message_context.reference_message_id;
          if (tmp9) {
            const _parseInt5 = parseInt;
            tmp9 = 0 !== parseInt(type.data.message_context.reference_message_id);
          }
          if (tmp9) {
            message_context.reference_message_id = type.data.message_context.reference_message_id;
          }
          type.data.message_context = message_context;
        }
      }
      return type;
    });
    let tmp4 = finalizeNewDehydratedItemsContent();
    newTrackingProps = { load_id: loadId, load_time_millis: Date.now() - startTime, feed_item_ids: closure_33.map((id) => id.id) };
    const items1 = [];
    const items2 = [];
    const items3 = [];
    const item = closure_33.forEach((id) => {
      const tmp = null != readTimestamp.getReadTimestamp(id.id);
      let tmp4 = id.type === set(dependencyMap[22]).ICYMIItemTypes.MESSAGE;
      if (tmp4) {
        const message_context = id.data.message_context;
        let prop;
        if (message_context != null) {
          prop = message_context.external_content_application_id;
        }
        tmp4 = null == prop;
      }
      let tmp6 = tmp;
      if (tmp4) {
        let tmp7 = tmp;
        if (!tmp7) {
          const tmp2Result = set(dependencyMap[29]);
          tmp7 = !tmp2Result.isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
        }
        tmp6 = tmp7;
      }
      if (tmp6) {
        items1.push(id);
      } else {
        if (id.type === set(dependencyMap[22]).ICYMIItemTypes.MESSAGE) {
          if (id.data.has_mention) {
            items3.push(id);
          }
        }
        items2.push(id);
      }
    });
    const items4 = [...items2];
    const items5 = [
      items4,
      items1.sort((id, id2) => {
        obj = set(dependencyMap[21]);
        return obj.compareGravityUnreadIds(id.id, id2.id);
      })
    ];
    let tmp6 = _slicedToArray(items5, 2);
    [arr10, arr11] = tmp6;
    let tmp7 = c44;
    const arr12 = getNewUnreadItems(arr10);
    if (tmp7) {
      if (0 !== c41) {
        if (!isInitialLoad) {
          if (c41 > 0) {
            let c46 = null;
          }
          let tmp9 = arr12.length > tmp(8999).MIN_ITEMS_FOR_NEW_PILL;
          if (!isReloading) {
            hasNewContent = tmp9;
          }
          if (tmp9) {
            const items6 = [];
            const hydrateItems = tmp(9003).hydrateItems;
            const tmpResult = tmp(9003);
            HermesBuiltin.arraySpread(items6, arr11, HermesBuiltin.arraySpread(items6, arr10, 0));
            hydrateItems(items6, 0, tmp(8999).ICYMI_PAGE_SIZE, closure_37);
            if (arr10.length + arr11.length === 0) {
              c57 = true;
            }
          }
        }
        const obj2 = { newTrackingProps, hasNewContent, unreadFeedItems: arr10, readFeedItems: arr11, homeSessionId: str };
        str = "background_load";
        const trackFeedLoaded = tmp(9014).trackFeedLoaded;
        tmp(9014);
        if (focused) {
          str = "foreground_load";
        }
        trackFeedLoaded(obj2);
      }
    }
    c41 = 0;
    const tmp20 = focused;
    if (!tmp20) {
      const _Date = Date;
      const diff = Date.now() - closure_32;
      let flag = false;
      const arr14 = closure_33;
      if (diff > 6 * DurationsDefault.Millis.HOUR) {
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        const set1 = new Set(arr10.map(f95135));
        const substr = arr14.slice(0, 20);
        flag = substr.filter((id) => set1.has(id.id)).length >= 3;
      }
      if (flag) {
        hasNewContent = true;
        c42 = true;
      }
      const obj3 = { newUnread: arr10, newRead: arr11 };
      reload(obj3);
    }
    hasNewContent = false;
  },
  LOAD_ICYMI_HYDRATED: function handleLoadHydratedItems(arg0) {
    let activityItems;
    let closure_0;
    let endingIndex;
    let messageItems;
    let requestActivityItems;
    let requestMessageItems;
    let startingIndex;
    ({ messageItems, activityItems, requestMessageItems, requestActivityItems, startingIndex, endingIndex } = arg0);
    c57 = true;
    obj = {};
    let merged = Object.assign(obj);
    _require = messageItems.reduce((acc, message) => {
      acc[message.message.id] = message;
      return acc;
    }, {});
    let closure_1 = activityItems.reduce((acc, id) => {
      acc[id.id] = id;
      return acc;
    }, {});
    const item = requestMessageItems.forEach((message_id) => {
      let obj5;
      if (null != closure_0[message_id.message_id]) {
        let tmp4 = closure_36[message_id.message_id];
        if (null == tmp4) {
          obj = { id: message_id.message_id, type: ICYMITypes.ICYMIItemTypes.MESSAGE, score: -1, data: obj5 };
          obj5 = { guild_id: null, channel_id: null, message_id: closure_0[message_id.message_id].message.id, channel_type: constants.GUILD_TEXT, has_mention: false };
          ({ guild_id: obj2.guild_id, channel_id: obj2.channel_id } = closure_0[message_id.message_id]);
          tmp4 = obj;
        }
        const message = MessageStore.getMessage(tmp.channel_id, tmp.message.id);
        if (null != message) {
          const id2 = tmp.message.id;
          const obj7 = { message };
          const obj4 = ICYMIUtils;
          const merged = Object.assign(obj4.createGravityMessageFromServer(tmp, tmp4));
          closure_37[id2] = obj7;
        } else {
          const id = tmp.message.id;
          const obj3 = ICYMIUtils;
          closure_37[id] = obj3.createGravityMessageFromServer(closure_0[message_id.message_id], tmp4);
        }
      } else {
        closure_38[message_id.message_id] = true;
      }
    });
    const item1 = requestActivityItems.forEach((content_id) => {
      if (null != closure_1[content_id.content_id]) {
        if (null != closure_36[content_id.content_id]) {
          const id = tmp.id;
          obj = { activity: closure_1[content_id.content_id] };
          const merged = Object.assign(tmp4);
          closure_37[id] = obj;
        } else {
          closure_38[content_id.content_id] = true;
        }
      } else {
        closure_38[content_id.content_id] = true;
      }
    });
    const _delete = set.delete;
    const obj2 = require("generateHydrationId");
    _delete(obj2.generateHydrationId(startingIndex, endingIndex));
  },
  LOAD_ICYMI_CUSTOM_SCORES: function handleLoadCustomScores(arg0) {
    const iter = arg0.scores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      obj[nextResult.guild_id] = nextResult.guild_score;
      let tmp5 = maybeFilterGuildItems(nextResult.guild_id, nextResult.guild_score);
      let _Object = Object;
      let keys = Object.keys(nextResult.custom_channel_scores);
      for (const item10028 of keys) {
        let tmp9 = item10028;
        if (null == obj[tmp2.guild_id]) {
          obj[tmp2.guild_id] = {};
        }
        obj[tmp2.guild_id][tmp9] = tmp2.custom_channel_scores[tmp9];
        let tmp18 = maybeFilterChannelItems(tmp9, tmp2.custom_channel_scores[tmp9]);
        continue;
      }
      continue;
    }
    obj = {};
    const merged = Object.assign(obj);
    const obj2 = {};
    const merged1 = Object.assign(obj);
    obj = obj2;
  },
  LOAD_ICYMI_RECOMMENDED_GUILDS: function loadICYMIRecommendedGuilds(guilds) {
    guilds = guilds.guilds;
    let closure_51 = guilds.map((guild) => {
      obj = require("GuildDiscoveryUtils");
      return obj.makeDiscoverableGuild(guild.guild);
    });
    injectRecommendedGuildsRow();
  },
  ICYMI_CUSTOM_SCORES_UPDATED: function handleCustomScoresUpdated(guildScore) {
    let channelScores;
    let guildId;
    ({ channelScores, guildId } = guildScore);
    guildScore = guildScore.guildScore;
    if (null != guildScore) {
      obj[guildId] = guildScore;
      maybeFilterGuildItems(guildId, guildScore);
      obj = {};
      let merged = Object.assign(obj);
    }
    if (channelScores != null) {
      const item = channelScores.forEach((item) => {
        let channelId;
        let score;
        ({ channelId, score } = item);
        if (null == obj[guildId]) {
          obj[guildId] = {};
        }
        obj[guildId][channelId] = score;
        maybeFilterChannelItems(channelId, score);
        obj = {};
        const merged = Object.assign(obj);
      });
    }
  },
  RELOAD_ICYMI: function handleReloadTab() {
    if (0 === closure_33.length) {
      return false;
    } else {
      reload();
      let c43 = false;
    }
  },
  ICYMI_TAB_OPENED: function handleGravityTabOpened() {
    c44 = true;
    let closure_32 = Date.now();
    const tmp = c42;
    if (tmp) {
      c42 = false;
      let c43 = false;
    }
    if (c47 < 5) {
      c47 = c47 + 1;
    }
  },
  ICYMI_FEEDBACK_GIVEN: function handleGravityFeedback() {
    let c47 = 6;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(arg0) {
    if (null == closure_37[arg0.messageId]) {
      return false;
    } else if (closure_37[arg0.messageId].type !== ICYMITypes.ICYMIItemTypes.MESSAGE) {
      return false;
    } else {
      const message = tmp2.message;
      closure_37[arg0.messageId].message = message.addReactionBatch(tmp, AuthenticationStore.getId());
    }
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let tmp2 = null != tmp;
    if (tmp2) {
      const tmp5 = closure_37[arg0.messageId].type === ICYMITypes.ICYMIItemTypes.MESSAGE;
      if (tmp5) {
        const message = tmp.message;
        closure_37[arg0.messageId].message = message.set("reactions", []);
      }
      tmp2 = tmp5;
    }
    return tmp2;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(arg0) {
    let tmp3 = null != tmp2;
    if (tmp3) {
      const tmp6 = closure_37[arg0.messageId].type === ICYMITypes.ICYMIItemTypes.MESSAGE;
      if (tmp6) {
        const message = tmp2.message;
        closure_37[arg0.messageId].message = message.removeReactionsForEmoji(tmp);
      }
      tmp3 = tmp6;
    }
    return tmp3;
  },
  CHANNEL_ACK: handleAck,
  MESSAGE_ACK: handleAck,
  ICYMI_JOINED_RECOMMENDED_GUILD: function handleJoinedRecommendedGuild() {
    let closure_52 = Date.now();
  },
  ICYMI_SET_VIDEOS_MUTED: function handleSetVideosMuted(muted) {
    muted = muted.muted;
  },
  ICYMI_SET_REFRESHING: function handleSetRefreshing(refreshing) {
    refreshing = refreshing.refreshing;
  },
  LOAD_ICYMI_HYDRATED_ATTEMPT: function handleLoadHydratedAttempt(hydrationId) {
    set.add(hydrationId.hydrationId);
  },
  LOAD_ICYMI_HYDRATED_FAILED: function handleLoadHydratedFailed(hydrationId) {
    set.delete(hydrationId.hydrationId);
  },
  ICYMI_SET_FOCUSED_TAB: function handleSetFocusedTab(focused) {
    focused = focused.focused;
  },
  LOAD_ICYMI_CURRENT_STATUS_MEDIA: function handleLoadCurrentStatusMedia(attachments) {
    attachments = attachments.attachments;
    let tmp3 = null;
    if (null != attachments) {
      tmp3 = null;
      if (0 !== attachments.length) {
        items = [tmp2, ];
        const items1 = [];
        HermesBuiltin.arraySpread(items1, attachments, 0);
        items[1] = items1;
        tmp3 = items;
      }
    }
    items = tmp3;
  },
  ICYMI_SCROLL_EVENT: function handleScrollEvent(timestamp) {
    timestamp = timestamp.timestamp;
  },
  ICYMI_TAKE_SURVEY: function handleTakeSurvey(takenAt) {
    takenAt = takenAt.takenAt;
  }
};
const iCYMIStore = new ICYMIStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/icymi/ICYMIStore.tsx");

export default iCYMIStore;
