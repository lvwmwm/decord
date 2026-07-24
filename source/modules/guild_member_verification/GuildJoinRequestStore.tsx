// Module ID: 6692
// Function ID: 51745
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1849, 3948, 3712, 3950, 3754, 3949, 664, 566, 686, 2]

// Module 6692 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "t";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import { joinRequestFromServer } from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getSubmittedGuildJoinRequestTotal(guildId) {
  return table[guildId];
}
function setSubmittedGuildJoinRequestTotal(guildId, total) {
  closure_11[guildId] = total;
  const result = map.set(guildId, importDefault(3712)());
}
function updateSubmittedGuildJoinRequestTotal(guildId, DELETED, applicationStatus) {
  if (DELETED !== applicationStatus) {
    if (null != DELETED) {
      if (DELETED === require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.SUBMITTED) {
        setSubmittedGuildJoinRequestTotal(guildId, getSubmittedGuildJoinRequestTotal(guildId) + 1);
      }
      if (applicationStatus === require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.SUBMITTED) {
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
  obj = require(3949) /* isActionedApplicationStatus */;
  if (obj2.isActionedApplicationStatus(joinRequestId.applicationStatus)) {
    secondaryIndexMap1.delete(joinRequestId.joinRequestId);
    const result2 = secondaryIndexMap2.set(joinRequestId.joinRequestId, joinRequestId);
  }
}
function handleGuildJoinRequestCreateOrUpdate(request) {
  const tmp = joinRequestFromServer(request.request);
  currentUser = currentUser.getCurrentUser();
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
const map = new Map();
let closure_11 = {};
let closure_12 = {};
let c13 = false;
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_ID(joinRequestId) {
  return "guild-join-request=" + joinRequestId;
}
function StaticGuildJoinRequestIndexes_GUILD_JOIN_REQUESTS_BY_STATUS(guildId, applicationStatus) {
  return "guild-" + guildId + "-" + applicationStatus;
}
const secondaryIndexMap = new require("sortedInsert").SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap1 = new require("sortedInsert").SecondaryIndexMap(guildJoinRequestsIndex, (joinRequestId) => "" + joinRequestId.joinRequestId);
const secondaryIndexMap2 = new require("sortedInsert").SecondaryIndexMap(guildJoinRequestsIndex, (actionedAt) => "" + actionedAt.actionedAt);
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = {};
let closure_23 = 10 * require("set").Seconds.MINUTE;
let tmp6 = ((Store) => {
  class GuildJoinRequestStoreV2 {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildJoinRequestStoreV2);
      obj = outer1_6(GuildJoinRequestStoreV2);
      tmp2 = outer1_5;
      if (outer1_24()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildJoinRequestStoreV2, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getRequest",
    value(arg0) {
      return outer1_22[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getRequests",
    value(arg0, applicationStatus) {
      const tmp = outer1_15(arg0, applicationStatus);
      if (obj.isActionedApplicationStatus(applicationStatus)) {
        let values = outer1_18.values(tmp);
      } else {
        if (obj2.isSubmittedApplicationStatus(applicationStatus)) {
          values = outer1_17.values(tmp);
        } else {
          values = outer1_16.values(tmp);
        }
        obj2 = GuildJoinRequestStoreV2(outer1_2[10]);
      }
      return values;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSubmittedGuildJoinRequestTotal",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  items[4] = {
    key: "isFetching",
    value() {
      return outer1_13;
    }
  };
  items[5] = {
    key: "hasFetched",
    value(arg0) {
      if (outer1_10.has(arg0)) {
        const value = outer1_10.get(arg0);
        let tmp4 = null != value;
        if (tmp4) {
          tmp4 = outer1_1(outer1_2[7])().diff(value, "seconds") < outer1_23;
          const obj = outer1_1(outer1_2[7])();
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
      let SUBMITTED = GuildJoinRequestStoreV2(outer1_2[8]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      if (null != outer1_19[arg0]) {
        SUBMITTED = tmp;
      }
      return SUBMITTED;
    }
  };
  items[7] = {
    key: "getSelectedSortOrder",
    value(arg0) {
      let TIMESTAMP_DESC = outer1_20[arg0];
      if (null == TIMESTAMP_DESC) {
        TIMESTAMP_DESC = GuildJoinRequestStoreV2(outer1_2[8]).GuildJoinRequestSortOrders.TIMESTAMP_DESC;
      }
      return TIMESTAMP_DESC;
    }
  };
  items[8] = {
    key: "getSelectedGuildJoinRequest",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_21[arg0]) {
        tmp2 = outer1_29(tmp.joinRequestId);
      }
      return tmp2;
    }
  };
  items[9] = {
    key: "getRequestsForUser",
    value(arg0, arg1) {
      const arr = outer1_12[outer1_28(undefined, arg0, arg1)];
      let found = null;
      if (null != arr) {
        const mapped = arr.map((arg0) => outer2_29(arg0));
        found = mapped.filter((arg0) => null != arg0);
      }
      return found;
    }
  };
  return callback(GuildJoinRequestStoreV2, items);
})(require("initialize").Store);
tmp6.displayName = "GuildJoinRequestStoreV2";
tmp6 = new tmp6(require("dispatcher"), {
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
    let c13 = false;
    ({ status, total, guildId } = requests);
    if (status === require(3950) /* isTermsFormField */.GuildJoinRequestApplicationStatuses.SUBMITTED) {
      setSubmittedGuildJoinRequestTotal(guildId, total);
    }
    const item = requests.forEach((arg0) => {
      outer1_30(arg0);
    });
  },
  GUILD_JOIN_REQUESTS_FETCH_START: function handleFetchStart() {
    let c13 = true;
  },
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: function handleFetchFailure() {
    let c13 = false;
  },
  GUILD_JOIN_REQUEST_CREATE: handleGuildJoinRequestCreateOrUpdate,
  GUILD_JOIN_REQUEST_UPDATE: handleGuildJoinRequestCreateOrUpdate,
  GUILD_JOIN_REQUEST_DELETE: function handleGuildJoinRequestDelete(id) {
    id = id.id;
    const tmp3 = get(id);
    if (null != tmp3) {
      updateSubmittedGuildJoinRequestTotal(id.guildId, "DELETED", tmp3.applicationStatus);
      delete tmp[tmp2];
      secondaryIndexMap.delete(id);
      secondaryIndexMap1.delete(id);
      secondaryIndexMap2.delete(id);
    }
  },
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: function handleSetApplicationTab(arg0) {
    let applicationTab;
    let guildId;
    ({ guildId, applicationTab } = arg0);
    if (applicationTab !== table2[guildId]) {
      table2[guildId] = applicationTab;
    }
  },
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: function handleSetSortOrder(arg0) {
    let applicationStatus;
    let guildId;
    let sortOrder;
    ({ guildId, sortOrder, applicationStatus } = arg0);
    if (sortOrder !== table3[guildId]) {
      table3[guildId] = sortOrder;
      if (obj.isActionedApplicationStatus(applicationStatus)) {
        secondaryIndexMap2.clear();
      }
      obj = require(3949) /* isActionedApplicationStatus */;
      if (obj2.isSubmittedApplicationStatus(applicationStatus)) {
        secondaryIndexMap1.clear();
      }
      obj2 = require(3949) /* isActionedApplicationStatus */;
    }
  },
  GUILD_JOIN_REQUESTS_SET_SELECTED: function handleGuildJoinRequestSelect(guildId) {
    closure_21[guildId.guildId] = guildId.request;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestStore.tsx");

export default tmp6;
