// Module ID: 15018
// Function ID: 15019
// Name: EmailSettingsStore
// Dependencies: [504, 572, 2]

// Module 15018 (EmailSettingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

function reset() {
  let c1 = null;
  c2 = false;
}
let categories = {};
let c1 = null;
let c2 = false;
const Store = get_initializedDefault.Store;
class EmailSettingsStore extends Store {
  getEmailSettings() {
    categories = { categories, initialized };
    return categories;
  }
}
Object.defineProperty(EmailSettingsStore.prototype, "isFetching", {
  get: function isFetching() {
    return c2;
  },
  set: undefined
});
EmailSettingsStore.displayName = "EmailSettingsStore";
categories = {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  EMAIL_SETTINGS_FETCH_START() {
    c2 = true;
  },
  EMAIL_SETTINGS_FETCH_SUCCESS: function handleFetchSuccess(settings) {
    let c1;
    let obj;
    ({ categories: obj, initialized: c1 } = settings.settings);
    c2 = false;
  },
  EMAIL_SETTINGS_FETCH_FAILURE() {
    c2 = false;
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function handleUpdateSuccess(settings) {

  },
  EMAIL_SETTINGS_UPDATE: function handleUpdate(updates) {
    updates = updates.updates;
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(updates);
  },
  EMAIL_SETTINGS_UPDATE_FAILURE: function handleUpdateFailure(previous) {
    previous = previous.previous;
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(previous);
  }
};
const emailSettingsStore = new EmailSettingsStore(DispatcherDefault, categories);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailSettingsStore.tsx");

export default emailSettingsStore;
