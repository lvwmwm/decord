// Module ID: 7085
// Function ID: 56809
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 7085 (_createForOfIteratorHelperLoose)
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
function getAutocompleterBoosterMap(USER, frecencyBoosters) {
  if (frecencyBoosters.frecencyBoosters) {
    let boosterMap = frecencyBoosters(dependencyMap[8]).getBoosterMap(USER);
    const obj2 = frecencyBoosters(dependencyMap[8]);
  } else {
    boosterMap = {};
  }
  return boosterMap;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const GUILD_VOCAL_CHANNELS_KEY = arg1(dependencyMap[4]).GUILD_VOCAL_CHANNELS_KEY;
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
arg1(dependencyMap[7]).AutocompleterResultTypes;
let closure_11 = Object.freeze({});
const tmp2 = () => {
  class Autocompleter {
    constructor(arg0, arg1) {
      num = arg2;
      tmp = arg3;
      num2 = arg4;
      self = this;
      Autocompleter = this;
      if (arg2 === undefined) {
        num = 100;
      }
      if (tmp === undefined) {
        tmp = closure_11;
      }
      if (num2 === undefined) {
        num2 = 0;
      }
      tmp2 = closure_3(self, Autocompleter);
      self.query = "";
      self.options = closure_11;
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
        if (self._include(constants.USER)) {
          self._userResults = [];
          const tmp3 = callback2(results.results);
          let iter = tmp3();
          if (!iter.done) {
            do {
              let value = iter.value;
              let comparator = value.comparator;
              let tmp5 = closure_9;
              let user = closure_9.getUser(value.id);
              if (null != user) {
                let tmp7 = closure_0;
                let _userResults = closure_0._userResults;
                let obj = {};
                let tmp8 = closure_10;
                obj.type = closure_10.USER;
                obj.record = user;
                let tmp9 = closure_0;
                let tmp10 = closure_2;
                let obj2 = closure_0(closure_2[8]);
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
        const tmp2 = callback(closure_2[9]);
        const tmp2Result = callback(closure_2[9])(items);
        const uniqByResult = callback(closure_2[9])(items).uniqBy((type) => "" + type.type + "-" + type.record.id);
        self.results = callback(closure_2[9])(items).uniqBy((type) => "" + type.type + "-" + type.record.id).sort(callback(closure_2[10])).value();
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
  const arg1 = Autocompleter;
  let obj = {
    key: "createSearchContext",
    value() {
      const self = this;
      if (null == this.userSearchContext) {
        self.userSearchContext = callback(closure_2[11]).getUserSearchContext(self.parseUserResults, self._limit);
        const obj = callback(closure_2[11]);
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , ];
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
      self._userResults = self._include(constants.USER) ? self._userResults : [];
      self._groupDMResults = self._include(constants.GROUP_DM) ? self._groupDMResults : [];
      self._textChannelResults = self._include(constants.TEXT_CHANNEL) ? self._textChannelResults : [];
      self._voiceChannelResults = self._include(constants.VOICE_CHANNEL) ? self._voiceChannelResults : [];
      self._guildResults = self._include(constants.GUILD) ? self._guildResults : [];
      self._applicationResults = self._include(constants.APPLICATION) ? self._applicationResults : [];
      self._gameProfileResults = self._include(constants.GAME_PROFILE) ? self._gameProfileResults : [];
      self._linkResults = self._include(constants.LINK) ? self._linkResults : [];
      self._inAppNavigations = self._include(constants.IN_APP_NAVIGATION) ? self._inAppNavigations : [];
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
      let _includeResult = this._include(constants.USER);
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
      const self = this;
      const Autocompleter = this;
      this.query = query;
      this._refetched = false;
      if ("" === query.trim()) {
        self.clear();
        self.updateAllResults();
      } else {
        if (self.options.frecencyBoosters) {
          const FrecencyUserSettingsActionCreators = Autocompleter(arg1[12]).FrecencyUserSettingsActionCreators;
          let ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
        } else {
          ifNecessary = Promise.resolve();
        }
        ifNecessary.finally(() => {
          self.queryUsers(arg0, arg1, self._limit);
          self._groupDMResults = self.queryGroupDMs(arg0, self._limit);
          self._textChannelResults = self.queryTextChannels(arg0, self._limit);
          self._voiceChannelResults = self.queryVoiceChannels(arg0, self._limit);
          self._guildResults = self.queryGuilds(arg0, self._limit);
          self._applicationResults = self.queryApplications(arg0, self._limit);
          self._gameProfileResults = self.queryGameProfiles(arg0, self._limit);
          self._inAppNavigations = self.queryInAppNavigations(arg0, self._limit);
          if (self._isAsyncSearch()) {
            const _clearTimeout = clearTimeout;
            clearTimeout(self._asyncTimeout);
            const _setTimeout = setTimeout;
            self._asyncTimeout = setTimeout(self.updateAllResults, 300);
          } else if (!self._include(constants.USER)) {
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
      if (this._include(constants.TEXT_CHANNEL)) {
        const options = self.options;
        const blacklist = options.blacklist;
        const Autocompleter = blacklist;
        let fn;
        if (null != blacklist) {
          fn = (id) => !blacklist.has("channel:" + id.id);
        }
        let obj = callback(closure_2[8]);
        obj = { query, guildId: null, limit, fuzzy: true, allowSnowflake: options.allowSnowflake, filter: fn, boosters: callback4(constants.TEXT_CHANNEL, self.options) };
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
      if (this._include(constants.VOICE_CHANNEL)) {
        ({ allowSnowflake, voiceChannelGuildFilter } = self.options);
        let obj = callback(closure_2[8]);
        obj = { query, guildId: voiceChannelGuildFilter, limit, fuzzy: true, type: closure_7, allowSnowflake, boosters: callback4(constants.VOICE_CHANNEL, self.options) };
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
      if (this._include(constants.GUILD)) {
        const options = self.options;
        const blacklist = options.blacklist;
        const Autocompleter = blacklist;
        let fn;
        if (null != blacklist) {
          fn = (id) => !blacklist.has("guild:" + id.id);
        }
        let obj = callback(closure_2[8]);
        obj = { query, limit, fuzzy: true, filter: fn, boosters: callback4(constants.GUILD, self.options), allowSnowflake: options.allowSnowflake };
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
        if (self._include(constants.USER)) {
          const options = self.options;
          const userFilters = options.userFilters;
          const tmp4 = callback4(constants.USER, self.options);
          let thread;
          if (null != userFilters) {
            thread = userFilters.thread;
          }
          if (null == thread) {
            if (undefined !== arg1) {
              const members = callback(closure_2[13]).requestMembers(arg1, query, 100);
              const obj4 = callback(closure_2[13]);
            }
            userSearchContext.setLimit(limit);
            let obj = { query, filters: userFilters, blacklist: self._userBlacklist, boosters: tmp4 };
            userSearchContext.setQuery(obj);
          } else {
            const memberListSections = memberListSections.getMemberListSections(userFilters.thread);
            const items = [];
            const keys = Object.keys();
            if (keys !== undefined) {
              while (keys[tmp] !== undefined) {
                let tmp37 = tmp9;
                let tmp38 = memberListSections[tmp9];
                let tmp39 = callback3;
                let tmp40 = callback3(tmp38.userIds);
                let iter2 = tmp40();
                let tmp19 = tmp21;
                let tmp20 = tmp22;
                let tmp18 = tmp23;
                if (iter2.done) {
                  continue;
                } else {
                  while (true) {
                    let value = iter2.value;
                    let tmp10 = null != userFilters && userFilters.friends;
                    if (tmp10) {
                      let tmp11 = friend;
                      tmp10 = !friend.isFriend(value);
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
                    let iter = tmp40();
                    let tmp21 = tmp19;
                    let tmp22 = tmp20;
                    let tmp23 = tmp12;
                    let tmp24 = value;
                    iter2 = iter;
                    tmp18 = tmp12;
                    if (iter.done) {
                      break;
                    } else {
                      // continue
                    }
                  }
                }
                continue;
              }
            }
            obj = { query, users: items, limit, boosters: tmp4, allowSnowflake: options.allowSnowflake };
            self._userResults = callback(closure_2[8]).queryUsers(obj);
            const obj2 = callback(closure_2[8]);
          }
        }
      }
    }
  };
  items[19] = {
    key: "queryGroupDMs",
    value(query, limit) {
      const self = this;
      if (this._include(constants.GROUP_DM)) {
        const blacklist = self.options.blacklist;
        const Autocompleter = blacklist;
        let fn;
        if (null != blacklist) {
          fn = (id) => !blacklist.has("channel:" + id.id);
        }
        let obj = callback(closure_2[8]);
        obj = { query, limit, fuzzy: true, filter: fn, boosters: callback4(constants.GROUP_DM, self.options) };
        return obj.queryGroupDMs(obj);
      } else {
        return [];
      }
    }
  };
  items[20] = {
    key: "queryApplications",
    value(query, limit) {
      if (this._include(constants.APPLICATION)) {
        let obj = callback(closure_2[8]);
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
      if (this._include(constants.GAME_PROFILE)) {
        let result = Autocompleter(closure_2[14]).queryGamesAutocomplete(toLocaleLowerCase);
        if (null == result) {
          result = [];
        }
        const Autocompleter = toLocaleLowerCase.toLocaleLowerCase();
        const substr = result.slice(0, arg1);
        return substr.map((name) => {
          const obj = { type: constants.GAME_PROFILE, record: name };
          const obj2 = callback(closure_2[8]);
          obj.score = obj2.calculateScore(callback(closure_2[8]).getGameProfileMatchTier(name.name, callback, arg1));
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
      let _includeResult = !Autocompleter(closure_2[15]).isNullOrEmpty(this.query.trim());
      if (_includeResult) {
        _includeResult = self._include(constants.GAME_PROFILE);
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
      if (this._include(constants.LINK)) {
        let obj = Autocompleter(closure_2[16]);
        const findCodedLinkResult = obj.findCodedLink(target);
        let type;
        if (null != findCodedLinkResult) {
          type = findCodedLinkResult.type;
        }
        if (type === Autocompleter(closure_2[17]).CodedLinkType.INVITE) {
          obj = { type: constants.LINK, record: closure_6.fromInviteCode(findCodedLinkResult.code), score: Autocompleter(closure_2[8]).calculateScore(11) };
          const items = [obj];
          return items;
        } else {
          const sanitizeUrlResult = callback(closure_2[18]).sanitizeUrl(target);
          const _URL = URL;
          const uRL = new URL(sanitizeUrlResult);
          ({ pathname, hostname } = uRL);
          let str = "";
          if (undefined !== hostname) {
            str = hostname;
          }
          const obj8 = callback(closure_2[18]);
          const tmp34 = uRL;
          const isDiscordHostnameResult = callback(closure_2[19]).isDiscordHostname(str);
          let tmp12 = isDiscordHostnameResult;
          if (!isDiscordHostnameResult) {
            const _window = window;
            tmp12 = window.location.host === tmp34.host;
          }
          if (null !== pathname) {
            if (tmp12) {
              if (obj3.isAppRoute(pathname)) {
                obj = { type: constants.LINK, record: closure_6.fromPath(pathname), score: Autocompleter(closure_2[8]).calculateScore(11) };
                const items1 = [obj];
                let items2 = items1;
                const obj5 = Autocompleter(closure_2[8]);
              }
              return items2;
            }
          }
          items2 = [];
          const obj2 = callback(closure_2[19]);
        }
      } else {
        return [];
      }
    }
  };
  items[24] = {
    key: "queryInAppNavigations",
    value(query, limit) {
      if (this._include(constants.IN_APP_NAVIGATION)) {
        let obj = callback(closure_2[8]);
        obj = { query, limit, fuzzy: true };
        let result = obj.queryInAppNavigations(obj);
      } else {
        result = [];
      }
      return result;
    }
  };
  return callback(Autocompleter, items);
}();
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/autocompleter/Autocompleter.tsx");

export default tmp2;
