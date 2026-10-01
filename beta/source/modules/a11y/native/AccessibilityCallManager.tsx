// Module ID: 14003
// Function ID: 14004
// Name: AccessibilityCallManager
// Dependencies: [502, 2045, 4479, 1372, 1364, 2021, 4989, 4685, 1115, 1983, 573, 2]

// Module 14003 (AccessibilityCallManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import intl2 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useChannelName from "useChannelName" /* 4989 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import LifecycleManager from "LifecycleManager" /* 1983 */;
import size from "module_2" /* 2 */;

const set = new Set();
const map = new Map();
class AccessibilityCallManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handleCallCreate = function handleCallCreate(channelId) {
      channelId = channelId.channelId;
      const ongoingRings = channelId.ongoingRings;
      const id = AuthenticationStore.getId();
      const result = map.set(channelId, tmp2);
      if (null != id && id in ongoingRings) {
        const obj = set;
        if (!set.has(channelId)) {
          const obj2 = PlatformUtils;
          if (!obj2.isIOS()) {
            const channel = ChannelStore.getChannel(channelId);
            if (null != channel) {
              const tmp4Result = useChannelName;
              const channelName = tmp4Result.computeChannelName(channel, UserStore, RelationshipStore);
              if (null != channelName) {
                obj.add(channelId);
                const AccessibilityAnnouncer = tmp4(tmp5[7]).AccessibilityAnnouncer;
                const announce = AccessibilityAnnouncer.announce;
                const intl = tmp4(tmp5[8]).intl;
                const obj3 = { callLocation: channelName };
                announce(intl.formatToPlainString(intl2.t["Bm0A/p"], obj3), "assertive");
              }
            }
          } else {
            const NativePhoneIntegrationEnabled = tmp4(tmp5[5]).NativePhoneIntegrationEnabled;
          }
        }
      }
    };
    applyArgumentsResult.handleCallUpdate = function handleCallUpdate(channelId) {
      channelId = channelId.channelId;
      const ongoingRings = channelId.ongoingRings;
      const id = AuthenticationStore.getId();
      let flag = map.get(channelId);
      const obj = map;
      if (flag == null) {
        flag = false;
      }
      const result = obj.set(channelId, tmp2);
      if (!flag) {
        if (null != id && id in ongoingRings) {
          const obj2 = set;
          if (!set.has(channelId)) {
            const obj3 = PlatformUtils;
            if (!obj3.isIOS()) {
              const channel = ChannelStore.getChannel(channelId);
              if (null != channel) {
                const tmp4Result = useChannelName;
                const channelName = tmp4Result.computeChannelName(channel, UserStore, RelationshipStore);
                if (null != channelName) {
                  obj2.add(channelId);
                  const AccessibilityAnnouncer = tmp4(tmp5[7]).AccessibilityAnnouncer;
                  const announce = AccessibilityAnnouncer.announce;
                  const intl = tmp4(tmp5[8]).intl;
                  const obj4 = { callLocation: channelName };
                  announce(intl.formatToPlainString(intl2.t["Bm0A/p"], obj4), "assertive");
                }
              }
            } else {
              const NativePhoneIntegrationEnabled = tmp4(tmp5[5]).NativePhoneIntegrationEnabled;
            }
          }
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
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CALL_CREATE", this.handleCallCreate);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("CALL_UPDATE", this.handleCallUpdate);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("CALL_DELETE", this.handleCallDelete);
    const obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("CALL_CREATE", this.handleCallCreate);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("CALL_UPDATE", this.handleCallUpdate);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("CALL_DELETE", this.handleCallDelete);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    map.clear();
    set.clear();
  }
}
const prototype = AccessibilityCallManager.prototype;
const accessibilityCallManager = new AccessibilityCallManager();
let result = size.fileFinishedImporting("modules/a11y/native/AccessibilityCallManager.tsx");

export default accessibilityCallManager;
