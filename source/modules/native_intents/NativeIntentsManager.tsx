// Module ID: 16599
// Function ID: 129425
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1348, 1838, 3758, 3767, 1906, 1849, 653, 16600, 16601, 4320, 11979, 1392, 1327, 3969, 5078, 2]

// Module 16599 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import computeDefaultGroupDmNameFromUserIds from "computeDefaultGroupDmNameFromUserIds";
import getAvatarURL from "getAvatarURL";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import tmp3 from "AutomaticLifecycleManager";

let closure_15;
let closure_16;
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
function indexingEnabled() {
  let obj = importDefault(16600);
  obj = { autoTrackExposure: true, disable: !importDefault(16601).hasSearch() };
  return obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).searchEnabled;
}
function clearEnabled() {
  let obj = importDefault(16600);
  obj = { autoTrackExposure: true, disable: !importDefault(16601).hasSearch() };
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
function makeSearchItem(value, guild, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  const channelName = obj.computeChannelName(value, closure_14, closure_12, true);
  const channelName1 = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(value, closure_14, closure_12, false);
  const items = [];
  const items1 = [channelName, channelName1];
  const items2 = [];
  if (value.isGuildVocal()) {
    const _HermesInternal = HermesInternal;
    items1.push("!" + channelName1);
  }
  const channel = authStore.getChannel(value.parent_id);
  if (null != channel) {
    const obj3 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    const channelName2 = obj3.computeChannelName(channel, closure_14, closure_12, true);
    const obj4 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    const channelName3 = obj4.computeChannelName(channel, closure_14, closure_12, false);
    items2.push(channelName2);
    items2.push(channelName3);
    items.push(channelName2);
  }
  if (null != guild) {
    items2.push(guild.name);
    items.push(guild.name);
  }
  let str2 = "";
  if (items.length > 0) {
    const _HermesInternal2 = HermesInternal;
    str2 = " (" + items.join(", ") + ")";
  }
  const sum = channelName + str2;
  let id;
  if (null != guild) {
    id = guild.id;
  }
  if (null == id) {
    id = closure_15;
  }
  const CHANNELResult = closure_19.CHANNEL(id, value.id);
  obj = { id: CHANNELResult, relatedUniqueIdentifier: CHANNELResult, type: "url", title: sum, displayName: sum };
  const obj2 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  obj.thumbnailURL = handleRelativeURL(require(11979) /* getChannelIconURL */.getChannelIconURL(value, 128, false));
  if (value.type === constants.DM) {
    let OTHER_CHANNEL = constants4.DM;
  } else {
    OTHER_CHANNEL = constants4.OTHER_CHANNEL;
  }
  obj.rankingHint = OTHER_CHANNEL;
  obj.keywords = items2;
  obj.alternateNames = items1;
  obj.isUpdate = flag;
  return obj;
}
function getGuildThumbnail(guild) {
  let tmp;
  if (null != guild) {
    let obj = importDefault(1392);
    obj = {};
    ({ id: obj2.id, icon: obj2.icon } = guild);
    obj.size = 128;
    tmp = handleRelativeURL(obj.getGuildIconURL(obj));
  }
  return tmp;
}
function makeGuildDomain(id, flag) {
  let iter2;
  if (flag === undefined) {
    flag = false;
  }
  const CHANNELResult = closure_19.CHANNEL(id.id);
  let obj = { id: CHANNELResult, relatedUniqueIdentifier: CHANNELResult, type: "url", title: id.name, displayName: id.name };
  const items = ["*" + id.name];
  obj.alternateNames = items;
  obj.rankingHint = constants4.GUILD;
  const items1 = [obj];
  const mutableGuildChannelsForGuild = authStore.getMutableGuildChannelsForGuild(id.id);
  for (const key10029 in mutableGuildChannelsForGuild) {
    let tmp11 = key10029;
    let tmp12 = mutableGuildChannelsForGuild[key10029];
    let tmp13 = closure_11;
    let tmp14 = constants3;
    if (!closure_11.can(constants3.VIEW_CHANNEL, tmp12)) {
      continue;
    } else {
      let tmp4 = makeSearchItem;
      let arr = items1.push(makeSearchItem(tmp12, arg0, flag));
      continue;
    }
    continue;
  }
  const tmp6 = _createForOfIteratorHelperLoose(authStore.getAllThreadsForGuild(id.id));
  let iter = tmp6();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp7 = closure_11;
      let tmp8 = constants3;
      if (closure_11.can(constants3.VIEW_CHANNEL, value)) {
        let tmp9 = makeSearchItem;
        arr = items1.push(makeSearchItem(value, id, flag));
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
    const first = callback3(mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish), 1)[0];
    if (null != first) {
      const globalName = importDefault(3969).getGlobalName(first);
      if (null != globalName) {
        items.push(globalName);
      }
      items.push(first.username);
      items.push(`@${tmp23.username}`);
      nickname = nickname.getNickname(first.id);
      if (null != nickname) {
        items.push(nickname);
      }
      const obj2 = importDefault(3969);
      const name = importDefault(3969).getName(first);
      if (null != name) {
        items.push(name);
      }
      const obj = importDefault(3969);
    }
  }
  return items;
}
function setChannelActivity(channelId) {
  let obj = importDefault(16600);
  obj = { autoTrackExposure: true, disable: !importDefault(16601).hasUserActivity() };
  if (obj.getCurrentConfig({ location: "NativeIntentsManager" }, obj).activityEnabled) {
    let channel;
    if (null != channelId) {
      channel = authStore.getChannel(channelId);
    }
    if (null != channel) {
      const guild = store.getGuild(channel.guild_id);
      const obj5 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
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
      importDefault(16601).setActivity(obj);
      const obj7 = importDefault(16601);
    } else {
      importDefault(16601).resignActivity();
      const obj4 = importDefault(16601);
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
        let tmp6 = constants3;
        if (closure_11.can(constants3.VIEW_CHANNEL, value)) {
          let tmp8 = store;
          let guild = store.getGuild(value.guild_id);
          let id;
          if (null != guild) {
            id = guild.id;
          }
          let tmp11 = id;
          if (null == id) {
            tmp11 = closure_15;
          }
          let tmp12 = makeSearchItem;
          let tmp13 = makeSearchItem(value, guild, true);
          let arr3 = obj[tmp11];
          if (null != arr3) {
            let arr = arr3.push(tmp13);
            let tmp22 = id;
            let tmp23 = guild;
            let tmp24 = tmp11;
            let tmp25 = tmp13;
            let tmp26 = arr3;
          } else {
            let tmp14 = getGuildThumbnail;
            let items2 = [tmp13];
            obj = { id: tmp11, items: items2, defaultThumbnailURL: getGuildThumbnail(guild) };
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
      importDefault(16601).indexDomains(items);
      const obj3 = importDefault(16601);
    }
    if (items1.length > 0) {
      importDefault(16601).deleteSearchItems(items1);
      const obj4 = importDefault(16601);
    }
  }
}
({ ME: closure_15, ChannelTypes: closure_16, Links: closure_17, Permissions: closure_18, Routes: closure_19 } = ME);
let closure_20 = { GUILD: 100, [100]: "GUILD", DM: 75, [75]: "DM", OTHER_CHANNEL: 50, [50]: "OTHER_CHANNEL" };
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/native_intents/NativeIntentsManager.tsx");

export default tmp3;
