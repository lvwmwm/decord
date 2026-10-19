// Module ID: 14801
// Function ID: 14802
// Name: ContextualReferralDismissalsStore
// Dependencies: [1246, 14802, 504, 584, 2]

// Module 14801 (ContextualReferralDismissalsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import NetworkTtlCache from "NetworkTtlCache" /* 14802 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import size from "module_2" /* 2 */;

function handleReset() {
  networkTtlCache.clear();
  closure_3 = 0;
  return true;
}
let set = new Set();
const networkTtlCache = new NetworkTtlCache.NetworkTtlCache();
let closure_3 = 0;
const Store = get_initializedDefault.Store;
class ContextualReferralDismissalsStore extends Store {
  initialize() {
    this.waitFor(UserSettingsProtoStore);
  }
  getDismissedIds() {
    const value = networkTtlCache.getValue();
    let dismissedIds;
    if (value != null) {
      dismissedIds = value.dismissedIds;
    }
    if (dismissedIds == null) {
      dismissedIds = set;
    }
    return dismissedIds;
  }
  isDismissedFor(arg0) {
    const value = networkTtlCache.getValue();
    let flag;
    if (value != null) {
      const dismissedIds = value.dismissedIds;
      flag = dismissedIds.has(arg0);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getVersion() {
    const value = networkTtlCache.getValue();
    let str;
    if (value != null) {
      str = value.version;
    }
    if (str == null) {
      str = "0";
    }
    return str;
  }
  hasFetched() {
    const tmp = null != networkTtlCache.getValue() && !networkTtlCache.isLoading();
    return tmp;
  }
  shouldFetch() {
    return networkTtlCache.shouldFetch();
  }
}
const prototype = ContextualReferralDismissalsStore.prototype;
ContextualReferralDismissalsStore.displayName = "ContextualReferralDismissalsStore";
let obj = {
  CONNECTION_OPEN: handleReset,
  LOGOUT: handleReset,
  CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START: function handleFetchStart() {
    let flag = !networkTtlCache.isLoading();
    networkTtlCache.isLoading();
    const obj = networkTtlCache;
    if (flag) {
      obj.setLoading();
      flag = true;
    }
    return flag;
  },
  CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS: function handleFetchSuccess(targetIds) {
    const setValue = networkTtlCache.setValue;
    const obj = { dismissedIds: new Set(targetIds.targetIds), version: targetIds.version };
    new Set(targetIds.targetIds);
    setValue(obj);
    closure_3 = 0;
    return true;
  },
  CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE: function handleFetchFailure() {
    networkTtlCache.clear();
    return true;
  },
  CONTEXTUAL_REFERRAL_UPSELL_DISMISS: function handleDismiss(targetId) {
    targetId = targetId.targetId;
    const value = networkTtlCache.getValue();
    let flag = null != value;
    const tmp2 = networkTtlCache;
    if (flag) {
      const dismissedIds = value.dismissedIds;
      flag = !dismissedIds.has(targetId);
    }
    if (flag) {
      const _Set = Set;
      const items = [];
      const setValue = tmp2.setValue;
      const obj = { dismissedIds: set, version: value.version };
      items[HermesBuiltin.arraySpread(items, value.dismissedIds, 0)] = targetId;
      const self = this;
      const self2 = this;
      set = new Set(items);
      setValue(obj);
      closure_3 = closure_3 + 1;
      flag = true;
    }
    return flag;
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate() {
    const value = networkTtlCache.getValue();
    if (null == value) {
      return false;
    } else {
      const userContent = UserSettingsProtoStore.settings.userContent;
      let str;
      if (userContent != null) {
        str = userContent.contextualReferralUpsellDismissalsVersion;
      }
      if (str == null) {
        str = "0";
      }
      let tmp2 = str !== value.version;
      if (tmp2) {
        let flag;
        if (closure_3 > 0) {
          closure_3 = tmp3 - 1;
          const obj2 = { dismissedIds: value.dismissedIds, version: str };
          networkTtlCache.setValue(obj2);
          flag = false;
        } else {
          networkTtlCache.clear();
          flag = true;
        }
        tmp2 = flag;
      }
      return tmp2;
    }
  }
};
const contextualReferralDismissalsStore = new ContextualReferralDismissalsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/premium/referral_program/contextual_referrals/ContextualReferralDismissalsStore.tsx");

export default contextualReferralDismissalsStore;
