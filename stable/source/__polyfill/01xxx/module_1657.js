// Module ID: 1657
// Function ID: 1658
// Dependencies: [41, 42]

// Module 1657
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let set;

function subscribersFor(tag, subscribersByTag, retiringByTag) {
  const value = subscribersByTag.get(tag);
  const value2 = retiringByTag.get(tag);
  let tmp4 = value;
  if (value2) {
    set = value2;
    if (value) {
      const _Set = Set;
      const items = [];
      HermesBuiltin.arraySpread(items, value2, HermesBuiltin.arraySpread(items, value, 0));
      const self = this;
      const self2 = this;
      set = new Set(items);
    }
    tmp4 = set;
  }
  return tmp4;
}
class CSSCallbacksRegistry {
  constructor() {
    _classCallCheck(this, CSSCallbacksRegistry);
    this.subscribersByTag = new Map();
    new Map();
    this.retiringByTag = new Map();
    new Map();
  }
}
const entry = {
  key: "register",
  value: function register(arg0, arg1) {
    const retiringByTag = this.retiringByTag;
    const value = retiringByTag.get(arg0);
    if (value != null) {
      value.delete(arg1);
    }
    const subscribersByTag = this.subscribersByTag;
    const value2 = subscribersByTag.get(arg0);
    if (value2) {
      value2.add(arg1);
    } else {
      const _Set = Set;
      const items = [arg1];
      const self = this;
      const self2 = this;
      set = subscribersByTag.set;
      const set1 = new Set(items);
      const result = set(arg0, set1);
    }
  }
};
let items = [
  entry,
  {
    key: "unregister",
    value: function unregister(arg0, arg1) {
      const subscribersByTag = this.subscribersByTag;
      const value = subscribersByTag.get(arg0);
      if (value) {
        value.delete(arg1);
        if (0 === value.size) {
          const subscribersByTag2 = this.subscribersByTag;
          subscribersByTag2.delete(arg0);
        }
      }
    }
  },
  {
    key: "retire",
    value: function retire(arg0, arg1) {
      this.unregister(arg0, arg1);
      const retiringByTag = this.retiringByTag;
      const value = retiringByTag.get(arg0);
      if (value) {
        value.add(arg1);
      } else {
        const _Set = Set;
        const items = [arg1];
        const self = this;
        const self2 = this;
        set = retiringByTag.set;
        const set1 = new Set(items);
        const result = set(arg0, set1);
      }
    }
  },
  {
    key: "dispatch",
    value: function dispatch(arg0) {
      const retiringByTag = this.retiringByTag;
      this.retiringByTag = new Map();
      new Map();
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      if (iter !== undefined) {
        const tmp5 = subscribersFor(nextResult.tag, this.subscribersByTag, retiringByTag);
        const tmp3 = nextResult;
        if (tmp5) {
          const iter2 = tmp5[Symbol.iterator]();
          const nextResult1 = iter2.next();
          if (iter2 !== undefined) {
            const obj = nextResult1;
            try {
              obj.handleCSSEvent(tmp3);
            } catch (tmp15) {
              const _globalThis = globalThis;
              const _ErrorUtils = ErrorUtils;
              _ErrorUtils.reportFatalError(tmp15);
            }
          }
        }
      }
    }
  },
  {
    key: "clear",
    value: function clear() {
      const subscribersByTag = this.subscribersByTag;
      subscribersByTag.clear();
      const retiringByTag = this.retiringByTag;
      retiringByTag.clear();
    }
  }
];
const tmp2 = new _createClassDefault(CSSCallbacksRegistry, items)();

export default new _createClassDefault(CSSCallbacksRegistry, items)();
