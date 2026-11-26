// Module ID: 8924
// Function ID: 8925
// Name: InterestPickerSessionStore
// Dependencies: [504, 572, 2]

// Module 8924 (InterestPickerSessionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let picks;

const React = [];
let c2 = false;
let id = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class InterestPickerSessionStore extends PersistedStore {
  initialize(ownerId) {
    let items;
    ownerId = undefined;
    if (ownerId != null) {
      ownerId = ownerId.ownerId;
    }
    if (null != ownerId) {
      picks = ownerId.picks;
      if (picks == null) {
        picks = [];
      }
      items = picks;
    } else {
      items = [];
    }
    let closure_0 = items;
    let ownerId1;
    if (ownerId != null) {
      ownerId1 = ownerId.ownerId;
    }
    let tmp3 = null != ownerId1;
    if (tmp3) {
      let flag = ownerId.pickerSeen;
      if (flag == null) {
        flag = false;
      }
      tmp3 = flag;
    }
    let c1 = tmp3;
    let ownerId2;
    if (ownerId != null) {
      ownerId2 = ownerId.ownerId;
    }
    if (ownerId2 == null) {
      ownerId2 = null;
    }
    id = ownerId2;
    c2 = false;
  }
  getState() {
    return { picks, pickerSeen, ownerId: id };
  }
  getPicks() {
    const items = [...closure_0];
    return items;
  }
  hasSeenPicker() {
    return c1 || picks.length > 0;
  }
  isPickerOpen() {
    return c2;
  }
}
const prototype = InterestPickerSessionStore.prototype;
InterestPickerSessionStore.displayName = "InterestPickerSessionStore";
InterestPickerSessionStore.persistKey = "InterestPickerSessionStore";
const obj = {
  WATERWHEELS_INTEREST_PICKER_SET_PICKS: function handleSetPicks(gameIds) {
    const items = [...gameIds.gameIds];
    let closure_0 = items;
  },
  WATERWHEELS_INTEREST_PICKER_SEEN: function handleSeen() {
    let c1 = true;
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
    let c1 = false;
    c2 = false;
    id = null;
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    const tmp = null != id && id !== user.id;
    if (tmp) {
      let closure_0 = [];
      let c1 = false;
      c2 = false;
    }
    id = user.id;
  }
};
const interestPickerSessionStore = new InterestPickerSessionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/waterwheels/interest/InterestPickerSessionStore.tsx");

export default interestPickerSessionStore;
