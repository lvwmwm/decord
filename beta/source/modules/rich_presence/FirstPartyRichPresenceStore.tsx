// Module ID: 9658
// Function ID: 9659
// Name: FirstPartyRichPresenceStore
// Dependencies: [9659, 1331, 504, 573, 2]

// Module 9658 (FirstPartyRichPresenceStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _modDef1331 from "module_1331" /* 1331 */;
import StageChannelSelfRichPresenceStoreDefault from "StageChannelSelfRichPresenceStore" /* 9659 */;

function updateActivities() {
  items = [];
  const iter = items[Symbol.iterator]();
  while (iter !== undefined) {
    let activity = nextResult.getActivity();
    if (null != activity) {
      let arr = items.push(tmp3);
    }
    continue;
  }
  const tmp6 = _modDef1331(items, items);
  let flag = !tmp6;
  if (!tmp6) {
    flag = true;
  }
  return flag;
}
let items = [StageChannelSelfRichPresenceStoreDefault];
items = [];
const Store = initializeDefault.Store;
class FirstPartyRichPresenceStore extends Store {
}
const prototype = FirstPartyRichPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.syncWith(items, updateActivities);
};
prototype["getActivities"] = function getActivities() {
  return items;
};
FirstPartyRichPresenceStore.displayName = "FirstPartyRichPresenceStore";
const firstPartyRichPresenceStore = new FirstPartyRichPresenceStore(DispatcherDefault);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rich_presence/FirstPartyRichPresenceStore.tsx");

export default firstPartyRichPresenceStore;
