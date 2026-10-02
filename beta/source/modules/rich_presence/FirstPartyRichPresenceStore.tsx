// Module ID: 8810
// Function ID: 8811
// Name: FirstPartyRichPresenceStore
// Dependencies: [8811, 1343, 504, 585, 2]

// Module 8810 (FirstPartyRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import _modDef1343 from "module_1343" /* 1343 */;
import StageChannelSelfRichPresenceStoreDefault from "StageChannelSelfRichPresenceStore" /* 8811 */;
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
  let flag = !_modDef1343(items, items);
  _modDef1343(items, items);
  if (flag) {
    flag = true;
  }
  return flag;
}
let items = [StageChannelSelfRichPresenceStoreDefault];
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
