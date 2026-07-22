// Module ID: 12533
// Function ID: 96260
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12533 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getFetchState(guildId) {
  let fetchState;
  if (null != closure_8[guildId]) {
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
let closure_8 = {};
let closure_9 = 0;
let tmp2 = (Store) => {
  class GuildFriendshipStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildFriendshipStore);
      obj = closure_5(GuildFriendshipStore);
      tmp2 = closure_4;
      if (closure_10()) {
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
  const importDefault = GuildFriendshipStore;
  callback2(GuildFriendshipStore, Store);
  let obj = {
    key: "isFetchingFriendsForGuild",
    value(arg0) {
      return callback4(arg0) === constants.FETCHING;
    }
  };
  const items = [obj, ];
  obj = {
    key: "fetchFriendMembersIfNotFetched",
    value(id1, items) {
      if (callback4(id1) === constants.NOT_FETCHED) {
        const obj = { fetchState: constants.FETCHING };
        closure_8[id1] = obj;
        const membersById = GuildFriendshipStore(closure_1[5]).requestMembersById(id1, items, false);
        const obj2 = GuildFriendshipStore(closure_1[5]);
      }
    }
  };
  items[1] = obj;
  return callback(GuildFriendshipStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  CONNECTION_OPEN: resetStates,
  LOGOUT: resetStates,
  RELATIONSHIP_ADD: resetStates,
  RELATIONSHIP_REMOVE: resetStates,
  GUILD_MEMBERS_CHUNK_BATCH: function onMemberChunk(arg0) {
    const first = arg0.chunks[0];
    const guildId = first.guildId;
    if (getFetchState(guildId) === constants.FETCHING) {
      closure_8[guildId].foundMembers = closure_8[guildId].foundMembers + first.members.length;
      const notFound = first.notFound;
      let length;
      if (null != notFound) {
        length = notFound.length;
      }
      let num = 0;
      if (null != length) {
        num = length;
      }
      closure_8[guildId].notFoundMembers = closure_8[guildId].notFoundMembers + num;
      if (closure_8[guildId].foundMembers + closure_8[guildId].notFoundMembers >= closure_9) {
        closure_8[guildId].fetchState = constants.FETCHED;
      }
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/relationships/GuildFriendshipStore.tsx");

export default tmp2;
