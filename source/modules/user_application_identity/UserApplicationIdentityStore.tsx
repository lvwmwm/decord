// Module ID: 12095
// Function ID: 94728
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 12095 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
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
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let map = new Map();
const map1 = new Map();
let tmp4 = ((Store) => {
  class UserApplicationIdentityStore {
    constructor() {
      self = this;
      tmp = UserApplicationIdentityStore(this, UserApplicationIdentityStore);
      obj = outer1_3(UserApplicationIdentityStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(UserApplicationIdentityStore, Store);
  let obj = {
    key: "getUserIdentities",
    value(arg0) {
      const value = outer1_6.get(arg0);
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
      let value = outer1_6.get(arg0);
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
      let NOT_FETCHED = outer1_7.get(arg0);
      if (null == NOT_FETCHED) {
        NOT_FETCHED = outer1_5.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isFetchingUser",
    value(arg0) {
      return this.getFetchState(arg0) === outer1_5.FETCHING;
    }
  };
  return callback(UserApplicationIdentityStore, items);
})(require("initialize").Store);
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
    let dispatcher = user_id;
    const value = map.get(user_id.user_id);
    if (null == value) {
      return false;
    } else {
      const identities = value.identities;
      updateUserIdentities(user_id.user_id, identities.filter((application_id) => application_id.application_id !== user_id.application_id));
    }
  }
};
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityStore.tsx");

export default tmp4;
export const FetchState = obj;
