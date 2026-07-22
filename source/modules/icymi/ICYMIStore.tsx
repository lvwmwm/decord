// Module ID: 8300
// Function ID: 65599
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8300 (_isNativeReflectConstruct)
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
function tabHasNewContentOnInitialLoad(first, closure_35) {
  const diff = Date.now() - closure_34;
  if (diff > 6 * importDefault(dependencyMap[22]).Millis.HOUR) {
    const _Set = Set;
    const set = new Set(first.map((id) => id.id));
    closure_35 = set;
    const substr = closure_35.slice(0, 20);
    return substr.filter((id) => set.has(id.id)).length >= 3;
  } else {
    return false;
  }
}
function filterStaffGuild(data) {
  if (closure_24.filterStaffContent()) {
    if (obj.isGuildItem(data)) {
      if (data.data.guild_id === arg1(dependencyMap[24]).GAME_CONTENT_GUILD_ID) {
        return true;
      } else {
        const guild = store2.getGuild(data.data.guild_id);
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
function injectItemsIntoList(arr, arr2) {
  arr2 = arg2;
  const importDefault = arg3;
  const found = arr.filter((type) => type.type !== arg2);
  const dependencyMap = found;
  const item = arr2.forEach((arg0, arg1) => {
    if ((arg1 + 1) * arg3 < found.length) {
      found.splice((arg1 + 1) * arg3, 0, arg0);
    } else {
      found.push(arg0);
    }
  });
  return found;
}
function injectAdditionalItems() {
  function injectGuildEvents() {
    let channel_id;
    let iter6;
    const items = [];
    const tmp = callback(guildIds.getGuildIds());
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp4 = closure_41;
        if (null == closure_41[value]) {
          let tmp8 = closure_63;
          let tmp9 = closure_14;
          let tmp10 = closure_63(closure_14.getGuildScheduledEventsForGuild(value));
          let iter3 = tmp10();
          let iter4 = iter3;
          let num = 0;
          let tmp11 = tmp3;
          let tmp12 = iter3;
          let num2 = 0;
          let tmp13 = tmp10;
          let tmp6 = tmp2;
          let tmp7 = tmp3;
          if (!iter3.done) {
            while (true) {
              value = iter4.value;
              let tmp14 = closure_12;
              let sum = num;
              let tmp16 = tmp11;
              if (!closure_12(value)) {
                if (null == value.channel_id) {
                  let tmp20 = closure_11;
                  let tmp21 = closure_1;
                  let tmp22 = closure_2;
                  if (closure_11(value, 2 * closure_1(closure_2[22]).Seconds.DAY)) {
                    let tmp24 = closure_39;
                    if (null == closure_39[value.id]) {
                      let tmp25 = closure_39;
                      let obj = { id: value.id };
                      let tmp26 = closure_0;
                      let tmp27 = closure_2;
                      obj.type = closure_0(closure_2[24]).ICYMIItemTypes.GUILD_EVENT;
                      obj.score = 10;
                      obj.event_id = value.id;
                      closure_39[value.id] = obj;
                    }
                    obj = { id: value.id };
                    let tmp28 = closure_0;
                    let tmp29 = closure_2;
                    obj.type = closure_0(closure_2[24]).ICYMIItemTypes.GUILD_EVENT;
                    obj.score = 10;
                    obj = {};
                    ({ guild_id: obj3.guild_id, id: obj3.event_id, channel_id } = value);
                    let tmp30;
                    if (null != channel_id) {
                      tmp30 = channel_id;
                    }
                    obj.channel_id = tmp30;
                    obj.data = obj;
                    let arr = items.push(obj);
                    sum = num + 1;
                    tmp16 = channel_id;
                    let tmp32 = iter4;
                    let tmp33 = tmp10;
                    tmp6 = value;
                    tmp7 = channel_id;
                    let tmp34 = sum;
                    if (sum >= 1) {
                      break;
                    }
                  } else {
                    let tmp23 = closure_13;
                    sum = num;
                    tmp16 = tmp11;
                  }
                } else {
                  let tmp17 = closure_16;
                  let tmp18 = closure_20;
                  let tmp19 = closure_28;
                  sum = num;
                  tmp16 = tmp11;
                }
              }
              let iter5 = tmp10();
              num = sum;
              tmp11 = tmp16;
              iter4 = iter5;
              let tmp35 = iter5;
              let tmp36 = sum;
              let tmp37 = tmp10;
              tmp6 = value;
              tmp7 = tmp16;
              if (iter5.done) {
                break;
              }
            }
          }
        } else {
          let tmp5 = closure_41;
          tmp6 = tmp2;
          tmp7 = tmp3;
        }
        iter6 = tmp();
        let tmp2 = tmp6;
        let tmp3 = tmp7;
        iter2 = iter6;
      } while (!iter6.done);
    }
    const sorted = items.sort((data, data2) => {
      const guildAffinity = store.getGuildAffinity(data.data.guild_id);
      const guildAffinity1 = store.getGuildAffinity(data2.data.guild_id);
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
    const items1 = [];
    const items2 = [];
    const item = items.forEach((id) => {
      closure_38[id.id] = id;
      if (null != readTimestamp.getReadTimestamp(id.id)) {
        items2.push(id);
      } else {
        items1.push(id);
      }
    });
    closure_50 = callback2(closure_50, items1, items1(closure_2[24]).ICYMIItemTypes.GUILD_EVENT, 7);
    closure_51 = callback2(closure_51, items2, items1(closure_2[24]).ICYMIItemTypes.GUILD_EVENT, 7);
  }();
  function injectContentInventoryItems() {
    const set = new Set();
    let closure_1 = {};
    const items = [];
    const items1 = [];
    const feed = feed.getFeed(constants.GLOBAL_FEED);
    let entries;
    if (null != feed) {
      entries = feed.entries;
    }
    if (null == entries) {
      entries = [];
    }
    const sorted = entries.sort((rank, rank2) => rank.rank - rank2.rank);
    const substr = sorted.slice(0, 5);
    const item = entries.forEach((content) => {
      if (!set.has(content.content.id)) {
        let obj = set(items[26]);
        if (!obj.isEntryExpired(content.content)) {
          let obj1 = set(items[27]);
          if (obj1.isGamingLikeEntry(content.content)) {
            if (null == closure_1[content.content.author_id]) {
              const _Set = Set;
              const set = new Set();
              closure_1[content.content.author_id] = set;
            }
            if (!obj3.has(content.content.extra.application_id)) {
              closure_1[content.content.author_id].add(content.content.extra.application_id);
              const obj4 = closure_1[content.content.author_id];
            }
            const obj3 = closure_1[content.content.author_id];
          }
          if (null == closure_39[content.content.id]) {
            obj = { id: content.content.id, type: set(items[24]).ICYMIItemTypes.ACTIVITY, score: 15, activity: content.content };
            closure_39[content.content.id] = obj;
          }
          obj = { id: content.content.id, type: set(items[24]).ICYMIItemTypes.ACTIVITY, score: 15 };
          obj1 = { user_id: content.content.author_id, content_id: content.content.id };
          obj.data = obj1;
          set.add(content.content.id);
          closure_38[obj.id] = obj;
          if (null != readTimestamp.getReadTimestamp(obj.id)) {
            items1.push(obj);
          } else {
            items.push(obj);
          }
        }
      }
    });
    closure_50 = callback2(closure_50, items, set(items[24]).ICYMIItemTypes.ACTIVITY, 5);
    closure_51 = callback2(closure_51, items1, set(items[24]).ICYMIItemTypes.ACTIVITY, 5);
  }();
  injectRecommendedGuildsRow();
}
function injectRecommendedGuildsRow() {
  let arr = arr.filter((type) => type.type !== callback(closure_2[24]).ICYMIItemTypes.RECOMMENDED_GUILDS);
  closure_51 = closure_51.filter((type) => type.type !== callback(closure_2[24]).ICYMIItemTypes.RECOMMENDED_GUILDS);
  if (0 !== length.length) {
    const guildsArray = store2.getGuildsArray();
    const tmp26 = guildsArray.filter((features) => {
      features = features.features;
      return features.has(constants.COMMUNITY);
    }).length >= 5;
    const readTimestamp = readTimestamp.getReadTimestamp("recommendedGuilds");
    if (tmp26) {
      if (null != readTimestamp) {
        const _Date = Date;
        if (Date.now() - closure_54 > DAY) {
          const _Date2 = Date;
        }
      }
    }
    const obj = { getDeviceMetadata: "center", startRecording: 16, lastActionTriggered: 4, type: arg1(dependencyMap[24]).ICYMIItemTypes.RECOMMENDED_GUILDS };
    closure_39[obj.id] = obj;
    closure_38[obj.id] = obj;
    if (0 === arr.length) {
      const items = [obj];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_51, 1);
      closure_51 = items;
    } else {
      if (tmp26) {
        if (tmp26) {
          const _Math = Math;
          const _Math2 = Math;
          arr.splice(Math.round(2 * Math.random()) + 3 - 1, 0, obj);
        } else {
          arr.splice(5, 0, obj);
        }
      }
      const items1 = [];
      arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
      items1[arraySpreadResult] = obj;
      const sum = arraySpreadResult + 1;
      arr = items1;
    }
  }
}
function finalizeNewDehydratedItemsContent() {
  const set = new Set();
  const arg1 = set;
  const item = closure_35.forEach((id) => {
    set.add(id.id);
  });
  if (null != user) {
    if (set.has(user.id)) {
      const importDefault = tmp18.id;
      const dependencyMap = user.type;
      const findIndexResult = closure_35.findIndex((id) => {
        let tmp = id.id === id;
        if (tmp) {
          tmp = id.type === type;
        }
        return tmp;
      });
      if (-1 !== findIndexResult) {
        const user = closure_35[findIndexResult];
        closure_35 = closure_35.filter((id) => id.id !== id);
        const items = [user];
        HermesBuiltin.arraySpread(closure_35, 1);
        closure_35 = items;
      }
    } else {
      const items1 = [tmp18];
      HermesBuiltin.arraySpread(closure_35, 1);
      closure_35 = items1;
      set.add(user.id);
    }
  }
  const item1 = closure_35.forEach((id) => {
    closure_38[id.id] = id;
    if (id.type === set(type[24]).ICYMIItemTypes.CUSTOM_STATUS) {
      if (blockedOrIgnored.isBlockedOrIgnored(id.data.user_id)) {
        closure_40[id.id] = true;
      } else {
        closure_39[id.id] = set(type[23]).customStatusToContentInventoryEntry(id);
        const obj = set(type[23]);
      }
    }
  });
}
function reload(arg0) {
  if (closure_35.length > 0) {
    let closure_32 = closure_35;
    closure_35 = [];
    let closure_36 = [];
  }
  closure_43 = closure_43 + 1;
  if (null != arg0) {
    ({ newUnread: closure_50, newRead: closure_51 } = arg0);
  } else {
    [closure_50, closure_51] = callback4(computeDisplayItems(closure_32), 2);
    const tmp5 = callback4(computeDisplayItems(closure_32), 2);
  }
  injectAdditionalItems();
  let tmp7 = null != closure_37.load_id;
  if (tmp7) {
    tmp7 = closure_33 !== closure_37.load_id;
  }
  if (tmp7) {
    const ICYMIAnalytics = arg1(dependencyMap[28]).ICYMIAnalytics;
    const obj = { newTrackingProps: closure_37, hasNewContent: closure_45, unreadFeedItems: arr, readFeedItems: closure_51, homeSessionId: "gravity" };
    ICYMIAnalytics.trackFeedLoaded(obj);
    const load_id = closure_37.load_id;
    let tmp18 = null;
    if (null != load_id) {
      tmp18 = load_id;
    }
    closure_33 = tmp18;
    closure_37 = {};
  }
  let closure_52 = 0;
  if (arr.length + closure_51.length === 0) {
    let closure_59 = true;
  }
  const items = [...closure_51];
  arg1(dependencyMap[23]).hydrateItems(items, 0, arg1(dependencyMap[24]).ICYMI_PAGE_SIZE);
  let closure_56 = false;
}
function computeDisplayItems(closure_35) {
  const items = [];
  const arg1 = items;
  const items1 = [];
  const importDefault = items1;
  const items2 = [];
  const dependencyMap = items2;
  const item = closure_35.forEach((id) => {
    const tmp = null != readTimestamp.getReadTimestamp(id.id);
    let tmp2 = tmp;
    if (id.type === items(items2[24]).ICYMIItemTypes.MESSAGE) {
      const message_context = id.data.message_context;
      let prop;
      if (null != message_context) {
        prop = message_context.external_content_application_id;
      }
      let tmp4 = tmp;
      if (null == prop) {
        let tmp5 = tmp;
        if (!tmp) {
          tmp5 = !items(items2[23]).isItemUnreadInChannel(id.data.channel_id, id.data.message_id);
          const obj = items(items2[23]);
        }
        tmp4 = tmp5;
      }
      tmp2 = tmp4;
    }
    if (tmp2) {
      items.push(id);
    } else {
      if (id.type === items(items2[24]).ICYMIItemTypes.MESSAGE) {
        if (id.data.has_mention) {
          items2.push(id);
        }
      }
      items1.push(id);
    }
  });
  const items3 = [...items1];
  const items4 = [items3, items.sort((id, id2) => items(items2[23]).compareGravityUnreadIds(id.id, id2.id))];
  return items4;
}
function getNewUnreadItems(first, channelId) {
  let iter2;
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(first);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = closure_0;
      let tmp3 = closure_2;
      if (value.type !== closure_0(closure_2[24]).ICYMIItemTypes.RECOMMENDED_GUILDS) {
        if (!set.has(value.id)) {
          let tmp4 = closure_25;
          let tmp5 = null == closure_25.getReadTimestamp(value.id);
          if (tmp5) {
            let tmp6 = closure_0;
            let tmp7 = closure_2;
            let tmp8 = value.type !== closure_0(closure_2[24]).ICYMIItemTypes.MESSAGE;
            if (!tmp8) {
              let tmp9 = closure_0;
              let tmp10 = closure_2;
              let obj2 = closure_0(closure_2[23]);
              let tmp11 = obj2.isItemUnreadInChannel(value.data.channel_id, value.data.message_id) && value.data.channel_id !== channelId;
              tmp8 = tmp11;
            }
            tmp5 = tmp8;
          }
          if (tmp5) {
            let arr = items.push(value);
          }
        }
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return items;
}
function filterDehydratedItemListByChannel(closure_32, arg1) {
  return closure_32.filter((data) => {
    let tmp = !arg1(closure_2[23]).isGuildItem(data);
    if (!tmp) {
      tmp = data.data.channel_id !== arg1;
    }
    return tmp;
  });
}
function maybeFilterChannelItems(arg0, stateFromStores1) {
  const obj = stateFromStores1(dependencyMap[23]);
  if (numberToCustomScoreResult === stateFromStores1(dependencyMap[23]).ICYMICustomScore.MUTED) {
    closure_32 = filterDehydratedItemListByChannel(closure_32, arg0);
    closure_50 = filterDehydratedItemListByChannel(closure_50, arg0);
    closure_51 = filterDehydratedItemListByChannel(closure_51, arg0);
    closure_35 = filterDehydratedItemListByChannel(closure_35, arg0);
    closure_36 = filterDehydratedItemListByChannel(closure_36, arg0);
  }
}
function filterDehydratedItemListByGuild(closure_32, guildId) {
  return closure_32.filter((data) => {
    let tmp = !arg1(closure_2[23]).isGuildItem(data);
    if (!tmp) {
      tmp = data.data.guild_id !== arg1;
    }
    return tmp;
  });
}
function maybeFilterGuildItems(guildId, guildScore) {
  const obj = guildScore(dependencyMap[23]);
  if (numberToCustomScoreResult === guildScore(dependencyMap[23]).ICYMICustomScore.MUTED) {
    closure_32 = filterDehydratedItemListByGuild(closure_32, guildId);
    closure_50 = filterDehydratedItemListByGuild(closure_50, guildId);
    closure_51 = filterDehydratedItemListByGuild(closure_51, guildId);
    closure_35 = filterDehydratedItemListByGuild(closure_35, guildId);
    closure_36 = filterDehydratedItemListByGuild(closure_36, guildId);
  }
}
function handleReaction(colors) {
  let emoji;
  let reactionType;
  ({ emoji, reactionType } = colors);
  if (null == closure_39[colors.messageId]) {
    return false;
  } else if (tmp3.type !== arg1(dependencyMap[24]).ICYMIItemTypes.MESSAGE) {
    return false;
  } else {
    const tmp5 = store.getId() === tmp2;
    if ("MESSAGE_REACTION_ADD" === tmp) {
      const message2 = tmp3.message;
      let addReactionResult = message2.addReaction(emoji, tmp5, colors.colors, reactionType);
    } else {
      const message = tmp3.message;
      addReactionResult = message.removeReaction(emoji, tmp5, reactionType);
    }
    tmp3.message = addReactionResult;
  }
}
function handleAck(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const items = [];
  const importDefault = items;
  const items1 = [];
  const dependencyMap = items1;
  const item = arr.forEach((type) => {
    if (arg1 > closure_52) {
      if (type.type === channelId(items1[24]).ICYMIItemTypes.MESSAGE) {
        if (type.data.channel_id === channelId) {
          items.push(type);
        }
      }
    }
    items1.push(type);
  });
  let closure_36 = getNewUnreadItems(callback4(computeDisplayItems(closure_35), 2)[0], channelId);
  if (closure_46) {
    let tmp7 = tmp2;
    if (tmp2) {
      tmp7 = closure_36.length >= arg1(dependencyMap[24]).MIN_ITEMS_FOR_NEW_PILL;
    }
    let tmp4 = tmp7;
  } else {
    tmp4 = tmp2;
    if (tmp2) {
      tmp4 = tabHasNewContentOnInitialLoad(items1, closure_35);
    }
  }
  let closure_45 = tmp4;
  if (0 === items.length) {
    if (tmp2 === closure_45) {
      return false;
    }
  }
  if (0 !== items.length) {
    const items2 = [];
    HermesBuiltin.arraySpread(items, HermesBuiltin.arraySpread(closure_51, 0));
    closure_51 = items2;
    const arr = items1;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ eventScheduledToStartWithin: closure_11, isGuildEventEnded: closure_12, isGuildScheduledEventActive: closure_13 } = arg1(dependencyMap[8]));
let closure_14 = importDefault(dependencyMap[8]);
let closure_15 = importDefault(dependencyMap[9]);
let closure_16 = importDefault(dependencyMap[10]);
let closure_17 = importDefault(dependencyMap[11]);
let closure_18 = importDefault(dependencyMap[12]);
let closure_19 = importDefault(dependencyMap[13]);
let closure_20 = importDefault(dependencyMap[14]);
let closure_21 = importDefault(dependencyMap[15]);
let closure_22 = importDefault(dependencyMap[16]);
let closure_23 = importDefault(dependencyMap[17]);
let closure_24 = importDefault(dependencyMap[18]);
let closure_25 = importDefault(dependencyMap[19]);
const tmp2 = arg1(dependencyMap[8]);
({ ChannelTypes: closure_26, GuildFeatures: closure_27, Permissions: closure_28 } = arg1(dependencyMap[20]));
const ContentInventoryFeedKey = arg1(dependencyMap[21]).ContentInventoryFeedKey;
const DAY = importDefault(dependencyMap[22]).Millis.DAY;
let closure_31 = 3 * importDefault(dependencyMap[22]).Millis.DAY;
let closure_32 = [];
let closure_33 = null;
let closure_34 = 0;
let closure_35 = [];
let closure_36 = [];
let closure_37 = {};
let closure_38 = {};
let closure_39 = {};
let closure_40 = {};
let closure_41 = {};
let closure_42 = {};
let closure_43 = 0;
let closure_44 = false;
let closure_45 = false;
let closure_46 = false;
let closure_47 = null;
let closure_48 = null;
let closure_49 = 0;
let closure_50 = [];
let closure_51 = [];
let closure_52 = 0;
let closure_53 = [];
let closure_54 = 0;
let closure_55 = true;
let closure_56 = false;
const set = new Set();
let closure_58 = false;
let closure_59 = false;
let closure_60 = 0;
let closure_61 = 0;
let tmp5 = (PersistedStore) => {
  class ICYMIStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ICYMIStore);
      obj = closure_6(ICYMIStore);
      tmp2 = closure_5;
      if (closure_62()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ICYMIStore;
  callback3(ICYMIStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(dehydratedItems) {
      this.waitFor(closure_15, closure_16, closure_9, closure_10, closure_17, closure_14, closure_18, closure_24, closure_25, closure_19, closure_20, closure_21, closure_22, closure_23);
      if (null != dehydratedItems) {
        dehydratedItems = dehydratedItems.dehydratedItems;
        if (null == dehydratedItems) {
          dehydratedItems = [];
        }
        const item = dehydratedItems.forEach((id) => {
          closure_38[id.id] = id;
        });
        let customGuildScores = dehydratedItems.customGuildScores;
        if (null == customGuildScores) {
          customGuildScores = {};
        }
        let prop = dehydratedItems.customChannelScoresByGuild;
        if (null == prop) {
          prop = {};
        }
        const numOpens = dehydratedItems.numOpens;
        let num = 0;
        if (null != numOpens) {
          num = numOpens;
        }
        const lastOpened = dehydratedItems.lastOpened;
        let num2 = 0;
        if (null != lastOpened) {
          num2 = lastOpened;
        }
        const lastJoinedRecommendedGuild = dehydratedItems.lastJoinedRecommendedGuild;
        let num3 = 0;
        if (null != lastJoinedRecommendedGuild) {
          num3 = lastJoinedRecommendedGuild;
        }
        const lastTakenICYMISurvey = dehydratedItems.lastTakenICYMISurvey;
        let num4 = 0;
        if (null != lastTakenICYMISurvey) {
          num4 = lastTakenICYMISurvey;
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getVersion",
    value() {
      return closure_43;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDehydratedItems",
    value() {
      return closure_32;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNewDehydratedItems",
    value() {
      return closure_35;
    }
  };
  items[4] = {
    key: "getDehydratedItem",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_38[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "getHydratedItem",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_39[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[6] = {
    key: "getMessage",
    value(arg0) {
      let message = null;
      if (null != closure_39[arg0]) {
        message = null;
        if (tmp.type === ICYMIStore(closure_2[24]).ICYMIItemTypes.MESSAGE) {
          message = tmp.message;
        }
      }
      return message;
    }
  };
  items[7] = {
    key: "getHydratedItems",
    value() {
      return closure_39;
    }
  };
  items[8] = {
    key: "getUnreadDisplayItems",
    value() {
      return closure_50;
    }
  };
  items[9] = {
    key: "getNewUnreadDehydratedItems",
    value() {
      return closure_36;
    }
  };
  items[10] = {
    key: "getReadDisplayItems",
    value() {
      return closure_51;
    }
  };
  items[11] = {
    key: "getNextIndexToHydrate",
    value() {
      return closure_52;
    }
  };
  items[12] = {
    key: "getMissingItems",
    value() {
      return closure_40;
    }
  };
  items[13] = {
    key: "customMuted",
    value(arg0, arg1) {
      const self = this;
      const customGuildScore = this.getCustomGuildScore(arg0);
      let tmp2 = customGuildScore === ICYMIStore(closure_2[23]).ICYMICustomScore.MUTED;
      if (!tmp2) {
        const customChannelScore = self.getCustomChannelScore(arg0, arg1);
        tmp2 = customChannelScore === ICYMIStore(closure_2[23]).ICYMICustomScore.MUTED;
      }
      return tmp2;
    }
  };
  items[14] = {
    key: "getCustomChannelScore",
    value(arg0, arg1) {
      if (null != closure_42[arg0]) {
        if (null != closure_42[arg0][arg1]) {
          let UNKNOWN = ICYMIStore(closure_2[23]).numberToCustomScore(closure_42[arg0][arg1]);
          const obj = ICYMIStore(closure_2[23]);
        }
        return UNKNOWN;
      }
      UNKNOWN = ICYMIStore(closure_2[23]).ICYMICustomScore.UNKNOWN;
    }
  };
  items[15] = {
    key: "getCustomGuildScore",
    value(arg0) {
      let num = 0;
      if (null != closure_41[arg0]) {
        num = tmp;
      }
      return num;
    }
  };
  items[16] = {
    key: "getCustomGuildScores",
    value() {
      return closure_41;
    }
  };
  items[17] = {
    key: "hasNewContent",
    value() {
      return closure_45;
    }
  };
  items[18] = {
    key: "getCurrentStatusAttachments",
    value(arg0) {
      if (null != closure_47) {
        return [];
      }
    }
  };
  items[19] = {
    key: "getLoadId",
    value() {
      return closure_33;
    }
  };
  items[20] = {
    key: "hasOpenedEnoughTimes",
    value() {
      return 5 === closure_49;
    }
  };
  items[21] = {
    key: "hasOpened",
    value() {
      return closure_46;
    }
  };
  items[22] = {
    key: "getDiscoverableGuilds",
    value() {
      return closure_53;
    }
  };
  items[23] = {
    key: "videosMuted",
    value() {
      return closure_55;
    }
  };
  items[24] = {
    key: "isRefreshing",
    value() {
      return closure_56;
    }
  };
  items[25] = {
    key: "isHydrating",
    value() {
      return size.size > 0;
    }
  };
  items[26] = {
    key: "notificationItem",
    value() {
      return closure_48;
    }
  };
  items[27] = {
    key: "getIsTabFocused",
    value() {
      return closure_58;
    }
  };
  items[28] = {
    key: "isFirstPageHydrated",
    value() {
      return closure_59;
    }
  };
  items[29] = {
    key: "lastScrollEvent",
    value() {
      return closure_60;
    }
  };
  items[30] = {
    key: "lastTakenICYMISurvey",
    value() {
      return closure_61;
    }
  };
  items[31] = {
    key: "getIndexInHydratedFeed",
    value(arg0) {
      const ICYMIStore = arg0;
      if ("recommended_guilds" !== arg0) {
        if ("recommendedGuilds" !== arg0) {
          const items = [];
          HermesBuiltin.arraySpread(closure_51, HermesBuiltin.arraySpread(closure_50, 0));
          const found = items.filter((arg0) => null != closure_39[arg0.id]);
          let findIndexResult = found.findIndex((id) => id.id === id);
        }
        return findIndexResult;
      }
      const items1 = [...closure_51];
      findIndexResult = items1.findIndex((type) => type.type === type(closure_2[24]).ICYMIItemTypes.RECOMMENDED_GUILDS);
    }
  };
  items[32] = {
    key: "getState",
    value() {
      return { dehydratedItems: closure_32, numOpens: closure_49, customGuildScores: closure_41, customChannelScoresByGuild: closure_42, lastOpened: closure_34, lastJoinedRecommendedGuild: closure_54, lastTakenICYMISurvey: closure_61 };
    }
  };
  return callback2(ICYMIStore, items);
}(importDefault(dependencyMap[31]).PersistedStore);
tmp5.displayName = "ICYMIStore";
tmp5.persistKey = "ICYMIStore";
tmp5 = new tmp5(importDefault(dependencyMap[32]), {
  LOGOUT: function handleLogout() {
    let closure_32 = [];
    let closure_35 = [];
    let closure_36 = [];
    let closure_38 = {};
    let closure_37 = {};
    let closure_39 = {};
    let closure_40 = {};
    let closure_33 = null;
    let closure_41 = {};
    let closure_42 = {};
    let closure_43 = 0;
    let closure_44 = false;
    let closure_45 = false;
    let closure_46 = false;
    let closure_50 = [];
    let closure_51 = [];
    let closure_52 = 0;
    let closure_34 = 0;
    let closure_54 = 0;
    let closure_55 = true;
    let closure_56 = false;
    const set = new Set();
    let closure_48 = null;
    let closure_58 = false;
    let closure_59 = false;
    let closure_47 = null;
    let closure_60 = 0;
  },
  LOAD_ICYMI_FROM_NOTIFICATION: function handleLoadICYMIFromNotification(arg0) {
    let customStatusItem;
    let messageItem;
    ({ messageItem, customStatusItem } = arg0);
    if (null != customStatusItem) {
      let closure_48 = customStatusItem;
      if (null == closure_33) {
        return true;
      } else {
        if (closure_35.length > 0) {
          let items = closure_35;
        } else {
          items = [];
          HermesBuiltin.arraySpread(closure_32, 0);
        }
        closure_35 = items;
        finalizeNewDehydratedItemsContent();
        reload();
      }
    } else if (null != messageItem) {
      let obj = { id: messageItem.message.id, type: arg1(dependencyMap[24]).ICYMIItemTypes.MESSAGE, score: 50 };
      obj = { channel_id: messageItem.channel_id, message_id: messageItem.message.id, guild_id: messageItem.guild_id, channel_type: constants.GUILD_TEXT };
      obj.data = obj;
      closure_38[messageItem.message.id] = obj;
      obj = {};
      const merged = Object.assign(obj);
      obj["message"] = arg1(dependencyMap[30]).createMessageRecord(messageItem.message);
      closure_39[messageItem.message.id] = obj;
      if (null == closure_33) {
        if (null == closure_37) {
          const items1 = [obj];
          HermesBuiltin.arraySpread(closure_32, 1);
          closure_32 = items1;
          [closure_50, closure_51] = callback4(computeDisplayItems(items1), 2);
          const tmp21 = callback4(computeDisplayItems(items1), 2);
        }
        return true;
      }
      const items2 = [obj];
      HermesBuiltin.arraySpread(closure_35, 1);
      closure_35 = items2;
      reload();
      const obj4 = arg1(dependencyMap[30]);
    } else {
      return false;
    }
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadDehydrated(items) {
    let isInitialLoad;
    let isReloading;
    let loadId;
    let startTime;
    ({ loadId, startTime, isInitialLoad, isReloading } = items);
    let closure_35 = function processRawItems(items) {
      const set = new Set(set(closure_2[24]).SUPPORTED_ITEM_TYPES);
      const found = items.filter((type) => set.has(type.type));
      const found1 = found.filter(closure_66);
      return found1.map((type) => {
        if (type.type === set(closure_2[24]).ICYMIItemTypes.MESSAGE) {
          if (null != type.data.message_context) {
            const obj = {};
            let tmp2 = null != type.data.message_context.reply_message_id;
            if (tmp2) {
              const _parseInt = parseInt;
              tmp2 = 0 !== parseInt(type.data.message_context.reply_message_id);
            }
            if (tmp2) {
              obj.reply_message_id = type.data.message_context.reply_message_id;
            }
            let tmp3 = null != type.data.message_context.before_message_id;
            if (tmp3) {
              const _parseInt2 = parseInt;
              tmp3 = 0 !== parseInt(type.data.message_context.before_message_id);
            }
            if (tmp3) {
              obj.before_message_id = type.data.message_context.before_message_id;
            }
            let tmp5 = null != type.data.message_context.after_message_id;
            if (tmp5) {
              const _parseInt3 = parseInt;
              tmp5 = 0 !== parseInt(type.data.message_context.after_message_id);
            }
            if (tmp5) {
              obj.after_message_id = type.data.message_context.after_message_id;
            }
            let tmp7 = null != type.data.message_context.external_content_application_id;
            if (tmp7) {
              const _parseInt4 = parseInt;
              tmp7 = 0 !== parseInt(type.data.message_context.external_content_application_id);
            }
            if (tmp7) {
              obj.external_content_application_id = type.data.message_context.external_content_application_id;
            }
            let tmp9 = null != type.data.message_context.reference_message_id;
            if (tmp9) {
              const _parseInt5 = parseInt;
              tmp9 = 0 !== parseInt(type.data.message_context.reference_message_id);
            }
            if (tmp9) {
              obj.reference_message_id = type.data.message_context.reference_message_id;
            }
            type.data.message_context = obj;
          }
        }
        return type;
      });
    }(items.items);
    finalizeNewDehydratedItemsContent();
    let obj = { load_id: loadId, load_time_millis: Date.now() - startTime, feed_item_ids: closure_35.map((id) => id.id) };
    let closure_37 = obj;
    const tmp2 = callback4(computeDisplayItems(closure_35), 2);
    const first = tmp2[0];
    let closure_36 = getNewUnreadItems(first);
    if (closure_46) {
      if (0 !== closure_43) {
        if (!isInitialLoad) {
          if (closure_43 > 0) {
            let closure_48 = null;
          }
          const tmp9 = closure_36.length > arg1(dependencyMap[24]).MIN_ITEMS_FOR_NEW_PILL;
          if (!isReloading) {
            let closure_45 = tmp9;
          }
          if (tmp9) {
            items = [];
            HermesBuiltin.arraySpread(arr2, HermesBuiltin.arraySpread(first, 0));
            arg1(dependencyMap[23]).hydrateItems(items, 0, arg1(dependencyMap[24]).ICYMI_PAGE_SIZE);
            if (first.length + arr2.length === 0) {
              let closure_59 = true;
            }
            const obj2 = arg1(dependencyMap[23]);
          }
          const ICYMIAnalytics = arg1(dependencyMap[28]).ICYMIAnalytics;
          obj = { newTrackingProps: closure_37, hasNewContent: closure_45, unreadFeedItems: first, readFeedItems: arr2 };
          let str = "background_load";
          if (closure_58) {
            str = "foreground_load";
          }
          obj.homeSessionId = str;
          ICYMIAnalytics.trackFeedLoaded(obj);
        }
      }
    }
    closure_43 = 0;
    if (!closure_58) {
      if (tabHasNewContentOnInitialLoad(first, closure_35)) {
        closure_45 = true;
        let closure_44 = true;
      }
      obj = { newUnread: first, newRead: arr2 };
      reload(obj);
    }
    closure_45 = false;
  },
  LOAD_ICYMI_HYDRATED: function handleLoadHydratedItems(arg0) {
    let activityItems;
    let endingIndex;
    let messageItems;
    let requestActivityItems;
    let requestMessageItems;
    let startingIndex;
    ({ messageItems, activityItems, requestMessageItems, requestActivityItems, startingIndex, endingIndex } = arg0);
    let closure_59 = true;
    const merged = Object.assign(closure_39);
    closure_39 = {};
    const callback = messageItems.reduce((arg0, message) => {
      arg0[message.message.id] = message;
      return arg0;
    }, {});
    let closure_1 = activityItems.reduce((arg0, id) => {
      arg0[id.id] = id;
      return arg0;
    }, {});
    const item = requestMessageItems.forEach((message_id) => {
      if (null != callback[message_id.message_id]) {
        let tmp4 = closure_38[message_id.message_id];
        if (null == tmp4) {
          let obj = { id: message_id.message_id, type: callback(closure_2[24]).ICYMIItemTypes.MESSAGE, score: -1 };
          obj = {};
          ({ guild_id: obj5.guild_id, channel_id: obj5.channel_id } = tmp);
          obj.message_id = tmp.message.id;
          obj.channel_type = constants.GUILD_TEXT;
          obj.has_mention = false;
          obj.data = obj;
          tmp4 = obj;
        }
        const message = message.getMessage(tmp.channel_id, tmp.message.id);
        if (null != message) {
          let obj1 = callback(closure_2[23]);
          obj1 = {};
          const merged = Object.assign(obj1.createGravityMessageFromServer(tmp, tmp4));
          obj1["message"] = message;
          obj[tmp.message.id] = obj1;
        } else {
          obj = callback(closure_2[23]);
          obj[tmp.message.id] = obj.createGravityMessageFromServer(tmp, tmp4);
        }
      } else {
        closure_40[message_id.message_id] = true;
      }
    });
    const item1 = requestActivityItems.forEach((content_id) => {
      if (null != closure_1[content_id.content_id]) {
        if (null != closure_38[content_id.content_id]) {
          const obj = {};
          const merged = Object.assign(tmp4);
          obj["activity"] = tmp;
          obj[tmp.id] = obj;
        } else {
          closure_40[content_id.content_id] = true;
        }
      } else {
        closure_40[content_id.content_id] = true;
      }
    });
    if (startingIndex === closure_52) {
      closure_52 = endingIndex;
    }
    set.delete(callback(dependencyMap[23]).generateHydrationId(startingIndex, endingIndex));
  },
  LOAD_ICYMI_CUSTOM_SCORES: function handleLoadCustomScores(scores) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(scores.scores);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_41;
        closure_41[value.guild_id] = value.guild_score;
        let tmp3 = closure_77;
        let tmp4 = closure_77(value.guild_id, value.guild_score);
        let _Object = Object;
        let keys = Object.keys(value.custom_channel_scores);
        let num = 0;
        if (0 < keys.length) {
          do {
            let tmp5 = keys[num];
            let tmp6 = closure_42;
            if (null == closure_42[value.guild_id]) {
              let tmp7 = closure_42;
              closure_42[value.guild_id] = {};
            }
            let tmp8 = closure_42;
            closure_42[value.guild_id][tmp5] = value.custom_channel_scores[tmp5];
            let tmp9 = closure_75;
            let tmp10 = closure_75(tmp5, value.custom_channel_scores[tmp5]);
            num = num + 1;
            let tmp11 = tmp5;
          } while (num < keys.length);
        }
        iter3 = tmp();
        iter2 = iter3;
      } while (!iter3.done);
    }
    let obj = {};
    const merged = Object.assign(closure_41);
    closure_41 = obj;
    obj = {};
    const merged1 = Object.assign(closure_42);
    closure_42 = obj;
  },
  LOAD_ICYMI_RECOMMENDED_GUILDS: function loadICYMIRecommendedGuilds(guilds) {
    guilds = guilds.guilds;
    let closure_53 = guilds.map((guild) => callback(closure_2[29]).makeDiscoverableGuild(guild.guild));
    injectRecommendedGuildsRow();
  },
  ICYMI_CUSTOM_SCORES_UPDATED: function handleCustomScoresUpdated(guildScore) {
    let channelScores;
    let guildId;
    ({ channelScores, guildId } = guildScore);
    const arg1 = guildId;
    guildScore = guildScore.guildScore;
    if (null != guildScore) {
      closure_41[guildId] = guildScore;
      maybeFilterGuildItems(guildId, guildScore);
      const obj = {};
      const merged = Object.assign(closure_41);
      closure_41 = obj;
    }
    if (null != channelScores) {
      const item = channelScores.forEach((arg0) => {
        let channelId;
        let score;
        ({ channelId, score } = arg0);
        if (null == obj[closure_0]) {
          obj[guildId] = {};
        }
        obj[closure_0][channelId] = score;
        callback(channelId, score);
        const obj = {};
        const merged = Object.assign(obj);
      });
    }
  },
  RELOAD_ICYMI: function handleReloadTab() {
    if (0 === closure_35.length) {
      return false;
    } else {
      reload();
      let closure_45 = false;
    }
  },
  ICYMI_TAB_OPENED: function handleGravityTabOpened() {
    let closure_46 = true;
    let closure_34 = Date.now();
    if (closure_44) {
      closure_44 = false;
      let closure_45 = false;
    }
    if (closure_49 < 5) {
      closure_49 = closure_49 + 1;
    }
  },
  ICYMI_FEEDBACK_GIVEN: function handleGravityFeedback() {
    let closure_49 = 6;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(arg0) {
    if (null == closure_39[arg0.messageId]) {
      return false;
    } else if (tmp2.type !== arg1(dependencyMap[24]).ICYMIItemTypes.MESSAGE) {
      return false;
    } else {
      const message = tmp2.message;
      tmp2.message = message.addReactionBatch(tmp, store.getId());
    }
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let tmp2 = null != tmp;
    if (tmp2) {
      const tmp5 = tmp.type === arg1(dependencyMap[24]).ICYMIItemTypes.MESSAGE;
      if (tmp5) {
        const message = tmp.message;
        tmp.message = message.set("reactions", []);
      }
      tmp2 = tmp5;
    }
    return tmp2;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(arg0) {
    let tmp3 = null != tmp2;
    if (tmp3) {
      const tmp6 = tmp2.type === arg1(dependencyMap[24]).ICYMIItemTypes.MESSAGE;
      if (tmp6) {
        const message = tmp2.message;
        tmp2.message = message.removeReactionsForEmoji(tmp);
      }
      tmp3 = tmp6;
    }
    return tmp3;
  },
  CHANNEL_ACK: handleAck,
  MESSAGE_ACK: handleAck,
  ICYMI_JOINED_RECOMMENDED_GUILD: function handleJoinedRecommendedGuild() {
    let closure_54 = Date.now();
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
    let tmp2 = null;
    if (null != attachments) {
      tmp2 = null;
      if (0 !== attachments.length) {
        const items = [tmp, ];
        const items1 = [];
        HermesBuiltin.arraySpread(attachments, 0);
        items[1] = items1;
        tmp2 = items;
      }
    }
    let closure_47 = tmp2;
  },
  ICYMI_SCROLL_EVENT: function handleScrollEvent(timestamp) {
    timestamp = timestamp.timestamp;
  },
  ICYMI_TAKE_SURVEY: function handleTakeSurvey(takenAt) {
    takenAt = takenAt.takenAt;
  }
});
const obj = {
  LOGOUT: function handleLogout() {
    let closure_32 = [];
    let closure_35 = [];
    let closure_36 = [];
    let closure_38 = {};
    let closure_37 = {};
    let closure_39 = {};
    let closure_40 = {};
    let closure_33 = null;
    let closure_41 = {};
    let closure_42 = {};
    let closure_43 = 0;
    let closure_44 = false;
    let closure_45 = false;
    let closure_46 = false;
    let closure_50 = [];
    let closure_51 = [];
    let closure_52 = 0;
    let closure_34 = 0;
    let closure_54 = 0;
    let closure_55 = true;
    let closure_56 = false;
    const set = new Set();
    let closure_48 = null;
    let closure_58 = false;
    let closure_59 = false;
    let closure_47 = null;
    let closure_60 = 0;
  },
  LOAD_ICYMI_FROM_NOTIFICATION: function handleLoadICYMIFromNotification(arg0) {
    let customStatusItem;
    let messageItem;
    ({ messageItem, customStatusItem } = arg0);
    if (null != customStatusItem) {
      let closure_48 = customStatusItem;
      if (null == closure_33) {
        return true;
      } else {
        if (closure_35.length > 0) {
          let items = closure_35;
        } else {
          items = [];
          HermesBuiltin.arraySpread(closure_32, 0);
        }
        closure_35 = items;
        finalizeNewDehydratedItemsContent();
        reload();
      }
    } else if (null != messageItem) {
      let obj = { id: messageItem.message.id, type: arg1(dependencyMap[24]).ICYMIItemTypes.MESSAGE, score: 50 };
      obj = { channel_id: messageItem.channel_id, message_id: messageItem.message.id, guild_id: messageItem.guild_id, channel_type: constants.GUILD_TEXT };
      obj.data = obj;
      closure_38[messageItem.message.id] = obj;
      obj = {};
      const merged = Object.assign(obj);
      obj["message"] = arg1(dependencyMap[30]).createMessageRecord(messageItem.message);
      closure_39[messageItem.message.id] = obj;
      if (null == closure_33) {
        if (null == closure_37) {
          const items1 = [obj];
          HermesBuiltin.arraySpread(closure_32, 1);
          closure_32 = items1;
          [closure_50, closure_51] = callback4(computeDisplayItems(items1), 2);
          const tmp21 = callback4(computeDisplayItems(items1), 2);
        }
        return true;
      }
      const items2 = [obj];
      HermesBuiltin.arraySpread(closure_35, 1);
      closure_35 = items2;
      reload();
      const obj4 = arg1(dependencyMap[30]);
    } else {
      return false;
    }
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadDehydrated(items) {
    let isInitialLoad;
    let isReloading;
    let loadId;
    let startTime;
    ({ loadId, startTime, isInitialLoad, isReloading } = items);
    let closure_35 = function processRawItems(items) {
      const set = new Set(set(closure_2[24]).SUPPORTED_ITEM_TYPES);
      const found = items.filter((type) => set.has(type.type));
      const found1 = found.filter(closure_66);
      return found1.map((type) => {
        if (type.type === set(closure_2[24]).ICYMIItemTypes.MESSAGE) {
          if (null != type.data.message_context) {
            const obj = {};
            let tmp2 = null != type.data.message_context.reply_message_id;
            if (tmp2) {
              const _parseInt = parseInt;
              tmp2 = 0 !== parseInt(type.data.message_context.reply_message_id);
            }
            if (tmp2) {
              obj.reply_message_id = type.data.message_context.reply_message_id;
            }
            let tmp3 = null != type.data.message_context.before_message_id;
            if (tmp3) {
              const _parseInt2 = parseInt;
              tmp3 = 0 !== parseInt(type.data.message_context.before_message_id);
            }
            if (tmp3) {
              obj.before_message_id = type.data.message_context.before_message_id;
            }
            let tmp5 = null != type.data.message_context.after_message_id;
            if (tmp5) {
              const _parseInt3 = parseInt;
              tmp5 = 0 !== parseInt(type.data.message_context.after_message_id);
            }
            if (tmp5) {
              obj.after_message_id = type.data.message_context.after_message_id;
            }
            let tmp7 = null != type.data.message_context.external_content_application_id;
            if (tmp7) {
              const _parseInt4 = parseInt;
              tmp7 = 0 !== parseInt(type.data.message_context.external_content_application_id);
            }
            if (tmp7) {
              obj.external_content_application_id = type.data.message_context.external_content_application_id;
            }
            let tmp9 = null != type.data.message_context.reference_message_id;
            if (tmp9) {
              const _parseInt5 = parseInt;
              tmp9 = 0 !== parseInt(type.data.message_context.reference_message_id);
            }
            if (tmp9) {
              obj.reference_message_id = type.data.message_context.reference_message_id;
            }
            type.data.message_context = obj;
          }
        }
        return type;
      });
    }(items.items);
    finalizeNewDehydratedItemsContent();
    let obj = { load_id: loadId, load_time_millis: Date.now() - startTime, feed_item_ids: closure_35.map((id) => id.id) };
    let closure_37 = obj;
    const tmp2 = callback4(computeDisplayItems(closure_35), 2);
    const first = tmp2[0];
    let closure_36 = getNewUnreadItems(first);
    if (closure_46) {
      if (0 !== closure_43) {
        if (!isInitialLoad) {
          if (closure_43 > 0) {
            let closure_48 = null;
          }
          const tmp9 = closure_36.length > arg1(dependencyMap[24]).MIN_ITEMS_FOR_NEW_PILL;
          if (!isReloading) {
            let closure_45 = tmp9;
          }
          if (tmp9) {
            items = [];
            HermesBuiltin.arraySpread(arr2, HermesBuiltin.arraySpread(first, 0));
            arg1(dependencyMap[23]).hydrateItems(items, 0, arg1(dependencyMap[24]).ICYMI_PAGE_SIZE);
            if (first.length + arr2.length === 0) {
              let closure_59 = true;
            }
            const obj2 = arg1(dependencyMap[23]);
          }
          const ICYMIAnalytics = arg1(dependencyMap[28]).ICYMIAnalytics;
          obj = { newTrackingProps: closure_37, hasNewContent: closure_45, unreadFeedItems: first, readFeedItems: arr2 };
          let str = "background_load";
          if (closure_58) {
            str = "foreground_load";
          }
          obj.homeSessionId = str;
          ICYMIAnalytics.trackFeedLoaded(obj);
        }
      }
    }
    closure_43 = 0;
    if (!closure_58) {
      if (tabHasNewContentOnInitialLoad(first, closure_35)) {
        closure_45 = true;
        let closure_44 = true;
      }
      obj = { newUnread: first, newRead: arr2 };
      reload(obj);
    }
    closure_45 = false;
  },
  LOAD_ICYMI_HYDRATED: function handleLoadHydratedItems(arg0) {
    let activityItems;
    let endingIndex;
    let messageItems;
    let requestActivityItems;
    let requestMessageItems;
    let startingIndex;
    ({ messageItems, activityItems, requestMessageItems, requestActivityItems, startingIndex, endingIndex } = arg0);
    let closure_59 = true;
    const merged = Object.assign(closure_39);
    closure_39 = {};
    const callback = messageItems.reduce((arg0, message) => {
      arg0[message.message.id] = message;
      return arg0;
    }, {});
    let closure_1 = activityItems.reduce((arg0, id) => {
      arg0[id.id] = id;
      return arg0;
    }, {});
    const item = requestMessageItems.forEach((message_id) => {
      if (null != callback[message_id.message_id]) {
        let tmp4 = closure_38[message_id.message_id];
        if (null == tmp4) {
          let obj = { id: message_id.message_id, type: callback(closure_2[24]).ICYMIItemTypes.MESSAGE, score: -1 };
          obj = {};
          ({ guild_id: obj5.guild_id, channel_id: obj5.channel_id } = tmp);
          obj.message_id = tmp.message.id;
          obj.channel_type = constants.GUILD_TEXT;
          obj.has_mention = false;
          obj.data = obj;
          tmp4 = obj;
        }
        const message = message.getMessage(tmp.channel_id, tmp.message.id);
        if (null != message) {
          let obj1 = callback(closure_2[23]);
          obj1 = {};
          const merged = Object.assign(obj1.createGravityMessageFromServer(tmp, tmp4));
          obj1["message"] = message;
          obj[tmp.message.id] = obj1;
        } else {
          obj = callback(closure_2[23]);
          obj[tmp.message.id] = obj.createGravityMessageFromServer(tmp, tmp4);
        }
      } else {
        closure_40[message_id.message_id] = true;
      }
    });
    const item1 = requestActivityItems.forEach((content_id) => {
      if (null != closure_1[content_id.content_id]) {
        if (null != closure_38[content_id.content_id]) {
          const obj = {};
          const merged = Object.assign(tmp4);
          obj["activity"] = tmp;
          obj[tmp.id] = obj;
        } else {
          closure_40[content_id.content_id] = true;
        }
      } else {
        closure_40[content_id.content_id] = true;
      }
    });
    if (startingIndex === closure_52) {
      closure_52 = endingIndex;
    }
    set.delete(callback(dependencyMap[23]).generateHydrationId(startingIndex, endingIndex));
  },
  LOAD_ICYMI_CUSTOM_SCORES: function handleLoadCustomScores(scores) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(scores.scores);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_41;
        closure_41[value.guild_id] = value.guild_score;
        let tmp3 = closure_77;
        let tmp4 = closure_77(value.guild_id, value.guild_score);
        let _Object = Object;
        let keys = Object.keys(value.custom_channel_scores);
        let num = 0;
        if (0 < keys.length) {
          do {
            let tmp5 = keys[num];
            let tmp6 = closure_42;
            if (null == closure_42[value.guild_id]) {
              let tmp7 = closure_42;
              closure_42[value.guild_id] = {};
            }
            let tmp8 = closure_42;
            closure_42[value.guild_id][tmp5] = value.custom_channel_scores[tmp5];
            let tmp9 = closure_75;
            let tmp10 = closure_75(tmp5, value.custom_channel_scores[tmp5]);
            num = num + 1;
            let tmp11 = tmp5;
          } while (num < keys.length);
        }
        iter3 = tmp();
        iter2 = iter3;
      } while (!iter3.done);
    }
    let obj = {};
    const merged = Object.assign(closure_41);
    closure_41 = obj;
    obj = {};
    const merged1 = Object.assign(closure_42);
    closure_42 = obj;
  },
  LOAD_ICYMI_RECOMMENDED_GUILDS: function loadICYMIRecommendedGuilds(guilds) {
    guilds = guilds.guilds;
    let closure_53 = guilds.map((guild) => callback(closure_2[29]).makeDiscoverableGuild(guild.guild));
    injectRecommendedGuildsRow();
  },
  ICYMI_CUSTOM_SCORES_UPDATED: function handleCustomScoresUpdated(guildScore) {
    let channelScores;
    let guildId;
    ({ channelScores, guildId } = guildScore);
    const arg1 = guildId;
    guildScore = guildScore.guildScore;
    if (null != guildScore) {
      closure_41[guildId] = guildScore;
      maybeFilterGuildItems(guildId, guildScore);
      const obj = {};
      const merged = Object.assign(closure_41);
      closure_41 = obj;
    }
    if (null != channelScores) {
      const item = channelScores.forEach((arg0) => {
        let channelId;
        let score;
        ({ channelId, score } = arg0);
        if (null == obj[closure_0]) {
          obj[guildId] = {};
        }
        obj[closure_0][channelId] = score;
        callback(channelId, score);
        const obj = {};
        const merged = Object.assign(obj);
      });
    }
  },
  RELOAD_ICYMI: function handleReloadTab() {
    if (0 === closure_35.length) {
      return false;
    } else {
      reload();
      let closure_45 = false;
    }
  },
  ICYMI_TAB_OPENED: function handleGravityTabOpened() {
    let closure_46 = true;
    let closure_34 = Date.now();
    if (closure_44) {
      closure_44 = false;
      let closure_45 = false;
    }
    if (closure_49 < 5) {
      closure_49 = closure_49 + 1;
    }
  },
  ICYMI_FEEDBACK_GIVEN: function handleGravityFeedback() {
    let closure_49 = 6;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(arg0) {
    if (null == closure_39[arg0.messageId]) {
      return false;
    } else if (tmp2.type !== arg1(dependencyMap[24]).ICYMIItemTypes.MESSAGE) {
      return false;
    } else {
      const message = tmp2.message;
      tmp2.message = message.addReactionBatch(tmp, store.getId());
    }
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let tmp2 = null != tmp;
    if (tmp2) {
      const tmp5 = tmp.type === arg1(dependencyMap[24]).ICYMIItemTypes.MESSAGE;
      if (tmp5) {
        const message = tmp.message;
        tmp.message = message.set("reactions", []);
      }
      tmp2 = tmp5;
    }
    return tmp2;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(arg0) {
    let tmp3 = null != tmp2;
    if (tmp3) {
      const tmp6 = tmp2.type === arg1(dependencyMap[24]).ICYMIItemTypes.MESSAGE;
      if (tmp6) {
        const message = tmp2.message;
        tmp2.message = message.removeReactionsForEmoji(tmp);
      }
      tmp3 = tmp6;
    }
    return tmp3;
  },
  CHANNEL_ACK: handleAck,
  MESSAGE_ACK: handleAck,
  ICYMI_JOINED_RECOMMENDED_GUILD: function handleJoinedRecommendedGuild() {
    let closure_54 = Date.now();
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
    let tmp2 = null;
    if (null != attachments) {
      tmp2 = null;
      if (0 !== attachments.length) {
        const items = [tmp, ];
        const items1 = [];
        HermesBuiltin.arraySpread(attachments, 0);
        items[1] = items1;
        tmp2 = items;
      }
    }
    let closure_47 = tmp2;
  },
  ICYMI_SCROLL_EVENT: function handleScrollEvent(timestamp) {
    timestamp = timestamp.timestamp;
  },
  ICYMI_TAKE_SURVEY: function handleTakeSurvey(takenAt) {
    takenAt = takenAt.takenAt;
  }
};
const tmp3 = arg1(dependencyMap[20]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/icymi/ICYMIStore.tsx");

export default tmp5;
