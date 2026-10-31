// Module ID: 14976
// Function ID: 14977
// Name: ProfileReadStateExperiment
// Dependencies: [1246, 1383, 1447, 504, 2]
// Exports: ProfileReadStateExposure, useProfileReadStateConfigPeek

// Module 14976 (ProfileReadStateExperiment)
import get_initialized from "get initialized" /* 504 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import UserStore from "UserStore" /* 1383 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

function getProfileReadStateConfigPeek() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null == id) {
    return null;
  } else {
    const assignment = ApexExperimentStore.getAssignment("user", id, apexExperiment.definition.name);
    let variantId;
    if (assignment != null) {
      variantId = assignment.variantId;
    }
    let tmp7 = null;
    if (null != variantId) {
      tmp7 = null;
      if (!assignment.useAsEligibility) {
        let tmp9 = obj2[assignment.variantId];
        if (tmp9 == null) {
          tmp9 = null;
        }
        tmp7 = tmp9;
      }
    }
    return tmp7;
  }
}
let obj = { enabled: false };
const obj2 = { 0: obj, 1: { enabled: true } };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-10-profile-read-state", kind: "user", defaultConfig: obj, variations: obj2 });
const result = size.fileFinishedImporting("modules/user_profile/experiments/ProfileReadStateExperiment.tsx");

export default apexExperiment;
export { getProfileReadStateConfigPeek };
export function useProfileReadStateConfigPeek() {
  const items = [UserStore, ApexExperimentStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, getProfileReadStateConfigPeek);
}
export function ProfileReadStateExposure(location) {
  const obj = { location: location.location };
  const config = apexExperiment.useConfig(obj);
  return null;
}
