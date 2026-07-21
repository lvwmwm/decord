// Module ID: 12300
// Function ID: 94201
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12300 (_isNativeReflectConstruct)
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
  const arg1 = subscriptionId.subscriptionId;
  importDefault(dependencyMap[8]).wait(() => {
    const subscriptionGroupMembers = subscriptionId(closure_2[9]).fetchSubscriptionGroupMembers(subscriptionId);
    return subscriptionGroupMembers.catch(closure_11);
  });
  closure_12.membersData.isUpdating = false;
}
function handleMutationFailure() {
  closure_12.membersData.isUpdating = false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ PremiumGroupAPIErrorCodes: closure_9, TOTAL_PREMIUM_GROUP_MEMBER_SEATS: closure_10 } = arg1(dependencyMap[6]));
const NOOP_NULL = arg1(dependencyMap[7]).NOOP_NULL;
let closure_12 = { membersData: { isPurchasing: "absolute", purchasingProductId: -1, enabled: -1 }, membershipData: { removeYearlyUpsell: "absolute", flex: -1, paddingTop: -1 } };
let tmp3 = (Store) => {
  class PremiumGroupStore {
    constructor() {
      self = this;
      tmp = closure_3(this, PremiumGroupStore);
      obj = closure_6(PremiumGroupStore);
      tmp2 = closure_5;
      if (closure_13()) {
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
  const arg1 = PremiumGroupStore;
  callback2(PremiumGroupStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getMembers",
    value() {
      return closure_12.membersData.data;
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetchingMembers",
    value() {
      return closure_12.membersData.isFetching;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isUpdatingMembers",
    value() {
      return closure_12.membersData.isUpdating;
    }
  };
  items[4] = {
    key: "hasFetchedMembers",
    value() {
      return null !== closure_12.membersData.data;
    }
  };
  items[5] = {
    key: "getMembership",
    value() {
      return closure_12.membershipData.data;
    }
  };
  items[6] = {
    key: "isFetchingMembership",
    value() {
      return closure_12.membershipData.isFetching;
    }
  };
  items[7] = {
    key: "hasFetchedMembership",
    value() {
      return null !== closure_12.membershipData.data;
    }
  };
  items[8] = {
    key: "getNumUsedSeats",
    value() {
      let num = 0;
      if (null != closure_12.membersData.data) {
        num = closure_12.membersData.data.members.length;
      }
      return num;
    }
  };
  items[9] = {
    key: "getNumAvailableInvites",
    value() {
      if (null == closure_12.membersData.data) {
        return closure_10;
      } else {
        const _Math = Math;
        return Math.max(0, closure_10 - (closure_12.membersData.data.members.length + closure_12.membersData.data.invitedUsers.length));
      }
    }
  };
  items[10] = {
    key: "getNumTotalSeats",
    value() {
      return closure_10;
    }
  };
  return callback(PremiumGroupStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp3.displayName = "PremiumGroupStore";
tmp3 = new tmp3(importDefault(dependencyMap[8]), {
  PREMIUM_GROUP_MEMBERS_REQUEST: function handleMembersRequest(subscriptionId) {
    const arg1 = subscriptionId.subscriptionId;
    let flag = !closure_12.membersData.isFetching;
    if (flag) {
      importDefault(dependencyMap[8]).wait(() => {
        const subscriptionGroupMembers = subscriptionId(closure_2[9]).fetchSubscriptionGroupMembers(subscriptionId);
        return subscriptionGroupMembers.catch(closure_11);
      });
      flag = true;
      const obj = importDefault(dependencyMap[8]);
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
      importDefault(dependencyMap[8]).wait(() => {
        const premiumGroupMembership = callback(closure_2[9]).fetchPremiumGroupMembership();
        return premiumGroupMembership.catch(closure_11);
      });
      flag = true;
      const obj = importDefault(dependencyMap[8]);
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
    const arg1 = subscriptionId.subscriptionId;
    if (subscriptionId.errorCode === constants.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) {
      importDefault(dependencyMap[8]).wait(() => {
        const subscriptionGroupMembers = subscriptionId(closure_2[9]).fetchSubscriptionGroupMembers(subscriptionId);
        return subscriptionGroupMembers.catch(closure_11);
      });
      closure_12.membersData.isUpdating = false;
      return true;
    } else {
      handleMutationFailure();
    }
  },
  LOGOUT: function reset() {
    let closure_12 = { membersData: { isPurchasing: "absolute", purchasingProductId: -1, enabled: -1 }, membershipData: { removeYearlyUpsell: "absolute", flex: -1, paddingTop: -1 } };
  }
});
const obj = {
  PREMIUM_GROUP_MEMBERS_REQUEST: function handleMembersRequest(subscriptionId) {
    const arg1 = subscriptionId.subscriptionId;
    let flag = !closure_12.membersData.isFetching;
    if (flag) {
      importDefault(dependencyMap[8]).wait(() => {
        const subscriptionGroupMembers = subscriptionId(closure_2[9]).fetchSubscriptionGroupMembers(subscriptionId);
        return subscriptionGroupMembers.catch(closure_11);
      });
      flag = true;
      const obj = importDefault(dependencyMap[8]);
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
      importDefault(dependencyMap[8]).wait(() => {
        const premiumGroupMembership = callback(closure_2[9]).fetchPremiumGroupMembership();
        return premiumGroupMembership.catch(closure_11);
      });
      flag = true;
      const obj = importDefault(dependencyMap[8]);
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
    const arg1 = subscriptionId.subscriptionId;
    if (subscriptionId.errorCode === constants.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) {
      importDefault(dependencyMap[8]).wait(() => {
        const subscriptionGroupMembers = subscriptionId(closure_2[9]).fetchSubscriptionGroupMembers(subscriptionId);
        return subscriptionGroupMembers.catch(closure_11);
      });
      closure_12.membersData.isUpdating = false;
      return true;
    } else {
      handleMutationFailure();
    }
  },
  LOGOUT: function reset() {
    let closure_12 = { membersData: { isPurchasing: "absolute", purchasingProductId: -1, enabled: -1 }, membershipData: { removeYearlyUpsell: "absolute", flex: -1, paddingTop: -1 } };
  }
};
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/premium_group/PremiumGroupStore.tsx");

export default tmp3;
