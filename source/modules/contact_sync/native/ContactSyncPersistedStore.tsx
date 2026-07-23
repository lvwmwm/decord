// Module ID: 11708
// Function ID: 90861
// Name: setStoredContacts
// Dependencies: [587, 682, 686, 621, 2]
// Exports: clearDismissState, deleteStoredContacts, dismissDMListCTA, dismissUpsellCTA, setDMListCTAFirstSeenDate

// Module 11708 (setStoredContacts)
import { Storage } from "Storage";
import keys from "keys";
import { Storage as Storage2 } from "Storage";
import { Storage as Storage3 } from "Storage";

function setStoredContacts(arg0) {
  const _require = arg0;
  const Storage = _require(587).Storage;
  const result = Storage.set(V2_DCD_CONTACTS_STORAGE_KEY, arg0);
  _require(682).batchUpdates(() => {
    outer1_4.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["storedContacts"] = outer1_0;
      return obj;
    });
  });
  let obj = _require(682);
  importDefault(686).wait(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "CONTACT_SYNC_STORED_CONTACTS", empty: "" === closure_0 };
    return obj.dispatch(obj);
  });
}
const V2_DCD_CONTACTS_STORAGE_KEY = "V2_DCD_CONTACTS_STORAGE_KEY";
Storage.asyncGet("V2_DCD_CONTACTS_STORAGE_KEY", (arg0) => {
  setStoredContacts(arg0);
});
let obj = keys.create(() => ({ loadedPolicyNotice: false, storedContacts: "", upsellCTADismissed: false, policyUpdateNoticeDismissed: false, dmListCTADismissed: false }));
Storage2.asyncGet("ContactSyncDMListCTADismissed", (arg0) => {
  let _require = Boolean(arg0);
  const Storage = _require(587).Storage;
  let timestamp = Storage.get("contact_sync_dm_list_cta_first_seen_date");
  if (null == timestamp) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (Date.now() - timestamp > 5184000000) {
    _require = true;
  }
  _require(682).batchUpdates(() => outer1_4.setState({ dmListCTADismissed: c0 }));
});
Storage3.asyncGet("ContactSyncUpsellCTADismissed", (arg0) => {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_4.setState({ upsellCTADismissed: closure_0 }));
});
let result = require("dispatcher").fileFinishedImporting("modules/contact_sync/native/ContactSyncPersistedStore.tsx");

export { setStoredContacts };
export const deleteStoredContacts = function deleteStoredContacts() {
  const Storage = require(587) /* Storage */.Storage;
  const value = Storage.get(V2_DCD_CONTACTS_STORAGE_KEY);
  let str = "";
  if (null != value) {
    str = value;
  }
  const Storage2 = require(587) /* Storage */.Storage;
  Storage2.remove(V2_DCD_CONTACTS_STORAGE_KEY);
  require(682) /* batchUpdates */.batchUpdates(() => {
    outer1_4.setState((arg0) => {
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
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set("ContactSyncUpsellCTADismissed", true);
  require(682) /* batchUpdates */.batchUpdates(() => {
    outer1_4.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["upsellCTADismissed"] = true;
      return obj;
    });
  });
};
export const dismissDMListCTA = function dismissDMListCTA() {
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set("ContactSyncDMListCTADismissed", true);
  require(682) /* batchUpdates */.batchUpdates(() => outer1_4.setState((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["dmListCTADismissed"] = true;
    return obj;
  }));
};
export const setDMListCTAFirstSeenDate = function setDMListCTAFirstSeenDate() {
  const Storage = require(587) /* Storage */.Storage;
  if (!Storage.get("contact_sync_dm_list_cta_first_seen_date")) {
    const Storage2 = require(587) /* Storage */.Storage;
    const _Date = Date;
    const result = Storage2.set("contact_sync_dm_list_cta_first_seen_date", Date.now());
  }
};
export const clearDismissState = function clearDismissState() {
  const Storage = require(587) /* Storage */.Storage;
  Storage.remove("ContactSyncUpsellCTADismissed");
  const Storage2 = require(587) /* Storage */.Storage;
  Storage2.remove("ContactSyncDMListCTADismissed");
  obj.setState((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["upsellCTADismissed"] = false;
    obj["dmListCTADismissed"] = false;
    return obj;
  });
};
