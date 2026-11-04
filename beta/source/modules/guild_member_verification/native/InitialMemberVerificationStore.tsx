// Module ID: 6951
// Function ID: 6952
// Name: InitialMemberVerificationStore
// Dependencies: [504, 572, 2]
// Exports: setInitialVerification

// Module 6951 (InitialMemberVerificationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class InitialMemberVerificationStore extends Store {
  getInitialVerificationState(arg0) {
    let tmp = null;
    if (null != arg0) {
      let value = map.get(arg0);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
}
const prototype = InitialMemberVerificationStore.prototype;
InitialMemberVerificationStore.displayName = "InitialMemberVerificationStore";
let obj = {
  SET_INITIAL_MEMBER_VERIFICATION: function handleSetInitialState(guildId) {
    guildId = guildId.guildId;
    const state = guildId.state;
    const obj = map;
    if (!map.has(guildId)) {
      const result = obj.set(guildId, state);
    }
  }
};
const initialMemberVerificationStore = new InitialMemberVerificationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/InitialMemberVerificationStore.tsx");

export default initialMemberVerificationStore;
export function setInitialVerification(guildId, state) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_INITIAL_MEMBER_VERIFICATION", guildId, state };
  obj.dispatch(obj2);
}
