// Module ID: 11359
// Function ID: 11360
// Name: useSafetyHubClassifications
// Dependencies: [19, 7881, 7868, 504, 11, 7867, 7869, 11360, 2]
// Exports: useActiveSafetyHubClassifications, useExpiredSafetyHubClassifications, useSafetyHubAppealSignal, useSafetyHubClassification, useSafetyHubClassifications

// Module 11359 (useSafetyHubClassifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11360 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f93492 = () => classifications.getClassifications();
const f93493 = (id, id2) => {
  const obj = SnowflakeUtilsDefault;
  const extractTimestampResult = obj.extractTimestamp(id2.id);
  const obj2 = SnowflakeUtilsDefault;
  return extractTimestampResult - obj2.extractTimestamp(id.id);
};
const ViolationType = SafetyHubConstants.ViolationType;
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubClassifications.tsx");

export const useSafetyHubClassifications = function useSafetyHubClassifications() {
  const items = [SafetyHubStore];
  const obj = get_initialized;
  const stateFromStoresArray = obj.useStateFromStoresArray(items, f93492);
  return stateFromStoresArray.sort(f93493);
};
export const useSafetyHubClassification = function useSafetyHubClassification(classificationId) {
  let USER;
  _require = classificationId;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getClassification(classificationId));
  const items1 = [SafetyHubStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SafetyHubStore.getClassificationRequestState(classificationId));
  const items2 = [SafetyHubStore];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => SafetyHubStore.getIsDsaEligible());
  const items3 = [SafetyHubStore];
  const obj4 = require("get initialized");
  let stateFromStores3 = obj4.useStateFromStores(items3, () => SafetyHubStore.getIsAppealEligible());
  const obj5 = require("SafetyHubUtils");
  if (obj5.isGuildClassification(stateFromStores)) {
    let GUILD_MEMBER;
    const guild_metadata = stateFromStores.guild_metadata;
    let member_type;
    if (guild_metadata != null) {
      member_type = guild_metadata.member_type;
    }
    if (member_type === tmp(7869).MemberType.OWNER) {
      GUILD_MEMBER = ViolationType.GUILD_OWNER;
    } else {
      GUILD_MEMBER = ViolationType.GUILD_MEMBER;
    }
    USER = GUILD_MEMBER;
  } else {
    USER = ViolationType.USER;
  }
  const items4 = [classificationId, stateFromStores, stateFromStores1];
  const effect = react.useEffect(() => {
    const tmp = undefined === stateFromStores && null == stateFromStores1;
    if (tmp) {
      const obj = SafetyHubActionCreatorsAll;
      const safetyHubDataForClassification = obj.getSafetyHubDataForClassification(classificationId);
    }
  }, items4);
  const obj6 = { classification: stateFromStores, classificationRequestState: stateFromStores1, isDsaEligible: stateFromStores2, isAppealEligible: stateFromStores3, violationType: USER };
  if (stateFromStores3) {
    stateFromStores3 = null != stateFromStores;
  }
  if (stateFromStores3) {
    stateFromStores3 = null == stateFromStores.appeal_status;
  }
  return obj6;
};
export const useActiveSafetyHubClassifications = function useActiveSafetyHubClassifications() {
  const items = [SafetyHubStore];
  const obj = get_initialized;
  const stateFromStoresArray = obj.useStateFromStoresArray(items, f93492);
  const sorted = stateFromStoresArray.sort(f93493);
  let date = new Date();
  return sorted.filter((max_expiration_time) => {
    date = new Date(max_expiration_time.max_expiration_time);
    return date > date;
  });
};
export const useExpiredSafetyHubClassifications = function useExpiredSafetyHubClassifications() {
  let classifications;
  let obj = get_initialized;
  const items = [SafetyHubStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, f93492);
  const sorted = stateFromStoresArray.sort(f93493);
  let date = new Date();
  return sorted.filter((max_expiration_time) => {
    date = new Date(max_expiration_time.max_expiration_time);
    return date <= date;
  });
};
export const useSafetyHubAppealSignal = function useSafetyHubAppealSignal() {
  let appealSignal;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => appealSignal.getAppealSignal());
};
