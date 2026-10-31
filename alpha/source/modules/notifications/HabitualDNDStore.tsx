// Module ID: 15606
// Function ID: 15607
// Name: HabitualDNDStore
// Dependencies: [6570, 1072, 1089, 4839, 572, 504, 2]

// Module 15606 (HabitualDNDStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import DurationsDefault from "Durations" /* 1089 */;
import UserSettings from "UserSettings" /* 4839 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6570 */;
import size from "module_2" /* 2 */;

const f108682 = (item) => {
  const timestamp = Date.now();
  return item < timestamp - 3 * DurationsDefault.Millis.DAY;
};
const StatusTypes = Constants.StatusTypes;
const hasOwnProperty = [];
let c6 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class HabitualDNDStore extends PersistedStore {
  initialize(sessionStartsWithDND) {
    this.waitFor(SelfPresenceStore);
    let isArray = null != sessionStartsWithDND;
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(sessionStartsWithDND.sessionStartsWithDND);
    }
    if (isArray) {
      sessionStartsWithDND = sessionStartsWithDND.sessionStartsWithDND;
    }
  }
  showNagBar() {
    return c6;
  }
  getState() {
    return { sessionStartsWithDND };
  }
  getTemp() {
    let StatusExpiresAtSetting;
    const obj = { x: StatusExpiresAtSetting.getSetting() };
    StatusExpiresAtSetting = UserSettings.StatusExpiresAtSetting;
    return obj;
  }
}
const prototype = HabitualDNDStore.prototype;
HabitualDNDStore.displayName = "HabitualDNDStore";
HabitualDNDStore.persistKey = "habitualDND";
let obj = {
  POST_CONNECTION_OPEN: function handleConnect() {
    if (SelfPresenceStore.getStatus() === StatusTypes.DND) {
      const StatusExpiresAtSetting = UserSettings.StatusExpiresAtSetting;
      if ("0" === StatusExpiresAtSetting.getSetting()) {
        const _Date = Date;
        sessionStartsWithDND.push(Date.now());
        const found = sessionStartsWithDND.filter((item) => {
          const timestamp = Date.now();
          return item > timestamp - 5 * DurationsDefault.Millis.DAY;
        });
        sessionStartsWithDND = found;
        const someResult = found.length >= 4 && sessionStartsWithDND.some(f108682);
        if (someResult) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const obj = DispatcherDefault;
            obj.dispatch({ type: "HABITUAL_DND_CLEAR" });
          }, 15 * DurationsDefault.Millis.SECOND);
        }
      }
    }
    sessionStartsWithDND = [];
  },
  HABITUAL_DND_CLEAR: function handleDNDClear() {
    c6 = sessionStartsWithDND.length >= 4 && sessionStartsWithDND.some(f108682);
    const someResult = sessionStartsWithDND.length >= 4 && sessionStartsWithDND.some(f108682);
    sessionStartsWithDND = [];
  }
};
const habitualDNDStore = new HabitualDNDStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/notifications/HabitualDNDStore.tsx");

export default habitualDNDStore;
