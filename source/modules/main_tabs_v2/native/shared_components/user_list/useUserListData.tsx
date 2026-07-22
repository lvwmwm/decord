// Module ID: 8813
// Function ID: 69462
// Name: _toPropertyKey
// Dependencies: []
// Exports: default

// Module 8813 (_toPropertyKey)
function _toPropertyKey(arg0) {
  let StringResult = arg0;
  if ("object" === typeof arg0) {
    StringResult = arg0;
    if (arg0) {
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const callResult = obj.call(arg0, "string");
        StringResult = callResult;
        if ("object" === typeof callResult) {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(arg0);
      }
    }
  }
  let text = StringResult;
  if ("symbol" !== typeof StringResult) {
    text = `${tmp}`;
  }
  return text;
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
function isMatch(arg0, arg1, arg2) {
  let obj = arg2;
  if (null == arg2) {
    obj = {};
  }
  const exact = obj.exact;
  let closure_1 = undefined !== exact && exact;
  const contains = obj.contains;
  let closure_2 = undefined !== contains && contains;
  function _loop(arr) {
    const arg1 = arr;
    if (arr.some((str) => {
      if (closure_1) {
        return str === str;
      } else if (str.startsWith(str)) {
        return true;
      } else {
        const joined = str.join(" ");
        const tmp4 = !joined.startsWith(str);
        let tmp5 = !tmp4;
        if (tmp4) {
          let hasItem = closure_2;
          if (closure_2) {
            hasItem = joined.includes(str);
          }
          tmp5 = hasItem;
        }
        return tmp5;
      }
    })) {
      const obj = { v: closure_3 };
      return obj;
    }
  }
  const entries = Object.entries(arg0);
  let num = 0;
  if (0 < entries.length) {
    const tmp2 = callback3(entries[num], 2);
    let closure_3 = tmp2[0];
    const _loopResult = _loop(tmp2[1]);
    while (!_loopResult) {
      num = num + 1;
    }
    return _loopResult.v;
  }
  return null;
}
function boostExact(arg0, arg1) {
  let num = 0;
  if (null != isMatch(arg0, arg1, { exact: true })) {
    num = -1000;
  }
  return num;
}
function parseUserSearchResults(affinitySuggestionsLimit) {
  let data;
  let excludeCurrentUser;
  let withAffinitySuggestions;
  let withFriendRequests;
  let withFriendRequestsIncoming;
  let withFriendRequestsOutgoing;
  let withFriendRequestsSpam;
  let withFriendSuggestions;
  let withFriends;
  let withGuildMembers;
  ({ data, withFriends, excludeCurrentUser } = affinitySuggestionsLimit);
  ({ withGuildMembers, withAffinitySuggestions, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam } = affinitySuggestionsLimit);
  if (excludeCurrentUser === undefined) {
    excludeCurrentUser = false;
  }
  let num = affinitySuggestionsLimit.affinitySuggestionsLimit;
  if (num === undefined) {
    num = 5;
  }
  let flag = affinitySuggestionsLimit.withAlphabeticalSections;
  if (flag === undefined) {
    flag = true;
  }
  let arg1;
  const AffinitySuggestions = closure_16.AffinitySuggestions;
  const FriendRequests = closure_16.FriendRequests;
  const FriendRequestsIncoming = closure_16.FriendRequestsIncoming;
  const FriendRequestsOutgoing = closure_16.FriendRequestsOutgoing;
  const FriendRequestsSpam = closure_16.FriendRequestsSpam;
  const FriendSuggestions = closure_16.FriendSuggestions;
  const Friends = closure_16.Friends;
  const GuildMembers = closure_16.GuildMembers;
  let items = data[AffinitySuggestions];
  if (undefined === items) {
    items = [];
  }
  let items1 = data[FriendRequests];
  if (undefined === items1) {
    items1 = [];
  }
  let items2 = data[FriendRequestsIncoming];
  if (undefined === items2) {
    items2 = [];
  }
  let items3 = data[FriendRequestsOutgoing];
  if (undefined === items3) {
    items3 = [];
  }
  let items4 = data[FriendRequestsSpam];
  if (undefined === items4) {
    items4 = [];
  }
  let items5 = data[FriendSuggestions];
  if (undefined === items5) {
    items5 = [];
  }
  let items6 = data[Friends];
  if (undefined === items6) {
    items6 = [];
  }
  let items7 = data[GuildMembers];
  if (undefined === items7) {
    items7 = [];
  }
  const items8 = [AffinitySuggestions, FriendRequests, FriendRequestsIncoming, FriendRequestsOutgoing, FriendRequestsSpam, FriendSuggestions, Friends, GuildMembers];
  const currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  arg1 = id;
  let found = items7;
  if (excludeCurrentUser) {
    found = items7.filter((user) => user.user.id !== id);
  }
  if (withFriends) {
    const mapped = importDefault(dependencyMap[18])(tmp).map((items, title) => ({ title, items }));
    const arr12 = importDefault(dependencyMap[18])(tmp);
    items = mapped.sortBy((title) => title.title).value();
    const iter = mapped.sortBy((title) => title.title);
  } else {
    items = [];
  }
  let obj = { title: null, items: items.flatMap((items) => items.items) };
  let items9 = [obj];
  obj = {};
  const intl = arg1(dependencyMap[19]).intl;
  obj.title = intl.string(arg1(dependencyMap[19]).t.HbJ7eD);
  if (withAffinitySuggestions) {
    let obj3 = importDefault(dependencyMap[18])(items);
    const sortByResult = obj3.sortBy((affinity) => -affinity.affinity);
    let valueResult = obj3.sortBy((affinity) => -affinity.affinity).slice(0, num).value();
    const iter2 = obj3.sortBy((affinity) => -affinity.affinity).slice(0, num);
  } else {
    valueResult = [];
  }
  obj.items = valueResult;
  const items10 = [obj, , , , , , , ];
  const obj1 = {};
  const intl2 = arg1(dependencyMap[19]).intl;
  const obj2 = { pendingRequestNumber: items1.length };
  obj1.title = intl2.formatToPlainString(arg1(dependencyMap[19]).t.zsVtft, obj2);
  if (!withFriendRequests) {
    items1 = [];
  }
  obj1.items = items1;
  items10[1] = obj1;
  obj3 = { title: null };
  if (!withFriendRequestsIncoming) {
    items2 = [];
  }
  obj3.items = items2;
  items10[2] = obj3;
  const obj4 = { title: null };
  if (!withFriendRequestsOutgoing) {
    items3 = [];
  }
  obj4.items = items3;
  items10[3] = obj4;
  const obj5 = { title: null };
  if (!withFriendRequestsSpam) {
    items4 = [];
  }
  obj5.items = items4;
  items10[4] = obj5;
  const obj6 = {};
  const intl3 = arg1(dependencyMap[19]).intl;
  const obj7 = { count: items5.length };
  obj6.title = intl3.formatToPlainString(arg1(dependencyMap[19]).t.DYMZ/p, obj7);
  if (!withFriendSuggestions) {
    items5 = [];
  }
  obj6.items = items5;
  items10[5] = obj6;
  const obj8 = {};
  const intl4 = arg1(dependencyMap[19]).intl;
  obj8.title = intl4.string(arg1(dependencyMap[19]).t.TdEu5X);
  if (!withFriends) {
    items6 = [];
  }
  obj8.items = items6;
  items10[6] = obj8;
  const obj9 = {};
  const intl5 = arg1(dependencyMap[19]).intl;
  obj9.title = intl5.string(arg1(dependencyMap[19]).t.y29JXs);
  if (!withGuildMembers) {
    found = [];
  }
  obj9.items = found;
  items10[7] = obj9;
  if (flag) {
    items9 = items;
  }
  HermesBuiltin.arraySpread(items9, 8);
  return items10;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importAll(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
const RelationshipTypes = arg1(dependencyMap[11]).RelationshipTypes;
const items = [, , , ];
({ FRIEND: arr[0], SUGGESTION: arr[1], PENDING_INCOMING: arr[2], PENDING_OUTGOING: arr[3] } = RelationshipTypes);
const set = new Set(items);
let closure_16 = { AffinitySuggestions: "AFFINITY_SUGGESTIONS", Friends: "FRIENDS", FriendRequests: "FRIEND_REQUESTS", FriendRequestsIncoming: "FRIEND_REQUESTS_INCOMING", FriendRequestsOutgoing: "FRIEND_REQUESTS_OUTGOING", FriendRequestsSpam: "FRIEND_REQUESTS_SPAM", FriendSuggestions: "FRIEND_SUGGESTIONS", GuildMembers: "GUILD_MEMBERS" };
const tmp3 = () => {
  class UserSearch {
    constructor(arg0) {
      flag = arg1;
      self = this;
      UserSearch = this;
      arg0 = arg0;
      if (arg1 === undefined) {
        flag = false;
      }
      tmp = closure_4(self, UserSearch);
      self.currentQuery = "";
      self.affinities = {};
      self.userSearchContext = null;
      secondaryIndexMap = new UserSearch(closure_2[12]).SecondaryIndexMap((arg0) => {
        let names;
        let type;
        ({ names, type } = arg0);
        const items = [];
        if (constants.PENDING_INCOMING === type) {
          items.push(closure_16.FriendRequests);
          const push = items.push;
          if (spam.isSpam(tmp3.id)) {
            push(tmp19.FriendRequestsSpam);
          } else {
            push(tmp19.FriendRequestsIncoming);
          }
        } else if (constants.PENDING_OUTGOING === type) {
          items.push(closure_16.FriendRequests);
          items.push(closure_16.FriendRequestsOutgoing);
        } else if (constants.SUGGESTION === type) {
          items.push(closure_16.FriendSuggestions);
        } else if (constants.FRIEND === type) {
          if (tmp2 > 0) {
            items.push(closure_16.AffinitySuggestions);
          }
          items.push(closure_16.Friends);
          const keys = Object.keys();
          if (keys !== undefined) {
            if (keys[tmp] !== undefined) {
              items.push(names[tmp25][0].charAt(0).toLocaleUpperCase());
              const charAtResult = names[tmp25][0].charAt(0);
              const str = names[tmp25][0];
            }
          }
        }
        return items;
      }, (names) => {
        names = names.names;
        const keys = Object.keys();
        if (keys !== undefined) {
          if (keys[tmp] !== undefined) {
            return names[tmp3][0];
          }
        }
        return "";
      });
      self.indexMap = secondaryIndexMap;
      self.filteredFriends = null;
      self.filteredGuildMembers = null;
      self.withGameFriends = false;
      self.handlePostConnectionOpen = () => {
        const result = self.initializeUsersFromStores();
      };
      self.handleRelationship = (relationship) => {
        if (self.updateUser(relationship.relationship.id)) {
          const onUpdate = self.onUpdate;
          if (null != onUpdate) {
            onUpdate.call(self);
          }
        }
      };
      self.handleFriendSuggestionCreate = (suggestion) => {
        if (self.updateUser(suggestion.suggestion.suggested_user.id)) {
          const onUpdate = self.onUpdate;
          if (null != onUpdate) {
            onUpdate.call(self);
          }
        }
      };
      self.handleFriendSuggestionDelete = (suggestedUserId) => {
        if (self.updateUser(suggestedUserId.suggestedUserId)) {
          const onUpdate = self.onUpdate;
          if (null != onUpdate) {
            onUpdate.call(self);
          }
        }
      };
      self.handleGameRelationshipAdd = (arg0) => {
        if (self.withGameFriends) {
          if (self.updateUser(tmp.id)) {
            const onUpdate = self.onUpdate;
            if (null != onUpdate) {
              onUpdate.call(self);
            }
          }
        } else {
          return false;
        }
      };
      self.handleGameRelationshipRemove = (arg0) => {
        if (self.withGameFriends) {
          if (self.updateUser(tmp)) {
            const onUpdate = self.onUpdate;
            if (null != onUpdate) {
              onUpdate.call(self);
            }
          }
        } else {
          return false;
        }
      };
      self.handleGuildMember = (user) => {
        if (self.updateUser(user.user.id)) {
          const onUpdate = self.onUpdate;
          if (null != onUpdate) {
            onUpdate.call(self);
          }
        }
      };
      self.handleGuildMembersChunkBatch = (chunks) => {
        let iter6;
        const tmp = callback(chunks.chunks);
        const iter = tmp();
        let iter2 = iter;
        let flag = false;
        let flag2 = false;
        if (!iter.done) {
          do {
            let tmp2 = closure_19;
            let tmp3 = closure_19(iter2.value.members);
            let iter3 = tmp3();
            let tmp4 = flag;
            let iter4 = iter3;
            let tmp5 = flag;
            if (!iter3.done) {
              do {
                let tmp6 = closure_0;
                let tmp7 = closure_0.updateUser(iter4.value.user.id) || tmp4;
                let iter5 = tmp3();
                tmp4 = tmp7;
                iter4 = iter5;
                tmp5 = tmp7;
              } while (!iter5.done);
            }
            iter6 = tmp();
            flag = tmp5;
            iter2 = iter6;
            flag2 = tmp5;
          } while (!iter6.done);
        }
        if (flag2) {
          const onUpdate = self.onUpdate;
          if (null != onUpdate) {
            onUpdate.call(self);
          }
        }
      };
      self.handleUserAffinitiesUpdate = () => {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        if (!arg0(closure_2[13]).shouldUseCache) {
          const userAffinities = userAffinities.getUserAffinities();
          const item = userAffinities.forEach((otherUserId) => {
            otherUserId = otherUserId.otherUserId;
            closure_0.affinities[otherUserId] = otherUserId.communicationProbability;
            if (otherUserId.communicationRank <= 5) {
              closure_0.updateUser(otherUserId);
            }
          });
          if (!flag) {
            const onUpdate = self.onUpdate;
            flag = null == onUpdate;
            const obj = onUpdate;
          }
          if (!flag) {
            obj.call(self);
          }
        }
      };
      self.withGameFriends = flag;
      if (arg0(closure_2[13]).shouldUseCache) {
        result = self.initializeUsersFromCache();
        nextPromise = result.then(() => {
          let tmp;
          if (null != arg0) {
            tmp = arg0();
          }
          return tmp;
        });
      } else {
        result1 = self.initializeUsersFromStores();
      }
      return;
    }
  }
  const arg1 = UserSearch;
  let obj = {
    key: "subscribe",
    value: function subscribe(onUpdate) {
      let flag = arg1;
      const self = this;
      const UserSearch = this;
      if (arg1 === undefined) {
        flag = true;
      }
      self.onUpdate = onUpdate;
      let userSearchContext = null;
      if (flag) {
        userSearchContext = callback(closure_2[14]).getUserSearchContext((results) => {
          results = results.results;
          let self;
          if (self.currentQuery === results.query) {
            const items = [];
            self = items;
            if (results.reduce((arg0, id) => {
              if (callback(closure_2[13]).shouldUseCache) {
                return false;
              } else if (set.has(relationshipType.getRelationshipType(id.id))) {
                return arg0;
              } else {
                if (items.withGameFriends) {
                  if (gameFriendsForUser.getGameFriendsForUser(id.id).length > 0) {
                    return arg0;
                  }
                }
                const value = items.getItem(id.id);
                let flag = arg0;
                if (null != value) {
                  items.push(value);
                  flag = true;
                }
                return flag;
              }
            }, false)) {
              self.filteredGuildMembers = items;
              const onUpdate = self.onUpdate;
              if (null != onUpdate) {
                onUpdate.call(self);
              }
            }
          }
        }, 20);
        const obj = callback(closure_2[14]);
      }
      self.userSearchContext = userSearchContext;
      const subscription = callback(closure_2[15]).subscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
      const obj2 = callback(closure_2[15]);
      const subscription1 = callback(closure_2[15]).subscribe("RELATIONSHIP_ADD", self.handleRelationship);
      const obj3 = callback(closure_2[15]);
      const subscription2 = callback(closure_2[15]).subscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
      const obj4 = callback(closure_2[15]);
      const subscription3 = callback(closure_2[15]).subscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
      const obj5 = callback(closure_2[15]);
      const subscription4 = callback(closure_2[15]).subscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
      const obj6 = callback(closure_2[15]);
      const subscription5 = callback(closure_2[15]).subscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
      const obj7 = callback(closure_2[15]);
      const subscription6 = callback(closure_2[15]).subscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
      const obj8 = callback(closure_2[15]);
      const subscription7 = callback(closure_2[15]).subscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
      const obj9 = callback(closure_2[15]);
      const subscription8 = callback(closure_2[15]).subscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
      const obj10 = callback(closure_2[15]);
      const subscription9 = callback(closure_2[15]).subscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
      const obj11 = callback(closure_2[15]);
      const subscription10 = callback(closure_2[15]).subscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
      const obj12 = callback(closure_2[15]);
      const subscription11 = callback(closure_2[15]).subscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
      closure_10.addChangeListener(self.handleUserAffinitiesUpdate);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "unsubscribe",
    value: function unsubscribe() {
      const self = this;
      this.onUpdate = undefined;
      const userSearchContext = this.userSearchContext;
      if (null != userSearchContext) {
        userSearchContext.destroy();
      }
      callback(closure_2[15]).unsubscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
      const obj = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("RELATIONSHIP_ADD", self.handleRelationship);
      const obj2 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
      const obj3 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
      const obj4 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
      const obj5 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
      const obj6 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
      const obj7 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
      const obj8 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
      const obj9 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
      const obj10 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
      const obj11 = callback(closure_2[15]);
      callback(closure_2[15]).unsubscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
      closure_10.removeChangeListener(self.handleUserAffinitiesUpdate);
    }
  };
  items[1] = obj;
  obj = {
    key: "fetch",
    value: function fetch(globalName) {
      const self = this;
      let obj = UserSearch(closure_2[16]);
      const cleanStringResult = obj.cleanString(globalName);
      if ("" === cleanStringResult) {
        const userSearchContext2 = self.userSearchContext;
        if (null != userSearchContext2) {
          userSearchContext2.clearQuery();
        }
      } else {
        if (arg1) {
          const members = callback(closure_2[17]).requestMembers(null, cleanStringResult);
          const obj2 = callback(closure_2[17]);
        }
        const userSearchContext = self.userSearchContext;
        if (null != userSearchContext) {
          obj = { query: cleanStringResult, boosters: self.affinities, boosterFallback: 0.002592 };
          userSearchContext.setQuery(obj);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "filter",
    value: function filter(globalName) {
      const self = this;
      const UserSearch = this;
      let obj = UserSearch(closure_2[16]);
      const cleanStringResult = obj.cleanString(globalName);
      if (this.currentQuery === cleanStringResult) {
        if ("" === self.currentQuery) {
          obj = {};
          const indexMap2 = self.indexMap;
          const merged = Object.assign(indexMap2.indexes());
          const Friends = closure_16.Friends;
          delete r0[r1];
          return obj;
        } else {
          obj = {};
          const obj4 = cleanStringResult(closure_2[18]);
          obj[closure_16.Friends] = obj4.sortBy(cleanStringResult(closure_2[18]).uniqBy(self.filteredFriends, (user) => user.user.id), (names) => callback2(names.names, cleanStringResult), (affinity) => -affinity.affinity);
          const obj5 = cleanStringResult(closure_2[18]);
          const obj6 = cleanStringResult(closure_2[18]);
          obj[closure_16.GuildMembers] = obj6.sortBy(cleanStringResult(closure_2[18]).uniqBy(self.filteredGuildMembers, (user) => user.user.id), (names) => callback2(names.names, cleanStringResult), (affinity) => -affinity.affinity);
          return obj;
        }
      } else {
        if ("" === cleanStringResult) {
          self.filteredFriends = null;
          self.filteredGuildMembers = null;
        } else {
          self.filteredFriends = [];
          const indexMap = self.indexMap;
          const values = indexMap.values(closure_16.Friends);
          const item = values.forEach((names) => {
            const tmp = callback(names.names, cleanStringResult, { contains: true });
            if (null != tmp) {
              const filteredFriends = self.filteredFriends;
              if (null != filteredFriends) {
                const obj = {};
                const merged = Object.assign(names);
                obj["firstMatch"] = tmp;
                filteredFriends.push(obj);
              }
            }
          });
        }
        self.currentQuery = cleanStringResult;
      }
    }
  };
  items[4] = {
    key: "initializeUsersFromStores",
    value: function initializeUsersFromStores() {
      let done;
      let done2;
      const self = this;
      const UserSearch = this;
      const mutableRelationships = mutableRelationships.getMutableRelationships();
      const tmp = callback3(mutableRelationships.keys());
      let iter = tmp();
      if (!iter.done) {
        do {
          let updateUserResult = self.updateUser(iter.value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      if (self.withGameFriends) {
        const gameRelationships = authStore.getGameRelationships();
        const values = gameRelationships.values();
        const item = values.forEach((id) => {
          self.updateUser(id.id);
        });
      }
      const tmp5 = callback3(suggestions.getSuggestions());
      let iter3 = tmp5();
      if (!iter3.done) {
        do {
          let updateUserResult1 = self.updateUser(iter3.value.user.id);
          let iter4 = tmp5();
          iter3 = iter4;
          done2 = iter4.done;
        } while (!done2);
      }
      const result = self.handleUserAffinitiesUpdate(true);
    }
  };
  items[5] = {
    key: "initializeUsersFromCache",
    value: function initializeUsersFromCache() {
      const UserSearch = this;
      const all = callback(closure_2[13]).getAll();
      return all.then((arg0) => {
        let done;
        const tmp = callback(arg0);
        let iter = tmp();
        if (!iter.done) {
          do {
            let tmp2 = closure_0;
            let updateUserCachedResult = closure_0.updateUserCached(iter.value);
            let iter2 = tmp();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      });
    }
  };
  items[6] = {
    key: "updateUser",
    value: function updateUser(id) {
      const self = this;
      if (callback(closure_2[13]).shouldUseCache) {
        return false;
      } else {
        if (!self.withGameFriends) {
          if (!set.has(obj.getRelationshipType(id))) {
            const indexMap = self.indexMap;
            return indexMap.delete(id);
          }
          const obj = UserSearch(closure_2[16]);
        }
        const value = self.getItem(id);
        if (null == value) {
          const indexMap3 = self.indexMap;
          let deleteResult = indexMap3.delete(id);
        } else {
          const indexMap2 = self.indexMap;
          deleteResult = indexMap2.set(id, value);
        }
        return deleteResult;
      }
    }
  };
  items[7] = {
    key: "getItem",
    value: function getItem(arg0) {
      let names;
      let nick;
      const self = this;
      const user = user.getUser(arg0);
      if (null == user) {
        return null;
      } else {
        names = UserSearch(closure_2[16]).getNames(user);
        ({ nick, names } = names);
        let obj = { user, names };
        let num = 0;
        if (null != self.affinities[user.id]) {
          num = tmp17;
        }
        obj.affinity = num;
        if ("" !== self.currentQuery) {
          obj = { contains: true };
          nick = callback4(names, self.currentQuery, obj);
        }
        obj.firstMatch = nick;
        let obj1 = UserSearch(closure_2[16]);
        const relationshipType = obj1.getRelationshipType(user.id);
        if (relationshipType !== constants.FRIEND) {
          const gameFriendsForUser = authStore.getGameFriendsForUser(arg0);
          if (gameFriendsForUser.length > 0) {
            obj = {};
            const merged = Object.assign(obj);
            obj["type"] = gameFriendsForUser[0].type;
            return obj;
          }
        }
        obj1 = {};
        const merged1 = Object.assign(obj);
        obj1["type"] = relationshipType;
        return obj1;
      }
    }
  };
  items[8] = {
    key: "updateUserCached",
    value: function updateUserCached(value) {
      const self = this;
      if (set.has(value.type)) {
        const itemCached = self.getItemCached(value);
        if (null == itemCached) {
          const indexMap3 = self.indexMap;
          let deleteResult = indexMap3.delete(value.id);
        } else {
          const indexMap2 = self.indexMap;
          deleteResult = indexMap2.set(value.id, itemCached);
        }
        return deleteResult;
      } else {
        const indexMap = self.indexMap;
        return indexMap.delete(value.id);
      }
    }
  };
  items[9] = {
    key: "getItemCached",
    value: function getItemCached(value) {
      let currentQuery = value;
      const self = this;
      if (null == value) {
        return null;
      } else {
        const obj = { type: currentQuery.type };
        const prototype = ctor.prototype;
        const tmp4 = new ctor(currentQuery.user);
        obj.user = tmp4;
        ({ names: obj.names, affinity: obj.affinity } = currentQuery);
        if ("" !== self.currentQuery) {
          currentQuery = self.currentQuery;
          let nick = callback4(currentQuery.names, currentQuery);
        } else {
          nick = currentQuery.nick;
        }
        obj.firstMatch = nick;
      }
    }
  };
  return callback2(UserSearch, items);
}();
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx");

export default function useUserListData(query) {
  query = query.query;
  const arg1 = query;
  const withGuildMembers = query.withGuildMembers;
  const importDefault = withGuildMembers;
  const withAffinitySuggestions = query.withAffinitySuggestions;
  const dependencyMap = withAffinitySuggestions;
  const withFriends = query.withFriends;
  let closure_3 = withFriends;
  const withGameFriends = query.withGameFriends;
  let closure_4 = withGameFriends;
  const withFriendSuggestions = query.withFriendSuggestions;
  let closure_5 = withFriendSuggestions;
  const withFriendRequests = query.withFriendRequests;
  const callback3 = withFriendRequests;
  const withFriendRequestsIncoming = query.withFriendRequestsIncoming;
  const React = withFriendRequestsIncoming;
  const withFriendRequestsOutgoing = query.withFriendRequestsOutgoing;
  let closure_8 = withFriendRequestsOutgoing;
  const withFriendRequestsSpam = query.withFriendRequestsSpam;
  let closure_9 = withFriendRequestsSpam;
  let flag = query.excludeCurrentUser;
  if (flag === undefined) {
    flag = false;
  }
  let closure_10 = flag;
  let num = query.affinitySuggestionsLimit;
  if (num === undefined) {
    num = 5;
  }
  let closure_11 = num;
  let flag2 = query.withAlphabeticalSections;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let closure_12 = flag2;
  let closure_13;
  let RelationshipTypes;
  let closure_16;
  const tmp = callback3(React.useState(0), 2);
  const first = tmp[0];
  closure_13 = first;
  RelationshipTypes = tmp3;
  const items = [tmp[1], withGameFriends];
  const memo = React.useMemo(() => new closure_17(() => callback(Date.now()), withGameFriends), items);
  const items1 = [first, memo, query];
  const first1 = callback3(React.useMemo(() => {
    const items = [memo.filter(query), first];
    return items;
  }, items1), 1)[0];
  closure_16 = first1;
  const items2 = [memo, withGuildMembers];
  const effect = React.useEffect(() => {
    let closure_0 = withGuildMembers(withAffinitySuggestions[18]).debounce(() => callback2(Date.now()), 0);
    const subscription = memo.subscribe(() => {
      callback();
    }, withGuildMembers);
    return () => closure_15.unsubscribe();
  }, items2);
  const items3 = [memo, query, withGuildMembers];
  const effect1 = React.useEffect(() => {
    const response = memo.fetch(query, withGuildMembers);
  }, items3);
  const effect2 = React.useEffect(() => {
    const userAffinitiesV2 = query(withAffinitySuggestions[20]).fetchUserAffinitiesV2();
  }, []);
  const items4 = [first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, flag, num, flag2];
  return React.useMemo(() => callback({ data: first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, excludeCurrentUser: flag, affinitySuggestionsLimit: num, withAlphabeticalSections: flag2 }), items4);
};
export const UserSearch = tmp3;
export { parseUserSearchResults };
