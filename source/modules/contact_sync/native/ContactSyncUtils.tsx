// Module ID: 11736
// Function ID: 91122
// Name: isContactSyncAvailable
// Dependencies: [5, 27, 4812, 11735, 11734, 653, 478, 4942, 480, 686, 11737, 3803, 1184, 566, 1360, 1920, 3827, 4337, 2]
// Exports: adminDeleteContactSync, bulkAddFriends, checkContactPermissions, getContacts, getImageForContactId, getStoredContacts, handleOpenLearnMoreLink, transitionToAddFriendsLandingPage, uploadContacts, useContactSyncAccount, useContactSyncEnabled, useContactSyncUserIsDiscoverable

// Module 11736 (isContactSyncAvailable)
import closure_3 from "ME";
import { NativeModules } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import setStoredContacts from "setStoredContacts";
import ContactSyncLandingPage from "ContactSyncLandingPage";
import ME from "ME";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function isContactSyncAvailable() {
  const tmp = !require(478) /* isWindows */.isIOS();
  let tmp2 = !tmp;
  if (tmp) {
    const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
    let prop;
    if (null != DCDContactSyncManager) {
      prop = DCDContactSyncManager.isContactSyncSupported;
    }
    tmp2 = null != prop && prop;
    const tmp6 = null != prop && prop;
  }
  return tmp2;
}
function _uploadContacts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function isContactSyncEnabled(contactSyncAccount) {
  let tmp = null != contactSyncAccount && contactSyncAccount.friendSync;
  if (tmp) {
    tmp = contactSyncAccount.type === constants2.CONTACTS;
  }
  return tmp;
}
function getOpenLearnMoreUrl() {
  return importDefault(1920).getArticleURL(constants4.CONTACT_SYNC);
}
({ useContactSyncStore: closure_6, clearDismissState: closure_7, deleteStoredContacts: closure_8 } = setStoredContacts);
({ CONTACT_SYNC_MODAL_KEY: closure_9, ContactPermissions: closure_10, ContactSyncSuggestionsSetting: closure_11 } = ContactSyncLandingPage);
({ Endpoints: closure_12, PlatformTypes: closure_13, FriendDiscoveryFlags: closure_14, HelpdeskArticles: closure_15 } = ME);
const error = new Error("No contact permissions");
const error1 = new Error("No phone number");
const error2 = new Error("Failed to fetch contact image");
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/contact_sync/native/ContactSyncUtils.tsx");

export const ContactSyncPermissionDenied = error;
export const ContactSyncFailedUserHasNoPhone = error1;
export const ContactImageFetchFailed = error2;
export { isContactSyncAvailable };
export const checkContactPermissions = function checkContactPermissions() {
  if (isContactSyncAvailable()) {
    const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
    let result = DCDContactSyncManager.hasContactsPermissions();
  } else {
    result = Promise.resolve(constants.UNAUTHORIZED);
  }
  return result;
};
export const uploadContacts = function uploadContacts(payload, arg1) {
  return _uploadContacts(...arguments);
};
export const bulkAddFriends = function bulkAddFriends(arr, bulkAddToken) {
  let obj = importDefault(4942);
  obj = { url: closure_12.USER_BULK_RELATIONSHIPS, body: obj };
  obj = { user_ids: arr, token: bulkAddToken, trackedActionData: { event: require(480) /* isThrottled */.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE }, rejectWithError: false };
  const obj1 = { event: require(480) /* isThrottled */.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE };
  return obj.post(obj).then((body) => body.body);
};
export const adminDeleteContactSync = function adminDeleteContactSync() {
  callback2();
  callback3();
  let obj = require(11737) /* _isNativeReflectConstruct */;
  const result = obj.removeLastUserContactsUpload();
  const ContactSyncEnabled = require(3803) /* explicitContentFromProto */.ContactSyncEnabled;
  ContactSyncEnabled.updateSetting(false);
  obj = { url: closure_12.CONNECTION(constants2.CONTACTS, "@me"), oldFormErrors: true };
  obj = { event: require(480) /* isThrottled */.NetworkActionNames.USER_CONNECTIONS_UPDATE };
  obj.trackedActionData = obj;
  obj.rejectWithError = false;
  return importDefault(4942).delete(obj);
};
export const getImageForContactId = function getImageForContactId(closure_0, arg1) {
  let DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  return new Promise((closure_0) => {
    const DCDContactSyncManager = arg1;
    const imageForContactId = DCDContactSyncManager.getImageForContactId(closure_0, (arg0, str) => {
      if (null == arg0) {
        callback(str.replace(/(\r\n|\n|\r)/gm, ""));
      } else {
        callback2(outer2_17);
      }
    });
  });
};
export const getContacts = function getContacts(arg0, storedContacts) {
  let str = storedContacts;
  let closure_0 = arg0;
  if (storedContacts === undefined) {
    str = "";
  }
  let DCDContactSyncManager;
  DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  return new Promise((closure_0, closure_1) => {
    DCDContactSyncManager.syncContacts(closure_1, closure_0, (arg0, names, payload) => {
      if (null == arg0) {
        const _JSON = JSON;
        while (true) {
          let tmp7 = globalThis;
          let _Object = Object;
          let values = Object.values(tmp6);
          let found = values.find((phone) => phone.phone === closure_0);
          let tmp9 = found;
          let unencryptedName;
          if (null == found) {
            break;
          } else {
            unencryptedName = found.unencryptedName;
            break;
          }
          let tmp11 = unencryptedName;
          let obj = { names };
          let tmp13 = null;
          let tmp12 = closure_0;
          if (null != unencryptedName) {
            tmp13 = unencryptedName;
          }
          obj.ownName = tmp13;
          obj.payload = payload;
          let tmp12Result = tmp12(obj);
        }
      } else {
        callback(outer2_16);
      }
    });
  });
};
export const getStoredContacts = function getStoredContacts() {
  const parsed = JSON.parse(state.getState().storedContacts);
};
export const useContactSyncAccount = function useContactSyncAccount() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_5.getLocalAccount(outer1_13.CONTACTS));
};
export const useContactSyncEnabled = function useContactSyncEnabled() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_20(outer1_5.getLocalAccount(outer1_13.CONTACTS)));
};
export const useContactSyncUserIsDiscoverable = function useContactSyncUserIsDiscoverable() {
  const FriendDiscoverySettings = require(3803) /* explicitContentFromProto */.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  let obj = require(1360) /* hasFlag */;
  let hasFlagResult = obj.hasFlag(setting, constants3.FIND_BY_PHONE);
  const hasFlagResult1 = require(1360) /* hasFlag */.hasFlag(setting, constants3.FIND_BY_EMAIL);
  obj = { phone: hasFlagResult, email: hasFlagResult1 };
  if (!hasFlagResult) {
    hasFlagResult = hasFlagResult1;
  }
  obj.any = hasFlagResult;
  return obj;
};
export { isContactSyncEnabled };
export { getOpenLearnMoreUrl };
export const handleOpenLearnMoreLink = function handleOpenLearnMoreLink() {
  importDefault(3827).openURL(getOpenLearnMoreUrl());
};
export const transitionToAddFriendsLandingPage = function transitionToAddFriendsLandingPage() {
  importDefault(4337).popWithKey(closure_9);
};
