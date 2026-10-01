// Module ID: 12177
// Function ID: 12178
// Name: ContactSyncUtils
// Dependencies: [5, 17, 5593, 12176, 12175, 1074, 1365, 5029, 1249, 573, 12178, 2021, 1231, 504, 1385, 2111, 4525, 5039, 2]
// Exports: adminDeleteContactSync, bulkAddFriends, checkContactPermissions, getContacts, getImageForContactId, getOpenLearnMoreUrl, getStoredContacts, handleOpenLearnMoreLink, isContactSyncAvailable, isContactSyncEnabled, transitionToAddFriendsLandingPage, uploadContacts, useContactSyncAccount, useContactSyncEnabled, useContactSyncUserIsDiscoverable

// Module 12177 (ContactSyncUtils)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import UserSettings from "UserSettings" /* 2021 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import LinkingDefault from "Linking" /* 4525 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5029 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import ContactSyncManager from "ContactSyncManager" /* 12178 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12176 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12175 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let c4, c5;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let obj = function _uploadContacts() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_3;
    let obj5;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let friend_list_entries;
        let flag;
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const friend_suggestions = tmp4;
            friend_list_entries = tmp;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = false;
            }
            friend_list_entries = undefined;
            body = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "flex", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const _JSON = JSON;
            friend_list_entries = JSON.parse(closure_0);
            const request = { url: closure_131_12.CONNECTION_SYNC_CONTACTS, body: obj5, trackedActionData: obj6, rejectWithError: false };
            obj5 = { friend_list_entries, background: flag, allowed_in_suggestions: closure_131_11.ANYONE_WITH_CONTACT_INFO, include_mutual_friends_count: false };
            obj6 = { event: closure_131_0(closure_131_2[8]).NetworkActionNames.USER_CONTACTS_SYNC };
            const put = closure_131_1(closure_131_2[7]).put;
            const tmp21 = closure_131_1(closure_131_2[7]);
            c4 = 2;
            c5 = 1;
            const obj7 = { value: put(request), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          body = value.body;
          obj = closure_131_1(closure_131_2[9]);
          obj.wait(() => {
            obj = closure_1(friend_list_entries[9]);
            const obj2 = { type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS", suggestions: friend_suggestions.friend_suggestions };
            return obj.dispatch(obj2);
          });
          c5 = 3;
          const obj9 = { value: body, done: true };
          return obj9;
        }
      } catch (tmp11) {
        c5 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
({ useContactSyncStore: metroRequire, clearDismissState: metroImportDefault, deleteStoredContacts: metroImportAll } = ContactSyncPersistedStore);
({ CONTACT_SYNC_MODAL_KEY: c9, ContactPermissions: c10, ContactSyncSuggestionsSetting: unpackModuleId } = ContactSyncConstants);
({ Endpoints: closure_12, PlatformTypes: map1, FriendDiscoveryFlags: closure_14, HelpdeskArticles: closure_15 } = Constants);
const error = new Error("No contact permissions");
const error1 = new Error("No phone number");
const error2 = new Error("Failed to fetch contact image");
let result = size.fileFinishedImporting("modules/contact_sync/native/ContactSyncUtils.tsx");

export const ContactSyncPermissionDenied = error;
export const ContactSyncFailedUserHasNoPhone = error1;
export const ContactImageFetchFailed = error2;
export const isContactSyncAvailable = function isContactSyncAvailable() {
  obj = utils_PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (!isIOSResult) {
    const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
    let flag;
    if (DCDContactSyncManager != null) {
      flag = DCDContactSyncManager.isContactSyncSupported;
    }
    if (flag == null) {
      flag = false;
    }
    isIOSResult = flag;
  }
  return isIOSResult;
};
export const checkContactPermissions = function checkContactPermissions() {
  let result;
  obj = utils_PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (!isIOSResult) {
    const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
    let flag;
    if (DCDContactSyncManager != null) {
      flag = DCDContactSyncManager.isContactSyncSupported;
    }
    if (flag == null) {
      flag = false;
    }
    isIOSResult = flag;
  }
  if (isIOSResult) {
    const DCDContactSyncManager2 = NativeModules.DCDContactSyncManager;
    result = DCDContactSyncManager2.hasContactsPermissions();
  } else {
    result = Promise.resolve(constants.UNAUTHORIZED);
  }
  return result;
};
export const uploadContacts = function uploadContacts() {
  return obj(...arguments);
};
export const bulkAddFriends = function bulkAddFriends(user_ids, bulkAddToken) {
  let obj2;
  const request = { url: closure_12.USER_BULK_RELATIONSHIPS, body: obj2, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE }, rejectWithError: false };
  obj2 = { user_ids, token: bulkAddToken };
  obj = TrackedHTTPUtilsDefault;
  ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_BULK_RELATIONSHIPS_UPDATE });
  const postResult = obj.post(request);
  return postResult.then((body) => body.body);
};
export const adminDeleteContactSync = function adminDeleteContactSync() {
  metroImportDefault();
  metroImportAll();
  obj = ContactSyncManager;
  const result = obj.removeLastUserContactsUpload();
  const ContactSyncEnabled = UserSettings.ContactSyncEnabled;
  ContactSyncEnabled.updateSetting(false);
  const tmp5 = TrackedHTTPUtilsDefault;
  const _delete = tmp5.delete;
  const obj2 = { url: closure_12.CONNECTION(map1.CONTACTS, "@me"), oldFormErrors: true, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_CONNECTIONS_UPDATE }, rejectWithError: false };
  ({ event: discord_common_AnalyticsUtils.NetworkActionNames.USER_CONNECTIONS_UPDATE });
  return _delete(obj2);
};
export const getImageForContactId = function getImageForContactId(arg0) {
  let closure_0 = arg0;
  const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  const promise = new Promise((arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    const imageForContactId = DCDContactSyncManager.getImageForContactId(closure_0, (arg0, str) => {
      if (null == arg0) {
        closure_0(str.replace(/(\r\n|\n|\r)/gm, ""));
      } else {
        closure_1(closure_2_17);
      }
    });
  });
  return promise;
};
export const getContacts = function getContacts(phone) {
  let str;
  let closure_0 = phone;
  const DCDContactSyncManager = NativeModules.DCDContactSyncManager;
  const promise = new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    DCDContactSyncManager.syncContacts(closure_1, closure_0, (arg0, names, payload) => {
      let tmp10;
      if (null == arg0) {
        let parsed;
        try {
          const _JSON = JSON;
          parsed = JSON.parse(names);
        } catch (err) {
          parsed = {};
        }
        const _Object = Object;
        const values = Object.values(parsed);
        const found = values.find((phone) => phone.phone === closure_1_0);
        let unencryptedName;
        if (found != null) {
          unencryptedName = found.unencryptedName;
        }
        obj = { names, ownName: tmp10, payload };
        tmp10 = null;
        const tmp9 = closure_0;
        if (null != unencryptedName) {
          tmp10 = unencryptedName;
        }
        tmp9(obj);
      } else {
        closure_1(error);
      }
    });
  });
  return promise;
};
export const getStoredContacts = function getStoredContacts() {
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(tmp);
  } catch (tmp4) {
    obj = SentryUtilsDefault;
    obj.captureException(tmp4);
  }
  return {};
};
export const useContactSyncAccount = function useContactSyncAccount() {
  let localAccount;
  const items = [ConnectedAccountsStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => localAccount.getLocalAccount(constants.CONTACTS));
};
export const useContactSyncEnabled = function useContactSyncEnabled() {
  const items = [ConnectedAccountsStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    localAccount = localAccount.getLocalAccount(constants.CONTACTS);
    return null != localAccount && localAccount.friendSync && localAccount.type === constants.CONTACTS;
  });
};
export const useContactSyncUserIsDiscoverable = function useContactSyncUserIsDiscoverable() {
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.useSetting();
  obj = FlagUtils;
  let hasFlagResult = obj.hasFlag(setting, constants3.FIND_BY_PHONE);
  const obj2 = FlagUtils;
  const hasFlagResult1 = obj2.hasFlag(setting, constants3.FIND_BY_EMAIL);
  const obj3 = { phone: hasFlagResult, email: hasFlagResult1, any: hasFlagResult };
  if (!hasFlagResult) {
    hasFlagResult = hasFlagResult1;
  }
  return obj3;
};
export const isContactSyncEnabled = function isContactSyncEnabled(contactSyncAccount) {
  return null != contactSyncAccount && contactSyncAccount.friendSync && contactSyncAccount.type === map1.CONTACTS;
};
export const getOpenLearnMoreUrl = function getOpenLearnMoreUrl() {
  obj = HelpdeskUtilsDefault;
  return obj.getArticleURL(constants4.CONTACT_SYNC);
};
export const handleOpenLearnMoreLink = function handleOpenLearnMoreLink() {
  const openURL = LinkingDefault.openURL;
  LinkingDefault;
  obj = HelpdeskUtilsDefault;
  openURL(obj.getArticleURL(constants4.CONTACT_SYNC));
};
export const transitionToAddFriendsLandingPage = function transitionToAddFriendsLandingPage() {
  obj = ModalActionCreatorsDefault;
  obj.popWithKey(React4);
};
