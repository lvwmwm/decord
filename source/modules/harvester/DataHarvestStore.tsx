// Module ID: 12519
// Function ID: 96029
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12519 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = false;
let closure_6;
let tmp2 = (Store) => {
  class DataHarvestStore {
    constructor() {
      self = this;
      tmp = DataHarvestStore(this, DataHarvestStore);
      obj = closure_3(DataHarvestStore);
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
  let closure_0 = DataHarvestStore;
  callback2(DataHarvestStore, Store);
  let obj = {
    key: "harvestType",
    get() {
      return closure_6;
    }
  };
  const items = [obj, ];
  obj = {
    key: "requestingHarvest",
    get() {
      return closure_5;
    }
  };
  items[1] = obj;
  return callback(DataHarvestStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "DataHarvestStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_6;
  },
  UPDATE_DATA_HARVEST_TYPE: function handleUpdateHarvestType(harvestType) {
    let closure_5 = false;
    harvestType = harvestType.harvestType;
  },
  LOAD_DATA_HARVEST_TYPE_START: function handleRequestingHarvest() {
    let closure_5 = true;
  },
  LOAD_DATA_HARVEST_TYPE_FAILURE: function handleRequestingHarvestFailure() {
    let closure_5 = false;
  },
  LOGOUT: function handleLogout() {
    let closure_5 = false;
    let closure_6 = null;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/harvester/DataHarvestStore.tsx");

export default tmp2;
