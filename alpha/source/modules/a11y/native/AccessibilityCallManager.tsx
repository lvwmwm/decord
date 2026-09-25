// Module ID: 13979
// Function ID: 13980
// Name: AccessibilityCallManager
// Dependencies: [502, 2044, 4476, 1372, 1364, 2020, 4982, 4682, 1115, 1982, 573, 2]

// Module 13979 (AccessibilityCallManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import UserStore from "UserStore" /* 1372 */;
import LifecycleManager from "LifecycleManager" /* 1982 */;

require = fn;
const set = new Set();
const map = new Map();
class AccessibilityCallManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.handleCallCreate = function handleCallCreate(channelId) {
      channelId = channelId.channelId;
      const id = AuthenticationStore.getId();
      const result = map.set(channelId, tmp2);
      if (null != id && id in channelId.ongoingRings) {
        if (!set.has(channelId)) {
          if (!obj2.isIOS()) {
            const channel = ChannelStore.getChannel(channelId);
            if (null != channel) {
              const channelName = tmp4(4982).computeChannelName(channel, UserStore, RelationshipStore);
              if (null != channelName) {
                obj.add(channelId);
                const AccessibilityAnnouncer = tmp4(4682).AccessibilityAnnouncer;
                const intl = tmp4(1115).intl;
                const obj3 = { callLocation: channelName };
                AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1115).t["Bm0A/p"], obj3), "assertive");
              }
              const tmp4Result = tmp4(4982);
            }
          } else {
            const NativePhoneIntegrationEnabled = tmp4(2020).NativePhoneIntegrationEnabled;
          }
          obj2 = PlatformUtils;
        }
        obj = set;
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      channelId = channelId.channelId;
      const id = AuthenticationStore.getId();
      let flag = map.get(channelId);
      if (flag == null) {
        flag = false;
      }
      const result = map.set(channelId, tmp2);
      if (!flag) {
        if (tmp2) {
          if (!set.has(channelId)) {
            if (!obj3.isIOS()) {
              const channel = ChannelStore.getChannel(channelId);
              if (null != channel) {
                const channelName = tmp4(4982).computeChannelName(channel, UserStore, RelationshipStore);
                if (null != channelName) {
                  obj2.add(channelId);
                  const AccessibilityAnnouncer = tmp4(4682).AccessibilityAnnouncer;
                  const intl = tmp4(1115).intl;
                  const obj4 = { callLocation: channelName };
                  AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1115).t["Bm0A/p"], obj4), "assertive");
                }
                const tmp4Result = tmp4(4982);
              }
            } else {
              const NativePhoneIntegrationEnabled = tmp4(2020).NativePhoneIntegrationEnabled;
            }
            obj3 = PlatformUtils;
          }
          obj2 = set;
        }
      }
      if (flag) {
        flag = !tmp2;
      }
      if (flag) {
        set.delete(channelId);
      }
    };
    applyArgumentsResult.handleCallDelete = function handleCallDelete(channelId) {
      channelId = channelId.channelId;
      map.delete(channelId);
      set.delete(channelId);
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      map.clear();
      set.clear();
    };
    return applyArgumentsResult;
  }
}
const prototype = AccessibilityCallManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("CALL_CREATE", this.handleCallCreate);
  const subscription1 = DispatcherDefault.subscribe("CALL_UPDATE", this.handleCallUpdate);
  const subscription2 = DispatcherDefault.subscribe("CALL_DELETE", this.handleCallDelete);
  const subscription3 = DispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("CALL_CREATE", this.handleCallCreate);
  DispatcherDefault.unsubscribe("CALL_UPDATE", this.handleCallUpdate);
  DispatcherDefault.unsubscribe("CALL_DELETE", this.handleCallDelete);
  DispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  map.clear();
  set.clear();
};
const accessibilityCallManager = new AccessibilityCallManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/a11y/native/AccessibilityCallManager.tsx");

export default accessibilityCallManager;
