// Module ID: 12122
// Function ID: 94981
// Name: fetchStore
// Dependencies: [5, 12121, 653, 686, 507, 1184, 566, 2]

// Module 12122 (fetchStore)
import isNonEmptyString from "isNonEmptyString";
import importDefaultResult from "_isNativeReflectConstruct";
import ME from "ME";
import initialize from "initialize";

const require = arg1;
const Endpoints = ME.Endpoints;
let obj = {
  fetchUserApplicationIdentitiesWithProfiles(arg0) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateApplicationIdentityConfig(application_id, provider_issued_user_id, arg2) {
    let closure_0 = application_id;
    let closure_1 = provider_issued_user_id;
    let closure_2 = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
obj = {
  getQueryId: ME.QueryIds.USER_APPLICATION_IDENTITIES,
  get(arg0) {
    return importDefaultResult.getUserIdentities(arg0);
  },
  load(arg0) {
    return obj.fetchUserApplicationIdentitiesWithProfiles(arg0);
  }
};
const fetchStore = initialize.createFetchStore(importDefaultResult, obj);
const result = require("ME").fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityActionCreators.tsx");

export default obj;
export const useUserApplicationIdentities = fetchStore;
