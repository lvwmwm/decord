// Module ID: 11695
// Function ID: 90763
// Name: initialValues
// Dependencies: [5, 57, 31, 27, 1849, 6646, 11695]
// Exports: getIsOnboarding, initialize, setAllowEmail, setAllowPhone, setAllowSync, setError, setName, setPermissionState, setPhone, setPhoneToken, setSuggestions, useIsOnboarding

// Module 11695 (initialValues)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import { ContactPermissions } from "module_31";
import { PlatformTypes } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import initialValues from "initialValues";

function initialValues() {
  const obj = { marginBottom: "bde7994716d98a3897a327489b8b2f6d", width: "gif", position: "png", top: 500, bottom: 1000, zIndex: 60000, display: 3600000, flexDirection: 86400000, justifyContent: 604800000, paddingHorizontal: 2592000000 };
  obj.mode = obj.NORMAL;
  obj.permissionState = ContactPermissions.NOT_DETERMINED;
  obj.suggestions = [];
  return obj;
}
let obj = { NORMAL: 0, [0]: "NORMAL", ONBOARDING: 1, [1]: "ONBOARDING", ONBOARDING_INVITE: 2, [2]: "ONBOARDING_INVITE" };
obj = _isNativeReflectConstruct.create(() => initialValues());
const result = initialValues.fileFinishedImporting("modules/contact_sync/native/ContactSyncModalStore.tsx");

export const ContactSyncModes = obj;
export const useContactSyncModalStore = obj;
export const initialize = function initialize(arg0) {
  const arg1 = arg0;
  let localAccount = localAccount.getLocalAccount(PlatformTypes.CONTACTS);
  let name;
  if (null != localAccount) {
    name = localAccount.name;
  }
  const dependencyMap = name;
  const currentUser = currentUser.getCurrentUser();
  let phone;
  if (null != currentUser) {
    phone = currentUser.phone;
  }
  localAccount = phone;
  arg1(dependencyMap[5]).batchUpdates(() => state.setState(() => {
    const obj = {};
    const merged = Object.assign(callback());
    obj["mode"] = closure_0;
    obj["phone"] = asyncGeneratorStep;
    obj["name"] = closure_1;
    return obj;
  }));
};
export const setAllowSync = function setAllowSync(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["allowPhone"] = closure_0;
      obj["allowEmail"] = closure_0;
      return obj;
    });
  });
};
export const setAllowPhone = function setAllowPhone(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["allowPhone"] = closure_0;
      return obj;
    });
  });
};
export const setAllowEmail = function setAllowEmail(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["allowEmail"] = closure_0;
      return obj;
    });
  });
};
export const setSuggestions = function setSuggestions(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["suggestions"] = closure_0;
      obj["bulkAddToken"] = closure_1;
      return obj;
    });
  });
};
export const setPhone = function setPhone(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["phone"] = closure_0;
      return obj;
    });
  });
};
export const setPhoneToken = function setPhoneToken(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["phoneToken"] = closure_0;
      return obj;
    });
  });
};
export const setName = function setName(arg0) {
  let flag = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["name"] = closure_0;
      obj["isNameFromContactBook"] = closure_1;
      return obj;
    });
  });
};
export const setPermissionState = function setPermissionState(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["permissionState"] = closure_0;
      return obj;
    });
  });
};
export const setError = function setError(intl) {
  const arg1 = intl;
  arg1(dependencyMap[5]).batchUpdates(() => {
    state.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["error"] = closure_0;
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
