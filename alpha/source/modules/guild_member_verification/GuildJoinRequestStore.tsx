// Module ID: 6975
// Function ID: 6976
// Name: GuildJoinRequestStore
// Dependencies: [1386, 5046, 2168, 5048, 4939, 5047, 1088, 504, 572, 2]

// Module 6975 (GuildJoinRequestStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1088 */;
import _modDef2168 from "module_2168" /* 2168 */;
import SecondaryIndexMap from "SecondaryIndexMap" /* 4939 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5046 */;
import GuildJoinRequestUtils from "GuildJoinRequestUtils" /* 5047 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5048 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

function updateSubmittedGuildJoinRequestTotal(guildId, DELETED, applicationStatus) {
  if (DELETED !== applicationStatus) {
    if (null != DELETED) {
      const tmp12 = require;
      if (DELETED === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        closure_6[guildId] = closure_6[guildId] + 1;
        const result = map.set(guildId, _modDef2168());
      }
      if (applicationStatus === tmp12(5048).GuildJoinRequestApplicationStatuses.SUBMITTED) {
        const _Math = Math;
        closure_6[guildId] = Math.max(0, closure_6[guildId] - 1);
        const result1 = map.set(guildId, _modDef2168());
      }
    }
  }
}
function guildJoinRequestsIndex(joinRequestId) {
  const items = [];
  items.push(closure_10.GUILD_JOIN_REQUESTS_BY_ID(joinRequestId.joinRequestId));
  items.push(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(joinRequestId.guildId, joinRequestId.applicationStatus));
  return items;
}
function upsert(joinRequestId) {
  closure_18[joinRequestId.joinRequestId] = joinRequestId;
  const result = secondaryIndexMap.set(joinRequestId.joinRequestId, joinRequestId);
  const obj = GuildJoinRequestUtils;
  if (obj.isSubmittedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap2.delete(joinRequestId.joinRequestId);
    const result1 = secondaryIndexMap1.set(joinRequestId.joinRequestId, joinRequestId);
  }
  const tmp2Result = GuildJoinRequestUtils;
  if (tmp2Result.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap1.delete(joinRequestId.joinRequestId);
    const result2 = secondaryIndexMap2.set(joinRequestId.joinRequestId, joinRequestId);
  }
}
function handleGuildJoinRequestCreateOrUpdate(guildId) {
  guildId = guildId.guildId;
  const tmp = joinRequestFromServer(guildId.request);
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (tmp.userId !== currentUser.id) {
      const value = secondaryIndexMap.get(tmp.joinRequestId);
      let applicationStatus;
      const obj3 = secondaryIndexMap;
      if (value != null) {
        applicationStatus = value.applicationStatus;
      }
      updateSubmittedGuildJoinRequestTotal(guildId, tmp.applicationStatus, applicationStatus);
      closure_18[tmp.joinRequestId] = tmp;
      const result = obj3.set(tmp.joinRequestId, tmp);
      const obj = GuildJoinRequestUtils;
      const tmp8 = require;
      if (obj.isSubmittedApplicationStatus(tmp.applicationStatus)) {
        secondaryIndexMap2.delete(tmp.joinRequestId);
        const result1 = secondaryIndexMap1.set(tmp.joinRequestId, tmp);
      }
      const tmp8Result = tmp8(5047);
      if (tmp8Result.isActionedApplicationStatus(tmp.applicationStatus)) {
        secondaryIndexMap1.delete(tmp.joinRequestId);
        const result2 = secondaryIndexMap2.set(tmp.joinRequestId, tmp);
      }
      return true;
    }
  }
  return false;
}
const joinRequestFromServer = UserGuildJoinRequestStore.joinRequestFromServer;
const map = new Map();
const metroRequire = {};
const metroImportAll = {};
const set = new Set();
const authStore = {
  GUILD_JOIN_REQUESTS_BY_ID(joinRequestId) {
    return "guild-join-request=" + joinRequestId;
  },
  GUILD_JOIN_REQUESTS_BY_STATUS(guildId, status) {
    return "guild-" + guildId + "-" + status;
  }
};
const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap1 = new SecondaryIndexMap.SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap2 = new SecondaryIndexMap.SecondaryIndexMap(guildJoinRequestsIndex, (actionedAt) => "" + actionedAt.actionedAt);
let closure_15 = {};
const authStore3 = {};
const authStore4 = {};
let closure_18 = {};
let closure_19 = 10 * DurationsDefault.Seconds.MINUTE;
const Store = get_initializedDefault.Store;
class GuildJoinRequestStoreV2 extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getRequest(arg0) {
    return closure_18[arg0];
  }
  getRequests(guildId, applicationStatus) {
    let values;
    const result = closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId, applicationStatus);
    const obj = GuildJoinRequestUtils;
    if (obj.isActionedApplicationStatus(applicationStatus)) {
      values = secondaryIndexMap2.values(result);
    } else {
      const tmp2Result = GuildJoinRequestUtils;
      if (tmp2Result.isSubmittedApplicationStatus(applicationStatus)) {
        values = secondaryIndexMap1.values(result);
      } else {
        values = secondaryIndexMap.values(result);
      }
    }
    return values;
  }
  getSubmittedGuildJoinRequestTotal(arg0) {
    return closure_6[arg0];
  }
  isFetching(guildId, status) {
    return set.has(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId, status));
  }
  hasFetched(arg0) {
    const obj = map;
    if (map.has(arg0)) {
      const value = obj.get(arg0);
      let tmp3 = null != value;
      if (tmp3) {
        const obj2 = _modDef2168();
        tmp3 = obj2.diff(value, "seconds") < closure_19;
      }
      return tmp3;
    } else {
      return false;
    }
  }
  getSelectedApplicationTab(arg0) {
    let SUBMITTED = closure_15[arg0];
    if (SUBMITTED == null) {
      SUBMITTED = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
    }
    return SUBMITTED;
  }
  getSelectedSortOrder(arg0) {
    let TIMESTAMP_DESC = closure_16[arg0];
    if (TIMESTAMP_DESC == null) {
      TIMESTAMP_DESC = MemberVerificationTypes.GuildJoinRequestSortOrders.TIMESTAMP_DESC;
    }
    return TIMESTAMP_DESC;
  }
  getSelectedGuildJoinRequest(arg0) {
    let value = null;
    if (null != closure_17[arg0]) {
      value = secondaryIndexMap.get(tmp.joinRequestId);
    }
    return value;
  }
  getRequestsForUser(guildId, userId) {
    const arr = closure_8["" + guildId + ":" + userId];
    let found = null;
    if (null != arr) {
      const mapped = arr.map((item) => secondaryIndexMap.get(item));
      found = mapped.filter((item) => null != item);
    }
    return found;
  }
}
const prototype = GuildJoinRequestStoreV2.prototype;
GuildJoinRequestStoreV2.displayName = "GuildJoinRequestStoreV2";
let obj = {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: function handleFetchByIdSuccess(joinRequest) {
    joinRequest = joinRequest.joinRequest;
    closure_18[joinRequest.joinRequestId] = joinRequest;
    const result = secondaryIndexMap.set(joinRequest.joinRequestId, joinRequest);
    const obj = GuildJoinRequestUtils;
    if (obj.isSubmittedApplicationStatus(joinRequest.applicationStatus)) {
      secondaryIndexMap2.delete(joinRequest.joinRequestId);
      const result1 = secondaryIndexMap1.set(joinRequest.joinRequestId, joinRequest);
    }
    const tmp2Result = GuildJoinRequestUtils;
    if (tmp2Result.isActionedApplicationStatus(joinRequest.applicationStatus)) {
      secondaryIndexMap1.delete(joinRequest.joinRequestId);
      const result2 = secondaryIndexMap2.set(joinRequest.joinRequestId, joinRequest);
    }
  },
  GUILD_JOIN_REQUESTS_FOR_USER_FETCH_SUCCESS: function handleFetchForUserSuccess(requests) {
    let guildId;
    let userId;
    requests = requests.requests;
    ({ guildId, userId } = requests);
    const item = requests.forEach(upsert);
    const combined = "" + guildId + ":" + userId;
    closure_8[combined] = requests.map((joinRequestId) => joinRequestId.joinRequestId);
  },
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: function handleFetchSuccess(total) {
    let guildId;
    let map2;
    let requests;
    let status;
    ({ status, requests, guildId } = total);
    total = total.total;
    set.delete(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId, status));
    let tmp2 = dependencyMap;
    if (status === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      let tmp3 = closure_6;
      closure_6[guildId] = total;
      let result = map.set(guildId, _modDef2168());
    }
    const item = requests.forEach((joinRequestId) => {
      closure_1_18[joinRequestId.joinRequestId] = joinRequestId;
      const result = secondaryIndexMap.set(joinRequestId.joinRequestId, joinRequestId);
      const obj = GuildJoinRequestUtils;
      const tmp2 = require;
      const tmp3 = dependencyMap;
      if (obj.isSubmittedApplicationStatus(joinRequestId.applicationStatus)) {
        map2.delete(joinRequestId.joinRequestId);
        const result1 = map.set(joinRequestId.joinRequestId, joinRequestId);
      }
      const tmp2Result = tmp2(tmp3[5]);
      if (tmp2Result.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
        map.delete(joinRequestId.joinRequestId);
        const result2 = map2.set(joinRequestId.joinRequestId, joinRequestId);
      }
    });
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function handleFetchStart(guildId) {
    set.add(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId.guildId, guildId.status));
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function handleFetchFailure(guildId) {
    set.delete(closure_10.GUILD_JOIN_REQUESTS_BY_STATUS(guildId.guildId, guildId.status));
  },
  GUILD_JOIN_REQUEST_CREATE: handleGuildJoinRequestCreateOrUpdate,
  GUILD_JOIN_REQUEST_UPDATE: handleGuildJoinRequestCreateOrUpdate,
  GUILD_JOIN_REQUEST_DELETE: function handleGuildJoinRequestDelete(id) {
    id = id.id;
    const guildId = id.guildId;
    const value = secondaryIndexMap.get(id);
    const obj = secondaryIndexMap;
    if (null != value) {
      updateSubmittedGuildJoinRequestTotal(guildId, "DELETED", value.applicationStatus);
      delete closure_18[id];
      obj.delete(id);
      secondaryIndexMap1.delete(id);
      secondaryIndexMap2.delete(id);
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function handleSetApplicationTab(arg0) {
    let applicationTab;
    let guildId;
    ({ guildId, applicationTab } = arg0);
    if (applicationTab !== closure_15[guildId]) {
      closure_15[guildId] = applicationTab;
    }
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function handleSetSortOrder(arg0) {
    let applicationStatus;
    let guildId;
    let sortOrder;
    ({ guildId, sortOrder, applicationStatus } = arg0);
    if (sortOrder !== closure_16[guildId]) {
      closure_16[guildId] = sortOrder;
      const obj = GuildJoinRequestUtils;
      const tmp = require;
      if (obj.isActionedApplicationStatus(applicationStatus)) {
        secondaryIndexMap2.clear();
      }
      const tmpResult = tmp(5047);
      if (tmpResult.isSubmittedApplicationStatus(applicationStatus)) {
        secondaryIndexMap1.clear();
      }
    }
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function handleGuildJoinRequestSelect(guildId) {
    closure_17[guildId.guildId] = guildId.request;
  }
};
const guildJoinRequestStoreV2 = new GuildJoinRequestStoreV2(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestStore.tsx");

export default guildJoinRequestStoreV2;
