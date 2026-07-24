// Module ID: 11737
// Function ID: 91150
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 5, 4812, 1849, 11735, 11734, 653, 587, 11736, 5582, 5078, 2]
// Exports: removeLastUserContactsUpload

// Module 11737 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import setStoredContacts from "setStoredContacts";
import { ContactPermissions } from "ContactSyncLandingPage";
import { PlatformTypes } from "ME";
import tmp3 from "AutomaticLifecycleManager";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _requestAndSyncContacts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  return obj(...arguments);
}
({ setStoredContacts: closure_10, deleteStoredContacts: closure_11, useContactSyncStore: closure_12 } = setStoredContacts);
const LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/contact_sync/native/ContactSyncManager.tsx");

export default tmp3;
export const LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY = "LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY";
export const removeLastUserContactsUpload = function removeLastUserContactsUpload() {
  const Storage = require(587) /* Storage */.Storage;
  Storage.remove(LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY);
};
