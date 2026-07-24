// Module ID: 6772
// Function ID: 53229
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1318, 1282, 566, 686, 2]

// Module 6772 (_isNativeReflectConstruct)
import _callSuper from "_callSuper";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c7 = false;
let closure_8 = {};
let closure_9 = {};
let tmp2 = ((Store) => {
  class FamilyCenterControlledSettingsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, FamilyCenterControlledSettingsStore);
      obj = outer1_5(FamilyCenterControlledSettingsStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(FamilyCenterControlledSettingsStore, Store);
  let obj = {
    key: "getSettings",
    value(arg0) {
      return outer1_8[arg0];
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getControlledSettings",
    value(arg0) {
      return outer1_8[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "hasSettingsForUser",
    value(arg0) {
      return null != outer1_8[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getConsents",
    value(arg0) {
      return outer1_9[arg0];
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
      return outer1_7;
    }
  };
  return callback(FamilyCenterControlledSettingsStore, items);
})(require("initialize").Store);
tmp2.displayName = "FamilyCenterControlledSettingsStore";
tmp2 = new tmp2(require("dispatcher"), {
  FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function handleTeenSettingsFetchStart() {
    let c7 = true;
  },
  FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function handleTeenSettingsAndConsentsFetchSuccess(arg0) {
    let consents;
    let settings;
    let userId;
    ({ userId, settings, consents } = arg0);
    if (null != settings) {
      closure_8[userId] = require(1318) /* _createForOfIteratorHelperLoose */.b64ToPreloadedUserSettingsProto(settings);
      const obj = require(1318) /* _createForOfIteratorHelperLoose */;
    }
    if (null != consents) {
      closure_9[userId] = consents;
    }
    let c7 = false;
  },
  FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function handleTeenConsentsUpdateSuccess(userId) {
    closure_9[userId.userId] = userId.consents;
  },
  FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function handleTeenUpdateSettingsSuccess(userId) {
    userId = userId.userId;
    const result = require(1318) /* _createForOfIteratorHelperLoose */.b64ToPreloadedUserSettingsProto(userId.settings);
    const obj = require(1318) /* _createForOfIteratorHelperLoose */;
    table[userId] = require(1318) /* _createForOfIteratorHelperLoose */.mergeTopLevelFields(require(1282) /* _callSuper */.PreloadedUserSettings, table[userId], result);
  },
  LOGOUT: function handleLogout() {
    let closure_8 = {};
    let closure_9 = {};
    let c7 = false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsStore.tsx");

export default tmp2;
