// Module ID: 11020
// Function ID: 85763
// Name: useSafetyHubClassifications
// Dependencies: []
// Exports: useActiveSafetyHubClassifications, useExpiredSafetyHubClassifications, useSafetyHubAppealSignal, useSafetyHubClassification

// Module 11020 (useSafetyHubClassifications)
function useSafetyHubClassifications() {
  const items = [closure_5];
  const stateFromStoresArray = arg1(dependencyMap[3]).useStateFromStoresArray(items, () => classifications.getClassifications());
  return stateFromStoresArray.sort((id, id2) => {
    const obj = callback(closure_3[4]);
    const extractTimestampResult = callback(closure_3[4]).extractTimestamp(id2.id);
    return extractTimestampResult - callback(closure_3[4]).extractTimestamp(id.id);
  });
}
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const ViolationType = arg1(dependencyMap[2]).ViolationType;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubClassifications.tsx");

export { useSafetyHubClassifications };
export const useSafetyHubClassification = function useSafetyHubClassification(classificationId) {
  const arg1 = classificationId;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => store.getClassification(arg0));
  const importDefault = stateFromStores;
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => store.getClassificationRequestState(arg0));
  const importAll = stateFromStores1;
  const obj2 = arg1(dependencyMap[3]);
  const items2 = [closure_5];
  const stateFromStores2 = arg1(dependencyMap[3]).useStateFromStores(items2, () => store.getIsDsaEligible());
  const obj3 = arg1(dependencyMap[3]);
  const items3 = [closure_5];
  let stateFromStores3 = arg1(dependencyMap[3]).useStateFromStores(items3, () => store.getIsAppealEligible());
  const obj4 = arg1(dependencyMap[3]);
  if (obj5.isGuildClassification(stateFromStores)) {
    const guild_metadata = stateFromStores.guild_metadata;
    let member_type;
    if (null != guild_metadata) {
      member_type = guild_metadata.member_type;
    }
    if (member_type === arg1(dependencyMap[6]).MemberType.OWNER) {
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
        const safetyHubDataForClassification = stateFromStores1(closure_3[7]).getSafetyHubDataForClassification(arg0);
        const obj = stateFromStores1(closure_3[7]);
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
  const arr = useSafetyHubClassifications();
  const arg1 = new Date();
  return arr.filter((max_expiration_time) => {
    const date = new Date(max_expiration_time.max_expiration_time);
    return date > date;
  });
};
export const useExpiredSafetyHubClassifications = function useExpiredSafetyHubClassifications() {
  const arr = useSafetyHubClassifications();
  const arg1 = new Date();
  return arr.filter((max_expiration_time) => {
    const date = new Date(max_expiration_time.max_expiration_time);
    return date <= date;
  });
};
export const useSafetyHubAppealSignal = function useSafetyHubAppealSignal() {
  const items = [closure_5];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => appealSignal.getAppealSignal());
};
