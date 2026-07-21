// Module ID: 11495
// Function ID: 89530
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11495 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handlePopAllLayers() {
  let closure_5 = [];
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = [];
let tmp2 = (Store) => {
  class LayerStore {
    constructor() {
      self = this;
      tmp = LayerStore(this, LayerStore);
      obj = closure_3(LayerStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = LayerStore;
  callback2(LayerStore, Store);
  let obj = {
    key: "hasLayers",
    value() {
      return length.length > 0;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getLayers",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  return callback(LayerStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "LayerStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  LAYER_PUSH: function handleAddLayer(component) {
    component = component.component;
    if (arr.indexOf(component) >= 0) {
      return false;
    } else {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
      items[arraySpreadResult] = component;
      const sum = arraySpreadResult + 1;
    }
  },
  LAYER_POP: function handleRemoveLayer() {
    if (0 === arr.length) {
      return false;
    } else {
      const arr = arr.slice(0, -1);
    }
  },
  LAYER_POP_ALL: handlePopAllLayers,
  LOGOUT: handlePopAllLayers,
  NOTIFICATION_CLICK: handlePopAllLayers
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/LayerStore.tsx");

export default tmp2;
