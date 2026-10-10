// Module ID: 13756
// Function ID: 13757
// Name: PremiumGroupStore
// Dependencies: [4775, 4783, 1085, 13757, 504, 584, 2]

// Module 13756 (PremiumGroupStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import PremiumGroupActionCreators from "PremiumGroupActionCreators" /* 13757 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4783 */;
import size from "module_2" /* 2 */;

let closure_6;

let c3;
let closure_4;
function handleMutationStart() {
  closure_6.membersData.isUpdating = true;
}
function handleMutationSuccess(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  const obj = PremiumGroupActionCreators;
  const subscriptionGroupMembers = obj.fetchSubscriptionGroupMembers(subscriptionId);
  subscriptionGroupMembers.catch(NOOP_NULL);
  closure_6.membersData.isUpdating = false;
}
function handleMutationFailure() {
  closure_6.membersData.isUpdating = false;
}
({ PremiumGroupAPIErrorCodes: c3, TOTAL_PREMIUM_GROUP_MEMBER_SEATS: closure_4 } = PremiumGroupConstants);
const NOOP_NULL = Constants.NOOP_NULL;
const metroRequire = { membersData: { data: null, isFetching: false, isUpdating: false }, membershipData: { data: null, isFetching: false, hasFetched: false } };
const Store = get_initializedDefault.Store;
class PremiumGroupStore extends Store {
  initialize() {
    this.waitFor(SubscriptionStore);
  }
  getMembers() {
    return closure_6.membersData.data;
  }
  isFetchingMembers() {
    return closure_6.membersData.isFetching;
  }
  isUpdatingMembers() {
    return closure_6.membersData.isUpdating;
  }
  hasFetchedMembers() {
    return null !== closure_6.membersData.data;
  }
  getMembership() {
    return closure_6.membershipData.data;
  }
  isFetchingMembership() {
    return closure_6.membershipData.isFetching;
  }
  hasFetchedMembership() {
    return null !== closure_6.membershipData.data;
  }
  getNumUsedSeats() {
    let num = 0;
    if (null != closure_6.membersData.data) {
      num = closure_6.membersData.data.members.length;
    }
    return num;
  }
  getNumAvailableInvites() {
    if (null == closure_6.membersData.data) {
      return React3;
    } else {
      const _Math = Math;
      return Math.max(0, React3 - (closure_6.membersData.data.members.length + closure_6.membersData.data.invitedUsers.length));
    }
  }
  getNumTotalSeats() {
    return React3;
  }
}
const prototype = PremiumGroupStore.prototype;
PremiumGroupStore.displayName = "PremiumGroupStore";
let obj = {
  PREMIUM_GROUP_MEMBERS_REQUEST: function handleMembersRequest(arg0) {
    let flag = !closure_6.membersData.isFetching;
    if (flag) {
      const obj = PremiumGroupActionCreators;
      const subscriptionGroupMembers = obj.fetchSubscriptionGroupMembers(tmp);
      subscriptionGroupMembers.catch(NOOP_NULL);
      flag = true;
    }
    return flag;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_START: function handleMembersFetchStart() {
    closure_6.membersData.isFetching = true;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function handleMembersFetchSuccess(members) {
    closure_6.membersData.data = members.members;
    closure_6.membersData.isFetching = false;
  },
  PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function handleMembersFetchFailure() {
    closure_6.membersData.isFetching = false;
  },
  PREMIUM_GROUP_MEMBERSHIP_REQUEST: function handleMembershipRequest() {
    let flag = !closure_6.membershipData.isFetching;
    if (flag) {
      const obj = PremiumGroupActionCreators;
      const premiumGroupMembership = obj.fetchPremiumGroupMembership();
      premiumGroupMembership.catch(NOOP_NULL);
      flag = true;
    }
    return flag;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function handleMembershipFetchStart() {
    closure_6.membershipData.isFetching = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function handleMembershipFetchSuccess(membership) {
    closure_6.membershipData.data = membership.membership;
    closure_6.membershipData.isFetching = false;
    closure_6.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function handleMembershipNotFound() {
    closure_6.membershipData.isFetching = false;
    closure_6.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function handleMembershipFetchFailure() {
    closure_6.membershipData.isFetching = false;
    closure_6.membershipData.hasFetched = true;
  },
  PREMIUM_GROUP_INVITE_USERS_START: handleMutationStart,
  PREMIUM_GROUP_INVITE_USERS_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_INVITE_USERS_FAILURE: handleMutationFailure,
  PREMIUM_GROUP_REMOVE_MEMBER_START: handleMutationStart,
  PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: handleMutationFailure,
  PREMIUM_GROUP_REMOVE_INVITE_START: handleMutationStart,
  PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: handleMutationSuccess,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function handleRemoveInviteFailure(errorCode) {
    if (errorCode.errorCode === constants.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) {
      const obj = PremiumGroupActionCreators;
      const subscriptionGroupMembers = obj.fetchSubscriptionGroupMembers(tmp);
      subscriptionGroupMembers.catch(NOOP_NULL);
      closure_6.membersData.isUpdating = false;
      return true;
    } else {
      closure_6.membersData.isUpdating = false;
    }
  },
  LOGOUT: function reset() {
    closure_6 = { membersData: { data: null, isFetching: false, isUpdating: false }, membershipData: { data: null, isFetching: false, hasFetched: false } };
  }
};
const premiumGroupStore = new PremiumGroupStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupStore.tsx");

export default premiumGroupStore;
