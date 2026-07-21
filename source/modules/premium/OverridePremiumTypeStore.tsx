// Module ID: 1850
// Function ID: 20417
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1850 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function setPremiumTypeActual(user) {
  closure_9.premiumTypeActual = arg1(dependencyMap[6]).getPremiumTypeFromRawValue(user.user.premium_type);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const UNSELECTED_CREATED_AT_DATE = tmp2.UNSELECTED_CREATED_AT_DATE;
const UNSELECTED_PREMIUM_TYPE_OVERRIDE = tmp2.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
let closure_9 = { premiumTypeOverride: UNSELECTED_PREMIUM_TYPE_OVERRIDE, premiumTypeActual: UNSELECTED_PREMIUM_TYPE_OVERRIDE, createdAtOverride: UNSELECTED_CREATED_AT_DATE };
let tmp3 = (PersistedStore) => {
  class OverridePremiumTypeStore {
    constructor() {
      self = this;
      tmp = closure_2(this, OverridePremiumTypeStore);
      obj = closure_5(OverridePremiumTypeStore);
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
  const arg1 = OverridePremiumTypeStore;
  callback2(OverridePremiumTypeStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(premiumTypeActual) {
      if (null != premiumTypeActual) {
        premiumTypeActual = undefined;
        if (null != premiumTypeActual) {
          premiumTypeActual = premiumTypeActual.premiumTypeActual;
        }
        closure_9.premiumTypeActual = premiumTypeActual;
        let premiumTypeOverride;
        if (null != premiumTypeActual) {
          premiumTypeOverride = premiumTypeActual.premiumTypeOverride;
        }
        closure_9.premiumTypeOverride = premiumTypeOverride;
        if (null != premiumTypeActual.createdAtOverride) {
          const _Date = Date;
          const date = new Date(premiumTypeActual.createdAtOverride);
          closure_9.createdAtOverride = date;
        } else {
          closure_9.createdAtOverride = closure_7;
        }
      } else {
        closure_9.premiumTypeOverride = closure_8;
        closure_9.createdAtOverride = closure_7;
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getPremiumTypeOverride",
    value() {
      return closure_9.premiumTypeOverride;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPremiumTypeActual",
    value() {
      return closure_9.premiumTypeActual;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCreatedAtOverride",
    value() {
      return closure_9.createdAtOverride;
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return closure_9;
    }
  };
  items[5] = {
    key: "premiumType",
    get() {
      return closure_9.premiumTypeOverride;
    }
  };
  return callback(OverridePremiumTypeStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp3.displayName = "OverridePremiumTypeStore";
tmp3.persistKey = "OverridePremiumTypeStore";
const items = [
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
tmp3 = new tmp3(importDefault(dependencyMap[8]), {
  SET_PREMIUM_TYPE_OVERRIDE: function setPremiumTypeOverride(premiumType) {
    closure_9.premiumTypeOverride = premiumType.premiumType;
  },
  SET_CREATED_AT_OVERRIDE: function setCreatedAtOverride(createdAt) {
    closure_9.createdAtOverride = createdAt.createdAt;
  },
  CURRENT_USER_UPDATE: setPremiumTypeActual,
  CONNECTION_OPEN: setPremiumTypeActual
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/OverridePremiumTypeStore.tsx");

export default tmp3;
