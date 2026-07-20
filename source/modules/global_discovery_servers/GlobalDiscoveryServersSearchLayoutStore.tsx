// Module ID: 12501
// Function ID: 95850
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12501 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function reset() {
  let closure_7 = [];
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = [];
let tmp2 = (Store) => {
  class GlobalDiscoveryServersSearchLayoutStore {
    constructor() {
      self = this;
      tmp = GlobalDiscoveryServersSearchLayoutStore(this, GlobalDiscoveryServersSearchLayoutStore);
      obj = closure_3(GlobalDiscoveryServersSearchLayoutStore);
      tmp2 = closure_2;
      if (closure_8()) {
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
  let closure_0 = GlobalDiscoveryServersSearchLayoutStore;
  callback2(GlobalDiscoveryServersSearchLayoutStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5, closure_6);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getVisibleTabs",
    value() {
      return closure_7;
    }
  };
  items[1] = obj;
  return callback(GlobalDiscoveryServersSearchLayoutStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "GlobalDiscoveryServersSearchLayoutStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  CONNECTION_OPEN: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    const counts = counts.getCounts(query.query);
    if (null == counts) {
      return false;
    } else {
      let closure_7 = counts;
    }
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchLayoutStore.tsx");

export default tmp2;
