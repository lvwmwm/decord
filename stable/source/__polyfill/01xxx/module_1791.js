// Module ID: 1791
// Function ID: 1792
// Dependencies: [32, 41, 42, 1758, 1755, 1761, 1662]

// Module 1791
import _createClassDefault from "_createClass" /* 42 */;
import _mod1662 from "module_1662" /* 1662 */;
import _mod1758 from "module_1758" /* 1758 */;
import _mod1761 from "module_1761" /* 1761 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let tmp2;
const _mod1755 = tmp2(1755);
function nullifyUndefinedValues(buildResult) {
  for (const key10005 in buildResult) {
    if (undefined !== buildResult[key10005]) {
      continue;
    } else {
      buildResult[key10005] = null;
      continue;
    }
    continue;
  }
}
function getPropertyTransitionSettings(nextResult, specificProperties) {
  let tmp = null;
  if (specificProperties) {
    let tmp3;
    if (!specificProperties.specificProperties) {
      let all = specificProperties.settings[nextResult];
      if (all == null) {
        all = specificProperties.settings.all;
      }
      if (all == null) {
        all = null;
      }
      tmp3 = all;
    } else {
      specificProperties = specificProperties.specificProperties;
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
}
class CSSPseudoStylesManager {
  constructor(shadowNodeWrapper, viewTag, propsBuilder, componentName) {
    _classCallCheck(this, CSSPseudoStylesManager);
    this.prevPseudoStylesBySelector = null;
    this.prevTransitionProperties = null;
    this.isRegistered = false;
    this.shadowNodeWrapper = shadowNodeWrapper;
    this.viewTag = viewTag;
    this.propsBuilder = propsBuilder;
    this.componentName = componentName;
  }
}
const entry = {
  key: "update",
  value: function update(prevPseudoStylesBySelector, prevTransitionProperties) {
    function hasRemovedNativeSelector(prevPseudoStylesBySelector, prevPseudoStylesBySelector2) {
      const tmp = prevPseudoStylesBySelector;
      if (tmp) {
        const _Set = Set;
        if (prevPseudoStylesBySelector) {
          const _Object = Object;
          const self3 = this;
          const self4 = this;
          let _Set1 = new _Set(Object.keys(prevPseudoStylesBySelector));
        } else {
          const self = this;
          const self2 = this;
          _Set1 = new _Set();
        }
        const _Object2 = Object;
        const keys = Object.keys(prevPseudoStylesBySelector);
        return keys.some((item) => {
          const NATIVE_PSEUDO_SELECTORS = _mod1761.NATIVE_PSEUDO_SELECTORS;
          const hasItem = NATIVE_PSEUDO_SELECTORS.has(item) && !_Set1.has(item);
          return hasItem;
        });
      } else {
        return false;
      }
    }
    let self = this;
    let tmp = require;
    const obj = _mod1758;
    if (!obj.deepEqual(prevPseudoStylesBySelector, this.prevPseudoStylesBySelector)) {
      self.prevPseudoStylesBySelector = prevPseudoStylesBySelector;
      self.prevTransitionProperties = prevTransitionProperties;
      let isRegistered = self.isRegistered;
      if (prevPseudoStylesBySelector) {
        if (isRegistered) {
          isRegistered = hasRemovedNativeSelector(self.prevPseudoStylesBySelector, prevPseudoStylesBySelector);
        }
        if (isRegistered) {
          self.detach();
        }
        let result = null;
        if (prevTransitionProperties) {
          const tmp2Result = _mod1755;
          result = tmp2Result.normalizeCSSTransitionProperties(prevTransitionProperties);
        }
        const obj2 = {};
        let _Object = Object;
        const entries = Object.entries(prevPseudoStylesBySelector);
        const tmp15 = entries[Symbol.iterator]();
        while (tmp15 !== undefined) {
          let tmp20 = _slicedToArray(tmp17, 2);
          let defaultStyle = tmp20[1].defaultStyle;
          let first = tmp20[0];
          let NATIVE_PSEUDO_SELECTORS = _mod1761.NATIVE_PSEUDO_SELECTORS;
          if (NATIVE_PSEUDO_SELECTORS.has(first)) {
            let _Object2 = Object;
            let merged = Object.assign(obj2, defaultStyle);
          }
          continue;
        }
        const propsBuilder = self.propsBuilder;
        const buildResult = propsBuilder.build(obj2, { includeUnprocessed: true });
        nullifyUndefinedValues(buildResult);
        const items = [];
        const _Object3 = Object;
        const entries1 = Object.entries(prevPseudoStylesBySelector);
        for (const item10081 of entries1) {
          let tmp35 = _slicedToArray(item10081, 2);
          let first1 = tmp35[0];
          let selectorStyle = tmp35[1].selectorStyle;
          let tmp37 = first1;
          let NATIVE_PSEUDO_SELECTORS2 = _mod1761.NATIVE_PSEUDO_SELECTORS;
          if (NATIVE_PSEUDO_SELECTORS2.has(first1)) {
            let arr = items.push(self.buildPseudoStyleEntry(tmp37, selectorStyle, buildResult, result));
          }
          continue;
        }
        if (items.length > 0) {
          const obj3 = { defaultStyle: buildResult, selectors: items };
          const obj5 = _mod1662;
          obj5.registerPseudoStyles(self.shadowNodeWrapper, obj3);
          self.isRegistered = true;
        }
      } else if (isRegistered) {
        self.detach();
      }
    } else {
      _mod1758;
    }
  }
};
let items = [
  entry,
  {
    key: "unmountCleanup",
    value: function unmountCleanup() {
      const self = this;
      if (this.isRegistered) {
        self.detach();
      }
      self.prevPseudoStylesBySelector = null;
      self.prevTransitionProperties = null;
    }
  },
  {
    key: "detach",
    value: function detach() {
      const obj = _mod1662;
      const result = obj.unregisterPseudoStyles(this.viewTag);
      this.isRegistered = false;
    }
  },
  {
    key: "buildPseudoStyleEntry",
    value: function buildPseudoStyleEntry(selector, selectorStyle, buildResult, result) {
      let flag;
      let items;
      let num;
      let num2;
      let str;
      const propsBuilder = this.propsBuilder;
      buildResult = propsBuilder.build(selectorStyle, { includeUnprocessed: true });
      nullifyUndefinedValues(buildResult);
      const obj = {};
      const keys = Object.keys(buildResult);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = getPropertyTransitionSettings(nextResult, result);
        let tmp7 = tmp6;
        let obj2 = { value: items, duration: num, delay: num2, timingFunction: str, allowDiscrete: flag };
        items = [buildResult[nextResult], buildResult[nextResult]];
        num = undefined;
        if (tmp6 != null) {
          num = tmp6.duration;
        }
        if (num == null) {
          num = 0;
        }
        num2 = undefined;
        if (tmp7 != null) {
          num2 = tmp7.delay;
        }
        if (num2 == null) {
          num2 = 0;
        }
        str = undefined;
        if (tmp7 != null) {
          str = tmp7.timingFunction;
        }
        if (str == null) {
          str = "ease";
        }
        flag = undefined;
        if (tmp7 != null) {
          flag = tmp7.allowDiscrete;
        }
        if (flag == null) {
          flag = false;
        }
        obj[nextResult] = obj2;
        continue;
      }
      return { selector, selectorStyle: buildResult, transition: obj };
    }
  }
];

export default _createClassDefault(CSSPseudoStylesManager, items);
