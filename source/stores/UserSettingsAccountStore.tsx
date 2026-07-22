// Module ID: 5792
// Function ID: 49507
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5792 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleFormInit() {
  const currentUser = authStore.getCurrentUser();
  if (null == currentUser) {
    handleFormClose();
  } else {
    const CLOSED = FormStates.OPEN;
    let closure_8 = {};
    let obj = {};
    ({ id: obj2.userId, username: obj2.username, discriminator: obj2.discriminator, email: obj2.email, avatar: obj2.avatar } = currentUser);
    obj.password = "";
    obj.newPassword = null;
    obj.claimed = currentUser.isClaimed();
    obj = {};
    const merged = Object.assign(obj);
    let closure_9 = obj;
  }
}
function handleFormClose() {
  const CLOSED = FormStates.CLOSED;
  let closure_9 = null;
  let closure_8 = {};
}
function handleFormSubmitComplete() {
  const CLOSED = FormStates.OPEN;
  let closure_8 = {};
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const FormStates = arg1(dependencyMap[6]).FormStates;
const CLOSED = FormStates.CLOSED;
let closure_8 = {};
let closure_9 = null;
let tmp2 = (Store) => {
  class UserSettingsAccountStore {
    constructor() {
      self = this;
      tmp = UserSettingsAccountStore(this, UserSettingsAccountStore);
      obj = closure_3(UserSettingsAccountStore);
      tmp2 = closure_2;
      if (closure_10()) {
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
  let closure_0 = UserSettingsAccountStore;
  callback2(UserSettingsAccountStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getErrors",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSubmitting",
    value() {
      return closure_7 === constants.SUBMITTING;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSettings",
    value() {
      return closure_9;
    }
  };
  return callback(UserSettingsAccountStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "UserSettingsAccountStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  USER_SETTINGS_MODAL_OPEN: function handleFormOpen() {
    handleFormInit();
  },
  USER_SETTINGS_MODAL_INIT: handleFormInit,
  USER_SETTINGS_MODAL_CLOSE: handleFormClose,
  LOGOUT: handleFormClose,
  USER_SETTINGS_MODAL_SUBMIT: function handleFormSubmit() {
    const CLOSED = FormStates.SUBMITTING;
  },
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: function handleFormSubmitFailure(errors) {
    if (CLOSED !== FormStates.SUBMITTING) {
      return false;
    } else {
      const CLOSED = FormStates.OPEN;
      errors = errors.errors;
      if (null == errors) {
        errors = {};
      }
      let closure_8 = errors;
    }
  },
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function handleUpdateAccount(settings) {
    if (null == closure_9) {
      closure_9 = {};
    }
    const merged = Object.assign(closure_9);
    const merged1 = Object.assign(settings.settings);
    closure_9 = {};
  },
  USER_SETTINGS_MODAL_SUBMIT_COMPLETE: handleFormSubmitComplete,
  USER_SETTINGS_MODAL_RESET: function handleFormReset() {
    const currentUser = authStore.getCurrentUser();
    handleFormSubmitComplete();
    if (null != currentUser) {
      let obj = {};
      ({ id: obj2.userId, username: obj2.username, discriminator: obj2.discriminator, email: obj2.email, avatar: obj2.avatar } = currentUser);
      obj.password = "";
      obj.newPassword = null;
      obj.claimed = currentUser.isClaimed();
      obj = {};
      const merged = Object.assign(obj);
      let closure_9 = obj;
    }
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/UserSettingsAccountStore.tsx");

export default tmp2;
