// Module ID: 6687
// Function ID: 51680
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6687 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getSubmittedGuildJoinRequestTotal(guildId) {
  return closure_11[guildId];
}
function setSubmittedGuildJoinRequestTotal(guildId, total) {
  closure_11[guildId] = total;
  const result = map.set(guildId, importDefault(dependencyMap[7])());
}
function updateSubmittedGuildJoinRequestTotal(guildId, DELETED, applicationStatus) {
  if (DELETED !== applicationStatus) {
    if (null != DELETED) {
      if (DELETED === DELETED(dependencyMap[8]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
        setSubmittedGuildJoinRequestTotal(guildId, getSubmittedGuildJoinRequestTotal(guildId) + 1);
      }
      if (applicationStatus === DELETED(dependencyMap[8]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
        const _Math = Math;
        setSubmittedGuildJoinRequestTotal(guildId, Math.max(0, getSubmittedGuildJoinRequestTotal(guildId) - 1));
      }
    }
  }
}
function guildUserKey(guildId, userId) {
  return "" + guildId + ":" + userId;
}
function guildJoinRequestsIndex(joinRequestId) {
  const items = [];
  items.push(StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID(joinRequestId.joinRequestId));
  items.push(StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS(joinRequestId.guildId, joinRequestId.applicationStatus));
  return items;
}
function get(arg0) {
  return secondaryIndexMap.get(arg0);
}
function upsert(joinRequestId) {
  closure_22[joinRequestId.joinRequestId] = joinRequestId;
  const result = secondaryIndexMap.set(joinRequestId.joinRequestId, joinRequestId);
  if (obj.isSubmittedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap2.delete(joinRequestId.joinRequestId);
    const result1 = secondaryIndexMap1.set(joinRequestId.joinRequestId, joinRequestId);
  }
  const obj = arg1(dependencyMap[10]);
  if (obj2.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap1.delete(joinRequestId.joinRequestId);
    const result2 = secondaryIndexMap2.set(joinRequestId.joinRequestId, joinRequestId);
  }
}
function handleGuildJoinRequestCreateOrUpdate(request) {
  const tmp = joinRequestFromServer(request.request);
  const currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (tmp.userId !== currentUser.id) {
      const tmp4 = get(tmp.joinRequestId);
      let applicationStatus;
      if (null != tmp4) {
        applicationStatus = tmp4.applicationStatus;
      }
      updateSubmittedGuildJoinRequestTotal(request.guildId, tmp.applicationStatus, applicationStatus);
      upsert(tmp);
      return true;
    }
  }
  return false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const joinRequestFromServer = arg1(dependencyMap[6]).joinRequestFromServer;
const map = new Map();
let closure_11 = {};
let closure_12 = {};
let closure_13 = false;
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID(joinRequestId) {
  return "guild-join-request=" + joinRequestId;
}
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS(guildId, applicationStatus) {
  return "guild-" + guildId + "-" + applicationStatus;
}
const secondaryIndexMap = new arg1(dependencyMap[9]).SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap1 = new arg1(dependencyMap[9]).SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap2 = new arg1(dependencyMap[9]).SecondaryIndexMap(guildJoinRequestsIndex, (actionedAt) => "" + actionedAt.actionedAt);
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = {};
let closure_23 = 10 * importDefault(dependencyMap[11]).Seconds.MINUTE;
let tmp6 = (Store) => {
  class GuildJoinRequestStoreV2 {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildJoinRequestStoreV2);
      obj = closure_6(GuildJoinRequestStoreV2);
      tmp2 = closure_5;
      if (closure_24()) {
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
  const arg1 = GuildJoinRequestStoreV2;
  callback2(GuildJoinRequestStoreV2, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getRequest",
    value(arg0) {
      return closure_22[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getRequests",
    value(arg0, applicationStatus) {
      const tmp = callback4(arg0, applicationStatus);
      if (obj.isActionedApplicationStatus(applicationStatus)) {
        let values = closure_18.values(tmp);
      } else {
        if (obj2.isSubmittedApplicationStatus(applicationStatus)) {
          values = closure_17.values(tmp);
        } else {
          values = closure_16.values(tmp);
        }
        const obj2 = GuildJoinRequestStoreV2(closure_2[10]);
      }
      return values;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSubmittedGuildJoinRequestTotal",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  items[4] = {
    key: "isFetching",
    value() {
      return closure_13;
    }
  };
  items[5] = {
    key: "hasFetched",
    value(arg0) {
      if (map.has(arg0)) {
        const value = map.get(arg0);
        let tmp4 = null != value;
        if (tmp4) {
          tmp4 = callback(closure_2[7])().diff(value, "seconds") < closure_23;
          const obj = callback(closure_2[7])();
        }
        return tmp4;
      } else {
        return false;
      }
    }
  };
  items[6] = {
    key: "getSelectedApplicationTab",
    value(arg0) {
      let SUBMITTED = GuildJoinRequestStoreV2(closure_2[8]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      if (null != closure_19[arg0]) {
        SUBMITTED = tmp;
      }
      return SUBMITTED;
    }
  };
  items[7] = {
    key: "getSelectedSortOrder",
    value(arg0) {
      let TIMESTAMP_DESC = closure_20[arg0];
      if (null == TIMESTAMP_DESC) {
        TIMESTAMP_DESC = GuildJoinRequestStoreV2(closure_2[8]).GuildJoinRequestSortOrders.TIMESTAMP_DESC;
      }
      return TIMESTAMP_DESC;
    }
  };
  items[8] = {
    key: "getSelectedGuildJoinRequest",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_21[arg0]) {
        tmp2 = callback6(tmp.joinRequestId);
      }
      return tmp2;
    }
  };
  items[9] = {
    key: "getRequestsForUser",
    value(arg0, arg1) {
      let found = null;
      if (null != closure_12[closure_28(undefined, arg0, arg1)]) {
        const mapped = arr.map((arg0) => callback(arg0));
        found = mapped.filter((arg0) => null != arg0);
      }
      return found;
    }
  };
  return callback(GuildJoinRequestStoreV2, items);
}(importDefault(dependencyMap[12]).Store);
tmp6.displayName = "GuildJoinRequestStoreV2";
tmp6 = new tmp6(importDefault(dependencyMap[13]), {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function handleFetchByIdSuccess(joinRequest) {
    upsert(joinRequest.joinRequest);
  },
  GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS: function handleFetchForUserSuccess(requests) {
    let guildId;
    let userId;
    requests = requests.requests;
    ({ guildId, userId } = requests);
    const item = requests.forEach(upsert);
    closure_12[guildUserKey(guildId, userId)] = requests.map((joinRequestId) => joinRequestId.joinRequestId);
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function handleFetchSuccess(requests) {
    let guildId;
    let status;
    let total;
    requests = requests.requests;
    let closure_13 = false;
    ({ status, total, guildId } = requests);
    if (status === arg1(dependencyMap[8]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
      setSubmittedGuildJoinRequestTotal(guildId, total);
    }
    const item = requests.forEach((arg0) => {
      callback(arg0);
    });
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function handleFetchStart() {
    let closure_13 = true;
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function handleFetchFailure() {
    let closure_13 = false;
  },
  GUILD_JOIN_REQUEST_CREATE: handleGuildJoinRequestCreateOrUpdate,
  GUILD_JOIN_REQUEST_UPDATE: handleGuildJoinRequestCreateOrUpdate,
  GUILD_JOIN_REQUEST_DELETE: function handleGuildJoinRequestDelete(id) {
    id = id.id;
    const tmp = get(id);
    if (null != tmp) {
      updateSubmittedGuildJoinRequestTotal(id.guildId, "DELETED", tmp.applicationStatus);
      delete r2[r3];
      secondaryIndexMap.delete(id);
      secondaryIndexMap1.delete(id);
      secondaryIndexMap2.delete(id);
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function handleSetApplicationTab(arg0) {
    let applicationTab;
    let guildId;
    ({ guildId, applicationTab } = arg0);
    if (applicationTab !== closure_19[guildId]) {
      closure_19[guildId] = applicationTab;
    }
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function handleSetSortOrder(arg0) {
    let applicationStatus;
    let guildId;
    let sortOrder;
    ({ guildId, sortOrder, applicationStatus } = arg0);
    if (sortOrder !== closure_20[guildId]) {
      closure_20[guildId] = sortOrder;
      if (obj.isActionedApplicationStatus(applicationStatus)) {
        secondaryIndexMap2.clear();
      }
      const obj = arg1(dependencyMap[10]);
      if (obj2.isSubmittedApplicationStatus(applicationStatus)) {
        secondaryIndexMap1.clear();
      }
      const obj2 = arg1(dependencyMap[10]);
    }
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function handleGuildJoinRequestSelect(guildId) {
    closure_21[guildId.guildId] = guildId.request;
  }
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestStore.tsx");

export default tmp6;
