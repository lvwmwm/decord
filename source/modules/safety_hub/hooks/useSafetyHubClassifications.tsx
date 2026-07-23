// Module ID: 11031
// Function ID: 85837
// Name: useSafetyHubClassifications
// Dependencies: [31, 11026, 7544, 566, 21, 7543, 7545, 11032, 2]
// Exports: useActiveSafetyHubClassifications, useExpiredSafetyHubClassifications, useSafetyHubAppealSignal, useSafetyHubClassification

// Module 11031 (useSafetyHubClassifications)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ViolationType } from "SafetyHubLinks";

const require = arg1;
function useSafetyHubClassifications() {
  const items = [_isNativeReflectConstruct];
  const stateFromStoresArray = require(566) /* initialize */.useStateFromStoresArray(items, () => outer1_5.getClassifications());
  return stateFromStoresArray.sort((id, id2) => {
    const obj = outer1_1(outer1_3[4]);
    const extractTimestampResult = outer1_1(outer1_3[4]).extractTimestamp(id2.id);
    return extractTimestampResult - outer1_1(outer1_3[4]).extractTimestamp(id.id);
  });
}
const result = require("SafetyHubLinks").fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubClassifications.tsx");

export { useSafetyHubClassifications };
export const useSafetyHubClassification = function useSafetyHubClassification(classificationId) {
  const _require = classificationId;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getClassification(closure_0));
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_5.getClassificationRequestState(closure_0));
  const obj2 = _require(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = _require(566).useStateFromStores(items2, () => outer1_5.getIsDsaEligible());
  const obj3 = _require(566);
  const items3 = [_isNativeReflectConstruct];
  let stateFromStores3 = _require(566).useStateFromStores(items3, () => outer1_5.getIsAppealEligible());
  const obj4 = _require(566);
  if (obj5.isGuildClassification(stateFromStores)) {
    const guild_metadata = stateFromStores.guild_metadata;
    let member_type;
    if (null != guild_metadata) {
      member_type = guild_metadata.member_type;
    }
    if (member_type === _require(7545).MemberType.OWNER) {
      let GUILD_MEMBER = ViolationType.GUILD_OWNER;
    } else {
      GUILD_MEMBER = ViolationType.GUILD_MEMBER;
    }
  } else {
    const items4 = [classificationId, stateFromStores, stateFromStores1];
    const effect = React.useEffect(() => {
      let tmp = undefined === stateFromStores;
      if (tmp) {
        tmp = null == stateFromStores1;
      }
      if (tmp) {
        const safetyHubDataForClassification = stateFromStores1(outer1_3[7]).getSafetyHubDataForClassification(closure_0);
        const obj = stateFromStores1(outer1_3[7]);
      }
    }, items4);
    obj = { classification: stateFromStores, classificationRequestState: stateFromStores1, isDsaEligible: stateFromStores2 };
    if (stateFromStores3) {
      stateFromStores3 = null != stateFromStores;
    }
    if (stateFromStores3) {
      stateFromStores3 = null == stateFromStores.appeal_status;
    }
    obj.isAppealEligible = stateFromStores3;
    obj.violationType = ViolationType.USER;
    return obj;
  }
};
export const useActiveSafetyHubClassifications = function useActiveSafetyHubClassifications() {
  let date = new Date();
  return useSafetyHubClassifications().filter((max_expiration_time) => {
    const date = new Date(max_expiration_time.max_expiration_time);
    return date > date;
  });
};
export const useExpiredSafetyHubClassifications = function useExpiredSafetyHubClassifications() {
  let date = new Date();
  return useSafetyHubClassifications().filter((max_expiration_time) => {
    const date = new Date(max_expiration_time.max_expiration_time);
    return date <= date;
  });
};
export const useSafetyHubAppealSignal = function useSafetyHubAppealSignal() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_5.getAppealSignal());
};
