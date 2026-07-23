// Module ID: 12419
// Function ID: 96380
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3782, 3790, 653, 686, 12420, 566, 2]

// Module 12419 (_isNativeReflectConstruct)
import closure_3 from "TOTAL_PREMIUM_GROUP_MEMBER_SEATS";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import TOTAL_PREMIUM_GROUP_MEMBER_SEATS from "TOTAL_PREMIUM_GROUP_MEMBER_SEATS";
import { NOOP_NULL } from "ME";

let closure_10;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleMutationStart() {
  closure_12.membersData.isUpdating = true;
}
function handleMutationSuccess(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  importDefault(686).wait(() => {
    const subscriptionGroupMembers = subscriptionId(outer1_2[9]).fetchSubscriptionGroupMembers(subscriptionId);
    return subscriptionGroupMembers.catch(outer1_11);
  });
  closure_12.membersData.isUpdating = false;
}
function handleMutationFailure() {
  closure_12.membersData.isUpdating = false;
}
({ PremiumGroupAPIErrorCodes: closure_9, TOTAL_PREMIUM_GROUP_MEMBER_SEATS: closure_10 } = TOTAL_PREMIUM_GROUP_MEMBER_SEATS);
let closure_12 = { membersData: { data: null, isFetching: false, isUpdating: false }, membershipData: { data: null, isFetching: false, hasFetched: false } };
let tmp3 = ((Store) => {
  class PremiumGroupStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, PremiumGroupStore);
      obj = outer1_6(PremiumGroupStore);
      tmp2 = outer1_5;
      if (outer1_13()) {
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
  callback2(PremiumGroupStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getMembers",
    value() {
      return outer1_12.membersData.data;
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetchingMembers",
    value() {
      return outer1_12.membersData.isFetching;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isUpdatingMembers",
    value() {
      return outer1_12.membersData.isUpdating;
    }
  };
  items[4] = {
    key: "hasFetchedMembers",
    value() {
      return null !== outer1_12.membersData.data;
    }
  };
  items[5] = {
    key: "getMembership",
    value() {
      return outer1_12.membershipData.data;
    }
  };
  items[6] = {
    key: "isFetchingMembership",
    value() {
      return outer1_12.membershipData.isFetching;
    }
  };
  items[7] = {
    key: "hasFetchedMembership",
    value() {
      return null !== outer1_12.membershipData.data;
    }
  };
  items[8] = {
    key: "getNumUsedSeats",
    value() {
      let num = 0;
      if (null != outer1_12.membersData.data) {
        num = outer1_12.membersData.data.members.length;
      }
      return num;
    }
  };
  items[9] = {
    key: "getNumAvailableInvites",
    value() {
      if (null == outer1_12.membersData.data) {
        return outer1_10;
      } else {
        const _Math = Math;
        return Math.max(0, outer1_10 - (outer1_12.membersData.data.members.length + outer1_12.membersData.data.invitedUsers.length));
      }
    }
  };
  items[10] = {
    key: "getNumTotalSeats",
    value() {
      return outer1_10;
    }
  };
  return callback(PremiumGroupStore, items);
})(require("initialize").Store);
tmp3.displayName = "PremiumGroupStore";
tmp3 = new tmp3(require("dispatcher"), {
  PREMIUM_GROUP_MEMBERS_REQUEST: function handleMembersRequest(subscriptionId) {
    subscriptionId = subscriptionId.subscriptionId;
    let flag = !closure_12.membersData.isFetching;
    if (flag) {
      importDefault(686).wait(() => {
        const subscriptionGroupMembers = subscriptionId(outer1_2[9]).fetchSubscriptionGroupMembers(subscriptionId);
        return subscriptionGroupMembers.catch(outer1_11);
      });
      flag = true;
      const obj = importDefault(686);
    }
    return flag;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_START: function handleMembersFetchStart() {
    closure_12.membersData.isFetching = true;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function handleMembersFetchSuccess(members) {
    closure_12.membersData.data = members.members;
    closure_12.membersData.isFetching = false;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function handleMembersFetchFailure() {
    closure_12.membersData.isFetching = false;
  },
  PREMIUM_GROUP_MEMBERSHIP_REQUEST: function handleMembershipRequest() {
    let flag = !closure_12.membershipData.isFetching;
    if (flag) {
      importDefault(686).wait(() => {
        const premiumGroupMembership = outer1_0(outer1_2[9]).fetchPremiumGroupMembership();
        return premiumGroupMembership.catch(outer1_11);
      });
      flag = true;
      const obj = importDefault(686);
    }
    return flag;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function handleMembershipFetchStart() {
    closure_12.membershipData.isFetching = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function handleMembershipFetchSuccess(membership) {
    closure_12.membershipData.data = membership.membership;
    closure_12.membershipData.isFetching = false;
    closure_12.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function handleMembershipNotFound() {
    closure_12.membershipData.isFetching = false;
    closure_12.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function handleMembershipFetchFailure() {
    closure_12.membershipData.isFetching = false;
    closure_12.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_INVITE_USERS_START: handleMutationStart,
  PREMIUM_GROUP_INVITE_USERS_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_INVITE_USERS_FAILURE: handleMutationFailure,
  PREMIUM_GROUP_REMOVE_MEMBER_START: handleMutationStart,
  PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: handleMutationFailure,
  PREMIUM_GROUP_REMOVE_INVITE_START: handleMutationStart,
  PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function handleRemoveInviteFailure(subscriptionId) {
    subscriptionId = subscriptionId.subscriptionId;
    if (subscriptionId.errorCode === constants.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) {
      importDefault(686).wait(() => {
        const subscriptionGroupMembers = subscriptionId(outer1_2[9]).fetchSubscriptionGroupMembers(subscriptionId);
        return subscriptionGroupMembers.catch(outer1_11);
      });
      closure_12.membersData.isUpdating = false;
      return true;
    } else {
      handleMutationFailure();
    }
  },
  LOGOUT: function reset() {
    let closure_12 = { membersData: { data: null, isFetching: false, isUpdating: false }, membershipData: { data: null, isFetching: false, hasFetched: false } };
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/premium_group/PremiumGroupStore.tsx");

export default tmp3;
