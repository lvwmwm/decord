// Module ID: 1661
// Function ID: 1662
// Dependencies: [41, 42, 1662]

// Module 1661
import _createClassDefault from "_createClass" /* 42 */;
import _mod1662 from "module_1662" /* 1662 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let set, set2, set3;

class CSSKeyframesRegistry {
  constructor() {
    _classCallCheck(this, CSSKeyframesRegistry);
    this.cssTextToNames_ = new Map();
    new Map();
    this.nameToKeyframes_ = new Map();
    new Map();
  }
}
const entry = {
  key: "get",
  value: function get(arg0) {
    const self = this;
    const nameToKeyframes_ = this.nameToKeyframes_;
    const value = nameToKeyframes_.get(arg0);
    if (value) {
      return value.keyframesRule;
    } else {
      const cssTextToNames_ = self.cssTextToNames_;
      const value4 = cssTextToNames_.get(arg0);
      let value5;
      if (value4 != null) {
        const iter = value4.values();
        value5 = iter.next().value;
      }
      let tmp4;
      if (value5) {
        const nameToKeyframes_2 = self.nameToKeyframes_;
        const value6 = nameToKeyframes_2.get(value5);
        let keyframesRule;
        if (value6 != null) {
          keyframesRule = value6.keyframesRule;
        }
        tmp4 = keyframesRule;
      }
      return tmp4;
    }
  }
};
let items = [
  entry,
  {
    key: "add",
    value: function add(name, arg1, compoundComponentName) {
      let obj2;
      const self = this;
      const nameToKeyframes_ = this.nameToKeyframes_;
      const value = nameToKeyframes_.get(name.name);
      let tmp2;
      if (value != null) {
        tmp2 = value.usedBy[compoundComponentName];
      }
      if (tmp2) {
        tmp2.add(arg1);
      } else {
        if (value) {
          const _Set2 = Set;
          const items = [arg1];
          const self4 = this;
          const self5 = this;
          const usedBy = value.usedBy;
          usedBy[compoundComponentName] = new Set(items);
          const set1 = new Set(items);
        } else {
          const nameToKeyframes_2 = self.nameToKeyframes_;
          const obj = { keyframesRule: name, usedBy: obj2 };
          obj2 = {};
          const _Set = Set;
          const items1 = [arg1];
          const self2 = this;
          const self3 = this;
          name = name.name;
          set = nameToKeyframes_2.set;
          obj2[compoundComponentName] = new Set(items1);
          set3 = new Set(items1);
          const result = set(name, obj);
        }
        const cssTextToNames_ = self.cssTextToNames_;
        if (!cssTextToNames_.has(name.cssText)) {
          const cssTextToNames_2 = self.cssTextToNames_;
          const _Set3 = Set;
          const self6 = this;
          const self7 = this;
          const cssText = name.cssText;
          set2 = cssTextToNames_2.set;
          const set4 = new Set();
          set2(cssText, set4);
        }
        const cssTextToNames_3 = self.cssTextToNames_;
        const value2 = cssTextToNames_3.get(name.cssText);
        if (value2 != null) {
          value2.add(name.name);
        }
        const normalizedKeyframesConfig = name.getNormalizedKeyframesConfig(compoundComponentName);
        const obj4 = _mod1662;
        obj4.registerCSSKeyframes(name.name, compoundComponentName, normalizedKeyframesConfig);
      }
    }
  },
  {
    key: "remove",
    value: function remove(arg0, arg1, arg2) {
      const self = this;
      const nameToKeyframes_ = this.nameToKeyframes_;
      const value = nameToKeyframes_.get(arg0);
      if (value) {
        value.usedBy[arg2].delete(arg1);
        const tmp3 = arg2;
        if (0 === value.usedBy[arg2].size) {
          delete tmp.usedBy[tmp3];
          const obj2 = _mod1662;
          const result = obj2.unregisterCSSKeyframes(arg0, arg2);
        }
        const _Object = Object;
        if (0 === Object.keys(value.usedBy).length) {
          const nameToKeyframes_2 = self.nameToKeyframes_;
          nameToKeyframes_2.delete(arg0);
          const cssTextToNames_ = self.cssTextToNames_;
          const value2 = cssTextToNames_.get(value.keyframesRule.cssText);
          if (value2) {
            value2.delete(arg0);
            if (0 === value2.size) {
              const cssTextToNames_2 = self.cssTextToNames_;
              cssTextToNames_2.delete(value.keyframesRule.cssText);
            }
          }
        }
      }
    }
  },
  {
    key: "clear",
    value: function clear() {
      const nameToKeyframes_ = this.nameToKeyframes_;
      nameToKeyframes_.clear();
      const cssTextToNames_ = this.cssTextToNames_;
      cssTextToNames_.clear();
    }
  }
];
let tmp2 = new _createClassDefault(CSSKeyframesRegistry, items)();

export default tmp2;
