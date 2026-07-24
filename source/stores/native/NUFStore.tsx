// Module ID: 6885
// Function ID: 54628
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1838, 3767, 566, 686, 2]

// Module 6885 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function handleCacheOrSocketLoaded() {
  let c7 = false;
  return handleUpdate();
}
function handleUpdate() {
  if (c7) {
    return false;
  } else {
    const tmp2 = guildCount.getGuildCount() > 0;
    let flag = false;
    if (tmp2 !== c8) {
      c8 = tmp2;
      flag = true;
    }
    if (tmp2 !== c9) {
      c9 = tmp2;
      flag = true;
    }
    return flag;
  }
}
let c7 = false;
let c8 = false;
let c9 = false;
let tmp2 = ((PersistedStore) => {
  class NUFStore {
    constructor() {
      self = this;
      tmp = NUFStore(this, NUFStore);
      obj = outer1_3(NUFStore);
      tmp2 = outer1_2;
      if (outer1_10()) {
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
  callback2(NUFStore, PersistedStore);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_6, outer1_5);
      const items = [outer1_6, outer1_5];
      this.syncWith(items, outer1_11);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return {};
    }
  };
  items[1] = obj;
  obj = {
    key: "showMentionsInNotificationTab",
    get() {
      return outer1_9;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "showQuickSwitcher",
    get() {
      return outer1_8;
    }
  };
  return callback(NUFStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "NUFStore";
tmp2.persistKey = "NUFStore";
tmp2 = new tmp2(require("dispatcher"), {
  CACHE_LOADED: function handleCacheLoaded() {
    let c7 = true;
  },
  CACHE_LOADED_LAZY: handleCacheOrSocketLoaded,
  CONNECTION_OPEN: handleCacheOrSocketLoaded
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/native/NUFStore.tsx");

export default tmp2;
