// Module ID: 11390
// Function ID: 11391
// Name: updateActivities
// Dependencies: [11391, 656, 586, 706, 2]

// Module 11390 (updateActivities)
import initializeDefault from "initialize" /* 586 */;
import isUndefinedOrNullDefault from "isUndefinedOrNull" /* 656 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import handleUpdateActivityDefault from "handleUpdateActivity" /* 11391 */;

function updateActivities() {
  items = [];
  const iter = items[Symbol.iterator]();
  while (iter !== undefined) {
    let activity = nextResult.getActivity();
    if (null != activity) {
      let tmp4 = activity;
      let arr = items.push(tmp3);
    }
    continue;
  }
  const tmp6 = isUndefinedOrNullDefault(items, items);
  let flag = !tmp6;
  if (!tmp6) {
    flag = true;
  }
  return flag;
}
let items = [handleUpdateActivityDefault];
let closure_3 = [];
const Store = initializeDefault.Store;
class FirstPartyRichPresenceStore extends Store {
}
const prototype = FirstPartyRichPresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.syncWith(items, updateActivities);
};
prototype["getActivities"] = function getActivities() {
  return closure_3;
};
FirstPartyRichPresenceStore.displayName = "FirstPartyRichPresenceStore";
const firstPartyRichPresenceStore = new FirstPartyRichPresenceStore(dispatcherDefault);
const result = require("set").fileFinishedImporting("modules/rich_presence/FirstPartyRichPresenceStore.tsx");

export default firstPartyRichPresenceStore;
