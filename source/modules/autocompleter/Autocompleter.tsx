// Module ID: 7095
// Function ID: 56877
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 7096, 7097, 1907, 3767, 1849, 5043, 4974, 22, 5046, 7098, 1331, 5047, 7100, 1832, 4114, 4119, 3829, 1443, 2]

// Module 7095 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import HeaderRecord from "HeaderRecord";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
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
function getAutocompleterBoosterMap(USER, frecencyBoosters) {
  if (frecencyBoosters.frecencyBoosters) {
    let boosterMap = require(4974) /* _createForOfIteratorHelperLoose */.getBoosterMap(USER);
    const obj2 = require(4974) /* _createForOfIteratorHelperLoose */;
  } else {
    boosterMap = {};
  }
  return boosterMap;
}
require("HeaderRecord").AutocompleterResultTypes;
let closure_11 = Object.freeze({});
let tmp2 = (() => {
  class Autocompleter {
    constructor(arg0, arg1) {
      num = arg2;
      tmp = arg3;
      num2 = arg4;
      self = this;
      self = this;
      if (arg2 === undefined) {
        num = 100;
      }
      if (tmp === undefined) {
        tmp = outer1_11;
      }
      if (num2 === undefined) {
        num2 = 0;
      }
      tmp2 = outer1_3(self, self);
      self.query = "";
      self.options = outer1_11;
      self.results = [];
      self._userResults = [];
      self._groupDMResults = [];
      self._textChannelResults = [];
      self._voiceChannelResults = [];
      self._guildResults = [];
      self._applicationResults = [];
      self._gameProfileResults = [];
      self._linkResults = [];
      self._inAppNavigations = [];
      self._userBlacklist = null;
      self._refetched = false;
      self.parseUserResults = (results) => {
        let iter2;
        if (self._include(outer2_10.USER)) {
          self._userResults = [];
          const tmp3 = outer2_12(results.results);
          let iter = tmp3();
          if (!iter.done) {
            do {
              let value = iter.value;
              let comparator = value.comparator;
              let tmp5 = outer2_9;
              let user = outer2_9.getUser(value.id);
              if (null != user) {
                let tmp7 = self;
                let _userResults = self._userResults;
                let obj = {};
                let tmp8 = outer2_10;
                obj.type = outer2_10.USER;
                obj.record = user;
                let tmp9 = Autocompleter;
                let tmp10 = outer2_2;
                let obj2 = Autocompleter(outer2_2[8]);
                obj.score = obj2.calculateScore(value.score);
                let tmp11;
                if (null != comparator) {
                  tmp11 = comparator;
                }
                obj.comparator = tmp11;
                let arr = _userResults.push(obj);
              }
              iter2 = tmp3();
              iter = iter2;
            } while (!iter2.done);
          }
          const result = self._willRefetchIfSingleCategoryResults();
          let tmp15 = !result;
          if (tmp15) {
            tmp15 = self._userResults.length > self._limit;
          }
          if (tmp15) {
            self._userResults.length = self._limit;
          }
          if (result) {
            const result1 = self.refetchIfSingleCategoryResults();
          }
          self.updateAllResults();
        }
      };
      self.updateAllResults = () => {
        clearTimeout(self._asyncTimeout);
        const items = [];
        HermesBuiltin.arraySpread(self._inAppNavigations, HermesBuiltin.arraySpread(self._linkResults, HermesBuiltin.arraySpread(self._gameProfileResults, HermesBuiltin.arraySpread(self._guildResults, HermesBuiltin.arraySpread(self._voiceChannelResults, HermesBuiltin.arraySpread(self._textChannelResults, HermesBuiltin.arraySpread(self._groupDMResults, HermesBuiltin.arraySpread(self._userResults, 0))))))));
        const tmp2 = outer2_1(outer2_2[9]);
        const tmp2Result = outer2_1(outer2_2[9])(items);
        const uniqByResult = outer2_1(outer2_2[9])(items).uniqBy((type) => "" + type.type + "-" + type.record.id);
        self.results = outer2_1(outer2_2[9])(items).uniqBy((type) => "" + type.type + "-" + type.record.id).sort(outer2_1(outer2_2[10])).value();
        self.onResultsChange(self.results, self.query);
      };
      self.onResultsChange = arg0;
      setOptionsResult = self.setOptions(tmp, true);
      self._limit = num;
      self._refetchForSingleCategoryLimit = num2;
      searchContext = self.createSearchContext();
      setResultTypesResult = self.setResultTypes(arg1);
      return;
    }
  }
  let obj = {
    key: "createSearchContext",
    value() {
      const self = this;
      if (null == this.userSearchContext) {
        self.userSearchContext = outer1_1(outer1_2[11]).getUserSearchContext(self.parseUserResults, self._limit);
        const obj = outer1_1(outer1_2[11]);
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "setLimit",
    value(_limit) {
      const self = this;
      const userSearchContext = this.userSearchContext;
      this._limit = _limit;
      if (null != userSearchContext) {
        userSearchContext.setLimit(_limit);
      }
      if (self._userResults.length > self._limit) {
        self._userResults.length = self._limit;
      }
      if (self._groupDMResults.length > self._limit) {
        self._groupDMResults.length = self._limit;
      }
      if (self._textChannelResults.length > self._limit) {
        self._textChannelResults.length = self._limit;
      }
      if (self._voiceChannelResults.length > self._limit) {
        self._voiceChannelResults.length = self._limit;
      }
      if (self._guildResults.length > self._limit) {
        self._guildResults.length = self._limit;
      }
      if (self._applicationResults.length > self._limit) {
        self._applicationResults.length = self._limit;
      }
      if (self._gameProfileResults.length > self._limit) {
        self._gameProfileResults.length = self._limit;
      }
      if (self._linkResults.length > self._limit) {
        self._linkResults.length = self._limit;
      }
      if (self._inAppNavigations.length > self._limit) {
        self._inAppNavigations.length = self._limit;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "setRefetchForSingleCategoryLimit",
    value(_refetchForSingleCategoryLimit) {
      this._refetchForSingleCategoryLimit = _refetchForSingleCategoryLimit;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setResultTypes",
    value(items) {
      const self = this;
      let set = null;
      if (null != items) {
        const _Set = Set;
        set = new Set(items);
      }
      self.resultTypes = set;
      self._userResults = self._include(outer1_10.USER) ? self._userResults : [];
      self._groupDMResults = self._include(outer1_10.GROUP_DM) ? self._groupDMResults : [];
      self._textChannelResults = self._include(outer1_10.TEXT_CHANNEL) ? self._textChannelResults : [];
      self._voiceChannelResults = self._include(outer1_10.VOICE_CHANNEL) ? self._voiceChannelResults : [];
      self._guildResults = self._include(outer1_10.GUILD) ? self._guildResults : [];
      self._applicationResults = self._include(outer1_10.APPLICATION) ? self._applicationResults : [];
      self._gameProfileResults = self._include(outer1_10.GAME_PROFILE) ? self._gameProfileResults : [];
      self._linkResults = self._include(outer1_10.LINK) ? self._linkResults : [];
      self._inAppNavigations = self._include(outer1_10.IN_APP_NAVIGATION) ? self._inAppNavigations : [];
    }
  };
  items[4] = {
    key: "_include",
    value(arg0) {
      let hasItem = null == this.resultTypes;
      if (!hasItem) {
        const resultTypes = this.resultTypes;
        hasItem = resultTypes.has(arg0);
      }
      return hasItem;
    }
  };
  items[5] = {
    key: "_isAsyncSearch",
    value() {
      let _includeResult = this._include(outer1_10.USER);
      if (_includeResult) {
        const options = this.options;
        let thread;
        if (null != options) {
          const userFilters = options.userFilters;
          if (null != userFilters) {
            thread = userFilters.thread;
          }
        }
        _includeResult = null != thread;
      }
      return _includeResult;
    }
  };
  items[6] = {
    key: "setOptions",
    value(arg0) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      let tmp = arg0;
      if (flag) {
        const obj = {};
        const merged = Object.assign(self.options);
        const merged1 = Object.assign(arg0);
        tmp = obj;
      }
      self.options = tmp;
      if (null != self.options.blacklist) {
        const _Array = Array;
        const mapped = Array.from(self.options.blacklist).map((str) => {
          str = "";
          if (str.startsWith("user:")) {
            str = str.replace("user:", "");
          }
          return str;
        });
        self._userBlacklist = mapped.filter((arg0) => "" !== arg0);
        const arr = Array.from(self.options.blacklist);
      } else {
        self._userBlacklist = null;
      }
    }
  };
  items[7] = {
    key: "_willRefetchIfSingleCategoryResults",
    value() {
      const self = this;
      let _refetched = this._refetched;
      if (!_refetched) {
        _refetched = self._refetchForSingleCategoryLimit <= 5;
      }
      let tmp = !_refetched;
      if (tmp) {
        let tmp3 = null == self.options.voiceChannelGuildFilter && null == self.options.userFilters;
        if (tmp3) {
          const items = [, , , , , , , , ];
          ({ _userResults: arr[0], _groupDMResults: arr[1], _textChannelResults: arr[2], _voiceChannelResults: arr[3], _guildResults: arr[4], _applicationResults: arr[5], _gameProfileResults: arr[6], _linkResults: arr[7], _inAppNavigations: arr[8] } = self);
          tmp3 = 1 === items.filter((arg0) => arg0.length > 0).length;
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  items[8] = {
    key: "refetchIfSingleCategoryResults",
    value() {
      const self = this;
      if (this._willRefetchIfSingleCategoryResults()) {
        self._refetched = true;
        const query = self.query;
        if (self._userResults.length > 0) {
          self.queryUsers(query, null, self._refetchForSingleCategoryLimit);
        } else if (self._groupDMResults.length > 0) {
          self._groupDMResults = self.queryGroupDMs(query, self._refetchForSingleCategoryLimit);
        } else if (self._textChannelResults.length > 0) {
          self._textChannelResults = self.queryTextChannels(query, self._refetchForSingleCategoryLimit);
        } else if (self._voiceChannelResults.length > 0) {
          self._voiceChannelResults = self.queryVoiceChannels(query, self._refetchForSingleCategoryLimit);
        } else if (self._guildResults.length > 0) {
          self._guildResults = self.queryGuilds(query, self._refetchForSingleCategoryLimit);
        } else if (self._applicationResults.length > 0) {
          self._applicationResults = self.queryApplications(query, self._refetchForSingleCategoryLimit);
        } else if (self._gameProfileResults.length > 0) {
          self._gameProfileResults = self.queryGameProfiles(query, self._refetchForSingleCategoryLimit);
        } else if (self._linkResults.length > 0) {
          self._linkResults = self.queryLink(query, self._refetchForSingleCategoryLimit);
        } else if (self._inAppNavigations.length > 0) {
          self._inAppNavigations = self.queryInAppNavigations(query, self._refetchForSingleCategoryLimit);
        }
      }
    }
  };
  items[9] = {
    key: "search",
    value(query) {
      let self = this;
      self = this;
      let closure_1 = query;
      let closure_2 = arg1;
      this.query = query;
      this._refetched = false;
      if ("" === query.trim()) {
        self.clear();
        self.updateAllResults();
      } else {
        if (self.options.frecencyBoosters) {
          const FrecencyUserSettingsActionCreators = Autocompleter(outer1_2[12]).FrecencyUserSettingsActionCreators;
          let ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        } else {
          ifNecessary = Promise.resolve();
        }
        ifNecessary.finally(() => {
          self.queryUsers(closure_1, closure_2, self._limit);
          self._groupDMResults = self.queryGroupDMs(closure_1, self._limit);
          self._textChannelResults = self.queryTextChannels(closure_1, self._limit);
          self._voiceChannelResults = self.queryVoiceChannels(closure_1, self._limit);
          self._guildResults = self.queryGuilds(closure_1, self._limit);
          self._applicationResults = self.queryApplications(closure_1, self._limit);
          self._gameProfileResults = self.queryGameProfiles(closure_1, self._limit);
          self._inAppNavigations = self.queryInAppNavigations(closure_1, self._limit);
          if (self._isAsyncSearch()) {
            const _clearTimeout = clearTimeout;
            clearTimeout(self._asyncTimeout);
            const _setTimeout = setTimeout;
            self._asyncTimeout = setTimeout(self.updateAllResults, 300);
          } else if (!self._include(outer2_10.USER)) {
            self.updateAllResults();
          }
        });
      }
    }
  };
  items[10] = {
    key: "clear",
    value() {
      const self = this;
      const userSearchContext = this.userSearchContext;
      if (null != userSearchContext) {
        userSearchContext.clearQuery();
      }
      self.results = [];
      self._userResults = [];
      self._groupDMResults = [];
      self._textChannelResults = [];
      self._voiceChannelResults = [];
      self._guildResults = [];
      self._applicationResults = [];
      self._gameProfileResults = [];
      self._linkResults = [];
      self._inAppNavigations = [];
    }
  };
  items[11] = {
    key: "clean",
    value() {
      this.clear();
      this.destroy();
      this.query = "";
      this.updateAllResults();
    }
  };
  items[12] = {
    key: "pause",
    value() {
      const userSearchContext = this.userSearchContext;
      if (!tmp) {
        userSearchContext.unsubscribe();
      }
    }
  };
  items[13] = {
    key: "resume",
    value() {
      const userSearchContext = this.userSearchContext;
      if (!tmp) {
        const subscription = userSearchContext.subscribe();
      }
    }
  };
  items[14] = {
    key: "destroy",
    value() {
      const userSearchContext = this.userSearchContext;
      if (null != userSearchContext) {
        userSearchContext.destroy();
        tmp.userSearchContext = null;
      }
    }
  };
  items[15] = {
    key: "queryTextChannels",
    value(query, limit) {
      const self = this;
      if (this._include(outer1_10.TEXT_CHANNEL)) {
        const options = self.options;
        const blacklist = options.blacklist;
        let fn;
        if (null != blacklist) {
          fn = (id) => !blacklist.has("channel:" + id.id);
        }
        let obj = outer1_1(outer1_2[8]);
        obj = { query, guildId: null, limit, fuzzy: true, allowSnowflake: options.allowSnowflake, filter: fn, boosters: outer1_14(outer1_10.TEXT_CHANNEL, self.options) };
        return obj.queryChannels(obj);
      } else {
        return [];
      }
    }
  };
  items[16] = {
    key: "queryVoiceChannels",
    value(query, limit) {
      let allowSnowflake;
      let voiceChannelGuildFilter;
      const self = this;
      if (this._include(outer1_10.VOICE_CHANNEL)) {
        ({ allowSnowflake, voiceChannelGuildFilter } = self.options);
        let obj = outer1_1(outer1_2[8]);
        obj = { query, guildId: voiceChannelGuildFilter, limit, fuzzy: true, type: outer1_7, allowSnowflake, boosters: outer1_14(outer1_10.VOICE_CHANNEL, self.options) };
        return obj.queryChannels(obj);
      } else {
        return [];
      }
    }
  };
  items[17] = {
    key: "queryGuilds",
    value(query, limit) {
      const self = this;
      if (this._include(outer1_10.GUILD)) {
        const options = self.options;
        const blacklist = options.blacklist;
        let fn;
        if (null != blacklist) {
          fn = (id) => !blacklist.has("guild:" + id.id);
        }
        let obj = outer1_1(outer1_2[8]);
        obj = { query, limit, fuzzy: true, filter: fn, boosters: outer1_14(outer1_10.GUILD, self.options), allowSnowflake: options.allowSnowflake };
        return obj.queryGuilds(obj);
      } else {
        return [];
      }
    }
  };
  items[18] = {
    key: "queryUsers",
    value(query, arg1, limit) {
      const self = this;
      const userSearchContext = this.userSearchContext;
      if (null != userSearchContext) {
        if (self._include(outer1_10.USER)) {
          const options = self.options;
          const userFilters = options.userFilters;
          const tmp4 = outer1_14(outer1_10.USER, self.options);
          let thread;
          if (null != userFilters) {
            thread = userFilters.thread;
          }
          if (null == thread) {
            if (undefined !== arg1) {
              const members = outer1_1(outer1_2[13]).requestMembers(arg1, query, 100);
              const obj4 = outer1_1(outer1_2[13]);
            }
            userSearchContext.setLimit(limit);
            let obj = { query, filters: userFilters, blacklist: self._userBlacklist, boosters: tmp4 };
            userSearchContext.setQuery(obj);
          } else {
            const memberListSections = outer1_5.getMemberListSections(userFilters.thread);
            const items = [];
            const keys = Object.keys();
            if (keys !== undefined) {
              while (keys[tmp] !== undefined) {
                let tmp37 = tmp9;
                let tmp38 = memberListSections[tmp9];
                let tmp39 = outer1_12;
                let tmp40 = outer1_12(tmp38.userIds);
                let iter2 = tmp40();
                let tmp19 = tmp21;
                let tmp20 = tmp22;
                let tmp18 = tmp23;
                if (iter2.done) {
                  continue;
                } else {
                  do {
                    let value = iter2.value;
                    let tmp10 = null != userFilters && userFilters.friends;
                    if (tmp10) {
                      let tmp11 = outer1_8;
                      tmp10 = !outer1_8.isFriend(value);
                    }
                    let tmp12 = tmp18;
                    if (!tmp10) {
                      let _userBlacklist = self._userBlacklist;
                      let hasItem;
                      if (null != _userBlacklist) {
                        hasItem = _userBlacklist.includes(value);
                      }
                      let tmp14 = null != hasItem && hasItem;
                      if (!tmp14) {
                        obj = { userId: value };
                        let tmp15 = tmp38.usersById[value];
                        let displayName;
                        if (null != tmp15) {
                          displayName = tmp15.displayName;
                        }
                        obj.nick = displayName;
                        let arr = items.push(obj);
                        tmp18 = tmp15;
                      }
                      tmp12 = tmp18;
                      tmp19 = hasItem;
                      tmp20 = _userBlacklist;
                    }
                    iter = tmp40();
                    tmp21 = tmp19;
                    tmp22 = tmp20;
                    tmp23 = tmp12;
                    let tmp24 = value;
                    iter2 = iter;
                    tmp18 = tmp12;
                  } while (!iter.done);
                }
                continue;
              }
            }
            obj = { query, users: items, limit, boosters: tmp4, allowSnowflake: options.allowSnowflake };
            self._userResults = outer1_1(outer1_2[8]).queryUsers(obj);
            const obj2 = outer1_1(outer1_2[8]);
          }
        }
      }
    }
  };
  items[19] = {
    key: "queryGroupDMs",
    value(query, limit) {
      const self = this;
      if (this._include(outer1_10.GROUP_DM)) {
        const blacklist = self.options.blacklist;
        let fn;
        if (null != blacklist) {
          fn = (id) => !blacklist.has("channel:" + id.id);
        }
        let obj = outer1_1(outer1_2[8]);
        obj = { query, limit, fuzzy: true, filter: fn, boosters: outer1_14(outer1_10.GROUP_DM, self.options) };
        return obj.queryGroupDMs(obj);
      } else {
        return [];
      }
    }
  };
  items[20] = {
    key: "queryApplications",
    value(query, limit) {
      if (this._include(outer1_10.APPLICATION)) {
        let obj = outer1_1(outer1_2[8]);
        obj = { query, limit, fuzzy: true };
        let queryApplicationsResult = obj.queryApplications(obj);
      } else {
        queryApplicationsResult = [];
      }
      return queryApplicationsResult;
    }
  };
  items[21] = {
    key: "queryGameProfiles",
    value(toLocaleLowerCase) {
      if (this._include(outer1_10.GAME_PROFILE)) {
        let result = Autocompleter(outer1_2[14]).queryGamesAutocomplete(toLocaleLowerCase);
        if (null == result) {
          result = [];
        }
        let closure_0 = toLocaleLowerCase.toLocaleLowerCase();
        const substr = result.slice(0, arg1);
        return substr.map((name) => {
          const obj = { type: outer2_10.GAME_PROFILE, record: name };
          const obj2 = Autocompleter(outer2_2[8]);
          obj.score = obj2.calculateScore(Autocompleter(outer2_2[8]).getGameProfileMatchTier(name.name, closure_0, arg1));
          ({ name: obj.comparator, name } = name);
          obj.sortable = name.toLocaleLowerCase();
          return obj;
        });
      } else {
        return [];
      }
    }
  };
  items[22] = {
    key: "refreshGameProfiles",
    value() {
      const self = this;
      let _includeResult = !Autocompleter(outer1_2[15]).isNullOrEmpty(this.query.trim());
      if (_includeResult) {
        _includeResult = self._include(outer1_10.GAME_PROFILE);
      }
      if (_includeResult) {
        self._gameProfileResults = self.queryGameProfiles(self.query, self._limit);
        self.updateAllResults();
      }
    }
  };
  items[23] = {
    key: "queryLink",
    value(target) {
      let hostname;
      let pathname;
      if (this._include(outer1_10.LINK)) {
        let obj = Autocompleter(outer1_2[16]);
        const findCodedLinkResult = obj.findCodedLink(target);
        let type;
        if (null != findCodedLinkResult) {
          type = findCodedLinkResult.type;
        }
        if (type === Autocompleter(outer1_2[17]).CodedLinkType.INVITE) {
          obj = { type: outer1_10.LINK, record: outer1_6.fromInviteCode(findCodedLinkResult.code), score: Autocompleter(outer1_2[8]).calculateScore(11) };
          const items = [obj];
          return items;
        } else {
          const sanitizeUrlResult = outer1_1(outer1_2[18]).sanitizeUrl(target);
          const _URL = URL;
          const uRL = new URL(sanitizeUrlResult);
          ({ pathname, hostname } = uRL);
          let str = "";
          if (undefined !== hostname) {
            str = hostname;
          }
          const obj8 = outer1_1(outer1_2[18]);
          const tmp34 = uRL;
          const isDiscordHostnameResult = outer1_1(outer1_2[19]).isDiscordHostname(str);
          let tmp12 = isDiscordHostnameResult;
          if (!isDiscordHostnameResult) {
            const _window = window;
            tmp12 = window.location.host === tmp34.host;
          }
          if (null !== pathname) {
            if (tmp12) {
              if (obj3.isAppRoute(pathname)) {
                obj = { type: outer1_10.LINK, record: outer1_6.fromPath(pathname), score: Autocompleter(outer1_2[8]).calculateScore(11) };
                const items1 = [obj];
                let items2 = items1;
                const obj5 = Autocompleter(outer1_2[8]);
              }
              return items2;
            }
          }
          items2 = [];
          const obj2 = outer1_1(outer1_2[19]);
        }
      } else {
        return [];
      }
    }
  };
  items[24] = {
    key: "queryInAppNavigations",
    value(query, limit) {
      if (this._include(outer1_10.IN_APP_NAVIGATION)) {
        let obj = outer1_1(outer1_2[8]);
        obj = { query, limit, fuzzy: true };
        let result = obj.queryInAppNavigations(obj);
      } else {
        result = [];
      }
      return result;
    }
  };
  return callback(Autocompleter, items);
})();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/autocompleter/Autocompleter.tsx");

export default tmp2;
