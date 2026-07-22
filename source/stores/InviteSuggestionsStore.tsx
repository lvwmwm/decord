// Module ID: 10057
// Function ID: 77674
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10057 (_isNativeReflectConstruct)
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
function _computeRows(query) {
  let done;
  const set = new Set();
  let type;
  if (null != type) {
    type = type.type;
  }
  let tmp3 = null == id;
  if (!tmp3) {
    tmp3 = closure_20 === InviteTargetTypes.EMBEDDED_APPLICATION;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  let id = null;
  if (!tmp3) {
    id = id.id;
  }
  const mostRecentDMedUser = arg1(dependencyMap[12]).getMostRecentDMedUser(set, id);
  let isBlockedOrIgnoredResult = null == mostRecentDMedUser;
  if (!isBlockedOrIgnoredResult) {
    isBlockedOrIgnoredResult = closure_11.isBlockedOrIgnored(mostRecentDMedUser.id);
  }
  if (!isBlockedOrIgnoredResult) {
    set.add(mostRecentDMedUser.id);
  }
  const tmp12 = _createForOfIteratorHelperLoose(userAffinities.getUserAffinities());
  let iter = tmp12();
  if (!iter.done) {
    do {
      let addResult1 = set.add(iter.value.otherUserId);
      let iter2 = tmp12();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  const set1 = new Set();
  const arg1 = set1;
  if (closure_20 === InviteTargetTypes.EMBEDDED_APPLICATION) {
    const channelHistory = channelHistory.getChannelHistory();
    const mapped = channelHistory.map((channelId) => channel.getChannel(channelId));
    const found = mapped.filter(arg1(dependencyMap[13]).isNotNullish);
    const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
    const found2 = found1.filter((channel) => closure_10.can(constants2.SEND_MESSAGES, channel));
    const substr = found2.slice(0, 3);
    const item = substr.forEach((id) => set1.add(id.id));
  }
  const obj2 = arg1(dependencyMap[12]);
  const tmp2 = type === constants.GUILD_VOICE;
  const obj = { query, omitUserIds: set, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: id, suggestedChannelIds: set1, inviteTargetType: closure_20 };
  return arg1(dependencyMap[12]).generateRowsForQuery(obj);
}
function _updateInviteSuggestions(rows) {
  let closure_22 = rows;
  const map = new Map();
  const item = rows.forEach((arg0, index) => {
    const result = map.set(arg0, { index });
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
({ ChannelTypes: closure_12, Permissions: closure_13 } = arg1(dependencyMap[10]));
const InviteTargetTypes = arg1(dependencyMap[11]).InviteTargetTypes;
const set = new Set();
let closure_22 = [];
const map = new Map();
let closure_24 = { -1830209273: -24, 2140842688: null, 562090611: 1, 948336869: "Malaysia" };
let tmp5 = (Store) => {
  class InviteSuggestionsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, InviteSuggestionsStore);
      obj = closure_5(InviteSuggestionsStore);
      tmp2 = closure_4;
      if (closure_25()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = InviteSuggestionsStore;
  callback2(InviteSuggestionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_7, closure_11, closure_8);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getInviteSuggestionRows",
    value() {
      return closure_22;
    }
  };
  items[1] = obj;
  obj = {
    key: "getTotalSuggestionsCount",
    value() {
      return closure_15;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getInitialCounts",
    value() {
      return closure_24;
    }
  };
  items[4] = {
    key: "getSelectedInviteMetadata",
    value(isSuggested) {
      const value = closure_23.get(isSuggested);
      const userAffinities = userAffinities.getUserAffinities();
      if (null != value) {
        const obj = { rowNum: value.index, isAffinitySuggestion: isSuggested.isSuggested, numTotal: length.length, numAffinityConnections: arr.length, isFiltered: closure_16 };
        return obj;
      }
    }
  };
  return callback(InviteSuggestionsStore, items);
}(importDefault(dependencyMap[14]).Store);
tmp5.displayName = "InviteSuggestionsStore";
tmp5 = new tmp5(importDefault(dependencyMap[15]), {
  LOAD_INVITE_SUGGESTIONS: function refreshInviteSuggestions(guild) {
    let channel;
    let inviteTargetType;
    let omitUserIds;
    ({ omitUserIds, channel, inviteTargetType } = guild);
    guild = null;
    if (null != channel) {
      guild = guild.guild;
    }
    const applicationId = guild.applicationId;
    const blockedOrIgnoredIDs = closure_11.getBlockedOrIgnoredIDs();
    let obj = arg1(dependencyMap[12]);
    obj = { channel, applicationId, inviteTargetType };
    const usersAlreadyJoined = obj.getUsersAlreadyJoined(obj);
    const items = [...usersAlreadyJoined];
    const set = new Set(items);
    let closure_16 = false;
    const tmp5 = _computeRows("");
    _updateInviteSuggestions(tmp5.rows);
    const counts = tmp5.counts;
  },
  INVITE_SUGGESTIONS_SEARCH: function handleSearch(query) {
    query = query.query;
    let closure_16 = "" !== query;
    const rows = _computeRows(query).rows;
    const sorted = rows.sort((score, score2) => {
      let num = 0;
      if (null != score.score) {
        num = 0;
        if (null != score2.score) {
          num = score.score - score2.score;
        }
      }
      return num;
    });
    _updateInviteSuggestions(rows);
  }
});
const obj = {
  LOAD_INVITE_SUGGESTIONS: function refreshInviteSuggestions(guild) {
    let channel;
    let inviteTargetType;
    let omitUserIds;
    ({ omitUserIds, channel, inviteTargetType } = guild);
    guild = null;
    if (null != channel) {
      guild = guild.guild;
    }
    const applicationId = guild.applicationId;
    const blockedOrIgnoredIDs = closure_11.getBlockedOrIgnoredIDs();
    let obj = arg1(dependencyMap[12]);
    obj = { channel, applicationId, inviteTargetType };
    const usersAlreadyJoined = obj.getUsersAlreadyJoined(obj);
    const items = [...usersAlreadyJoined];
    const set = new Set(items);
    let closure_16 = false;
    const tmp5 = _computeRows("");
    _updateInviteSuggestions(tmp5.rows);
    const counts = tmp5.counts;
  },
  INVITE_SUGGESTIONS_SEARCH: function handleSearch(query) {
    query = query.query;
    let closure_16 = "" !== query;
    const rows = _computeRows(query).rows;
    const sorted = rows.sort((score, score2) => {
      let num = 0;
      if (null != score.score) {
        num = 0;
        if (null != score2.score) {
          num = score.score - score2.score;
        }
      }
      return num;
    });
    _updateInviteSuggestions(rows);
  }
};
const tmp2 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("stores/InviteSuggestionsStore.tsx");

export default tmp5;
