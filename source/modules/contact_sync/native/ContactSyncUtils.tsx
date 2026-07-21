// Module ID: 11698
// Function ID: 90822
// Name: isContactSyncAvailable
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295]
// Exports: adminDeleteContactSync, bulkAddFriends, checkContactPermissions, getContacts, getImageForContactId, getStoredContacts, handleOpenLearnMoreLink, transitionToAddFriendsLandingPage, uploadContacts, useContactSyncAccount, useContactSyncEnabled, useContactSyncUserIsDiscoverable

// Module 11698 (isContactSyncAvailable)
import closure_3 from "result";
import { NativeModules } from "result";
import closure_5 from "result";
import result from "result";
import result from "result";
import result from "result";

function isContactSyncAvailable() {
  const tmp = !arg1(dependencyMap[6]).isIOS();
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
  const _uploadContacts = obj;
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
  return importDefault(dependencyMap[15]).getArticleURL(constants4.CONTACT_SYNC);
}
({ useContactSyncStore: closure_6, clearDismissState: closure_7, deleteStoredContacts: closure_8 } = result);
({ CONTACT_SYNC_MODAL_KEY: closure_9, ContactPermissions: closure_10, ContactSyncSuggestionsSetting: closure_11 } = result);
({ Endpoints: closure_12, PlatformTypes: closure_13, FriendDiscoveryFlags: closure_14, HelpdeskArticles: closure_15 } = result);
const error = new Error("No contact permissions");
const error1 = new Error("No phone number");
const error2 = new Error("Failed to fetch contact image");
result = arg1(dependencyMap[18]).fileFinishedImporting("modules/contact_sync/native/ContactSyncUtils.tsx");

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
  let obj = importDefault(dependencyMap[7]);
  obj = { url: closure_12.USER_BULK_RELATIONSHIPS, body: obj };
  obj = { user_ids: arr, token: bulkAddToken, trackedActionData: { event: bulkAddToken(dependencyMap[8]).NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE }, rejectWithError: false };
  const obj1 = { event: bulkAddToken(dependencyMap[8]).NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE };
  return obj.post(obj).then((body) => body.body);
};
export const adminDeleteContactSync = function adminDeleteContactSync() {
  callback2();
  callback3();
  let obj = arg1(dependencyMap[10]);
  const result = obj.removeLastUserContactsUpload();
  const ContactSyncEnabled = arg1(dependencyMap[11]).ContactSyncEnabled;
  ContactSyncEnabled.updateSetting(false);
  obj = { url: closure_12.CONNECTION(constants2.CONTACTS, "@me"), oldFormErrors: true };
  obj = { event: arg1(dependencyMap[8]).NetworkActionNames.USER_CONNECTIONS_UPDATE };
  obj.trackedActionData = obj;
  obj.rejectWithError = false;
  return importDefault(dependencyMap[7]).delete(obj);
};
export const getImageForContactId = function getImageForContactId(arg0, arg1) {
  arg1 = arg0;
  const importDefault = NativeModules.DCDContactSyncManager;
  return new Promise((arg0, arg1) => {
    const DCDContactSyncManager = arg1;
    const imageForContactId = DCDContactSyncManager.getImageForContactId(arg0, (arg0, str) => {
      if (null == arg0) {
        arg0(str.replace(/(\r\n|\n|\r)/gm, ""));
      } else {
        str(closure_17);
      }
    });
  });
};
export const getContacts = function getContacts(arg0, storedContacts) {
  let str = storedContacts;
  storedContacts = arg0;
  if (storedContacts === undefined) {
    str = "";
  }
  const importDefault = str;
  let dependencyMap;
  dependencyMap = NativeModules.DCDContactSyncManager;
  return new Promise((arg0, arg1) => {
    DCDContactSyncManager.syncContacts(arg1, arg0, (arg0, names, payload) => {
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
            // break
          }
          let tmp11 = unencryptedName;
          let obj = { names };
          let tmp13 = null;
          let tmp12 = arg0;
          if (null != unencryptedName) {
            tmp13 = unencryptedName;
          }
          obj.ownName = tmp13;
          obj.payload = payload;
          let tmp12Result = tmp12(obj);
        }
      } else {
        names(closure_16);
      }
    });
  });
};
export const getStoredContacts = function getStoredContacts() {
  const parsed = JSON.parse(state.getState().storedContacts);
};
export const useContactSyncAccount = function useContactSyncAccount() {
  const items = [closure_5];
  return arg1(dependencyMap[13]).useStateFromStores(items, () => localAccount.getLocalAccount(constants.CONTACTS));
};
export const useContactSyncEnabled = function useContactSyncEnabled() {
  const items = [closure_5];
  return arg1(dependencyMap[13]).useStateFromStores(items, () => callback(localAccount.getLocalAccount(constants.CONTACTS)));
};
export const useContactSyncUserIsDiscoverable = function useContactSyncUserIsDiscoverable() {
  const FriendDiscoverySettings = arg1(dependencyMap[11]).FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  let obj = arg1(dependencyMap[14]);
  let hasFlagResult = obj.hasFlag(setting, constants3.FIND_BY_PHONE);
  const hasFlagResult1 = arg1(dependencyMap[14]).hasFlag(setting, constants3.FIND_BY_EMAIL);
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
  importDefault(dependencyMap[16]).openURL(getOpenLearnMoreUrl());
};
export const transitionToAddFriendsLandingPage = function transitionToAddFriendsLandingPage() {
  importDefault(dependencyMap[17]).popWithKey(closure_9);
};
