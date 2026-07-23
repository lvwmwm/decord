// Module ID: 11706
// Function ID: 90825
// Name: initialValues
// Dependencies: [4812, 1849, 11707, 653, 621, 682, 2]
// Exports: getIsOnboarding, initialize, setAllowEmail, setAllowPhone, setAllowSync, setError, setName, setPermissionState, setPhone, setPhoneToken, setSuggestions, useIsOnboarding

// Module 11706 (initialValues)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { ContactPermissions } from "ContactSyncLandingPage";
import { PlatformTypes } from "ME";
import keys from "keys";

const require = arg1;
function initialValues() {
  const obj = { mode: null, permissionState: null, error: "", phone: null, phoneToken: null, name: null, isNameFromContactBook: false, allowPhone: true, allowEmail: true, bulkAddToken: null };
  obj.mode = obj.NORMAL;
  obj.permissionState = ContactPermissions.NOT_DETERMINED;
  obj.suggestions = [];
  return obj;
}
let obj = { NORMAL: 0, [0]: "NORMAL", ONBOARDING: 1, [1]: "ONBOARDING", ONBOARDING_INVITE: 2, [2]: "ONBOARDING_INVITE" };
obj = keys.create(() => initialValues());
const result = require("ContactSyncLandingPage").fileFinishedImporting("modules/contact_sync/native/ContactSyncModalStore.tsx");

export const ContactSyncModes = obj;
export const useContactSyncModalStore = obj;
export const initialize = function initialize(arg0) {
  const _require = arg0;
  const localAccount = phone.getLocalAccount(PlatformTypes.CONTACTS);
  let name;
  if (null != localAccount) {
    name = localAccount.name;
  }
  currentUser = currentUser.getCurrentUser();
  phone = undefined;
  if (null != currentUser) {
    phone = currentUser.phone;
  }
  _require(name[5]).batchUpdates(() => outer1_7.setState(() => {
    const obj = {};
    const merged = Object.assign(outer2_8());
    obj["mode"] = outer1_0;
    obj["phone"] = outer1_2;
    obj["name"] = outer1_1;
    return obj;
  }));
};
export const setAllowSync = function setAllowSync(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["allowPhone"] = outer1_0;
      obj["allowEmail"] = outer1_0;
      return obj;
    });
  });
};
export const setAllowPhone = function setAllowPhone(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["allowPhone"] = outer1_0;
      return obj;
    });
  });
};
export const setAllowEmail = function setAllowEmail(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["allowEmail"] = outer1_0;
      return obj;
    });
  });
};
export const setSuggestions = function setSuggestions(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require(682).batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["suggestions"] = outer1_0;
      obj["bulkAddToken"] = outer1_1;
      return obj;
    });
  });
};
export const setPhone = function setPhone(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["phone"] = outer1_0;
      return obj;
    });
  });
};
export const setPhoneToken = function setPhoneToken(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["phoneToken"] = outer1_0;
      return obj;
    });
  });
};
export const setName = function setName(arg0) {
  let flag = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  _require(flag[5]).batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["name"] = outer1_0;
      obj["isNameFromContactBook"] = outer1_1;
      return obj;
    });
  });
};
export const setPermissionState = function setPermissionState(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["permissionState"] = outer1_0;
      return obj;
    });
  });
};
export const setError = function setError(intl) {
  const _require = intl;
  _require(682).batchUpdates(() => {
    outer1_7.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["error"] = outer1_0;
      return obj;
    });
  });
};
export const useIsOnboarding = function useIsOnboarding() {
  const mode = obj().mode;
  let tmp = mode === obj.ONBOARDING;
  if (!tmp) {
    tmp = mode === obj.ONBOARDING_INVITE;
  }
  return tmp;
};
export const getIsOnboarding = function getIsOnboarding() {
  const mode = obj.getState().mode;
  let tmp = mode === obj.ONBOARDING;
  if (!tmp) {
    tmp = mode === obj.ONBOARDING_INVITE;
  }
  return tmp;
};
