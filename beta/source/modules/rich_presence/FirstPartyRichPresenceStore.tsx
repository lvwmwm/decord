// Module ID: 7319
// Function ID: 7320
// Name: FirstPartyRichPresenceStore
// Dependencies: [7320, 15985, 1345, 504, 572, 2]

// Module 7319 (FirstPartyRichPresenceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef1345 from "module_1345" /* 1345 */;
import StageChannelSelfRichPresenceStoreDefault from "StageChannelSelfRichPresenceStore" /* 15985 */;
import ConjureRichPresenceStore from "ConjureRichPresenceStore" /* 7320 */;
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
  let flag = !_modDef1345(items, items);
  _modDef1345(items, items);
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
