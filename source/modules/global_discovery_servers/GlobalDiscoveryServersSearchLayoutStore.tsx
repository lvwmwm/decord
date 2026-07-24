// Module ID: 12680
// Function ID: 98400
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 12679, 12681, 566, 686, 2]

// Module 12680 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function reset() {
  let closure_7 = [];
}
let closure_7 = [];
let tmp2 = ((Store) => {
  class GlobalDiscoveryServersSearchLayoutStore {
    constructor() {
      self = this;
      tmp = GlobalDiscoveryServersSearchLayoutStore(this, GlobalDiscoveryServersSearchLayoutStore);
      obj = outer1_3(GlobalDiscoveryServersSearchLayoutStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
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
  callback2(GlobalDiscoveryServersSearchLayoutStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5, outer1_6);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getVisibleTabs",
    value() {
      return outer1_7;
    }
  };
  items[1] = obj;
  return callback(GlobalDiscoveryServersSearchLayoutStore, items);
})(require("initialize").Store);
tmp2.displayName = "GlobalDiscoveryServersSearchLayoutStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: reset,
  GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function handleGlobalDiscoveryServersSearchCountSuccess(query) {
    counts = counts.getCounts(query.query);
    if (null == counts) {
      return false;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersSearchLayoutStore.tsx");

export default tmp2;
