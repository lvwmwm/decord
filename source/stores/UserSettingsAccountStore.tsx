// Module ID: 5797
// Function ID: 49536
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1849, 653, 566, 686, 2]

// Module 5797 (_isNativeReflectConstruct)
import ME from "ME";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FormStates } from "ME";

function _isNativeReflectConstruct() {
  let ME = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return ME;
  }
  const result = _isNativeReflectConstruct();
}
function handleFormInit() {
  const currentUser = authStore.getCurrentUser();
  if (null == currentUser) {
    handleFormClose();
  } else {
    const OPEN = FormStates.OPEN;
    let closure_8 = {};
    let obj = {};
    ({ id: obj2.userId, username: obj2.username, discriminator: obj2.discriminator, email: obj2.email, avatar: obj2.avatar } = currentUser);
    obj.password = "";
    obj.newPassword = null;
    obj.claimed = currentUser.isClaimed();
    obj = {};
    const merged = Object.assign(obj);
  }
}
function handleFormClose() {
  const CLOSED = FormStates.CLOSED;
  let c9 = null;
  let closure_8 = {};
}
function handleFormSubmitComplete() {
  const OPEN = FormStates.OPEN;
  let closure_8 = {};
}
let CLOSED = FormStates.CLOSED;
let closure_8 = {};
let c9 = null;
let tmp2 = ((Store) => {
  class UserSettingsAccountStore {
    constructor() {
      self = this;
      tmp = UserSettingsAccountStore(this, UserSettingsAccountStore);
      obj = outer1_3(UserSettingsAccountStore);
      tmp2 = outer1_2;
      if (outer1_10()) {
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
  callback2(UserSettingsAccountStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getErrors",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSubmitting",
    value() {
      return outer1_7 === outer1_6.SUBMITTING;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSettings",
    value() {
      return outer1_9;
    }
  };
  return callback(UserSettingsAccountStore, items);
})(require("initialize").Store);
tmp2.displayName = "UserSettingsAccountStore";
tmp2 = new tmp2(require("dispatcher"), {
  USER_SETTINGS_MODAL_OPEN: function handleFormOpen() {
    handleFormInit();
  },
  USER_SETTINGS_MODAL_INIT: handleFormInit,
  USER_SETTINGS_MODAL_CLOSE: handleFormClose,
  LOGOUT: handleFormClose,
  USER_SETTINGS_MODAL_SUBMIT: function handleFormSubmit() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  USER_SETTINGS_MODAL_SUBMIT_FAILURE: function handleFormSubmitFailure(errors) {
    if (OPEN !== FormStates.SUBMITTING) {
      return false;
    } else {
      OPEN = FormStates.OPEN;
      errors = errors.errors;
      if (null == errors) {
        errors = {};
      }
    }
  },
  USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function handleUpdateAccount(settings) {
    if (null == obj) {
      obj = {};
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings.settings);
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
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/UserSettingsAccountStore.tsx");

export default tmp2;
