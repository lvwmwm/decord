// Module ID: 12001
// Function ID: 92745
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12001 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateUserIdentities(userId, identities) {
  const map = new Map(identities.map((application_id) => {
    const items = [application_id.application_id, application_id];
    return items;
  }));
  const obj = { identities, byApplication: map };
  const result = map.set(userId, obj);
  const result1 = map1.set(userId, obj.FETCHED);
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
const map = new Map();
const map1 = new Map();
let tmp4 = (Store) => {
  class UserApplicationIdentityStore {
    constructor() {
      self = this;
      tmp = UserApplicationIdentityStore(this, UserApplicationIdentityStore);
      obj = closure_3(UserApplicationIdentityStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = UserApplicationIdentityStore;
  callback2(UserApplicationIdentityStore, Store);
  let obj = {
    key: "getUserIdentities",
    value(arg0) {
      const value = store.get(arg0);
      let identities;
      if (null != value) {
        identities = value.identities;
      }
      let tmp3 = null;
      if (null != identities) {
        tmp3 = identities;
      }
      return tmp3;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getUserIdentityByApplication",
    value(arg0, arg1) {
      let value = store.get(arg0);
      value = undefined;
      if (null != value) {
        const byApplication = value.byApplication;
        value = byApplication.get(arg1);
      }
      let tmp4 = null;
      if (null != value) {
        tmp4 = value;
      }
      return tmp4;
    }
  };
  items[1] = obj;
  obj = {
    key: "getFetchState",
    value(arg0) {
      let NOT_FETCHED = closure_7.get(arg0);
      if (null == NOT_FETCHED) {
        NOT_FETCHED = constants.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFetchingUser",
    value(guildId) {
      return this.getFetchState(guildId) === constants.FETCHING;
    }
  };
  return callback(UserApplicationIdentityStore, items);
}(importDefault(dependencyMap[5]).Store);
obj = {
  USER_APPLICATION_IDENTITY_FETCH_USER_START: function handleFetchUserStart(userId) {
    const result = map1.set(userId.userId, obj.FETCHING);
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: function handleFetchUserSuccess(userId) {
    const result = map1.set(userId.userId, obj.FETCHED);
    updateUserIdentities(userId.userId, userId.identities);
  },
  USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: function handleFetchUserFailure(userId) {
    const result = map1.set(userId.userId, obj.FETCHED);
  },
  USER_APPLICATION_IDENTITY_REMOVE: function handleRemoveIdentity(user_id) {
    let closure_0 = user_id;
    const value = map.get(user_id.user_id);
    if (null == value) {
      return false;
    } else {
      const identities = value.identities;
      updateUserIdentities(user_id.user_id, identities.filter((application_id) => application_id.application_id !== application_id.application_id));
    }
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityStore.tsx");

export default tmp4;
export const FetchState = obj;
