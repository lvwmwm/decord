// Module ID: 1850
// Function ID: 20419
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1851, 1855, 566, 686, 2]

// Module 1850 (_isNativeReflectConstruct)
import getEnv from "getEnv";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import GuildFeatures from "GuildFeatures";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function setPremiumTypeActual(user) {
  closure_9.premiumTypeActual = require(1855) /* getEnv */.getPremiumTypeFromRawValue(user.user.premium_type);
}
const UNSELECTED_CREATED_AT_DATE = GuildFeatures.UNSELECTED_CREATED_AT_DATE;
const UNSELECTED_PREMIUM_TYPE_OVERRIDE = GuildFeatures.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
let closure_9 = { premiumTypeOverride: UNSELECTED_PREMIUM_TYPE_OVERRIDE, premiumTypeActual: UNSELECTED_PREMIUM_TYPE_OVERRIDE, createdAtOverride: UNSELECTED_CREATED_AT_DATE };
let tmp3 = ((PersistedStore) => {
  class OverridePremiumTypeStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, OverridePremiumTypeStore);
      obj = outer1_5(OverridePremiumTypeStore);
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
  callback2(OverridePremiumTypeStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(premiumTypeActual) {
      if (null != premiumTypeActual) {
        premiumTypeActual = undefined;
        if (null != premiumTypeActual) {
          premiumTypeActual = premiumTypeActual.premiumTypeActual;
        }
        outer1_9.premiumTypeActual = premiumTypeActual;
        let premiumTypeOverride;
        if (null != premiumTypeActual) {
          premiumTypeOverride = premiumTypeActual.premiumTypeOverride;
        }
        outer1_9.premiumTypeOverride = premiumTypeOverride;
        if (null != premiumTypeActual.createdAtOverride) {
          const _Date = Date;
          const date = new Date(premiumTypeActual.createdAtOverride);
          outer1_9.createdAtOverride = date;
        } else {
          outer1_9.createdAtOverride = outer1_7;
        }
      } else {
        outer1_9.premiumTypeOverride = outer1_8;
        outer1_9.createdAtOverride = outer1_7;
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getPremiumTypeOverride",
    value() {
      return outer1_9.premiumTypeOverride;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPremiumTypeActual",
    value() {
      return outer1_9.premiumTypeActual;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCreatedAtOverride",
    value() {
      return outer1_9.createdAtOverride;
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return outer1_9;
    }
  };
  items[5] = {
    key: "premiumType",
    get() {
      return outer1_9.premiumTypeOverride;
    }
  };
  return callback(OverridePremiumTypeStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "OverridePremiumTypeStore";
tmp3.persistKey = "OverridePremiumTypeStore";
let items = [
  (createdAtOverride) => {
    createdAtOverride = undefined;
    if (null != createdAtOverride) {
      createdAtOverride = createdAtOverride.createdAtOverride;
    }
    if (null == createdAtOverride) {
      const obj = {};
      const merged = Object.assign(createdAtOverride);
      obj["createdAtOverride"] = UNSELECTED_CREATED_AT_DATE;
      return obj;
    }
  }
];
tmp3.migrations = items;
tmp3 = new tmp3(require("dispatcher"), {
  SET_PREMIUM_TYPE_OVERRIDE: function setPremiumTypeOverride(premiumType) {
    closure_9.premiumTypeOverride = premiumType.premiumType;
  },
  SET_CREATED_AT_OVERRIDE: function setCreatedAtOverride(createdAt) {
    closure_9.createdAtOverride = createdAt.createdAt;
  },
  CURRENT_USER_UPDATE: setPremiumTypeActual,
  CONNECTION_OPEN: setPremiumTypeActual
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/OverridePremiumTypeStore.tsx");

export default tmp3;
