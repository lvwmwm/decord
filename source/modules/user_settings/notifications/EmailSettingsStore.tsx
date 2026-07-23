// Module ID: 12667
// Function ID: 98608
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 12667 (_isNativeReflectConstruct)
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
function reset() {
  let closure_5 = {};
  let c6 = null;
}
let closure_5 = {};
let c6 = null;
let tmp2 = ((Store) => {
  class EmailSettingsStore {
    constructor() {
      self = this;
      tmp = EmailSettingsStore(this, EmailSettingsStore);
      obj = outer1_3(EmailSettingsStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(EmailSettingsStore, Store);
  const items = [
    {
      key: "getEmailSettings",
      value() {
        return { categories: outer1_5, initialized: outer1_6 };
      }
    }
  ];
  return callback(EmailSettingsStore, items);
})(require("initialize").Store);
tmp2.displayName = "EmailSettingsStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  EMAIL_SETTINGS_FETCH_SUCCESS: function handleFetchSuccess(settings) {
    let c6;
    let closure_5;
    ({ categories: closure_5, initialized: c6 } = settings.settings);
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function handleUpdateSuccess(settings) {
    const categories = settings.settings.categories;
  },
  EMAIL_SETTINGS_UPDATE: function handleUpdate(updates) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(updates.updates);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/notifications/EmailSettingsStore.tsx");

export default tmp2;
