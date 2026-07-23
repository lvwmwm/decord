// Module ID: 4991
// Function ID: 43011
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 57, 5, 6, 7, 4044, 4992, 1921, 1316, 1917, 1350, 1910, 1838, 4970, 1849, 4993, 4994, 1852, 653, 4995, 662, 3771, 4996, 21, 22, 664, 1882, 1901, 20, 4997, 686, 4214, 44, 4118, 1327, 4998, 4999, 5031, 3749, 3712, 5033, 3775, 3774, 566, 2]

// Module 4991 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_16 from "_createForOfIteratorHelperLoose";
import closure_17 from "_createForOfIteratorHelperLoose";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import set from "set";
import { NULL_STRING_GUILD_ID } from "ME";
import { EmojiCategories } from "EmojiCategoryTypes";
import { UserSettingsTypes } from "MAX_FAVORITES";
import importDefaultResult from "_createForOfIteratorHelperLoose";
import importDefaultResult2 from "DEFAULT_FRECENCY";
import set from "_inherits";

let closure_22;
let closure_23;
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
function getUsableEmoji(arg0) {
  const tmp = getEmojiToGroupId()[arg0];
  let tmp2;
  if (null != tmp) {
    let usableEmoji;
    if (null != dependencyMap[tmp]) {
      usableEmoji = obj.getUsableEmoji(arg0);
    }
    if (null != usableEmoji) {
      tmp2 = usableEmoji;
    }
  }
  return tmp2;
}
function getEmojiToGroupId() {
  loadSavedEmojis();
  if (null == closure_38) {
    closure_38 = {};
    for (const key10008 in closure_37) {
      let tmp4 = key10008;
      let tmp5 = _createForOfIteratorHelperLoose;
      let tmp6 = dependencyMap;
      let obj = dependencyMap[key10008];
      let tmp7 = _createForOfIteratorHelperLoose(obj.emojiIds());
      let iter2 = tmp7();
      if (iter2.done) {
        continue;
      } else {
        let tmp3 = closure_38;
        closure_38[iter2.value] = key10008;
        let iter = tmp7();
        iter2 = iter;
      }
      continue;
    }
  }
  return closure_38;
}
function loadSavedEmojis() {
  return _loadSavedEmojis(...arguments);
}
async function _loadSavedEmojis() {
  let c0;
  if (outer2_35 === outer2_34.Unloaded) {
    const databaseResult = outer2_1(outer2_2[28]).database();
    c0 = databaseResult;
    if (null != databaseResult) {
      outer2_35 = outer2_34.Loading;
      const tmp12 = yield outer2_0(outer2_2[29]).tryLoadOrResetCacheGatewayAsync("EmojiStore.loadSavedEmojis", () => outer3_1(outer3_2[30]).timeAsync("\u{1F4BE}", "loadSavedEmojis", () => outer4_1(outer4_2[31]).getAsync(outer1_0)));
      outer2_35 = outer2_34.Loaded;
      if (null != tmp12) {
        let obj = outer2_1(outer2_2[32]);
        obj = { type: "CACHED_EMOJIS_LOADED", emojis: tmp12 };
        obj.dispatch(obj);
      }
      const obj4 = outer2_0(outer2_2[29]);
    }
    const obj3 = outer2_1(outer2_2[28]);
  }
}
function createBaseEmojiFrecencyOptions(resetFrequentlyUsed) {
  let closure_0 = resetFrequentlyUsed;
  return {
    computeBonus() {
      return 100;
    },
    lookupKey(emojiName) {
      let byName = outer1_1(outer1_2[23]).getByName(emojiName);
      if (null == byName) {
        byName = outer1_46(emojiName);
      }
      return byName;
    },
    afterCompute() {
      callback();
      const items = [...outer1_27];
      const outer1_36 = items;
      if (!obj.some(outer1_37, (usableEmojis) => usableEmojis.usableEmojis.length > 0)) {
        outer1_36.splice(outer1_27.indexOf(outer1_25.CUSTOM), 1);
      }
    },
    numFrequentlyItems: 42
  };
}
function deleteEverything() {
  let closure_37 = {};
  let closure_38 = {};
  tmp8.reset();
  map.clear();
  const Unloaded = obj.Unloaded;
}
function deleteGuildEmoji(id) {
  if (null != dependencyMap[id]) {
    delete tmp[tmp2];
  }
}
function rebuildEmojis() {
  let c38 = null;
  tmp8.reset();
  if (Unloaded === obj.Loaded) {
    importDefaultResult2.compute();
    closure_42.compute();
  }
}
function updateGuildEmoji(guildId) {
  deleteGuildEmoji(guildId);
  tmp8.clear(guildId);
  guildEmojis = guildEmojis.getGuildEmojis(guildId);
  if (null != guildEmojis) {
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      const prototype = ctor.prototype;
      const tmp14 = new ctor(guildId, currentUser.id, guildEmojis, require(5031) /* compareVersions */.canUseRoleSubscriptionIAP(guildId));
      closure_37[guildId] = tmp14;
      const obj = require(5031) /* compareVersions */;
      tmp8 = closure_37;
    }
  }
}
function handleUserSettingsProtoStoreChange() {
  let length;
  let length2;
  const textAndImages = closure_13.settings.textAndImages;
  let value;
  if (null != textAndImages) {
    if (null != textAndImages.diversitySurrogate) {
      value = iter.value;
    }
  }
  if (null != value) {
    let obj = importDefault(3771);
    const result = obj.setDefaultDiversitySurrogate(value);
  }
  tmp8.reset();
  const frecencyWithoutFetchingLatest = closure_13.frecencyWithoutFetchingLatest;
  const emojiFrecency = frecencyWithoutFetchingLatest.emojiFrecency;
  let emojis;
  if (null != emojiFrecency) {
    emojis = emojiFrecency.emojis;
  }
  if (null == emojis) {
    emojis = {};
  }
  const emojiReactionFrecency = frecencyWithoutFetchingLatest.emojiReactionFrecency;
  let emojis1;
  if (null != emojiReactionFrecency) {
    emojis1 = emojiReactionFrecency.emojis;
  }
  if (null == emojis1) {
    emojis1 = {};
  }
  importDefaultResult2.overwriteHistory(importDefault(22).mapValues(emojis, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), obj.pendingUsages);
  const obj4 = importDefault(22);
  closure_42.overwriteHistory(importDefault(22).mapValues(emojis1, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), obj.emojiReactionPendingUsages);
  const obj5 = importDefault(22);
  if (obj6.isEmpty(emojis)) {
    if (obj7.isEmpty(obj.pendingUsages)) {
      if (closure_13.hasLoaded(UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)) {
        const items = ["thumbsup", "eyes", "laughing", "watermelon", "fork_and_knife", "yum", "weary", "tired_face", "poop", "100"];
        let num2 = 0;
        if (0 < items.length) {
          do {
            let tmp13 = importDefaultResult2;
            let trackResult = importDefaultResult2.track(items[num2]);
            num2 = num2 + 1;
            length = items.length;
          } while (num2 < length);
        }
      }
    }
    obj7 = importDefault(22);
    tmp8 = importDefault;
  }
  obj6 = importDefault(22);
  if (obj8.isEmpty(emojis1)) {
    if (obj9.isEmpty(obj.emojiReactionPendingUsages)) {
      if (closure_13.hasLoaded(UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)) {
        const items1 = ["100", "100", "thumbsup", "thumbsup", "thumbsdown", "thumbsdown", "heart", "point_up", "eyes", "weary", "laughing", "white_check_mark", "x"];
        let num3 = 0;
        if (0 < items1.length) {
          do {
            let tmp20 = closure_42;
            let trackResult1 = closure_42.track(items1[num3]);
            num3 = num3 + 1;
            length2 = items1.length;
          } while (num3 < length2);
        }
      }
    }
    obj9 = importDefault(22);
  }
}
function trackUsage(emojiUsed) {
  let iter;
  let obj;
  if (null == emojiUsed) {
    return false;
  } else {
    const tmp12 = _createForOfIteratorHelperLoose(emojiUsed);
    let iter2 = tmp12();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let name = value.id;
        if (null == name) {
          name = value.uniqueName;
        }
        if (null == name) {
          name = value.name;
        }
        if (null != name) {
          let tmp = importDefaultResult2;
          let trackResult = importDefaultResult2.track(name);
          let tmp3 = obj;
          let pendingUsages = obj.pendingUsages;
          obj = { key: name };
          let _Date = Date;
          obj.timestamp = Date.now();
          let arr = pendingUsages.push(obj);
        }
        iter = tmp12();
        iter2 = iter;
      } while (!iter.done);
    }
    let tmp6 = tmp5;
    if (emojiUsed.length > 0) {
      tmp6 = Unloaded === obj.Loaded;
    }
    if (tmp6) {
      importDefaultResult2.compute();
    }
    return emojiUsed.length > 0;
  }
}
function handleRoleUpdate(guildId) {
  guildId = guildId.guildId;
  role = role.getRole(guildId, guildId.role.id);
  if (null != role) {
    if (obj.isSubscriptionRole(role)) {
      updateGuildEmoji(guildId);
      rebuildEmojis();
    }
    obj = require(3749) /* isSubscriptionRole */;
  }
  return false;
}
({ EmojiDisabledReasons: closure_22, EmojiIntention: closure_23 } = set);
let items = [EmojiCategories.TOP_GUILD_EMOJI.toString(), EmojiCategories.FAVORITES.toString(), EmojiCategories.RECENT.toString(), EmojiCategories.CUSTOM.toString()];
let combined = items.concat(require("_createForOfIteratorHelperLoose").getCategories());
let obj = { pendingUsages: [], emojiReactionPendingUsages: [] };
set = new Set();
obj.expandedSectionsByGuildIds = set;
let closure_29 = (() => {
  class GuildEmojis {
    constructor(arg0, arg1, arg2) {
      flag = arg3;
      self = this;
      if (arg3 === undefined) {
        flag = false;
      }
      tmp = outer1_8(self, GuildEmojis);
      self._emojis = null;
      self._emoticons = null;
      self._usableEmojis = null;
      self._hiddenEmojiIds = null;
      self._canSeeServerSubIAP = false;
      self.id = arg0;
      self._userId = arg1;
      self._emojiMap = arg2;
      self._canSeeServerSubIAP = flag;
      return;
    }
  }
  let obj = {
    key: "getEmoji",
    value(arg0) {
      return this._emojiMap[arg0];
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "getUsableEmoji",
    value(arg0) {
      const self = this;
      const emoji = this.getEmoji(arg0);
      let tmp2;
      if (null != emoji) {
        if (self.isUsable(emoji)) {
          tmp2 = emoji;
        }
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "isUsable",
    value(roles) {
      const self = this;
      let closure_0 = roles;
      if (0 === roles.roles.length) {
        return true;
      } else {
        const member = outer1_14.getMember(self.id, self._userId);
        let tmp8 = null != member;
        if (tmp8) {
          roles = member.roles;
          const tmp = !roles.some((arg0) => {
            roles = roles.roles;
            return roles.includes(arg0);
          });
          let tmp2 = !tmp;
          if (tmp) {
            const tmp5 = !GuildEmojis(outer1_2[24]).isPurchasableRoleSubscriptionEmoji(roles);
            let tmp6 = !tmp5;
            if (!tmp5) {
              let _canSeeServerSubIAP = self._canSeeServerSubIAP;
              if (!_canSeeServerSubIAP) {
                _canSeeServerSubIAP = outer1_11.getUserIsAdmin(roles.guildId);
              }
              tmp6 = _canSeeServerSubIAP;
            }
            tmp2 = tmp6;
            const obj = GuildEmojis(outer1_2[24]);
          }
          tmp8 = tmp2;
        }
        return tmp8;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "emojiIds",
    value() {
      return outer1_1(outer1_2[25]).keys(this._emojiMap);
    }
  };
  items[4] = {
    key: "emojis",
    get() {
      const self = this;
      if (null == this._emojis) {
        const _Object = Object;
        self._emojis = Object.values(self._emojiMap);
      }
      return self._emojis;
    }
  };
  items[5] = {
    key: "emoticons",
    get() {
      const self = this;
      if (null == this._emoticons) {
        const usableEmojis = self.usableEmojis;
        self._emoticons = usableEmojis.filter((require_colons) => !require_colons.require_colons);
      }
      return self._emoticons;
    }
  };
  items[6] = {
    key: "_computeEmojiUsability",
    value() {
      let iter2;
      const self = this;
      if (null == this._usableEmojis) {
        const items = [];
        const _Set = Set;
        const set = new Set();
        const tmp6 = outer1_44(self.emojis);
        let iter = tmp6();
        if (!iter.done) {
          do {
            let value = iter.value;
            if (self.isUsable(value)) {
              let arr = items.push(value);
            } else {
              let addResult = set.add(value.id);
            }
            iter2 = tmp6();
            iter = iter2;
          } while (!iter2.done);
        }
        self._usableEmojis = outer1_1(outer1_2[26]).sortBy(items, (name) => name.name);
        self._hiddenEmojiIds = set;
        const obj2 = outer1_1(outer1_2[26]);
      }
    }
  };
  items[7] = {
    key: "usableEmojis",
    get() {
      const result = this._computeEmojiUsability();
      return this._usableEmojis;
    }
  };
  items[8] = {
    key: "hiddenEmojiIds",
    get() {
      const result = this._computeEmojiUsability();
      return this._hiddenEmojiIds;
    }
  };
  return callback4(GuildEmojis, items);
})();
let str = EmojiCategories.TOP_GUILD_EMOJI;
let str2 = EmojiCategories.FAVORITES;
const str3 = EmojiCategories.RECENT;
const str4 = EmojiCategories.CUSTOM;
const timestamp = Date.now();
let closure_30 = require("EmojiCategoryTypes").fromTimestamp(timestamp - 60 * require("set").Millis.DAY);
let closure_31 = [];
let closure_32 = [];
const set1 = new Set();
obj = { Unloaded: 0, [0]: "Unloaded", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
let Unloaded = obj.Unloaded;
let items1 = [...combined];
let closure_37 = {};
let closure_38 = {};
let map = new Map();
let tmp8 = (() => {
  class EmojiDisambiguations {
    constructor(arg0) {
      self = this;
      self = this;
      addGuildEmoji = function addGuildEmoji(guildId) {
        let tmp = guildId;
        if (null == guildId) {
          tmp = outer2_24;
        }
        if (null != outer2_37[tmp]) {
          outer2_1(outer2_2[26]).each(tmp3.usableEmojis, disambiguateEmoji);
          const obj = outer2_1(outer2_2[26]);
          outer2_1(outer2_2[26]).each(tmp3.emoticons, disambiguateEmoticon);
          const obj2 = outer2_1(outer2_2[26]);
        }
      };
      tmp = outer1_8(this, self);
      this.favorites = null;
      this.favoriteNamesAndIds = null;
      this.topEmojis = null;
      this.disambiguatedEmoji = [];
      this.emoticonRegex = null;
      this.frequentlyUsed = null;
      this.frequentlyUsedReactionEmojis = null;
      this.frequentlyUsedReactionNamesAndIds = null;
      map = new Map();
      this.unicodeAliases = map;
      map1 = new Map();
      this.customEmojis = map1;
      map2 = new Map();
      this.customEmojisByGroup = map2;
      map3 = new Map();
      this.emoticonsByName = map3;
      map4 = new Map();
      this.emojisByName = map4;
      map5 = new Map();
      this.emojisById = map5;
      map6 = new Map();
      this.newlyAddedEmoji = map6;
      this.isFavoriteEmojiWithoutFetchingLatest = (id) => {
        if (null == id) {
          return false;
        } else {
          const favoriteNamesAndIds = self.rebuildFavoriteEmojisWithoutFetchingLatest().favoriteNamesAndIds;
          if (null != id.id) {
            return favoriteNamesAndIds.has(id.id);
          } else {
            const result = outer2_1(outer2_2[23]).convertSurrogateToBase(id.surrogates);
            let tmp5 = id;
            if (null != result) {
              tmp5 = result;
            }
            return favoriteNamesAndIds.has(tmp5.name);
          }
        }
      };
      this.guildId = arg0;
      map7 = new Map();
      Map = map7;
      items = [];
      Map = items;
      disambiguateEmoji = function disambiguateEmoji(name) {
        name = name.name;
        let value = map7.get(name);
        let num = 0;
        if (null != value) {
          num = value;
        }
        const result = map7.set(name, num + 1);
        let tmp3 = name;
        if (num > 0) {
          const obj = {};
          const merged = Object.assign(name);
          const _HermesInternal = HermesInternal;
          obj["name"] = "" + name + "~" + num;
          obj["originalName"] = name;
          tmp3 = obj;
        }
        const emojisByName = self.emojisByName;
        const result1 = emojisByName.set(tmp3.name, tmp3);
        const emojisById = self.emojisById;
        const result2 = emojisById.set(tmp3.id, tmp3);
        const customEmojis = self.customEmojis;
        const result3 = customEmojis.set(tmp3.name, tmp3);
        const guildId = name.guildId;
        const customEmojisByGroup = self.customEmojisByGroup;
        const customEmojisByGroup2 = self.customEmojisByGroup;
        if (customEmojisByGroup.has(guildId)) {
          value = customEmojisByGroup2.get(guildId);
          if (null != value) {
            value.push(tmp3);
          }
        } else {
          const items = [tmp3];
          const result4 = customEmojisByGroup2.set(guildId, items);
        }
        if (obj2.compare(name.id, outer2_30) >= 0) {
          const newlyAddedEmoji = self.newlyAddedEmoji;
          const newlyAddedEmoji2 = self.newlyAddedEmoji;
          if (newlyAddedEmoji.has(guildId)) {
            const value1 = newlyAddedEmoji2.get(guildId);
            if (null != value1) {
              value1.push(tmp3);
            }
          } else {
            const items1 = [tmp3];
            const result5 = newlyAddedEmoji2.set(guildId, items1);
          }
        }
        const disambiguatedEmoji = self.disambiguatedEmoji;
        disambiguatedEmoji.push(tmp3);
      };
      disambiguateEmoticon = function disambiguateEmoticon(name) {
        const emoticonsByName = self.emoticonsByName;
        if (!emoticonsByName.has(name.name)) {
          items.push(outer2_1(outer2_2[35]).escape(name.name));
          const emoticonsByName2 = self.emoticonsByName;
          const result = emoticonsByName2.set(name.name, name);
          const obj = outer2_1(outer2_2[35]);
        }
      };
      arr2 = outer1_1(outer1_2[23]);
      item = arr2.forEach((names) => {
        const _self = names;
        names = names.names;
        const substr = names.slice(1);
        const item = substr.forEach((arg0) => {
          const unicodeAliases = names.unicodeAliases;
          return unicodeAliases.set(arg0, names.name);
        });
        const value = map7.get(names.name);
        let num = 0;
        if (null != value) {
          num = value;
        }
        outer2_1(outer2_2[34])(0 === num, "Expected existing count to be 0");
        const result = map7.set(names.name, num + 1);
        const emojisByName = _self.emojisByName;
        const result1 = emojisByName.set(names.name, names);
        const disambiguatedEmoji = _self.disambiguatedEmoji;
        disambiguatedEmoji.push(names);
      });
      addGuildEmojiResult = addGuildEmoji(this.guildId);
      newlyAddedEmoji = this.newlyAddedEmoji;
      tmp12 = outer1_44(newlyAddedEmoji.keys());
      iter = tmp12();
      if (!iter.done) {
        do {
          value = iter.value;
          newlyAddedEmoji2 = self.newlyAddedEmoji;
          value = newlyAddedEmoji2.get(value);
          if (null != value) {
            newlyAddedEmoji4 = self.newlyAddedEmoji;
            sorted = value.sort((id, id2) => outer2_1(outer2_2[25]).compare(id2.id, id.id));
            result = newlyAddedEmoji4.set(value, sorted.slice(0, 3));
          } else {
            newlyAddedEmoji3 = self.newlyAddedEmoji;
            result1 = newlyAddedEmoji3.set(value, []);
          }
          iter2 = tmp12();
          iter = iter2;
        } while (!iter2.done);
      }
      flattenedGuildIds = outer1_18.getFlattenedGuildIds();
      item1 = flattenedGuildIds.forEach((guildId) => {
        if (guildId !== self.guildId) {
          addGuildEmoji(guildId);
        }
      });
      self.escapedEmoticonNames = items.join("|");
      return;
    }
  }
  let obj = {
    key: "getDisambiguatedEmoji",
    value() {
      return this.disambiguatedEmoji;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getCustomEmoji",
    value() {
      return this.customEmojis;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGroupedCustomEmoji",
    value() {
      return this.customEmojisByGroup;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getByName",
    value(arg0) {
      const self = this;
      const emojisByName = this.emojisByName;
      let value = emojisByName.get(arg0);
      if (null != value) {
        return value;
      } else {
        const unicodeAliases = self.unicodeAliases;
        value = unicodeAliases.get(arg0);
        let value1;
        if (null != value) {
          const emojisByName2 = self.emojisByName;
          value1 = emojisByName2.get(value);
        }
        return value1;
      }
    }
  };
  items[4] = {
    key: "getEmoticonByName",
    value(arg0) {
      const emoticonsByName = this.emoticonsByName;
      return emoticonsByName.get(arg0);
    }
  };
  items[5] = {
    key: "getById",
    value(arg0) {
      const emojisById = this.emojisById;
      return emojisById.get(arg0);
    }
  };
  items[6] = {
    key: "getCustomEmoticonRegex",
    value() {
      const self = this;
      let tmp = null == this.emoticonRegex && null != self.escapedEmoticonNames;
      if (tmp) {
        tmp = "" !== self.escapedEmoticonNames;
      }
      if (tmp) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^\\b(" + self.escapedEmoticonNames + ")\\b");
        self.emoticonRegex = regExp;
      }
      return self.emoticonRegex;
    }
  };
  items[7] = {
    key: "getFrequentlyUsedEmojisWithoutFetchingLatest",
    value() {
      let self = this;
      self = this;
      if (null != this.frequentlyUsed) {
        return self.frequentlyUsed;
      } else {
        const frequently = outer1_41.frequently;
        const mapped = frequently.map((id) => {
          if (null != id.id) {
            let byId = self.getById(id.id);
          } else {
            byId = outer2_1(outer2_2[23]).getByName(id.name);
            const obj = outer2_1(outer2_2[23]);
          }
          return byId;
        });
        const found = mapped.filter(EmojiDisambiguations(outer1_2[36]).isNotNullish);
        const items = [];
        HermesBuiltin.arraySpread(outer1_1(outer1_2[37])(found).values(), 0);
        self.frequentlyUsed = items;
        return self.frequentlyUsed;
      }
    }
  };
  items[8] = {
    key: "rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest",
    value() {
      let self = this;
      self = this;
      if (null != this.frequentlyUsedReactionEmojis) {
        if (null != self.frequentlyUsedReactionNamesAndIds) {
          let obj = {};
          ({ frequentlyUsedReactionEmojis: obj3.frequentlyUsedReactionEmojis, frequentlyUsedReactionNamesAndIds: obj3.frequentlyUsedReactionNamesAndIds } = self);
          return obj;
        }
      }
      const frequently = outer1_42.frequently;
      const mapped = frequently.map((id) => {
        if (null != id.id) {
          let byId = self.getById(id.id);
        } else {
          byId = outer2_1(outer2_2[23]).getByName(id.name);
          const obj = outer2_1(outer2_2[23]);
        }
        return byId;
      });
      const found = mapped.filter(EmojiDisambiguations(outer1_2[36]).isNotNullish);
      obj = outer1_1(outer1_2[37])(found);
      const items = [...obj.values()];
      self.frequentlyUsedReactionEmojis = items;
      self.frequentlyUsedReactionNamesAndIds = new Set(obj.keys());
      obj = { frequentlyUsedReactionEmojis: self.frequentlyUsedReactionEmojis, frequentlyUsedReactionNamesAndIds: self.frequentlyUsedReactionNamesAndIds };
      return obj;
    }
  };
  items[9] = {
    key: "getFrequentlyUsedReactionEmojisWithoutFetchingLatest",
    value() {
      return this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest().frequentlyUsedReactionEmojis;
    }
  };
  items[10] = {
    key: "isFrequentlyUsedReactionEmojiWithoutFetchingLatest",
    value(id) {
      const frequentlyUsedReactionNamesAndIds = this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest().frequentlyUsedReactionNamesAndIds;
      if (null != id.id) {
        return frequentlyUsedReactionNamesAndIds.has(id.id);
      } else {
        const result = outer1_1(outer1_2[23]).convertSurrogateToBase(id.surrogates);
        let tmp4 = id;
        if (null != result) {
          tmp4 = result;
        }
        return frequentlyUsedReactionNamesAndIds.has(tmp4.name);
      }
    }
  };
  items[11] = {
    key: "rebuildFavoriteEmojisWithoutFetchingLatest",
    value() {
      let self = this;
      self = this;
      if (null != this.favorites) {
        if (null != self.favoriteNamesAndIds) {
          let obj = {};
          ({ favorites: obj3.favorites, favoriteNamesAndIds: obj3.favoriteNamesAndIds } = self);
          return obj;
        }
      }
      const favoriteEmojis = outer1_13.frecencyWithoutFetchingLatest.favoriteEmojis;
      let emojis;
      if (null != favoriteEmojis) {
        emojis = favoriteEmojis.emojis;
      }
      if (null == emojis) {
        emojis = [];
      }
      const mapped = emojis.map((emojiName) => {
        let byId = self.getById(emojiName);
        if (null == byId) {
          byId = outer2_1(outer2_2[23]).getByName(emojiName);
          const obj = outer2_1(outer2_2[23]);
        }
        return byId;
      });
      const found = mapped.filter(EmojiDisambiguations(outer1_2[36]).isNotNullish);
      obj = outer1_1(outer1_2[37])(found);
      const items = [...obj.values()];
      self.favorites = items;
      self.favoriteNamesAndIds = new Set(obj.keys());
      obj = { favorites: self.favorites, favoriteNamesAndIds: self.favoriteNamesAndIds };
      return obj;
    }
  };
  items[12] = {
    key: "favoriteEmojisWithoutFetchingLatest",
    get() {
      return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
    }
  };
  items[13] = {
    key: "getEmojiInPriorityOrderWithoutFetchingLatest",
    value() {
      const frequentlyUsedReactionEmojisWithoutFetchingLatest = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
      const set = new Set();
      const favoriteEmojisWithoutFetchingLatest = this.favoriteEmojisWithoutFetchingLatest;
      const combined = favoriteEmojisWithoutFetchingLatest.concat(frequentlyUsedReactionEmojisWithoutFetchingLatest);
      return combined.filter((arg0) => {
        let flag = !set.has(arg0);
        if (flag) {
          set.add(arg0);
          flag = true;
        }
        return flag;
      });
    }
  };
  items[14] = {
    key: "getTopEmojiWithoutFetchingLatest",
    value(arg0) {
      let self = this;
      self = this;
      if (null == this.topEmojis) {
        const value = outer1_39.get(arg0);
        let topEmojiIdsByGuildId = outer1_21.getTopEmojiIdsByGuildId(arg0);
        if (null == value) {
          if (null == topEmojiIdsByGuildId) {
            return outer1_31;
          }
        }
        let emojiIds;
        if (null != value) {
          emojiIds = value.emojiIds;
        }
        if (null != emojiIds) {
          topEmojiIdsByGuildId = emojiIds;
        }
        const mapped = topEmojiIdsByGuildId.map((name) => {
          let byId = self.getById(name);
          if (null == byId) {
            const obj = outer2_1(outer2_2[23]);
            byId = obj.getByName(outer2_1(outer2_2[23]).convertSurrogateToName(name, false));
            const obj2 = outer2_1(outer2_2[23]);
          }
          return byId;
        });
        const items = [];
        const item = mapped.forEach((arg0) => {
          if (null != arg0) {
            items.push(arg0);
          }
        });
        const newlyAddedEmojiForGuild = self.getNewlyAddedEmojiForGuild(arg0);
        let closure_2 = newlyAddedEmojiForGuild.map((id) => id.id);
        self.topEmojis = items.filter((id) => !closure_2.includes(id.id));
      }
      return self.topEmojis;
    }
  };
  items[15] = {
    key: "getNewlyAddedEmojiForGuild",
    value(arg0) {
      if (null == this.newlyAddedEmoji) {
        return outer1_31;
      } else {
        const newlyAddedEmoji = tmp.newlyAddedEmoji;
        let value = newlyAddedEmoji.get(arg0);
        if (null == value) {
          value = outer1_31;
        }
        return value;
      }
    }
  };
  items[16] = {
    key: "getEscapedCustomEmoticonNames",
    value() {
      return this.escapedEmoticonNames;
    }
  };
  items[17] = {
    key: "nameMatchesChain",
    value(arg0) {
      let closure_0 = arg0;
      const tmp = outer1_1(outer1_2[26]);
      return outer1_1(outer1_2[26])(this.getDisambiguatedEmoji()).filter((arg0) => {
        let name;
        let names;
        ({ names, name } = arg0);
        let someResult = null != names;
        if (someResult) {
          someResult = outer2_1(outer2_2[26]).some(names, callback);
          const obj = outer2_1(outer2_2[26]);
        }
        let tmp5 = null != name;
        if (tmp5) {
          tmp5 = callback(name);
        }
        let someResult1 = null != name;
        if (someResult1) {
          const obj2 = outer2_1(outer2_2[26]);
          someResult1 = obj2.some(outer2_1(outer2_2[38]).getTermsForEmoji(name), callback);
          const obj3 = outer2_1(outer2_2[38]);
        }
        if (!someResult) {
          someResult = tmp5;
        }
        if (!someResult) {
          someResult = someResult1;
        }
        return someResult;
      });
    }
  };
  let items1 = [
    {
      key: "get",
      value(guildId) {
        let tmp = guildId;
        if (undefined === guildId) {
          tmp = null;
        }
        let tmp2 = null != EmojiDisambiguations._lastInstance;
        if (tmp2) {
          tmp2 = EmojiDisambiguations._lastInstance.guildId === tmp;
        }
        if (!tmp2) {
          const prototype = EmojiDisambiguations.prototype;
          const tmp8 = new EmojiDisambiguations(tmp);
          EmojiDisambiguations._lastInstance = tmp8;
        }
        return EmojiDisambiguations._lastInstance;
      }
    },
    {
      key: "reset",
      value() {
        EmojiDisambiguations._lastInstance = null;
      }
    },
    {
      key: "resetFrequentlyUsed",
      value() {
        if (null != EmojiDisambiguations._lastInstance) {
          EmojiDisambiguations._lastInstance.frequentlyUsed = null;
        }
      }
    },
    {
      key: "resetFrequentlyUsedReactionEmojis",
      value() {
        if (null != EmojiDisambiguations._lastInstance) {
          EmojiDisambiguations._lastInstance.frequentlyUsedReactionEmojis = null;
          EmojiDisambiguations._lastInstance.frequentlyUsedReactionNamesAndIds = null;
        }
      }
    },
    {
      key: "clear",
      value(arg0) {
        let tmp = null != EmojiDisambiguations._lastInstance;
        if (tmp) {
          tmp = EmojiDisambiguations._lastInstance.guildId === arg0;
        }
        if (tmp) {
          EmojiDisambiguations._lastInstance = null;
        }
      }
    }
  ];
  return callback4(EmojiDisambiguations, items, items1);
})();
let closure_40 = tmp8;
tmp8._lastInstance = null;
let merged = Object.assign(createBaseEmojiFrecencyOptions(tmp8.resetFrequentlyUsed));
importDefaultResult2 = new importDefaultResult2({});
let closure_42 = (function createEmojiReactionFrecency(resetFrequentlyUsedReactionEmojis) {
  let tmp = importDefault(4214);
  const obj = {};
  const merged = Object.assign(createBaseEmojiFrecencyOptions(resetFrequentlyUsedReactionEmojis));
  obj["computeFrecency"] = function computeFrecency(arg0, score, maxTotalUse) {
    if (null == maxTotalUse.maxTotalUse) {
      return 0;
    } else {
      const _Math = Math;
      return Math.trunc(1000 * (arg0 / maxTotalUse.maxTotalUse * 0.2 + score / 1000 * 0.8));
    }
  };
  obj["calculateMaxTotalUse"] = true;
  tmp = new tmp(obj);
  return tmp;
})(tmp8.resetFrequentlyUsedReactionEmojis);
let tmp12 = ((PersistedStore) => {
  class EmojiStore {
    constructor() {
      self = this;
      tmp = outer1_8(this, EmojiStore);
      obj = outer1_4(EmojiStore);
      tmp2 = outer1_3;
      if (outer1_43()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(EmojiStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(pendingUsages) {
      const self = this;
      this.waitFor(outer1_10, outer1_14, outer1_15, outer1_16, outer1_17, outer1_12, outer1_20, outer1_18, outer1_11, outer1_21, outer1_13, outer1_19);
      if (null != pendingUsages) {
        if (null != pendingUsages.pendingUsages) {
          outer1_28.pendingUsages = pendingUsages.pendingUsages;
        }
        if (null != pendingUsages.emojiReactionPendingUsages) {
          outer1_28.emojiReactionPendingUsages = pendingUsages.emojiReactionPendingUsages;
        }
        if (null != pendingUsages.expandedSectionsByGuildIds) {
          const _Set = Set;
          const set = new Set(pendingUsages.expandedSectionsByGuildIds);
          outer1_28.expandedSectionsByGuildIds = set;
        }
      }
      const items = [outer1_13];
      self.syncWith(items, outer1_55);
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_28;
    }
  };
  items[1] = obj;
  obj = {
    key: "loadState",
    get() {
      return outer1_35;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasPendingUsage",
    value() {
      let tmp = outer1_28.pendingUsages.length > 0;
      if (!tmp) {
        tmp = outer1_28.emojiReactionPendingUsages.length > 0;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "expandedSectionsByGuildIds",
    get() {
      return outer1_28.expandedSectionsByGuildIds;
    }
  };
  items[5] = {
    key: "categories",
    get() {
      return outer1_36;
    }
  };
  items[6] = {
    key: "diversitySurrogate",
    get() {
      const defaultDiversitySurrogate = outer1_1(outer1_2[23]).getDefaultDiversitySurrogate();
      let str = "";
      if (null != defaultDiversitySurrogate) {
        str = defaultDiversitySurrogate;
      }
      return str;
    }
  };
  items[7] = {
    key: "emojiFrecencyWithoutFetchingLatest",
    get() {
      return outer1_41;
    }
  };
  items[8] = {
    key: "emojiReactionFrecencyWithoutFetchingLatest",
    get() {
      return outer1_42;
    }
  };
  items[9] = {
    key: "getGuildEmoji",
    value(arg0) {
      outer1_48();
      let tmp2;
      if (null != arg0) {
        tmp2 = outer1_37[arg0];
      }
      let emojis;
      if (null != tmp2) {
        emojis = tmp2.emojis;
      }
      if (null == emojis) {
        emojis = outer1_32;
      }
      return emojis;
    }
  };
  items[10] = {
    key: "getHiddenEmojiIds",
    value(arg0) {
      outer1_48();
      let tmp2;
      if (null != arg0) {
        tmp2 = outer1_37[arg0];
      }
      let hiddenEmojiIds;
      if (null != tmp2) {
        hiddenEmojiIds = tmp2.hiddenEmojiIds;
      }
      if (null == hiddenEmojiIds) {
        hiddenEmojiIds = outer1_33;
      }
      return hiddenEmojiIds;
    }
  };
  items[11] = {
    key: "getUsableGuildEmoji",
    value(arg0) {
      let usableEmojis;
      outer1_48();
      if (null != outer1_37[arg0]) {
        usableEmojis = tmp3.usableEmojis;
      }
      if (null == usableEmojis) {
        usableEmojis = outer1_32;
      }
      return usableEmojis;
    }
  };
  items[12] = {
    key: "getGuilds",
    value() {
      return outer1_37;
    }
  };
  items[13] = {
    key: "getDisambiguatedEmojiContext",
    value(arg0) {
      outer1_48();
      return outer1_40.get(arg0);
    }
  };
  items[14] = {
    key: "getSearchResultsOrder",
    value(items, str) {
      let _isNativeReflectConstruct;
      let closure_4;
      let closure_5;
      let closure_0 = arg3;
      let closure_1 = arg4;
      function score(uniqueName) {
        if (null != uniqueName.uniqueName) {
          let str2 = uniqueName.names[0];
        } else if (closure_5) {
          str2 = str.split("~")[0];
        } else {
          str2 = str;
        }
        let id = str2;
        if (null == uniqueName.uniqueName) {
          id = uniqueName.id;
        }
        if (null != str2) {
          if (null != id) {
            const formatted = str2.toLowerCase();
            let num3 = 0;
            if (formatted === formatted) {
              num3 = 4;
            }
            if (callback(formatted)) {
              let num4 = 2;
            } else {
              num4 = 0;
            }
            let num6 = 1;
            if (!callback2(str2)) {
              let num7 = 0;
              if (closure_4) {
                num7 = 0;
                if (callback3(str2)) {
                  num7 = 0.75;
                }
              }
              num6 = num7;
            }
            let num8 = 0;
            if (_isNativeReflectConstruct) {
              num8 = 0;
              if (favoriteEmojiWithoutFetchingLatest.isFavoriteEmojiWithoutFetchingLatest(uniqueName)) {
                num8 = 0.5;
              }
            }
            const sum = 1 + num3 + num4 + num6 + num8;
            if (closure_0 === outer2_23.REACTION) {
              let score = outer2_42.getScore(id);
            } else {
              score = outer2_41.getScore(id);
            }
            let result = sum;
            if (null != score) {
              result = sum * (score / 100);
            }
            return result;
          }
        }
        return 0;
      }
      let formatted = str.toLowerCase();
      let obj = outer1_1(outer1_2[35]);
      const escapeResult = obj.escape(formatted);
      const formatted1 = formatted.slice(0, 1).toUpperCase();
      let sum = formatted1 + formatted.slice(1);
      str = formatted.slice(0, 1);
      const escapeResult1 = outer1_1(outer1_2[35]).escape(sum);
      let orderByResult = items;
      if (items.length > 0) {
        obj = { location: "getSearchResultsOrder" };
        const config = outer1_1(outer1_2[42]).getConfig(obj);
        ({ boostFavorites: _isNativeReflectConstruct, boostAtEnd: closure_4, boostsIgnoreDisambiguators: closure_5 } = config);
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        const regExp = new RegExp("^" + escapeResult, "i");
        const _RegExp2 = RegExp;
        const _HermesInternal2 = HermesInternal;
        const regExp1 = new RegExp("" + escapeResult + "$", "i");
        const _RegExp3 = RegExp;
        const _HermesInternal3 = HermesInternal;
        let regExp2 = new RegExp("(^|_|[A-Z])" + escapeResult + "s?([A-Z]|_|$)");
        const _RegExp4 = RegExp;
        const _HermesInternal4 = HermesInternal;
        const regExp3 = new RegExp("(^|_|[A-Z])" + escapeResult + "s?([A-Z]|_|$)|(^|_|[a-z])" + escapeResult1 + "s?([A-Z]|_|$)");
        if (config.boostCapitalizedWords) {
          regExp2 = regExp3;
        }
        const test = regExp2.test;
        let _slicedToArray = test.bind(regExp2);
        const test2 = regExp.test;
        let _classCallCheck = test2.bind(regExp);
        const test3 = regExp1.test;
        let _defineProperties = test3.bind(regExp1);
        const obj4 = outer1_1(outer1_2[42]);
        items = [
          (uniqueName) => score(uniqueName),
          (names) => {
              if (null != names.names) {
                let name = names.names[0];
              } else {
                name = names.name;
              }
              return name;
            }
        ];
        orderByResult = outer1_1(outer1_2[26]).orderBy(items, items, ["desc", "asc"]);
        const obj3 = outer1_1(outer1_2[26]);
      }
      let substr = orderByResult;
      if (arg2 > 0) {
        substr = orderByResult.slice(0, arg2);
      }
      return substr;
    }
  };
  items[15] = {
    key: "searchWithoutFetchingLatest",
    value(channel) {
      let _isNativeReflectConstruct;
      let count;
      let matchComparator;
      let query;
      const self = this;
      channel = channel.channel;
      ({ query, count } = channel);
      if (count === undefined) {
        count = 0;
      }
      const intention = channel.intention;
      let flag = channel.includeExternalGuilds;
      if (flag === undefined) {
        flag = true;
      }
      ({ matchComparator, showOnlyUnicode: _isNativeReflectConstruct } = channel);
      let regExp;
      outer1_48();
      const formatted = query.toLowerCase();
      const replaced = formatted.replaceAll(/[ _]/g, "");
      outer1_1(outer1_2[35]);
      if (null == matchComparator) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        regExp = new RegExp("" + tmp4, "i");
        matchComparator = function r(str) {
          return regExp.test(str.replaceAll("_", ""));
        };
      }
      let guildId = null;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      const value = outer1_40.get(guildId);
      const reduced = value.nameMatchesChain(matchComparator).reduce((locked, emoji) => {
        let obj = outer2_1(outer2_2[43]);
        obj = { emoji, channel, intention, forceIncludeExternalGuilds: flag };
        const emojiUnavailableReason = obj.getEmojiUnavailableReason(obj);
        if (emojiUnavailableReason === outer2_22.PREMIUM_LOCKED) {
          if (!_isNativeReflectConstruct) {
            locked = locked.locked;
            locked.push(emoji);
          }
          return locked;
        }
        let tmp4 = null != emojiUnavailableReason;
        if (!tmp4) {
          let tmp5 = _isNativeReflectConstruct;
          if (_isNativeReflectConstruct) {
            tmp5 = emoji.type !== EmojiStore(outer2_2[44]).EmojiTypes.UNICODE;
          }
          tmp4 = tmp5;
        }
        if (!tmp4) {
          const unlocked = locked.unlocked;
          unlocked.push(emoji);
        }
      }, { unlocked: [], locked: [] });
      let obj = { unlocked: self.getSearchResultsOrder(reduced.unlocked, query, count, intention, value), locked: self.getSearchResultsOrder(reduced.locked, query, 0, intention, value) };
      return obj;
    }
  };
  items[16] = {
    key: "getUsableCustomEmojiById",
    value(arg0) {
      outer1_48();
      return outer1_46(arg0);
    }
  };
  items[17] = {
    key: "getCustomEmojiById",
    value(arg0) {
      outer1_48();
      const tmp2 = outer1_47()[arg0];
      let tmp3;
      if (null != tmp2) {
        let emoji;
        if (null != outer1_37[tmp2]) {
          emoji = obj.getEmoji(arg0);
        }
        if (null != emoji) {
          tmp3 = emoji;
        }
      }
      return tmp3;
    }
  };
  items[18] = {
    key: "getTopEmoji",
    value(arg0) {
      if (null == arg0) {
        let topEmojiWithoutFetchingLatest = outer1_31;
      } else {
        outer1_48();
        const value = outer1_40.get(arg0);
        topEmojiWithoutFetchingLatest = value.getTopEmojiWithoutFetchingLatest(arg0);
      }
      return topEmojiWithoutFetchingLatest;
    }
  };
  items[19] = {
    key: "getNewlyAddedEmoji",
    value(arg0) {
      if (null == arg0) {
        let newlyAddedEmojiForGuild = outer1_31;
      } else {
        outer1_48();
        const value = outer1_40.get(arg0);
        newlyAddedEmojiForGuild = value.getNewlyAddedEmojiForGuild(arg0);
      }
      return newlyAddedEmojiForGuild;
    }
  };
  items[20] = {
    key: "getTopEmojisMetadata",
    value(arg0) {
      return outer1_39.get(arg0);
    }
  };
  items[21] = {
    key: "hasUsableEmojiInAnyGuild",
    value() {
      outer1_48();
      const keys = outer1_1(outer1_2[25]).keys(outer1_37);
      return keys.some((arg0) => outer2_37[arg0].usableEmojis.length > 0);
    }
  };
  items[22] = {
    key: "hasFavoriteEmojis",
    value(arg0) {
      const value = outer1_40.get(arg0);
      let tmp2 = null != value;
      if (tmp2) {
        tmp2 = value.favoriteEmojisWithoutFetchingLatest.length > 0;
      }
      return tmp2;
    }
  };
  return callback4(EmojiStore, items);
})(require("initialize").PersistedStore);
tmp12.displayName = "EmojiStore";
tmp12.persistKey = "EmojiStoreV2";
const items2 = [
  (arg0) => {
    const merged = Object.assign(arg0);
    return {};
  }
];
tmp12.migrations = items2;
tmp12 = new tmp12(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    obj.pendingUsages = [];
    obj.emojiReactionPendingUsages = [];
  },
  BACKGROUND_SYNC: function handleBackgroundSync() {
    deleteEverything();
  },
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let done;
    deleteEverything();
    const tmp2 = _createForOfIteratorHelperLoose(guilds.guilds);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = updateGuildEmoji;
        let tmp4 = updateGuildEmoji(iter.value.id);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    if (0 === guilds.unavailableGuilds.length) {
      guilds = guilds.guilds;
      if (guilds.every((emojis) => "full_sync" === emojis.emojis.op)) {
        let Unloaded = obj.Loaded;
      }
      rebuildEmojis();
    }
    Unloaded = obj.Unloaded;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(emojis) {
    deleteEverything();
    for (const key10006 in arg0.emojis) {
      let tmp3 = key10006;
      let tmp4 = updateGuildEmoji;
      let tmp5 = updateGuildEmoji(key10006);
      continue;
    }
    const Loaded = obj.Loaded;
    rebuildEmojis();
  },
  CACHED_EMOJIS_LOADED: function handleCachedEmojisLoaded(emojis) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(emojis.emojis);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = callback2;
        let first = callback2(iter.value, 1)[0];
        let tmp4 = member;
        if (member.isMember(first)) {
          let tmp5 = updateGuildEmoji;
          let tmp6 = updateGuildEmoji(first);
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
    rebuildEmojis();
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(user) {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (user.user.id === id) {
      updateGuildEmoji(user.guildId);
      rebuildEmojis();
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateGuildEmoji(guild.guild.id);
    rebuildEmojis();
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    updateGuildEmoji(guild.guild.id);
    rebuildEmojis();
  },
  GUILD_EMOJIS_UPDATE: function handleGuildEmojiUpdated(guildId) {
    updateGuildEmoji(guildId.guildId);
    rebuildEmojis();
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    deleteGuildEmoji(guild.id);
    map.delete(guild.id);
    rebuildEmojis();
  },
  MESSAGE_REACTION_ADD: function handleAddReaction(optimistic) {
    let iter;
    if (optimistic.optimistic) {
      if (null != optimistic.emoji.id) {
        if ("0" !== optimistic.emoji.id) {
          let emoji = optimistic.emoji;
        }
        if (null == emoji) {
          return false;
        } else {
          const items = [emoji];
          if (null != items) {
            const tmp16 = _createForOfIteratorHelperLoose(items);
            let iter2 = tmp16();
            if (!iter2.done) {
              do {
                let value = iter2.value;
                let name = value.id;
                if (null == name) {
                  name = value.uniqueName;
                }
                if (null == name) {
                  name = value.name;
                }
                if (null != name) {
                  let tmp4 = closure_42;
                  let trackResult = closure_42.track(name);
                  let tmp6 = obj;
                  let prop = obj.emojiReactionPendingUsages;
                  obj = { key: name };
                  let _Date = Date;
                  obj.timestamp = Date.now();
                  let arr = prop.push(obj);
                }
                iter = tmp16();
                iter2 = iter;
              } while (!iter.done);
            }
            let tmp8 = items.length > 0;
            if (tmp8) {
              tmp8 = Unloaded === obj.Loaded;
            }
            if (tmp8) {
              closure_42.compute();
            }
          }
          const items1 = [emoji];
          trackUsage(items1);
        }
      }
      obj = importDefault(3771);
      emoji = obj.getByName(importDefault(3771).convertSurrogateToName(optimistic.emoji.name, false));
      const obj2 = importDefault(3771);
    } else {
      return false;
    }
  },
  EMOJI_TRACK_USAGE: function handleTrackUsage(emojiUsed) {
    trackUsage(emojiUsed.emojiUsed);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    const obj = importDefault(4999);
    obj.setEmojiLocale(locale.locale);
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        obj.pendingUsages = [];
        obj.emojiReactionPendingUsages = [];
      }
    }
    return false;
  },
  GUILD_ROLE_CREATE: handleRoleUpdate,
  GUILD_ROLE_UPDATE: handleRoleUpdate,
  TOP_EMOJIS_FETCH_SUCCESS: function handleTopEmojisLoaded(topEmojisMetadata) {
    topEmojisMetadata = topEmojisMetadata.topEmojisMetadata;
    const obj = { emojiIds: topEmojisMetadata.map((emojiId) => emojiId.emojiId) };
    const tmp = importDefault(3712);
    const tmpResult = importDefault(3712)(importDefault(3712)());
    obj.topEmojisTTL = importDefault(3712)(importDefault(3712)()).add(1, "days").valueOf();
    const result = map.set(topEmojisMetadata.guildId, obj);
  },
  TOGGLE_GUILD_EXPANDED_STATE: function toggleGuildExpandedState(guildId) {
    guildId = guildId.guildId;
    const set = new Set(obj.expandedSectionsByGuildIds);
    const expandedSectionsByGuildIds = obj.expandedSectionsByGuildIds;
    if (expandedSectionsByGuildIds.has(guildId)) {
      set.delete(guildId);
    } else {
      set.add(guildId);
    }
    obj = {};
    const merged = Object.assign(obj);
    obj["expandedSectionsByGuildIds"] = set;
  }
});
let result = set.fileFinishedImporting("modules/emojis/EmojiStore.tsx");

export default tmp12;
export const LoadState = obj;
export const EmojiDisambiguations = tmp8;
