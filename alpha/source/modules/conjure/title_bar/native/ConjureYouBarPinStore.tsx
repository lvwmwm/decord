// Module ID: 9566
// Function ID: 9567
// Name: ConjureYouBarPinStore
// Dependencies: [502, 504, 584, 2]

// Module 9566 (ConjureYouBarPinStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let obj = { pinnedUserIds: [] };
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class ConjureYouBarPinStore extends DeviceSettingsStore {
  initialize(pinnedUserIds) {
    this.waitFor(AuthenticationStore);
    pinnedUserIds = undefined;
    if (pinnedUserIds != null) {
      pinnedUserIds = pinnedUserIds.pinnedUserIds;
    }
    if (pinnedUserIds == null) {
      pinnedUserIds = [];
    }
  }
  isPinned() {
    const id = AuthenticationStore.getId();
    let hasItem = null != id;
    if (hasItem) {
      const pinnedUserIds = obj.pinnedUserIds;
      hasItem = pinnedUserIds.includes(id);
    }
    return hasItem;
  }
  getUserAgnosticState() {
    return obj;
  }
}
const prototype = ConjureYouBarPinStore.prototype;
ConjureYouBarPinStore.displayName = "ConjureYouBarPinStore";
ConjureYouBarPinStore.persistKey = "ConjureYouBarPinStore";
obj = {
  CONJURE_YOU_BAR_PIN_SET: function handleSet(pinned) {
    pinned = pinned.pinned;
    const id = AuthenticationStore.getId();
    if (null != id) {
      const pinnedUserIds = obj.pinnedUserIds;
      if (pinnedUserIds.includes(id) !== pinned) {
        let found;
        const pinnedUserIds1 = obj.pinnedUserIds;
        if (pinned) {
          const items = [];
          items[HermesBuiltin.arraySpread(items, pinnedUserIds1, 0)] = id;
          found = items;
        } else {
          found = pinnedUserIds1.filter((item) => item !== id);
        }
        obj = { pinnedUserIds: found };
      }
    }
    return false;
  }
};
const conjureYouBarPinStore = new ConjureYouBarPinStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/ConjureYouBarPinStore.tsx");

export default conjureYouBarPinStore;
