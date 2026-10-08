// Module ID: 11249
// Function ID: 11250
// Name: FirstPartyRichPresenceStore
// Dependencies: [11250, 11252, 1354, 504, 584, 2]

// Module 11249 (FirstPartyRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _modDef1354 from "module_1354" /* 1354 */;
import StageChannelSelfRichPresenceStoreDefault from "StageChannelSelfRichPresenceStore" /* 11252 */;
import ConjureRichPresenceStore from "ConjureRichPresenceStore" /* 11250 */;
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
  let flag = !_modDef1354(items, items);
  _modDef1354(items, items);
  if (flag) {
    flag = true;
  }
  return flag;
}
let items = [StageChannelSelfRichPresenceStoreDefault, ConjureRichPresenceStore];
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
