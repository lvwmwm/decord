// Module ID: 8068
// Function ID: 8069
// Name: AppStoreAgeSignalCache
// Dependencies: [1387, 8067, 1378, 8069, 8072, 510, 1242, 2]
// Exports: isAgeSignalCached, recordAgeSignalSubmitted

// Module 8068 (AppStoreAgeSignalCache)
import Storage2 from "Storage" /* 510 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import react_native from "react-native" /* 1378 */;
import AppStoreConsentReinstateEndpointExperiment from "AppStoreConsentReinstateEndpointExperiment" /* 8067 */;
import u8 from "u8" /* 8069 */;
import SHA256 from "SHA256" /* 8072 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

function isAgeSignalCacheEnabled() {
  const obj = AppStoreConsentReinstateEndpointExperiment;
  return obj.getIsAppStoreConsentReinstateEndpointEnabled("appStoreAgeSignalCache", false);
}
function getAppVersion() {
  const obj = react_native;
  return obj.getConstants().Version;
}
function storageKey() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let combined = null;
  if (null != id) {
    const _HermesInternal = HermesInternal;
    combined = "AppStoreAgeSignalLastSubmitted_" + id;
  }
  return combined;
}
function hashAgeSignal(ageUpper) {
  let ageLower;
  const items = [, , , , , , , ];
  ({ platform: arr[0], ageLower } = ageUpper);
  if (ageLower == null) {
    ageLower = "";
  }
  items[1] = ageLower;
  let str = ageUpper.ageUpper;
  if (str == null) {
    str = "";
  }
  items[2] = str;
  let str2 = ageUpper.appleVerifiedMethod;
  if (str2 == null) {
    str2 = "";
  }
  items[3] = str2;
  let str3 = ageUpper.googleAgeSignalsStatus;
  if (str3 == null) {
    str3 = "";
  }
  items[4] = str3;
  let str4 = ageUpper.googleAgeRangeSource;
  if (str4 == null) {
    str4 = "";
  }
  items[5] = str4;
  let str5 = ageUpper.googleSignificantChangeStatus;
  if (str5 == null) {
    str5 = "";
  }
  items[6] = str5;
  let str6 = ageUpper.googleInstallId;
  if (str6 == null) {
    str6 = "";
  }
  items[7] = str6;
  const joined = items.join("|");
  const bytesToHex = u8.bytesToHex;
  u8;
  const sha256 = SHA256.sha256;
  SHA256;
  const obj = u8;
  return bytesToHex(sha256(obj.utf8ToBytes(joined)));
}
const set = new Set(["no_change", "stronger_verification", "underage_banned", "no_age_signal", "auto_collected_outside_mandate"]);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalCache.tsx");

export { hashAgeSignal };
export function isAgeSignalCached(signal) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let combined = null;
  if (null != id) {
    const _HermesInternal = HermesInternal;
    combined = "AppStoreAgeSignalLastSubmitted_" + id;
  }
  if (null != combined) {
    const obj2 = AppStoreConsentReinstateEndpointExperiment;
    if (obj2.getIsAppStoreConsentReinstateEndpointEnabled("appStoreAgeSignalCache", false)) {
      const Storage = tmp9(510).Storage;
      const value = Storage.get(combined);
      let tmp6 = null != value;
      if (tmp6) {
        const appVersion = value.appVersion;
        const tmp9Result = react_native;
        tmp6 = appVersion === tmp9Result.getConstants().Version;
      }
      if (tmp6) {
        tmp6 = value.hash === hashAgeSignal(signal);
      }
      return tmp6;
    }
  }
  return false;
}
export function recordAgeSignalSubmitted(signal, value) {
  function isHandledByServer(reason) {
    reason = reason.reason;
    let tmp = "accepted" === reason.result;
    if (!tmp) {
      const hasItem = null != reason && set.has(reason);
      tmp = hasItem;
    }
    return tmp;
  }
  if (isHandledByServer(value)) {
    let tmp = isAgeSignalCacheEnabled;
    if (isAgeSignalCacheEnabled()) {
      const tmp3 = storageKey();
      if (null != tmp3) {
        try {
          const obj = { hash: hashAgeSignal(signal), appVersion: getAppVersion() };
          const Storage = Storage2.Storage;
          const result = Storage.set(tmp3, obj);
        } catch (tmp11) {
          const obj3 = { tags: { source: "app_store_age_signal_cache", step: "record" } };
          const obj2 = SentryUtilsDefault;
          obj2.captureException(tmp11, obj3);
        }
      }
    }
  }
}
