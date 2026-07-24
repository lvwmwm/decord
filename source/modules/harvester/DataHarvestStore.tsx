// Module ID: 12684
// Function ID: 98506
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 12684 (_isNativeReflectConstruct)
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
let c5 = false;
let c6;
let tmp2 = ((Store) => {
  class DataHarvestStore {
    constructor() {
      self = this;
      tmp = DataHarvestStore(this, DataHarvestStore);
      obj = outer1_3(DataHarvestStore);
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
  callback2(DataHarvestStore, Store);
  let obj = {
    key: "harvestType",
    get() {
      return outer1_6;
    }
  };
  const items = [obj, ];
  obj = {
    key: "requestingHarvest",
    get() {
      return outer1_5;
    }
  };
  items[1] = obj;
  return callback(DataHarvestStore, items);
})(require("initialize").Store);
tmp2.displayName = "DataHarvestStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c6;
  },
  UPDATE_DATA_HARVEST_TYPE: function handleUpdateHarvestType(harvestType) {
    let c5 = false;
    harvestType = harvestType.harvestType;
  },
  LOAD_DATA_HARVEST_TYPE_START: function handleRequestingHarvest() {
    let c5 = true;
  },
  LOAD_DATA_HARVEST_TYPE_FAILURE: function handleRequestingHarvestFailure() {
    let c5 = false;
  },
  LOGOUT: function handleLogout() {
    let c5 = false;
    let c6 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/harvester/DataHarvestStore.tsx");

export default tmp2;
