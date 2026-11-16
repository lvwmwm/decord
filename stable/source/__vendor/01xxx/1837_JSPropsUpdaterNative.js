// Module ID: 1837
// Function ID: 1838
// Name: JSPropsUpdaterNative
// Dependencies: [41, 42, 1705]

// Module 1837 (JSPropsUpdaterNative)
import _createClassDefault from "_createClass" /* 42 */;
import _mod1705 from "module_1705" /* 1705 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let updates;

let closure_4 = { code: "(function pnpm_JSPropsUpdaterNativeTs1(){let[viewTag,jsProps]=this.__closure;global._tagToJSPropNamesMapping[viewTag]=Object.fromEntries(jsProps.map(function(propName){return[propName,true];}));})" };
let closure_5 = { code: "(function pnpm_JSPropsUpdaterNativeTs2(){let[viewTag]=this.__closure;delete global._tagToJSPropNamesMapping[viewTag];})" };
class JSPropsUpdaterNative {
  constructor() {
    _classCallCheck(this, JSPropsUpdaterNative);
  }
}
const entry = {
  key: "registerComponent",
  value: function registerComponent(getComponentViewTag, arg1) {
    let tmp3;
    let tmp4;
    let tmp5;
    const componentViewTag = getComponentViewTag.getComponentViewTag();
    const _tagToComponentMapping = JSPropsUpdaterNative._tagToComponentMapping;
    const result = _tagToComponentMapping.set(componentViewTag, getComponentViewTag);
    let items = [closure_4, componentViewTag, arg1];
    let c0;
    let c1;
    [tmp3, tmp4, tmp5] = items;
    function pnpm_JSPropsUpdaterNativeTs1() {
      JSPropsUpdaterNative._tagToJSPropNamesMapping[c0] = Object.fromEntries(_undefined.map((item) => {
        const items = [item, true];
        return items;
      }));
    }
    const items1 = [tmp4, tmp5];
    pnpm_JSPropsUpdaterNativeTs1.__closure = items1;
    pnpm_JSPropsUpdaterNativeTs1.__workletHash = 5387571609022;
    pnpm_JSPropsUpdaterNativeTs1.__initData = tmp3;
    const obj = _mod1705;
    obj.scheduleOnUI(pnpm_JSPropsUpdaterNativeTs1);
  }
};
let items = [
  entry,
  {
    key: "unregisterComponent",
    value: function unregisterComponent(self) {
      let tmp3;
      let tmp4;
      const componentViewTag = self.getComponentViewTag();
      const _tagToComponentMapping = JSPropsUpdaterNative._tagToComponentMapping;
      _tagToComponentMapping.delete(componentViewTag);
      const items = [closure_5, componentViewTag];
      let c0;
      [tmp3, tmp4] = items;
      function pnpm_JSPropsUpdaterNativeTs2() {
        delete JSPropsUpdaterNative._tagToJSPropNamesMapping[c0];
      }
      const items1 = [tmp4];
      pnpm_JSPropsUpdaterNativeTs2.__closure = items1;
      pnpm_JSPropsUpdaterNativeTs2.__workletHash = 14671416118448;
      pnpm_JSPropsUpdaterNativeTs2.__initData = tmp3;
      const obj = _mod1705;
      obj.scheduleOnUI(pnpm_JSPropsUpdaterNativeTs2);
    }
  },
  {
    key: "updateProps",
    value: function updateProps(arr) {
      const item = arr.forEach((updates) => {
        const _tagToComponentMapping = JSPropsUpdaterNative._tagToComponentMapping;
        updates = updates.updates;
        const value = _tagToComponentMapping.get(updates.tag);
        if (value != null) {
          value.setNativeProps(updates);
        }
      });
    }
  }
];
const tmp2 = _createClassDefault(JSPropsUpdaterNative, items);
tmp2._tagToComponentMapping = new Map();
new Map();
new tmp2();

export default new tmp2();
