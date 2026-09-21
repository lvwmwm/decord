// Module ID: 14725
// Function ID: 14726
// Name: AccessibilityCallManager
// Dependencies: [502, 2045, 4409, 1376, 1368, 2023, 4911, 4610, 1119, 1986, 577, 2]

// Module 14725 (AccessibilityCallManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import UserStore from "UserStore" /* 1376 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;

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
              const channelName = tmp4(4911).computeChannelName(channel, UserStore, RelationshipStore);
              if (null != channelName) {
                obj.add(channelId);
                const AccessibilityAnnouncer = tmp4(4610).AccessibilityAnnouncer;
                const intl = tmp4(1119).intl;
                const obj3 = { callLocation: channelName };
                AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1119).t["Bm0A/p"], obj3), "assertive");
              }
              const tmp4Result = tmp4(4911);
            }
          } else {
            const NativePhoneIntegrationEnabled = tmp4(2023).NativePhoneIntegrationEnabled;
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
                const channelName = tmp4(4911).computeChannelName(channel, UserStore, RelationshipStore);
                if (null != channelName) {
                  obj2.add(channelId);
                  const AccessibilityAnnouncer = tmp4(4610).AccessibilityAnnouncer;
                  const intl = tmp4(1119).intl;
                  const obj4 = { callLocation: channelName };
                  AccessibilityAnnouncer.announce(intl.formatToPlainString(tmp4(1119).t["Bm0A/p"], obj4), "assertive");
                }
                const tmp4Result = tmp4(4911);
              }
            } else {
              const NativePhoneIntegrationEnabled = tmp4(2023).NativePhoneIntegrationEnabled;
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
