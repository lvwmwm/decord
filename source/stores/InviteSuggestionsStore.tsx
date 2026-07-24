// Module ID: 10097
// Function ID: 77908
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 7089, 6901, 1348, 3758, 3767, 653, 6978, 8528, 1327, 566, 686, 2]

// Module 10097 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { InviteTargetTypes } from "InviteSendStates";
import set from "_possibleConstructorReturn";

let closure_12;
let closure_13;
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
  id = null;
  if (!tmp3) {
    id = id.id;
  }
  const mostRecentDMedUser = set1(8528).getMostRecentDMedUser(set, id);
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
  set1 = new Set();
  if (closure_20 === InviteTargetTypes.EMBEDDED_APPLICATION) {
    channelHistory = channelHistory.getChannelHistory();
    const mapped = channelHistory.map((channelId) => outer1_9.getChannel(channelId));
    const found = mapped.filter(set1(1327).isNotNullish);
    const found1 = found.filter((type) => type.type === outer1_12.GUILD_TEXT);
    const found2 = found1.filter((channel) => outer1_10.can(outer1_13.SEND_MESSAGES, channel));
    const substr = found2.slice(0, 3);
    const item = substr.forEach((id) => set1.add(id.id));
  }
  const obj2 = set1(8528);
  tmp2 = type === constants.GUILD_VOICE;
  const obj = { query, omitUserIds: set, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: id, suggestedChannelIds: set1, inviteTargetType: closure_20 };
  return set1(8528).generateRowsForQuery(obj);
}
function _updateInviteSuggestions(rows) {
  let closure_22 = rows;
  const map = new Map();
  const item = rows.forEach((arg0, index) => {
    const result = map.set(arg0, { index });
  });
}
({ ChannelTypes: closure_12, Permissions: closure_13 } = ME);
let set = new Set();
let closure_22 = [];
let map = new Map();
let closure_24 = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
let tmp5 = ((Store) => {
  class InviteSuggestionsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, InviteSuggestionsStore);
      obj = outer1_5(InviteSuggestionsStore);
      tmp2 = outer1_4;
      if (outer1_25()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(InviteSuggestionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_7, outer1_11, outer1_8);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getInviteSuggestionRows",
    value() {
      return outer1_22;
    }
  };
  items[1] = obj;
  obj = {
    key: "getTotalSuggestionsCount",
    value() {
      return outer1_15;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getInitialCounts",
    value() {
      return outer1_24;
    }
  };
  items[4] = {
    key: "getSelectedInviteMetadata",
    value(isSuggested) {
      const value = outer1_23.get(isSuggested);
      const userAffinities = outer1_8.getUserAffinities();
      if (null != value) {
        const obj = { rowNum: value.index, isAffinitySuggestion: isSuggested.isSuggested, numTotal: outer1_22.length, numAffinityConnections: arr.length, isFiltered: outer1_16 };
        return obj;
      }
    }
  };
  return callback(InviteSuggestionsStore, items);
})(require("initialize").Store);
tmp5.displayName = "InviteSuggestionsStore";
tmp5 = new tmp5(require("dispatcher"), {
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
    let obj = require(8528) /* _createForOfIteratorHelperLoose */;
    obj = { channel, applicationId, inviteTargetType };
    const usersAlreadyJoined = obj.getUsersAlreadyJoined(obj);
    const items = [...usersAlreadyJoined];
    const set = new Set(items);
    let c16 = false;
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
let result = set.fileFinishedImporting("stores/InviteSuggestionsStore.tsx");

export default tmp5;
