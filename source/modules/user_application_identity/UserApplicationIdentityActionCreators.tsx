// Module ID: 12004
// Function ID: 92762
// Name: fetchStore
// Dependencies: []

// Module 12004 (fetchStore)
let closure_3 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
const tmp3 = arg1(dependencyMap[2]);
const Endpoints = tmp3.Endpoints;
let obj = {
  fetchUserApplicationIdentitiesWithProfiles(arg0) {
    const arg1 = arg0;
    const importDefault = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateApplicationIdentityConfig(application_id, provider_issued_user_id, arg2) {
    provider_issued_user_id = application_id;
    const importDefault = provider_issued_user_id;
    const dependencyMap = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
obj = {
  getQueryId: tmp3.QueryIds.USER_APPLICATION_IDENTITIES,
  get(arg0) {
    return importDefaultResult.getUserIdentities(arg0);
  },
  load(arg0) {
    return obj.fetchUserApplicationIdentitiesWithProfiles(arg0);
  }
};
const fetchStore = arg1(dependencyMap[6]).createFetchStore(importDefaultResult, obj);
const obj2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityActionCreators.tsx");

export default obj;
export const useUserApplicationIdentities = fetchStore;
