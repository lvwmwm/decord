// Module ID: 11536
// Function ID: 89850
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 11536 (_isNativeReflectConstruct)
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
function handlePopAllLayers() {
  let closure_5 = [];
}
let closure_5 = [];
let tmp2 = ((Store) => {
  class LayerStore {
    constructor() {
      self = this;
      tmp = LayerStore(this, LayerStore);
      obj = outer1_3(LayerStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(LayerStore, Store);
  let obj = {
    key: "hasLayers",
    value() {
      return outer1_5.length > 0;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getLayers",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  return callback(LayerStore, items);
})(require("initialize").Store);
tmp2.displayName = "LayerStore";
tmp2 = new tmp2(require("dispatcher"), {
  LAYER_PUSH: function handleAddLayer(component) {
    component = component.component;
    if (items.indexOf(component) >= 0) {
      return false;
    } else {
      items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      items[arraySpreadResult] = component;
      const sum = arraySpreadResult + 1;
    }
  },
  LAYER_POP: function handleRemoveLayer() {
    if (0 === arr.length) {
      return false;
    } else {
      arr = arr.slice(0, -1);
    }
  },
  LAYER_POP_ALL: handlePopAllLayers,
  LOGOUT: handlePopAllLayers,
  NOTIFICATION_CLICK: handlePopAllLayers
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/LayerStore.tsx");

export default tmp2;
