// Module ID: 8485
// Function ID: 8486
// Name: UserApplicationIdentityActionCreators
// Dependencies: [5, 8484, 1086, 585, 1283, 504, 2]

// Module 8485 (UserApplicationIdentityActionCreators)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserApplicationIdentityStore from "UserApplicationIdentityStore" /* 8484 */;
import Constants from "Constants" /* 1086 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let c1, c4, c5;

const Endpoints = Constants.Endpoints;
let obj = {
  fetchUserApplicationIdentitiesWithProfiles(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let signal;
          let userId;
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
              signal = tmp;
              userId = undefined;
              const obj5 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_START", userId };
              const obj9 = signal(closure_2[3]);
              obj9.dispatch(obj5);
              c3 = 1;
              const HTTP = userId(closure_2[4]).HTTP;
              const request = { url: c5.USER_APPLICATION_IDENTITIES(userId), query: { with_profiles: true }, rejectWithError: true, signal };
              const get = HTTP.get;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: get(request), done: false };
              return obj6;
            }
          } else if (1 === c4) {
            c3 = 0;
            signal = closure_2;
            const obj7 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE", userId: closure_129_0 };
            const obj4 = signal(closure_2[3]);
            obj4.dispatch(obj7);
            throw signal;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            userId = value;
            const obj10 = { type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS", userId: closure_129_0, identities: userId.body.identities };
            obj = signal(closure_2[3]);
            obj.dispatch(obj10);
            c3 = 0;
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  updateApplicationIdentityConfig(application_id, provider_issued_user_id, arg2) {
    let closure_1 = provider_issued_user_id;
    let closure_2 = arg2;
    return (async (arg0, value) => {
      let v3;
      if (application_id === 2) {
        application_id = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          application_id = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              application_id = 3;
              throw value;
            } else if (arg0 === 2) {
              application_id = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const HTTP = application_id(body[4]).HTTP;
              const request = { url: Endpoints.SELF_APPLICATION_IDENTITY_CONFIG(closure_0, closure_1), body, rejectWithError: true };
              const patch = HTTP.patch;
              c1 = 1;
              application_id = 1;
              const obj4 = { value: patch(request), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            application_id = 3;
            throw value;
          } else if (arg0 === 2) {
            application_id = 3;
            obj = { value, done: true };
            return obj;
          } else {
            application_id = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          application_id = 3;
          throw tmp10;
        }
      }
    })();
  }
};
const QueryIds = Constants.QueryIds;
let obj2 = {
  getQueryId: QueryIds.USER_APPLICATION_IDENTITIES,
  get(arg0) {
    return UserApplicationIdentityStore.getUserIdentities(arg0);
  },
  load(arg0) {
    return obj.fetchUserApplicationIdentitiesWithProfiles(arg0);
  }
};
const fetchStore = get_initialized.createFetchStore(UserApplicationIdentityStore, obj2);
const result = size.fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityActionCreators.tsx");

export default obj;
export const useUserApplicationIdentities = fetchStore;
