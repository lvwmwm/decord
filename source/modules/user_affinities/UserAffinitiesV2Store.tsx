// Module ID: 6902
// Function ID: 54997
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3767, 6903, 566, 686, 2]

// Module 6902 (_isNativeReflectConstruct)
import result from "result";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { USER_AFFINITY_TTL } from "result";

function _isNativeReflectConstruct() {
  let result = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return result;
  }
  const result = _isNativeReflectConstruct();
}
function recomputeAffinities() {
  const userAffinities = obj.userAffinities;
  const found = userAffinities.filter((otherUserId) => !outer1_5.isBlockedOrIgnored(otherUserId.otherUserId));
  const map = new Map(found.map((otherUserId) => {
    const items = [otherUserId.otherUserId, otherUserId];
    return items;
  }));
}
let map = new Map();
let c8 = false;
const frozen = Object.freeze({ userAffinities: [], lastFetched: 0 });
let obj = {};
let merged = Object.assign(frozen);
let tmp5 = ((PersistedStore) => {
  class UserAffinitiesV2Store {
    constructor() {
      self = this;
      tmp = UserAffinitiesV2Store(this, UserAffinitiesV2Store);
      obj = outer1_3(UserAffinitiesV2Store);
      tmp2 = outer1_2;
      if (outer1_11()) {
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
  callback2(UserAffinitiesV2Store, PersistedStore);
  let obj = {
    key: "initialize",
    value(userAffinities) {
      const self = this;
      this.waitFor(outer1_5);
      if (null != userAffinities) {
        outer1_10.userAffinities = userAffinities.userAffinities;
        outer1_10.lastFetched = userAffinities.lastFetched;
        outer1_12();
      }
      const items = [outer1_5];
      self.syncWith(items, outer1_12);
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "shouldFetch",
    value() {
      if (!outer1_8) {
        const _Date = Date;
        return Date.now() - outer1_10.lastFetched > outer1_6;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetching",
    value() {
      return outer1_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAffinities",
    value() {
      return outer1_10.userAffinities;
    }
  };
  items[4] = {
    key: "getUserAffinitiesMap",
    value() {
      return outer1_7;
    }
  };
  items[5] = {
    key: "compare",
    value(arg0, arg1) {
      let value = outer1_7.get(arg1);
      let prop;
      if (null != value) {
        prop = value.communicationProbability;
      }
      let num = 0;
      if (null != prop) {
        num = prop;
      }
      value = outer1_7.get(arg0);
      let prop1;
      if (null != value) {
        prop1 = value.communicationProbability;
      }
      let num2 = 0;
      if (null != prop1) {
        num2 = prop1;
      }
      return num - num2;
    }
  };
  items[6] = {
    key: "compareByDmProbability",
    value(arg0, arg1) {
      let value = outer1_7.get(arg1);
      let dmProbability;
      if (null != value) {
        dmProbability = value.dmProbability;
      }
      let num = 0;
      if (null != dmProbability) {
        num = dmProbability;
      }
      value = outer1_7.get(arg0);
      let dmProbability1;
      if (null != value) {
        dmProbability1 = value.dmProbability;
      }
      let num2 = 0;
      if (null != dmProbability1) {
        num2 = dmProbability1;
      }
      return num - num2;
    }
  };
  items[7] = {
    key: "getUserAffinity",
    value(arg0) {
      return outer1_7.get(arg0);
    }
  };
  items[8] = {
    key: "getState",
    value() {
      return outer1_10;
    }
  };
  items[9] = {
    key: "isHighlyAffinedVCUser",
    value(arg0) {
      const value = outer1_7.get(arg0);
      let vcProbability;
      if (null != value) {
        vcProbability = value.vcProbability;
      }
      let num = 0;
      if (null != vcProbability) {
        num = vcProbability;
      }
      return num > 0.5;
    }
  };
  return callback(UserAffinitiesV2Store, items);
})(require("initialize").PersistedStore);
tmp5.displayName = "UserAffinitiesV2Store";
tmp5.persistKey = "UserAffinitiesStoreV2";
obj = {
  LOAD_USER_AFFINITIES_V2: function handleLoadUserAffinities() {
    let c8 = true;
  },
  LOAD_USER_AFFINITIES_V2_SUCCESS: function handleLoadUserAffinitiesSuccess(affineUsers) {
    obj.lastFetched = Date.now();
    let c8 = false;
    obj.userAffinities = affineUsers.affineUsers;
    recomputeAffinities();
  },
  LOAD_USER_AFFINITIES_V2_FAILURE: function handleLoadUserAffinitiesFailure() {
    let c8 = false;
  },
  LOGOUT: function handleLogout() {
    const obj = {};
    const merged = Object.assign(frozen);
    const map = new Map();
    let c8 = false;
  }
};
tmp5 = new tmp5(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_affinities/UserAffinitiesV2Store.tsx");

export default tmp5;
