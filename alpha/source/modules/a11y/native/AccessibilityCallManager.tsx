// Module ID: 16229
// Function ID: 16230
// Name: AccessibilityCallManager
// Dependencies: [502, 4858, 4951, 1384, 1376, 4834, 5647, 5016, 1114, 1997, 572, 2]

// Module 16229 (AccessibilityCallManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl2 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import useChannelName from "useChannelName" /* 5647 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import LifecycleManager from "LifecycleManager" /* 1997 */;
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
