// Module ID: 6767
// Function ID: 53156
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6767 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = false;
let closure_8 = {};
let closure_9 = {};
let tmp2 = (Store) => {
  class FamilyCenterControlledSettingsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, FamilyCenterControlledSettingsStore);
      obj = closure_5(FamilyCenterControlledSettingsStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = FamilyCenterControlledSettingsStore;
  callback2(FamilyCenterControlledSettingsStore, Store);
  let obj = {
    key: "getSettings",
    value(arg0) {
      return closure_8[arg0];
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getControlledSettings",
    value(arg0) {
      return closure_8[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "hasSettingsForUser",
    value(arg0) {
      return null != closure_8[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getConsents",
    value(arg0) {
      return closure_9[arg0];
    }
  };
  items[4] = {
    key: "hasConsented",
    value(arg0, arg1) {
      if (null == arg0) {
        return false;
      } else {
        let tmp3 = null != tmp2;
        if (tmp3) {
          tmp3 = null != tmp2[arg1] && tmp2[arg1].consented;
          const tmp4 = null != tmp2[arg1] && tmp2[arg1].consented;
        }
        return tmp3;
      }
    }
  };
  items[5] = {
    key: "isLoading",
    get() {
      return closure_7;
    }
  };
  return callback(FamilyCenterControlledSettingsStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "FamilyCenterControlledSettingsStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function handleTeenSettingsFetchStart() {
    let closure_7 = true;
  },
  FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function handleTeenSettingsAndConsentsFetchSuccess(arg0) {
    let consents;
    let settings;
    let userId;
    ({ userId, settings, consents } = arg0);
    if (null != settings) {
      closure_8[userId] = arg1(dependencyMap[5]).b64ToPreloadedUserSettingsProto(settings);
      const obj = arg1(dependencyMap[5]);
    }
    if (null != consents) {
      closure_9[userId] = consents;
    }
    let closure_7 = false;
  },
  FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function handleTeenConsentsUpdateSuccess(userId) {
    closure_9[userId.userId] = userId.consents;
  },
  FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function handleTeenUpdateSettingsSuccess(userId) {
    userId = userId.userId;
    const result = arg1(dependencyMap[5]).b64ToPreloadedUserSettingsProto(userId.settings);
    const obj = arg1(dependencyMap[5]);
    closure_8[userId] = arg1(dependencyMap[5]).mergeTopLevelFields(arg1(dependencyMap[6]).PreloadedUserSettings, closure_8[userId], result);
  },
  LOGOUT: function handleLogout() {
    let closure_8 = {};
    let closure_9 = {};
    let closure_7 = false;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsStore.tsx");

export default tmp2;
