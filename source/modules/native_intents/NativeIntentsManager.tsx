// Module ID: 16435
// Function ID: 126927
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16435 (_isNativeReflectConstruct)
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
function indexingEnabled() {
  let obj = importDefault(dependencyMap[13]);
  obj = { autoTrackExposure: true, disable: !importDefault(dependencyMap[14]).hasSearch() };
  return obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled;
}
function clearEnabled() {
  let obj = importDefault(dependencyMap[13]);
  obj = { autoTrackExposure: true, disable: !importDefault(dependencyMap[14]).hasSearch() };
  return obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).clearEnabled;
}
function handleRelativeURL(channelIconURL) {
  if (null != channelIconURL) {
    if (null != channelIconURL.startsWith) {
      if (channelIconURL.startsWith("/")) {
        const _location = location;
        let sum = location.origin + channelIconURL;
      }
      return sum;
    }
  }
  if (null != channelIconURL) {
    sum = channelIconURL;
  }
}
function makeSearchItem(isGuildVocal, name) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj = name(dependencyMap[15]);
  const channelName = obj.computeChannelName(isGuildVocal, closure_14, closure_12, true);
  const channelName1 = name(dependencyMap[15]).computeChannelName(isGuildVocal, closure_14, closure_12, false);
  const items = [];
  const items1 = [channelName, channelName1];
  const items2 = [];
  if (isGuildVocal.isGuildVocal()) {
    const _HermesInternal = HermesInternal;
    items1.push("!" + channelName1);
  }
  const channel = authStore.getChannel(isGuildVocal.parent_id);
  if (null != channel) {
    const obj3 = name(dependencyMap[15]);
    const channelName2 = obj3.computeChannelName(channel, closure_14, closure_12, true);
    const obj4 = name(dependencyMap[15]);
    const channelName3 = obj4.computeChannelName(channel, closure_14, closure_12, false);
    items2.push(channelName2);
    items2.push(channelName3);
    items.push(channelName2);
  }
  if (null != name) {
    items2.push(name.name);
    items.push(name.name);
  }
  let str2 = "";
  if (items.length > 0) {
    const _HermesInternal2 = HermesInternal;
    str2 = " (" + items.join(", ") + ")";
  }
  const sum = channelName + str2;
  let id;
  if (null != name) {
    id = name.id;
  }
  if (null == id) {
    id = closure_15;
  }
  const CHANNELResult = closure_19.CHANNEL(id, isGuildVocal.id);
  obj = { id: CHANNELResult, relatedUniqueIdentifier: CHANNELResult, type: "url", title: sum, displayName: sum };
  const obj2 = name(dependencyMap[15]);
  obj.thumbnailURL = handleRelativeURL(name(dependencyMap[16]).getChannelIconURL(isGuildVocal, 128, false));
  if (isGuildVocal.type === constants.DM) {
    let OTHER_CHANNEL = constants3.DM;
  } else {
    OTHER_CHANNEL = constants3.OTHER_CHANNEL;
  }
  obj.rankingHint = OTHER_CHANNEL;
  obj.keywords = items2;
  obj.alternateNames = items1;
  obj.isUpdate = flag;
  return obj;
}
function getGuildThumbnail(id) {
  let tmp;
  if (null != id) {
    let obj = importDefault(dependencyMap[17]);
    obj = {};
    ({ id: obj2.id, icon: obj2.icon } = id);
    obj.size = 128;
    tmp = handleRelativeURL(obj.getGuildIconURL(obj));
  }
  return tmp;
}
function makeGuildDomain(id) {
  let iter2;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const CHANNELResult = closure_19.CHANNEL(id.id);
  let obj = { id: CHANNELResult, relatedUniqueIdentifier: CHANNELResult, type: "url", title: id.name, displayName: id.name };
  const items = ["*" + id.name];
  obj.alternateNames = items;
  obj.rankingHint = constants3.GUILD;
  const items1 = [obj];
  const mutableGuildChannelsForGuild = authStore.getMutableGuildChannelsForGuild(id.id);
  for (const key10029 in mutableGuildChannelsForGuild) {
    let tmp11 = key10029;
    let tmp12 = mutableGuildChannelsForGuild[key10029];
    let tmp13 = closure_11;
    let tmp14 = closure_18;
    if (!closure_11.can(closure_18.VIEW_CHANNEL, tmp12)) {
      continue;
    } else {
      let tmp4 = closure_27;
      let arr = items1.push(closure_27(tmp12, arg0, flag));
      // continue
    }
    continue;
  }
  const tmp6 = _createForOfIteratorHelperLoose(authStore.getAllThreadsForGuild(id.id));
  let iter = tmp6();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp7 = closure_11;
      let tmp8 = closure_18;
      if (closure_11.can(closure_18.VIEW_CHANNEL, value)) {
        let tmp9 = closure_27;
        arr = items1.push(closure_27(value, id, flag));
      }
      iter2 = tmp6();
      iter = iter2;
    } while (!iter2.done);
  }
  obj = { id: id.id, items: items1, defaultThumbnailURL: getGuildThumbnail(id), isUpdate: flag };
  return obj;
}
function getChannelKeywords(channel) {
  const items = [];
  if ("" !== channel.name) {
    items.push(channel.name);
  }
  if (null != channel.nicks) {
    const push = items.push;
    const _Object = Object;
    const items1 = [];
    HermesBuiltin.arraySpread(Object.values(channel.nicks), 0);
    HermesBuiltin.apply(items1, items);
  }
  if (channel.type === constants.DM) {
    const recipients = channel.recipients;
    const mapped = recipients.map(getUser.getUser);
    const first = callback3(mapped.filter(arg1(dependencyMap[18]).isNotNullish), 1)[0];
    if (null != first) {
      const globalName = importDefault(dependencyMap[19]).getGlobalName(first);
      if (null != globalName) {
        items.push(globalName);
      }
      items.push(first.username);
      items.push(`@${tmp23.username}`);
      const nickname = nickname.getNickname(first.id);
      if (null != nickname) {
        items.push(nickname);
      }
      const obj2 = importDefault(dependencyMap[19]);
      const name = importDefault(dependencyMap[19]).getName(first);
      if (null != name) {
        items.push(name);
      }
      const obj = importDefault(dependencyMap[19]);
    }
  }
  return items;
}
function setChannelActivity(channelId) {
  let obj = importDefault(dependencyMap[13]);
  obj = { autoTrackExposure: true, disable: !importDefault(dependencyMap[14]).hasUserActivity() };
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).activityEnabled) {
    let channel;
    if (null != channelId) {
      channel = authStore.getChannel(channelId);
    }
    if (null != channel) {
      const guild = guild.getGuild(channel.guild_id);
      const obj5 = arg1(dependencyMap[15]);
      const channelName = obj5.computeChannelName(channel, closure_14, closure_12, true);
      let str2 = "";
      if (null != guild) {
        const _HermesInternal = HermesInternal;
        str2 = " (" + guild.name + ")";
      }
      const sum = channelName + str2;
      const _Set = Set;
      const items = [channelName];
      HermesBuiltin.arraySpread(getChannelKeywords(channel), 1);
      const set = new Set(items);
      const items1 = [];
      HermesBuiltin.arraySpread(set, 0);
      const CHANNELResult = closure_19.CHANNEL(channel.guild_id, channel.id);
      obj = {};
      const _HermesInternal2 = HermesInternal;
      obj.webpageURL = "" + constants2.BASE_URL + CHANNELResult;
      obj.relatedUniqueIdentifier = CHANNELResult;
      obj.eligibleForHandoff = true;
      obj.eligibleForSearch = true;
      obj.title = sum;
      obj.keywords = items1;
      obj.displayName = sum;
      obj.type = "com.discord.view-channel";
      importDefault(dependencyMap[14]).setActivity(obj);
      const obj7 = importDefault(dependencyMap[14]);
    } else {
      importDefault(dependencyMap[14]).resignActivity();
      const obj4 = importDefault(dependencyMap[14]);
    }
  }
}
function updateUserId(arg0) {
  const dMChannelFromUserId = authStore.getDMChannelFromUserId(arg0);
  if (null != dMChannelFromUserId) {
    const items = [dMChannelFromUserId];
    indexChannelUpdates(items);
  }
}
function indexChannelUpdates(items) {
  let iter3;
  if (indexingEnabled()) {
    items = [];
    const items1 = [];
    let obj = {};
    const tmp3 = _createForOfIteratorHelperLoose(items);
    const iter = tmp3();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp5 = closure_11;
        let tmp6 = closure_18;
        if (closure_11.can(closure_18.VIEW_CHANNEL, value)) {
          let tmp8 = closure_10;
          let guild = closure_10.getGuild(value.guild_id);
          let id;
          if (null != guild) {
            id = guild.id;
          }
          let tmp11 = id;
          if (null == id) {
            tmp11 = closure_15;
          }
          let tmp12 = closure_27;
          let tmp13 = closure_27(value, guild, true);
          let arr3 = obj[tmp11];
          if (null != arr3) {
            let arr = arr3.push(tmp13);
            let tmp22 = id;
            let tmp23 = guild;
            let tmp24 = tmp11;
            let tmp25 = tmp13;
            let tmp26 = arr3;
          } else {
            let tmp14 = closure_28;
            let items2 = [tmp13];
            obj = { id: tmp11, items: items2, defaultThumbnailURL: closure_28(guild) };
            arr = items.push(obj);
            obj[tmp11] = items2;
            let tmp16 = id;
            let tmp17 = guild;
            let tmp18 = tmp11;
            let tmp19 = tmp13;
            let tmp20 = arr3;
          }
        } else {
          let arr1 = items1.push(value.id);
        }
        iter3 = tmp3();
        iter2 = iter3;
      } while (!iter3.done);
    }
    if (items.length > 0) {
      importDefault(dependencyMap[14]).indexDomains(items);
      const obj3 = importDefault(dependencyMap[14]);
    }
    if (items1.length > 0) {
      importDefault(dependencyMap[14]).deleteSearchItems(items1);
      const obj4 = importDefault(dependencyMap[14]);
    }
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
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
({ ME: closure_15, ChannelTypes: closure_16, Links: closure_17, Permissions: closure_18, Routes: closure_19 } = arg1(dependencyMap[12]));
let closure_20 = { GUILD: 100, [100]: "GUILD", DM: 75, [75]: "DM", OTHER_CHANNEL: 50, [50]: "OTHER_CHANNEL" };
let tmp3 = (arg0) => {
  class NativeIntentsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, NativeIntentsManager);
      items1 = [...items];
      obj = closure_6(NativeIntentsManager);
      tmp2 = closure_5;
      if (closure_21()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { POST_CONNECTION_OPEN: tmp2Result.handleInit, LOGOUT: tmp2Result.handleLogout, CHANNEL_SELECT: tmp2Result.handleChannelSelect, CHANNEL_CREATE: tmp2Result.handleChannelCreate, CHANNEL_DELETE: tmp2Result.handleChannelDelete, CHANNEL_UPDATES: tmp2Result.handleChannelUpdates, GUILD_CREATE: tmp2Result.handleGuildCreateOrUpdate, GUILD_UPDATE: tmp2Result.handleGuildCreateOrUpdate, GUILD_DELETE: tmp2Result.handleGuildDelete, RELATIONSHIP_ADD: tmp2Result.handleRelationshipChange, RELATIONSHIP_REMOVE: tmp2Result.handleRelationshipChange, RELATIONSHIP_UPDATE: tmp2Result.handleRelationshipChange, THREAD_CREATE: tmp2Result.handleChannelCreate, THREAD_DELETE: tmp2Result.handleChannelDelete, THREAD_UPDATE: tmp2Result.handleThreadUpdate, USER_UPDATE: tmp2Result.handleUserUpdate };
      return tmp2Result;
    }
  }
  const arg1 = NativeIntentsManager;
  callback2(NativeIntentsManager, arg0);
  let obj = {
    key: "handleInit",
    value() {
      callback10(currentlySelectedChannelId.getCurrentlySelectedChannelId());
      if (callback6()) {
        callback(closure_2[14]).clearSearchIndex();
        const obj = callback(closure_2[14]);
      }
      if (callback5()) {
        function initializeIndex() {
          if (callback2()) {
            const guildsArray = guildsArray.getGuildsArray();
            const mapped = guildsArray.map((arg0) => callback(arg0));
            const items = [];
            const mutablePrivateChannels = mutablePrivateChannels.getMutablePrivateChannels();
            for (const key10015 in mutablePrivateChannels) {
              let tmp10 = key10015;
              let tmp11 = closure_27;
              let arr = items.push(closure_27(mutablePrivateChannels[key10015]));
            }
            const obj = { id: closure_15, items };
            mapped.push(obj);
            callback(closure_2[14]).indexDomains(mapped);
            const obj2 = callback(closure_2[14]);
          }
        }();
      }
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "handleLogout",
    value() {
      if (callback6()) {
        callback(closure_2[14]).clearSearchIndex();
        const obj = callback(closure_2[14]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleChannelSelect",
    value(channelId) {
      callback10(channelId.channelId);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleChannelCreate",
    value(channel) {
      channel = channel.channel;
      if (callback5()) {
        if (closure_11.can(constants.VIEW_CHANNEL, channel)) {
          const guild = store.getGuild(channel.guild_id);
          if (null != guild) {
            let obj = callback(closure_2[14]);
            obj = {};
            let id;
            if (null != guild) {
              id = guild.id;
            }
            if (null == id) {
              id = closure_15;
            }
            obj.id = id;
            const items = [callback7(channel, guild)];
            obj.items = items;
            obj.defaultThumbnailURL = callback8(guild);
            const items1 = [obj];
            obj.indexDomains(items1);
            const tmp7 = callback8(guild);
          }
        }
      }
    }
  };
  items[4] = {
    key: "handleChannelDelete",
    value(channel) {
      if (callback5()) {
        const items = [channel.channel.id];
        callback(closure_2[14]).deleteSearchItems(items);
        const obj = callback(closure_2[14]);
      }
    }
  };
  items[5] = {
    key: "handleChannelUpdates",
    value(channels) {
      callback12(channels.channels);
    }
  };
  items[6] = {
    key: "handleGuildCreateOrUpdate",
    value(guild) {
      guild = guild.guild;
      if (callback5()) {
        guild = store.getGuild(guild.id);
        if (null != guild) {
          const items = [callback9(guild, "GUILD_UPDATE" === guild.type)];
          callback(closure_2[14]).indexDomains(items);
          const obj2 = callback(closure_2[14]);
        } else {
          const items1 = [guild.id];
          callback(closure_2[14]).deleteSearchDomains(items1);
          const obj = callback(closure_2[14]);
        }
      }
    }
  };
  items[7] = {
    key: "handleGuildDelete",
    value(guild) {
      if (callback5()) {
        const items = [guild.guild.id];
        callback(closure_2[14]).deleteSearchDomains(items);
        const obj = callback(closure_2[14]);
      }
    }
  };
  items[8] = {
    key: "handleThreadUpdate",
    value(channel) {
      const items = [channel.channel];
      callback12(items);
    }
  };
  items[9] = {
    key: "handleUserUpdate",
    value(user) {
      callback11(user.user.id);
    }
  };
  items[10] = {
    key: "handleRelationshipChange",
    value(relationship) {
      callback11(relationship.relationship.id);
    }
  };
  return callback(NativeIntentsManager, items);
}(importDefault(dependencyMap[20]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/native_intents/NativeIntentsManager.tsx");

export default tmp3;
