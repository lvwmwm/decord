// Module ID: 12539
// Function ID: 96379
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12539 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function reset() {
  let closure_5 = {};
  let closure_6 = null;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let closure_6 = null;
let tmp2 = (Store) => {
  class EmailSettingsStore {
    constructor() {
      self = this;
      tmp = EmailSettingsStore(this, EmailSettingsStore);
      obj = closure_3(EmailSettingsStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = EmailSettingsStore;
  callback2(EmailSettingsStore, Store);
  const items = [
    {
      key: "getEmailSettings",
      value() {
        return { categories: closure_5, initialized: closure_6 };
      }
    }
  ];
  return callback(EmailSettingsStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "EmailSettingsStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  EMAIL_SETTINGS_FETCH_SUCCESS: function handleFetchSuccess(settings) {
    ({ categories: closure_5, initialized: closure_6 } = settings.settings);
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function handleUpdateSuccess(settings) {
    const categories = settings.settings.categories;
  },
  EMAIL_SETTINGS_UPDATE: function handleUpdate(updates) {
    const merged = Object.assign(closure_5);
    const merged1 = Object.assign(updates.updates);
    closure_5 = {};
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/notifications/EmailSettingsStore.tsx");

export default tmp2;
