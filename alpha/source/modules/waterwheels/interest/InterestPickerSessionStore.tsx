// Module ID: 10149
// Function ID: 10150
// Name: InterestPickerSessionStore
// Dependencies: [504, 572, 2]

// Module 10149 (InterestPickerSessionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const React = [];
let c1 = false;
let c2 = false;
let id = null;
const Store = get_initializedDefault.Store;
class InterestPickerSessionStore extends Store {
  getPicks() {
    const items = [...closure_0];
    return items;
  }
  hasSeenPicker() {
    return c1 || length.length > 0;
  }
  isPickerOpen() {
    return c2;
  }
}
const prototype = InterestPickerSessionStore.prototype;
InterestPickerSessionStore.displayName = "InterestPickerSessionStore";
const obj = {
  WATERWHEELS_INTEREST_PICKER_SET_PICKS: function handleSetPicks(gameIds) {
    const items = [...gameIds.gameIds];
    let closure_0 = items;
  },
  WATERWHEELS_INTEREST_PICKER_SEEN: function handleSeen() {
    c1 = true;
  },
  WATERWHEELS_INTEREST_PICKER_OPEN_CHANGE: function handleOpenChange(open) {
    open = open.open;
    if (c2 === open) {
      return false;
    } else {
      c2 = open;
    }
  },
  LOGOUT: function handleLogout() {
    let closure_0 = [];
    c1 = false;
    c2 = false;
    id = null;
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    const tmp = null != id && id !== user.id;
    if (tmp) {
      let closure_0 = [];
      c1 = false;
      c2 = false;
    }
    id = user.id;
  }
};
const interestPickerSessionStore = new InterestPickerSessionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerSessionStore.tsx");

export default interestPickerSessionStore;
