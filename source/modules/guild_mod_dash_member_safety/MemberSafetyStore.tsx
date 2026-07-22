// Module ID: 6721
// Function ID: 52261
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6721 (_isNativeReflectConstruct)
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
function getMemberSafetyPageStore(guildId) {
  if (null == closure_16[guildId]) {
    const prototype = ctor.prototype;
    const tmp6 = new ctor(guildId);
    closure_16[guildId] = tmp6;
  }
  return closure_16[guildId];
}
function resetMemberSafetyPageStore(id, isInitialized) {
  let flag = isInitialized;
  if (isInitialized === undefined) {
    flag = false;
  }
  getMemberSafetyPageStore(id).reset(flag);
}
function handleGuildMemberUpdate() {
  return false;
}
function handleGuildRoleUpdateOrDelete(guildId) {
  const obj = getMemberSafetyPageStore(guildId.guildId);
  let flag = false;
  if ("GUILD_ROLE_DELETE" === guildId.type) {
    flag = obj.removeRoleFromSearchState(guildId.roleId);
  }
  return obj.rebuildAllMembers() || flag;
}
function handleGuildRoleMemberUpdate(guildId) {
  const items = [guildId.userId];
  return getMemberSafetyPageStore(guildId.guildId).updateMembersByMemberIds(items);
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
let closure_13 = arg1(dependencyMap[10]).GuildMemberSafetyPageStore;
const EMPTY_STRING_SNOWFLAKE_ID = arg1(dependencyMap[11]).EMPTY_STRING_SNOWFLAKE_ID;
let closure_15 = false;
let closure_16 = {};
let tmp2 = (Store) => {
  class MemberSafetyStore {
    constructor() {
      self = this;
      tmp = closure_3(this, MemberSafetyStore);
      obj = closure_6(MemberSafetyStore);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MemberSafetyStore;
  callback2(MemberSafetyStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_11, closure_12);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , ];
  obj = {
    key: "isInitialized",
    value(arg0) {
      return callback4(arg0).isInitialized;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMembersByGuildId",
    value(arg0, arg1) {
      return callback4(arg0).getMembersByIndex(arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMembersCountByGuildId",
    value(arg0, arg1) {
      return callback4(arg0).countMembersByIndex(arg1);
    }
  };
  items[4] = {
    key: "getEstimatedMemberSearchCountByGuildId",
    value(arg0) {
      let countMembersByIndex;
      let searchChunkSize;
      const obj = callback4(arg0);
      ({ searchChunkSize, countMembersByIndex } = obj);
      let totalResultsCount = obj.getTotalResultsCount();
      if (null == totalResultsCount) {
        totalResultsCount = countMembersByIndexResult;
      }
      return totalResultsCount;
    }
  };
  items[5] = {
    key: "getKnownMemberSearchCountByGuildId",
    value(arg0) {
      const obj = callback4(arg0);
      return obj.countMembersByIndex(obj.getSearchIndex());
    }
  };
  items[6] = {
    key: "getCurrentMemberSearchResultsByGuildId",
    value(arg0) {
      const obj = callback4(arg0);
      return obj.getMembersByIndex(obj.getSearchIndex());
    }
  };
  items[7] = {
    key: "getSearchStateByGuildId",
    value(arg0) {
      return callback4(arg0).getSearchState();
    }
  };
  items[8] = {
    key: "hasDefaultSearchStateByGuildId",
    value(arg0) {
      return callback4(arg0).hasDefaultSearchState();
    }
  };
  items[9] = {
    key: "getPagedMembersByGuildId",
    value(arg0) {
      return callback4(arg0).getPaginatedMembers();
    }
  };
  items[10] = {
    key: "getPaginationStateByGuildId",
    value(arg0) {
      return callback4(arg0).getPaginationState();
    }
  };
  items[11] = {
    key: "getElasticSearchPaginationByGuildId",
    value(arg0) {
      return callback4(arg0).getElasticSearchPagination();
    }
  };
  items[12] = {
    key: "getEnhancedMember",
    value(arg0, guildId) {
      return callback4(arg0).getMember(guildId);
    }
  };
  items[13] = {
    key: "getNewMemberTimestamp",
    value(arg0) {
      return callback4(arg0).getNewMemberTimestamp();
    }
  };
  items[14] = {
    key: "getLastRefreshTimestamp",
    value(arg0) {
      return callback4(arg0).lastRefreshTimestamp;
    }
  };
  items[15] = {
    key: "getLastCursorTimestamp",
    value(arg0) {
      return callback4(arg0).lastCursorTimestamp;
    }
  };
  return callback(MemberSafetyStore, items);
}(importDefault(dependencyMap[17]).Store);
tmp2.displayName = "MemberSafetyStore";
tmp2 = new tmp2(importDefault(dependencyMap[18]), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    if (closure_15) {
      closure_15 = false;
    } else {
      let flag = true;
      if (true === undefined) {
        flag = false;
      }
      for (const key10005 in closure_16) {
        let tmp2 = key10005;
        let tmp3 = closure_21;
        let tmp4 = closure_21(key10005, flag);
      }
    }
    return function _mergeGuildMembers(guilds) {
      let closure_0 = false;
      guilds = guilds.guilds;
      const item = guilds.forEach((id) => {
        const obj = callback(id.id);
        closure_0 = callback(id.id).updateServerMembers(id.members) || closure_0;
      });
      return closure_0;
    }(guilds);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(guilds) {
    return function _mergeGuildMembersSupplemental(guilds) {
      let closure_0 = false;
      guilds = guilds.guilds;
      const item = guilds.forEach((activity_instances) => {
        activity_instances = activity_instances.activity_instances;
        const items = [];
        let closure_0 = items;
        if (null != activity_instances) {
          const item = activity_instances.forEach((participants) => {
            participants = participants.participants;
            if (null != participants) {
              const item = participants.forEach((member) => {
                if (obj.isNotNullish(member.member)) {
                  const arr = arr.push(member.member);
                }
              });
            }
          });
        }
        const obj = callback(activity_instances.id);
        closure_0 = callback(activity_instances.id).updateServerMembers(items) || closure_0;
      });
      return closure_0;
    }(guilds);
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(guildId) {
    let iter2;
    guildId = guildId.guildId;
    if (null != guildId) {
      if (null != guild.getGuild(guildId)) {
        let closure_15 = true;
        const obj = getMemberSafetyPageStore(guildId);
        const items = [];
        const tmp4 = _createForOfIteratorHelperLoose(tmp);
        let iter = tmp4();
        if (!iter.done) {
          do {
            let value = iter.value;
            if (null == obj.getMember(value.userId)) {
              let arr = items.push(value);
            }
            iter2 = tmp4();
            iter = iter2;
          } while (!iter2.done);
        }
        return items.length > 0 && obj.updateClientMembers(items);
      }
    }
    return false;
  },
  CACHE_LOADED: function handleCacheLoaded(guildMembers) {
    let closure_0 = false;
    let closure_15 = true;
    const entries = importDefault(dependencyMap[13]).entries(guildMembers.guildMembers);
    const item = entries.forEach((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const obj = callback(tmp);
      closure_0 = callback(tmp).updateClientMembers(Object.values(tmp2)) || closure_0;
    });
    return closure_0;
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(members) {
    members = members.members;
    let updateServerMembersResult = members.length > 0;
    if (updateServerMembersResult) {
      updateServerMembersResult = getMemberSafetyPageStore(tmp).updateServerMembers(members);
      const obj = getMemberSafetyPageStore(tmp);
    }
    return updateServerMembersResult;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    resetMemberSafetyPageStore(guild.id, getMemberSafetyPageStore(guild.id).isInitialized);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    resetMemberSafetyPageStore(guild.guild.id);
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(chunks.chunks);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_20;
        let obj = closure_20(value.guildId);
        let tmp3 = obj.updateServerMembers(value.members) || flag;
        iter3 = tmp();
        flag = tmp3;
        iter2 = iter3;
        flag2 = tmp3;
      } while (!iter3.done);
    }
    return flag2;
  },
  GUILD_MEMBER_ADD: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE_LOCAL: function handleGuildMemberUpdateLocal(guildId) {
    const id = id.getId();
    const items = [id];
    return getMemberSafetyPageStore(guildId.guildId).updateMembersByMemberIds(items);
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    return getMemberSafetyPageStore(guildId.guildId).removeMember(guildId.user.id);
  },
  GUILD_ROLE_UPDATE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_DELETE: handleGuildRoleUpdateOrDelete,
  GUILD_MEMBER_PROFILE_UPDATE: function handleGuildMemberProfileUpdate(guildId) {
    const items = [guildId.guildMember.user.id];
    return getMemberSafetyPageStore(guildId.guildId).updateMembersByMemberIds(items);
  },
  GUILD_ROLE_MEMBER_REMOVE: handleGuildRoleMemberUpdate,
  GUILD_ROLE_MEMBER_ADD: handleGuildRoleMemberUpdate,
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(members) {
    members = members.members;
    if (null != members) {
      if (0 !== members.length) {
        return getMemberSafetyPageStore(tmp).updateMembersByMemberIds(members.reduce((arr, member) => {
          if (null != member.member) {
            arr.push(member.member.user.id);
          }
          return arr;
        }, []));
      }
    }
    return false;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(addedMembers) {
    addedMembers = addedMembers.addedMembers;
    if (null != addedMembers) {
      if (0 !== addedMembers.length) {
        return getMemberSafetyPageStore(tmp).updateMembersByMemberIds(addedMembers.reduce((arr, userId) => {
          arr.push(userId.userId);
          return arr;
        }, []));
      }
    }
    return false;
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(members) {
    members = members.members;
    if (null != members) {
      if (0 !== members.length) {
        return getMemberSafetyPageStore(tmp).updateMembersByMemberIds(members.reduce((arr, userId) => {
          arr.push(userId.userId);
          return arr;
        }, []));
      }
    }
    return false;
  },
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    const values = Object.values(threads.threads);
    if (0 === values.length) {
      return false;
    } else {
      return getMemberSafetyPageStore(threads.guildId).updateMembersByMemberIds(values.reduce((arr, owner) => {
        if (null != owner.owner) {
          arr.push(owner.owner.user.id);
        }
        return arr;
      }, []));
    }
  },
  INITIALIZE_MEMBER_SAFETY_STORE: function handleInitializeMemberSafetyStore(guildId) {
    return getMemberSafetyPageStore(guildId.guildId).initialize();
  },
  MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function handleNewMemberTimestampRefresh(guildId) {
    return getMemberSafetyPageStore(guildId.guildId).refreshNewMembersAndSearchResults();
  },
  MEMBER_SAFETY_PAGINATION_UPDATE: function handlePaginationUpdate(guildId) {
    return callback3(getMemberSafetyPageStore(guildId.guildId).updatePaginationState(guildId.pagination), 1)[0];
  },
  MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function handlePaginationTokenUpdate(guildId) {
    return getMemberSafetyPageStore(guildId.guildId).updatePaginationToken(guildId.continuationToken);
  },
  MEMBER_SAFETY_SEARCH_STATE_UPDATE: function handleSearchStateUpdate(guildId) {
    return getMemberSafetyPageStore(guildId.guildId).updateSearchState(guildId.searchState);
  },
  FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function handleFetchGuildMemberSupplementalSuccess(arg0) {
    let guildId;
    let memberSupplementals;
    ({ guildId, memberSupplementals } = arg0);
    const result = arg1(dependencyMap[14]).syncMemberSupplemental(guildId, memberSupplementals);
    if (result) {
      const result1 = getMemberSafetyPageStore(guildId).updateMembersByMemberIds(memberSupplementals.map((userId) => userId.userId));
      const obj2 = getMemberSafetyPageStore(guildId);
    }
    return result;
  },
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function handleMemberSafetyGuildMemberSearchSuccess(totalResultsCount) {
    let guildId;
    let members;
    ({ guildId, members } = totalResultsCount);
    let obj = getMemberSafetyPageStore(guildId);
    const reduced = members.reduce((memberIds, member) => {
      let inviter_id;
      let join_source_application_id;
      let join_source_channel_id;
      let join_source_type;
      let source_invite_code;
      const user = member.member.user;
      memberIds = memberIds.memberIds;
      ({ source_invite_code, join_source_type, join_source_application_id, join_source_channel_id, inviter_id } = member);
      memberIds.push(user.id);
      const memberSupplementals = memberIds.memberSupplementals;
      memberSupplementals.push({ userId: user.id, sourceInviteCode: source_invite_code, joinSourceType: join_source_type, joinSourceApplicationId: join_source_application_id, joinSourceChannelId: join_source_channel_id, inviterId: inviter_id });
      return memberIds;
    }, { memberIds: [], memberSupplementals: [] });
    const memberIds = reduced.memberIds;
    let obj1 = arg1(dependencyMap[14]);
    let result = obj1.syncMemberSupplemental(guildId, reduced.memberSupplementals);
    let obj2 = arg1(dependencyMap[15]);
    const result1 = obj2.registerFetchedSupplementals(guildId, memberIds);
    let first;
    let tmp6;
    const result2 = obj.updateSearchedMembersByMemberIds(memberIds);
    if (members.length > 0) {
      first = members[0];
      tmp6 = members[members.length - 1];
    }
    obj = { totalResultsCount: totalResultsCount.total_result_count };
    obj = {};
    obj1 = {};
    let joined_at;
    if (null != first) {
      const member = first.member;
      if (null != member) {
        joined_at = member.joined_at;
      }
    }
    obj1.joinedAt = joined_at;
    let id;
    if (null != first) {
      const member2 = first.member;
      if (null != member2) {
        id = member2.user.id;
      }
    }
    if (null == id) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    obj1.userId = id;
    obj.before = arg1(dependencyMap[16]).createMemberSearchCursor(obj1);
    const obj6 = arg1(dependencyMap[16]);
    obj2 = {};
    let joined_at1;
    if (null != tmp6) {
      const member3 = tmp6.member;
      if (null != member3) {
        joined_at1 = member3.joined_at;
      }
    }
    obj2.joinedAt = joined_at1;
    let id1;
    if (null != tmp6) {
      const member4 = tmp6.member;
      if (null != member4) {
        id1 = member4.user.id;
      }
    }
    if (null == id1) {
      id1 = EMPTY_STRING_SNOWFLAKE_ID;
    }
    obj2.userId = id1;
    obj.after = arg1(dependencyMap[16]).createMemberSearchCursor(obj2);
    obj.elasticSearchCursor = obj;
    if (!result) {
      result = result2;
    }
    if (!result) {
      result = callback3(obj.updatePaginationState(obj, false), 1)[0];
    }
    return result;
  },
  MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function handleMemberSafetyGuildMemberUpdateBatch(guildId) {
    return getMemberSafetyPageStore(guildId.guildId).updateMembersByMemberIds(guildId.userIds);
  }
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyStore.tsx");

export default tmp2;
