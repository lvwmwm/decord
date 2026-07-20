// Module ID: 5260
// Function ID: 44535
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5260 (_isNativeReflectConstruct)
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
function getUsableEmoji(arg0) {
  const tmp = getEmojiToGroupId()[arg0];
  let tmp2;
  if (null != tmp) {
    let usableEmoji;
    if (null != closure_37[tmp]) {
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
      let tmp5 = closure_44;
      let tmp6 = closure_37;
      let obj = closure_37[key10008];
      let tmp7 = closure_44(obj.emojiIds());
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
  let databaseResult;
  if (Loaded === closure_34.Unloaded) {
    databaseResult = callback(closure_2[28]).database();
    if (null != databaseResult) {
      let Loaded = closure_34.Loading;
      const tmp12 = yield databaseResult(closure_2[29]).tryLoadOrResetCacheGatewayAsync("EmojiStore.loadSavedEmojis", () => callback(closure_2[30]).timeAsync("\u{1F4BE}", "loadSavedEmojis", () => callback(closure_2[31]).getAsync(closure_0)));
      Loaded = closure_34.Loaded;
      if (null != tmp12) {
        let obj = callback(closure_2[32]);
        obj = { type: "CACHED_EMOJIS_LOADED", emojis: tmp12 };
        obj.dispatch(obj);
      }
      const obj4 = databaseResult(closure_2[29]);
    }
    const obj3 = callback(closure_2[28]);
  }
}
function createBaseEmojiFrecencyOptions(resetFrequentlyUsed) {
  const arg1 = resetFrequentlyUsed;
  return {
    computeBonus() {
      return 100;
    },
    lookupKey(emojiName) {
      let byName = callback(closure_2[23]).getByName(emojiName);
      if (null == byName) {
        byName = callback2(emojiName);
      }
      return byName;
    },
    afterCompute() {
      arg0();
      const items = [...closure_27];
      if (!obj.some(closure_37, (usableEmojis) => usableEmojis.usableEmojis.length > 0)) {
        items.splice(closure_27.indexOf(constants.CUSTOM), 1);
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
  if (null != closure_37[id]) {
    delete r0[r1];
  }
}
function rebuildEmojis() {
  let closure_38 = null;
  tmp8.reset();
  if (Unloaded === obj.Loaded) {
    importDefaultResult2.compute();
    closure_42.compute();
  }
}
function updateGuildEmoji(guildId) {
  deleteGuildEmoji(guildId);
  tmp8.clear(guildId);
  const guildEmojis = guildEmojis.getGuildEmojis(guildId);
  if (null != guildEmojis) {
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      const prototype = ctor.prototype;
      const tmp14 = new ctor(guildId, currentUser.id, guildEmojis, arg1(dependencyMap[39]).canUseRoleSubscriptionIAP(guildId));
      closure_37[guildId] = tmp14;
      const obj = arg1(dependencyMap[39]);
      const tmp8 = closure_37;
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
    const obj = importDefault(dependencyMap[23]);
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
  importDefaultResult2.overwriteHistory(importDefault(dependencyMap[26]).mapValues(emojis, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), obj.pendingUsages);
  const obj4 = importDefault(dependencyMap[26]);
  closure_42.overwriteHistory(importDefault(dependencyMap[26]).mapValues(emojis1, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj["recentUses"] = mapped.filter((arg0) => arg0 > 0);
    return obj;
  }), obj.emojiReactionPendingUsages);
  const obj5 = importDefault(dependencyMap[26]);
  if (obj6.isEmpty(emojis)) {
    if (obj7.isEmpty(obj.pendingUsages)) {
      if (closure_13.hasLoaded(UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)) {
        const items = [];
        let num2 = 0;
        if (0 < items.length) {
          do {
            let tmp13 = closure_41;
            let trackResult = closure_41.track(items[num2]);
            num2 = num2 + 1;
            length = items.length;
          } while (num2 < length);
        }
      }
    }
    const obj7 = importDefault(dependencyMap[26]);
    const tmp8 = importDefault;
  }
  const obj6 = importDefault(dependencyMap[26]);
  if (obj8.isEmpty(emojis1)) {
    if (obj9.isEmpty(obj.emojiReactionPendingUsages)) {
      if (closure_13.hasLoaded(UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS)) {
        const items1 = [];
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
    const obj9 = importDefault(dependencyMap[26]);
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
          let tmp = closure_41;
          let trackResult = closure_41.track(name);
          let tmp3 = closure_28;
          let pendingUsages = closure_28.pendingUsages;
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
  const role = role.getRole(guildId, guildId.role.id);
  if (null != role) {
    if (obj.isSubscriptionRole(role)) {
      updateGuildEmoji(guildId);
      rebuildEmojis();
    }
    const obj = arg1(dependencyMap[40]);
  }
  return false;
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
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = importDefault(dependencyMap[17]);
let closure_21 = importDefault(dependencyMap[18]);
({ EmojiDisabledReasons: closure_22, EmojiIntention: closure_23 } = arg1(dependencyMap[19]));
const NULL_STRING_GUILD_ID = arg1(dependencyMap[20]).NULL_STRING_GUILD_ID;
const EmojiCategories = arg1(dependencyMap[21]).EmojiCategories;
const UserSettingsTypes = arg1(dependencyMap[22]).UserSettingsTypes;
const items = [EmojiCategories.TOP_GUILD_EMOJI.toString(), EmojiCategories.FAVORITES.toString(), EmojiCategories.RECENT.toString(), EmojiCategories.CUSTOM.toString()];
const str = EmojiCategories.TOP_GUILD_EMOJI;
const str2 = EmojiCategories.FAVORITES;
const str3 = EmojiCategories.RECENT;
const str4 = EmojiCategories.CUSTOM;
const tmp2 = arg1(dependencyMap[19]);
const combined = items.concat(importDefault(dependencyMap[23]).getCategories());
let obj = { pendingUsages: [], emojiReactionPendingUsages: [] };
const importDefaultResult = importDefault(dependencyMap[23]);
obj.expandedSectionsByGuildIds = new Set();
let closure_29 = () => {
  class GuildEmojis {
    constructor(arg0, arg1, arg2) {
      flag = arg3;
      self = this;
      if (arg3 === undefined) {
        flag = false;
      }
      tmp = closure_8(self, GuildEmojis);
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
  const arg1 = GuildEmojis;
  let obj = {
    key: "getEmoji",
    value(arg0) {
      return this._emojiMap[arg0];
    }
  };
  const items = [obj, , , , , , , , ];
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
      const GuildEmojis = roles;
      if (0 === roles.roles.length) {
        return true;
      } else {
        const member = member.getMember(self.id, self._userId);
        let tmp8 = null != member;
        if (tmp8) {
          roles = member.roles;
          const tmp = !roles.some((arg0) => {
            const roles = arg0.roles;
            return roles.includes(arg0);
          });
          let tmp2 = !tmp;
          if (tmp) {
            const tmp5 = !GuildEmojis(closure_2[24]).isPurchasableRoleSubscriptionEmoji(roles);
            let tmp6 = !tmp5;
            if (!tmp5) {
              let _canSeeServerSubIAP = self._canSeeServerSubIAP;
              if (!_canSeeServerSubIAP) {
                _canSeeServerSubIAP = userIsAdmin.getUserIsAdmin(roles.guildId);
              }
              tmp6 = _canSeeServerSubIAP;
            }
            tmp2 = tmp6;
            const obj = GuildEmojis(closure_2[24]);
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
      return callback(closure_2[25]).keys(this._emojiMap);
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
        const tmp6 = callback3(self.emojis);
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
        self._usableEmojis = callback(closure_2[26]).sortBy(items, (name) => name.name);
        self._hiddenEmojiIds = set;
        const obj2 = callback(closure_2[26]);
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
  return callback3(GuildEmojis, items);
}();
const set = new Set();
const timestamp = Date.now();
let closure_30 = importDefault(dependencyMap[25]).fromTimestamp(timestamp - 60 * importDefault(dependencyMap[27]).Millis.DAY);
let closure_31 = [];
let closure_32 = [];
const set1 = new Set();
obj = { Unloaded: 0, [0]: "Unloaded", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded" };
const Unloaded = obj.Unloaded;
const items1 = [...combined];
let closure_37 = {};
let closure_38 = {};
const map = new Map();
const tmp8 = () => {
  class EmojiDisambiguations {
    constructor(arg0) {
      self = this;
      EmojiDisambiguations = this;
      addGuildEmoji = function addGuildEmoji(guildId) {
        let tmp = guildId;
        if (null == guildId) {
          tmp = closure_24;
        }
        if (null != closure_37[tmp]) {
          map7(items[26]).each(tmp3.usableEmojis, disambiguateEmoji);
          const obj = map7(items[26]);
          map7(items[26]).each(tmp3.emoticons, disambiguateEmoticon);
          const obj2 = map7(items[26]);
        }
      };
      tmp = closure_8(this, EmojiDisambiguations);
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
            const result = map7(items[23]).convertSurrogateToBase(id.surrogates);
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
        if (obj2.compare(name.id, closure_30) >= 0) {
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
          items.push(map7(items[35]).escape(name.name));
          const emoticonsByName2 = self.emoticonsByName;
          const result = emoticonsByName2.set(name.name, name);
          const obj = map7(items[35]);
        }
      };
      arr2 = Map(Map[23]);
      item = arr2.forEach((names) => {
        const self = names;
        names = names.names;
        const substr = names.slice(1);
        const item = substr.forEach((self) => {
          const unicodeAliases = self.unicodeAliases;
          return unicodeAliases.set(self, self.name);
        });
        const value = map7.get(names.name);
        let num = 0;
        if (null != value) {
          num = value;
        }
        map7(items[34])(0 === num, "Expected existing count to be 0");
        const result = map7.set(names.name, num + 1);
        const emojisByName = self.emojisByName;
        const result1 = emojisByName.set(names.name, names);
        const disambiguatedEmoji = self.disambiguatedEmoji;
        disambiguatedEmoji.push(names);
      });
      addGuildEmojiResult = addGuildEmoji(this.guildId);
      newlyAddedEmoji = this.newlyAddedEmoji;
      tmp12 = closure_44(newlyAddedEmoji.keys());
      iter = tmp12();
      if (!iter.done) {
        do {
          value = iter.value;
          newlyAddedEmoji2 = self.newlyAddedEmoji;
          value = newlyAddedEmoji2.get(value);
          if (null != value) {
            newlyAddedEmoji4 = self.newlyAddedEmoji;
            sorted = value.sort((id, id2) => map7(items[25]).compare(id2.id, id.id));
            result = newlyAddedEmoji4.set(value, sorted.slice(0, 3));
          } else {
            newlyAddedEmoji3 = self.newlyAddedEmoji;
            result1 = newlyAddedEmoji3.set(value, []);
          }
          iter2 = tmp12();
          iter = iter2;
        } while (!iter2.done);
      }
      flattenedGuildIds = closure_18.getFlattenedGuildIds();
      item1 = flattenedGuildIds.forEach((guildId) => {
        if (guildId !== self.guildId) {
          addGuildEmoji(guildId);
        }
      });
      self.escapedEmoticonNames = items.join("|");
      return;
    }
  }
  const arg1 = EmojiDisambiguations;
  let obj = {
    key: "getDisambiguatedEmoji",
    value() {
      return this.disambiguatedEmoji;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
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
      const self = this;
      const EmojiDisambiguations = this;
      if (null != this.frequentlyUsed) {
        return self.frequentlyUsed;
      } else {
        const frequently = frequently.frequently;
        const mapped = frequently.map((id) => {
          if (null != id.id) {
            let byId = self.getById(id.id);
          } else {
            byId = callback(closure_2[23]).getByName(id.name);
            const obj = callback(closure_2[23]);
          }
          return byId;
        });
        const found = mapped.filter(EmojiDisambiguations(closure_2[36]).isNotNullish);
        const items = [];
        HermesBuiltin.arraySpread(callback(closure_2[37])(found).values(), 0);
        self.frequentlyUsed = items;
        return self.frequentlyUsed;
      }
    }
  };
  items[8] = {
    key: "rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest",
    value() {
      const self = this;
      const EmojiDisambiguations = this;
      if (null != this.frequentlyUsedReactionEmojis) {
        if (null != self.frequentlyUsedReactionNamesAndIds) {
          let obj = {};
          ({ frequentlyUsedReactionEmojis: obj3.frequentlyUsedReactionEmojis, frequentlyUsedReactionNamesAndIds: obj3.frequentlyUsedReactionNamesAndIds } = self);
          return obj;
        }
      }
      const frequently = frequently2.frequently;
      const mapped = frequently.map((id) => {
        if (null != id.id) {
          let byId = self.getById(id.id);
        } else {
          byId = callback(closure_2[23]).getByName(id.name);
          const obj = callback(closure_2[23]);
        }
        return byId;
      });
      const found = mapped.filter(EmojiDisambiguations(closure_2[36]).isNotNullish);
      obj = callback(closure_2[37])(found);
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
        const result = callback(closure_2[23]).convertSurrogateToBase(id.surrogates);
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
      const self = this;
      const EmojiDisambiguations = this;
      if (null != this.favorites) {
        if (null != self.favoriteNamesAndIds) {
          let obj = {};
          ({ favorites: obj3.favorites, favoriteNamesAndIds: obj3.favoriteNamesAndIds } = self);
          return obj;
        }
      }
      const favoriteEmojis = obj.frecencyWithoutFetchingLatest.favoriteEmojis;
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
          byId = callback(closure_2[23]).getByName(emojiName);
          const obj = callback(closure_2[23]);
        }
        return byId;
      });
      const found = mapped.filter(EmojiDisambiguations(closure_2[36]).isNotNullish);
      obj = callback(closure_2[37])(found);
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
      const EmojiDisambiguations = new Set();
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
      const self = this;
      const EmojiDisambiguations = this;
      if (null == this.topEmojis) {
        const value = closure_39.get(arg0);
        let topEmojiIdsByGuildId = topEmojiIdsByGuildId.getTopEmojiIdsByGuildId(arg0);
        if (null == value) {
          if (null == topEmojiIdsByGuildId) {
            return closure_31;
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
            const obj = items(closure_2[23]);
            byId = obj.getByName(items(closure_2[23]).convertSurrogateToName(name, false));
            const obj2 = items(closure_2[23]);
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
        return closure_31;
      } else {
        const newlyAddedEmoji = tmp.newlyAddedEmoji;
        let value = newlyAddedEmoji.get(arg0);
        if (null == value) {
          value = closure_31;
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
      const EmojiDisambiguations = arg0;
      const tmp = callback(closure_2[26]);
      return callback(closure_2[26])(this.getDisambiguatedEmoji()).filter((arg0) => {
        let name;
        let names;
        ({ names, name } = arg0);
        let someResult = null != names;
        if (someResult) {
          someResult = callback(closure_2[26]).some(names, arg0);
          const obj = callback(closure_2[26]);
        }
        let tmp5 = null != name;
        if (tmp5) {
          tmp5 = arg0(name);
        }
        let someResult1 = null != name;
        if (someResult1) {
          const obj2 = callback(closure_2[26]);
          someResult1 = obj2.some(callback(closure_2[38]).getTermsForEmoji(name), arg0);
          const obj3 = callback(closure_2[38]);
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
  const items1 = [
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
  return callback3(EmojiDisambiguations, items, items1);
}();
tmp8._lastInstance = null;
let importDefaultResult2 = importDefault(dependencyMap[33]);
const merged = Object.assign(createBaseEmojiFrecencyOptions(tmp8.resetFrequentlyUsed));
importDefaultResult2 = new importDefaultResult2({});
let closure_42 = function createEmojiReactionFrecency(resetFrequentlyUsedReactionEmojis) {
  let tmp = importDefault(dependencyMap[33]);
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
}(tmp8.resetFrequentlyUsedReactionEmojis);
let tmp12 = (PersistedStore) => {
  class EmojiStore {
    constructor() {
      self = this;
      tmp = closure_8(this, EmojiStore);
      obj = closure_4(EmojiStore);
      tmp2 = closure_3;
      if (closure_43()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = EmojiStore;
  callback(EmojiStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(pendingUsages) {
      const self = this;
      this.waitFor(closure_10, closure_14, closure_15, closure_16, closure_17, closure_12, closure_20, closure_18, closure_11, closure_21, closure_13, closure_19);
      if (null != pendingUsages) {
        if (null != pendingUsages.pendingUsages) {
          closure_28.pendingUsages = pendingUsages.pendingUsages;
        }
        if (null != pendingUsages.emojiReactionPendingUsages) {
          closure_28.emojiReactionPendingUsages = pendingUsages.emojiReactionPendingUsages;
        }
        if (null != pendingUsages.expandedSectionsByGuildIds) {
          const _Set = Set;
          const set = new Set(pendingUsages.expandedSectionsByGuildIds);
          closure_28.expandedSectionsByGuildIds = set;
        }
      }
      const items = [closure_13];
      self.syncWith(items, closure_55);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_28;
    }
  };
  items[1] = obj;
  obj = {
    key: "loadState",
    get() {
      return closure_35;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasPendingUsage",
    value() {
      let tmp = closure_28.pendingUsages.length > 0;
      if (!tmp) {
        tmp = closure_28.emojiReactionPendingUsages.length > 0;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "expandedSectionsByGuildIds",
    get() {
      return closure_28.expandedSectionsByGuildIds;
    }
  };
  items[5] = {
    key: "categories",
    get() {
      return closure_36;
    }
  };
  items[6] = {
    key: "diversitySurrogate",
    get() {
      const defaultDiversitySurrogate = callback(closure_2[23]).getDefaultDiversitySurrogate();
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
      return closure_41;
    }
  };
  items[8] = {
    key: "emojiReactionFrecencyWithoutFetchingLatest",
    get() {
      return closure_42;
    }
  };
  items[9] = {
    key: "getGuildEmoji",
    value(arg0) {
      callback7();
      let tmp2;
      if (null != arg0) {
        tmp2 = closure_37[arg0];
      }
      let emojis;
      if (null != tmp2) {
        emojis = tmp2.emojis;
      }
      if (null == emojis) {
        emojis = closure_32;
      }
      return emojis;
    }
  };
  items[10] = {
    key: "getHiddenEmojiIds",
    value(arg0) {
      callback7();
      let tmp2;
      if (null != arg0) {
        tmp2 = closure_37[arg0];
      }
      let hiddenEmojiIds;
      if (null != tmp2) {
        hiddenEmojiIds = tmp2.hiddenEmojiIds;
      }
      if (null == hiddenEmojiIds) {
        hiddenEmojiIds = closure_33;
      }
      return hiddenEmojiIds;
    }
  };
  items[11] = {
    key: "getUsableGuildEmoji",
    value(arg0) {
      let usableEmojis;
      callback7();
      if (null != closure_37[arg0]) {
        usableEmojis = tmp3.usableEmojis;
      }
      if (null == usableEmojis) {
        usableEmojis = closure_32;
      }
      return usableEmojis;
    }
  };
  items[12] = {
    key: "getGuilds",
    value() {
      return closure_37;
    }
  };
  items[13] = {
    key: "getDisambiguatedEmojiContext",
    value(arg0) {
      callback7();
      return store.get(arg0);
    }
  };
  items[14] = {
    key: "getSearchResultsOrder",
    value(items, str) {
      const EmojiStore = arg3;
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
            if (closure_3) {
              num8 = 0;
              if (arg4.isFavoriteEmojiWithoutFetchingLatest(uniqueName)) {
                num8 = 0.5;
              }
            }
            const sum = 1 + num3 + num4 + num6 + num8;
            if (arg3 === constants.REACTION) {
              let score = score2.getScore(id);
            } else {
              score = score.getScore(id);
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
      const formatted = str.toLowerCase();
      let obj = arg4(formatted[35]);
      const escapeResult = obj.escape(formatted);
      const formatted1 = formatted.slice(0, 1).toUpperCase();
      const sum = formatted1 + formatted.slice(1);
      str = formatted.slice(0, 1);
      const escapeResult1 = arg4(formatted[35]).escape(sum);
      let orderByResult = items;
      if (items.length > 0) {
        obj = { location: "getSearchResultsOrder" };
        const config = arg4(formatted[42]).getConfig(obj);
        ({ boostFavorites: closure_3, boostAtEnd: closure_4, boostsIgnoreDisambiguators: closure_5 } = config);
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
        let closure_6 = test.bind(regExp2);
        const test2 = regExp.test;
        let closure_7 = test2.bind(regExp);
        const test3 = regExp1.test;
        let closure_8 = test3.bind(regExp1);
        const obj4 = arg4(formatted[42]);
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
        orderByResult = arg4(formatted[26]).orderBy(items, items, []);
        const obj3 = arg4(formatted[26]);
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
      let count;
      let matchComparator;
      let query;
      const self = this;
      channel = channel.channel;
      const EmojiStore = channel;
      ({ query, count } = channel);
      if (count === undefined) {
        count = 0;
      }
      const intention = channel.intention;
      let flag = channel.includeExternalGuilds;
      if (flag === undefined) {
        flag = true;
      }
      ({ matchComparator, showOnlyUnicode: closure_3 } = channel);
      let regExp;
      callback7();
      const formatted = query.toLowerCase();
      const replaced = formatted.replaceAll(/[ _]/g, "");
      intention(flag[35]);
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
      const value = store.get(guildId);
      const reduced = value.nameMatchesChain(matchComparator).reduce((locked, emoji) => {
        let obj = intention(flag[43]);
        obj = { emoji, channel, intention, forceIncludeExternalGuilds: flag };
        const emojiUnavailableReason = obj.getEmojiUnavailableReason(obj);
        if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
          if (!closure_3) {
            locked = locked.locked;
            locked.push(emoji);
          }
          return locked;
        }
        let tmp4 = null != emojiUnavailableReason;
        if (!tmp4) {
          let tmp5 = closure_3;
          if (closure_3) {
            tmp5 = emoji.type !== channel(flag[44]).EmojiTypes.UNICODE;
          }
          tmp4 = tmp5;
        }
        if (!tmp4) {
          const unlocked = locked.unlocked;
          unlocked.push(emoji);
        }
      }, { unlocked: [], locked: [] });
      const obj = { unlocked: self.getSearchResultsOrder(reduced.unlocked, query, count, intention, value), locked: self.getSearchResultsOrder(reduced.locked, query, 0, intention, value) };
      return obj;
    }
  };
  items[16] = {
    key: "getUsableCustomEmojiById",
    value(arg0) {
      callback7();
      return callback5(arg0);
    }
  };
  items[17] = {
    key: "getCustomEmojiById",
    value(arg0) {
      callback7();
      const tmp2 = callback6()[arg0];
      let tmp3;
      if (null != tmp2) {
        let emoji;
        if (null != closure_37[tmp2]) {
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
        let topEmojiWithoutFetchingLatest = closure_31;
      } else {
        callback7();
        const value = store.get(arg0);
        topEmojiWithoutFetchingLatest = value.getTopEmojiWithoutFetchingLatest(arg0);
      }
      return topEmojiWithoutFetchingLatest;
    }
  };
  items[19] = {
    key: "getNewlyAddedEmoji",
    value(arg0) {
      if (null == arg0) {
        let newlyAddedEmojiForGuild = closure_31;
      } else {
        callback7();
        const value = store.get(arg0);
        newlyAddedEmojiForGuild = value.getNewlyAddedEmojiForGuild(arg0);
      }
      return newlyAddedEmojiForGuild;
    }
  };
  items[20] = {
    key: "getTopEmojisMetadata",
    value(arg0) {
      return closure_39.get(arg0);
    }
  };
  items[21] = {
    key: "hasUsableEmojiInAnyGuild",
    value() {
      callback7();
      const keys = callback(closure_2[25]).keys(closure_37);
      return keys.some((arg0) => closure_37[arg0].usableEmojis.length > 0);
    }
  };
  items[22] = {
    key: "hasFavoriteEmojis",
    value(arg0) {
      const value = store.get(arg0);
      let tmp2 = null != value;
      if (tmp2) {
        tmp2 = value.favoriteEmojisWithoutFetchingLatest.length > 0;
      }
      return tmp2;
    }
  };
  return callback3(EmojiStore, items);
}(importDefault(dependencyMap[45]).PersistedStore);
tmp12.displayName = "EmojiStore";
tmp12.persistKey = "EmojiStoreV2";
const items2 = [
  (arg0) => {
    const merged = Object.assign(arg0);
    return {};
  }
];
tmp12.migrations = items2;
tmp12 = new tmp12(importDefault(dependencyMap[32]), {
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
        let tmp3 = closure_54;
        let tmp4 = closure_54(iter.value.id);
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
      let tmp4 = closure_54;
      let tmp5 = closure_54(key10006);
    }
    const Unloaded = obj.Loaded;
    rebuildEmojis();
  },
  CACHED_EMOJIS_LOADED: function handleCachedEmojisLoaded(emojis) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(emojis.emojis);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_6;
        let first = closure_6(iter.value, 1)[0];
        let tmp4 = closure_15;
        if (closure_15.isMember(first)) {
          let tmp5 = closure_54;
          let tmp6 = closure_54(first);
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
                  let tmp6 = closure_28;
                  let prop = closure_28.emojiReactionPendingUsages;
                  let obj = { key: name };
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
      obj = importDefault(dependencyMap[23]);
      emoji = obj.getByName(importDefault(dependencyMap[23]).convertSurrogateToName(optimistic.emoji.name, false));
      const obj2 = importDefault(dependencyMap[23]);
    } else {
      return false;
    }
  },
  EMOJI_TRACK_USAGE: function handleTrackUsage(emojiUsed) {
    trackUsage(emojiUsed.emojiUsed);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    const obj = importDefault(dependencyMap[38]);
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
    const tmp = importDefault(dependencyMap[41]);
    const tmpResult = importDefault(dependencyMap[41])(importDefault(dependencyMap[41])());
    obj.topEmojisTTL = importDefault(dependencyMap[41])(importDefault(dependencyMap[41])()).add(1, "days").valueOf();
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
    const obj = {};
    const merged = Object.assign(obj);
    obj["expandedSectionsByGuildIds"] = set;
  }
});
const importDefaultResult1 = importDefault(dependencyMap[25]);
const obj1 = {};
const obj2 = {
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
        let tmp3 = closure_54;
        let tmp4 = closure_54(iter.value.id);
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
      let tmp4 = closure_54;
      let tmp5 = closure_54(key10006);
    }
    const Unloaded = obj.Loaded;
    rebuildEmojis();
  },
  CACHED_EMOJIS_LOADED: function handleCachedEmojisLoaded(emojis) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(emojis.emojis);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_6;
        let first = closure_6(iter.value, 1)[0];
        let tmp4 = closure_15;
        if (closure_15.isMember(first)) {
          let tmp5 = closure_54;
          let tmp6 = closure_54(first);
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
                  let tmp6 = closure_28;
                  let prop = closure_28.emojiReactionPendingUsages;
                  let obj = { key: name };
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
      obj = importDefault(dependencyMap[23]);
      emoji = obj.getByName(importDefault(dependencyMap[23]).convertSurrogateToName(optimistic.emoji.name, false));
      const obj2 = importDefault(dependencyMap[23]);
    } else {
      return false;
    }
  },
  EMOJI_TRACK_USAGE: function handleTrackUsage(emojiUsed) {
    trackUsage(emojiUsed.emojiUsed);
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    const obj = importDefault(dependencyMap[38]);
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
    const tmp = importDefault(dependencyMap[41]);
    const tmpResult = importDefault(dependencyMap[41])(importDefault(dependencyMap[41])());
    obj.topEmojisTTL = importDefault(dependencyMap[41])(importDefault(dependencyMap[41])()).add(1, "days").valueOf();
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
    const obj = {};
    const merged = Object.assign(obj);
    obj["expandedSectionsByGuildIds"] = set;
  }
};
const result = arg1(dependencyMap[46]).fileFinishedImporting("modules/emojis/EmojiStore.tsx");

export default tmp12;
export const LoadState = obj;
export const EmojiDisambiguations = tmp8;
