// Module ID: 15104
// Function ID: 15105
// Name: PinotMemberSettingStore
// Dependencies: [504, 584, 2]

// Module 15104 (PinotMemberSettingStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let c0 = true;
let c1 = null;
const Store = get_initializedDefault.Store;
class PinotMemberSettingStoreImpl extends Store {
  isLocked() {
    return c0;
  }
  defaultsToOptedOut() {
    let flag = c1;
    if (c1 == null) {
      flag = true;
    }
    return flag;
  }
}
const prototype = PinotMemberSettingStoreImpl.prototype;
PinotMemberSettingStoreImpl.displayName = "PinotMemberSettingStore";
const obj = {
  PINOT_MEMBER_SETTING_STATE: function handleState(arg0) {
    ({ locked: c0, defaultOptedOut: c1 } = arg0);
  },
  LOGOUT: function reset() {
    c0 = true;
    c1 = null;
  }
};
const pinotMemberSettingStoreImpl = new PinotMemberSettingStoreImpl(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/pinot/PinotMemberSettingStore.tsx");

export default pinotMemberSettingStoreImpl;
