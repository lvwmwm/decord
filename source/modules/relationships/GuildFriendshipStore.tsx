// Module ID: 12698
// Function ID: 98737
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5048, 566, 686, 2]

// Module 12698 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getFetchState(arg0) {
  let fetchState;
  if (null != dependencyMap[arg0]) {
    fetchState = tmp.fetchState;
  }
  if (null == fetchState) {
    fetchState = constants.NOT_FETCHED;
  }
  return fetchState;
}
function resetStates() {
  let closure_8 = {};
}
let closure_7 = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let closure_8 = {};
let c9 = 0;
let tmp2 = ((Store) => {
  class GuildFriendshipStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildFriendshipStore);
      obj = outer1_5(GuildFriendshipStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(GuildFriendshipStore, Store);
  let obj = {
    key: "isFetchingFriendsForGuild",
    value(arg0) {
      return outer1_11(arg0) === outer1_7.FETCHING;
    }
  };
  const items = [obj, ];
  obj = {
    key: "fetchFriendMembersIfNotFetched",
    value(id1, items) {
      if (outer1_11(id1) === outer1_7.NOT_FETCHED) {
        const obj = { fetchState: outer1_7.FETCHING, foundMembers: 0, notFoundMembers: 0 };
        outer1_8[id1] = obj;
        const outer1_9 = items.length;
        const membersById = GuildFriendshipStore(outer1_1[5]).requestMembersById(id1, items, false);
        const obj2 = GuildFriendshipStore(outer1_1[5]);
      }
    }
  };
  items[1] = obj;
  return callback(GuildFriendshipStore, items);
})(require("initialize").Store);
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: resetStates,
  LOGOUT: resetStates,
  RELATIONSHIP_ADD: resetStates,
  RELATIONSHIP_REMOVE: resetStates,
  GUILD_MEMBERS_CHUNK_BATCH: function onMemberChunk(arg0) {
    const first = arg0.chunks[0];
    const guildId = first.guildId;
    if (getFetchState(guildId) === constants.FETCHING) {
      dependencyMap[guildId].foundMembers = dependencyMap[guildId].foundMembers + first.members.length;
      const notFound = first.notFound;
      let length;
      if (null != notFound) {
        length = notFound.length;
      }
      let num = 0;
      if (null != length) {
        num = length;
      }
      dependencyMap[guildId].notFoundMembers = dependencyMap[guildId].notFoundMembers + num;
      if (dependencyMap[guildId].foundMembers + dependencyMap[guildId].notFoundMembers >= c9) {
        dependencyMap[guildId].fetchState = constants.FETCHED;
      }
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/relationships/GuildFriendshipStore.tsx");

export default tmp2;
