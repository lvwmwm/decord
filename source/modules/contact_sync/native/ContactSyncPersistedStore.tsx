// Module ID: 11697
// Function ID: 90799
// Name: setStoredContacts
// Dependencies: []
// Exports: clearDismissState, deleteStoredContacts, dismissDMListCTA, dismissUpsellCTA, setDMListCTAFirstSeenDate

// Module 11697 (setStoredContacts)
function setStoredContacts(arg0) {
  const require = arg0;
  const Storage = require(dependencyMap[0]).Storage;
  const result = Storage.set(closure_3, arg0);
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["storedContacts"] = closure_0;
      return obj;
    });
  });
  const obj = require(dependencyMap[1]);
  importDefault(dependencyMap[2]).wait(() => {
    let obj = callback(closure_2[2]);
    obj = { type: "CONTACT_SYNC_STORED_CONTACTS", empty: "" === arg0 };
    return obj.dispatch(obj);
  });
}
let closure_3 = "V2_DCD_CONTACTS_STORAGE_KEY";
const Storage = require(dependencyMap[0]).Storage;
Storage.asyncGet("V2_DCD_CONTACTS_STORAGE_KEY", (arg0) => {
  setStoredContacts(arg0);
});
const _module = require(dependencyMap[3]);
const obj = _module.create(() => ({}));
const Storage2 = require(dependencyMap[0]).Storage;
Storage2.asyncGet("ContactSyncDMListCTADismissed", (arg0) => {
  let callback = Boolean(arg0);
  const Storage = callback(dependencyMap[0]).Storage;
  let timestamp = Storage.get("contact_sync_dm_list_cta_first_seen_date");
  if (null == timestamp) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (Date.now() - timestamp > 5184000000) {
    callback = true;
  }
  callback(dependencyMap[1]).batchUpdates(() => state.setState({ dmListCTADismissed: closure_0 }));
});
const Storage3 = require(dependencyMap[0]).Storage;
Storage3.asyncGet("ContactSyncUpsellCTADismissed", (arg0) => {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState({ upsellCTADismissed: arg0 }));
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/contact_sync/native/ContactSyncPersistedStore.tsx");

export { setStoredContacts };
export const deleteStoredContacts = function deleteStoredContacts() {
  const Storage = require(dependencyMap[0]).Storage;
  const value = Storage.get(closure_3);
  let str = "";
  if (null != value) {
    str = value;
  }
  const Storage2 = require(dependencyMap[0]).Storage;
  Storage2.remove(closure_3);
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["storedContacts"] = "";
      return obj;
    });
  });
  return str;
};
export const useContactSyncStore = obj;
export const dismissUpsellCTA = function dismissUpsellCTA() {
  const Storage = require(dependencyMap[0]).Storage;
  const result = Storage.set("ContactSyncUpsellCTADismissed", true);
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["upsellCTADismissed"] = true;
      return obj;
    });
  });
};
export const dismissDMListCTA = function dismissDMListCTA() {
  const Storage = require(dependencyMap[0]).Storage;
  const result = Storage.set("ContactSyncDMListCTADismissed", true);
  require(dependencyMap[1]).batchUpdates(() => state.setState((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["dmListCTADismissed"] = true;
    return obj;
  }));
};
export const setDMListCTAFirstSeenDate = function setDMListCTAFirstSeenDate() {
  const Storage = require(dependencyMap[0]).Storage;
  if (!Storage.get("contact_sync_dm_list_cta_first_seen_date")) {
    const Storage2 = require(dependencyMap[0]).Storage;
    const _Date = Date;
    const result = Storage2.set("contact_sync_dm_list_cta_first_seen_date", Date.now());
  }
};
export const clearDismissState = function clearDismissState() {
  const Storage = require(dependencyMap[0]).Storage;
  Storage.remove("ContactSyncUpsellCTADismissed");
  const Storage2 = require(dependencyMap[0]).Storage;
  Storage2.remove("ContactSyncDMListCTADismissed");
  obj.setState((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["upsellCTADismissed"] = false;
    obj["dmListCTADismissed"] = false;
    return obj;
  });
};
