// Module ID: 11117
// Function ID: 11118
// Name: FirstPartyRichPresenceStore
// Dependencies: [11118, 11119, 1342, 504, 584, 2]

// Module 11117 (FirstPartyRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef1342 from "module_1342" /* 1342 */;
import StageChannelSelfRichPresenceStoreDefault from "StageChannelSelfRichPresenceStore" /* 11118 */;
import VibegrationsRichPresenceStoreDefault from "VibegrationsRichPresenceStore" /* 11119 */;
import size from "module_2" /* 2 */;

function updateActivities() {
  items = [];
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let activity = nextResult.getActivity();
    if (null != activity) {
      let arr = items.push(tmp3);
    }
    continue;
  }
  let flag = !_modDef1342(items, items);
  _modDef1342(items, items);
  if (flag) {
    flag = true;
  }
  return flag;
}
let items = [StageChannelSelfRichPresenceStoreDefault, VibegrationsRichPresenceStoreDefault];
items = [];
const Store = get_initializedDefault.Store;
class FirstPartyRichPresenceStore extends Store {
  initialize() {
    this.syncWith(items, updateActivities);
  }
  getActivities() {
    return items;
  }
}
const prototype = FirstPartyRichPresenceStore.prototype;
FirstPartyRichPresenceStore.displayName = "FirstPartyRichPresenceStore";
const firstPartyRichPresenceStore = new FirstPartyRichPresenceStore(DispatcherDefault);
const result = size.fileFinishedImporting("modules/rich_presence/FirstPartyRichPresenceStore.tsx");

export default firstPartyRichPresenceStore;
