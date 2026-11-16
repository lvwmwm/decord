// Module ID: 1793
// Function ID: 1794
// Dependencies: [41, 42, 1758, 1665, 1761]

// Module 1793
import _createClassDefault from "_createClass" /* 42 */;
import _mod1665 from "module_1665" /* 1665 */;
import _mod1758 from "module_1758" /* 1758 */;
import _mod1761 from "module_1761" /* 1761 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class CSSTransitionsManager {
  constructor(shadowNodeWrapper, viewTag) {
    _classCallCheck(this, CSSTransitionsManager);
    this.prevProps = null;
    this.propsWithTransitions = new Set();
    this.hasTransition = false;
    this.appliedEventMask = 0;
    this.viewTag = viewTag;
    this.shadowNodeWrapper = shadowNodeWrapper;
    new Set();
  }
}
const entry = {
  key: "update",
  value: function update(prevTransitionProperties, arg1) {
    let num = arg2;
    if (arg2 === undefined) {
      num = 0;
    }
    let result = prevTransitionProperties;
    if (result) {
      const obj = _mod1758;
      result = obj.normalizeCSSTransitionProperties(prevTransitionProperties);
    }
    let tmp4 = arg1;
    let obj2 = arg1;
    if (arg1 == null) {
      obj2 = {};
    }
    const self = this;
    const prevProps = this.prevProps;
    if (tmp4 == null) {
      tmp4 = null;
    }
    self.prevProps = tmp4;
    if (prevProps) {
      if (result) {
        const result1 = self.processTransitionConfig(prevProps, obj2, result);
        const _Object = Object;
        if (Object.keys(result1).length) {
          self.appliedEventMask = num;
          const obj4 = _mod1665;
          obj4.runCSSTransition(self.shadowNodeWrapper, result1, num);
          self.hasTransition = true;
        } else {
          const tmp8 = self.hasTransition && num !== self.appliedEventMask;
          if (tmp8) {
            self.appliedEventMask = num;
            const obj3 = _mod1665;
            obj3.runCSSTransition(self.shadowNodeWrapper, {}, num);
          }
        }
        return false;
      }
    }
    let flag = self.hasTransition;
    if (flag) {
      self.detach();
      flag = true;
    }
    return flag;
  }
};
let items = [
  entry,
  {
    key: "unmountCleanup",
    value: function unmountCleanup() {

    }
  },
  {
    key: "detach",
    value: function detach() {
      const obj = _mod1665;
      const result = obj.unregisterCSSTransition(this.viewTag);
      const propsWithTransitions = this.propsWithTransitions;
      propsWithTransitions.clear();
      this.hasTransition = false;
      this.appliedEventMask = 0;
    }
  },
  {
    key: "processTransitionConfig",
    value: function processTransitionConfig(prevProps, obj, specificProperties) {
      const self = this;
      let closure_1 = prevProps;
      let closure_2 = obj;
      let closure_3 = specificProperties;
      obj = {};
      specificProperties = specificProperties.specificProperties;
      function isAllowedProperty(key10014) {
        let hasItem = !specificProperties;
        if (specificProperties) {
          hasItem = obj.has(key10014);
        }
        return hasItem;
      }
      function getPropertySettings(arg0) {

      }
      function triggerTransition(key10014) {
        let items;
        if (typeof getPropertySettings === "function") {
          let all = closure_3.settings[key10014];
          if (all == null) {
            all = closure_3.settings.all;
          }
          obj = { value: items };
          const merged = Object.assign(all);
          items = [closure_1[key10014], closure_2[key10014]];
          tmp[key10014] = obj;
          const propsWithTransitions = self.propsWithTransitions;
          propsWithTransitions.add(key10014);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      for (const key10014 in obj) {
        let isAllowedPropertyResult = isAllowedProperty(key10014);
        if (isAllowedPropertyResult) {
          let tmp = require;
          let obj2 = _mod1761;
          isAllowedPropertyResult = !obj2.deepEqual(obj[key10014], prevProps[key10014]);
        }
        if (!isAllowedPropertyResult) {
          continue;
        } else {
          let triggerTransitionResult = triggerTransition(key10014);
          continue;
        }
        continue;
      }
      const iter = self.propsWithTransitions[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        if (!isAllowedProperty(nextResult)) {
          obj[tmp6] = null;
          let propsWithTransitions = self.propsWithTransitions;
          let deleteResult = propsWithTransitions.delete(tmp6);
        }
        continue;
      }
      for (const key10041 in prevProps) {
        let isAllowedPropertyResult1 = isAllowedProperty(key10041) && !(key10041 in obj);
        if (!isAllowedPropertyResult1) {
          continue;
        } else {
          let triggerTransitionResult1 = triggerTransition(key10041);
          continue;
        }
        continue;
      }
      return obj;
    }
  }
];

export default _createClassDefault(CSSTransitionsManager, items);
