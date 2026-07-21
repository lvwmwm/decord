// Module ID: 5358
// Function ID: 45871
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5358 (_isNativeReflectConstruct)
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
let obj = { accessibilityRole: "isArray", kind: "ao", to: "title", body: "Array", done: "isArray", accessibilityRole: "jsx", bottom: "header", a: "Array", body: "isArray" };
let closure_6 = {};
let tmp2 = (DeviceSettingsStore) => {
  class DesignTogglesStore {
    constructor() {
      self = this;
      tmp = DesignTogglesStore(this, DesignTogglesStore);
      obj = closure_3(DesignTogglesStore);
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
  let closure_0 = DesignTogglesStore;
  callback2(DesignTogglesStore, DeviceSettingsStore);
  let obj = {
    key: "getUserAgnosticState",
    value() {
      return { toggleStates: closure_6 };
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "initialize",
    value(toggleStates) {
      for (const key10006 in closure_5) {
        let tmp6 = key10006;
        let tmp2;
        if (null != arg0) {
          toggleStates = arg0.toggleStates;
          let tmp = toggleStates;
          if (null != toggleStates) {
            tmp2 = toggleStates[key10006];
            let tmp3 = toggleStates;
          }
        }
        let tmp4 = null != tmp2;
        if (tmp4) {
          tmp4 = tmp2;
        }
        let tmp5 = closure_6;
        closure_6[key10006] = tmp4;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0) {
      return null != closure_6[arg0] && closure_6[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "set",
    value(arg0, arg1) {
      closure_6[arg0] = arg1;
      return arg1;
    }
  };
  items[4] = {
    key: "all",
    value() {
      return closure_6;
    }
  };
  items[5] = {
    key: "allWithDescriptions",
    value() {
      const entries = Object.entries(closure_6);
      return entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, tmp2, closure_5[tmp]];
        return items;
      });
    }
  };
  return callback(DesignTogglesStore, items);
}(importDefault(dependencyMap[5]).DeviceSettingsStore);
tmp2.displayName = "DevToolsDesignTogglesStore";
tmp2.persistKey = "DevToolsDesignTogglesStore";
obj = {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function handleSet(toggle) {
    closure_6[toggle.toggle] = toggle.value;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesStore.tsx");

export default tmp2;
export const toggles = obj;
