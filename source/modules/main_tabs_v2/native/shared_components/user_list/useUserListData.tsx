// Module ID: 8820
// Function ID: 69503
// Name: _toPropertyKey
// Dependencies: [29, 6, 7, 57, 31, 6905, 6901, 6902, 1857, 3767, 1849, 653, 3754, 6900, 7098, 686, 6904, 5047, 22, 1212, 8821, 2]
// Exports: default

// Module 8820 (_toPropertyKey)
import _objectWithoutProperties from "_objectWithoutProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
import set from "_defineProperties";

const require = arg1;
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
function isMatch(arg0, arg1, arg2) {
  let obj = arg2;
  let closure_0 = arg1;
  if (null == arg2) {
    obj = {};
  }
  const exact = obj.exact;
  let closure_1 = undefined !== exact && exact;
  const contains = obj.contains;
  let closure_2 = undefined !== contains && contains;
  function _loop(arr) {
    let closure_0 = arr;
    if (arr.some((str) => {
      if (outer1_1) {
        return str === arr;
      } else if (str.startsWith(arr)) {
        return true;
      } else {
        const joined = arr.join(" ");
        const tmp4 = !joined.startsWith(arr);
        let tmp5 = !tmp4;
        if (tmp4) {
          let hasItem = outer1_2;
          if (outer1_2) {
            hasItem = joined.includes(arr);
          }
          tmp5 = hasItem;
        }
        return tmp5;
      }
    })) {
      const obj = { v: _objectWithoutProperties };
      return obj;
    }
  }
  const entries = Object.entries(arg0);
  let num = 0;
  if (0 < entries.length) {
    const tmp2 = callback3(entries[num], 2);
    let _objectWithoutProperties = tmp2[0];
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
  let id;
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
  currentUser = currentUser.getCurrentUser();
  id = undefined;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let found = items7;
  if (excludeCurrentUser) {
    found = items7.filter((user) => user.user.id !== id);
  }
  if (withFriends) {
    const mapped = importDefault(22)(tmp).map((items, title) => ({ title, items }));
    const arr12 = importDefault(22)(tmp);
    items = mapped.sortBy((title) => title.title).value();
    const iter = mapped.sortBy((title) => title.title);
  } else {
    items = [];
  }
  let obj = { title: null, items: items.flatMap((items) => items.items) };
  let items9 = [obj];
  obj = {};
  const intl = id(1212).intl;
  obj.title = intl.string(id(1212).t.HbJ7eD);
  if (withAffinitySuggestions) {
    let obj3 = importDefault(22)(items);
    const sortByResult = obj3.sortBy((affinity) => -affinity.affinity);
    let valueResult = obj3.sortBy((affinity) => -affinity.affinity).slice(0, num).value();
    const iter2 = obj3.sortBy((affinity) => -affinity.affinity).slice(0, num);
  } else {
    valueResult = [];
  }
  obj.items = valueResult;
  const items10 = [obj, , , , , , , ];
  const obj1 = {};
  const intl2 = id(1212).intl;
  const obj2 = { pendingRequestNumber: items1.length };
  obj1.title = intl2.formatToPlainString(id(1212).t.zsVtft, obj2);
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
  const intl3 = id(1212).intl;
  const obj7 = { count: items5.length };
  obj6.title = intl3.formatToPlainString(id(1212).t["DYMZ/p"], obj7);
  if (!withFriendSuggestions) {
    items5 = [];
  }
  obj6.items = items5;
  items10[5] = obj6;
  const obj8 = {};
  const intl4 = id(1212).intl;
  obj8.title = intl4.string(id(1212).t.TdEu5X);
  if (!withFriends) {
    items6 = [];
  }
  obj8.items = items6;
  items10[6] = obj8;
  const obj9 = {};
  const intl5 = id(1212).intl;
  obj9.title = intl5.string(id(1212).t.y29JXs);
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
let items = [, , , ];
({ FRIEND: arr[0], SUGGESTION: arr[1], PENDING_INCOMING: arr[2], PENDING_OUTGOING: arr[3] } = RelationshipTypes);
let set = new Set(items);
let closure_16 = { AffinitySuggestions: "AFFINITY_SUGGESTIONS", Friends: "FRIENDS", FriendRequests: "FRIEND_REQUESTS", FriendRequestsIncoming: "FRIEND_REQUESTS_INCOMING", FriendRequestsOutgoing: "FRIEND_REQUESTS_OUTGOING", FriendRequestsSpam: "FRIEND_REQUESTS_SPAM", FriendSuggestions: "FRIEND_SUGGESTIONS", GuildMembers: "GUILD_MEMBERS" };
let tmp3 = (() => {
  class UserSearch {
    constructor(arg0) {
      flag = arg1;
      self = this;
      self = this;
      closure_1 = arg0;
      if (arg1 === undefined) {
        flag = false;
      }
      tmp = outer1_4(self, self);
      self.currentQuery = "";
      self.affinities = {};
      self.userSearchContext = null;
      secondaryIndexMap = new UserSearch(outer1_2[12]).SecondaryIndexMap((arg0) => {
        let names;
        let type;
        ({ names, type } = arg0);
        const items = [];
        if (outer2_14.PENDING_INCOMING === type) {
          items.push(outer2_16.FriendRequests);
          const push = items.push;
          if (outer2_12.isSpam(tmp3.id)) {
            push(tmp19.FriendRequestsSpam);
          } else {
            push(tmp19.FriendRequestsIncoming);
          }
        } else if (outer2_14.PENDING_OUTGOING === type) {
          items.push(outer2_16.FriendRequests);
          items.push(outer2_16.FriendRequestsOutgoing);
        } else if (outer2_14.SUGGESTION === type) {
          items.push(outer2_16.FriendSuggestions);
        } else if (outer2_14.FRIEND === type) {
          if (tmp2 > 0) {
            items.push(outer2_16.AffinitySuggestions);
          }
          items.push(outer2_16.Friends);
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
        const tmp = outer2_19(chunks.chunks);
        const iter = tmp();
        let iter2 = iter;
        let flag = false;
        let flag2 = false;
        if (!iter.done) {
          do {
            let tmp2 = outer2_19;
            let tmp3 = outer2_19(iter2.value.members);
            let iter3 = tmp3();
            let tmp4 = flag;
            let iter4 = iter3;
            let tmp5 = flag;
            if (!iter3.done) {
              do {
                let tmp6 = self;
                let tmp7 = self.updateUser(iter4.value.user.id) || tmp4;
                iter5 = tmp3();
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
        if (!outer2_1(outer2_2[13]).shouldUseCache) {
          const userAffinities = outer2_10.getUserAffinities();
          const item = userAffinities.forEach((otherUserId) => {
            otherUserId = otherUserId.otherUserId;
            outer1_0.affinities[otherUserId] = otherUserId.communicationProbability;
            if (otherUserId.communicationRank <= 5) {
              outer1_0.updateUser(otherUserId);
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
      if (outer1_1(outer1_2[13]).shouldUseCache) {
        result = self.initializeUsersFromCache();
        nextPromise = result.then(() => {
          let tmp;
          if (null != callback) {
            tmp = callback();
          }
          return tmp;
        });
      } else {
        result1 = self.initializeUsersFromStores();
      }
      return;
    }
  }
  let obj = {
    key: "subscribe",
    value: function subscribe(onUpdate) {
      let flag = arg1;
      let self = this;
      self = this;
      if (arg1 === undefined) {
        flag = true;
      }
      self.onUpdate = onUpdate;
      let userSearchContext = null;
      if (flag) {
        userSearchContext = outer1_1(outer1_2[14]).getUserSearchContext((results) => {
          results = results.results;
          let items;
          if (items.currentQuery === results.query) {
            items = [];
            if (results.reduce((arg0, id) => {
              if (outer3_1(outer3_2[13]).shouldUseCache) {
                return false;
              } else if (outer3_15.has(outer3_12.getRelationshipType(id.id))) {
                return arg0;
              } else {
                if (items.withGameFriends) {
                  if (outer3_9.getGameFriendsForUser(id.id).length > 0) {
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
              items.filteredGuildMembers = items;
              const onUpdate = items.onUpdate;
              if (null != onUpdate) {
                onUpdate.call(items);
              }
            }
          }
        }, 20);
        const obj = outer1_1(outer1_2[14]);
      }
      self.userSearchContext = userSearchContext;
      const subscription = outer1_1(outer1_2[15]).subscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
      const obj2 = outer1_1(outer1_2[15]);
      const subscription1 = outer1_1(outer1_2[15]).subscribe("RELATIONSHIP_ADD", self.handleRelationship);
      const obj3 = outer1_1(outer1_2[15]);
      const subscription2 = outer1_1(outer1_2[15]).subscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
      const obj4 = outer1_1(outer1_2[15]);
      const subscription3 = outer1_1(outer1_2[15]).subscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
      const obj5 = outer1_1(outer1_2[15]);
      const subscription4 = outer1_1(outer1_2[15]).subscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
      const obj6 = outer1_1(outer1_2[15]);
      const subscription5 = outer1_1(outer1_2[15]).subscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
      const obj7 = outer1_1(outer1_2[15]);
      const subscription6 = outer1_1(outer1_2[15]).subscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
      const obj8 = outer1_1(outer1_2[15]);
      const subscription7 = outer1_1(outer1_2[15]).subscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
      const obj9 = outer1_1(outer1_2[15]);
      const subscription8 = outer1_1(outer1_2[15]).subscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
      const obj10 = outer1_1(outer1_2[15]);
      const subscription9 = outer1_1(outer1_2[15]).subscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
      const obj11 = outer1_1(outer1_2[15]);
      const subscription10 = outer1_1(outer1_2[15]).subscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
      const obj12 = outer1_1(outer1_2[15]);
      const subscription11 = outer1_1(outer1_2[15]).subscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
      outer1_10.addChangeListener(self.handleUserAffinitiesUpdate);
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "unsubscribe",
    value: function unsubscribe() {
      const self = this;
      this.onUpdate = undefined;
      const userSearchContext = this.userSearchContext;
      if (null != userSearchContext) {
        userSearchContext.destroy();
      }
      outer1_1(outer1_2[15]).unsubscribe("POST_CONNECTION_OPEN", self.handlePostConnectionOpen);
      const obj = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("RELATIONSHIP_ADD", self.handleRelationship);
      const obj2 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("RELATIONSHIP_REMOVE", self.handleRelationship);
      const obj3 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("RELATIONSHIP_UPDATE", self.handleRelationship);
      const obj4 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("GAME_RELATIONSHIP_ADD", self.handleGameRelationshipAdd);
      const obj5 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("GAME_RELATIONSHIP_REMOVE", self.handleGameRelationshipRemove);
      const obj6 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("FRIEND_SUGGESTION_CREATE", self.handleFriendSuggestionCreate);
      const obj7 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("FRIEND_SUGGESTION_DELETE", self.handleFriendSuggestionDelete);
      const obj8 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("GUILD_MEMBER_ADD", self.handleGuildMember);
      const obj9 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("GUILD_MEMBER_UPDATE", self.handleGuildMember);
      const obj10 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("GUILD_MEMBER_REMOVE", self.handleGuildMember);
      const obj11 = outer1_1(outer1_2[15]);
      outer1_1(outer1_2[15]).unsubscribe("GUILD_MEMBERS_CHUNK_BATCH", self.handleGuildMembersChunkBatch);
      outer1_10.removeChangeListener(self.handleUserAffinitiesUpdate);
    }
  };
  items[1] = obj;
  obj = {
    key: "fetch",
    value: function fetch(globalName) {
      const self = this;
      let obj = UserSearch(outer1_2[16]);
      const cleanStringResult = obj.cleanString(globalName);
      if ("" === cleanStringResult) {
        const userSearchContext2 = self.userSearchContext;
        if (null != userSearchContext2) {
          userSearchContext2.clearQuery();
        }
      } else {
        if (arg1) {
          const members = outer1_1(outer1_2[17]).requestMembers(null, cleanStringResult);
          const obj2 = outer1_1(outer1_2[17]);
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
      let self = this;
      self = this;
      let obj = UserSearch(outer1_2[16]);
      const cleanStringResult = obj.cleanString(globalName);
      let closure_1 = cleanStringResult;
      if (this.currentQuery === cleanStringResult) {
        if ("" === self.currentQuery) {
          obj = {};
          const indexMap2 = self.indexMap;
          let merged = Object.assign(indexMap2.indexes());
          const Friends = outer1_16.Friends;
          delete tmp[tmp2];
          return obj;
        } else {
          obj = {};
          const obj4 = outer1_1(outer1_2[18]);
          obj[outer1_16.Friends] = obj4.sortBy(outer1_1(outer1_2[18]).uniqBy(self.filteredFriends, (user) => user.user.id), (names) => outer2_22(names.names, closure_1), (affinity) => -affinity.affinity);
          const obj5 = outer1_1(outer1_2[18]);
          const obj6 = outer1_1(outer1_2[18]);
          obj[outer1_16.GuildMembers] = obj6.sortBy(outer1_1(outer1_2[18]).uniqBy(self.filteredGuildMembers, (user) => user.user.id), (names) => outer2_22(names.names, closure_1), (affinity) => -affinity.affinity);
          return obj;
        }
      } else {
        if ("" === cleanStringResult) {
          self.filteredFriends = null;
          self.filteredGuildMembers = null;
        } else {
          self.filteredFriends = [];
          const indexMap = self.indexMap;
          const values = indexMap.values(outer1_16.Friends);
          const item = values.forEach((names) => {
            const tmp = outer2_21(names.names, closure_1, { contains: true });
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
      let self = this;
      self = this;
      const mutableRelationships = outer1_12.getMutableRelationships();
      const tmp = outer1_19(mutableRelationships.keys());
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
        const gameRelationships = outer1_9.getGameRelationships();
        const values = gameRelationships.values();
        const item = values.forEach((id) => {
          self.updateUser(id.id);
        });
      }
      const tmp5 = outer1_19(outer1_8.getSuggestions());
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
      const self = this;
      const all = outer1_1(outer1_2[13]).getAll();
      return all.then((arg0) => {
        let done;
        const tmp = outer2_19(arg0);
        let iter = tmp();
        if (!iter.done) {
          do {
            let tmp2 = self;
            let updateUserCachedResult = self.updateUserCached(iter.value);
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
      if (outer1_1(outer1_2[13]).shouldUseCache) {
        return false;
      } else {
        if (!self.withGameFriends) {
          if (!outer1_15.has(obj.getRelationshipType(id))) {
            const indexMap = self.indexMap;
            return indexMap.delete(id);
          }
          obj = UserSearch(outer1_2[16]);
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
      const user = outer1_13.getUser(arg0);
      if (null == user) {
        return null;
      } else {
        names = UserSearch(outer1_2[16]).getNames(user);
        ({ nick, names } = names);
        let obj = { user, names };
        let num = 0;
        if (null != self.affinities[user.id]) {
          num = tmp17;
        }
        obj.affinity = num;
        if ("" !== self.currentQuery) {
          obj = { contains: true };
          nick = outer1_21(names, self.currentQuery, obj);
        }
        obj.firstMatch = nick;
        let obj1 = UserSearch(outer1_2[16]);
        const relationshipType = obj1.getRelationshipType(user.id);
        if (relationshipType !== outer1_14.FRIEND) {
          const gameFriendsForUser = outer1_9.getGameFriendsForUser(arg0);
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
      if (outer1_15.has(value.type)) {
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
        const prototype = outer1_11.prototype;
        const tmp4 = new outer1_11(currentQuery.user);
        obj.user = tmp4;
        ({ names: obj.names, affinity: obj.affinity } = currentQuery);
        if ("" !== self.currentQuery) {
          currentQuery = self.currentQuery;
          let nick = outer1_21(currentQuery.names, currentQuery);
        } else {
          nick = currentQuery.nick;
        }
        obj.firstMatch = nick;
      }
    }
  };
  return callback2(UserSearch, items);
})();
let closure_17 = tmp3;
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useUserListData.tsx");

export default function useUserListData(query) {
  query = query.query;
  const withGuildMembers = query.withGuildMembers;
  const withAffinitySuggestions = query.withAffinitySuggestions;
  const withFriends = query.withFriends;
  const withGameFriends = query.withGameFriends;
  const withFriendSuggestions = query.withFriendSuggestions;
  const withFriendRequests = query.withFriendRequests;
  const withFriendRequestsIncoming = query.withFriendRequestsIncoming;
  const withFriendRequestsOutgoing = query.withFriendRequestsOutgoing;
  const withFriendRequestsSpam = query.withFriendRequestsSpam;
  let flag = query.excludeCurrentUser;
  if (flag === undefined) {
    flag = false;
  }
  let num = query.affinitySuggestionsLimit;
  if (num === undefined) {
    num = 5;
  }
  let flag2 = query.withAlphabeticalSections;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let first;
  let c14;
  let memo;
  let first1;
  const tmp = withFriendRequests(withFriendRequestsIncoming.useState(0), 2);
  first = tmp[0];
  c14 = tmp3;
  let items = [tmp[1], withGameFriends];
  memo = withFriendRequestsIncoming.useMemo(() => new outer1_17(() => outer1_14(Date.now()), withGameFriends), items);
  const items1 = [first, memo, query];
  first1 = withFriendRequests(withFriendRequestsIncoming.useMemo(() => {
    const items = [memo.filter(query), first];
    return items;
  }, items1), 1)[0];
  const items2 = [memo, withGuildMembers];
  const effect = withFriendRequestsIncoming.useEffect(() => {
    let closure_0 = withGuildMembers(withAffinitySuggestions[18]).debounce(() => outer1_14(Date.now()), 0);
    const subscription = memo.subscribe(() => {
      callback();
    }, withGuildMembers);
    return () => outer1_15.unsubscribe();
  }, items2);
  const items3 = [memo, query, withGuildMembers];
  const effect1 = withFriendRequestsIncoming.useEffect(() => {
    const response = memo.fetch(query, withGuildMembers);
  }, items3);
  const effect2 = withFriendRequestsIncoming.useEffect(() => {
    const userAffinitiesV2 = query(withAffinitySuggestions[20]).fetchUserAffinitiesV2();
  }, []);
  const items4 = [first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, flag, num, flag2];
  return withFriendRequestsIncoming.useMemo(() => outer1_23({ data: first1, withGuildMembers, withAffinitySuggestions, withFriends, withGameFriends, withFriendSuggestions, withFriendRequests, withFriendRequestsIncoming, withFriendRequestsOutgoing, withFriendRequestsSpam, excludeCurrentUser: flag, affinitySuggestionsLimit: num, withAlphabeticalSections: flag2 }), items4);
};
export const UserSearch = tmp3;
export { parseUserSearchResults };
